import { addRowToSheet2 } from "@/server/sheets/sheetsSKJ.mjs";
import { NextResponse } from "next/server";

export async function POST(request) {
  const data = await request.json()
  const remoteWebsiteURL = "http://10.6.4.100/?open"
  console.log(data)
  const { date, name, nim, selectedOption } = data
  await addRowToSheet2(date, name, nim, selectedOption)


  try {
    const response = await fetch(remoteWebsiteURL, {
      method: "GET",
    });

    if (response.ok) {
      // Successfully sent the '/open' request to the remote website.
      console.log("Successfully opened the URL on the remote website.");
    } else {
      // Handle errors or non-OK responses from the remote website.
      console.error("Error opening the URL on the remote website:", response.status, response.statusText);
    }
  } catch (error) {
    // Handle network or other errors.
    console.error("Error opening the URL on the remote website:", error);
  }

  return NextResponse.json({ data })
}