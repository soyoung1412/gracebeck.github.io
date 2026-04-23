import { SparkleIcon } from "@/components/ui/icons";

export function DecorativeIllustration() {
  return (
    <div className="relative isolate min-h-[360px] sm:min-h-[430px]">
      <div className="soft-panel-strong relative h-full overflow-hidden rounded-[34px] p-6 sm:p-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.9),_rgba(255,255,255,0)_58%),linear-gradient(135deg,_rgba(200,247,238,0.9),_rgba(216,241,255,0.88)_52%,_rgba(255,232,245,0.85)_100%)]" />

        {/* Original abstract shapes keep the page playful without borrowing any existing character art. */}
        <div className="floating-a absolute left-8 top-8 rounded-full border border-white/80 bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-sky-700 shadow-[0_16px_36px_rgba(102,131,165,0.15)]">
          Original shapes
        </div>
        <div className="floating-b absolute right-8 top-12 rounded-[22px] border border-white/80 bg-white/78 px-4 py-3 text-sm font-semibold text-slate-700 shadow-[0_18px_38px_rgba(102,131,165,0.15)]">
          UI Kits
        </div>
        <div className="floating-c absolute bottom-12 left-6 rounded-[20px] border border-white/85 bg-white/84 px-4 py-3 text-sm font-semibold text-slate-700 shadow-[0_18px_40px_rgba(102,131,165,0.15)]">
          Motion Notes
        </div>
        <div className="floating-a absolute bottom-10 right-8 rounded-full border border-white/80 bg-white/78 px-4 py-2 text-sm font-semibold text-slate-700 shadow-[0_16px_34px_rgba(102,131,165,0.15)]">
          Branding
        </div>

        <div className="relative flex h-full items-center justify-center">
          <div className="relative h-[15.5rem] w-[15.5rem] rounded-[42%_58%_55%_45%/44%_48%_52%_56%] bg-[linear-gradient(135deg,_rgba(255,255,255,0.95),_rgba(216,241,255,0.92)_44%,_rgba(200,247,238,0.92)_78%,_rgba(255,232,245,0.88)_100%)] shadow-[0_36px_90px_rgba(110,145,186,0.28)] sm:h-[19rem] sm:w-[19rem]">
            <div className="absolute inset-[14%] rounded-[44%_56%_63%_37%/38%_46%_54%_62%] bg-white/88 shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_24px_50px_rgba(110,145,186,0.18)]" />
            <div className="absolute left-[18%] top-[24%] h-10 w-10 rounded-full bg-[linear-gradient(180deg,_#8adccc,_#c8f7ee)] shadow-[0_14px_26px_rgba(94,189,172,0.3)] sm:h-12 sm:w-12" />
            <div className="absolute right-[19%] top-[27%] h-8 w-14 rounded-full bg-[linear-gradient(180deg,_#9db7ff,_#dde4ff)] shadow-[0_12px_24px_rgba(122,141,214,0.24)] sm:h-10 sm:w-16" />
            <div className="absolute left-[22%] top-[46%] h-16 w-[58%] rounded-[24px] bg-white/72 shadow-[0_18px_40px_rgba(102,131,165,0.12)] backdrop-blur" />
            <div className="absolute left-[28%] top-[53%] h-3 w-[20%] rounded-full bg-sky-200" />
            <div className="absolute left-[28%] top-[60%] h-3 w-[36%] rounded-full bg-emerald-100" />
            <div className="absolute bottom-[14%] left-[50%] flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full bg-white/86 shadow-[0_20px_40px_rgba(102,131,165,0.18)] sm:h-20 sm:w-20">
              <SparkleIcon className="h-8 w-8 text-sky-600 sm:h-10 sm:w-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
