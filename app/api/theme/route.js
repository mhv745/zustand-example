import { NextResponse } from 'next/server'

export async function GET(request) {
  await wait(3000)
  console.log("Service Theme")
  return NextResponse.json({color: "dark"})
}

const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms))
