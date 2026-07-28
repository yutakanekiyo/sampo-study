"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const items = [
  {
    text: "お子さまの同意制で、こっそり見ない設計",
    icon: (
      <path
        d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z M9 12l2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      />
    ),
  },
  {
    text: "30日間返金保証つき・合わなければ全額返金",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      </>
    ),
  },
  {
    text: "お子さまのアプリ利用は、これからも無料",
    icon: (
      <>
        <path d="M12 21V11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M12 12c0-3 2.4-5.2 5.4-5.2C17.4 9.8 15 12 12 12Z" fill="currentColor" />
        <path d="M12 14c0-2.6-2-4.6-4.6-4.6C7.4 12 9.4 14 12 14Z" fill="currentColor" fillOpacity="0.6" />
      </>
    ),
  },
]

export function TrustStrip() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="px-3 md:px-4 lg:px-6">
      <div
        ref={ref}
        className={`mx-auto max-w-[1200px] rounded-[28px] bg-white px-6 py-6 shadow-[0px_4px_24px_rgba(0,0,0,0.06)] transition-all duration-700 md:rounded-[32px] md:px-10 md:py-7 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-stretch gap-4 md:flex-row md:items-center md:justify-between md:gap-8">
          {items.map((item, i) => (
            <li
              key={i}
              className="flex items-center gap-3 text-[13px] font-bold text-primary md:flex-1 md:text-[14px] lg:text-[15px]"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/8 text-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
                  {item.icon}
                </svg>
              </span>
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
