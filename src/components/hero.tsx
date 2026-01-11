"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section id="hero" className="hero min-h-screen bg-base-200 pt-16 overflow-hidden">
            <div className="hero-content flex-col lg:flex-row-reverse container-wrapper gap-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative w-full max-w-sm lg:max-w-md rounded-2xl shadow-2xl overflow-hidden aspect-square bg-gray-100"
                >
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        className="w-full h-full"
                    >
                        <img src="/assets/hero-product.png" alt="Vedic Brew Tea" className="object-cover w-full h-full hover:scale-110 transition-transform duration-700" />
                    </motion.div>
                </motion.div>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                staggerChildren: 0.15
                            }
                        }
                    }}
                    className="text-center lg:text-left"
                >
                    <motion.h1 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-5xl lg:text-7xl font-bold font-display text-brand-primary leading-tight">
                        Nature's <span className="text-brand-accent inline-block">Essence</span> <br /> in Every Sip.
                    </motion.h1>
                    <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="py-6 text-lg text-gray-800 font-medium max-w-xl">
                        Experience the purity of Vedic Brew. 100% Organic, hand-picked ingredients designed to revitalize your mind and body.
                    </motion.p>
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex gap-4 justify-center lg:justify-start">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="/buy-now"
                            className="btn btn-primary btn-lg shadow-lg text-white"
                        >
                            Get Started
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05, x: 5 }}
                            href="/story"
                            className="btn btn-ghost btn-lg"
                        >
                            Learn More
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Background Decor */}
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none opacity-10">
                <img src="/assets/hero_decor_leaf.png" alt="" className="w-full h-full object-contain object-right-top" />
            </div>
        </section>
    );
}
