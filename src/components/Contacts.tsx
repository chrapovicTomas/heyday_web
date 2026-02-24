"use client";

import React, { useRef } from 'react';
import { Phone, MapPin, Instagram, Facebook, Clock } from 'lucide-react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';

export const Contact = () => {
    const targetRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    });

    const yMap = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const opacityMap = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8]);

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section id="kontakt" ref={targetRef} className="relative py-24 bg-[#111111] overflow-hidden border-t border-white/5">
            <div className="relative z-10 w-full max-w-[95%] 2xl:max-w-[1600px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* LEFT SIDE: CONTACT INFO */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="space-y-12"
                    >
                        <motion.div variants={itemVariants}>
                            <h3 className="text-4xl md:text-5xl font-serif mb-6 text-white">Kontaktujte nás</h3>
                            <p className="text-gray-400 max-w-md italic leading-relaxed">
                                Máte otázku alebo si chcete objednať? Sme tu pre vás. Zavolajte nám alebo nás sledujte na sociálnych sieťach.
                            </p>
                        </motion.div>

                        {/* Address and Orders Cards */}
                        <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
                            {/* LOCATION */}
                            <div className="space-y-4 rounded-[2rem] bg-white/[0.03] border border-white/5 p-8 backdrop-blur-sm shadow-xl">
                                <div className="flex items-center gap-3 text-heydayRed">
                                    <MapPin size={18} />
                                    <span className="font-bold uppercase tracking-widest text-[12px]">Lokalita</span>
                                </div>
                                <p className="text-white font-bold text-lg leading-snug tracking-tight">
                                    Študentská 1451<br />
                                    069 01 Snina
                                </p>
                            </div>

                            {/* ORDERS */}
                            <div className="space-y-4 rounded-[2rem] bg-white/[0.03] border border-white/5 p-8 backdrop-blur-sm shadow-xl">
                                <div className="flex items-center gap-3 text-heydayRed">
                                    <Phone size={18} />
                                    <span className="font-bold uppercase tracking-widest text-[12px]">Objednávky</span>
                                </div>
                                <div className="flex flex-col text-white font-bold text-lg tracking-tight">
                                    <a href="tel:0908666994" className="hover:text-heydayRed transition-all duration-300">
                                        0908 666 994
                                    </a>
                                    <a href="tel:0908666106" className="hover:text-heydayRed transition-all duration-300">
                                        0908 666 106
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* OPENING HOURS */}
                        <motion.div variants={itemVariants} className="pt-2">
                            <div className="space-y-4 rounded-[2rem] bg-white/[0.03] border border-white/5 p-8 backdrop-blur-sm shadow-xl">
                                <div className="flex items-center gap-3 text-heydayRed">
                                    <Clock size={18} />
                                    <span className="font-bold uppercase tracking-widest text-[12px]">Otváracie hodiny</span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                        <span className="text-gray-400 text-sm font-medium">Pondelok - Štvrtok</span>
                                        <span className="text-white font-bold font-mono text-sm">10:00 - 22:00</span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                        <span className="text-gray-400 text-sm font-medium">Piatok - Sobota</span>
                                        <span className="text-white font-bold font-mono text-sm">10:00 - 00:00</span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                        <span className="text-gray-400 text-sm font-medium">Nedeľa</span>
                                        <span className="text-white font-bold font-mono text-sm">14:00 - 22:00</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                    </motion.div>
                    {/* RIGHT SIDE: MAP */}
                    <motion.div
                        style={{ y: yMap, opacity: opacityMap }}
                        className="h-[350px] lg:h-[500px] w-full rounded-[3rem] overflow-hidden grayscale contrast-[1.1] hover:grayscale-0 transition-all duration-1000 border border-white/10 shadow-2xl relative"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2617.9284361307036!2d22.159108999999997!3d48.9929193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47394e6d013b2bc3%3A0xb0f3963fe0b67981!2sPIZZERIA%20HEYDAY!5e0!3m2!1ssk!2ssk!4v1771511550146!5m2!1ssk!2ssk"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                        ></iframe>
                    </motion.div>
                </div>

                {/* SOCIAL MEDIA SECTION */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-16 pt-8 border-t border-white/5 flex flex-col items-center justify-center"
                >
                    <p className="text-heydayRed uppercase tracking-[0.2em] text-[10px] font-black mb-6">Sledujte náš príbeh na sieťach</p>
                    <div className="flex flex-wrap gap-6 justify-center">
                        <a
                            href="https://www.instagram.com/pizzeria_heyday/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/[0.05] border border-white/5 transition-all duration-500 hover:bg-white/[0.1] backdrop-blur-sm group shadow-xl hover:border-transparent relative overflow-hidden"
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundImage = 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundImage = '';
                            }}
                        >
                            <Instagram size={24} className="text-white group-hover:scale-110 transition-transform relative z-10" />
                            <span className="text-sm font-bold text-white uppercase tracking-widest relative z-10">Instagram</span>
                        </a>
                        <a
                            href="https://www.facebook.com/p/PIZZERIA-HEYDAY-100060215300447/?locale=sk_SK"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/[0.05] border border-white/5 hover:bg-[#1877F2] hover:border-[#1877F2] transition-all duration-500 backdrop-blur-sm group shadow-xl"
                        >
                            <Facebook size={24} className="text-white group-hover:scale-110 transition-transform" />
                            <span className="text-sm font-bold text-white uppercase tracking-widest">Facebook</span>
                        </a>
                    </div>
                </motion.div>
                <p className="normal-case tracking-normal opacity-40 italic font-serif text-[10px] text-gray-300 uppercase tracking-[0.3em]">© 2026 PIZZERIA HEYDAY. VŠETKY PRÁVA VYHRADENÉ.</p>
                <p className="normal-case tracking-normal opacity-40 italic font-serif text-[10px] text-gray-300 uppercase tracking-[0.3em]">Handcrafted with passion in Snina.</p>
            </div>
        </section>
    );
};