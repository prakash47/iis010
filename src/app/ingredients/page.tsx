import Ingredients from "@/components/ingredients";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { FadeIn } from "@/components/ui/fade-in";
import { MapPin } from "lucide-react";

export default function IngredientsPage() {
    return (
        <main className="min-h-screen bg-base-100 font-body">
            <Header />
            <div className="pt-32 pb-12 bg-base-200">
                <div className="container-wrapper text-center">
                    <FadeIn>
                        <h1 className="text-5xl font-bold font-display text-brand-primary mb-6">Rooted in Earth</h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Every leaf tells a story of the soil it grew in and the hands that improved it.
                        </p>
                    </FadeIn>
                </div>
            </div>

            <Ingredients />

            <section className="py-24 bg-base-100">
                <div className="container-wrapper">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <FadeIn>
                            <h2 className="text-4xl font-bold font-display text-brand-primary mb-6">The Art of Blending</h2>
                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                Our master blenders have spent decades perfecting the ratio of spice to tea. It's not just about throwing ingredients together; it's about creating a symphony where every note is heard.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-4">
                                    <div className="w-2 h-2 rounded-full bg-brand-accent"></div>
                                    <span className="font-medium text-gray-800">Small batch processing to ensure freshness</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <div className="w-2 h-2 rounded-full bg-brand-accent"></div>
                                    <span className="font-medium text-gray-800">Traditional stone-grinding for spices</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <div className="w-2 h-2 rounded-full bg-brand-accent"></div>
                                    <span className="font-medium text-gray-800">Airtight packaging immediately after blending</span>
                                </li>
                            </ul>
                        </FadeIn>
                        <FadeIn delay={0.2} className="relative aspect-square rounded-full overflow-hidden shadow-2xl">
                            <img src="/assets/ingredients-showcase.png" alt="Art of Blending" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Page specific Sourcing Section */}
            <section className="py-24 bg-brand-primary text-white">
                <div className="container-wrapper">
                    <FadeIn className="text-center mb-16">
                        <h2 className="text-4xl font-bold font-display mb-6">Ethical Sourcing</h2>
                        <p className="max-w-2xl mx-auto text-white/80">
                            We work directly with small-holder farmers causing a positive ripple effect in their communities.
                        </p>
                    </FadeIn>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { region: "Assam, India", crop: "Green Tea", desc: "Shade-grown in the Brahmaptura valley." },
                            { region: "Kerala, India", crop: "Spices", desc: "Harvested from biodynamic forest gardens." },
                            { region: "Sikkim, India", crop: "Available Ginger", desc: "From the world's first fully organic state." }
                        ].map((loc, i) => (
                            <FadeIn key={i} delay={i * 0.1} className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20">
                                <MapPin className="w-8 h-8 mb-4 text-brand-accent" />
                                <h3 className="text-xl font-bold mb-2">{loc.region}</h3>
                                <div className="badge badge-accent text-brand-primary font-bold mb-4">{loc.crop}</div>
                                <p className="text-sm text-white/70">{loc.desc}</p>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
