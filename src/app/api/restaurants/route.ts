import { getRestaurants } from "@/app/lib/data";
import { NextResponse } from "next/server";

// Due to error Access to XMLHttpRequest at 'https://nextjs-orpin-omega-98.vercel.app/api/restaurants' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
// this API is for local env only
export const GET = async (req: Request, res: Response) => {
  try {
    const restaurants = getRestaurants();

    return NextResponse.json([...restaurants], {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({ message: "Error: ", error }.error, {
      status: 500,
    });
  }
};
