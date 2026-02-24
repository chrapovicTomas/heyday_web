"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Utensils } from 'lucide-react';


const menuItems = [
    { id: "01", name: "Margharita", ingredients: "mozzarella", price: "6.00", allergens: "1, 7", image: "/pizzas/margarita.jpg" },
    { id: "02", name: "Šunková", ingredients: "mozzarella, šunka", price: "6.00", allergens: "1, 7", image: "/pizzas/sunkova.jpg" },
    { id: "03", name: "Calimero", ingredients: "mozzarella, šunka, kukurica", price: "6.00", allergens: "1, 7", image: "/pizzas/calimero.jpg" },
    { id: "04", name: "Hawaii", ingredients: "mozzarella, šunka, ananás", price: "6.00", allergens: "1, 7", image: "/pizzas/hawai.jpg" },
    { id: "05", name: "Dolce", ingredients: "mozzarella, šunka, ananás, kukurica", price: "6.00", allergens: "1, 7", image: "/pizzas/dolce.jpg" },
    { id: "06", name: "Tricolore", ingredients: "mozzarella, šunka, šampiňóny, olivy", price: "6.00", allergens: "1, 7", image: "/pizzas/tricolore.jpg" },
    { id: "07", name: "Olive", ingredients: "mozzarella, šunka, olivy", price: "6.00", allergens: "1, 7", image: "/pizzas/olive.jpg" },
    { id: "08", name: "Tuniaková", ingredients: "mozzarella, tuniak, cibuľa", price: "6.50", allergens: "1, 4, 7", image: "/pizzas/tuniakova.jpg" },
    { id: "09", name: "Liptov", ingredients: "mozzarella, bryndza, cibuľa, slanina", price: "6.50", allergens: "1, 7", image: "/pizzas/liptov.jpg" },
    { id: "10", name: "Funghi", ingredients: "mozzarella, šunka, šampiňóny", price: "6.00", allergens: "1, 7", image: "/pizzas/funghi.jpg" },
    { id: "11", name: "Capri", ingredients: "mozzarella, šunka, kukurica, šampiňóny", price: "6.00", allergens: "1, 7", image: "/pizzas/capri.jpg" },
    { id: "12", name: "Heyday", ingredients: "mozzarella, šunka, slanina, vajce, kukurica", price: "6.50", allergens: "1, 3, 7", image: "/pizzas/heyday.jpg" },
    { id: "13", name: "Da Vinci", ingredients: "mozzarella, šunka, slanina, niva, olivy, kapari", price: "6.50", allergens: "1, 7", image: "/pizzas/da-vinci.jpg" },
    { id: "14", name: "Pivárska", ingredients: "mozzarella, saláma, slanina, klobása, cibuľa, niva", price: "7.00", allergens: "1, 7", image: "/pizzas/pivarska.jpg" },
    { id: "15", name: "Picante", ingredients: "mozzarella, saláma, feferóny, cibuľa, niva", price: "6.50", allergens: "1, 7", image: "/pizzas/picante.jpg" },
    { id: "16", name: "Bazila Pesto", ingredients: "mozzarella, bazalkové pesto, šunka, ricotta, paradajky, parmezán", price: "7.00", allergens: "1, 7, 8", image: "/pizzas/bazilapesto.jpg" },
    { id: "17", name: "Gazdovská", ingredients: "mozzarella, slanina, cibuľa, šampiňóny, saláma", price: "6.50", allergens: "1, 7", image: "/pizzas/gazdovska.jpg" },
    { id: "18", name: "Vegetariana", ingredients: "mozzarella, brokolica, kukurica, špenát, šampiňóny", price: "6.50", allergens: "1, 7", image: "/pizzas/vegetariana.jpg" },
    { id: "19", name: "Med-Chilli", ingredients: "mozzarella, med, kuracie prsia, chilli, ananás, cesnak, oregáno", price: "6.50", allergens: "1, 7", image: "/pizzas/med-chili.jpg" },
    { id: "20", name: "Sedliacka", ingredients: "mozzarella, klobása, slanina, kápia, cibuľa", price: "6.50", allergens: "1, 7", image: "/pizzas/sedliacka.jpg" },
    { id: "21", name: "Quattro Stagione", ingredients: "mozzarella, šunka, šampiňóny, kukurica, olivy", price: "6.50", allergens: "1, 7", image: "/pizzas/stagione.jpg" },
    { id: "22", name: "Quattro Formaggi", ingredients: "4 druhy syra", price: "6.50", allergens: "1, 7", image: "/pizzas/formagi.jpg" },
    { id: "23", name: "Quattro Formaggi Bianco", ingredients: "smotanový základ, 4 druhy syra", price: "6.50", allergens: "1, 7", image: "/pizzas/bianco.jpg" },
    { id: "24", name: "Bon Salami", ingredients: "mozzarella, saláma", price: "6.00", allergens: "1, 7", image: "/pizzas/salamova.jpg" },
    { id: "25", name: "Prosciutto", ingredients: "mozzarella, prosciutto crudo, paradajky, rucola, parmezán", price: "7.50", allergens: "1, 7", image: "/pizzas/prosutto.jpg" },
    { id: "26", name: "Diavola", ingredients: "mozzarella, chilli, pikantná klobása, olivy, feferóny", price: "6.50", allergens: "1, 7", image: "/pizzas/diavola.jpg" },
    { id: "27", name: "Pollo Crema", ingredients: "smot. základ, mozzarella, kuracie prsia, niva, kukurica, brokolica", price: "7.00", allergens: "1, 7", image: "/pizzas/pollo-crema.jpg" },
    { id: "28", name: "Moravská", ingredients: "mozzarella, moravské mäso, cibuľa, slanina", price: "6.50", allergens: "1, 7", image: "/pizzas/moravska.jpg" },
    { id: "29", name: "Italia", ingredients: "mozzarella, paradajky, údený syr, artičoky, olivy, špenát", price: "6.50", allergens: "1, 7", image: "/pizzas/italiana.jpg" },
    { id: "30", name: "Fregata", ingredients: "mozzarella, niva, šampiňóny, vajíčko, cibuľa, olivy", price: "6.50", allergens: "1, 7, 3", image: "/pizzas/fregata.jpg" },
    { id: "31", name: "Mia Ragazza", ingredients: "šunka, brokolica, šampiňóny, bryndza, feferóny, syr", price: "6.50", allergens: "1, 7", image: "/pizzas/mia-ragaza.jpg" },
    { id: "32", name: "Pepperoni", ingredients: "syr, klobása", price: "6.50", allergens: "1, 7", image: "/pizzas/pepperoni.jpg" },
    { id: "33", name: "Cardinale", ingredients: "smotanovo-bazalkové pesto, zapekané prosciutto, šampiňóny, paradajky, parmezán", price: "7.50", allergens: "1, 7", image: "/pizzas/cardinale.jpg" },
    { id: "34", name: "BBQ", ingredients: "BBQ omáčka, mozzarella, slanina, kuracie mäso", price: "7.00", allergens: "1, 7", image: "/pizzas/bbq.jpg" },
];



const PizzaCard = ({ item }: { item: any }) => {
    const ref = useRef<HTMLDivElement>(null);

    // Track the item position for scroll animations
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Scale and opacity transformations based on scroll
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.0, 0.9]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

    return (
        <motion.div
            ref={ref}
            style={{ scale, opacity }}
            className="group flex flex-col items-center gap-4 p-6 border border-white/5 bg-white/[0.2] hover:bg-white/[0.3] hover:border-heydayRed/30 transition-all duration-500 rounded-3xl backdrop-blur-sm"
        >
            {/* Pizza Image */}
            <div className="relative w-40 h-40 md:w-48 md:h-48 flex-shrink-0 overflow-hidden rounded-full border-4 border-transparent group-hover:border-heydayRed/50 transition-all duration-500 shadow-2xl mb-2">
                <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-500 drop-shadow-2xl"
                />
            </div>

            {/* Text Content */}
            <div className="flex flex-col items-center text-center w-full">
                <h4 className="text-2xl font-poppins font-bold group-hover:text-heydayRed transition-colors mb-1">
                    {item.name}
                </h4>

                <span className="text-[14px] text-gray-300 font-medium mb-3">
                    Alergény: {item.allergens}
                </span>

                <p className="text-[16px] text-gray-200/90 font-bold leading-relaxed italic mb-4 min-h-[42px] flex items-center justify-center">
                    {item.ingredients}
                </p>

                <div className="w-full border-t border-dotted border-white/20 my-2"></div>

                <span className="text-2xl font-mono font-bold text-heydayRed mt-2 group-hover:scale-110 transition-all duration-300">
                    {item.price} €
                </span>
            </div>
        </motion.div>
    );
};

export const PizzaMenu = () => {
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Background pizza animations
    const p1X = useTransform(scrollYProgress, [0, 0.15, 0.35], ["-115%", "-35%", "-115%"]);
    const p2X = useTransform(scrollYProgress, [0.05, 0.20, 0.40], ["115%", "35%", "115%"]);
    const p3X = useTransform(scrollYProgress, [0.20, 0.35, 0.55], ["-115%", "-35%", "-115%"]);
    const p4X = useTransform(scrollYProgress, [0.35, 0.50, 0.70], ["115%", "35%", "115%"]);
    const p5X = useTransform(scrollYProgress, [0.50, 0.65, 0.85], ["-115%", "-25%", "-115%"]);
    const p6X = useTransform(scrollYProgress, [0.65, 0.80, 1.0], ["115%", "25%", "115%"]);
    const p7X = useTransform(scrollYProgress, [0.80, 0.95, 1.0], ["-115%", "-15%", "-115%"]);

    return (
        <section id="menu" ref={sectionRef} className="py-24 bg-heydayDark relative overflow-hidden">


            {/* --- DECORATIVE BACKGROUND PIZZAS --- */}
            <div className="absolute inset-0 z-0 pointer-events-none">

                {/* Pizza 1: 5% */}
                <motion.div style={{ x: p1X }} className="absolute top-[5%] left-0 w-[400px] h-[400px] md:w-[600px] md:h-[600px]">
                    <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/5">
                        <Image
                            src="/pizzas/heyday.jpg"
                            alt="" fill
                            className="object-cover scale-106 brightness-[0.6] contrast-[1.1]"
                        />
                    </div>
                </motion.div>

                {/* Pizza 2: 20% */}
                <motion.div style={{ x: p2X }} className="absolute top-[20%] right-0 w-[350px] h-[350px] md:w-[550px] md:h-[550px]">
                    <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/5">
                        <Image
                            src="/pizzas/pollo-crema.jpg"
                            alt="" fill
                            className="object-cover scale-106 brightness-[0.6] contrast-[1.1]"
                        />
                    </div>
                </motion.div>

                {/* Pizza 3: 35% */}
                <motion.div style={{ x: p3X }} className="absolute top-[35%] left-0 w-[400px] h-[400px] md:w-[600px] md:h-[600px]">
                    <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/5">
                        <Image
                            src="/pizzas/da-vinci.jpg"
                            alt="" fill
                            className="object-cover scale-106 brightness-[0.6] contrast-[1.1]"
                        />
                    </div>
                </motion.div>

                {/* Pizza 4: 50% */}
                <motion.div style={{ x: p4X }} className="absolute top-[50%] right-0 w-[350px] h-[350px] md:w-[550px] md:h-[550px]">
                    <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/5">
                        <Image
                            src="/pizzas/pivarska.jpg"
                            alt="" fill
                            className="object-cover scale-106 brightness-[0.6] contrast-[1.1]"
                        />
                    </div>
                </motion.div>

                {/* Pizza 5: 65% */}
                <motion.div style={{ x: p5X }} className="absolute top-[65%] left-0 w-[400px] h-[400px] md:w-[600px] md:h-[600px]">
                    <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/5">
                        <Image
                            src="/pizzas/prosutto.jpg"
                            alt="" fill
                            className="object-cover scale-106 brightness-[0.6] contrast-[1.1]"
                        />
                    </div>
                </motion.div>

                {/* Pizza 6: 80% */}
                <motion.div style={{ x: p6X }} className="absolute top-[80%] right-0 w-[300px] h-[300px] md:w-[550px] md:h-[550px]">
                    <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/5">
                        <Image
                            src="/pizzas/margarita.jpg"
                            alt="" fill
                            className="object-cover scale-106 brightness-[0.6] contrast-[1.1]"
                        />
                    </div>
                </motion.div>

                {/* Pizza 7: 95% */}
                <motion.div style={{ x: p7X }} className="absolute bottom-[1%] left-0 w-[350px] h-[350px] md:w-[600px] md:h-[600px]">
                    <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/5">
                        <Image
                            src="/pizzas/salamova.jpg"
                            alt="" fill
                            className="object-cover scale-106 brightness-[0.6] contrast-[1.1]"
                        />
                    </div>
                </motion.div>

            </div>

            <div className="max-w-[85rem] mx-auto px-6">

                {/* Animated Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-heydayRed uppercase tracking-[0.3em] text-sm font-bold mb-2">Naše Remeslo</h2>
                    <h3 className="text-4xl md:text-5xl font-serif">Ponuka Pizze</h3>
                </motion.div>

                {/* Dynamic Menu List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
                    {menuItems.map((item) => (
                        <PizzaCard key={item.id} item={item} />
                    ))}
                </div>
                {/* --- ADD-ONS AND ALLERGENS SECTION --- */}
                <div className="mt-24 border-t border-white/20 pt-16 flex flex-col gap-10">

                    {/* Add-ons Section */}
                    <div className="mb-8 w-full">
                        <div className="text-center mb-10">
                            <h4 className="inline-block text-3xl md:text-4xl font-serif text-white tracking-wide border-b-2 border-heydayRed/50 pb-3">
                                Prílohy na pizzu
                            </h4>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                            {/* Card 1 - Basic Add-ons */}
                            <div className="relative overflow-hidden rounded-2xl bg-white/[0.2] border border-white/5 p-8 flex flex-col items-center justify-center text-center group hover:border-heydayRed/30 transition-all duration-500 hover:bg-white/[0.3] hover:-translate-y-1 shadow-2xl backdrop-blur-sm">
                                {/* Background Icon */}
                                <div className="absolute -right-4 -top-4 text-white/5 opacity-50 transform rotate-12 group-hover:scale-110 transition-transform duration-700">
                                    <Utensils size={120} />
                                </div>

                                <span className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-3 group-hover:text-gray-300 transition-colors">
                                    Klasik
                                </span>

                                <div className="text-5xl font-mono font-bold text-heydayRed mb-6 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(155,27,27,0.3)]">
                                    0,50 <span className="text-3xl">€</span>
                                </div>

                                <p className="text-gray-200 text-[15px] leading-relaxed relative z-10 w-full px-2 max-w-[300px]">
                                    <span className="font-semibold text-white">Syr:</span> Mozzarella, niva, bryndza, parmezán (mlieko) <br /><br />
                                    <span className="font-semibold text-white">Mäso:</span> Šunka, saláma, klobása, slanina
                                </p>
                            </div>

                            {/* Card 2 - Premium Add-ons */}
                            <div className="relative overflow-hidden rounded-2xl bg-white/[0.2] border border-white/5 p-8 flex flex-col items-center justify-center text-center group hover:border-heydayRed/30 transition-all duration-500 hover:bg-white/[0.3] hover:-translate-y-1 shadow-2xl backdrop-blur-sm">
                                {/* Background Icon */}
                                <div className="absolute -left-4 -bottom-4 text-white/5 opacity-50 transform -rotate-12 group-hover:scale-110 transition-transform duration-700">
                                    <Utensils size={120} />
                                </div>

                                <span className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-3 group-hover:text-gray-300 transition-colors">
                                    Premiové
                                </span>

                                <div className="text-5xl font-mono font-bold text-heydayRed mb-6 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(155,27,27,0.3)]">
                                    0,80 <span className="text-3xl">€</span>
                                </div>

                                <p className="text-gray-200 text-[15px] leading-relaxed relative z-10 w-full px-2 max-w-[300px]">
                                    Prosciutto <br />
                                    Kuracie prsia <br />
                                    Sardely <span className="text-gray-400 text-sm">(ryby)</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Allergens Information */}
                    <div className="bg-white/[0.2] border border-white/5 rounded-3xl p-8 backdrop-blur-sm hover:bg-white/[0.3] hover:border-heydayRed/30 transition-all duration-500">
                        <h4 className="text-2xl font-semibold mb-4 text-heydayRed">
                            Alergény
                        </h4>
                        <p className="text-[15px] font-medium text-gray-200 mb-6 leading-relaxed">
                            Alergény v našej ponuke sú označené nasledovne, podľa nariadenia Európskeho parlamentu a Rady č. 1169/2011:
                        </p>
                        <ul className="text-[14px] text-gray-300 space-y-3 grid grid-cols-1 md:grid-cols-2 gap-x-8">
                            <li><span className="text-white font-bold mr-1">(1)</span> Obilniny obsahujúce lepok (t.j. pšenica, raž, jačmeň, ovos, špalda, kamut alebo ich hybridné odrody).</li>
                            <li><span className="text-white font-bold mr-1">(2)</span> Kôrovce a výrobky z nich.</li>
                            <li><span className="text-white font-bold mr-1">(3)</span> Vajcia a výrobky z nich.</li>
                            <li><span className="text-white font-bold mr-1">(4)</span> Ryby a výrobky z nich.</li>
                            <li><span className="text-white font-bold mr-1">(5)</span> Arašidy a výrobky z nich.</li>
                            <li><span className="text-white font-bold mr-1">(6)</span> Sójové zrná a výrobky z nich.</li>
                            <li><span className="text-white font-bold mr-1">(7)</span> Mlieko a výrobky z neho.</li>
                            <li><span className="text-white font-bold mr-1">(8)</span> Orechy, ktorými sú mandle, lieskové orechy, vlašské orechy, kešu, pekanové orechy, para orechy, pistácie, makadamové orechy a queenslandské orechy a výrobky z nich.</li>
                            <li><span className="text-white font-bold mr-1">(9)</span> Zeler a výrobky z neho.</li>
                            <li><span className="text-white font-bold mr-1">(10)</span> Horčica a výrobky z nej.</li>
                            <li><span className="text-white font-bold mr-1">(11)</span> Sezamové semená a výrobky z nich.</li>
                            <li><span className="text-white font-bold mr-1">(12)</span> Oxid siričitý a siričitany v koncentráciách vyšších ako 10 mg/kg alebo 10 mg/l.</li>
                            <li><span className="text-white font-bold mr-1">(13)</span> Vlčí bôb a výrobky z neho.</li>
                            <li><span className="text-white font-bold mr-1">(14)</span> Mäkkýše a výrobky z nich.</li>
                        </ul>
                    </div>

                </div>

            </div>
        </section>
    );
};