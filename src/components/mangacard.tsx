import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";

interface CusProps {
    Title: string;
    Desc: string;
    image?:  string;
    link: string;
}

export function MangaCard({ Title, Desc, image= "/images/COVER1.jpg", link }: CusProps) {
    return (
        <Link href={link}>
            <div className="relative group hover:shadow-xl cursor-pointer overflow-hidden text-gray-50 h-72 w-max rounded hover:duration-500 duration-500 m-[1rem]">
                <div className="w-56 h-72 text-gray-800">
                    <img src={image} alt="Cover" className="absolute w-full h-full object-cover top-0 -z-[1] group-hover:grayscale group-hover:duration-500 duration-500" />
                </div>
                <div className="absolute bg-gray-50 shadow-md shadow-black group-hover:bg-[#cccccca2] group-hover:backdrop-blur-md -bottom-24 w-56 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-500 duration-500">
                    <span className="text-lime-400 font-bold text-xs"></span>
                    <span className="text-gray-800 font-bold text-3xl">{Title}</span>
                    <p className="text-neutral-800">
                        {Desc}
                    </p>
                </div>
            </div>
        </Link>
    );
}


export function MangaCardLoader() {
    return (
        <Link href="#">
            <div className="relative group hover:shadow-xl cursor-pointer overflow-hidden text-gray-50 h-72 w-max rounded hover:duration-500 duration-500 m-[1rem]">
                <div className="w-56 h-72 text-gray-800">
                    <Skeleton className="absolute w-full h-full object-cover top-0 -z-[1]" />
                </div>
                <div className="absolute bg-gray-50 shadow-md shadow-black group-hover:bg-[#cccccca2] group-hover:backdrop-blur-md -bottom-24 w-56 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-500 duration-500">
                    <Skeleton className="h-6 w-24 bg-lime-400" />
                    <Skeleton className="h-8 w-48 bg-gray-300" />
                    <Skeleton className="h-4 w-full bg-gray-200" />
                </div>
            </div>
        </Link>
    );
}

