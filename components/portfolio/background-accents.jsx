export function BackgroundAccents() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="floating-a absolute -left-14 top-24 h-44 w-44 rounded-full bg-[radial-gradient(circle,_rgba(200,247,238,0.95),_rgba(200,247,238,0)_72%)] blur-xl" />
      <div className="floating-b absolute right-[-3rem] top-36 h-56 w-56 rounded-full bg-[radial-gradient(circle,_rgba(216,241,255,0.9),_rgba(216,241,255,0)_72%)] blur-2xl" />
      <div className="floating-c absolute left-[10%] top-[38%] h-20 w-20 rounded-full border border-white/60 bg-white/40" />
      <div className="floating-a absolute right-[18%] top-[56%] h-28 w-28 rounded-[38%] bg-[linear-gradient(135deg,_rgba(255,232,245,0.75),_rgba(223,228,255,0.25))]" />
      <div className="floating-b absolute bottom-16 left-[55%] h-36 w-36 rounded-full bg-[radial-gradient(circle,_rgba(255,231,219,0.75),_rgba(255,231,219,0)_72%)] blur-xl" />
    </div>
  );
}
