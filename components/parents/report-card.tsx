/**
 * 保護者レポートの「電話モックアップ」。ヒーローとレポート紹介セクションで
 * 共用する。メインサイトのトーン（白カード＋クリーム地＋緑、数字は font-futura、
 * 大きめの角丸とやわらかい影）に合わせてある。
 *
 * - variant="gauge": 円ゲージ＋今週の学習時間（ヒーロー用）
 * - variant="stats": 学習時間／日数／連続の3指標（レポート紹介用）
 */

// 教科の積み上げ色。サイトのトーンに合わせて緑系で統一（金・原色は使わない）。
const SUBJECTS = [
  { label: "国語", className: "bg-primary" },
  { label: "数学", className: "bg-[#3FA98C]" },
  { label: "英語", className: "bg-[#A5BCB7]" },
] as const

type Bar = { day: string; height: number; segs: number[] }

// 月〜日の学習推移（積み上げ＝国語/数学/英語の比率）。低い日は休んだ日。
const BARS: Bar[] = [
  { day: "月", height: 58, segs: [4, 3, 3] },
  { day: "火", height: 66, segs: [5, 3, 2] },
  { day: "水", height: 10, segs: [] },
  { day: "木", height: 62, segs: [0, 5, 4] },
  { day: "金", height: 12, segs: [] },
  { day: "土", height: 92, segs: [4, 4, 4] },
  { day: "日", height: 100, segs: [5, 5, 3] },
]

function BarChart() {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-[10px] font-bold text-primary">学習推移</span>
        <div className="flex items-center gap-2">
          {SUBJECTS.map((s) => (
            <span key={s.label} className="flex items-center gap-1 text-[8px] font-bold text-[#8a968d]">
              <i className={`h-1.5 w-1.5 rounded-full ${s.className}`} />
              {s.label}
            </span>
          ))}
        </div>
      </div>
      <div className="flex h-[64px] items-end justify-between gap-1.5">
        {BARS.map((bar) => (
          <div key={bar.day} className="flex flex-1 flex-col items-center gap-1">
            <div className="flex w-full flex-1 items-end justify-center">
              <div
                className="flex w-[60%] flex-col-reverse overflow-hidden rounded-[3px] bg-[#e7ece8]"
                style={{ height: `${bar.height}%` }}
              >
                {bar.segs.map((flex, i) =>
                  flex > 0 ? (
                    <i key={i} className={SUBJECTS[i].className} style={{ flexGrow: flex }} />
                  ) : null
                )}
              </div>
            </div>
            <span className="text-[8px] font-bold text-[#8a968d]">{bar.day}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function Gauge() {
  // r=25 → 円周 ≈ 157。64% → 約100。
  return (
    <div className="relative h-[58px] w-[58px] shrink-0">
      <svg viewBox="0 0 58 58" className="h-full w-full -rotate-90">
        <circle cx="29" cy="29" r="25" fill="none" stroke="#e7ece8" strokeWidth="6" />
        <circle
          cx="29"
          cy="29"
          r="25"
          fill="none"
          stroke="hsl(150 53% 24%)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray="100 157"
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center font-futura text-[15px] font-black text-primary">
        64%
      </span>
    </div>
  )
}

export function ReportCard({
  variant = "gauge",
  week,
  comment,
  withNotification = false,
  className = "",
}: {
  variant?: "gauge" | "stats"
  week: string
  comment: string
  withNotification?: boolean
  className?: string
}) {
  return (
    <div className={`w-full ${className}`}>
      {/* Phone frame */}
      <div className="overflow-hidden rounded-[34px] bg-white p-2.5 shadow-[0_24px_50px_rgba(0,0,0,0.18)] ring-1 ring-black/5">
        <div className="rounded-[26px] bg-[#FCF7F1] p-2.5">
          {/* status bar */}
          <div className="mx-auto mb-2.5 h-1 w-10 rounded-full bg-black/10" />

          {/* notification */}
          {withNotification && (
            <div className="mb-2.5 flex items-start gap-2 rounded-2xl bg-white p-2.5 shadow-[0_4px_14px_rgba(0,0,0,0.06)]">
              <AppIcon />
              <div className="min-w-0">
                <p className="text-[9px] font-bold leading-tight text-primary">
                  SAMPO STUDY 保護者レポート
                </p>
                <p className="mt-0.5 text-[9px] font-medium leading-snug text-[#5a5a5a]">
                  今週のレポートが届きました。今週も自習室でがんばりました。
                </p>
              </div>
            </div>
          )}

          {/* report card */}
          <div className="rounded-2xl bg-white p-3 shadow-[0_4px_18px_rgba(0,0,0,0.06)]">
            <div className="mb-0.5 flex items-center gap-1.5">
              <AppIcon size={14} />
              <span className="text-[10px] font-bold text-primary">今週の学習レポート</span>
            </div>
            <p className="mb-2.5 text-[9px] font-medium text-[#8a968d]">{week}</p>

            {variant === "gauge" ? (
              <div className="mb-3 flex items-center gap-3">
                <Gauge />
                <div>
                  <p className="text-[9px] font-bold text-[#8a968d]">今週の学習時間</p>
                  <p className="font-futura text-[20px] font-black leading-none text-primary">
                    12<small className="text-[10px] font-bold">時間</small>45
                    <small className="text-[10px] font-bold">分</small>
                  </p>
                  <p className="mt-1 text-[9px] font-medium text-[#8a968d]">週間目標 20時間</p>
                </div>
              </div>
            ) : (
              <div className="mb-3 grid grid-cols-3 gap-1.5">
                {[
                  { val: "12", unit: "時間45分", label: "学習時間" },
                  { val: "5", unit: "日", label: "学習日数" },
                  { val: "3", unit: "週", label: "連続利用" },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl bg-[#FCF7F1] px-1.5 py-2 text-center">
                    <p className="font-futura text-[16px] font-black leading-none text-primary">
                      {s.val}
                      <small className="text-[8px] font-bold">{s.unit}</small>
                    </p>
                    <p className="mt-1 text-[8px] font-bold text-[#8a968d]">{s.label}</p>
                  </div>
                ))}
              </div>
            )}

            <BarChart />

            <p className="mt-3 flex items-start gap-1.5 rounded-xl bg-[#FCF7F1] p-2 text-[9px] font-medium leading-snug text-[#5a5a5a]">
              <span className="mt-px h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {comment}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function AppIcon({ size = 22 }: { size?: number }) {
  return (
    <span
      className="flex shrink-0 items-center justify-center rounded-[7px] bg-primary"
      style={{ width: size, height: size }}
      aria-hidden
    >
      {/* 新芽マーク（白） */}
      <svg viewBox="0 0 24 24" width={size * 0.62} height={size * 0.62} fill="none">
        <path
          d="M12 21V11"
          stroke="#fff"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M12 12c0-3 2.4-5.2 5.4-5.2C17.4 9.8 15 12 12 12Z"
          fill="#fff"
        />
        <path
          d="M12 14c0-2.6-2-4.6-4.6-4.6C7.4 12 9.4 14 12 14Z"
          fill="#fff"
          fillOpacity="0.75"
        />
      </svg>
    </span>
  )
}
