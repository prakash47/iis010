import ContactForm from "@/components/contact-form";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-base-100 font-body pt-16">
            <Header />
            <section className="py-24 container-wrapper">
                <div className="grid lg:grid-cols-2 gap-24 items-start">
                    <div>
                        <h1 className="text-5xl font-bold font-display text-brand-primary mb-6">Contact Us</h1>
                        <p className="text-lg text-gray-600 mb-8">
                            Have questions about our organic blends? We'd love to hear from you.
                            Fill out the form and our team will get back to you within 24 hours.
                        </p>
                        <div className="flex flex-col gap-4 text-gray-600">
                            <p><strong>Email:</strong> hello@vedicbrew.com</p>
                            <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                            <p><strong>Address:</strong> 123 Green Way, Tea Valley, CA</p>
                        </div>
                    </div>
                    <ContactForm />
                </div>
            </section>

            {/* Additional Contact Info */}
            <section className="pb-24 bg-base-100">
                <div className="container-wrapper">
                    <div className="grid md:grid-cols-3 gap-8 mb-24">
                        {[
                            { title: "Wholesale", email: "wholesale@vedicbrew.com", desc: "Interested in stocking Vedic Brew?" },
                            { title: "Press", email: "press@vedicbrew.com", desc: "For media inquiries and kits." },
                            { title: "Careers", email: "careers@vedicbrew.com", desc: "Join our growing family." }
                        ].map((item, i) => (
                            <div key={i} className="card bg-base-200 p-8 text-center hover:shadow-lg transition-shadow">
                                <h3 className="text-xl font-bold font-display text-brand-primary mb-2">{item.title}</h3>
                                <p className="text-gray-600 mb-4">{item.desc}</p>
                                <a href={`mailto:${item.email}`} className="link link-hover text-brand-accent font-bold">{item.email}</a>
                            </div>
                        ))}
                    </div>

                    <div className="w-full h-96 bg-gray-100 rounded-2xl overflow-hidden relative shadow-inner">
                        <img src="/assets/tea_valley_map_stylized.png" className="w-full h-full object-cover" alt="Our Location in Tea Valley" />
                        <div className="absolute bottom-4 right-4 bg-white/90 p-4 rounded-xl shadow-lg backpack-blur-sm">
                            <p className="font-bold text-brand-primary text-sm">Vedic Brew HQ</p>
                            <p className="text-xs text-gray-600">123 Green Way, Tea Valley, CA</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
