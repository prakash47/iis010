import { FadeIn } from "./ui/fade-in";
import { HoverCard } from "./ui/hover-card";

export default function FAQ() {
    return (
        <section id="faq" className="py-24 bg-base-100">
            <div className="container-wrapper">
                <FadeIn className="text-center mb-16">
                    <h2 className="text-4xl font-bold font-display mb-4">Frequently Asked Questions</h2>
                    <p className="text-gray-500">Curious? We have answers.</p>
                </FadeIn>

                <FadeIn className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Product Category */}
                    <div>
                        <h3 className="text-xl font-bold font-display text-brand-primary mb-6 border-b border-base-300 pb-2">Product & Ingredients</h3>
                        <div className="join join-vertical w-full">
                            <div className="collapse collapse-plus join-item border border-base-300">
                                <input type="radio" name="faq-accordion-1" defaultChecked />
                                <div className="collapse-title text-lg font-medium">Is the tea 100% organic?</div>
                                <div className="collapse-content">
                                    <p className="text-gray-800 font-medium font-body">Yes, every single ingredient is sourced from USDA certified organic farms in India.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-plus join-item border border-base-300">
                                <input type="radio" name="faq-accordion-1" />
                                <div className="collapse-title text-lg font-medium">Does it contain caffeine?</div>
                                <div className="collapse-content">
                                    <p className="text-gray-800 font-medium font-body">Our Energy Blend contains organic green tea (low caffeine). Our Immunity and Calm blends are 100% caffeine-free.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-plus join-item border border-base-300">
                                <input type="radio" name="faq-accordion-1" />
                                <div className="collapse-title text-lg font-medium">Are the tea bags plastic-free?</div>
                                <div className="collapse-content">
                                    <p className="text-gray-800 font-medium font-body">Checking this box means YES! Our tea bags are made from corn starch and are fully biodegradable.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Shipping Category */}
                    <div>
                        <h3 className="text-xl font-bold font-display text-brand-primary mb-6 border-b border-base-300 pb-2">Shipping & Orders</h3>
                        <div className="join join-vertical w-full">
                            <HoverCard className="collapse collapse-plus join-item border border-base-300">
                                <input type="radio" name="faq-accordion-2" defaultChecked />
                                <div className="collapse-title text-lg font-medium">How long does shipping take?</div>
                                <div className="collapse-content">
                                    <p className="text-gray-800 font-medium font-body">We ship within 24 hours. Standard delivery is 3-5 business days.</p>
                                </div>
                            </HoverCard>
                            <HoverCard className="collapse collapse-plus join-item border border-base-300">
                                <input type="radio" name="faq-accordion-2" />
                                <div className="collapse-title text-lg font-medium">Do you ship internationally?</div>
                                <div className="collapse-content">
                                    <p className="text-gray-800 font-medium font-body">Currently we ship to US, Canada, and UK. We are expanding soon!</p>
                                </div>
                            </HoverCard>
                            <HoverCard className="collapse collapse-plus join-item border border-base-300">
                                <input type="radio" name="faq-accordion-2" />
                                <div className="collapse-title text-lg font-medium">What is your return policy?</div>
                                <div className="collapse-content">
                                    <p className="text-gray-800 font-medium font-body">If you don't love your first box, it's on us. 30-day money-back guarantee.</p>
                                </div>
                            </HoverCard>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
