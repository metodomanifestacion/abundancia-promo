import moneyBg from "@/assets/money-bg.jpg";
import amseLogo from "@/assets/amse-pro-logo.png";
import { trackMetaEvent } from "@/lib/metaPixel";

const Index = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-5 py-6 relative"
      style={{
        backgroundImage: `url(${moneyBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0" style={{ background: "hsla(150, 35%, 8%, 0.88)" }} />
      {/* Subtle gold shimmer particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse"
            style={{
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              background: "var(--gold-shimmer)",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.3 + Math.random() * 0.4,
              animationDuration: `${2 + Math.random() * 3}s`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative w-full max-w-lg text-center space-y-5 sm:space-y-6">
        {/* Headline */}
        <h1
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight tracking-tight"
          style={{ color: "hsl(0 0% 95%)" }}
        >
          Si visualizas todos los días y el dinero sigue sin aparecer, esto es para ti.
        </h1>

        {/* Subtitle */}
        <p
          className="text-base sm:text-lg font-medium max-w-md mx-auto leading-relaxed"
          style={{ color: "hsl(145 20% 65%)" }}
        >
          No es que la ley de atracción no funcione. Es que nadie te explicó la parte que más importa.
        </p>

        {/* Body */}
        <div className="space-y-3 max-w-md mx-auto text-left sm:text-center">
          <p className="text-sm sm:text-base leading-relaxed" style={{ color: "hsl(145 18% 72%)" }}>
            Sé cómo se siente: visualizas, afirmas, confías... y al abrir la cuenta bancaria, nada cambia. Esa sensación de que algo falla, pero no sabes qué.
          </p>
          <p className="text-sm sm:text-base leading-relaxed" style={{ color: "hsl(145 18% 72%)" }}>
            Este ebook no es más de lo mismo, son <span className="font-semibold" style={{ color: "var(--gold-shimmer)" }}>54 páginas</span> con las técnicas exactas y probadas de varios metafísicos como Neville Goddard, Joseph Murphy, entre otros — incluyendo los pasos que casi nadie enseña y que son precisamente los que hacen que todo funcione. Lo lees hoy, lo aplicas hoy.
          </p>
        </div>

        {/* Pricing */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-baseline gap-2">
            <span
              className="text-4xl sm:text-5xl font-extrabold"
              style={{ color: "var(--gold-shimmer)" }}
            >
              3,99€
            </span>
            <span className="text-sm line-through" style={{ color: "hsl(145 15% 45%)" }}>
              15,99€
            </span>
          </div>
          <p className="text-sm" style={{ color: "hsl(145 20% 65%)" }}>
            ⚠️ <span className="font-semibold" style={{ color: "var(--gold-shimmer)" }}>
              Oferta por tiempo limitado.
            </span>{" "}
            Esta promoción puede desaparecer hoy mismo.
          </p>
        </div>

        {/* Social proof stats */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 py-3 px-2 rounded-xl" style={{ background: "hsla(150, 30%, 12%, 0.6)" }}>
          <div className="flex flex-col items-center text-center">
            <span className="text-base sm:text-lg font-extrabold" style={{ color: "var(--gold-shimmer)" }}>1.200+</span>
            <span className="text-[10px] sm:text-xs leading-tight" style={{ color: "hsl(145 20% 70%)" }}>personas formadas</span>
          </div>
          <div className="flex flex-col items-center text-center border-x" style={{ borderColor: "hsl(145 20% 25% / 0.5)" }}>
            <span className="text-base sm:text-lg font-extrabold" style={{ color: "var(--gold-shimmer)" }}>★ 4,9/5</span>
            <span className="text-[10px] sm:text-xs leading-tight" style={{ color: "hsl(145 20% 70%)" }}>valoración promedio</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="text-base sm:text-lg font-extrabold" style={{ color: "var(--gold-shimmer)" }}>✅ Resultados</span>
            <span className="text-[10px] sm:text-xs leading-tight" style={{ color: "hsl(145 20% 70%)" }}>en 7 días</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="space-y-2">
          <a
            href="https://pay.hotmart.com/O105272641O?checkoutMode=10"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackMetaEvent("track", "InitiateCheckout")}
            className="w-full max-w-xs mx-auto block text-base sm:text-lg font-bold py-4 px-8 rounded-xl transition-all duration-300 cursor-pointer active:scale-95 text-center no-underline"
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
            ¡SÍ, QUIERO ACTIVAR MI ABUNDANCIA!
          </a>
          <p className="text-xs" style={{ color: "hsl(145 15% 50%)" }}>
            (Acceso inmediato tras el pago)
          </p>
          <p className="text-xs font-medium" style={{ color: "hsl(145 25% 70%)" }}>
            🔒 Compra segura en Hotmart · Acceso inmediato
          </p>
        </div>

        {/* Trust */}
        <p
          className="text-xs sm:text-sm tracking-wide"
          style={{ color: "hsl(145 15% 50%)" }}
        >
          Acceso inmediato · Lectura rápida · Método sencillo
        </p>

        {/* Footer with logo and credits */}
        <div className="pt-6 mt-6 border-t flex flex-col items-center gap-2" style={{ borderColor: "hsl(145 20% 25% / 0.4)" }}>
          <img
            src={amseLogo}
            alt="AMSE PRO - Evolución sin límites"
            className="w-24 h-auto rounded-lg"
            loading="lazy"
          />
          <p className="text-xs" style={{ color: "hsl(145 15% 60%)" }}>
            Creado por Angela Sarmiento, fundadora de Amse Pro
          </p>
          <a
            href="mailto:hola@amsepro.com"
            className="text-xs font-medium hover:underline"
            style={{ color: "var(--gold-shimmer)" }}
          >
            hola@amsepro.com
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
