import Image from "next/image";

export function AboutHero() {
  return (
    <section className="relative w-full h-[220px] sm:h-[280px] md:h-[340px] bg-[#039BC5] text-white px-4 sm:px-6 lg:px-12 overflow-hidden flex items-center">
      <div className="max-w-7xl mx-auto w-full flex flex-row items-center justify-between gap-6 md:gap-12">
        {/* Left Column: Heading */}
        <div className="z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white drop-shadow-md">
            About Us
          </h1>
        </div>

        {/* Right Column: Hero Image Visual */}
        <div className="relative w-1/2 max-w-lg h-[160px] sm:h-[220px] md:h-[270px]">
          <Image
            src="/about_us.png"
            alt="About Us - Clean Energy"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
