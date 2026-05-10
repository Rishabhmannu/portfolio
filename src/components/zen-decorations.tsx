/**
 * Japandi-zen decorative layer: warm-toned blurred gradients + crisp
 * organic blob shapes that drift very slowly. Sits behind page content.
 */
export function ZenDecorations() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-0 overflow-hidden"
    >
      {/* Warm radial wash — anchors the cream/terracotta atmosphere */}
      <div className="absolute -top-32 -right-32 size-[36rem] rounded-full bg-[oklch(0.82_0.09_45)] opacity-25 blur-[120px] animate-zen-float-a" />
      <div className="absolute top-1/3 -left-40 size-[32rem] rounded-full bg-[oklch(0.88_0.06_55)] opacity-30 blur-[120px] animate-zen-float-b" />
      <div className="absolute -bottom-40 right-1/4 size-[30rem] rounded-full bg-[oklch(0.78_0.07_30)] opacity-20 blur-[120px] animate-zen-float-c" />

      {/* Crisp organic blob — terracotta accent (top-right) */}
      <svg
        className="absolute top-24 right-[-3rem] w-44 opacity-60 animate-zen-drift-a"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="oklch(0.66 0.13 38)"
          d="M44,-58.2C57.8,-49.7,69.9,-37.7,73.7,-23.4C77.5,-9.1,73,7.5,64.6,20.1C56.2,32.6,43.9,41.1,30.8,49C17.6,56.9,3.6,64.1,-10.5,63.5C-24.6,62.9,-39,54.5,-49.3,42.7C-59.6,30.9,-65.9,15.5,-66.6,-0.4C-67.4,-16.3,-62.6,-32.5,-52.3,-41.7C-42,-50.9,-26.3,-53,-11.6,-55.2C3,-57.5,30.2,-66.7,44,-58.2Z"
          transform="translate(100 100)"
        />
      </svg>

      {/* Crisp organic blob — cream-pink (mid-left) */}
      <svg
        className="absolute top-1/2 -left-12 w-36 opacity-55 animate-zen-drift-b"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="oklch(0.90 0.05 55)"
          d="M38.6,-52.7C49.9,-43.9,58.4,-32,63.7,-18.5C69,-5,71.1,10.2,66.2,22.9C61.3,35.6,49.5,45.9,36.2,53.7C22.9,61.4,8.1,66.6,-7.4,67.6C-22.9,68.6,-39.1,65.4,-49.6,55.5C-60.1,45.5,-64.9,28.8,-67.7,11.7C-70.5,-5.4,-71.3,-22.9,-63.1,-34.7C-54.9,-46.5,-37.7,-52.7,-22.5,-58.5C-7.4,-64.4,5.7,-69.9,17.6,-67.6C29.4,-65.3,27.3,-61.5,38.6,-52.7Z"
          transform="translate(100 100)"
        />
      </svg>

      {/* Crisp organic blob — warm brown (bottom-right small) */}
      <svg
        className="absolute bottom-24 right-12 w-20 opacity-50 animate-zen-drift-c"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="oklch(0.42 0.06 50)"
          d="M37.5,-49.4C47.8,-42.2,54.5,-29.5,57.6,-16.4C60.7,-3.3,60.2,10.2,54.2,21.4C48.3,32.6,36.9,41.5,24.4,47.2C11.9,52.9,-1.7,55.4,-15.7,53.4C-29.6,51.4,-43.9,44.9,-51.7,33.7C-59.4,22.6,-60.7,6.8,-57.5,-7.7C-54.3,-22.2,-46.6,-35.5,-35.6,-42.7C-24.5,-49.9,-10.1,-51.1,2.7,-54.4C15.5,-57.6,27.3,-56.7,37.5,-49.4Z"
          transform="translate(100 100)"
        />
      </svg>

      {/* Outline ring — Japandi signature element (bottom-left, small) */}
      <svg
        className="absolute bottom-1/3 left-1/4 w-28 opacity-30 animate-zen-drift-a"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="100"
          cy="100"
          r="70"
          fill="none"
          stroke="oklch(0.55 0.08 45)"
          strokeWidth="6"
        />
      </svg>
    </div>
  );
}
