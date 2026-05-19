import { useEffect, useState } from 'react'

export default function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [hovering, setHovering] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return

    document.documentElement.style.cursor = 'none'

    // Force hide cursor on all elements including interactive ones
    const style = document.createElement('style')
    style.id = 'cursor-none'
    style.textContent = '*, *:hover { cursor: none !important; }'
    document.head.appendChild(style)

    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
      setVisible(true)
    }
    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)
    const onOver = (e) => {
      if (e.target.closest('a, button, [role="button"]')) setHovering(true)
    }
    const onOut = (e) => {
      if (e.target.closest('a, button, [role="button"]')) setHovering(false)
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseleave', onLeave)
    window.addEventListener('mouseenter', onEnter)
    window.addEventListener('mouseover', onOver)
    window.addEventListener('mouseout', onOut)

    return () => {
      document.documentElement.style.cursor = ''
      const el = document.getElementById('cursor-none')
      if (el) el.remove()
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseleave', onLeave)
      window.removeEventListener('mouseenter', onEnter)
      window.removeEventListener('mouseover', onOver)
      window.removeEventListener('mouseout', onOut)
    }
  }, [])

  if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) {
    return null
  }

  return (
    <div
      className="fixed pointer-events-none z-[9999]"
      style={{
        left: pos.x,
        top: pos.y,
        transform: 'translate(-50%, -50%)',
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.3s ease',
      }}
    >
      {/* Outer glow — soft and diffuse */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: hovering ? '36px' : '26px',
        height: hovering ? '36px' : '26px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)',
        filter: 'blur(4px)',
        transition: 'width 0.2s ease, height 0.2s ease',
      }} />
      {/* Inner dot — sharp and clean */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: hovering ? '7px' : '6px',
        height: hovering ? '7px' : '6px',
        borderRadius: '50%',
        background: 'white',
        boxShadow: hovering
          ? '0 0 10px 3px rgba(255,255,255,0.6), 0 0 24px 6px rgba(255,255,255,0.2)'
          : '0 0 8px 2px rgba(255,255,255,0.4), 0 0 16px 3px rgba(255,255,255,0.15)',
        transition: 'width 0.2s ease, height 0.2s ease, box-shadow 0.2s ease',
      }} />
    </div>
  )
}
