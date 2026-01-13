"use client";

import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    const menuVariants: Variants = {
        closed: {
            opacity: 0,
            x: "100%",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        },
        open: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        }
    };

    const linkVariants: Variants = {
        closed: { x: 50, opacity: 0 },
        open: (i: number) => ({
            x: 0,
            opacity: 1,
            transition: {
                delay: i * 0.1,
                type: "spring",
                stiffness: 300,
                damping: 24
            }
        })
    };

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className="navbar bg-base-100/90 backdrop-blur-md fixed top-0 w-full z-50 border-b border-base-200"
        >
            <div className="container-wrapper navbar justify-between">
                <div className="navbar-start w-auto">
                    <Link href="/" className="btn btn-ghost text-xl font-display text-brand-primary z-50 relative">Vedic Brew</Link>
                </div>

                {/* Desktop Menu */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-medium gap-2">
                        {["Benefits", "Ingredients", "Reviews", "FAQ", "Contact"].map((item, i) => (
                            <li key={i}>
                                <div className="relative group overflow-hidden">
                                    <Link href={item === "Reviews" ? "/testimonials" : `/${item.toLowerCase().replace(" ", "-")}`}>
                                        <span className="relative z-10 group-hover:text-brand-primary transition-colors duration-300">{item}</span>
                                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                                    </Link>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="navbar-end w-auto hidden lg:flex">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link href="/buy-now" className="btn btn-primary text-white shadow-md hover:shadow-xl transition-all">Buy Now</Link>
                    </motion.div>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="navbar-end w-auto lg:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="btn btn-ghost z-50 relative">
                        {isOpen ? <X className="w-6 h-6 text-brand-primary" /> : <Menu className="w-6 h-6 text-brand-primary" />}
                    </button>
                </div>
            </div>

            {/* Mobile Full Screen Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        className="fixed inset-0 bg-base-100 z-40 flex flex-col items-center justify-center lg:hidden"
                    >
                        <nav className="flex flex-col items-center gap-8 text-center">
                            {["Benefits", "Ingredients", "Reviews", "FAQ", "Contact"].map((item, i) => (
                                <motion.div
                                    key={item}
                                    custom={i}
                                    variants={linkVariants}
                                >
                                    <Link
                                        href={item === "Reviews" ? "/testimonials" : `/${item.toLowerCase().replace(" ", "-")}`}
                                        className="text-3xl font-display font-bold text-gray-800 hover:text-brand-primary transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                custom={5}
                                variants={linkVariants}
                                className="mt-8"
                            >
                                <Link
                                    href="/buy-now"
                                    className="btn btn-primary btn-lg text-white shadow-xl min-w-[200px]"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Buy Now
                                </Link>
                            </motion.div>
                        </nav>

                        {/* Decorative background element */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-primary/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
