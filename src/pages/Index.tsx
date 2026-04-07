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
      <div className="absolute inset-0" style={{ background: "hsla(150, 35%, 8%, 0.75)" }} />
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
          Esto hizo{" "}
          <span style={{ color: "var(--gold-shimmer)" }}>CLICK</span> en mi
          mente…
          <br />y mi economía empezó a cambiar
        </h1>

        {/* Subtitle */}
        <p
          className="text-base sm:text-lg font-medium"
          style={{ color: "hsl(145 20% 65%)" }}
        >
          Si quieres atraer dinero, no puedes actuar desde la escasez.
        </p>

        {/* Description */}
        <p
          className="text-sm sm:text-base max-w-md mx-auto leading-relaxed"
          style={{ color: "hsl(145 15% 55%)" }}
        >
          En esta guía te explico el cambio exacto que me ayudó a ver el dinero
          de otra forma y empezar a atraerlo.
        </p>

        {/* Pricing */}
        <div className="space-y-1">
          <p className="text-sm line-through" style={{ color: "hsl(145 15% 45%)" }}>
            6,99€
          </p>
          <p
            className="text-4xl sm:text-5xl font-extrabold"
            style={{ color: "var(--gold-shimmer)" }}
          >
            2,99€
          </p>
          <p
            className="text-xs font-bold tracking-widest uppercase"
            style={{ color: "var(--gold-shimmer)" }}
          >
            Solo por tiempo limitado
          </p>
        </div>

        {/* Urgency */}
        <p
          className="text-xs sm:text-sm italic"
          style={{ color: "hsl(145 15% 50%)" }}
        >
          Esta promoción puede desaparecer en cualquier momento.
        </p>

        {/* CTA Button */}
        <div>
          <button
            className="w-full max-w-xs mx-auto block text-base sm:text-lg font-bold py-4 px-8 rounded-xl transition-all duration-300 cursor-pointer active:scale-95"
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
            QUIERO ACCEDER AHORA
          </button>
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
