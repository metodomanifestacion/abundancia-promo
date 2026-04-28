import amseLogo from "@/assets/amse-pro-logo.png";
import { trackMetaEvent } from "@/lib/metaPixel";
import { Sparkles, BookOpen, Zap, Lock, Download, Star, Users, TrendingUp, Mail, AlertTriangle, ArrowRight, Heart } from "lucide-react";

const Index = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-5 py-6 relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at top, hsl(150 45% 12%) 0%, hsl(150 50% 6%) 60%, hsl(150 55% 4%) 100%)",
      }}
    >
      {/* Floating gold particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => {
          const size = 2 + Math.random() * 4;
          const duration = 8 + Math.random() * 12;
          const delay = Math.random() * 8;
          return (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                background: "var(--gold-shimmer)",
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: 0.4 + Math.random() * 0.5,
                boxShadow: `0 0 ${size * 2}px hsl(45 90% 60% / 0.7)`,
                animation: `float-particle ${duration}s ease-in-out ${delay}s infinite`,
              }}
            />
          );
        })}
      </div>
      <style>{`
        @keyframes float-particle {
          0%, 100% { transform: translate(0, 0); opacity: 0.4; }
          25% { transform: translate(10px, -20px); opacity: 0.9; }
          50% { transform: translate(-15px, -40px); opacity: 0.6; }
          75% { transform: translate(20px, -25px); opacity: 0.8; }
        }
      `}</style>
      <div className="relative w-full max-w-lg text-center space-y-5 sm:space-y-6">
        {/* Headline */}
        <h1
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight tracking-tight flex items-start justify-center gap-2"
          style={{ color: "hsl(0 0% 95%)" }}
        >
          <Sparkles className="shrink-0 mt-1" style={{ color: "var(--gold-shimmer)" }} size={28} />
          <span>Si visualizas todos los días y el dinero sigue sin aparecer, esto es para ti.</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-base sm:text-lg font-medium max-w-md mx-auto leading-snug"
          style={{ color: "hsl(145 20% 65%)" }}
        >
          No es que la ley de atracción no funcione. Es que nadie te explicó la parte que más importa.
        </p>

        {/* Body */}
        <div className="space-y-3 max-w-md mx-auto text-left sm:text-center text-sm sm:text-base leading-relaxed" style={{ color: "hsl(145 18% 72%)" }}>
          <p>
            <Heart className="inline mr-1 -mt-1" size={16} style={{ color: "var(--gold-shimmer)" }} />
            Sé cómo se siente: visualizas, afirmas, confías... y al abrir la cuenta bancaria, nada cambia. Esa sensación de que algo falla, pero no sabes qué.
          </p>
          <p>
            <BookOpen className="inline mr-1 -mt-1" size={16} style={{ color: "var(--gold-shimmer)" }} />
            Este ebook no es más de lo mismo, son <span className="font-semibold" style={{ color: "var(--gold-shimmer)" }}>54 páginas</span> con las técnicas exactas y probadas de varios metafísicos como Neville Goddard, Joseph Murphy, entre otros — incluyendo los pasos que casi nadie enseña y que son precisamente los que hacen que todo funcione. <Zap className="inline -mt-1" size={16} style={{ color: "var(--gold-shimmer)" }} /> Lo lees hoy, lo aplicas hoy.
          </p>
        </div>

        {/* Pricing */}
        <div className="flex flex-col items-center gap-1">
          <div className="flex items-baseline gap-2">
            <span className="text-4xl sm:text-5xl font-extrabold" style={{ color: "var(--gold-shimmer)" }}>3,99€</span>
            <span className="text-sm line-through" style={{ color: "hsl(145 15% 45%)" }}>15,99€</span>
          </div>
          <p className="text-sm flex items-center gap-1" style={{ color: "hsl(145 20% 65%)" }}>
            <AlertTriangle size={14} style={{ color: "var(--gold-shimmer)" }} />
            <span className="font-semibold" style={{ color: "var(--gold-shimmer)" }}>Oferta por tiempo limitado</span> — puede desaparecer hoy.
          </p>
        </div>

        {/* CTA Button */}
        <div className="space-y-2">
          <a
            href="https://pay.hotmart.com/O105272641O?checkoutMode=10"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackMetaEvent("track", "InitiateCheckout")}
            className="w-full max-w-xs mx-auto flex items-center justify-center gap-2 text-base sm:text-lg font-bold py-4 px-6 rounded-xl transition-all duration-300 cursor-pointer active:scale-95 no-underline"
            style={{
              background: "var(--gradient-cta)",
              color: "hsl(150 40% 10%)",
              boxShadow: "var(--shadow-cta)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--gradient-cta-hover)";
              e.currentTarget.style.boxShadow = "var(--shadow-cta-hover)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--gradient-cta)";
              e.currentTarget.style.boxShadow = "var(--shadow-cta)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Quiero el método por 3,99€ <ArrowRight size={20} />
          </a>
          <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1 text-xs font-medium" style={{ color: "hsl(145 25% 70%)" }}>
            <span className="flex items-center gap-1"><Zap size={12} /> Acceso inmediato</span>
            <span className="flex items-center gap-1"><Download size={12} /> PDF descargable</span>
            <span className="flex items-center gap-1"><Lock size={12} /> Hotmart</span>
          </div>
        </div>

        {/* Social proof */}
        <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-1 text-sm font-medium" style={{ color: "hsl(145 22% 75%)" }}>
          <span className="flex items-center gap-1"><Users size={14} style={{ color: "var(--gold-shimmer)" }} /> 1.200+ personas</span>
          <span className="flex items-center gap-1"><Star size={14} style={{ color: "var(--gold-shimmer)" }} fill="currentColor" /> 4,9/5</span>
          <span className="flex items-center gap-1"><TrendingUp size={14} style={{ color: "var(--gold-shimmer)" }} /> Resultados en 7 días</span>
        </div>

        {/* Footer with logo and credits */}
        <div className="pt-5 mt-2 border-t flex flex-col items-center gap-1" style={{ borderColor: "hsl(145 20% 25% / 0.4)" }}>
          <img src={amseLogo} alt="AMSE PRO" className="w-20 h-auto rounded-lg" loading="lazy" />
          <p className="text-xs" style={{ color: "hsl(145 15% 60%)" }}>
            Creado por Angela Sarmiento, fundadora de Amse Pro
          </p>
          <a href="mailto:hola@amsepro.com" className="text-xs font-medium hover:underline flex items-center gap-1" style={{ color: "var(--gold-shimmer)" }}>
            <Mail size={12} /> hola@amsepro.com
          </a>
          <p className="text-xs italic" style={{ color: "hsl(145 15% 55%)" }}>
            Estamos aquí para acompañarte en tu transformación
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
