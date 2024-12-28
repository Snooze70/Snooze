/* eslint-disable import/no-unresolved */
import MoodCard from "~/components/moodCard"
import MoodTrackerCard from "~/components/moodTrackerCard"
import MoodTriggerCard from "~/components/moodTriggerCard"

export const MoodTracker = () => {
    return (
        <div className="bg-[#EEF3EF] text-[#1C5A5A] w-[100vw]">
            {/* Hero Section */}
            <div className="relative h-[40vh] w-full">
                <img
                src="/mood-tracker.jpeg"
                alt="herosimage"
                className="absolute inset-0 object-cover h-full w-full"
                />
                <div className="relative flex justify-center text-center text-white p-4">
                    <div className="relative">
                        <h2 className="text-4xl font-bold mb-4">Mood Tracker</h2>
                        <small className="text-gray-100">
                            Log your thoughts and feelings to monitor your mental well-being
                        </small>
                        <button className="absolute right-24 top-32 w-[15rem] h-[3rem] bg-amber-500 rounded-md ">Start Now</button>
                    </div>
                </div>
            </div>

            {/* "Join Snooze Today" Section */}
            <div className="relative w-screen py-10 text-[#1C5A5A] flex justify-center">
                <div className="w-screen max-w-[1200px] gap-10 flex justify-between items-start sm:px-8">
                    {/* Text Section */}
                    <div className="relative w-1/2 top-[45%]">
                    <h2 className="text-4xl font-bold mb-4">Mood Tracking Options</h2>
                    <small className="">
                        Choose how you want to track your mood
                    </small>
                    </div>

                    {/* Form Section */}
                    <div className="w-1/2 rounded-lg ">
                        <MoodTrackerCard
                        title="Emoji Mood Tracker"
                        subtitle="Select and emoji that represents your current mood."
                        image="/emoji-mood.png"
                        />
                        <MoodTrackerCard
                        title="Slider Scale"
                        subtitle="Slide the scale to rate your mood from 1 to 10."
                        image="/slid.png"
                        />
                        <MoodTrackerCard
                        title="Journaling"
                        subtitle="Write freely about your thoughts and feelings."
                        image="/mood.png"
                        />
                    </div>
                </div>
            </div>

            <div className="relative w-screen py-10 text-[#1C5A5A] flex justify-center">
                <div className="w-screen max-w-[1200px] gap-10 flex justify-between items-start sm:px-8">
                    {/* Text Section */}
                    <div className="relative w-1/2 top-[45%]">
                    <h2 className="text-4xl font-bold mb-4">Trigger Identification</h2>
                    <small className="">
                        Identify patterns and triggers for your mood swings
                    </small>
                    </div>

                    {/* Form Section */}
                    <div className="w-1/2 rounded-lg ">
                        <div className="flex">
                            <MoodTriggerCard
                            title="Significant Events"
                            subtitle="Track events that affect your mood."
                            image="/triger-1.png"
                            />
                            <MoodTriggerCard
                            title="Triggers"
                            subtitle="Identify triggers that impact your emotions."
                            image="/triger-2.png"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative w-[100vw] ml-20 pr-28 py-10 text-[#1C5A5A] flex justify-center">
                <section className="w-1/2 py-8 pl-8 text-[#1C5A5A]">
                    <h2 className="text-4xl font-bold mb-7">Recent Thoughts</h2>
                    <p className="pb-7">Track and reflect on your emotions</p>
                    <button className="right-24 top-32 w-[14rem] text-white h-[3rem] bg-[#1C5A5A] rounded-md ">Add New</button>
                    <div className="relative pt-10">
                        <MoodCard
                        mood="Sarah Smith"
                        image="/Sarah-Smith.png"
                        cause="Amazing app for meditation practices"
                        />
                        <MoodCard
                        mood="David Johnson"
                        image="/David-Johnson.png"
                        cause="Helped me reduce stress and boost focus"
                        />
                    </div>
                </section>
                <div className="w-[1/2]">
                    <img
                    src="/thoughts.png"
                    alt="client"
                    className="w-[85%] h-[30rem]"
                    />
                </div>
            </div>

            {/* "Log Your Thoughts" Section */}
            <div className="relative w-screen py-10 text-[#1C5A5A] flex justify-center">
                <div className="w-screen max-w-[1200px] flex justify-between items-start sm:px-8">
                    {/* Text Section */}
                    <div className="relative w-1/2 top-[45%]">
                    <h2 className="text-4xl font-bold mb-4">Log Your Thought And Feelings</h2>
                    <small className="">
                        Identify patterns and reflect on your state of mind
                    </small>
                    </div>

                    {/* Form Section */}
                    <form className="w-1/2 rounded-lg ">
                    <div className="mb-12">
                        <label htmlFor="emotional-state" className="block text-sm font-bold mb-2">
                        Emotional State
                        </label>
                        <input
                        id="emotional-state"
                        type="text"
                        required
                        placeholder="How are you feeling"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <small className="text-gray-300">Select from the options</small>
                    </div>
                    <div className="mb-12">
                        <label htmlFor="significant-events" className="block text-sm font-bold mb-2">
                        Significant Events
                        </label>
                        <input
                        id="significant-events"
                        type="text"
                        required
                        placeholder="Note down important events"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div className="mb-12">
                        <label
                        htmlFor="triggers"
                        className="block text-sm font-bold mb-2"
                        >
                        Triggers
                        </label>
                        <input
                        id="triggers"
                        type="text"
                        required
                        placeholder="What triggered your feelings"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-[12rem] text-[#ffffff] bg-[#1C5A5A] font-bold py-2 px-4 rounded-md hover:bg-[#bbbbbb] transition"
                    >
                        Log Thoughts
                    </button>
                    </form>
                </div>
            </div>

            {/* "Log Your Thoughts" Section */}
            <div className="relative w-screen py-10 text-[#1C5A5A] flex justify-center">
                <div className="w-screen max-w-[1200px] flex justify-between items-start sm:px-8">
                    {/* Text Section */}
                    <div className="relative w-1/2 top-[45%]">
                        <h2 className="text-4xl font-bold mb-4">Mood Games</h2>
                    </div>

                    {/* Form Section */}
                    <div className="relative pt-10">
                        <MoodCard
                        mood="Calm Puzzles"
                        image="/icon-1.png"
                        cause="Engage your mind"
                        />
                        <MoodCard
                        mood="Nature Escape"
                        image="/icon-2.png"
                        cause="Relax with tranquil scenes"
                        />
                    </div>
                </div>
            </div>

            <div className="flex relative ml-[7rem] pb-10 p-2 font-bold">
                <img src="/" alt="current mood emoji" className="w-[12rem] h-[12rem] bg-gray-300 " />
                <div className="relative pl-16">
                    <p className="text-3xl pb-7">Mood Tracker</p>
                    <small>Monitor your emotional well-being</small><br></br>
                    <button
                        type="submit"
                        className="relative top-10 w-[12rem] text-[#ffffff] bg-[#1C5A5A] font-bold py-2 px-4 rounded-md hover:bg-[#bbbbbb] transition"
                    >
                        Start Now
                    </button>
                </div>
            </div>
            <div>
                <div className="w-[85vw] mx-auto overflow-hidden pb-32">
                <img
                src="/chart.png"
                alt="woman meditating"
                className="w-full h-[400px] rounded-[10px]"
                />
            </div>
            <div className="w-[85vw] mx-auto overflow-hidden pb-32">
                <img
                src="/chart-params.png"
                alt="woman meditating"
                className="w-full h-[100px] rounded-[10px]"
                />
            </div>
            </div>
        </div>
    )
}

export default MoodTracker