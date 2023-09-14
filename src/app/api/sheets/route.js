import { addRowToSheet } from "@/server/sheets.mjs";
import { NextResponse } from "next/server";

export async function POST(request){
  const data = await request.json()
  console.log(data)
  const {nama, nim, action, date} = data
  addRowToSheet(nama, nim, action, date)
  
  return NextResponse.json({data})
}