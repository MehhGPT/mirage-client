import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from 'next/image';

export default function Component() {

  const pageDataVal = pageData();

  return (
    <div className="bg-dark-800 text-dark p-6">
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
      <Pages/>
    </div>
  )
}

