import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";

export const GET = async (request) => {
  try {
    await connect();

    const posts = await Post.find();
    return new NextResponse(JSON.stringify(posts), { statue: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { statue: 500 });
  }
};
