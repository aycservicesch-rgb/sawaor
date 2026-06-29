/* ============================================================
   SAWA OR — Datos del sitio
   Edita aquí boutiques, productos y cotizaciones.
   ============================================================ */

/* --- COTIZACIONES (edita con los valores del día) --- */
const COURS = {
  date: "2026-06-24",
  or24kg:  { label: {fr:"OR 1000/24 CARATS",en:"GOLD 1000/24 CARAT",de:"GOLD 1000/24 KARAT",it:"ORO 1000/24 CARATI",es:"ORO 1000/24 QUILATES"}, unit: "Frs / kg", value: 106662, series:[110050,107500,104200,104900,106900,105200,106662] },
  or24gr:  { label: {fr:"OR 1000/24 CARATS",en:"GOLD 1000/24 CARAT",de:"GOLD 1000/24 KARAT",it:"ORO 1000/24 CARATI",es:"ORO 1000/24 QUILATES"}, unit: "Frs / gr", value: 106.66, series:[110.05,107.5,104.2,104.9,106.9,105.2,106.66] },
  or18kg:  { label: {fr:"OR 750/18 CARATS",en:"GOLD 750/18 CARAT",de:"GOLD 750/18 KARAT",it:"ORO 750/18 CARATI",es:"ORO 750/18 QUILATES"},  unit: "Frs / kg", value: 73000,  series:[75500,72000,69500,70000,77000,72500,73000] },
  or18gr:  { label: {fr:"OR 750/18 CARATS",en:"GOLD 750/18 CARAT",de:"GOLD 750/18 KARAT",it:"ORO 750/18 CARATI",es:"ORO 750/18 QUILATES"},  unit: "Frs / gr", value: 73,     series:[75.5,72,69.5,70,77,72.5,73] }
};
const COURS_DAYS = ["17.06","18.06","19.06","20.06","21.06","22.06","23.06","24.06"];

/* --- PRODUCTOS (tienda) --- */
const PRODUCTS = [
  { ico:"🥇", name:{fr:"Lingot 100g d'or fin",en:"100g fine gold bar",de:"Feingoldbarren 100g",it:"Lingotto 100g oro fino",es:"Lingote 100g oro fino"}, spec:"100 g / 999,9", price:"CHF 11'519.50", cat:"lingot" },
  { ico:"🥇", name:{fr:"Lingot 50g d'or fin",en:"50g fine gold bar",de:"Feingoldbarren 50g",it:"Lingotto 50g oro fino",es:"Lingote 50g oro fino"},  spec:"50 g / 999,9",  price:"CHF 5'759.75",  cat:"lingot" },
  { ico:"🥇", name:{fr:"Lingot 20g d'or fin",en:"20g fine gold bar",de:"Feingoldbarren 20g",it:"Lingotto 20g oro fino",es:"Lingote 20g oro fino"},  spec:"20 g / 999,9",  price:"CHF 2'346.56",  cat:"lingot" },
  { ico:"🥇", name:{fr:"Lingot 10g d'or fin",en:"10g fine gold bar",de:"Feingoldbarren 10g",it:"Lingotto 10g oro fino",es:"Lingote 10g oro fino"},  spec:"10 g / 999,9",  price:"CHF 1'173.28",  cat:"lingot" },
  { ico:"🥇", name:{fr:"Lingot 5g d'or fin",en:"5g fine gold bar",de:"Feingoldbarren 5g",it:"Lingotto 5g oro fino",es:"Lingote 5g oro fino"},   spec:"5 g / 999,9",   price:"CHF 613.31",    cat:"lingot" },
  { ico:"🥇", name:{fr:"Lingot 2g d'or fin",en:"2g fine gold bar",de:"Feingoldbarren 2g",it:"Lingotto 2g oro fino",es:"Lingote 2g oro fino"},   spec:"2 g / 999,9",   price:"CHF 253.86",    cat:"lingot" },
  { ico:"🥇", name:{fr:"Lingot 1g d'or fin",en:"1g fine gold bar",de:"Feingoldbarren 1g",it:"Lingotto 1g oro fino",es:"Lingote 1g oro fino"},   spec:"1 g / 999,9",   price:"CHF 132.26",    cat:"lingot" },
  { ico:"🪙", name:"10 Francs Vreneli",   spec:"2.90 g / 900 / Ø19 mm",  price:"CHF 448.51", cat:"piece" },
  { ico:"🪙", name:"20 Francs Vreneli",   spec:"5.80 g / 900 / Ø21 mm",  price:"CHF 680.50", cat:"piece" },
  { ico:"🪙", name:"Napoléon 20 Frs",     spec:"5.80 g / 900 / Ø21 mm",  price:"CHF 680.50", cat:"piece" },
  { ico:"🪙", name:"Elisabeth II",        spec:"7.31 g / 916 / Ø22 mm",  price:"CHF 873.26", cat:"piece" },
  { ico:"🪙", name:"Maple Leaf",          spec:"31.10 g / 999 / Ø30 mm", price:"CHF 3'648.91", cat:"piece" },
  { ico:"🪙", name:"American Eagle",      spec:"31.10 g / 916 / Ø34.2 mm", price:"CHF 3'648.91", cat:"piece" },
  { ico:"🪙", name:"50 Pesos",            spec:"37.50 g / 900 / Ø37 mm", price:"CHF 4'399.81", cat:"piece" },
  { ico:"🪙", name:"Krugerrand",          spec:"31.10 g / 916 / Ø32 mm", price:"CHF 3'648.91", cat:"piece" }
];

/* --- BOUTIQUES (44) — rebrandeadas SAWA OR --- */
const BOUTIQUES = [
  ["SAWA OR NYON","1260 Nyon – Suisse"],
  ["SAWA OR GENÈVE 1 GARE","1201 Genève – Suisse"],
  ["SAWA OR GENÈVE 2 EAUX-VIVES","1207 Genève – Suisse"],
  ["SAWA OR GENÈVE 3 CONFÉDÉRATION","1204 Genève – Suisse"],
  ["SAWA OR GENÈVE RIVE DROITE","1201 Genève – Suisse"],
  ["SAWA OR CHÊNE-BOURG","1225 Chêne-Bourg – Suisse"],
  ["SAWA OR LE GRAND-SACONNEX / AÉROPORT","1218 Le Grand-Saconnex – Suisse"],
  ["SAWA OR MEYRIN / GENÈVE","1217 Meyrin – Suisse"],
  ["SAWA OR ETOY","1163 Etoy – Suisse"],
  ["SAWA OR LAUSANNE 1 GARE","1003 Lausanne – Suisse"],
  ["SAWA OR LAUSANNE 2 TERREAUX","1003 Lausanne – Suisse"],
  ["SAWA OR LAUSANNE 3 BELLEVAUX","1018 Lausanne – Suisse"],
  ["SAWA OR PRILLY","1008 Prilly – Suisse"],
  ["SAWA OR YVERDON","1400 Yverdon – Suisse"],
  ["SAWA OR NEUCHÂTEL","2000 Neuchâtel – Suisse"],
  ["SAWA OR BIENNE","2502 Bienne – Suisse"],
  ["SAWA OR LA CHAUX-DE-FONDS","2300 La Chaux-de-Fonds – Suisse"],
  ["SAWA OR VEVEY","1800 Vevey – Suisse"],
  ["SAWA OR MONTREUX","1820 Montreux – Suisse"],
  ["SAWA OR MORGES","1110 Morges – Suisse"],
  ["SAWA OR PAYERNE","1530 Payerne – Suisse"],
  ["SAWA OR BULLE","1630 Bulle – Suisse"],
  ["SAWA OR MONTHEY","1870 Monthey – Suisse"],
  ["SAWA OR MARTIGNY","1920 Martigny – Suisse"],
  ["SAWA OR UVRIER","1958 Saint-Léonard – Suisse"],
  ["SAWA OR SIERRE","3960 Sierre – Suisse"],
  ["SAWA OR SION","1950 Sion – Suisse"],
  ["SAWA OR FRIBOURG","1700 Fribourg – Suisse"],
  ["SAWA OR BÂLE","4051 Bâle – Suisse"],
  ["SAWA OR BÂLE 2","4058 Basel – Suisse"],
  ["SAWA OR SCHAFFHOUSE","8200 Schaffhouse – Suisse"],
  ["SAWA OR ZÜRICH 1","8001 Zürich – Suisse"],
  ["SAWA OR ZÜRICH 2","8001 Zürich – Suisse"],
  ["SAWA OR LUCERNE","6003 Lucerne – Suisse"],
  ["SAWA OR SAINT-GALL","9000 St. Gallen – Suisse"],
  ["SAWA OR WINTERTHUR","8400 Winterthur – Suisse"],
  ["SAWA OR OERLIKON","8050 Zürich – Suisse"],
  ["SAWA OR COIRE","7000 Coire – Suisse"],
  ["SAWA OR BERNE","3011 Bern – Suisse"],
  ["SAWA OR DELÉMONT","2800 Delémont – Suisse"],
  ["SAWA OR SOLEURE","4500 Soleure – Suisse"],
  ["SAWA OR LOCARNO","6600 Locarno – Suisse"],
  ["SAWA OR LUGANO","6900 Lugano – Suisse"],
  ["SAWA OR BELLINZONE TESSIN","6500 Bellinzona – Suisse"]
];

/* --- Coordenadas (mismo orden que BOUTIQUES) para el mapa --- */
const BOUTIQUE_COORDS = [
  [46.383,6.239],[46.210,6.142],[46.200,6.158],[46.205,6.140],[46.212,6.146],
  [46.194,6.187],[46.231,6.122],[46.227,6.078],[46.485,6.413],[46.517,6.629],
  [46.522,6.637],[46.535,6.620],[46.531,6.604],[46.778,6.641],[46.990,6.929],
  [47.137,7.247],[47.104,6.828],[46.461,6.843],[46.431,6.911],[46.511,6.498],
  [46.822,6.938],[46.619,7.057],[46.254,6.954],[46.103,7.073],[46.253,7.418],
  [46.292,7.533],[46.231,7.359],[46.806,7.162],[47.559,7.588],[47.564,7.598],
  [47.697,8.635],[47.374,8.541],[47.371,8.548],[47.050,8.305],[47.424,9.377],
  [47.500,8.724],[47.410,8.544],[46.850,9.532],[46.948,7.447],[47.366,7.345],
  [47.208,7.537],[46.171,8.799],[46.004,8.951],[46.195,9.024]
];
