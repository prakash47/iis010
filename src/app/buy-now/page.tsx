"use client";

import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { FadeIn } from "@/components/ui/fade-in";
import { Check, ShoppingBag } from "lucide-react";

export default function BuyNowPage() {
    const [quantity, setQuantity] = useState(1);
    const pricePerUnit = 29.99;

    return (
        <main className="min-h-screen bg-base-100 font-body">
            <Header />
            <div className="pt-32 pb-24 container-wrapper">
                <FadeIn>
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Product Image Placeholder */}
                        <div className="bg-brand-secondary/50 rounded-3xl aspect-square flex items-center justify-center relative overflow-hidden group shadow-xl">
                            <div className="absolute inset-0 bg-brand-primary/10 group-hover:bg-brand-primary/20 transition-colors" />
                            <img src="/assets/hero-product.png" alt="Signature Blend" className="relative z-10 w-3/4 hover:scale-110 transition-transform duration-500 drop-shadow-2xl" />
                        </div>

                        {/* Product Details */}
                        <div>
                            <div className="badge badge-accent mb-4">Best Seller</div>
                            <h1 className="text-5xl font-display font-bold text-brand-primary mb-4">Vedic Brew Signature</h1>
                            <p className="text-2xl font-bold text-gray-900 mb-6">$ {pricePerUnit}</p>

                            <p className="text-gray-800 font-medium text-lg mb-8 leading-relaxed">
                                Experience the perfect harmony of energy and calm. Our signature blend combines premium green tea with 12 Ayurvedic herbs for peak performance and serenity.
                            </p>

                            <div className="space-y-3 mb-8">
                                {["100% Organic Ingredients", "30-Day Money Back Guarantee", "Free Shipping on 2+ Packs"].map((feat, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-brand-primary/20 flex items-center justify-center">
                                            <Check className="w-4 h-4 text-brand-primary" />
                                        </div>
                                        <span>{feat}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="divider"></div>

                            <div className="flex items-center gap-4 mb-8">
                                <span className="font-bold">Quantity:</span>
                                <div className="join border border-base-300">
                                    <button className="join-item btn btn-sm btn-ghost" onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
                                    <span className="join-item btn btn-sm btn-ghost no-animation cursor-default w-12">{quantity}</span>
                                    <button className="join-item btn btn-sm btn-ghost" onClick={() => setQuantity(q => q + 1)}>+</button>
                                </div>
                            </div>

                            <button className="btn btn-primary btn-lg w-full text-white shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
                                Buy Now - ${(quantity * pricePerUnit).toFixed(2)}
                            </button>
                            <p className="text-xs text-center text-gray-400 mt-4">Secure Checkout via Stripe</p>
                        </div>
                    </div>

                    <div className="mt-24 grid md:grid-cols-3 gap-12">
                        <div className="col-span-2">
                            <h3 className="text-2xl font-bold font-display text-brand-primary mb-6">What's Inside the Box?</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Each box of Vedic Brew Signature contains 30 biodegradable pyramid tea bags, sealed for freshness. Inside, you'll find a guide to mindful brewing and a small gratitude card from the farmer who harvested your batch.
                            </p>
                            <ul className="grid grid-cols-2 gap-4">
                                <li className="flex items-center gap-2"><div className="w-2 h-2 bg-brand-accent rounded-full"></div> <span>30 Pyramid Tea Bags</span></li>
                                <li className="flex items-center gap-2"><div className="w-2 h-2 bg-brand-accent rounded-full"></div> <span>Brewing Guide</span></li>
                                <li className="flex items-center gap-2"><div className="w-2 h-2 bg-brand-accent rounded-full"></div> <span>Farmer's Note</span></li>
                                <li className="flex items-center gap-2"><div className="w-2 h-2 bg-brand-accent rounded-full"></div> <span>Recyclable Outer Box</span></li>
                            </ul>
                        </div>
                        <div className="bg-brand-secondary/30 rounded-2xl p-8">
                            <h3 className="text-xl font-bold font-display mb-4">Subscription Benefits</h3>
                            <p className="text-sm text-gray-600 mb-4">Save 15% when you subscribe to monthly deliveries.</p>
                            <button className="btn btn-outline btn-primary w-full">Subscribe & Save</button>
                        </div>
                    </div>
                </FadeIn>
            </div>
            <Footer />
        </main>
    );
}
