import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from 'next/image';
import Pages from "./page2";


export default function Component() {
  return (
    <div className="bg-gray-800 text-white p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
           <Image
		   src=""
		   alt="Manga Cover"
		   className="w-48 h-64 object-cover rounded"
		   width={150}
		   height={200}
		   style={{ aspectRatio: "150/200", objectFit: "cover" }}
		 />
          <div>
            <h1 className="text-4xl font-bold">Beserk Vol 1</h1>
            <h2 className="text-xl text-gray-400">Berserk is a Japanese manga series written and illustrated by Kentaro Miura</h2>
            <p className="mt-2 text-gray-400">Kentaro Miura</p>
            <div className="mt-4 flex space-x-2">
              <Button className="bg-orange-500 text-white">Add To Library</Button>
              <Button className="bg-gray-700 text-white">
                <BookmarkIcon className="w-5 h-5" />
              </Button>
              <Button className="bg-gray-700 text-white">
                <ShareIcon className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2" />
      </div>
      <div className="mt-6 flex items-center space-x-4">
        <Badge variant="destructive">Suggestive</Badge>
        <Badge variant="secondary">Dark fantasy</Badge>
        <Badge variant="secondary">Epic fantasy</Badge>
        <Badge variant="secondary">Web Comic</Badge>
        <Badge variant="secondary">Sword and sorcery</Badge>
        <Badge variant="secondary">Publication: 2024, Ongoing</Badge>
      </div>
      <div className="mt-4 flex items-center space-x-4 text-gray-400">
        <div className="flex items-center space-x-1">
          <StarIcon className="w-5 h-5 text-orange-500" />
          <span>6.60</span>
        </div>
        <div className="flex items-center space-x-1">
          <UsersIcon className="w-5 h-5" />
          <span>20k</span>
        </div>
        <div className="flex items-center space-x-1">
          <MessageCircleIcon className="w-5 h-5" />
          <span>101</span>
        </div>
        <div className="flex items-center space-x-1">
          <EyeOffIcon className="w-5 h-5" />
          <span>N/A</span>
        </div>
      </div>
    </div>
  )
}

function BookmarkIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
    </svg>
  )
}


function EyeOffIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
      <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
      <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
      <line x1="2" x2="22" y1="2" y2="22" />
    </svg>
  )
}


function MessageCircleIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  )
}


function ShareIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  )
}


function StarIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}


function UsersIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
