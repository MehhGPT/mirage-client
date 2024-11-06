import connectMongoDB from "@/lib/mongo";
import { Page, Story } from "@/models/model";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(request: Request, response: NextApiResponse) {
	try {
		await connectMongoDB();

		const storyId = request.headers.get('storyid') as string;
		const pageId = request.headers.get('pageid') as string;


		const stories = await Page.find({storyId: storyId, pageId: pageId});

		return new NextResponse(JSON.stringify(stories), { status: 200 });
	} catch (error) {
		console.log("Error fetching comments:", error);
		return new NextResponse(JSON.stringify({ message: "An error occurred while fetching Stories" }), { status: 500 });
	}
}