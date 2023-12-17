import React from "react";
import { footerLinks } from "../utils/data";
import PulseLogo from "../assets/pulse-logo.svg";

export default function Footer() {
    return (
        <footer className="bg-[--color-quinary] px-7 pt-7 pb-24 lg:px-2 md:pt-20 lg:pb-2">
            <div className="md:mb-24 flex flex-col lg:flex-row gap-5 align-middle lg:align-top lg:justify-between xl:justify-around">
                <div className="lg:ms-5 xl:ms-0 flex flex-col gap-5 lg:gap-10 align-middle md:items-center lg:justify-start">
                    <img src={PulseLogo} alt="Pulse Logo" className="h-14 md:h-16 lg:self-start" />
                    <a className="bg-gradient-to-r from-[--color-primary] to-[--color-secondary] py-4 text-center font-bold md:w-1/2 lg:w-full lg:px-6">
                        Sign Up for a Free 30-Day Trial
                    </a>
                </div>
                <div className="my-5 flex justify-between gap-2 lg:gap-10 text-sm md:text-lg lg:me-10">
                    {footerLinks.map((item, index) => {
                        const { title, links } = item;
                        return (
                            <div className="flex flex-col flex-wrap gap-1 lg:gap-2" key={index}>
                                <p className="text-white font-bold">{title}</p>
                                {
                                    links.map((link, index) => {
                                        return (
                                            <a href={link.link} className="text-[--color-secondary] w-16 md:w-full" key={index}>
                                                {link.title}
                                            </a>)
                                    })
                                }
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="my-1 lg:ms-5 xl:ms-48 text-zinc-400 text-xs opacity-80 leading-5">
                <p>
                    ©2019 Pulseapp.com, Inc. All Rights Reserved | {" "}
                    <a className="cursor-pointer underline hover:opacity-100">Terms of Use</a> | {" "}
                    <a className="cursor-pointer underline hover:opacity-100">Privacy Policy</a> | {" "}
                    <a className="cursor-pointer underline hover:opacity-100">EU Privacy</a>
                </p>
                <p>Pulse is made by {" "}
                    <a className="cursor-pointer underline hover:opacity-100">Simple Focus</a>
                    . We also make {" "}
                    <a className="cursor-pointer underline hover:opacity-100">Ballpark</a>, {" "}
                    <a className="cursor-pointer underline hover:opacity-100">Sifter</a>, and {" "}
                    <a className="cursor-pointer underline hover:opacity-100">Curated</a>.
                </p>
            </div>
        </footer>
    )
}
