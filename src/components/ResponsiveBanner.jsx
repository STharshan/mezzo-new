import React from "react";

export default function BalanceHero({
  bowls = {
    left: "/images/bowl-left.png",
    midLeft: "/images/bowl-mid-left.png",
    midRight: "/images/bowl-mid-right.png",
    right: "/images/bowl-right.png",
  },
  onOrder = () => {},
}) {
  const colors = {
    topBg: "#0E2A28", // hero background dark green
    overlayWord: "#3B6B56", // BALANCE word
    bandBg: "#3E5F4B", // bottom band
    subCopy: "#D5DAD7", // paragraph
    ctaBg: "#E0A83B", // button
    ctaText: "#111111",
    dot: "#EA4335", // red dot
  };

  return (
    <section className="w-full" aria-label="Balance hero">
      {/* Top background */}
      <div className="relative w-full overflow-hidden" style={{ backgroundColor: colors.topBg }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Height responsive */}
          <div className="relative h-[240px] sm:h-[360px] md:h-[460px] lg:h-[560px]">
            {/* BALANCE word */}
            <div className="absolute inset-0 flex items-center justify-center select-none" aria-hidden>
              <span
                className="font-extrabold tracking-[0.06em] leading-none text-center"
                style={{ fontSize: "clamp(40px, 18vw, 220px)", color: colors.overlayWord }}
              >
                BALANCE
              </span>
            </div>

            {/* Bowls */}
            <img
              src={bowls.left}
              alt="Bowl left"
              className="pointer-events-none select-none absolute left-2 top-[66%] h-16 w-16 -translate-y-1/2 rounded-full object-cover shadow-xl ring-1 ring-black/30 sm:left-4 sm:h-28 sm:w-28 md:left-6 md:h-40 md:w-40 lg:h-52 lg:w-52"
            />

            <img
              src={bowls.midLeft}
              alt="Bowl mid left"
              className="pointer-events-none select-none absolute hidden sm:block left-[30%] top-[4%] h-20 w-20 -translate-x-1/2 rounded-full object-cover shadow-xl ring-1 ring-black/30 sm:h-28 sm:w-28 md:h-44 md:w-44 lg:h-60 lg:w-60"
            />

            <img
              src={bowls.midRight}
              alt="Bowl mid right"
              className="pointer-events-none select-none absolute hidden sm:block left-[66%] top-[10%] h-20 w-20 -translate-x-1/2 rounded-full object-cover shadow-xl ring-1 ring-black/30 sm:h-28 sm:w-28 md:h-44 md:w-44 lg:h-60 lg:w-60"
            />

            <img
              src={bowls.right}
              alt="Bowl right"
              className="pointer-events-none select-none absolute right-2 top-[66%] h-16 w-16 -translate-y-1/2 rounded-full object-cover shadow-xl ring-1 ring-black/30 sm:right-4 sm:h-28 sm:w-28 md:right-6 md:h-40 md:w-40 lg:h-52 lg:w-52"
            />

            <div className="h-full" />
          </div>
        </div>
      </div>

      {/* Bottom green band */}
      <div style={{ backgroundColor: colors.bandBg }}>
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-6 px-4 py-8 sm:px-6 md:grid-cols-2 md:gap-16 md:py-16 md:px-8">
          {/* Left heading */}
          <div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white">
              lunch made
              <br />
              lighter<span style={{ color: colors.dot }}>.</span>
            </h2>
          </div>

          {/* Right content */}
          <div className="max-w-xl">
            <p className="mb-2 text-xs sm:text-sm font-semibold uppercase tracking-wide" style={{ color: colors.subCopy }}>
              small rice bowls. big flavour.
            </p>
            <p className="text-sm sm:text-base leading-relaxed" style={{ color: colors.subCopy }}>
              try our new small rice bowls for the perfect lighter options. choose your flavours and keep it fresh,
              filling, and from just 9.95.
            </p>

            <button
              onClick={onOrder}
              className="mt-5 sm:mt-8 inline-flex items-center gap-2 rounded-md px-4 py-2.5 sm:px-6 sm:py-3 text-sm font-semibold shadow-sm transition hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              style={{ backgroundColor: colors.ctaBg, color: colors.ctaText }}
            >
              order now
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M13.5 5.5a1 1 0 1 1 1.414-1.414l6 6a1 1 0 0 1 0 1.414l-6 6A1 1 0 0 1 13.5 16.086L17.586 12 13.5 7.914z" />
                <path d="M3 12a1 1 0 0 1 1-1h14.586l-2.793-2.793A1 1 0 1 1 17.207 6.5l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 1 1-1.414-1.414L18.586 13H4a1 1 0 0 1-1-1z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}