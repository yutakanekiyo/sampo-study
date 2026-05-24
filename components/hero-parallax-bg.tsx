"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

type Shape = {
  src: string
  top: string
  left?: string
  right?: string
  width: string
  rotate: number
  opacity?: number
}

// Same SVGs and sizes that originally lived inside the hero section, just
// converted to viewport-relative tops so they stay anchored to the viewport
// as the user scrolls through Hero → Video → About. The vh values match where
// each shape used to render when the hero first came into view.
const shapes: Shape[] = [
  { src: "/assets/2.svg", top: "8vh", left: "14%", width: "36%", rotate: 0, opacity: 0.8 },
  { src: "/assets/4.svg", top: "9vh", left: "-12%", width: "21%", rotate: 0, opacity: 0.9 },
  { src: "/assets/1.svg", top: "9vh", left: "34%", width: "48%", rotate: 0, opacity: 0.7 },
  { src: "/assets/5.svg", top: "22vh", right: "6%", width: "10%", rotate: 0, opacity: 1 },
  { src: "/assets/3.svg", top: "62vh", left: "-8%", width: "21%", rotate: 0, opacity: 1 },
  { src: "/assets/6.svg", top: "66vh", right: "-9%", width: "28%", rotate: 0, opacity: 1 },
]

export function HeroParallaxBg({ children }: { children: React.ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const [parallaxY, setParallaxY] = useState(0)

  // Same scroll-progress parallax pattern used in features-section: drift
  // upward by MAX_DRIFT_VH across the wrapper's entire sticky range, so the
  // start/end of the background motion lines up with the wrapper's bounds.
  useEffect(() => {
    const MAX_DRIFT_VH = 40
    let raf = 0
    const update = () => {
      raf = 0
      const el = wrapperRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const viewport = window.innerHeight
      const stickyRange = el.offsetHeight - viewport
      if (stickyRange <= 0) {
        setParallaxY(0)
        return
      }
      const scrolled = Math.max(0, Math.min(stickyRange, -rect.top))
      const progress = scrolled / stickyRange
      const driftPx = (viewport * MAX_DRIFT_VH) / 100
      setParallaxY(-progress * driftPx)
    }
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(update)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll, { passive: true })
    update()
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div ref={wrapperRef} className="relative bg-white">
      {/* Sticky parallax background — h-screen sticky + h-[140vh] inner buffer
          so the layer keeps covering the viewport even at maximum drift. */}
      <div
        aria-hidden
        className="pointer-events-none sticky top-0 z-0 h-screen w-full overflow-hidden select-none"
      >
        <div
          className="absolute left-0 right-0 top-0 h-[140vh] will-change-transform"
          style={{ transform: `translateY(${parallaxY}px)` }}
        >
          {shapes.map((shape, i) => (
            <Image
              key={i}
              src={shape.src}
              alt=""
              width={1000}
              height={1000}
              className="absolute h-auto"
              style={{
                top: shape.top,
                left: shape.left,
                right: shape.right,
                width: shape.width,
                transform: `rotate(${shape.rotate}deg)`,
                opacity: shape.opacity ?? 1,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content overlay (Hero + Video + About) sits on top of the sticky bg. */}
      <div className="relative z-10 -mt-[100vh]">{children}</div>
    </div>
  )
}
