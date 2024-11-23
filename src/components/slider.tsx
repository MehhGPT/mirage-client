"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel"
import Link from "next/link"

interface Story {
	storyAddress: string
	storyId: number
	creatorAddress: string
	storyName: string
	storyDetails: string
	coverImage: string
}

interface StoryListProps {
	stories: Story[] | []
}

export function Slider({ stories }: StoryListProps) {
	const plugin = React.useRef(
		Autoplay({ delay: 5000 })
	)

	if (stories.length !== 0) {
		return (
			<div className="relative w-full h-full">
				<Carousel
					plugins={[plugin.current]}
					className="w-full h-full overflow-hidden"
				>
					<CarouselContent className="h-full">
						{stories.map((element: Story) => (
							<CarouselItem
								key={element.storyId}
								className="flex items-center justify-center h-full"
							>
								<Link href={`/reader/${element.storyId}/1`} className="w-full h-full">
									<div className="w-full h-full p-5">
										<Card className="w-full h-[375px] shadow-lg overflow-hidden relative group">
											{/* Background Image */}
											<div
												className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110"
												style={{
													backgroundImage: `url(${process.env.NEXT_PUBLIC_URL_PROTOCOL}://${element.coverImage})`,
												}}
											/>

											{/* Overlay */}
											<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50"></div>

											{/* Content */}
											<CardContent className="relative z-10 flex flex-col items-start justify-end h-full p-6 text-white">
												<h3 className="text-xl font-bold">{element.storyName}</h3>
												<p className="text-sm text-gray-200 mt-2">
													{element.storyDetails}
												</p>
											</CardContent>
										</Card>
									</div>
								</Link>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</div>
		)
	}

	return (
		<Carousel plugins={[plugin.current]} className="w-full h-full overflow-hidden">
			<CarouselContent className="h-full">
				{Array.from({ length: 5 }).map((_, index) => (
					<CarouselItem key={index} className="flex items-center justify-center h-full">
						<div className="w-full h-full p-5">
							<Card className="w-full shadow-lg h-[375px]">
								<Skeleton className="flex items-center justify-center h-full">
									<p className="text-4xl font-semibold">{index + 1}</p>
								</Skeleton>
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
