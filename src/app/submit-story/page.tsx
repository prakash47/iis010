"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { FadeIn } from "@/components/ui/fade-in";
import { useState } from "react";
import { Star } from "lucide-react";

export default function SubmitStoryPage() {
    const [rating, setRating] = useState(5);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate submission
        setTimeout(() => {
            setSubmitted(true);
        }, 1000);
    };

    return (
        <main className="min-h-screen bg-base-100 font-body">
            <Header />
            <div className="pt-32 pb-24 container-wrapper">
                <div className="max-w-2xl mx-auto">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-primary mb-4">Share Your Journey</h1>
                            <p className="text-lg text-gray-600">Your story could inspire someone else to find their balance.</p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2} className="card bg-white shadow-xl border border-base-200">
                        <div className="card-body p-8 md:p-12">
                            {submitted ? (
                                <div className="text-center py-12">
                                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold font-display text-brand-primary mb-4">Thank You!</h3>
                                    <p className="text-gray-600">Your story has been submitted successfully. We review every submission and will reach out if we'd like to feature you.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold text-base-content">Name</span>
                                        </label>
                                        <input type="text" placeholder="Your Name" className="input input-bordered w-full" required />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold text-base-content">Email</span>
                                        </label>
                                        <input type="email" placeholder="email@example.com" className="input input-bordered w-full" required />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold text-base-content">Role / Occupation <span className="font-normal text-gray-400">(Optional)</span></span>
                                        </label>
                                        <input type="text" placeholder="e.g. Yoga Instructor, Developer" className="input input-bordered w-full" />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold text-base-content">Rating</span>
                                        </label>
                                        <div className="flex gap-2">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <button
                                                    key={star}
                                                    type="button"
                                                    onClick={() => setRating(star)}
                                                    className="focus:outline-none transition-transform hover:scale-110"
                                                >
                                                    <Star
                                                        className={`w-8 h-8 ${star <= rating ? "fill-brand-accent text-brand-accent" : "text-gray-300"}`}
                                                    />
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold text-base-content">Your Story</span>
                                        </label>
                                        <textarea
                                            className="textarea textarea-bordered h-40 text-base"
                                            placeholder="How has Vedic Brew helped you? What's your favorite ritual?"
                                            required
                                        ></textarea>
                                    </div>

                                    <button type="submit" className="btn btn-primary w-full text-white text-lg">Submit Story</button>
                                </form>
                            )}
                        </div>
                    </FadeIn>
                </div>
            </div>
            <Footer />
        </main>
    );
}
