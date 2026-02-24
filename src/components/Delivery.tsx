"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Truck, Clock, Info, MapPin } from 'lucide-react';

export const Delivery = () => {
    const deliveryZones = [
        { location: "Snina", price: "ZADARMO", min: "1ks" },
        { location: "Belá nad Cirochou", price: "1,00 €", min: "min. 2ks" },
        { location: "Zemplínske Hámre", price: "1,00 €", min: "min. 2ks" },
        { location: "Stakčín, Pichné", price: "2,00 €", min: "min. 2ks" },
    ];

    return (
        <section id="donaska" className="relative py-24 overflow-hidden">
            <div className="relative z-10 max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* LEFT COLUMN: DELIVERY CAR IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {/* Car Image */}
                        <div className="relative h-[400px] lg:h-[650px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 group">
                            <Image
                                src="/car.jpg"
                                alt="Heyday Donáška"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            <div className="absolute bottom-8 left-8 flex items-center gap-3 bg-heydayRed px-6 py-3 rounded-full shadow-xl">
                                <Truck size={24} className="text-white animate-pulse" />
                                <span className="font-black uppercase tracking-widest text-sm text-white">Expresný Rozvoz</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT COLUMN: DELIVERY PRICING */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:pt-4"
                    >
                        <h3 className="text-4xl md:text-5xl font-serif mb-10 text-white leading-tight">Donáška<br />priamo k vám</h3>

                        {/* Delivery Zones */}
                        <div className="space-y-3 mb-10">
                            {deliveryZones.map((zone, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-between p-5 rounded-2xl bg-white/[0.2] border border-white/5 hover:bg-white/[0.3] hover:border-heydayRed/30 transition-all duration-500 backdrop-blur-sm group"
                                >
                                    <div className="flex flex-col">
                                        <div className="flex items-center gap-2 text-white font-bold group-hover:text-heydayRed transition-colors">
                                            <MapPin size={14} className="opacity-50" />
                                            <span>{zone.location}</span>
                                        </div>
                                        <span className="text-gray-300 text-[11px] uppercase tracking-widest mt-1 font-medium">{zone.min}</span>
                                    </div>
                                    <div className="text-right">
                                        <span className={`text-lg font-black tracking-tighter ${zone.price === 'ZADARMO' ? 'text-green-400' : 'text-white'}`}>
                                            {zone.price}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Delivery Notes */}
                        <div className="grid gap-4">
                            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.2] border border-white/5 hover:bg-white/[0.3] hover:border-heydayRed/30 transition-all duration-500 backdrop-blur-sm italic text-gray-300 text-sm">
                                <Info size={20} className="text-heydayRed shrink-0" />
                                <p>Presnú dobu dodania vám radi upresníme pri telefonickej objednávke.</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};