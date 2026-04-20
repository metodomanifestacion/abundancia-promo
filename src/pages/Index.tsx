import moneyBg from "@/assets/money-bg.jpg";

const Index = () => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center px-5 py-6 overflow-hidden"
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
          Los Secretos de la Abundancia
          <br />en un Solo Lugar
        </h1>

        {/* Subtitle */}
        <p
          className="text-base sm:text-lg font-medium max-w-md mx-auto leading-relaxed"
          style={{ color: "hsl(145 20% 65%)" }}
        >
          He reunido los métodos exactos de los grandes maestros de la
          metafísica para atraer dinero y suerte. No pierdas tiempo buscando;
          aquí tienes el camino probado.
        </p>

        {/* Description */}
        <p
          className="text-sm sm:text-base max-w-md mx-auto leading-relaxed"
          style={{ color: "hsl(145 15% 55%)" }}
        >
          54 páginas con las técnicas que realmente funcionan para
          reprogramar tu economía y cambiar tu suerte hoy mismo.
        </p>

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

        {/* CTA Button */}
        <div className="space-y-2">
          <a
            href="https://pay.hotmart.com/O105272641O?checkoutMode=10"
            target="_blank"
            rel="noopener noreferrer"
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
        </div>

        {/* Trust */}
        <p
          className="text-xs sm:text-sm tracking-wide"
          style={{ color: "hsl(145 15% 50%)" }}
        >
          Acceso inmediato · Lectura rápida · Método sencillo
        </p>
      </div>
    </div>
  );
};

export default Index;
