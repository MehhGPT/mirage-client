'use client'
import { MangaCard, MangaCardLoader } from "@/components/mangacard";
import { Slider } from "@/components/slider";
import { useEffect, useLayoutEffect, useState } from "react"
import { FullScreenLoader } from "./loader";

async function getStories() {
    try {
        const res = await fetch('/api/fetchStories', {
            cache: "reload",
            method: "GET"
        });

        if (!res.ok) {
            throw new Error("Failed to Fetch Stories")
        }

        return res.json();

    } catch (error) {
        console.log(error);
    }
}

async function getTopStories() {
    try {
        const res = await fetch('/api/getTopStories', {
            cache: "reload",
            method: "GET"
        });

        if (!res.ok) {
            throw new Error("Failed to Fetch Stories")
        }

        return res.json();

    } catch (error) {
        console.log(error);
    }
}

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [stories, setStories] = useState([]);
    const [topStories, setTopStories] = useState([]);

    useLayoutEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 4000)
    },[]);

    useEffect(() => {
        const fetchStoriesData = async () => {
            const StoryList = await getStories();
            const TopStory = await getTopStories();
            setStories(StoryList)
            setTopStories(TopStory)
        }

        fetchStoriesData();
        const intervalId = setInterval(fetchStoriesData, 10 * 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            {isLoading && <FullScreenLoader />}
            {!isLoading &&
                <div className="flex items-center justify-center flex-col">
                    <Slider stories={topStories} />
                    {
                        stories.length === 0 ?
                            <div className=" flex flex-wrap flex-row w-[90%] items-center justify-center">
                                <MangaCardLoader />
                                <MangaCardLoader />
                                <MangaCardLoader />
                                <MangaCardLoader />
                            </div>
                            :
                            <div className=" flex flex-wrap flex-row w-[90%] items-center justify-center">
                                {stories.map((element: any) => (
                                    <div id={element._id} key={element._id}>
                                        <MangaCard link={`/reader/${element.storyId}/1`} Desc={element.storyDetails} image={`${process.env.NEXT_PUBLIC_URL_PROTOCOL}://${element.coverImage}`} Title={element.storyName} />
                                        {/* <img src={`http://${element.coverImage}`} alt="cover" /> */}
                                    </div>
                                ))}
                            </div>
                    }
                </div>
            }
        </>
    );
}
