import { Counter } from "@/components/ui/Counter";

const stats = [
  { value: 10, suffix: "+", label: "Years in Business" },
  { value: 500, suffix: "+", label: "Facilities Cleaned" },
  { value: 98, suffix: "%", label: "Client Retention" },
  { value: 24, suffix: "/7", label: "Responsive Support" },
];

export function TrustBar() {
  return (
    <section className="relative z-10 -mt-12 md:-mt-16">
      <div className="container-default">
        <div className="bg-white rounded-[20px] md:rounded-[24px] shadow-lg ring-1 ring-black/5 grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4 md:gap-8 px-5 md:px-8 py-7 md:py-10">
          {stats.map((s) => (
            <Counter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
