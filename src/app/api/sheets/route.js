import { addRowToSheet } from "@/server/sheets.mjs";
import { NextResponse } from "next/server";

export async function POST(request){
  const data = await request.json()
  console.log(data)
  const {date, nama, nim, time, action} = data
  await addRowToSheet(date, nama, nim, time, action)
  
  return NextResponse.json({data})
}