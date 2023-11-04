// import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import axios from "axios";

export type BikeStation = {
  sno: string;
  sna: string;
  tot: number;
  sbi: number;
  sarea: string;
  mday: string;
  lat: number;
  lng: number;
  ar: string;
  sareaen: string;
  snaen: string;
  aren: string;
  bemp: number;
  act: string;
  srcUpdateTime: string;
  updateTime: string;
  infoTime: string;
  infoDate: string;
};

export async function GET(
  req: Request
) {
  try {
    // const { userId } = auth();
    // if (!userId) {
    //     return new NextResponse("Unauthorized", { status: 401 });
    // }
    const response = await axios.get('https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json');
    if (response.status !== 200) {
      return new NextResponse("Internal error", { status: 500 });
    }
    const transformedData = response.data.map((item: BikeStation) => {
      return {
        sarea: item.sarea,
        sna: item.sna.replace('YouBike2.0_', ''),
        sbi: item.sbi,
        bemp: item.bemp
      };
    });

    return NextResponse.json(transformedData);
  } catch (error) {
    console.log("[YOUBIKE_ERROR]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}