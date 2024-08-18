import { getPhotoById } from "@/lib/photo-data";
import { NextResponse } from "next/server";

export async function GET(_request,{params}) {
    const data = getPhotoById(params.id)
    return NextResponse.json(data)
}