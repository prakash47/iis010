import { Star, MessageCircle, Quote } from "lucide-react";
import { FadeIn } from "./ui/fade-in";
import { HoverCard } from "./ui/hover-card";

const reviews = [
    {
        name: "Sarah Jenkins",
        role: "Yoga Instructor",
        text: "I've replaced my morning coffee with the Energy Blend. No jitters, just pure focus for my classes.",
        rating: 5,
        avatar: "S",
    },
    {
        name: "David Chen",
        role: "Software Engineer",
        text: "The mental clarity I get from this tea is unmatched. Perfect for long coding sessions.",
        rating: 5,
        avatar: "D",
    },
    {
        name: "Emily Rodriguez",
        role: "Nutritionist",
        text: "As a nutritionist, I appreciate the organic sourcing. You can taste the purity in every sip.",
        rating: 5,
        avatar: "E",
    },
    {
        name: "Michael Thompson",
        role: "Writer",
        text: "The Tulsi blend is my go-to for evening relaxation. It truly helps me unwind after a deadlines.",
        rating: 4,
        avatar: "M",
    },
    {
        name: "Priya Patel",
        role: "Student",
        text: "Studying has never been easier. Focus + Calm = Vedic Brew.",
        rating: 5,
        avatar: "P",
    },
    {
        name: "James Wilson",
        role: "Architect",
        text: "A ritual I look forward to every day. The aroma alone is therapeutic.",
        rating: 5,
        avatar: "J",
    },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-24 bg-base-100">
            <div className="container-wrapper">
                <FadeIn className="text-center mb-16">
                    <h2 className="text-4xl font-bold font-display mb-4">Community Love</h2>
                    <p className="text-gray-700 text-lg">Join thousands who have elevated their daily ritual.</p>
                </FadeIn>

                {/* Featured Story */}
                <FadeIn delay={0.2} className="card lg:card-side text-white shadow-xl mb-24 overflow-hidden relative group">
                    <div className="absolute inset-0 z-0">
                        <img src="/assets/featured_story_cover.png" alt="Featured Background" className="w-full h-full object-cover brightness-50 group-hover:scale-105 transition-transform duration-700" />
                    </div>

                    <div className="w-full lg:w-1/3 min-h-[300px] relative z-10 border-r border-white/10 hidden lg:block">
                        {/* Quote icon removed as per user request */}
                    </div>
                    <div className="card-body lg:w-2/3 relative z-10">
                        <div className="badge badge-accent mb-4 text-brand-primary font-bold">Featured Story</div>
                        <h3 className="card-title text-3xl font-display mb-4">"It changed my relationship with stress."</h3>
                        <p className="text-lg opacity-90 leading-relaxed">
                            "I used to rely on 4 cups of coffee just to get through the afternoon slump. Vedic Brew wasn't just a swap; it was a lifestyle change. The immunity blend kept me healthy through flu season, and the energy blend gives me a steady stream of vitality without the crash. It's not just tea; it's medicine."
                        </p>
                        <div className="flex items-center gap-4 mt-6">
                            <div className="avatar placeholder">
                                <div className="bg-white/20 text-white rounded-full w-12 flex flex-col items-center justify-center backdrop-blur-sm">
                                    <span className="text-xl leading-none">A</span>
                                </div>
                            </div>
                            <div>
                                <div className="font-bold text-lg">Amanda Richardson</div>
                                <div className="text-sm opacity-75">Verified Buyer • Subscriber for 2 years</div>
                            </div>
                        </div>
                    </div>
                </FadeIn>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((r, i) => (
                        <FadeIn key={i} delay={0.1 * i}>
                            <HoverCard className="card bg-base-200 border border-base-300 h-full">
                                <div className="card-body">
                                    <div className="flex gap-1 text-brand-accent mb-3">
                                        {[...Array(r.rating)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-current" />
                                        ))}
                                    </div>
                                    <p className="text-gray-800 mb-6 italic font-medium">"{r.text}"</p>
                                    <div className="flex items-center gap-4">
                                        <div className="avatar placeholder">
                                            <div className="bg-brand-primary text-white rounded-full w-10 flex items-center justify-center">
                                                <span className="text-center">{r.avatar}</span>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm">{r.name}</h4>
                                            <span className="text-xs text-gray-500">{r.role}</span>
                                        </div>
                                    </div>
                                </div>
                            </HoverCard>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
