/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Download, Music, Image as ImageIcon, CheckCircle2, Instagram, Music2, Trophy, Medal } from "lucide-react";

export default function App() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Attempt to play audio on mount
    // Note: Browser policy usually requires a user interaction first.
    const playAudio = async () => {
      if (audioRef.current) {
        try {
          await audioRef.current.play();
        } catch (err) {
          console.log("Autoplay blocked by browser. Music will start after user interaction.");
        }
      }
    };

    playAudio();

    // Fallback: Start audio on the first click anywhere on the document
    const handleFirstInteraction = () => {
      playAudio();
      document.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("touchstart", handleFirstInteraction);
    };

    document.addEventListener("click", handleFirstInteraction);
    document.addEventListener("touchstart", handleFirstInteraction);

    return () => {
      document.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("touchstart", handleFirstInteraction);
    };
  }, []);

  const steps = [
    { num: 1, title: "Record a 1-Minute Freestyle", desc: "Download the beat above and rap your original freestyle over it." },
    { num: 2, title: "Use the Official Pesaflix Instrumental", desc: "The beat above is the only official track for this challenge." },
    { num: 3, title: "Post on Instagram & TikTok", desc: "Upload your freestyle video to both platforms." },
    { num: 4, title: "Tag @pesaflix_kenya", desc: "Tag us so we can find your entry and count it." },
    { num: 5, title: "Mention PESAFLIX in Your Video", desc: "Say the name out loud in your freestyle!" },
  ];

  const prizes = [
    { pos: "Winner", amt: "KES 100,000", icon: <Trophy className="w-10 h-10 text-yellow-gold mb-2" />, color: "border-yellow-gold bg-linear-to-br from-[#1c1900] to-card-bg", text: "text-yellow-gold" },
    { pos: "1st Runner-Up", amt: "KES 50,000", icon: <Medal className="w-10 h-10 text-gray-300 mb-2" />, color: "border-gray-400", text: "text-gray-300" },
    { pos: "2nd Runner-Up", amt: "KES 30,000", icon: <Medal className="w-10 h-10 text-[#cd7f32] mb-2" />, color: "border-[#cd7f32]", text: "text-[#cd7f32]" },
    { pos: "Positions 4–10", amt: "KES 10,000 each", icon: <Music className="w-10 h-10 text-gray-500 mb-2" />, color: "border-gray-600", text: "text-gray-500" },
  ];

  const rules = [
    "Must be an original freestyle — no copyrighted lyrics",
    "Clear audio & video quality required",
    "Follow all participation instructions to qualify",
    "Decisions by Pesaflix are final",
  ];

  return (
    <div className="min-h-screen bg-dark-bg text-white selection:bg-yellow-gold selection:text-black">
      {/* Hero Poster */}
      <section className="relative w-full max-h-[80vh] overflow-hidden flex justify-center bg-black">
        <motion.img 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          src="/poster.png" 
          alt="Pesaflix Music Challenge Poster"
          className="w-full max-w-5xl object-cover object-top"
        />
        <div className="absolute inset-0 bg-linear-to-t from-dark-bg via-transparent to-transparent opacity-60" />
        
        {/* Floating Taglines */}
        <div className="absolute top-8 left-8 hidden lg:block">
          <p className="text-muted-text text-sm uppercase tracking-widest">Submission Deadline</p>
          <p className="text-yellow-gold font-bebas text-2xl">30th May</p>
        </div>
        <div className="absolute top-8 right-8 hidden lg:block text-right">
          <p className="text-yellow-gold font-bebas text-4xl leading-none">1 MINUTE</p>
          <p className="text-white font-bebas text-xl tracking-tight">FREESTYLE CHALLENGE</p>
        </div>

        <div className="absolute bottom-10 left-0 right-0 text-center px-4">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-white font-bebas text-4xl sm:text-6xl md:text-7xl tracking-tighter leading-none mb-2"
          >
            PESAFLIX <span className="text-yellow-gold">MUSIC</span> CHALLENGE
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-yellow-gold font-bebas text-xl sm:text-2xl tracking-[0.3em] uppercase"
          >
            Your Voice, Your Chance, Your Bag.
          </motion.p>
        </div>
      </section>

      {/* Sticky Audio Bar */}
      <div className="sticky top-0 z-50 bg-dark-bg/95 backdrop-blur-md border-b-2 border-yellow-gold px-4 py-3 sm:px-8 flex flex-col sm:flex-row items-center gap-4">
        <div className="flex items-center gap-3">
          <Music className="text-yellow-gold h-5 w-5 animate-pulse" />
          <span className="font-bebas tracking-widest text-yellow-gold whitespace-nowrap">🎵 Now Playing</span>
        </div>
        <audio 
          ref={audioRef}
          controls 
          autoPlay 
          loop
          className="flex-1 w-full h-10 accent-yellow-gold"
          src="/instrumental.wav"
        >
          Your browser does not support audio.
        </audio>
      </div>

      <div className="max-w-3xl mx-auto px-5 pb-20">
        {/* ... (previous sections) */}

        {/* Floating Social Links */}
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-40 sm:bottom-auto sm:top-1/2 sm:right-6 sm:left-auto sm:translate-x-0 sm:-translate-y-1/2 sm:flex-col">
          <motion.a 
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
            href="https://www.instagram.com/pesaflix_kenya?igsh=MXc0NjN2N3h4b205dg==" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-card-bg/80 backdrop-blur-md border border-yellow-gold/30 hover:border-yellow-gold p-3 rounded-full sm:rounded-2xl transition-all group shadow-2xl shadow-yellow-gold/10"
          >
            <Instagram className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-gold group-hover:scale-110 transition-transform" />
            <div className="hidden sm:block">
              <p className="text-[8px] uppercase tracking-widest text-muted-text">Instagram</p>
              <p className="font-bebas text-sm">Follow</p>
            </div>
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
            href="https://www.tiktok.com/@pesaflixke?_r=1&_t=ZS-96E0W8PszLh" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-card-bg/80 backdrop-blur-md border border-yellow-gold/30 hover:border-yellow-gold p-3 rounded-full sm:rounded-2xl transition-all group shadow-2xl shadow-yellow-gold/10"
          >
            <Music2 className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-gold group-hover:scale-110 transition-transform" />
            <div className="hidden sm:block">
              <p className="text-[8px] uppercase tracking-widest text-muted-text">TikTok</p>
              <p className="font-bebas text-sm">Join Us</p>
            </div>
          </motion.a>
        </div>

        {/* Downloads */}
        <SectionHeader title="Downloads" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <DownloadCard 
            icon={<Music className="w-10 h-10 text-yellow-gold" />}
            title="Challenge Beat"
            subtitle="Riccobeatz & Mr 808 · Official Instrumental"
            btnText="Download Beat (WAV)"
            href="/instrumental.wav"
            downloadName="Pesaflix_Challenge_Instrumental.wav"
          />
          <DownloadCard 
            icon={<ImageIcon className="w-10 h-10 text-yellow-gold" />}
            title="Challenge Poster"
            subtitle="Official Pesaflix Music Challenge Banner"
            btnText="Download Poster (PNG)"
            href="/poster.png"
            downloadName="Pesaflix_Challenge_Poster.png"
          />
        </div>

        {/* How to Participate */}
        <div className="mt-14 mb-8 text-center flex items-center justify-center gap-4">
          <div className="w-10 h-1 bg-yellow-gold hidden sm:block rounded-full" />
          <h2 className="font-bebas text-3xl sm:text-4xl tracking-[0.2em] text-yellow-gold uppercase flex items-center gap-3">
            <span className="text-white">⚡</span> How to Participate <span className="text-white">⚡</span>
          </h2>
          <div className="w-10 h-1 bg-yellow-gold hidden sm:block rounded-full" />
        </div>
        <div className="flex flex-col gap-3">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex items-start gap-4 bg-card-bg border border-zinc-800 hover:border-yellow-gold rounded-xl p-4 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-yellow-gold text-black font-bebas flex items-center justify-center shrink-0">
                {step.num}
              </div>
              <div>
                <strong className="block text-[0.95rem] mb-0.5">{step.title}</strong>
                <span className="text-[0.85rem] text-muted-text">{step.desc}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Prizes */}
        <SectionHeader title="Prizes" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {prizes.map((prize, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className={`p-6 text-center border-2 rounded-xl transition-all ${prize.color}`}
            >
              <div className="flex flex-col items-center">
                {prize.icon}
                <div className="font-bebas text-[0.95rem] tracking-widest text-muted-text mb-1 uppercase">
                  {prize.pos}
                </div>
                <div className={`font-bebas text-3xl sm:text-4xl leading-none ${prize.text}`}>
                  {prize.amt}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Rules */}
        <div className="mt-14 mb-8 text-center">
          <h2 className="font-bebas text-3xl sm:text-4xl tracking-[0.2em] text-yellow-gold uppercase mb-2 flex items-center justify-center gap-3">
            Rules <span className="text-white">⚠️</span>
          </h2>
          <div className="w-14 h-1 bg-yellow-gold mx-auto rounded-full" />
        </div>
        <div className="flex flex-col gap-2.5">
          {rules.map((rule, i) => (
            <div key={i} className="flex items-center gap-3 bg-card-bg border border-zinc-800 rounded-lg px-4 py-3 text-[0.9rem] text-muted-text">
              <CheckCircle2 className="w-4 h-4 text-yellow-gold shrink-0" />
              {rule}
            </div>
          ))}
        </div>

        {/* Deadline */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 p-6 text-center rounded-xl border border-yellow-gold bg-linear-to-r from-[#1a1600] via-[#222200] to-[#1a1600]"
        >
          <p className="text-[0.85rem] text-muted-text tracking-widest uppercase mb-1">Submission Deadline</p>
          <strong className="font-bebas text-4xl text-yellow-gold tracking-widest">30th May 2026</strong>
        </motion.div>
      </div>

      <footer className="border-t border-zinc-900 py-16 px-6 text-center">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <p className="text-white font-bebas text-4xl sm:text-5xl border-y-2 border-yellow-gold inline-block px-10 py-2 tracking-widest italic">
            BE HEARD. BE SEEN. <span className="text-yellow-gold">GET PAID!</span>
          </p>
        </motion.div>
        <p className="text-muted-text text-sm">
          Powered by <a href="https://www.pesaflix.com" target="_blank" rel="noopener noreferrer" className="font-bold text-yellow-gold hover:underline mx-1">PESAFLIX</a> · Unleash Your Sound
        </p>
      </footer>
    </div>
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="mt-14 mb-8 text-center">
      <h2 className="font-bebas text-3xl sm:text-4xl tracking-[0.2em] text-yellow-gold uppercase mb-2">
        {title}
      </h2>
      <div className="w-14 h-1 bg-yellow-gold mx-auto rounded-full" />
    </div>
  );
}

function DownloadCard({ icon, title, subtitle, btnText, href, downloadName }: { icon: any, title: string, subtitle: string, btnText: string, href: string, downloadName?: string }) {
  return (
    <div className="relative group bg-card-bg border border-zinc-800 rounded-2xl p-6 flex flex-col items-center text-center gap-4 overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-linear-to-r before:from-yellow-gold before:via-orange-500 before:to-yellow-gold">
      <div>{icon}</div>
      <div>
        <h3 className="font-bebas text-xl tracking-wider">{title}</h3>
        <p className="text-xs text-muted-text">{subtitle}</p>
      </div>
      <a 
        href={href}
        download={downloadName}
        className="animate-glow flex items-center justify-center gap-2 bg-yellow-gold text-black font-bebas text-lg tracking-widest py-3 px-6 rounded-lg w-full transition-all hover:bg-yellow-400 hover:scale-[1.02] active:scale-95"
      >
        <Download className="w-5 h-5 stroke-[3]" />
        {btnText}
      </a>
    </div>
  );
}
