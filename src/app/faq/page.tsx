import FAQ from "@/components/faq";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { FadeIn } from "@/components/ui/fade-in";
import Link from "next/link"; // Correct import for Link

export default function FAQPage() {
    return (
        <main className="min-h-screen bg-base-100 font-body">
            <Header />
            <div className="pt-32 pb-12 bg-base-200">
                <div className="container-wrapper text-center">
                    <FadeIn>
                        <h1 className="text-5xl font-bold font-display text-brand-primary mb-6">Help Center</h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Everything you need to know about our tea, shipping, and subscriptions.
                        </p>
                    </FadeIn>
                </div>
            </div>

            <FAQ />

            <section className="py-12 bg-base-100">
                <div className="container-wrapper max-w-3xl">
                    <FadeIn>
                        <h2 className="text-3xl font-bold font-display text-brand-primary mb-8 text-center">Shipping & Returns</h2>
                        <div className="collapse collapse-plus bg-base-200 mb-4">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">How long does shipping take?</div>
                            <div className="collapse-content">
                                <p>Domestic orders typically arrive within 3-5 business days. International shipping depends on the destination but usually takes 10-14 days.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-base-200 mb-4">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">What is your return policy?</div>
                            <div className="collapse-content">
                                <p>We offer a 30-day happiness guarantee. If you're not satisfied, we'll refund your order, no questions asked.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-base-200 mb-4">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">Do you ship internationally?</div>
                            <div className="collapse-content">
                                <p>Yes! We currently ship to over 20 countries including Canada, UK, Australia, and most of Europe.</p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Page specific Contact CTA */}
            <section className="py-24 bg-brand-secondary/30">
                <div className="container-wrapper text-center">
                    <FadeIn>
                        <h2 className="text-3xl font-bold font-display text-brand-primary mb-6">Still have questions?</h2>
                        <p className="text-gray-600 mb-8">
                            We're here to help. Send us a message and we'll get back to you within 24 hours.
                        </p>
                        <Link href="/contact" className="btn btn-primary btn-lg text-white shadow-xl">
                            Contact Support
                        </Link>
                    </FadeIn>
                </div>
            </section>
            <Footer />
        </main>
    );
}
