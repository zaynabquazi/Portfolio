import { useCallback } from 'react'

function getAudioContext() {
  if (!window._audioCtx) {
    window._audioCtx = new (window.AudioContext || window.webkitAudioContext)()
  }
  return window._audioCtx
}

// Tesla-style sensor ping
function playClickSound() {
  const ctx = getAudioContext()
  const now = ctx.currentTime
  const osc = ctx.createOscillator()
  const gain = ctx.createGain()
  osc.type = 'sine'
  osc.frequency.setValueAtTime(420, now)
  gain.gain.setValueAtTime(0.0, now)
  gain.gain.linearRampToValueAtTime(0.28, now + 0.008)
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5)
  osc.connect(gain)
  gain.connect(ctx.destination)
  osc.start(now)
  osc.stop(now + 0.5)
}

// Mode-aware ding
function playDingSound(freq = 820) {
  const ctx = getAudioContext()
  const now = ctx.currentTime
  const osc = ctx.createOscillator()
  const gain = ctx.createGain()
  osc.type = 'sine'
  osc.frequency.setValueAtTime(freq, now)
  gain.gain.setValueAtTime(0.0, now)
  gain.gain.linearRampToValueAtTime(0.22, now + 0.008)
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6)
  osc.connect(gain)
  gain.connect(ctx.destination)
  osc.start(now)
  osc.stop(now + 0.6)
}

// Son of Flynn inspired intro — warm arpeggiated synth, clean and cinematic
export function playTronIntro() {
  try {
    const ctx = getAudioContext()
    const now = ctx.currentTime

    // Gentle ascending arp — A minor, warm and soft
    const notes = [220, 261.63, 329.63, 440, 523.25]
    const noteDuration = 0.45

    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.type = 'triangle'
      osc.frequency.setValueAtTime(freq, now)
      const startTime = now + i * noteDuration
      gain.gain.setValueAtTime(0, startTime)
      gain.gain.linearRampToValueAtTime(0.09, startTime + 0.06)  // softer attack
      gain.gain.exponentialRampToValueAtTime(0.04, startTime + 0.3)
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + noteDuration + 1.0)
      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.start(startTime)
      osc.stop(startTime + noteDuration + 1.2)
    })

    // Very soft pad underneath
    const pad = ctx.createOscillator()
    const padGain = ctx.createGain()
    const padFilter = ctx.createBiquadFilter()
    pad.type = 'sine'
    pad.frequency.setValueAtTime(110, now)
    padFilter.type = 'lowpass'
    padFilter.frequency.value = 500
    padGain.gain.setValueAtTime(0, now)
    padGain.gain.linearRampToValueAtTime(0.06, now + 0.8)
    padGain.gain.linearRampToValueAtTime(0, now + notes.length * noteDuration + 1.5)
    pad.connect(padFilter)
    padFilter.connect(padGain)
    padGain.connect(ctx.destination)
    pad.start(now)
    pad.stop(now + notes.length * noteDuration + 1.8)

  } catch (e) {}
}

export function useSound(soundEnabled) {
  const playClick = useCallback(() => {
    if (!soundEnabled) return
    try { playClickSound() } catch (e) {}
  }, [soundEnabled])

  const playDing = useCallback((freq) => {
    if (!soundEnabled) return
    try { playDingSound(freq) } catch (e) {}
  }, [soundEnabled])

  const playWhoosh = playDing

  return { playClick, playWhoosh, playDing }
}
