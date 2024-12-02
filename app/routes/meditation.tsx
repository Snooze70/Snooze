import { Link } from "@remix-run/react";
import React from "react";

const Meditation: React.FC = () => {
  return (
    <>
      <div className="medHero relative">
        <img
          src="/public/medHero.jpeg"
          alt="calm waters"
          className="h-40 w-full md:h-52 "
        />
        <div className="text  flex flex-col gap-4 items-center absolute top-0 right-14 left-14 my-2 md:my-4">
          <h1 className="font-bold">Find Your Calm with Snooze</h1>
          <p className="text-sm text-gray-300 my-2">
            Improve focus, sleep better, and relax deeply
          </p>
          <button className="bg-orange-400 text-white font-semibold rounded-md p-2 text-sm">
            Upgrade To Premium
          </button>
        </div>
      </div>

      {/* meditation Room */}
      <div className="exploreMed flex flex-col md:flex-row justify-between items-center gap-4 mx-8">
        <div className="explore flex flex-col justify-center gap-4">
          <h1 className="text-3x font-bold text-green-800">Meditation Room</h1>
          <p className="text-sm text-gray-500 my-2">
            Immense yourself in calming audio and images
          </p>

          <Link to="#">
            <button className="bg-green-800 p-3 font-bold rounded-md">
              Explore
            </button>
          </Link>
        </div>
        <div className="imageMed">
          <img src="/public/meditation-image.png" alt="Meditation pic" />
        </div>
      </div>
    </>
  );
};

export default Meditation;
