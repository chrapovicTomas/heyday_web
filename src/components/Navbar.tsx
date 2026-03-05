"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Menu', href: '#menu' },
        { name: 'Galéria', href: '#priestory' },
        { name: 'Donáška', href: '#donaska' },
        { name: 'Kontakt', href: '#kontakt' },
    ];

    return (

        <>
            {/* Top gradient for readability */}
            <div className={`fixed top-0 left-0 right-0 h-32 z-[90] pointer-events-none transition-opacity duration-500 border-none outline-none ${isScrolled ? 'opacity-0' : 'opacity-100 bg-gradient-to-b from-black/80 to-transparent'
                }`} />

            <nav
                className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 border-none outline-none select-none ${isScrolled
                    ? 'bg-heydayDark/95 backdrop-blur-xl py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
                    : 'bg-transparent py-6'
                    }`}
                style={{ boxShadow: isScrolled ? '0 4px 30px rgba(0,0,0,0.5)' : 'none', border: 'none' }}
            >
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center border-none outline-none">

                    {/* LOGO S EXTRA ŽIAROU */}
                    <a href="#" className="flex items-center gap-4 group">
                        <div className="relative w-12 h-12 md:w-14 md:h-14 transition-transform duration-700 group-hover:rotate-[360deg] drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">
                            <Image src="/logo.png" alt="Logo" fill className="object-contain" />
                        </div>
                        <div className="flex flex-col leading-none">
                            <span className="text-heydayRed text-[10px] uppercase tracking-[0.3em] font-bold">Pizzeria</span>
                            <span className="text-2xl md:text-3xl font-serif text-white transition-all duration-300 group-hover:text-heydayRed group-hover:drop-shadow-[0_0_20px_#9b1b1b] group-hover:scale-105">
                                Heyday
                            </span>
                        </div>
                    </a>

                    {/* DESKTOP MENU */}
                    <div className="hidden md:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="relative text-[14px] uppercase tracking-[0.25em] font-bold text-gray-200 transition-all duration-300 group"
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = "#f3f3f3ff";
                                    e.currentTarget.style.textShadow = "0 0 10px #fafafaff, 0 0 20px #000000ff, 0 0 40px #ff0000";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = "";
                                    e.currentTarget.style.textShadow = "";
                                }}
                            >
                                {link.name}
                            </a>
                        ))}

                        {/* ORDER BUTTON WITH NEON GLOW */}
                        <a
                            href="tel:0908666994"
                            suppressHydrationWarning
                            className="group relative flex items-center gap-2 px-8 py-4 rounded-full bg-heydayRed border-2 border-heydayRed text-white text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 transform hover:scale-105 hover:bg-red-700 hover:border-red-700 btn-neon-glow"
                        >
                            <Phone size={16} className="group-hover:animate-bounce" />
                            <span> Objednať</span>
                        </a>
                    </div>

                    {/* MOBILE MENU TOGGLE */}
                    <button
                        className="md:hidden text-white p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
                    </button>
                </div>
            </nav>

            {/* MOBILE MENU OVERLAY */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        className="fixed inset-0 z-[150] bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8"
                    >
                        {/* CLOSE BUTTON FOR MOBILE MENU */}
                        <button
                            className="absolute top-8 right-6 text-white p-2"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <X size={32} />
                        </button>

                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-2xl uppercase tracking-[0.25em] font-black text-gray-200 transition-all duration-300 hover:text-heydayRed"
                            >
                                {link.name}
                            </a>
                        ))}

                        <a
                            href="tel:0908666994"
                            onClick={() => setMobileMenuOpen(false)}
                            className="mt-8 flex items-center gap-3 px-10 py-5 rounded-full bg-heydayRed text-white text-lg font-black uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(155,27,27,0.5)]"
                        >
                            <Phone size={24} className="animate-bounce" />
                            <span> Objednať</span>
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
            {/* FLOATING CALL BUTTON */}
            <AnimatePresence>
                {isScrolled && (
                    <motion.a
                        href="tel:0908666994"
                        initial={{ opacity: 0, scale: 0.5, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.5, y: 20 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="fixed bottom-6 right-6 z-[150] md:hidden flex items-center justify-center w-16 h-16 bg-heydayRed text-white rounded-full shadow-[0_0_20px_rgba(155,27,27,0.6)] border-2 border-white/20"
                    >
                        <Phone size={28} fill="currentColor" />

                        {/* Pulsing effect around the button */}
                        <span className="absolute inset-0 rounded-full bg-heydayRed animate-ping opacity-20 pointer-events-none"></span>
                    </motion.a>
                )}
            </AnimatePresence>

            {/* DESKTOP FLOATING CALL BUTTON */}
            <AnimatePresence>
                {isScrolled && (
                    <motion.a
                        href="tel:0908666994"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        className="fixed bottom-8 right-8 z-[150] hidden md:flex items-center gap-3 bg-heydayDark/90 backdrop-blur-md border border-white/10 p-2 pr-6 rounded-full shadow-2xl group"
                    >
                        <div className="w-12 h-12 bg-heydayRed rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(155,27,27,0.5)] group-hover:shadow-[0_0_25px_rgba(155,27,27,0.8)] transition-all">
                            <Phone size={20} className="text-white" fill="currentColor" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-white font-black text-sm tracking-tight">0908 666 994</span>
                        </div>
                    </motion.a>
                )}
            </AnimatePresence>
        </>
    );
};