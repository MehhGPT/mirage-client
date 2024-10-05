import MangaCard from "@/components/mangacard";
import { Slider } from "@/components/slider";
import Cover from "@/images/COVER1.jpg";

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col">
      <Slider />
      <div className=" flex flex-wrap flex-row w-[90%] items-center justify-center">
        <MangaCard link='/reader/Berserk/1' Desc="Berserk is a Japanese manga series written and illustrated by Kentaro Miura" image={Cover} Title="Beserk Vol 1" />
        <MangaCard link='/reader/Berserk/2' Desc="Berserk is a Japanese manga series written and illustrated by Kentaro Miura" image={Cover} Title="Beserk Vol 2" />
        <MangaCard link='/reader/Berserk/3' Desc="Berserk is a Japanese manga series written and illustrated by Kentaro Miura" image={Cover} Title="Beserk Vol 3" />
        <MangaCard link='/reader/Berserk/4' Desc="Berserk is a Japanese manga series written and illustrated by Kentaro Miura" image={Cover} Title="Beserk Vol 4" />
        <MangaCard link='/reader/OnePiece/5' Desc="Berserk is a Japanese manga series written and illustrated by Kentaro Miura" image={Cover} Title="Beserk Vol 5" />
        <MangaCard link='/reader/Berserk/6' Desc="Berserk is a Japanese manga series written and illustrated by Kentaro Miura" image={Cover} Title="Beserk Vol 6" />
      </div>
    </div>
  );
}
