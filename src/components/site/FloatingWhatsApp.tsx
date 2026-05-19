import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  const phone = "254700000000";
  const text = encodeURIComponent("Hello Imara Luxury, I'd like to enquire about a property.");
  return (
    <a
      href={`https://wa.me/${phone}?text=${text}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with agent on WhatsApp"
      className="fixed bottom-6 right-6 z-[60] group"
    >
      <div className="relative">
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring" />
        <div className="relative bg-card shadow-2xl shadow-foreground/10 rounded-full pl-5 pr-2 py-2 flex items-center gap-3 border border-border transition-all duration-500 group-hover:pr-3">
          <div className="hidden sm:flex flex-col leading-none text-left">
            <span className="text-[9px] uppercase tracking-[0.22em] text-muted-foreground font-bold mb-1">
              Available Now
            </span>
            <span className="text-xs font-semibold tracking-tight whitespace-nowrap">
              Chat with Agent
            </span>
          </div>
          <span className="size-11 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg shadow-[#25D366]/30">
            <MessageCircle className="size-5" strokeWidth={2} />
          </span>
        </div>
      </div>
    </a>
  );
}
