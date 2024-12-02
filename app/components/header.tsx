import { Link } from "@remix-run/react";
import { useState } from "react";

export default function Header() {
    const [activeLink, setActiveLink] = useState<string>("");

    const handleLinkClick = (link: string) => {
        setActiveLink(link);
    };

    return (
        <header className="flex sticky justify-center items-center py-[1rem] z-[100] bg-neutral-100">
            <div className="flex relative items-center justify-between gap-[1.25rem] md:px-[1.25rem]">
                <div className="relative cursor-pointer left-[-5rem]">
                    <img src="/Snooze_logo.png" width={150} height={150} alt="pic" />
                </div>
                <ul>
                    <li className="flex list-none justify-evenly w-[50vw]">
                        {["Home", "Meditation", "Just Breathe", "Mood Tracker"].map((text) => (
                            <Link
                                to={`#${text.toLowerCase().replace(" ", "-")}`}
                                key={text}
                                onClick={() => handleLinkClick(text)}
                            >
                                <div className="flex flex-col items-center gap-[0.25rem]">
                                    <h4
                                        className={`text-[1.13rem] font-serif text-[#1C5A5A] ${
                                            activeLink === text ? "font-bold duration-1000 border-b-[0.19rem] border-yellow-400" : ""
                                        }`}
                                    >
                                        {text}
                                    </h4>
                                </div>
                            </Link>
                        ))}
                    </li>
                </ul>
                <div className="flex relative gap-[2rem] right-[-5rem]">
                    <Link to="#login" onClick={() => handleLinkClick("Login")}>
                        <div className="flex flex-col items-center gap-[0.25rem]">
                            <h4
                                className={`text-[1.13rem] font-serif text-[#1C5A5A] ${
                                    activeLink === "Login" ? "font-bold duration-1000 border-b-[0.19rem] border-yellow-400" : ""
                                }`}
                            >
                                Login
                            </h4>
                        </div>
                    </Link>
                    <Link to="#try-snooze">
                        <button className="bg-[#1C5A5A] px-[10px] py-[5px] rounded-[5px] text-white">
                            Try Snooze for free
                        </button>
                    </Link>
                </div>
            </div>
        </header>
    );
}