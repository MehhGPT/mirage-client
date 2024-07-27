import MangaCard from "@/components/mangacard";
import { Slider } from "@/components/slider";
import Cover from "@/images/COVER1.jpg";

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col">
      <Slider />
      <div className=" flex flex-wrap flex-row w-[90%] items-center justify-center">
        <MangaCard Desc="Berserk is a Japanese manga series written and illustrated by Kentaro Miura" image={Cover} Title="Beserk Vol 1" />
        <MangaCard Desc="Berserk is a Japanese manga series written and illustrated by Kentaro Miura" image={Cover} Title="Beserk Vol 2" />
        <MangaCard Desc="Berserk is a Japanese manga series written and illustrated by Kentaro Miura" image={Cover} Title="Beserk Vol 3" />
        <MangaCard Desc="Berserk is a Japanese manga series written and illustrated by Kentaro Miura" image={Cover} Title="Beserk Vol 4" />
        <MangaCard Desc="Berserk is a Japanese manga series written and illustrated by Kentaro Miura" image={Cover} Title="Beserk Vol 5" />
        <MangaCard Desc="Berserk is a Japanese manga series written and illustrated by Kentaro Miura" image={Cover} Title="Beserk Vol 6" />
      </div>
    </div>
  );
}
