import Benefits from "@/components/benefits";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { FadeIn } from "@/components/ui/fade-in";

export default function BenefitsPage() {
    return (
        <main className="min-h-screen bg-base-100 font-body">
            <Header />
            <div className="pt-32 pb-12 bg-base-200">
                <div className="container-wrapper text-center">
                    <FadeIn>
                        <h1 className="text-5xl font-bold font-display text-brand-primary mb-6">More Than Just Tea</h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Discover how Vedic Brew transforms your daily routine into a ritual of wellness.
                        </p>
                    </FadeIn>
                </div>
            </div>
            <Benefits />
            {/* Page specific content */}
            <section className="py-24 bg-brand-secondary/20">
                <div className="container-wrapper text-center">
                    <FadeIn>
                        <h2 className="text-3xl font-bold font-display text-brand-primary mb-8">Clinically Studied Herbs</h2>
                        <div className="grid md:grid-cols-2 gap-12 text-left bg-white p-8 rounded-3xl shadow-lg">
                            <div>
                                <h3 className="text-xl font-bold mb-4">Why Adaptogens?</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Adaptogens like Tulsi and Ashwagandha help your body resist stressors of all kinds, whether physical, chemical or biological. These herbs have been used for centuries in Ayurveda to restore balance.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-4">The Synergy Effect</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    When Turmeric is combined with Black Pepper, its absorption increases by 2000%. We design our blends not just for taste, but for maximum bio-availability.
                                </p>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn className="mt-24">
                        <h2 className="text-3xl font-bold font-display text-brand-primary mb-12">Your Daily Ritual</h2>
                        <div className="grid md:grid-cols-3 gap-8 text-left">
                            <div className="card bg-base-100 shadow-xl border-t-8 border-brand-accent">
                                <div className="card-body">
                                    <h3 className="text-xl font-bold mb-2">Morning</h3>
                                    <p className="text-gray-600">Start with our <span className="font-semibold text-brand-primary">Energy Blend</span>. A gentle lift without the coffee crash.</p>
                                </div>
                            </div>
                            <div className="card bg-base-100 shadow-xl border-t-8 border-brand-primary">
                                <div className="card-body">
                                    <h3 className="text-xl font-bold mb-2">Afternoon</h3>
                                    <p className="text-gray-600">Sip on the <span className="font-semibold text-brand-primary">Digestive Blend</span> after lunch to reset and refocus.</p>
                                </div>
                            </div>
                            <div className="card bg-base-100 shadow-xl border-t-8 border-brand-secondary">
                                <div className="card-body">
                                    <h3 className="text-xl font-bold mb-2">Evening</h3>
                                    <p className="text-gray-600">Unwind with the <span className="font-semibold text-brand-primary">Calm Blend</span>. Tulsi to soothe the nervous system.</p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>
            <Footer />
        </main>
    );
}
