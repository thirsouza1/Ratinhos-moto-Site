/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from 'react';
import { 
  Wrench, 
  ShieldCheck, 
  ShoppingBag, 
  Trophy, 
  MapPin, 
  Phone, 
  Instagram, 
  Mail, 
  ChevronRight, 
  Menu, 
  X, 
  Star,
  CheckCircle2,
  Clock,
  Zap,
  Bike
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BRANDS = [
  { name: 'BMW Motorrad', logo: 'https://cdn.worldvectorlogo.com/logos/bmw-motorrad.svg' },
  { name: 'KTM', logo: 'https://cdn.worldvectorlogo.com/logos/ktm-1.svg' },
  { name: 'Honda', logo: 'https://cdn.worldvectorlogo.com/logos/honda-7.svg' },
  { name: 'Yamaha', logo: 'https://cdn.worldvectorlogo.com/logos/yamaha-2.svg' },
  { name: 'Motul', logo: 'https://cdn.worldvectorlogo.com/logos/motul-1.svg' },
  { name: 'Capacetes LS2', logo: 'https://ls2helmets.com/favicon.ico' },
];

const SERVICES = [
  {
    title: 'Diagnóstico Eletrônico',
    description: 'Diagnóstico computadorizado autorizado BMW. Precisão absoluta para identificar e solucionar falhas complexas.',
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: 'Mecânica Premium (On & Off-Road)',
    description: 'Especialistas em BMW, KTM, Honda e Yamaha. De revisões preventivas a preparações profundas.',
    icon: <Wrench className="w-6 h-6" />,
  },
  {
    title: 'Loja & Performance',
    description: 'Óleos Motul, Capacetes LS2 Carbon, Luvas, Capas de Chuva e Linha de Inverno/Verão.',
    icon: <ShoppingBag className="w-6 h-6" />,
  },
  {
    title: 'Estética de Motos',
    description: 'Limpeza técnica detalhada e proteção para preservar o brilho e a integridade da sua moto.',
    icon: <ShieldCheck className="w-6 h-6" />,
  },
  {
    title: 'Pneus & Escapamentos',
    description: 'Venda e instalação de pneus de todas as linhas e escapamentos esportivos de alta performance.',
    icon: <Trophy className="w-6 h-6" />,
  },
  {
    title: 'Compra & Venda',
    description: 'Showroom de motos novas, usadas e a novidade: motos elétricas de última geração.',
    icon: <Bike className="w-6 h-6" />,
  },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Preloader timeout (extended for presentation)
    const timer = setTimeout(() => {
      setIsLoading(false);
      
      // Hero Entrance after loading
      const tl = gsap.timeline();
      tl.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        delay: 0.5,
      })
      .from(subRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      }, '-=0.8');
    }, 4500);

    // Scroll Reveal for sections
    gsap.utils.toArray('.reveal').forEach((elem: any) => {
      gsap.from(elem, {
        scrollTrigger: {
          trigger: elem,
          start: 'top 85%',
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
      });
    });

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen selection:bg-primary selection:text-dark">
      {/* Preloader / Presentation Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1.2, ease: "circOut" }}
            className="fixed inset-0 z-[100] bg-dark flex flex-col items-center justify-center overflow-hidden"
          >
            {/* Presentation Video Background */}
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-dark/40 z-10" />
              <iframe 
                className="w-[102vw] h-[58vw] min-h-[102vh] min-w-[182vh] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[1.12]"
                src="https://www.youtube.com/embed/mc9b9gnk0D8?autoplay=1&mute=1&controls=0&loop=1&playlist=mc9b9gnk0D8&rel=0&iv_load_policy=3&modestbranding=1"
                allow="autoplay; encrypted-media"
              ></iframe>
            </div>

            <div className="relative z-20 flex flex-col items-center text-center px-4">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-[0_0_80px_rgba(255,102,0,0.5)] mb-8"
              >
                <Bike className="text-white w-12 h-12" />
              </motion.div>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                <h2 className="font-display font-black text-4xl md:text-6xl tracking-tighter text-white uppercase italic leading-none">
                  RATINHO MOTOS <span className="text-primary">RACING</span>
                </h2>
                <div className="h-1 w-24 bg-primary mx-auto mt-4" />
                <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.4em] text-white/60 font-bold">
                  PREPARANDO SUA PERFORMANCE
                </p>
              </motion.div>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                onClick={() => setIsLoading(false)}
                className="mt-12 px-8 py-3 border border-white/20 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all glass"
              >
                Pular Apresentação
              </motion.button>
            </div>

            {/* Bottom Progress Bar (Fake) */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-white/5">
              <motion.div 
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 3.5, ease: "linear" }}
                onAnimationComplete={() => setIsLoading(false)}
                className="h-full bg-primary shadow-[0_0_15px_rgba(255,102,0,1)]"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-gradient-to-b from-black/80 to-transparent">
        <div className="max-w-7xl mx-auto px-4 md:px-10 h-24 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tighter italic uppercase leading-none">
              RATINHO MOTOS <span className="text-primary">RACING</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] opacity-60 font-bold">Performance & Motorsport</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-8 text-xs font-bold uppercase tracking-widest opacity-70">
              {['Serviços', 'Loja', 'Vendas', 'Sobre', 'Contato'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="hover:text-primary transition-colors hover:opacity-100"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <button 
            className="md:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-[#050505] flex flex-col items-center justify-center gap-8 md:hidden"
          >
            <button 
              className="absolute top-8 right-8 text-white p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
            <div className="flex flex-col items-center gap-8">
              {['Serviços', 'Loja', 'Vendas', 'Sobre', 'Contato'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="text-3xl font-display font-black uppercase italic hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="início" className="relative min-h-screen flex items-start pt-32 md:pt-44 pb-20 md:pb-32 px-4 md:px-10 overflow-hidden bg-dark">
        {/* Hero Background Image (Watermark Effect - BMW GS 1300 2026) */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/95 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark z-10" />
          {/* Simulated Cinematic Light Streak */}
          <div className="absolute top-0 left-[-50%] w-[200%] h-full light-streak z-10 pointer-events-none opacity-40" />
          
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.25 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&q=80&w=2500"
            className="w-full h-full object-cover grayscale brightness-50"
            alt="BMW R 1300 GS 2026"
          />
        </div>

        <div className="relative z-20 max-w-3xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-block px-3 py-1 bg-primary text-[10px] font-bold uppercase tracking-widest mb-6"
          >
            Especialista BMW • KTM • HONDA • YAMAHA
          </motion.div>
          <h1 
            ref={titleRef}
            className="text-4xl sm:text-5xl md:text-8xl font-display font-black uppercase tracking-tight leading-[0.9] mb-6"
          >
            Especialistas em <br />
            <span className="text-transparent border-t-2 border-b-2 border-white/20 px-2 inline-block mt-3 bg-clip-text bg-gradient-to-b from-white to-white/40 italic">
              BMW Motorrad.
            </span>
          </h1>
          <h2 className="text-xl md:text-3xl font-display font-bold uppercase tracking-tighter text-primary mb-8 opacity-90">
            & Performance Off-Road
          </h2>
          <p 
            ref={subRef}
            className="text-lg md:text-xl text-white/70 max-w-2xl mb-10 font-light leading-relaxed"
          >
            Diagnóstico eletrônico, revisões completas, scanner profissional e preparação premium para motos de alta performance. Experiência de elite em São Sebastião do Paraíso.
          </p>

          {/* Authority/Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 border-l border-primary/30 pl-6">
            <div className="flex flex-col">
              <span className="text-primary font-bold text-xs uppercase tracking-widest">Credenciada</span>
              <span className="text-white font-display font-bold text-sm">BMW Motorrad</span>
            </div>
            <div className="flex flex-col">
              <span className="text-primary font-bold text-xs uppercase tracking-widest">Diagnóstico</span>
              <span className="text-white font-display font-bold text-sm">Scanner Profissional</span>
            </div>
            <div className="flex flex-col">
              <span className="text-primary font-bold text-xs uppercase tracking-widest">Expertise</span>
              <span className="text-white font-display font-bold text-sm">KTM & Big Trails</span>
            </div>
            <div className="flex flex-col">
              <span className="text-primary font-bold text-xs uppercase tracking-widest">Foco</span>
              <span className="text-white font-display font-bold text-sm">Alta Performance</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="w-full sm:w-auto px-10 py-5 bg-primary text-sm font-black uppercase tracking-widest shadow-lg shadow-primary/20 hover:scale-105 transition-all">
              Agendar Consultoria Técnica
            </button>
            <button className="w-full sm:w-auto px-10 py-5 border border-white/20 text-sm font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
              Acessar Boutique de Elite
            </button>
          </div>
        </div>
      </section>

      {/* Authority Marquee (Theme Pattern) */}
      <section className="bg-primary py-4 overflow-hidden whitespace-nowrap border-t border-black/10 z-30 relative">
        <div className="flex gap-16 text-black font-black uppercase text-sm italic items-center animate-marquee">
          {[...BRANDS, ...BRANDS].map((brand, i) => (
            <span key={i} className="flex gap-4 items-center flex-shrink-0">
              {brand.name} <span className="w-1.5 h-1.5 bg-black rounded-full" />
            </span>
          ))}
        </div>
      </section>

      {/* Diferenciais Bento Grid */}
      <section id="serviços" className="py-24 px-4 md:px-10 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="bento-grid">
            <div className="col-span-1 md:col-span-2 row-span-2 bg-[#111] border border-white/5 p-10 flex flex-col justify-between group hover:border-primary/50 transition-all relative overflow-hidden reveal">
              <div className="absolute -right-12 -bottom-12 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                <Bike className="w-80 h-80 rotate-12" />
              </div>
              <div>
                <span className="text-primary font-mono text-xs uppercase tracking-tighter font-bold">01 // TECNOLOGIA</span>
                <h3 className="text-4xl font-display font-black mt-4 uppercase italic leading-none">Diagnóstico <br />Eletrônico Full</h3>
              </div>
              <p className="text-lg text-white/50 leading-relaxed max-w-sm">
                Equipamentos de última geração autorizados para toda linha BMW Motorrad e KTM Adventure. Precisão absoluta.
              </p>
            </div>

            <div className="col-span-1 md:col-span-2 bg-[#111] border border-white/5 p-8 flex flex-col justify-between group hover:border-primary/30 transition-all reveal relative overflow-hidden">
               <div className="absolute top-6 right-6">
                 <Zap className="text-primary w-8 h-8 opacity-20" />
               </div>
               <div>
                <span className="text-primary font-mono text-xs uppercase font-bold text-[10px]">02 // TROCA EXPRESS</span>
                <h3 className="text-2xl font-display font-black uppercase italic mt-2">Pneus & Óleo</h3>
              </div>
              <p className="text-sm text-white/40 leading-relaxed">Troca expressa Motul e pneus de todas as marcas a pronta entrega para você não perder tempo.</p>
            </div>

            <div className="bg-[#111] border border-white/5 p-8 flex flex-col justify-between group hover:border-primary/30 transition-all reveal">
              <span className="text-primary font-mono text-xs uppercase font-bold text-[10px]">03 // ESTILO</span>
              <h3 className="text-xl font-display font-black uppercase italic mt-2">Loja Premium</h3>
              <p className="text-xs text-white/40">Capacetes LS2 Carbon e vestuário técnico para todas as estações.</p>
            </div>

            <div className="bg-[#111] border border-white/5 p-8 flex flex-col justify-between group hover:border-primary/30 transition-all reveal">
              <span className="text-primary font-mono text-xs uppercase font-bold text-[10px]">04 // DETALHE</span>
              <h3 className="text-xl font-display font-black uppercase italic mt-2">Estética Elite</h3>
              <p className="text-xs text-white/40">Detalhamento técnico com produtos premium para manter o brilho original.</p>
            </div>

            <div className="col-span-1 md:col-span-2 bg-gradient-to-r from-[#111] to-[#1a1a1a] border border-white/5 p-8 flex items-center justify-between group hover:border-primary/30 transition-all reveal">
              <div>
                <span className="text-primary font-mono text-xs uppercase font-bold text-[10px]">05 // SHOWROOM</span>
                <h3 className="text-2xl font-display font-black uppercase italic mt-1">Motos & Elétricas</h3>
              </div>
              <div className="text-right text-[10px] text-white/40 uppercase tracking-widest font-bold">
                Seleção Premium<br />Novas e Usadas
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services (List Style) */}
      <section className="py-24 px-4 md:px-10 bg-dark">
        <div className="max-w-7xl mx-auto space-y-32">
          {/* Service Block 1 */}
          <div className="flex flex-col md:flex-row items-center gap-16 reveal">
            <div className="md:w-1/2">
              <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4 block underline underline-offset-8">Especialidade On & Off-Road</span>
              <h2 className="text-5xl md:text-7xl font-display font-black italic uppercase leading-none mb-8">
                Coração das <span className="text-primary not-italic">Lendas</span>.
              </h2>
              <p className="text-xl text-white/60 leading-relaxed mb-10 font-light">
                Nossa oficina é projetada para atender exigências de alta cilindrada. Somos o porto seguro para proprietários de BMW R1250 GS, KTM Super Adventure e toda a linha Racing Honda/Yamaha.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-bold uppercase tracking-widest text-white/80">
                <li className="flex items-center gap-3"><CheckCircle2 className="text-primary w-5 h-5" /> Motor & Transmissão</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-primary w-5 h-5" /> Suspensão Eletrônica</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-primary w-5 h-5" /> Injeção & Carburação</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-primary w-5 h-5" /> Freios ABS / Pro</li>
              </ul>
            </div>
            <div className="md:w-1/2 relative group">
              <div className="absolute inset-0 bg-primary/20 -translate-x-4 translate-y-4 rounded-3xl z-0 transition-transform group-hover:translate-x-0 group-hover:translate-y-0" />
              <img 
                src="https://images.unsplash.com/photo-1558981852-426c6c22a060?auto=format&fit=crop&q=80&w=800" 
                className="relative z-10 rounded-3xl w-full object-cover shadow-2xl h-[400px]" 
                alt="Motorcycle Maintenance"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Loja Shoutout */}
      <section id="loja" className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 reveal">
            <h2 className="text-5xl md:text-7xl font-display font-black mb-8 leading-tight">
              EQUIPAMENTO <span className="text-primary italic">ELITE</span>.
            </h2>
            <p className="text-xl text-white/70 mb-10">
              De capacetes LS2 Carbon e Bieff a óculos 100% originais. Linha completa de vestuário off-road e estrada, inverno e verão. Tudo para sua segurança e performance.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              <div className="p-4 glass rounded-2xl text-center">
                <p className="text-primary font-bold text-lg mb-1">LS2 CARBON</p>
                <p className="text-[10px] uppercase tracking-widest text-white/50">Alta Proteção</p>
              </div>
              <div className="p-4 glass rounded-2xl text-center">
                <p className="text-primary font-bold text-lg mb-1">MOTUL</p>
                <p className="text-[10px] uppercase tracking-widest text-white/50">Óleos Originais</p>
              </div>
              <div className="p-4 glass rounded-2xl text-center">
                <p className="text-primary font-bold text-lg mb-1">100%</p>
                <p className="text-[10px] uppercase tracking-widest text-white/50">Goggles Race</p>
              </div>
            </div>
            <button className="bg-white text-dark px-10 py-5 rounded-full font-black text-lg uppercase tracking-wider hover:bg-primary transition-all">
              Conheça Nossa Loja Física
            </button>
          </div>
          <div className="md:w-1/2 flex gap-4 reveal">
            <div className="flex flex-col gap-4">
              <img src="https://images.unsplash.com/photo-1591637333184-17f18db2642a?auto=format&fit=crop&q=80&w=400" className="w-full rounded-3xl" alt="Gear 1" />
              <img src="https://images.unsplash.com/photo-1627281358943-4ccb5387588b?auto=format&fit=crop&q=80&w=400" className="w-full rounded-3xl" alt="Gear 2" />
            </div>
            <div className="flex flex-col gap-4 mt-12">
              <img src="https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&q=80&w=400" className="w-full rounded-3xl" alt="Gear 3" />
              <img src="https://images.unsplash.com/photo-1603566144865-c323f465d386?auto=format&fit=crop&q=80&w=400" className="w-full rounded-3xl" alt="Gear 4" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl md:text-5xl font-display font-black uppercase mb-4">OPINIÃO DE QUEM <span className="text-primary italic">PILOTA</span></h2>
            <div className="flex justify-center gap-1 text-primary">
              <Star className="fill-primary" /><Star className="fill-primary" /><Star className="fill-primary" /><Star className="fill-primary" /><Star className="fill-primary" />
            </div>
            <p className="text-white/60 mt-4">299+ Avaliações 5 Estrelas no Google</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="glass p-8 rounded-[2.5rem] reveal">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-white/10 rounded-full" />
                  <div>
                    <p className="font-bold">Cliente Satisfeito</p>
                    <p className="text-xs text-white/40">Goiânia - GO</p>
                  </div>
                </div>
                <p className="text-white/70 italic leading-relaxed">
                  "Atendimento espetacular. Trouxe minha BMW R1250 de longe só para fazer o diagnóstico aqui. O Ratinho é fera demais!"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="contato" className="py-24 px-4 bg-[#080808]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2 reveal">
            <h2 className="text-5xl font-display font-black mb-8 italic">Onde a <span className="text-primary not-italic">Velocidade</span> Mora.</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="text-primary" />
                </div>
                <div>
                  <p className="font-bold text-lg">Nosso Endereço</p>
                  <p className="text-white/60">Av Monsenhor Mancini, 1212<br />São Sebastião do Paraíso - MG, 37950-000</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="text-primary" />
                </div>
                <div>
                  <p className="font-bold text-lg">Horário de Funcionamento</p>
                  <p className="text-white/60">Segunda a Sexta: 08:00 às 18:00<br />Sábado: 08:00 às 12:00</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="text-primary" />
                </div>
                <div>
                  <p className="font-bold text-lg">Telefone & WhatsApp</p>
                  <p className="text-white/60">(35) 3531-3825<br />(35) 98805-7361</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              <a href="https://www.instagram.com/ratinho_motos_racing/" target="_blank" className="w-14 h-14 glass rounded-full flex items-center justify-center hover:bg-primary hover:text-dark transition-all">
                <Instagram />
              </a>
              <a href="mailto:ratinhomotos@outlook.com.br" className="w-14 h-14 glass rounded-full flex items-center justify-center hover:bg-primary hover:text-dark transition-all">
                <Mail />
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 h-[500px] rounded-[3rem] overflow-hidden glass p-4 reveal">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.4285746371!2d-46.9847116!3d-20.9238914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b46c6a469601d9%3A0xe54e60064a7538fa!2sAv.%20Monsenhor%20Mancini%2C%201212%20-%20S%C3%A3o%20Sebasti%C3%A3o%20do%20Para%C3%ADso%2C%20MG%2C%2037950-000!5e0!3m2!1spt-BR!2sbr!4v1715264000000!5m2!1spt-BR!2sbr" 
              className="w-full h-full rounded-[2.5rem] grayscale" 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Layered Footer */}
      <footer className="bg-black pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
        {/* Background Watermark */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 font-display font-black text-[20vw] leading-none text-white opacity-[0.02] select-none pointer-events-none whitespace-nowrap">
          RATINHO MOTOS RACING
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-10 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            {/* Column 1: Branding */}
            <div className="col-span-1 lg:col-span-1">
              <div className="flex flex-col mb-6">
                <span className="text-2xl font-black tracking-tighter italic uppercase leading-none">
                  RATINHO MOTOS <span className="text-primary">RACING</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] opacity-60 font-bold mt-1">Performance & Motorsport</span>
              </div>
              <p className="text-sm text-white/40 leading-relaxed max-w-xs">
                Especialistas em BMW Motorrad, KTM e motos premium com diagnóstico eletrônico e padrão técnico profissional.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-primary font-mono text-xs uppercase tracking-widest font-bold mb-6">Navegação</h4>
              <ul className="space-y-4 text-sm font-bold uppercase tracking-tight text-white/60">
                {['Início', 'Serviços', 'Loja', 'Vendas', 'Sobre', 'Contato'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="hover:text-primary transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Expertise */}
            <div>
              <h4 className="text-primary font-mono text-xs uppercase tracking-widest font-bold mb-6">Especialidades</h4>
              <ul className="space-y-4 text-sm font-bold uppercase tracking-tight text-white/60">
                <li>Diagnóstico BMW Motorrad</li>
                <li>Scanner Profissional KTM</li>
                <li>Suspensão Eletrônica</li>
                <li>Preparação Off-Road</li>
              </ul>
            </div>

            {/* Column 4: Support */}
            <div>
              <h4 className="text-primary font-mono text-xs uppercase tracking-widest font-bold mb-6">Base Operacional</h4>
              <ul className="space-y-4 text-sm font-bold text-white/60">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Av Monsenhor Mancini, 1212<br />S. Seb. do Paraíso - MG</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-primary shrink-0" />
                  <span>(35) 98805-7361</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-primary shrink-0" />
                  <span>ratinhomotos@outlook.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-[0.2em] font-bold text-white/20">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <span>© 2026 RATINHO MOTOS RACING</span>
              <div className="flex gap-6">
                <a href="#" className="hover:text-white transition-colors">Políticas</a>
                <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
              </div>
            </div>
            <div className="flex gap-6">
              <a href="https://www.instagram.com/ratinho_motos_racing/" target="_blank" className="hover:text-primary transition-colors flex items-center gap-2">
                <Instagram className="w-4 h-4" /> <span>Instagram</span>
              </a>
              <span className="text-white/40 italic">MADE FOR RIDERS BY RIDERS</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Pulsing WhatsApp Fixed Button */}
      <a 
        href="https://wa.me/35988057361" 
        target="_blank"
        className="fixed bottom-10 right-10 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform animate-pulse-slow"
      >
        <Phone className="text-white fill-white w-7 h-7" />
      </a>
    </div>
  );
}
