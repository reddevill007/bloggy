import { NextResponse } from "next/server";
import connnect from "@/utils/db";
import Post from "@/models/Post";

export const GET = async (request) => {
  try {
    await connect();

    const posts = await Post.find();

    return new NextResponse(posts, { statue: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { statue: 500 });
  }
};
