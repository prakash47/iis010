import { Zap, ShieldCheck, Leaf, Brain, Heart, Sun } from "lucide-react";
import { FadeIn } from "./ui/fade-in";
import { HoverCard } from "./ui/hover-card";

const benefits = [
    {
        icon: <Leaf className="w-10 h-10 text-brand-primary" />,
        title: "100% Organic",
        desc: "Sourced directly from certified organic farms, ensuring zero pesticides.",
    },
    {
        icon: <Zap className="w-10 h-10 text-brand-accent" />,
        title: "Natural Energy",
        desc: "Provides a sustained energy boost without the jittery crash of coffee.",
    },
    {
        icon: <ShieldCheck className="w-10 h-10 text-blue-500" />,
        title: "Immunity Boost",
        desc: "Packed with antioxidants to help strengthen your immune system.",
    },
    {
        icon: <Brain className="w-10 h-10 text-purple-500" />,
        title: "Mental Clarity",
        desc: "Ingredients known to enhance focus and reduce mental fatigue.",
    },
    {
        icon: <Heart className="w-10 h-10 text-red-500" />,
        title: "Heart Health",
        desc: "Supports cardiovascular health with anti-inflammatory properties.",
    },
    {
        icon: <Sun className="w-10 h-10 text-yellow-500" />,
        title: "Digestive Aid",
        desc: "Ginger and Tulsi help soothe the stomach and improve digestion.",
    },
];

export default function Benefits() {
    return (
        <section id="benefits" className="py-24 bg-base-100">
            <div className="container-wrapper">
                <FadeIn className="text-center mb-16">
                    <h2 className="text-4xl font-bold font-display mb-4">Why Vedic Brew?</h2>
                    <p className="text-gray-700 text-lg max-w-2xl mx-auto">Ancient wisdom meets modern wellness. Discover the comprehensive benefits of our signature blend.</p>
                </FadeIn>

                <div className="grid md:grid-cols-3 gap-8 mb-24">
                    {benefits.map((b, i) => (
                        <FadeIn key={i} delay={i * 0.1}>
                            <HoverCard className="card bg-base-200 shadow-xl h-full">
                                <div className="card-body items-center text-center">
                                    <div className="mb-4 bg-white p-4 rounded-full shadow-sm">{b.icon}</div>
                                    <h3 className="card-title font-display text-2xl">{b.title}</h3>
                                    <p>{b.desc}</p>
                                </div>
                            </HoverCard>
                        </FadeIn>
                    ))}
                </div>

                <FadeIn delay={0.2} className="bg-brand-primary/5 rounded-3xl p-8 lg:p-16">
                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <h3 className="text-3xl font-bold font-display text-brand-primary mb-6">The Science Behind the Brew</h3>
                            <p className="text-lg text-gray-700 mb-6">
                                Our blend isn't just tradition; it's backed by science. Each ingredient is selected for its bio-active compounds.
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-800 font-medium">
                                <li><strong>Curcumin (Turmeric):</strong> A potent anti-inflammatory compound.</li>
                                <li><strong>Gingerol (Ginger):</strong> Known to aid digestion and reduce nausea.</li>
                                <li><strong>Piperine (Black Pepper):</strong> Increases Curcumin absorption by 2000%.</li>
                                <li><strong>Eugenol (Holy Basil):</strong> Reduces stress and cortisol levels.</li>
                            </ul>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-brand-primary/10 hover:shadow-2xl transition-shadow duration-300">
                            <div className="stat">
                                <div className="stat-title">Antioxidant Level</div>
                                <div className="stat-value text-brand-primary">High</div>
                                <div className="stat-desc">Compared to standard green tea</div>
                            </div>
                            <div className="stat border-t border-base-200">
                                <div className="stat-title">Bio-Availability</div>
                                <div className="stat-value text-brand-accent">20x</div>
                                <div className="stat-desc">Enhanced absorption</div>
                            </div>
                        </div>
                    </div>

                    {/* New Lifestyle Section */}
                    <div className="text-center border-t border-brand-primary/10 pt-16">
                        <h3 className="text-3xl font-bold font-display text-brand-primary mb-8">Seamlessly Fits Your Day</h3>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="p-6 bg-white rounded-xl shadow-sm">
                                <span className="text-4xl mb-4 block">🌅</span>
                                <h4 className="font-bold text-lg mb-2">Morning Ritual</h4>
                                <p className="text-gray-600 text-sm">Replace your caffeine crash with sustained energy.</p>
                            </div>
                            <div className="p-6 bg-white rounded-xl shadow-sm">
                                <span className="text-4xl mb-4 block">🧘</span>
                                <h4 className="font-bold text-lg mb-2">Post-Workout</h4>
                                <p className="text-gray-600 text-sm">Reduce inflammation and aid recovery.</p>
                            </div>
                            <div className="p-6 bg-white rounded-xl shadow-sm">
                                <span className="text-4xl mb-4 block">🌙</span>
                                <h4 className="font-bold text-lg mb-2">Evening Wind-down</h4>
                                <p className="text-gray-600 text-sm">Calm the mind without sleep disruption.</p>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
