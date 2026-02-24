import Image from 'next/image';
import { ChevronDown, MapPin, Utensils, Phone } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { PizzaMenu } from '@/components/PizzaMenu';
import { Gallery } from '@/components/Gallery';
import { Contact } from '@/components/Contacts';
import { Delivery } from '@/components/Delivery';

export default function Home() {
    return (
        <main className="min-h-screen bg-heydayDark text-white">
            <div
                className="fixed inset-0 z-0 pointer-events-none brightness-30 contrast-[1.1]"
                style={{
                    backgroundImage: "url('/bricks1.jpg')",
                    backgroundSize: '550px',
                    backgroundRepeat: 'repeat',
                    scale: '3'
                }}
            />
            <Navbar />


            {/* Hero Section */}
            <section className="relative h-[100vh] flex flex-col items-center justify-center px-4 overflow-hidden">

                {/* Background Video */}
                <div className="absolute inset-0 z-0 bg-black">
                    <div className="absolute inset-0 bg-black/5 z-10 pointer-events-none" />
                    <video
                        src="/pizzavideo.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        suppressHydrationWarning
                        className="absolute inset-0 w-full h-full object-cover opacity-100 brightness-100"
                    />
                    {/* Vignette effect */}
                    <div
                        className="absolute inset-0 z-20 pointer-events-none"
                        style={{
                            background: 'radial-gradient(circle, transparent 20%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.9) 100%)'
                        }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-b from-transparent from-30% via-black/60 via-70% to-black z-30" />
                </div>

                {/* Foreground Content */}
                <div className="relative z-30 text-center flex flex-col items-center mt-16 w-full max-w-3xl">
                    <div className="mb-8 animate-fade-in">
                        <Image
                            src="/logo.png"
                            alt="Pizzeria Heyday Logo"
                            width={220}
                            height={220}
                            className="drop-shadow-2xl"
                        />
                    </div>

                    <h1 className="text-4xl md:text-6xl font-serif mb-10 leading-tight">
                        Pravá chuť pizze <br />
                        <span className="text-heydayRed italic font-light">priamo z pece</span>
                    </h1>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg mx-auto px-4 md:px-0">

                        {/* Call Button 1 */}
                        <a href="tel:0908666994" className="group bg-white/10 backdrop-blur-md hover:bg-white/20 border border-heydayRed transition-all duration-300 px-6 py-3 rounded-full font-semibold text-lg flex items-center justify-center gap-3 hover:shadow-[0_0_20px_rgba(155,27,27,0.6)]">
                            <Phone size={18} className="text-heydayRed animate-pulse" />
                            <span className="group-hover:text-heydayRed transition-colors">0908 666 994</span>
                        </a>

                        {/* Call Button 2 */}
                        <a href="tel:0908666106" className="group bg-white/10 backdrop-blur-md hover:bg-white/20 border border-heydayRed transition-all duration-300 px-6 py-3 rounded-full font-semibold text-lg flex items-center justify-center gap-3 hover:shadow-[0_0_20px_rgba(155,27,27,0.6)]">
                            <Phone size={18} className="text-heydayRed animate-pulse" />
                            <span className="group-hover:text-heydayRed transition-colors">0908 666 106</span>
                        </a>

                        {/* Menu Navigation Button */}
                        <a href="#menu" className="group bg-white/5 backdrop-blur-md hover:bg-white/10 border border-white/20 hover:border-heydayRed transition-all duration-300 px-6 py-3 rounded-full font-medium text-base text-gray-200 flex items-center justify-center gap-3 hover:shadow-[0_0_15px_rgba(155,27,27,0.4)]">
                            <Utensils size={18} className="group-hover:text-heydayRed transition-colors" />
                            <span className="group-hover:text-heydayRed transition-colors">Menu</span>
                        </a>

                        {/* Location/Contact Navigation Button */}
                        <a href="#kontakt" className="group bg-white/5 backdrop-blur-md hover:bg-white/10 border border-white/20 hover:border-heydayRed transition-all duration-300 px-6 py-3 rounded-full font-medium text-base text-gray-200 flex items-center justify-center gap-3 hover:shadow-[0_0_15px_rgba(155,27,27,0.4)]">
                            <MapPin size={18} className="group-hover:text-heydayRed transition-colors" />
                            <span className="group-hover:text-heydayRed transition-colors">Kde sme?</span>
                        </a>

                    </div>
                </div>

                {/* Scroll Down Indicator */}
                <div className="absolute bottom-8 z-30 animate-bounce opacity-40">
                    <ChevronDown size={32} />
                </div>
            </section>

            {/* Sections */}
            <PizzaMenu />
            <Gallery />
            <Delivery />
            <Contact />
        </main>
    );
}