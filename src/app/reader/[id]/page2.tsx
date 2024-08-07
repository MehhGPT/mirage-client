import Image from 'next/image';

export default function Pages() {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6">
        <h1 className="text-2xl font-bold">Beserk Vol 1</h1>
      </header>
      <div className="flex-1 overflow-y-auto flex justify-center">
        <div className="flex flex-col gap-4 px-6 py-8 w-full max-w-[90vw]">
          <Image
            src="/placeholder.svg"
            width={1200}
            height={1800}
            alt="Manga Page 1"
            className="max-h-[90vh] w-full object-contain"
            style={{ aspectRatio: "1200/1800", objectFit: "cover" }}
          />
          <Image
            src="/placeholder.svg"
            width={1200}
            height={1800}
            alt="Manga Page 2"
            className="max-h-[90vh] w-full object-contain"
            style={{ aspectRatio: "1200/1800", objectFit: "cover" }}
          />
          <Image
            src="/placeholder.svg"
            width={1200}
            height={1800}
            alt="Manga Page 3"
            className="max-h-[90vh] w-full object-contain"
            style={{ aspectRatio: "1200/1800", objectFit: "cover" }}
          />
          <Image
            src="/placeholder.svg"
            width={1200}
            height={1800}
            alt="Manga Page 4"
            className="max-h-[90vh] w-full object-contain"
            style={{ aspectRatio: "1200/1800", objectFit: "cover" }}
          />
          <Image
            src="/placeholder.svg"
            width={1200}
            height={1800}
            alt="Manga Page 5"
            className="max-h-[90vh] w-full object-contain"
            style={{ aspectRatio: "1200/1800", objectFit: "cover" }}
          />
          <div className="flex justify-center gap-8 mt-12">
            <div className="flex flex-col items-center w-1/3">
              <Image
                src="/placeholder.svg"
                width={300}
                height={450}
                alt="Recommendation 1"
                className="max-h-[40vh] w-full object-contain rounded-lg shadow-lg"
                style={{ aspectRatio: "300/450", objectFit: "cover" }}
              />
              <h3 className="text-lg font-bold mt-4">Recommendation 1</h3>
              <p className="text-muted-foreground text-sm">Description of Recommendation 1</p>
            </div>
            <div className="flex flex-col items-center w-1/3">
              <Image
                src="/placeholder.svg"
                width={300}
                height={450}
                alt="Recommendation 2"
                className="max-h-[40vh] w-full object-contain rounded-lg shadow-lg"
                style={{ aspectRatio: "300/450", objectFit: "cover" }}
              />
              <h3 className="text-lg font-bold mt-4">Recommendation 2</h3>
              <p className="text-muted-foreground text-sm">Description of Recommendation 2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
