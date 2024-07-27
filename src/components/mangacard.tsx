import Image, { StaticImageData } from "next/image";

interface CusProps {
    Title: string;
    Desc: string;
    image: StaticImageData;
}

export default function MangaCard({Title, Desc, image}: CusProps) {
    return (
        <div className="relative group cursor-pointer overflow-hidden text-gray-50 h-[288px] w-max rounded hover:duration-500 duration-500 m-[1rem]">
            <div className="w-56 h-72 text-gray-800">
                <div className="flex flex-row justify-between z-[5]">
                    <svg
                        className="fill-white stroke-white w-8 h-8 p-2 hover:bg-gray-800 rounded-full m-1"
                        height="100"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 100 100"
                        width="100"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M15.8,32.9V15.8m0,0H32.9m-17.1,0L37.2,37.2m47-4.3V15.8m0,0H67.1m17.1,0L62.8,37.2m-47,29.9V84.2m0,0H32.9m-17.1,0L37.2,62.8m47,21.4L62.8,62.8M84.2,84.2V67.1m0,17.1H67.1"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="8"
                        />
                    </svg>
                    <svg
                        className="fill-white stroke-white w-8 h-8 p-2 m-1 hover:bg-gray-800 rounded-full"
                        height="100"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 100 100"
                        width="100"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M50,17.4h0M50,50h0m0,32.6h0M50,22a4.7,4.7,0,1,1,4.7-4.6A4.7,4.7,0,0,1,50,22Zm0,32.7A4.7,4.7,0,1,1,54.7,50,4.7,4.7,0,0,1,50,54.7Zm0,32.6a4.7,4.7,0,1,1,4.7-4.7A4.7,4.7,0,0,1,50,87.3Z"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="8"
                        />
                    </svg>
                </div>
                <Image src={image} alt="Beserk" className=" absolute top-0 -z-[1] group-hover:grayscale group-hover:blur-sm group-hover:duration-500 duration-500" />
            </div>
            <div className="absolute bg-gray-50 -bottom-24 w-56 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-500 duration-500">
                <span className="text-lime-400 font-bold text-xs"></span>
                <span className="text-gray-800 font-bold text-3xl">{Title}</span>
                <p className="text-neutral-800">
                    {Desc}
                </p>
            </div>
        </div>
    );
}
