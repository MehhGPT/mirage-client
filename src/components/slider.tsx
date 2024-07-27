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

export function Slider() {
	const plugin = React.useRef(
		Autoplay({ delay: 3000, stopOnInteraction: true })
	)

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
							<Card className="w-full h-[375px]">
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
