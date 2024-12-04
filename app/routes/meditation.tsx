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
      <div className="exploreMed flex flex-col-reverse md:flex-row justify-between items-center gap-4 m-12">
        {/* top test messages */}
        <div className="explore flex flex-col justify-center gap-4">
          <h2 className="text-2xl font-bold text-green-800">Meditation Room</h2>
          <p className="text-sm text-gray-300 my-2">
            Immense yourself in calming audio and images
          </p>

          <Link to="#">
            <button className="bg-green-800 p-3 font-bold rounded-md w-40 my-2">
              Explore
            </button>
          </Link>

          {/* Links to soothing meditation */}
          <div className="flex flex-col justify-between gap-6">
            <div
              className="flex flex-row gap-4 items-center rounded-md border border-gray-400
            p-4"
            >
              <div>
                <img
                  src="/public/headphone.png"
                  alt="Listens to music"
                  className="h-20 w-20 rounded-sm"
                />
              </div>
              <div className="flex flex-col items-center gap-4 ">
                <Link to="#" className="fl">
                  <h3>Audio Player</h3>
                  <p className="text-sm text-gray-400">
                    Listen to soothing Musics
                  </p>
                </Link>
              </div>
            </div>

            <div className="flex flex-row gap-4 items-center rounded-md border border-gray-400 p-4">
              <div>
                <img
                  src="/public/calmImage.png"
                  alt="Listens to music"
                  className="h-20 w-20 rounded-sm"
                />
              </div>
              <div className="flex flex-col text-left ">
                <Link to="#" className="">
                  <h3 className="my-4">Calming Images</h3>
                  <p className="text-sm text-gray-400">
                    Find Serenity through beautiful Visual
                  </p>
                </Link>
              </div>
            </div>

            <div className="flex flex-row gap-4 items-center rounded-md border-2 border-gray-400 p-4 ">
              <div>
                <img
                  src="/public/progresTracker.png"
                  alt="Listens to music"
                  className="h-20 w-20 rounded-sm"
                />
              </div>
              <div className="flex flex-col items-center gap-4 ">
                <Link to="#" className="fl">
                  <h3>Progress Bar</h3>
                  <p className="text-sm text-gray-400">
                    Track your meditation journey
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* right image meditation */}
        <div className="imageMed">
          <img
            src="/public/meditation-image.png"
            alt="Meditation pic"
            className="max-h-screen"
          />
        </div>
      </div>

      {/*featured Meditation Serenity section */}
      <div className="flex flex-col m-12">
        {/* featured med-explore */}
        <div className="flex flex-col items-center gap-4 md:flex-row  ">
          <div className="image">
            <img src="/public/FeaturedMed.png" alt="Flower pic" />
          </div>
          <div>
            <h2 className="text-3xl font-bold  my-4">Featured Meditations</h2>
            <p className="my-4 text-sm">
              Curated meditation for anxiety relief
            </p>
            <button className="my-2">
              <Link to="#" className="bg-green-800 p-3 rounded-md ">
                Explore More
              </Link>
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 items-center  md:flex-row my-8">
          <div className="flex flex-col border border-gray-500 rounded-br-md rounded-bl-md">
            <div>
              <img src="/public/rechome.png" alt="Woman meditating" />
            </div>
            <div className="p-4">
              <p className="my-3">Beach Meditation</p>
              <span className="text-green-800 my-4 font-bold">10 mins</span>
              <div className="flex flex-row items-center">
                <span>
                  <img src="/public/iconx2.png" alt="Leave icon" />
                </span>
                <span>
                  <img src="/public/icon-1.png" alt="" />
                </span>
                <span>
                  <img src="/public/icon-2.png" alt="" />
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col border border-gray-500 rounded-br-md rounded-bl-md">
            <div>
              <img src="/public/newhome.png" alt="Woman meditating" />
            </div>
            <div className="p-4">
              <p className="my-3">Beach Meditation</p>
              <span className="text-green-800 my-4 font-bold">15 mins</span>
              <div className="flex flex-row items-center">
                <span>
                  <img src="/public/iconx2.png" alt="Leave icon" />
                </span>
                <span>
                  <img src="/public/icon-1.png" alt="" />
                </span>
                <span>
                  <img src="/public/icon-2.png" alt="" />
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col border border-gray-500 rounded-br-md rounded-bl-md">
            <div>
              <img src="/public/pophome.png" alt="Woman meditating" />
            </div>
            <div className="p-4">
              <p className="my-3">Beach Meditation</p>
              <span className="text-green-800 my-4 font-bold">20 mins</span>
              <div className="flex flex-row items-center">
                <span>
                  <img src="/public/iconx2.png" alt="Leave icon" />
                </span>
                <span>
                  <img src="/public/icon-1.png" alt="" />
                </span>
                <span>
                  <img src="/public/icon-2.png" alt="" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recommended Meditations */}
      <div className="flex flex-col m-12">
        {/* featured med-explore */}
        <div className="flex flex-col items-center gap-4 md:flex-row  ">
          <div className="image">
            <img src="/public/pophome.png" alt="Flower pic" className="h-40" />
          </div>
          <div>
            <h2 className="text-3xl font-bold  my-4">
              Recommended Meditations
            </h2>
            <p className="my-4 text-sm">Find peace within yourself</p>
            <button className="hidden my-2">
              <Link to="#" className="bg-green-800 p-3 rounded-md ">
                Explore More
              </Link>
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 items-center  md:flex-row my-8">
          <div className="flex flex-row border border-gray-100 rounded-md p-2 gap-4">
            <div>
              <img src="/public/stresshome.png" alt="Woman meditating" />
            </div>
            <div className="text-section">
              <h3>Stress relief meditation</h3>
              <span className="text-green-800 my-2 font-bold">10 mins</span>
              <p className="text-wrap">
                Take a deep breath and relax your mind with this meditation
              </p>
              <div className="flex flex-row items-center">
                <span>
                  <img src="/public/iconx2.png" alt="Leave icon" />
                </span>
                <span>
                  <img src="/public/serehome.png" alt="" className="h-10" />
                </span>
                <span>
                  <img src="/public/iconx.png" alt="" />
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-4 p-2 border border-gary-100 rounded-md">
            <div>
              <img src="/public/morningmedhome.png" alt="Woman meditating" />
            </div>
            <div className="">
              <h3 className="font-bold">Stress relief meditation</h3>
              <span className="text-green-800 my-2 font-bold">10 mins</span>
              <p className="text-wrap">
                Take a deep breath and relax your mind with this meditation
              </p>
              <div className="flex flex-row items-center">
                <span>
                  <img src="/public/iconx2.png" alt="Leave icon" />
                </span>
                <span>
                  <img src="/public/serehome.png" alt="" className="h-10" />
                </span>
                <span>
                  <img src="/public/iconx.png" alt="" />
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-row border border-gary-100 gap-4 rounded-md p-2">
            <div>
              <img
                src="/public/sleepmedhome.png"
                alt="Woman meditating"
                className=""
              />
            </div>
            <div className="text-section">
              <h3 className="font-bold">Stress relief meditation</h3>
              <span className="text-green-800 my-2 font-bold">10 mins</span>
              <p className=" text-wrap">
                Take a deep breath and relax your mind with this meditation
              </p>
              <div className="flex flex-row items-center">
                <span>
                  <img src="/public/iconx2.png" alt="Leave icon" />
                </span>
                <span>
                  <img src="/public/serehome.png" alt="" className="h-10" />
                </span>
                <span>
                  <img src="/public/iconx.png" alt="" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Meditations */}
      <div className="recent-meditations flex flex-col-reverse md:flex-row justify-between items-center p-12 gap-4">
        <div className="right-section 0 w-1/2 p-2">
          <div>
            <h3 className="font-bold text-2xl mb-4">Recent Meditations</h3>
            <p className="my-4">
              Keep track of your recent meditation session.
            </p>
            <button className="bg-green-800 p-2 rounded-md my-4 w-40">
              <Link to="#">View All</Link>
            </button>
          </div>

          <div className="flex flex-row gap-4 items-center justify-evenly my-4">
            <div className="Serenity text-center">
              <img
                src="/public/serehome.png"
                alt="Serene meditation"
                className="bg-gray-400 rounded-full
                my-2 mx-auto"
              />
              <h3 className="font-bold">Serenity meditation</h3>
              <span className="text-green-800 my-2 font-bold">Completed</span>
            </div>
            <div className="mt-4 text-center">
              <img
                src="/public/cbhome.png"
                alt="flower-picture"
                className="bg-gray-400 rounded-full
                my-2 mx-auto"
              />
              <h3 className="font-bold">Calm breath</h3>
              <span className="text-green-800 my-2 font-bold">In progress</span>
            </div>
          </div>
        </div>

        <div className="left-section">
          <img src="/public/srenhome.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Meditation;
