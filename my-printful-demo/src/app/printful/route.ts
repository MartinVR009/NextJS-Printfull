import { NextResponse } from "next/server";

export async function GET() {
  const apiUrl = process.env.PRINTFUL_API_URL!;
  const token = process.env.PRINTFUL_API_KEY!;
  const storeId = process.env.PRINTFUL_STORE_ID!;

  const res = await fetch(`${apiUrl}/store`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "X-PF-Store-Id": storeId,
    },
  });

  const data = await res.json();
  return NextResponse.json(data);
}


