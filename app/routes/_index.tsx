import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="relative h-screen w-full">
      <img
        src="/heros_image.png"
        alt="herosimage"
        className="absolute inset-0 object-cover h-full w-full"
      />
      <div className="absolute inset-0 flex px-[23rem] flex-col items-center justify-center text-white text-center p-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Reduce Stress And Boost Mood With Snooze
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Guided meditations and exercises for mental well-being
        </p>
        <Link to="#try-snooze">
          <button className="bg-[#D3AA00] px-4 py-2 rounded text-white text-lg hover:bg-[#c09a00]">
            Try Snooze for free
          </button>
        </Link>
      </div>
    </div>
  );
}
