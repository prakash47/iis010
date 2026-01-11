import Link from "next/link";
import Testimonials from "@/components/testimonials";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function TestimonialsPage() {
    return (
        <main className="min-h-screen bg-base-100 font-body pt-16">
            <Header />
            <Testimonials />

            <section className="py-24 bg-brand-primary/5">
                <div className="container-wrapper text-center">
                    <h2 className="text-3xl font-bold font-display text-brand-primary mb-12">As Seen In</h2>
                    <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {["Wellness Mag", "Tea Time Daily", "Organic Living", "The Daily Brew"].map((brand, i) => (
                            <div key={i} className="text-2xl font-bold font-display text-gray-800">{brand}</div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-base-100">
                <div className="container-wrapper">
                    <div className="rounded-3xl p-12 text-center text-white relative overflow-hidden group shadow-2xl">
                        <div className="absolute inset-0">
                            <img src="/assets/story-bg.png" className="w-full h-full object-cover brightness-50 group-hover:scale-105 transition-transform duration-700" alt="Background" />
                        </div>
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="text-4xl font-bold font-display mb-6">Have a story to tell?</h2>
                            <p className="text-lg opacity-90 mb-8">
                                We love hearing how Vedic Brew has impacted your life. Share your journey with us and get a chance to be featured.
                            </p>
                            <div className="flex justify-center gap-4">
                                <Link href="/submit-story" className="btn btn-secondary text-brand-primary font-bold btn-lg">Submit Your Story</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
