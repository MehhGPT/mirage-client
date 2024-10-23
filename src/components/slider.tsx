"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel"

interface Story {
	storyAddress: String,
	storyId: Number,
	creatorAddress: String,
	storyName: String,
	storyDetails: String,
	coverImage: String,
}

interface StoryListProps {
	stories: Story[] | [];
}

export function Slider({ stories }: StoryListProps) {
	const plugin = React.useRef(
		Autoplay({ delay: 3000, stopOnInteraction: true })
	)

	if (stories.length !== 0) {

		return (
			<Carousel
				plugins={[plugin.current]}
				className="w-full h-full overflow-hidden -z-50"
			>
				<CarouselContent className="h-full">
					{stories.map((element: any) => (
						<CarouselItem key={element._id} className="flex items-center justify-center h-full">
							<div className="w-full h-full p-5">
								<Card className="w-full shadow-lg h-[375px] overflow-hidden">
									<CardContent className="flex items-center justify-start h-full">
										<div className="h-full w-[40%] flex items-center justify-center">
											<img src={`http://${element.coverImage}`} alt="cover" className="w-full h-full object-cover" />
										</div>
										<div>
											{element.storyName}
										</div>
									</CardContent>
								</Card>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		)
	}

	return (
		<Carousel
			plugins={[plugin.current]}
			className="w-full h-full overflow-hidden -z-50"
		//   onMouseEnter={plugin.current.stop}
		//   onMouseLeave={plugin.current.reset}
		>
			<CarouselContent className="h-full">
				{Array.from({ length: 5 }).map((_, index) => (
					<CarouselItem key={index} className="flex items-center justify-center h-full">
						<div className="w-full h-full p-5">
							<Card className="w-full shadow-lg h-[375px]">
								<CardContent className="flex items-center justify-center h-full">
									<span className="text-4xl font-semibold">{index + 1}</span>
								</CardContent>
							</Card>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	)
}
