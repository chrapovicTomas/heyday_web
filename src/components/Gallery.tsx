"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export const Gallery = () => {
    // Track the currently open lightbox image (null if none is open)
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <section id="priestory" className="py-24 relative overflow-hidden">
            <div className="relative z-10 w-full max-w-[98%] 2xl:max-w-[1800px] mx-auto px-2 md:px-4">
                {/* Dark background container */}
                <div className="bg-[#111111]/90 backdrop-blur-xl border border-white/5 rounded-[2rem] p-6 md:p-10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">

                    {/* Animated Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="mb-12 text-center md:text-left"
                    >
                        <h2 className="text-heydayRed uppercase tracking-widest text-sm font-bold mb-2">Atmosféra</h2>
                        <h3 className="text-4xl font-serif">Naše Priestory</h3>
                    </motion.div>

                    {/* Bento Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-[1000px] md:h-[600px]">

                        {/* 1. Large Image (space2) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, x: -20 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-3xl group cursor-pointer"
                            onClick={() => setSelectedImage('/space2.jpg')}
                        >
                            <Image src="/space2.jpg" alt="Útulná atmosféra" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                                <p className="text-white font-serif text-2xl tracking-wide">Príjmné prostredie</p>
                            </div>
                        </motion.div>

                        {/* 2. Bar Image (space1) */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="md:col-span-2 md:row-span-1 relative overflow-hidden rounded-3xl group cursor-pointer"
                            onClick={() => setSelectedImage('/space1.jpg')}
                        >
                            <Image src="/space1.jpg" alt="Bar Heyday" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                                <p className="text-white font-serif text-2xl tracking-wide">Široký výber nápojov</p>
                            </div>
                        </motion.div>

                        {/* 3. Pizza Image (space3) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="md:col-span-1 md:row-span-1 relative overflow-hidden rounded-3xl group cursor-pointer"
                            onClick={() => setSelectedImage('/space3.jpg')}
                        >
                            <Image src="/space3.jpg" alt="Pizza" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                                <p className="text-white font-serif text-2xl tracking-wide">Z pece na stôl</p>
                            </div>
                        </motion.div>

                        {/* 4. Terrace Image (space4) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="md:col-span-1 md:row-span-1 relative overflow-hidden rounded-3xl group cursor-pointer"
                            onClick={() => setSelectedImage('/space4.jpg')}
                        >
                            <Image src="/space4.jpg" alt="Letná terasa" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                                <p className="text-white font-serif text-2xl tracking-wide">Letná terasa</p>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>

            {/* Lightbox Overlay */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-8 cursor-zoom-out"
                    >
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-6 right-6 text-white hover:text-heydayRed transition-colors z-[110]"
                        >
                            <X size={40} strokeWidth={1.5} />
                        </button>

                        <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full h-full max-w-6xl max-h-[90vh] rounded-xl overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={selectedImage}
                                alt="Zväčšená fotografia"
                                fill
                                className="object-contain"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};