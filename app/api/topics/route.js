import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function POST(request){
    const {title,description} = await request.json();
    await connectMongoDB();
    await Topic.create({title, description});
    return NextResponse.json({messsage: "Topic Created"},{status: 201})
}

export async function GET(request){
    await connectMongoDB();
    const topics = await Topic.find();
    return NextResponse.json(topics); 
}

export async function DELETE(request){
    const id = request.nextUrl.searchParams.get("id");
    // console.log("request ----",id);
    await connectMongoDB();
    await Topic.findByIdAndDelete(id);
    if(!id){
        return NextResponse.json({messsage: "Topic Not Found"},{status:404});
    }
    return NextResponse.json({messsage: "Topic Deleted"},{status:true});

}
