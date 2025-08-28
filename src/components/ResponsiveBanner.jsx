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
          <div className="relative h-[500px] sm:h-[540px] lg:h-[580px]">
            {/* BALANCE word */}
            <div className="absolute inset-0 flex items-center justify-center select-none" aria-hidden>
              <span
                className="font-extrabold tracking-[0.06em] leading-none text-center"
                style={{ fontSize: "min(18vw, 230px)", color: colors.overlayWord }}
              >
                BALANCE
              </span>
            </div>

            {/* Bowls aligned like reference */}
            <img
              src={bowls.left}
              alt="Bowl left"
              className="absolute left-6 top-[65%] h-52 w-52 -translate-y-1/2 rounded-full object-cover shadow-2xl ring-1 ring-black/30"
            />
            <img
              src={bowls.midLeft}
              alt="Bowl mid left"
              className="absolute left-[32%] top-[5%] h-60 w-60 -translate-x-1/2 rounded-full object-cover shadow-2xl ring-1 ring-black/30"
            />
            <img
              src={bowls.midRight}
              alt="Bowl mid right"
              className="absolute left-[65%] top-[12%] h-60 w-60 -translate-x-1/2 rounded-full object-cover shadow-2xl ring-1 ring-black/30"
            />
            <img
              src={bowls.right}
              alt="Bowl right"
              className="absolute right-6 top-[65%] h-52 w-52 -translate-y-1/2 rounded-full object-cover shadow-2xl ring-1 ring-black/30"
            />

            <div className="h-full" />
          </div>
        </div>
      </div>

      {/* Bottom green band */}
      <div style={{ backgroundColor: colors.bandBg }}>
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-16 lg:px-8">
          {/* Left heading */}
          <div>
            <h2 className="text-5xl font-extrabold leading-tight text-white sm:text-6xl">
              lunch made
              <br />
              lighter<span style={{ color: colors.dot }}>.</span>
            </h2>
          </div>

          {/* Right content */}
          <div className="max-w-xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide" style={{ color: colors.subCopy }}>
              small rice bowls. big flavour.
            </p>
            <p className="text-base leading-relaxed" style={{ color: colors.subCopy }}>
              try our new small rice bowls for the perfect lighter options. choose your flavours and keep it fresh,
              filling, and from just 9.95.
            </p>

            <button
              onClick={onOrder}
              className="mt-8 inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold shadow-sm transition hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
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