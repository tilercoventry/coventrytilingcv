import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { fullName, email, phone, serviceType, propertyType, estimatedM2 } = body

    if (!fullName || !email || !phone || !serviceType) {
      return NextResponse.json(
        { error: 'Missing required enterprise lead fields.' },
        { status: 400 }
      )
    }

    const newLead = await prisma.lead.create({
      data: {
        fullName,
        email,
        phone,
        serviceType,
        propertyType,
        estimatedM2: estimatedM2 ? parseFloat(estimatedM2) : null,
      },
    })

    return NextResponse.json({ success: true, leadId: newLead.id }, { status: 201 })
  } catch (error) {
    console.error('Lead generation transaction failed:', error)
    return NextResponse.json(
      { error: 'Internal Server Error. System fault logged.' },
      { status: 500 }
    )
  }
}
