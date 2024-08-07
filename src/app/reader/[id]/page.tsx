import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from 'next/image';
import Berserk from '@/images/COVER1.jpg';

function pageData() {
  return [1, 2, 3]
}

export default function Component() {

  const pageDataVal = pageData();

  return (
    <div className="bg-dark-800 text-white p-6">
      <div>
        Social, Message
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        {
          pageDataVal.map((index) => (
            <div className="m-5" key={index}>
              <Image src={Berserk} alt="none" className="w-[90svw]" />
            </div>
          ))
        }
      </div>
    </div>
  )
}

