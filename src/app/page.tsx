'use client'
import MangaCard from "@/components/mangacard";
import { Slider } from "@/components/slider";
import { useEffect, useState } from "react";

async function getStories() {
    try {
        const res = await fetch('/api/fetchStories', {
            cache: "no-store",
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
    const [stories, setStories] = useState([]);

    useEffect(() => {
        const fetchStoriesData = async () => {
            const data = await getStories();
            setStories(data)
        }

        fetchStoriesData();
        const intervalId = setInterval(fetchStoriesData, 10 * 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="flex items-center justify-center flex-col">
            <Slider stories={stories} />
            <div className=" flex flex-wrap flex-row w-[90%] items-center justify-center">
                {stories.map((element: any) => (
                    <div id={element._id} key={element._id}>
                        <MangaCard link={`/reader/${element.storyId}/1`} Desc={element.storyDetails} image={`http://${element.coverImage}`} Title={element.storyName} />
                        {/* <img src={`http://${element.coverImage}`} alt="cover" /> */}
                    </div>
                ))}
            </div>
        </div>
    );
}
