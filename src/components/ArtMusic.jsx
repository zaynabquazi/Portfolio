import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import NextSection from './NextSection'

import appleImg from '../assets/Apple.jpg'
import porscheImg from '../assets/Porsche.jpg'
import boltImg from '../assets/Bolt.jpg'
import tailImg from '../assets/tail.jpg'
import buzzImg from '../assets/buzz.jpg'
import headlightImg from '../assets/headlight.jpg'
import omarImg from '../assets/omar.jpg'
import prospaImg from '../assets/prospa.jpg'

const artworks = [
  {
    src: appleImg,
    title: 'Apple',
    caption: 'Observational pencil sketch focused on light, shadow, and composition.',
  },
  {
    src: porscheImg,
    title: 'Porsche 911',
    caption: "Sketch inspired by the iconic 1980s Porsche 911 Turbo silhouette. I've always been drawn to automotive design — especially the balance between performance, aerodynamics, and timeless form.",
  },
  {
    src: boltImg,
    title: 'Bolt',
    caption: "Sketch of Bolt, one of the animated films I grew up with and still deeply connect to. After my parents gifted me a Bolt plush as a child, it became a lifelong comfort item I've carried with me ever since. This piece reflects the nostalgia and emotional attachment I've always associated with the character and film.",
  },
]

const photos = [
  {
    src: tailImg,
    title: 'Taillight',
    caption: 'Night photograph captured on a Canon EOS Rebel T7i, isolating the illuminated taillight of a Tesla Model 3 against a dark background to emphasize shape, contrast, and minimalism.',
  },
  {
    src: buzzImg,
    title: 'Light Trails',
    caption: 'Shot on a Canon EOS Rebel T7i using a slow shutter speed and intentional camera movement, allowing streetlights to stretch into abstract wave-like light trails.',
  },
  {
    src: headlightImg,
    title: 'Headlight',
    caption: 'Shot on a Canon EOS Rebel T7i, isolating the headlight of a Tesla Model 3 against a dark background to emphasize contrast, shape, and minimal automotive design.',
  },
  {
    src: omarImg,
    title: 'OMAR+',
    caption: 'Black and white concert photograph capturing the atmosphere and minimal lighting of an OMAR+ set, focusing on contrast, silhouette, and crowd energy.',
  },
  {
    src: prospaImg,
    title: 'Prospa',
    caption: 'Low-light concert photograph documenting a back-to-back set between Prospa and Josh Baker, emphasizing monochrome lighting, composition, and live energy.',
  },
]

function ArtCarousel({ playClick }) {
  const [current, setCurrent] = useState(0)

  const next = () => {
    playClick()
    setCurrent((prev) => (prev + 1) % artworks.length)
  }

  const prev = () => {
    playClick()
    setCurrent((prev) => (prev - 1 + artworks.length) % artworks.length)
  }

  return (
    <div className="rounded-2xl overflow-hidden glass">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden" style={{ background: 'var(--bg-secondary)' }}>
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={artworks[current].src}
            alt={artworks[current].title}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full object-contain"
          />
        </AnimatePresence>

        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full glass flex items-center justify-center text-sm"
          style={{ color: 'var(--text-primary)' }}
        >
          ←
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full glass flex items-center justify-center text-sm"
          style={{ color: 'var(--text-primary)' }}
        >
          →
        </button>
      </div>

      {/* Caption area */}
      <div className="p-5 sm:p-6">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
            {artworks[current].title}
          </p>
          {/* Dots */}
          <div className="flex gap-1.5">
            {artworks.map((_, i) => (
              <button
                key={i}
                onClick={() => { playClick(); setCurrent(i) }}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === current ? '16px' : '6px',
                  height: '6px',
                  background: i === current ? 'var(--text-primary)' : 'var(--border)',
                }}
              />
            ))}
          </div>
        </div>
        <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {artworks[current].caption}
        </p>
      </div>
    </div>
  )
}

function PhotoCarousel({ playClick }) {
  const [current, setCurrent] = useState(0)

  const next = () => {
    playClick()
    setCurrent((prev) => (prev + 1) % photos.length)
  }

  const prev = () => {
    playClick()
    setCurrent((prev) => (prev - 1 + photos.length) % photos.length)
  }

  return (
    <div className="rounded-2xl overflow-hidden glass">
      <div className="relative aspect-[4/3] overflow-hidden" style={{ background: 'var(--bg-secondary)' }}>
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={photos[current].src}
            alt={photos[current].title}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full object-contain"
          />
        </AnimatePresence>

        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full glass flex items-center justify-center text-sm"
          style={{ color: 'var(--text-primary)' }}
        >
          ←
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full glass flex items-center justify-center text-sm"
          style={{ color: 'var(--text-primary)' }}
        >
          →
        </button>
      </div>

      <div className="p-5 sm:p-6">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
            {photos[current].title}
          </p>
          <div className="flex gap-1.5">
            {photos.map((_, i) => (
              <button
                key={i}
                onClick={() => { playClick(); setCurrent(i) }}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === current ? '16px' : '6px',
                  height: '6px',
                  background: i === current ? 'var(--text-primary)' : 'var(--border)',
                }}
              />
            ))}
          </div>
        </div>
        <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {photos[current].caption}
        </p>
      </div>
    </div>
  )
}

export default function ArtMusic({ playClick }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="art-&-music" className="py-20 sm:py-32 px-4 sm:px-6" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-medium tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--text-secondary)' }}>
            Creative
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 sm:mb-6"
            style={{ color: 'var(--text-primary)', letterSpacing: '-0.02em' }}
          >
            Art & Music
          </h2>
          <p className="text-sm sm:text-base mb-10 sm:mb-16 max-w-xl" style={{ color: 'var(--text-secondary)' }}>
            A space for the things I create outside of code.
          </p>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            {/* Art carousel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-xs tracking-widest uppercase mb-3" style={{ color: 'var(--text-secondary)' }}>
                Drawings
              </p>
              <ArtCarousel playClick={playClick} />
            </motion.div>

            {/* Photography carousel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-xs tracking-widest uppercase mb-3" style={{ color: 'var(--text-secondary)' }}>
                Photography
              </p>
              <PhotoCarousel playClick={playClick} />
            </motion.div>

            {/* Music placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-xs tracking-widest uppercase mb-3" style={{ color: 'var(--text-secondary)' }}>
                Music
              </p>
              <div
                className="p-8 rounded-2xl border-2 border-dashed flex flex-col items-center justify-center text-center min-h-[200px]"
                style={{ borderColor: 'var(--border)' }}
              >
                <p className="text-4xl mb-4">🎵</p>
                <p className="text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>Music</p>
                <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>Coming soon</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
        <NextSection targetId="contact" playClick={playClick} />
      </div>
    </section>
  )
}
