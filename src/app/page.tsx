import Header from "@/components/header";
import Hero from "@/components/hero";
import Benefits from "@/components/benefits";
import Ingredients from "@/components/ingredients";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import { FadeIn } from "@/components/ui/fade-in";

export default function Home() {
    return (
        <main className="min-h-screen bg-base-100 font-body">
            <Header />
            <Hero />

            <section className="bg-base-100">
                <Benefits />
            </section>

            <section className="bg-brand-secondary/30 py-12">
                <Ingredients />
            </section>

            {/* Our Process Section (New) */}
            <section className="py-24 bg-base-100">
                <FadeIn className="container-wrapper text-center">
                    <h2 className="text-4xl font-bold font-display text-base-content mb-16">From Farm to Cup</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: "Sourcing", desc: "Hand-picked from organic estate in Assam." },
                            { step: "Blending", desc: "Mixed with Ayurvedic herbs in small batches." },
                            { step: "Testing", desc: "Triple-tested for purity and potency." },
                            { step: "Packaging", desc: "Sealed fresh in eco-friendly bags." }
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center group">
                                <div className="w-16 h-16 rounded-full bg-brand-primary text-white flex items-center justify-center text-xl font-bold mb-6 group-hover:scale-110 transition-transform">
                                    {i + 1}
                                </div>
                                <h3 className="text-2xl font-display mb-2">{item.step}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </FadeIn>
            </section>

            <Testimonials />
            <FAQ />
            <Footer />
        </main>
    );
}
