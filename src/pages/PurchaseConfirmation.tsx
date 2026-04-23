import { useEffect } from "react";
import { trackPurchaseOnce } from "@/lib/metaPixel";

const PurchaseConfirmation = () => {
  useEffect(() => {
    trackPurchaseOnce("meta_purchase_3_99_eur", 3.99, "EUR");
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center gap-4 px-6 text-center">
        <h1 className="text-3xl font-bold">¡Compra confirmada!</h1>
        <p className="max-w-xl text-base text-muted-foreground">
          Tu acceso debería estar listo. Si vas a usar esta página como retorno del checkout,
          configura la URL de confirmación en Hotmart como /confirmacion.
        </p>
      </section>
    </main>
  );
};

export default PurchaseConfirmation;