const Index = () => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center px-5 py-6"
      style={{ background: "var(--gradient-sky)" }}
    >
      <div className="w-full max-w-lg text-center space-y-5 sm:space-y-6">
        {/* Headline */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight text-foreground tracking-tight">
          Esto hizo <span className="text-primary">CLICK</span> en mi mente…
          <br />y mi economía empezó a cambiar
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg font-medium text-muted-foreground">
          Si quieres atraer dinero, no puedes actuar desde la escasez.
        </p>

        {/* Description */}
        <p className="text-sm sm:text-base text-muted-foreground max-w-md mx-auto leading-relaxed">
          En esta guía te explico el cambio exacto que me ayudó a ver el dinero
          de otra forma y empezar a atraerlo.
        </p>

        {/* Pricing */}
        <div className="space-y-1">
          <p className="text-muted-foreground text-sm line-through">6,99€</p>
          <p className="text-4xl sm:text-5xl font-extrabold text-foreground">2,99€</p>
          <p
            className="text-xs font-bold tracking-widest uppercase"
            style={{ color: "hsl(var(--accent))" }}
          >
            Solo por tiempo limitado
          </p>
        </div>

        {/* Urgency */}
        <p className="text-xs sm:text-sm text-muted-foreground italic">
          Esta promoción puede desaparecer en cualquier momento.
        </p>

        {/* CTA Button */}
        <div>
          <button
            className="w-full max-w-xs mx-auto block text-base sm:text-lg font-bold py-4 px-8 rounded-xl transition-all duration-300 cursor-pointer active:scale-95"
            style={{
              background: "var(--gradient-cta)",
              color: "hsl(var(--accent-foreground))",
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
        <p className="text-xs sm:text-sm text-muted-foreground tracking-wide">
          Acceso inmediato · Lectura rápida · Método sencillo
        </p>
      </div>
    </div>
  );
};

export default Index;
