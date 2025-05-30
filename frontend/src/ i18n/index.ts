import type { Translations } from "./types";

const translations: Record<'es' | 'en', Translations> = {
  es: {
    project: "Proyectos",
    cart: "Carrito",
    checkout: "Finalizar compra",
  },
  en: {
    project: "Projects",
    cart: "Cart",
    checkout: "Checkout",
  },
};

export default translations;
