import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919842183444"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 flex items-center gap-3"
    >
      <span className="hidden group-hover:inline-block bg-card text-foreground text-xs font-semibold px-3 py-2 rounded-md shadow-lg border border-border whitespace-nowrap">
        Chat with us
      </span>
      <span className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[var(--whatsapp)] text-white shadow-xl animate-pulse-glow">
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8" fill="currentColor" />
      </span>
    </a>
  );
}
