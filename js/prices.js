/* ============================================================
   SAWA OR — Precio del oro EN VIVO
   APIs gratuitas sin clave (CORS habilitado):
   - Oro/Plata:  https://api.gold-api.com  (USD por onza troy)
   - Cambio USD→CHF: https://open.er-api.com
   ============================================================ */
const PRICE_API = {
  gold:   "https://api.gold-api.com/price/XAU",
  silver: "https://api.gold-api.com/price/XAG",
  fx:     "https://open.er-api.com/v6/latest/USD"
};
const TROY_OZ = 31.1034768;       // gramos en una onza troy
/* Factor de compra: 1.0 = precio spot. Baja a 0.97 si quieres mostrar
   el precio de COMPRA al cliente (un poco por debajo del spot). */
const BUY_FACTOR = 1.0;

function _r2(n){ return Math.round(n*100)/100; }

async function fetchLivePrices(){
  try{
    const [g,s,fx] = await Promise.all([
      fetch(PRICE_API.gold).then(r=>r.json()),
      fetch(PRICE_API.silver).then(r=>r.json()),
      fetch(PRICE_API.fx).then(r=>r.json())
    ]);
    const usdchf = (fx && fx.rates && fx.rates.CHF) ? fx.rates.CHF : null;
    if(!usdchf || !g.price || !s.price) return null;
    const goldChfG   = (g.price * usdchf / TROY_OZ) * BUY_FACTOR;   // CHF / gramo 24k
    const silverChfG = (s.price * usdchf / TROY_OZ) * BUY_FACTOR;   // CHF / gramo
    return {
      or24gr:  _r2(goldChfG),
      or24kg:  Math.round(goldChfG * 1000),
      or18gr:  _r2(goldChfG * 0.75),     // 18k = 750/1000
      argent:  Math.round(silverChfG * 1000),
      date:    (g.updatedAt || "").slice(0,10),
      updated: g.updatedAtReadable || "",
      usdchf:  _r2(usdchf)
    };
  }catch(e){
    console.warn("Cours en direct indisponible, valeurs de secours utilisées.", e);
    return null;
  }
}

/* Reescala una serie histórica para que su último punto = valor en vivo,
   conservando la forma de la tendencia. */
function anchorSeries(series, liveValue){
  const last = series[series.length-1] || liveValue;
  const factor = last ? liveValue/last : 1;
  return series.map(v => v*factor);
}
