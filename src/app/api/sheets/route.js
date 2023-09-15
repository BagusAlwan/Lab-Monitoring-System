import { addRowToSheet } from "@/server/sheets.mjs";
import { NextResponse } from "next/server";

export async function POST(request){
  const data = await request.json()
  console.log(data)
  const {date, nama, nim, action, time} = data
  await addRowToSheet(date, nama, nim, action, time)
  
  return NextResponse.json({data})
}