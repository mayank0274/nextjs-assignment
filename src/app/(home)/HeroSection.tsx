const brandImages = [
  "Google",
  "Apple",
  "Microsoft",
  "Amazon",
  "Facebook",
  "Tesla",
  "Netflix",
  "Nike",
  "Coca-Cola",
  "Samsung",
];

export default function HeroSection() {
  return (
    <>
      <div className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-transparent overflow-hidden">
        <div
          className="absolute inset-x-0 bottom-0 h-2/3"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, #1f1f1f 10%, #9c356d 35%, #f9784c 60%, #fcd68b 80%, #fffaef 100%)",
          }}
        />
        <div className="relative z-10 px-6 md:pt-20 pb-32 pt-10">
          <div className="max-w-4xl">
            <div className="text-yellow-400 text-lg font-medium mb-4 flex items-center">
              👏 HEY, I AM ERICA
            </div>
            <h1
              className={
                "text-4xl md:text-6xl lg:text-7xl font-semibold  leading-tight mb-8 " +
                "bg-[linear-gradient(151.4deg,_#FEFAEE_5.26%,_#FCD68B_29.9%,_#F9784C_53.25%,_#9C356D_72.94%)] " +
                "bg-clip-text text-transparent"
              }
            >
              A YOUNG CREATIVE DESIGNER BASED IN SAN DIEGO
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 md:mb-16 mb-4">
              <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
                MY WORKS
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-black transition-colors">
                LET&apos;S TALK
              </button>
            </div>
          </div>

          <div className="w-full overflow-hidden py-6 absolute md:bottom-10 z-10">
            <div className="flex whitespace-nowrap animate-banner gap-10">
              {[...brandImages, ...brandImages].map((src, index) => (
                <span
                  key={index}
                  className="text-white text-3xl font-bold tracking-wide select-none"
                >
                  {src}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
