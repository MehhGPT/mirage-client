"use client"; // Marks the component as a Client Component

import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Berserk from '@/images/COVER1.jpg';
import { useRouter } from 'next/navigation'; // Correct import for useRouter
import { useEffect, useRef } from 'react';

function pageData() {
  return [1, 2, 3];
}

export default function Component() {
  const router = useRouter();
  const pageDataVal = pageData();
  
  // Swipe state tracking
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const handleCardClick = (storyId: number) => {
    router.push(`/story/${storyId}`);
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
      handleCardClick(3);
    } else if (touchEndX.current > touchStartX.current + 50) {
      // Swipe right
      handleCardClick(2);
    }
  };

  return (
    <div className="bg-dark-800 text-dark p-6">
      <div>
        Social, Message
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        {
          pageDataVal.map((index) => (
            <div className="m-5" key={index}>
              <Image src={Berserk} alt="none" className="w-[90svw] sm:w-[80vw] md:w-[70vw]" />
            </div>
          ))
        }

        <div className="flex justify-between items-center w-full mt-10">
          <h2 className="text-xl font-bold mb-4 w-full text-center">Next Stories</h2>
          <div 
            className="flex space-x-4 w-full" 
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <Card className="bg-light w-1/2 p-6 cursor-pointer" onClick={() => handleCardClick(2)}>
              <CardHeader>
                <CardTitle className="text-xl">Next Story 2</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">Description of the next story goes here.</p>
              </CardContent>
            </Card>
            <Card className="bg-light w-1/2 p-6 cursor-pointer" onClick={() => handleCardClick(3)}>
              <CardHeader>
                <CardTitle className="text-xl">Next Story 3</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">Description of the next story goes here.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
