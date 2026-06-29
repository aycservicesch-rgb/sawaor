/* ============================================================
   SAWA OR — Lógica común
   ============================================================ */
const WA_RAW="595995367517";              // WhatsApp (sin + ni espacios)
const WA_DISPLAY="+595 995 367 517";
const EMAIL="contact@sawaor.ch";

/* ---- Iconos SVG inline ---- */
const ICON={
  fb:'<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12Z"/></svg>',
  ig:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
  yt:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="4"/><path d="M10 9l5 3-5 3z" fill="currentColor" stroke="none"/></svg>',
  in:'<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0 0-5ZM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4 0 4.75 2.6 4.75 6V21H17.6v-5.3c0-1.26-.02-2.9-1.77-2.9s-2.04 1.38-2.04 2.8V21H9z"/></svg>',
  x:'<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.3 8.3L23 22h-6.8l-5-6.6L5.5 22H2.4l7.8-8.9L1.6 2h6.9l4.5 6 5.9-6Zm-2.4 18h1.7L7.6 3.8H5.8z"/></svg>',
  wa:'<svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor"><path d="M.06 24l1.7-6.2A11.9 11.9 0 1 1 12 24a11.9 11.9 0 0 1-5.7-1.45L.06 24Zm6.6-3.8c1.6.96 3.1 1.5 5.3 1.5a9.9 9.9 0 1 0-9.9-9.9c0 2.3.6 3.9 1.6 5.5l-1 3.6 3.9-1ZM17.4 14c-.3-.15-1.7-.85-2-.95s-.45-.15-.65.15-.75.95-.9 1.1-.35.2-.65.05a8.1 8.1 0 0 1-2.4-1.5 9 9 0 0 1-1.65-2.05c-.15-.3 0-.45.15-.6l.45-.55c.15-.2.2-.3.3-.5s.05-.4 0-.55-.65-1.6-.9-2.15c-.25-.55-.5-.45-.65-.45l-.55-.05a1.05 1.05 0 0 0-.75.35 3.15 3.15 0 0 0-1 2.35c0 1.4 1 2.7 1.15 2.9s2 3.05 4.85 4.25c2.8 1.2 2.8.8 3.3.75s1.7-.7 1.95-1.35.25-1.25.2-1.35-.3-.2-.6-.35Z"/></svg>'
};
/* Iconos sociales a color (marca) */
const SOCIAL_BRAND=[
  {n:"Facebook",c:"#1877F2",svg:ICON_FB()},
  {n:"Instagram",c:"ig",svg:'<svg width="20" height="20" viewBox="0 0 24 24" fill="#fff"><path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.43.36 1.06.41 2.23.06 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.43.16-1.06.36-2.23.41-1.3.06-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.43-.36-1.06-.41-2.23C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.43-.16 1.06-.36 2.23-.41C8.4 2.2 8.8 2.2 12 2.2Zm0 3.2A6.4 6.4 0 1 0 18.4 12 6.4 6.4 0 0 0 12 5.4Zm0 10.6A4.2 4.2 0 1 1 16.2 12 4.2 4.2 0 0 1 12 16Zm6.6-10.9a1.5 1.5 0 1 0 1.5 1.5 1.5 1.5 0 0 0-1.5-1.5Z"/></svg>'},
  {n:"LinkedIn",c:"#0A66C2",svg:ICON_IN()},
  {n:"X",c:"#000",svg:ICON_X()}
];
function ICON_FB(){return '<svg width="20" height="20" viewBox="0 0 24 24" fill="#fff"><path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6S15.55 3.4 14.45 3.4c-2.3 0-3.85 1.4-3.85 3.95v2.55H7.9V13h2.7v8z"/></svg>';}
function ICON_IN(){return '<svg width="20" height="20" viewBox="0 0 24 24" fill="#fff"><path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0 0-5ZM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4 0 4.75 2.6 4.75 6V21H17.6v-5.3c0-1.26-.02-2.9-1.77-2.9s-2.04 1.38-2.04 2.8V21H9z"/></svg>';}
function ICON_X(){return '<svg width="18" height="18" viewBox="0 0 24 24" fill="#fff"><path d="M18.9 2H22l-7.3 8.3L23 22h-6.8l-5-6.6L5.5 22H2.4l7.8-8.9L1.6 2h6.9l4.5 6 5.9-6Zm-2.4 18h1.7L7.6 3.8H5.8z"/></svg>';}
function brandSocials(){
  return SOCIAL_BRAND.map(s=>{
    const bg=s.c==="ig"?"background:radial-gradient(circle at 30% 110%,#feda75,#fa7e1e 30%,#d62976 55%,#962fbf 80%,#4f5bd5)":"background:"+s.c;
    return `<a href="#" aria-label="${s.n}" class="brand-soc" style="${bg}">${s.svg}</a>`;
  }).join('');
}

/* 5 iconos de pasos (círculo dorado + símbolo blanco) */
const STEP_ICONS=[
  '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 3h6v3H9z"/><circle cx="11" cy="13" r="3"/><path d="m14 16 2 2"/></svg>',
  '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8"><path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/><path d="m9 12 2 2 4-4"/></svg>',
  '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8"><path d="M12 3v18M5 7h14M4 11h6M14 11h6"/><path d="M7 11 4.5 16h5zM17 11l-2.5 5h5z"/></svg>',
  '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8"><path d="M6 2h9l3 3v17l-2.2-1.5L13.6 22 12 20.5 10.4 22 8.2 20.5 6 22z"/><path d="M9 8h6M9 12h6"/></svg>',
  '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8"><ellipse cx="8" cy="7" rx="5" ry="2.5"/><path d="M3 7v5c0 1.4 2.2 2.5 5 2.5"/><path d="M3 12c0 1.4 2.2 2.5 5 2.5"/><circle cx="17" cy="15" r="4"/><path d="M17 13.5v3M15.7 15h2.6"/></svg>'
];
function stepsBlock(){
  return [1,2,3,4,5].map((n,i)=>`
    <div class="step step-ico">
      <div class="ic-circle">${STEP_ICONS[i]}</div>
      <p data-i18n="step${n}"></p>
    </div>`).join('');
}

function socialLinks(cls){
  return `<a href="#" aria-label="Facebook" class="${cls}">${ICON.fb}</a>
  <a href="#" aria-label="Instagram" class="${cls}">${ICON.ig}</a>
  <a href="#" aria-label="YouTube" class="${cls}">${ICON.yt}</a>
  <a href="#" aria-label="LinkedIn" class="${cls}">${ICON.in}</a>
  <a href="#" aria-label="X" class="${cls}">${ICON.x}</a>`;
}

/* ---- HEADER ---- */
function buildHeader(active){
  const top=`
  <div class="topbar"><div class="container">
    <div class="socials">${socialLinks('')}</div>
    <div class="topbar-contact">
      <a class="tel" href="mailto:${EMAIL}">${EMAIL}</a>
      <a class="tel wa-top" href="https://wa.me/${WA_RAW}" target="_blank" rel="noopener" aria-label="WhatsApp">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M.06 24l1.7-6.2A11.9 11.9 0 1 1 12 24a11.9 11.9 0 0 1-5.7-1.45L.06 24Zm6.6-3.8c1.6.96 3.1 1.5 5.3 1.5a9.9 9.9 0 1 0-9.9-9.9c0 2.3.6 3.9 1.6 5.5l-1 3.6 3.9-1ZM17.4 14c-.3-.15-1.7-.85-2-.95s-.45-.15-.65.15-.75.95-.9 1.1-.35.2-.65.05a8.1 8.1 0 0 1-2.4-1.5 9 9 0 0 1-1.65-2.05c-.15-.3 0-.45.15-.6l.45-.55c.15-.2.2-.3.3-.5s.05-.4 0-.55-.65-1.6-.9-2.15c-.25-.55-.5-.45-.65-.45l-.55-.05a1.05 1.05 0 0 0-.75.35 3.15 3.15 0 0 0-1 2.35c0 1.4 1 2.7 1.15 2.9s2 3.05 4.85 4.25c2.8 1.2 2.8.8 3.3.75s1.7-.7 1.95-1.35.25-1.25.2-1.35-.3-.2-.6-.35Z"/></svg>
        ${WA_DISPLAY}
      </a>
    </div>
    <div class="right">
      <div class="icons">
        <a class="cart" href="acheter.html" aria-label="Panier">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="18" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6L23 6H6"/></svg>
          <span class="badge">0</span>
        </a>
        <a href="contact.html" aria-label="Compte">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>
        </a>
      </div>
      <div class="lang">
        <button data-lang="fr">FR</button>
        <button data-lang="de">DE</button>
        <button data-lang="it">IT</button>
        <button data-lang="en">EN</button>
        <button data-lang="es">ES</button>
      </div>
    </div>
  </div></div>`;

  const nav=`
  <header class="site-header"><div class="container">
    <a class="logo" href="index.html">
      <span class="name">SAWA OR</span>
      <span class="flag" aria-hidden="true" title="Suisse"></span><span class="flag-cm" aria-hidden="true" title="Cameroun"></span>
    </a>
    <nav class="main-nav"><ul>
      <li><a href="cours.html" data-i18n="nav.cours" class="${active==='cours'?'active':''}">Cours de l'or</a></li>
      <li><a href="acheter.html" data-i18n="nav.shop" class="${active==='shop'?'active':''}">Acheter de l'or en ligne</a></li>
      <li><a href="boutiques.html" data-i18n="nav.boutiques" class="${active==='boutiques'?'active':''}">Nos boutiques</a></li>
    </ul></nav>
    <button class="burger" id="burger" aria-label="Menu"><span></span><span></span><span></span></button>
  </div></header>`;

  const drawer=`
  <div class="drawer" id="drawer">
    <button class="close" id="closeDrawer" aria-label="Fermer">&times;</button>
    <nav>
      <a href="index.html" data-i18n="nav.home">Accueil</a>
      <a href="cours.html" data-i18n="nav.cours">Cours de l'or</a>
      <a href="acheter.html" data-i18n="nav.shop">Acheter de l'or en ligne</a>
      <a href="boutiques.html" data-i18n="nav.boutiques">Nos boutiques</a>
      <a href="acheter.html#lingots" data-i18n="nav.lingots">Lingots</a>
      <a href="acheter.html#monnaies" data-i18n="nav.coins">Monnaies</a>
      <a href="index.html#services" data-i18n="nav.gold">Achat d'or</a>
      <a href="acheter.html" data-i18n="nav.sell">Vente d'or</a>
      <a href="index.html#steps" data-i18n="nav.expertise">Expertise</a>
      <a href="contact.html" data-i18n="nav.contact">Contact</a>
    </nav>
  </div>`;
  return top+nav+drawer;
}

/* ---- FOOTER ---- */
function buildFooter(){
  return `
  <section class="map-section"><div class="container map-grid">
    <div>
      <h2><span class="num" data-i18n="bq.count">44 BOUTIQUES</span></h2>
      <div class="sub" data-i18n="bq.map">Localisation Google Map</div>
      <div class="contact-h" data-i18n="bq.contact">N'hésitez pas à nous contacter</div>
      <div class="contact-row"><a href="mailto:${EMAIL}">${EMAIL}</a><a href="https://wa.me/${WA_RAW}" target="_blank" rel="noopener">WhatsApp ${WA_DISPLAY}</a></div>
      <div class="socials-h" data-i18n="bq.social">Nous sommes sur les médias sociaux</div>
      <div class="socials">${socialLinks('')}</div>
    </div>
    <div class="ch-map">${CH_MAP_SVG}</div>
  </div></section>

  <footer class="site-footer"><div class="container">
    <div class="footer-grid">
      <div class="brand logo"><span class="name">SAWA OR</span><span class="flag"></span><span class="flag-cm"></span></div>
      <div class="footer-col">
        <a href="index.html" data-i18n="nav.home">Accueil</a>
        <a href="cours.html" data-i18n="nav.cours">Cours de l'or</a>
        <a href="acheter.html" data-i18n="nav.shop">Acheter en ligne</a>
        <a href="boutiques.html" data-i18n="nav.boutiques">Boutiques</a>
      </div>
      <div class="footer-col">
        <a href="index.html#services" data-i18n="nav.gold">Achat d'or</a>
        <a href="acheter.html" data-i18n="nav.sell">Vente d'or</a>
        <a href="cours.html" data-i18n="nav.cours">Cours de l'or</a>
        <a href="acheter.html#lingots" data-i18n="nav.lingots">Lingots</a>
      </div>
      <div class="footer-col">
        <a href="acheter.html#monnaies" data-i18n="nav.coins">Monnaies</a>
        <a href="index.html#steps" data-i18n="nav.expertise">Expertise</a>
        <a href="contact.html" data-i18n="nav.contact">Contact</a>
        <a href="contact.html" data-i18n="nav.faq">FAQ</a>
      </div>
      <div class="footer-col">
        <a href="#" data-i18n="nav.about">À propos</a>
        <a href="#">Conditions générales</a>
        <a href="#">Politique de confidentialité</a>
        <a href="#">Sitemap</a>
      </div>
    </div>
    <div class="copyright">
      <span data-i18n="foot.rights">© 2026 SAWA OR Sàrl — Rue de la Gare 39, CH-1260 Nyon</span>
      <span data-i18n="foot.design">Conçu avec soin</span>
    </div>
  </div></footer>

  <button class="to-top" id="toTop" aria-label="Haut">↑</button>
  <a class="wa" href="https://wa.me/${WA_RAW}" target="_blank" rel="noopener" aria-label="WhatsApp">${ICON.wa}</a>`;
}

/* ---- Mapa de Suiza (silueta simplificada con pines) ---- */
const CH_MAP_SVG=`
<svg viewBox="0 0 600 380" xmlns="http://www.w3.org/2000/svg">
  <path d="M40 230 L70 180 L60 150 L95 130 L140 150 L175 120 L210 135 L250 110 L300 120
           L340 95 L380 110 L420 90 L470 105 L520 90 L560 120 L555 160 L520 175 L540 210
           L500 230 L515 265 L470 275 L440 250 L400 265 L370 240 L330 255 L300 235
           L260 260 L220 245 L180 270 L150 250 L110 270 L80 250 Z"
        fill="rgba(255,255,255,.04)" stroke="rgba(201,162,75,.35)" stroke-width="1.5"/>
  ${[[120,250],[140,235],[160,255],[110,260],[180,240],[150,250],[210,235],[250,150],[300,160],
     [350,140],[300,210],[260,235],[330,180],[400,150],[420,200],[470,160],[460,200],[520,150],
     [490,230],[440,240],[380,220],[200,200],[170,210],[240,190],[280,190],[150,200]]
    .map(([x,y])=>`<g transform="translate(${x},${y})"><path d="M0 0c-7 0-12 5-12 12 0 8 12 20 12 20s12-12 12-20c0-7-5-12-12-12Z" fill="#C9A24B"/><circle cy="11" r="4" fill="#0a0a0a"/></g>`).join('')}
  <text x="370" y="300" fill="rgba(201,162,75,.5)" font-size="30" font-weight="800" font-family="Montserrat,sans-serif">SAWA OR</text>
</svg>`;

/* ---- Chart de líneas suave (SVG) ---- */
function lineChart(series,opts={}){
  const w=560,h=200,pad=30;
  const min=Math.min(...series),max=Math.max(...series);
  const rng=(max-min)||1;
  const stepX=(w-pad*2)/(series.length-1);
  const pts=series.map((v,i)=>[pad+i*stepX, h-pad-((v-min)/rng)*(h-pad*2)]);
  // path suave (catmull-rom -> bezier)
  let d=`M${pts[0][0]},${pts[0][1]}`;
  for(let i=0;i<pts.length-1;i++){
    const [x0,y0]=pts[i], [x1,y1]=pts[i+1];
    const cx=(x0+x1)/2;
    d+=` C${cx},${y0} ${cx},${y1} ${x1},${y1}`;
  }
  const color=opts.silver?"#cfcfcf":"#D4AF37";
  const fill=opts.silver?"rgba(200,200,200,.12)":"rgba(212,175,55,.16)";
  const area=`${d} L${pts[pts.length-1][0]},${h-pad} L${pts[0][0]},${h-pad} Z`;
  const days=COURS_DAYS;
  const labels=days.map((dlab,i)=>`<text x="${pad+i*(w-pad*2)/(days.length-1)}" y="${h-8}" fill="#777" font-size="11" text-anchor="middle">${dlab}</text>`).join('');
  const first=series[0],last=series[series.length-1];
  const fmt=n=>n>=1000?Math.round(n).toLocaleString('en-US').replace(/,/g,"'"):(Math.round(n*100)/100).toFixed(2);
  return `<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="none">
    <defs><linearGradient id="g${opts.id}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${color}" stop-opacity=".35"/><stop offset="1" stop-color="${color}" stop-opacity="0"/>
    </linearGradient></defs>
    <path d="${area}" fill="url(#g${opts.id})"/>
    <path d="${d}" fill="none" stroke="${color}" stroke-width="3" stroke-linecap="round"/>
    <circle cx="${pts[0][0]}" cy="${pts[0][1]}" r="5" fill="${color}"/>
    <circle cx="${pts[pts.length-1][0]}" cy="${pts[pts.length-1][1]}" r="6" fill="${color}"/>
    <g><rect x="${pts[0][0]-6}" y="${pts[0][1]-26}" width="84" height="20" rx="3" fill="rgba(120,120,120,.6)"/>
       <text x="${pts[0][0]}" y="${pts[0][1]-11}" fill="#fff" font-size="12">${fmt(first)} ${opts.unit}</text></g>
    <g><rect x="${pts[pts.length-1][0]-92}" y="${pts[pts.length-1][1]+6}" width="92" height="20" rx="3" fill="${color}"/>
       <text x="${pts[pts.length-1][0]-46}" y="${pts[pts.length-1][1]+20}" fill="#1a1304" font-size="12" font-weight="700" text-anchor="middle">${fmt(last)} ${opts.unit}</text></g>
    ${labels}
  </svg>`;
}

/* ---- Builders de contenido ---- */
/* Idioma actual + traductor de valores (string o {fr,en,de,it,es}) */
function curLang(){return localStorage.getItem("helvor_lang")||"fr";}
function tr(v){return (v && typeof v==="object")?(v[curLang()]||v.fr||Object.values(v)[0]):v;}

const CAT_PHOTO={lingot:"img/photos/lingots.jpg",piece:"img/photos/coins.jpg",bijou:"img/photos/bijou.jpg"};
function renderProducts(filter){
  const list=filter?PRODUCTS.filter(p=>filter.includes(p.cat)):PRODUCTS;
  return list.map(p=>`
    <div class="product">
      <div class="ph" style="background-image:url('${CAT_PHOTO[p.cat]||""}')"></div>
      <div class="body">
        <h4>${tr(p.name)}</h4>
        <div class="spec">${tr(p.spec)}</div>
        <div class="price">${p.price}</div>
        <a class="more" href="contact.html" data-i18n="shop.more">Plus d'info</a>
      </div>
    </div>`).join('');
}
/* Ciudades/regiones únicas (sin direcciones) para la página de cobertura */
function cityFrom(cityStr){
  return cityStr.replace(/[–-]\s*Suisse.*$/i,'').replace(/^\s*\d{4}\s*/,'').trim();
}
function renderCoverage(){
  const seen=new Set(), cities=[];
  BOUTIQUES.forEach(b=>{const c=cityFrom(b[1]); if(c && !seen.has(c)){seen.add(c); cities.push(c);}});
  return cities.map(c=>`<span class="city-chip">${c}</span>`).join('');
}

/* ---- Interacciones comunes ---- */
function initCommon(){
  const burger=document.getElementById('burger');
  const drawer=document.getElementById('drawer');
  const close=document.getElementById('closeDrawer');
  if(burger&&drawer){
    burger.addEventListener('click',()=>drawer.classList.add('open'));
    close.addEventListener('click',()=>drawer.classList.remove('open'));
    drawer.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>drawer.classList.remove('open')));
  }
  const toTop=document.getElementById('toTop');
  if(toTop){
    window.addEventListener('scroll',()=>toTop.classList.toggle('show',window.scrollY>500));
    toTop.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
  }
  initTilt();
  initLang();
}

/* ---- Tilt 3D al pasar el ratón (sólo en dispositivos con puntero) ---- */
function initTilt(){
  if(window.matchMedia && window.matchMedia('(hover:none)').matches) return;
  document.querySelectorAll('.feature, .product').forEach(card=>{
    card.classList.add('tilt');
    card.addEventListener('mousemove',e=>{
      const r=card.getBoundingClientRect();
      const px=(e.clientX-r.left)/r.width-0.5, py=(e.clientY-r.top)/r.height-0.5;
      card.style.transform=`perspective(800px) rotateX(${(-py*6).toFixed(2)}deg) rotateY(${(px*8).toFixed(2)}deg) translateY(-5px)`;
    });
    card.addEventListener('mouseleave',()=>{ card.style.transform=''; });
  });
}
