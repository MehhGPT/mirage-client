import connectMongoDB from "@/lib/mongo";
import { Story } from "@/models/model";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(request: Request, response: NextApiResponse) {
	try {
		await connectMongoDB();

		const stories = await Story.find();

		return new NextResponse(JSON.stringify(stories), { status: 200 });
	} catch (error) {
		console.log("Error fetching comments:", error);
		return new NextResponse(JSON.stringify({ message: "An error occurred while fetching Stories" }), { status: 500 });
	}
}