import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";

interface CusProps {
    Title: string;
    Desc: string;
    image?: string;
    link: string;
}

export function MangaCard({ Title, Desc, image = "/images/COVER1.jpg", link }: CusProps) {
    return (
        <Link href={link}>
            <div className="relative group hover:shadow-2xl cursor-pointer overflow-hidden text-gray-50 h-80 w-64 rounded-xl duration-500 m-4">
                {/* Card Background Image */}
                <div className="relative w-full h-full">
                    <img
                        src={image}
                        alt="Cover"
                        className="absolute w-full h-full object-cover top-0 z-[-1] group-hover:scale-110 group-hover:grayscale-[30%] group-hover:duration-500 duration-500 rounded-xl"
                    />
                </div>

                {/* Fog-Like Reveal Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 group-hover:backdrop-blur-lg bg-gradient-to-b from-transparent via-gray-900 to-black group-hover:duration-500 transition-all">
                    <div
                        className="absolute inset-0 z-0 bg-cover bg-no-repeat bg-center opacity-20"
                        style={{
                            backgroundImage:
                                "radial-gradient(circle, rgba(255,255,255,0.4) 10%, rgba(0,0,0,0) 80%)",
                        }}
                    />
                </div>

                {/* Content Reveal on Hover */}
                <div className="absolute z-10 bottom-0 w-full h-full p-4 flex flex-col justify-end gap-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-10 duration-500 transition-all">   
                    <span className="text-gray-50 font-bold text-lg">{Title}</span>
                    <p className="text-neutral-200 text-sm line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
                        {Desc}
                    </p>
                </div>
            </div>
        </Link>
    );
}

export function MangaCardLoader() {
    return (
        <div className="relative group hover:shadow-xl cursor-pointer overflow-hidden text-gray-50 h-80 w-64 rounded-xl hover:duration-500 duration-500 m-4">
            <div className="relative w-full h-full">
                <Skeleton className="absolute w-full h-full object-cover top-0 -z-[1] rounded-xl" />
            </div>
            <div className="absolute bg-gradient-to-t from-black via-gray-900 to-transparent opacity-0 group-hover:opacity-90 group-hover:backdrop-blur-md bottom-0 w-full h-full p-4 flex flex-col justify-end gap-2 duration-500">
                <Skeleton className="h-6 w-48 bg-gray-300" />
                <Skeleton className="h-3 w-full bg-gray-200" />
            </div>
        </div>
    );
}
