import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-brand-primary text-primary-content">
            <div className="container-wrapper p-10 flex flex-col md:flex-row justify-between items-start gap-10 text-white/80">
                <aside className="max-w-xs">
                    <span className="font-bold text-3xl font-display text-white">Vedic Brew</span>
                    <p className="mt-4 leading-relaxed">
                        Blending ancient ayurvedic wisdom with modern wellness science to bring you the perfect cup of vitality.
                    </p>
                </aside>
                <div className="flex flex-col md:flex-row gap-10 md:gap-24">
                    <nav className="flex flex-col gap-2">
                        <header className="font-bold text-white mb-2">Company</header>
                        <Link href="/story" className="hover:text-white transition-colors">Our Story</Link>
                        <Link href="/careers" className="hover:text-white transition-colors">Careers</Link>
                        <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
                        <Link href="/press" className="hover:text-white transition-colors">Press</Link>
                    </nav>
                    <nav className="flex flex-col gap-2">
                        <header className="font-bold text-white mb-2">Shop</header>
                        <Link href="/buy-now" className="hover:text-white transition-colors">Signature Blend</Link>
                        <Link href="/ingredients" className="hover:text-white transition-colors">Ingredients</Link>
                        <Link href="/faq" className="hover:text-white transition-colors">Shipping & Returns</Link>
                    </nav>
                </div>
            </div>
            <div className="px-10 py-6 border-t border-white/10 bg-brand-primary/90 text-primary-content flex flex-col md:flex-row justify-between items-center container-wrapper">
                <p className="text-white/60 text-sm">© 2024 Vedic Brew Inc. All rights reserved.</p>
                <div className="flex gap-6 mt-2 md:mt-0">
                    <Link href="/privacy" className="link link-hover text-xs text-white/60">Privacy Policy</Link>
                    <Link href="/terms" className="link link-hover text-xs text-white/60">Terms</Link>
                </div>
            </div>
        </footer>
    );
}
