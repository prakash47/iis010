"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { FadeIn } from "@/components/ui/fade-in";
import Image from "next/image";

export default function StoryPage() {
    return (
        <main className="min-h-screen bg-base-100 font-body">
            <Header />

            {/* Hero Section */}
            <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/assets/story-bg.png"
                        alt="Tea Plantation"
                        fill
                        className="object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-base-100/10 to-base-100"></div>
                </div>
                {/* Decorative Rotating Element */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-20 pointer-events-none animate-[spin_60s_linear_infinite]">
                    <Image
                        src="/assets/decorative-circle-v2.png"
                        alt="Decorative Element"
                        fill
                        className="object-contain"
                    />
                </div>
                <div className="relative z-10 text-center px-4">
                    <FadeIn>
                        <h1 className="text-5xl md:text-7xl font-display font-bold text-brand-primary mb-6">Our Origins</h1>
                        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">Rooted in tradition, brewed for modern life.</p>
                    </FadeIn>
                </div>
            </div>

            <div className="container-wrapper py-24">
                {/* Section 1: The Beginning */}
                <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
                    <FadeIn direction="right">
                        {/* Image removed as per user request */}
                        <div className="hidden md:block aspect-[4/5]"></div>
                    </FadeIn>
                    <FadeIn direction="left">
                        <h2 className="text-4xl font-bold font-display text-brand-primary mb-6">It Started with a Question.</h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            "Why do we accept jittery energy as the norm?"
                        </p>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            Our founder, after years of corporate burnout, returned to his ancestral roots in Assam, India. There, he rediscovered the healing power of Ayurvedic tea blends. It wasn't just about caffeine; it was about balance.
                        </p>
                        <div className="border-l-4 border-brand-accent pl-6 py-2 bg-base-200/50 rounded-r-lg">
                            <p className="italic text-gray-700">"We wanted to create a beverage that fuels your ambition without sacrificing your peace."</p>
                        </div>
                    </FadeIn>
                </div>

                {/* Section 2: Values */}
                <FadeIn className="bg-brand-primary text-white rounded-[3rem] p-12 md:p-24 mb-32 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-accent/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                    <div className="relative z-10 text-center max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-16">Our Core Values</h2>
                        <div className="grid md:grid-cols-3 gap-12">
                            {[
                                { title: "Purity", desc: "No artificial flavors. No preservatives. Just 100% organic goodness." },
                                { title: "Sustainability", desc: "Ethically taken from farms that respect the earth and their workers." },
                                { title: "Transparency", desc: "We tell you exactly what's in your cup and where it came from." }
                            ].map((v, i) => (
                                <div key={i} className="group">
                                    <div className="w-16 h-16 border border-white/30 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-display group-hover:bg-white group-hover:text-brand-primary transition-all duration-300">
                                        {i + 1}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">{v.title}</h3>
                                    <p className="text-white/80 leading-relaxed">{v.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </FadeIn>

                {/* Section 3: The Mission */}
                <div className="text-center max-w-3xl mx-auto">
                    <FadeIn>
                        <h2 className="text-4xl font-bold font-display text-brand-primary mb-8">Ready to join the movement?</h2>
                        <p className="text-xl text-gray-600 mb-12">Experience the difference of a tea that actually cares about your well-being.</p>
                        <a href="/buy-now" className="btn btn-primary btn-lg text-white shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all rounded-full px-12">
                            Shop the Collection
                        </a>
                    </FadeIn>
                </div>
            </div>
            <Footer />
        </main>
    );
}
