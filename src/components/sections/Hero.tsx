import { PlayCircleIcon } from "lucide-react";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <div className="flex justify-between">
      <div className="w-full">
        {/* Blob */}
        <div className="relative w-full max-w-lg justify-center items-center">
          <div className="absolute top-40 left-44 w-72 h-72 bg-sky-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
          <div className="absolute top-52 -right-40 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute top-16 -right-24 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
        </div>

        <div className="flex flex-col justify-start items-start gap-7 pt-28">
          <h1 className="text-5xl font-bold">
            Make The Best Finincial Descisons
          </h1>
          <p className="text-2xl font-semibold text-muted-foreground ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
            saepe est temporibus sed recusandae delectus inventore, beatae
          </p>
          <div className="flex gap-6">
            <Button className="bg-foreground text-white text-xl p-8">
              Get Started
            </Button>
            <Button className="gap-6 text-xl text-foreground bg-transparent p-8">
              <PlayCircleIcon size={24} />
              Watch Video
            </Button>
          </div>
          <img src="/heroTag.svg" alt="hero" className="" />
        </div>
      </div>
      <div className="w-full">
        <img src="/hero3.svg" alt="hero" className="w-[902px] h-[900px]" />
      </div>
    </div>
  );
}
