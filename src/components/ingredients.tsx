"use client";

import { FadeIn } from "./ui/fade-in";
import { HoverCard } from "./ui/hover-card";

export default function Ingredients() {
    const ingredients = [
        { name: "Turmeric", origin: "Kerala, India", benefit: "Anti-inflammatory" },
        { name: "Ginger", origin: "Sikkim, India", benefit: "Digestive Aid" },
        { name: "Black Pepper", origin: "Malabar Coast", benefit: "Absorption Booster" },
        { name: "Holy Basil (Tulsi)", origin: "Uttar Pradesh", benefit: "Stress Relief" },
        { name: "Cinnamon", origin: "Sri Lanka", benefit: "Blood Sugar Support" },
    ];

    return (
        <section id="ingredients" className="py-24 bg-brand-primary/5 relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <img src="/assets/ingredients-bg.png" className="w-full h-full object-cover grayscale" />
            </div>

            <div className="container-wrapper relative z-10">
                <FadeIn className="text-center mb-16">
                    <h2 className="text-4xl font-bold font-display">Pure Ingredients</h2>
                    <p className="text-gray-800 font-medium mt-4 max-w-2xl mx-auto">No fillers. Just nature's finest, ethically sourced from the most pristine regions of India.</p>
                </FadeIn>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div className="flex flex-col gap-8">
                        <div className="rounded-2xl overflow-hidden shadow-lg h-64 w-full">
                            <img src="/assets/ingredients-showcase.png" alt="Premium Ingredients" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-wrap justify-center content-start gap-6">
                            {/* Visual simulation of ingredients */}
                            {ingredients.map((item, i) => (
                                <FadeIn key={i} delay={i * 0.1}>
                                    <HoverCard className="card bg-base-100 shadow-md w-full sm:w-auto p-6 border-l-4 border-brand-primary h-full">
                                        <h3 className="font-bold text-lg">{item.name}</h3>
                                        <p className="text-xs text-gray-500 uppercase tracking-wide mt-1">Origin: {item.origin}</p>
                                        <p className="text-sm mt-2 text-brand-primary">{item.benefit}</p>
                                    </HoverCard>
                                </FadeIn>
                            ))}
                        </div>
                    </div>

                    <FadeIn delay={0.3} className="overflow-x-auto bg-white rounded-2xl shadow-xl p-8">
                        <h3 className="text-2xl font-bold font-display mb-6">Nutritional Breakdown</h3>
                        <p className="text-sm text-gray-500 mb-6">Per serving (2g tea bag)</p>
                        <table className="table text-gray-900">
                            <thead>
                                <tr>
                                    <th>Nutrient</th>
                                    <th>Amount</th>
                                    <th>% Daily Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Calories</td>
                                    <td>0</td>
                                    <td>0%</td>
                                </tr>
                                <tr className="bg-base-200">
                                    <td>Total Fat</td>
                                    <td>0g</td>
                                    <td>0%</td>
                                </tr>
                                <tr>
                                    <td>Sodium</td>
                                    <td>0mg</td>
                                    <td>0%</td>
                                </tr>
                                <tr className="bg-base-200">
                                    <td>Total Carb.</td>
                                    <td>0g</td>
                                    <td>0%</td>
                                </tr>
                                <tr>
                                    <td>Protein</td>
                                    <td>0g</td>
                                    <td>0%</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="mt-6 text-xs text-gray-400">
                            * Percent Daily Values are based on a 2,000 calorie diet.
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
