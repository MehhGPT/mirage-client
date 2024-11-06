"use client"; // Marks the component as a Client Component

import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Berserk from '@/images/COVER1.jpg';
import { usePathname, useRouter } from 'next/navigation'; // Correct import for useRouter
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { StoryCreatorAddress } from "@/lib/Addresses";
import NFTABI from "@/lib/abis/NFT.json";
import { ethers } from 'ethers';
import Link from 'next/link';

// storyIdToContract

function pageData() {
    return [1, 2, 3];
}

async function getStory(storyId: string) {
    try {
        const res = await fetch('/api/getStory', {
            cache: "reload",
            method: "GET",
            headers: {
                "storyId": storyId
            }
        });

        if (!res.ok) {
            throw new Error("Failed to Fetch Stories")
        }

        return res.json();

    } catch (error) {
        console.log(error);
    }
}

async function getPageData(storyId: string, pageId: string) {
    try {
        const res = await fetch('/api/getPageData', {
            cache: "reload",
            method: "GET",
            headers: {
                "storyId": storyId,
                "pageId": pageId
            }
        });

        if (!res.ok) {
            throw new Error("Failed to Fetch Stories")
        }

        return res.json();

    } catch (error) {
        console.log(error);
    }
}

export default function Component() {
    const router = useRouter();
    const path = usePathname();
    const [pageData, setPageData] = useState<string[]>([]);
    const basePath = path?.split('/').slice(0, 3).join('/');
    const [storyId, setStoryId] = useState<string>("");
    const [storyAddress, setStoryAddress] = useState<string>("");
    const [storyInfo, setSoryInfo] = useState([]);
    const [pageId, setPageId] = useState<string>("");
    const [storyName, setStoryName] = useState<string>("");
    const [Creator, setCreator] = useState<string>("");
    const [childrens, setChildrens] = useState<number[]>([]);
    const [loading, setLoading] = useState(true);

    useLayoutEffect(() => {
        if (loading) {
            setLoading(false);
        }
    });

    const provider = new ethers.JsonRpcProvider("https://polygon-amoy.g.alchemy.com/v2/zoNm-CgB1rQIn0DG1XG0hRHV0hgFW71X")

    async function fetchChildPages(parentPageId: number) {
        const contract = new ethers.Contract(storyAddress, NFTABI, provider);
        try {
            if (childrens.length == 0) {
                const pages = await contract.getChildPages(parentPageId);
                const pageIds = Object.values(pages).map((pageId) => Number(pageId));
                setChildrens(pageIds);
            }
        } catch (error) {
            console.log("Error fetching child pages:", error);
        }
    };

    useEffect(() => {
        if (path) {
            // Split the path and extract the storyId
            const segments = path.split('/');
            const extractedStoryId = segments[2]; // 2nd index after '/reader'
            setStoryId(extractedStoryId);
            const extpageId = segments[3];
            setPageId(extpageId);
        }
    }, [path]);

    useEffect(() => {
        if (!loading) {
            const fetchStoriesData = async () => {
                const data = await getStory(storyId);
                setSoryInfo(data);
                storyInfo.map((data: any) => {
                    setStoryAddress(data?.storyAddress)
                    setStoryName(data?.storyName)
                    setCreator(data?.creatorAddress)
                });

            }

            setTimeout(() => {
                fetchStoriesData();
            }, 5000);
        }
    });

    // Swipe state tracking
    const touchStartX = useRef<number>(0);
    const touchEndX = useRef<number>(0);

    const handleCardClick = (storyId: number) => {
        router.push(`${basePath}/${storyId}`);
    };

    const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
        touchStartX.current = event.touches[0].clientX;
    };

    const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
        touchEndX.current = event.changedTouches[0].clientX;
        handleSwipe();
    };

    const handleSwipe = () => {
        if (touchEndX.current < touchStartX.current - 50) {
            // Swipe left
            handleCardClick(Math.floor(Math.random() * 100));
        }
        if (touchEndX.current > touchStartX.current + 50) {
            // Swipe right
            handleCardClick(Math.floor(Math.random() * 100));
        }
    };

    useEffect(() => {
        setTimeout(() => {
            fetchChildPages(Number(pageId));
        }, 10000);
    });

    useEffect(() => {
        const fetchPageData = async () => {
            const newPageData = await getPageData(storyId, pageId)
            let dataMain: string[] = [];
            newPageData.map((data: any) => {
                console.log(data?.pageLink);
                dataMain.push(data?.pageLink)
            })
            console.log(dataMain);
            setPageData(dataMain);
        }
        fetchPageData();
    }, [path, storyAddress, Creator]);

    return (
        <div className="bg-dark-800 text-dark p-6">
            <div>
                <div>
                    Story: {storyName}
                </div>
                <div>
                    Creator: {Creator}
                </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full">
                {
                    pageData.map((data: any, index: any) => (
                        <div className="m-5" key={index}>
                            <img src={`${process.env.NEXT_PUBLIC_URL_PROTOCOL}://${data}`} alt="none" className="w-[90svw] sm:w-[80vw] md:w-[70vw]" />
                        </div>
                    ))
                }

                <div className="flex justify-between items-center w-full flex-col">
                    <h2 className="text-xl font-bold mb-4 w-full text-center">Next Stories</h2>
                    {
                        childrens.length > 0 ?
                            <div className="flex w-full items-center justify-evenly">
                                {childrens.map((data: any) => (
                                    <div
                                        className="flex w-full items-center justify-evenly"
                                        onTouchStart={handleTouchStart}
                                        onTouchEnd={handleTouchEnd}
                                        id={data}
                                    >
                                        <Card className="bg-light w-[70%] p-6 cursor-pointer" onClick={() => handleCardClick(data)}>
                                            <CardHeader>
                                                <CardTitle className="text-xl text-center">Next Page: {data}</CardTitle>
                                            </CardHeader>
                                        </Card>
                                    </div>
                                ))}
                            </div>
                            :
                            <div className="flex justify-center items-center w-full">
                                No more Pages. Create your own Page<Link href={process.env.NEXT_PUBLIC_CREATOR_SITE as string} className='p-1'> here</Link>
                            </div>

                    }
                </div>
            </div>
        </div>
    );
}
