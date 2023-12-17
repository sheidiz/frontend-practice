"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/pulse-logo.svg";
import { links, linksMobile } from "../utils/data";
import { VscMenu } from "react-icons/vsc";
import { linksContainer } from "../utils/animations";

export default function Header() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="flex flex-col">
            <nav className="border-b-2 md:border-none md:bg-green-50 p-4 md:pt-10
                flex items-center justify-between md:justify-around lg:justify-between xl:justify-around gap-2 xl:gap-4">
                <a href="#" className="text-4xl">
                    <img src={Logo} alt="Pulse Logo" />
                </a>
                <div className="hidden md:flex md:gap-6 md:items-center text-md font-bold text-[--color-primary]">
                    {links.map((link) => (
                        <a
                            className={link.type === "link" ? "px-2 py-2" : "px-4 py-1 border-2 border-[--color-primary]"}
                            key={link.url}
                            href={link.url}
                        >
                            {link.title}
                        </a>
                    ))}
                </div>
                <button
                    className="md:hidden me-2 text-[--color-primary] text-4xl focus:outline-none"
                    onClick={toggleMenu}
                >
                    <VscMenu />
                </button>
            </nav>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden pt-5 bg-green-50 h-screen"
                    >
                        <motion.div className="px-4 py-2 flex flex-col gap-4"
                            key={Math.floor(Math.random() * 10)}
                            variants={linksContainer}
                            initial="hidden"
                            animate="visible">
                            {linksMobile.map((link, index) => (
                                <motion.a
                                    className={link.type === "link" ? "block font-bold text-[--color-primary] text-4xl" :
                                        "w-1/4 bg-gradient-to-r from-[--color-primary] to-[--color-secondary] p-4 text-center text-lg font-bold"}
                                    key={index + 1}
                                    href={link.url}
                                    onClick={toggleMenu}
                                    variants={{
                                        hidden: { y: 10, opacity: 0 },
                                        visible: { y: 0, opacity: 1 }
                                    }}

                                >
                                    {link.title}
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
