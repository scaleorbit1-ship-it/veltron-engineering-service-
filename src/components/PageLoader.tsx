import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, CheckCircle2, Cpu, Wrench } from 'lucide-react';

interface PageLoaderProps {
  onFinish?: () => void;
}

const statusMilestones = [
  { threshold: 18, text: 'INITIALIZING MOBILE DISPATCH FLEET' },
  { threshold: 42, text: 'CALIBRATING MECHANICAL & HYDRAULIC TOLERANCES' },
  { threshold: 68, text: 'SYNCING CHESHIRE & MANCHESTER INDUSTRIAL NODES' },
  { threshold: 88, text: 'FINALIZING HIGH-PRECISION DIAGNOSTIC TELEMETRY' },
  { threshold: 100, text: 'SYSTEM ONLINE — QUALITY THAT COUNTS' },
];

export const PageLoader: React.FC<PageLoaderProps> = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Exactly 3 seconds loader animation (3000ms duration)
    const startTime = Date.now();
    const duration = 2850; // 2.85s count up + 150ms hold = 3.0s total

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const calculated = Math.min(Math.round((elapsed / duration) * 100), 100);
      setProgress(calculated);

      if (calculated >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsDone(true);
          setTimeout(() => {
            if (onFinish) onFinish();
          }, 600); // smooth exit animation duration
        }, 200);
      }
    }, 25);

    return () => clearInterval(interval);
  }, [onFinish]);

  const currentStatus =
    statusMilestones.find((m) => progress <= m.threshold)?.text ||
    'SYSTEM ONLINE — QUALITY THAT COUNTS';

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="veltron-precision-loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.02,
            filter: 'blur(10px)',
            transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#07111e] text-white select-none overflow-hidden"
          style={{ fontFamily: "'Archivo', sans-serif" }}
        >
          {/* Subtle Precision Grid Background */}
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(#38bdf8 1px, transparent 1px), linear-gradient(90deg, #38bdf8 1px, transparent 1px)`,
              backgroundSize: '48px 48px',
            }}
          />

          {/* Dynamic Laser Beam Scan Effect */}
          <motion.div
            animate={{
              y: ['-100%', '200%'],
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute inset-x-0 h-32 bg-gradient-to-b from-transparent via-sky-500/10 to-transparent pointer-events-none"
          />

          {/* Core Ambient Radial Lighting */}
          <div className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#1d588f]/30 via-sky-600/15 to-transparent blur-[120px] pointer-events-none" />

          {/* Main Central Presentation Frame */}
          <div className="relative flex flex-col items-center z-10 px-6 max-w-lg w-full text-center">
            
            {/* Logo Display Container with High-Tech Framing */}
            <div className="relative mb-7 flex flex-col items-center justify-center">
              
              {/* Outer Pulsing Aura */}
              <motion.div
                animate={{
                  scale: [0.97, 1.03, 0.97],
                  opacity: [0.35, 0.7, 0.35],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -inset-6 rounded-2xl bg-gradient-to-r from-[#1d588f]/30 via-sky-500/20 to-[#1d588f]/30 blur-xl"
              />

              {/* Logo Card with Precision Blueprint Corner Accents */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative px-8 py-5 rounded-xl bg-[#0b1a2e]/90 border border-sky-400/30 backdrop-blur-md shadow-[0_12px_40px_rgba(0,0,0,0.6),0_0_20px_rgba(56,189,248,0.15)] flex items-center justify-center"
              >
                {/* 4 Corner Precision Crosshairs */}
                <div className="absolute top-1.5 left-1.5 w-2 h-2 border-t-2 border-l-2 border-sky-400" />
                <div className="absolute top-1.5 right-1.5 w-2 h-2 border-t-2 border-r-2 border-sky-400" />
                <div className="absolute bottom-1.5 left-1.5 w-2 h-2 border-b-2 border-l-2 border-sky-400" />
                <div className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b-2 border-r-2 border-sky-400" />

                {/* Animated Light Sweep over the Logo */}
                <motion.div
                  animate={{
                    x: ['-150%', '200%'],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    repeatDelay: 0.6,
                    ease: 'easeInOut',
                  }}
                  className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12 pointer-events-none"
                />

                {/* Official Veltron Logo Image */}
                <img
                  src="/images/veltron-logo-light.svg"
                  alt="Veltron Engineering Service Limited"
                  className="h-14 sm:h-16 w-auto object-contain filter drop-shadow-[0_2px_12px_rgba(56,189,248,0.3)] relative z-10"
                />
              </motion.div>
            </div>

            {/* Sub-Header & Motto Badge */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="space-y-1.5"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-950/80 border border-sky-400/40 text-sky-300 text-[11px] font-bold tracking-[0.15em] uppercase shadow-[0_0_12px_rgba(56,189,248,0.2)]">
                <Shield className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                Quality That Counts
              </div>
              <p className="text-[12.5px] font-medium text-slate-300 tracking-[0.08em] uppercase pt-1">
                100% Mobile On-Site Industrial Engineering
              </p>
            </motion.div>

            {/* Gauge & Progress Bar */}
            <div className="w-full mt-7">
              <div className="flex justify-between items-center text-xs font-semibold text-slate-300 mb-2 px-1">
                <span className="text-[11px] text-sky-400 font-mono tracking-widest uppercase flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                  {progress < 100 ? 'DISPATCH SYSTEM CALIBRATING' : 'FIELD UNITS READY'}
                </span>
                <span className="text-sm font-bold font-mono text-white tracking-tight">
                  {progress}%
                </span>
              </div>

              {/* High-Tech Progress Track */}
              <div className="w-full h-2.5 bg-[#0f243d] rounded-full overflow-hidden p-0.5 border border-sky-500/30 shadow-inner">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-[#1d588f] via-[#0284c7] to-sky-400 shadow-[0_0_14px_rgba(56,189,248,0.7)] transition-all duration-75 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Live Changing Telemetry Milestone */}
            <div className="mt-4.5 h-6 flex items-center justify-center">
              <motion.p
                key={currentStatus}
                initial={{ opacity: 0, y: 3 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="text-[11px] font-mono text-sky-300/90 tracking-wider uppercase flex items-center gap-2"
              >
                {progress === 100 ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 drop-shadow-[0_0_6px_#34d399]" />
                ) : (
                  <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping inline-block shrink-0" />
                )}
                {currentStatus}
              </motion.p>
            </div>
          </div>

          {/* Footer Technical Metadata */}
          <div className="absolute bottom-6 flex items-center gap-5 text-[11px] text-slate-400/80 font-mono tracking-widest uppercase">
            <span>ALTRINCHAM · CHESHIRE · MANCHESTER</span>
            <span className="text-sky-500">•</span>
            <span>24/7 RAPID ON-SITE RESPONSE</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
