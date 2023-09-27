import { addRowToSheet2 } from "@/server/sheets.mjs";
import { NextResponse } from "next/server";

export async function POST(request){
  const data = await request.json()
  console.log(data)
  const {date, name, nim, selectedOption} = data
  await addRowToSheet2(date, name, nim, selectedOption)
  
  return NextResponse.json({data})
}