import { Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";

export function StickyMobileCta() {
  return (
    <div className="md:hidden fixed inset-x-0 bottom-0 z-40 w-full max-w-[100vw] box-border bg-white border-t border-border flex gap-3 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
      {/* <a
        href={site.phoneHref}
        className="flex-1 inline-flex items-center justify-center gap-2 h-14 rounded-xl border border-accent-blue text-accent-blue font-semibold min-h-11"
      >
        <Phone size={18} aria-hidden="true" />
        Call Now
      </a> */}
      <Button href="/contact" size="sm" className="flex-1">
        Request a Free Quote
      </Button>
    </div>
  );
}
