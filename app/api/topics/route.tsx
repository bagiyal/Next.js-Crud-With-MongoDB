import connectMongodb from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function POST(request){
    const {title,description} = await request.json();
    await connectMongodb();
    await Topic.create({title, description});
    return NextResponse.json({messsage: "Topic Created"},{status: 201})
}