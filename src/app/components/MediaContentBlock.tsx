import Image from "next/image";

export default function MediaContentBlock() {
  return (
    <section
      className="h-[32rem] md:h-[21rem] bg-linear-120 from-dark-gray-blue to-desaturated-blue relative
            rounded-bl-[100px] rounded-tr-[100px] mt-28 px-4 pb-12 md:pb-0 flex flex-col items-center justify-center"
    >
      <div 
        className="absolute inset-0 bg-no-repeat w-full h-full rounded-tr-[6.25rem] rounded-bl-[6.25rem] 
        bg-[length:650px] bg-[center_bottom_14rem] md:bg-[right_160%_bottom_-5rem] md:bg-[length:800px]"

        style={{ backgroundImage: "url('/bg-pattern-circles.svg')" }}></div>

      <div className="relative z-10 translate-y-[-5.75rem] flex flex-col items-center justify-center
      md:flex-row md:justify-between md:translate-y-0"
      >
        <Image
          src="/illustration-phones.svg"
          alt="phones illustration"
          width={500}
          height={500}
        />

        <div className="text-center flex flex-col gap-6">
          <h2 className="text-white font-bold text-3xl px-4 md:text-left">
            State of the Art Infrastructure
          </h2>
          <p className="px-4 text-zinc-400 max-w-[30rem] md:text-left text-[14px]">
            With reliability and speed in mind, worldwide data centers provide the
            backbone for ultra-fast connectivity. This ensures your site will load
            instantly, no matter where your readers are, keeping your site
            competitive.
          </p>
        </div>
      </div>
    </section>
  );
}
