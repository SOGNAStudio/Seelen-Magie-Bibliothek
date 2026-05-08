// ============ SeelenMagie — Vanilla JS App ============

// ---------- ICONS (inline SVG) ----------
const ICON = {
  cart:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',
  search:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
  star:'<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1" class="star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  clock:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  plus:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>',
  minus:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>',
  trash:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',
  menu:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/></svg>',
  moon:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
  book:'<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
  sparkles:'<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.9 5.8L4 10.7l5.8 1.9L12 18l1.9-5.4L20 10.7l-5.8-1.9z"/></svg>',
  shield:'<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  heart:'<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
  mappin:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 7-8 13-8 13s-8-6-8-13a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  phone:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  mail:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-10 5L2 7"/></svg>',
  ig:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/></svg>',
  fb:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>',
  yt:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>',
  arrow:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>',
  check:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
};

// ---------- CART (localStorage) ----------
const CART_KEY = "sm_cart_v1";
const Cart = {
  items: JSON.parse(localStorage.getItem(CART_KEY) || "[]"),
  save(){ localStorage.setItem(CART_KEY, JSON.stringify(this.items)); this.render(); },
  count(){ return this.items.reduce((s,i)=>s+i.quantity,0); },
  total(){ return this.items.reduce((s,i)=>{
    const p = PRODUCTS.find(p=>p.id===i.id); return s + (p?p.price*i.quantity:0);
  },0); },
  add(id){
    const ex = this.items.find(i=>i.id===id);
    if(ex) ex.quantity++; else this.items.push({id,quantity:1});
    this.save(); toast("Hinzugefügt", PRODUCTS.find(p=>p.id===id).name);
  },
  setQty(id,q){
    if(q<=0) return this.remove(id);
    const ex = this.items.find(i=>i.id===id); if(ex){ex.quantity=q;this.save();}
  },
  remove(id){ this.items = this.items.filter(i=>i.id!==id); this.save(); },
  clear(){ this.items=[]; this.save(); },
  render(){
    document.querySelectorAll(".cart-count").forEach(el=>{
      el.textContent = this.count();
      el.style.display = this.count()>0 ? "flex" : "none";
    });
    this.renderDrawer();
  },
  renderDrawer(){
    const body = document.getElementById("cart-body");
    if(!body) return;
    if(this.items.length===0){
      body.innerHTML = `<div class="cart-empty">${ICON.cart}<p style="margin-top:1rem">Noch keine Readings gewählt.</p>
        <a href="shop.html" class="btn btn-outline" style="margin-top:1rem">Readings entdecken</a></div>`;
      return;
    }
    const itemsHtml = this.items.map(i=>{
      const p = PRODUCTS.find(p=>p.id===i.id); if(!p) return "";
      return `<div class="cart-item">
        <img src="${p.image}" alt="${p.name}">
        <div class="cart-item-body">
          <div class="cart-item-title">${p.name}</div>
          <div class="cart-item-meta">${p.duration ? p.duration + ' Min · ' : ''}${p.category}</div>
          <div class="cart-item-foot">
            <div class="qty-ctrl">
              <button onclick="Cart.setQty('${p.id}',${i.quantity-1})">${ICON.minus}</button>
              <span>${i.quantity}</span>
              <button onclick="Cart.setQty('${p.id}',${i.quantity+1})">${ICON.plus}</button>
            </div>
            <span style="color:var(--gold);font-weight:600">CHF ${(p.price*i.quantity).toFixed(2)}</span>
          </div>
        </div>
        <button onclick="Cart.remove('${p.id}')" style="color:var(--muted);align-self:flex-start" title="Entfernen">${ICON.trash}</button>
      </div>`;
    }).join("");
    body.innerHTML = itemsHtml + `
      <div class="cart-total">
        <div class="row"><span>Gesamt</span><span class="price">CHF ${this.total().toFixed(2)}</span></div>
        <a href="checkout.html" class="btn btn-primary" style="width:100%">Zur Kasse</a>
        <button onclick="closeDrawer()" class="btn btn-outline" style="width:100%;margin-top:.5rem">Weiter stöbern</button>
      </div>`;
  }
};

// ---------- DRAWER + SEARCH ----------
function openDrawer(){
  document.getElementById("cart-drawer")?.classList.add("active");
  document.getElementById("drawer-backdrop")?.classList.add("active");
  document.body.style.overflow="hidden";
}
function closeDrawer(){
  document.getElementById("cart-drawer")?.classList.remove("active");
  document.getElementById("drawer-backdrop")?.classList.remove("active");
  document.body.style.overflow="";
}
function toggleSearch(){
  const f = document.querySelector(".search-form"); if(!f) return;
  f.classList.toggle("active");
  if(f.classList.contains("active")) setTimeout(()=>f.querySelector("input")?.focus(),300);
}
function toggleNav(){ document.querySelector(".nav-links")?.classList.toggle("active"); }

// ---------- TOAST ----------
let toastTimer;
function toast(title, msg){
  let t = document.getElementById("sm-toast");
  if(!t){
    t = document.createElement("div"); t.id="sm-toast"; t.className="toast";
    document.body.appendChild(t);
  }
  t.innerHTML = `<strong>${title}</strong>${msg||""}`;
  t.classList.add("active");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>t.classList.remove("active"),2500);
}

// ---------- HELPERS ----------
function starString(rating){
  const full = Math.round(rating);
  return Array.from({length:5},(_,i)=> i<full ? "★" : "☆").join("");
}
function productCardHTML(p, list=false){
  const badges = `${p.bestseller?'<span class="badge badge-bestseller">Bestseller</span>':''}${p.new?'<span class="badge badge-new">Neu</span>':''}`;
  return `<article class="product-card">
    <a href="product.html?id=${p.id}" class="product-image">
      <img src="${p.image}" alt="${p.name}" loading="lazy">
      <div class="product-badges">${badges}</div>
    </a>
    <div class="product-body">
      <span class="product-cat">${p.category}</span>
      <a href="product.html?id=${p.id}"><h3 class="product-title">${p.name}</h3></a>
      <p class="product-short">${p.short}</p>
      <div class="product-meta">
        ${p.duration ? `<span class="meta-item">${ICON.clock}<span style="font-size:.95em">ca. ${p.duration} Min</span></span>` : ''}
        <span class="meta-item">${ICON.star}${p.rating} (${p.reviews})</span>
      </div>
      <div class="product-foot">
        <span class="product-price">CHF ${p.price}</span>
        <button class="add-btn" onclick="Cart.add('${p.id}');event.stopPropagation()" title="In den Warenkorb">${ICON.plus}</button>
      </div>
    </div>
  </article>`;
}

// ---------- HEADER injection ----------
function injectHeader(active=""){
  const header = document.getElementById("site-header");
  if(!header) return;
  header.innerHTML = `
    <nav class="nav">
      <a href="index.html" class="brand">
        <div class="logo">S</div>
        <div class="brand-text"><span class="text-mystic">SeelenMagie</span><span class="secondary">-Bibliothek</span></div>
      </a>
      <div class="nav-links">
        <a href="index.html" class="${active==='home'?'active':''}">Start</a>
        <a href="shop.html" class="${active==='shop'?'active':''}">Readings</a>
        <a href="shop.html#bewertungen" class="${active==='reviews'?'active':''}">Bewertungen</a>
        <a href="about.html" class="${active==='about'?'active':''}">Über uns</a>
        <a href="contact.html" class="${active==='contact'?'active':''}">Kontakt</a>
      </div>
      <div class="nav-actions">
        <button class="icon-btn" id="search-btn" onclick="toggleSearch()" aria-label="Suche">${ICON.search}</button>
        <button class="icon-btn" onclick="openDrawer()" aria-label="Warenkorb">
          ${ICON.cart}
          <span class="cart-count">0</span>
        </button>
        <button class="icon-btn mobile-toggle" onclick="toggleNav()" aria-label="Menü">${ICON.menu}</button>
      </div>
      <form class="search-form" onsubmit="handleSearch(event)">
        <label for="search-box">${ICON.search}</label>
        <input type="text" id="search-box" placeholder="Suche nach Tarot, Aura, Liebe…">
      </form>
    </nav>`;
}

function handleSearch(e){
  e.preventDefault();
  const q = document.getElementById("search-box").value.trim();
  window.location.href = "shop.html" + (q ? "?q=" + encodeURIComponent(q) : "");
}

// ---------- FOOTER ----------
function injectFooter(){
  const f = document.getElementById("site-footer");
  if(!f) return;
  f.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="brand" style="margin-bottom:1rem">
            <div class="logo" style="width:40px;height:40px;font-size:1.2rem">S</div>
            <span class="text-mystic">SeelenMagie</span>
          </div>
          <p style="font-size:.9rem;color:var(--muted)">Spirituelle Readings & Sessions aus der Bibliothek der Seelen. Seit 2014 begleiten wir dich auf deinem Weg.</p>
        </div>
        <div>
          <h4>Entdecken</h4>
          <ul>
            <li><a href="shop.html">Alle Readings</a></li>
            <li><a href="shop.html?cat=Tarot">Tarot</a></li>
            <li><a href="shop.html?cat=Astrologie">Astrologie</a></li>
            <li><a href="shop.html?cat=Aura">Aura & Chakra</a></li>
          </ul>
        </div>
        <div>
          <h4>Kontakt</h4>
          <ul>
            <li>${ICON.mappin} Mondgasse 7, 8000 Zürich</li>
            <li>${ICON.phone} <a href="tel:+41441234567">+41 44 123 45 67</a></li>
            <li>${ICON.mail} <a href="mailto:noreply@example.com">noreply@example.com</a></li>
          </ul>
        </div>
        <div>
          <h4>Folge uns</h4>
          <div class="socials">
            <a href="#" class="social-icon" aria-label="Instagram">${ICON.ig}</a>
            <a href="#" class="social-icon" aria-label="Facebook">${ICON.fb}</a>
            <a href="#" class="social-icon" aria-label="YouTube">${ICON.yt}</a>
          </div>
          <p style="font-size:.78rem;color:var(--muted);margin-top:1.5rem">Newsletter, Mondkalender & spirituelle Impulse – bald verfügbar.</p>
        </div>
      </div>
      <div class="footer-bottom">
        <div>© ${new Date().getFullYear()} SeelenMagie-Bibliothek · Alle Rechte vorbehalten</div>
        <div style="display:flex;gap:1rem">
          <a href="#">Impressum</a><a href="#">Datenschutz</a><a href="#">AGB</a>
        </div>
      </div>
    </div>
    <div id="drawer-backdrop" class="drawer-backdrop" onclick="closeDrawer()"></div>
    <aside id="cart-drawer" class="drawer">
      <div class="drawer-head">
        <h2>${ICON.cart} Dein Warenkorb</h2>
        <button class="drawer-close" onclick="closeDrawer()" aria-label="Schliessen">×</button>
      </div>
      <div id="cart-body"></div>
    </aside>`;
}

// ---------- PAGE INITS ----------
function initHome(){
  injectHeader("home"); injectFooter();
  // featured products
  const featured = PRODUCTS.filter(p=>p.bestseller).slice(0,4);
  document.getElementById("featured-grid").innerHTML = featured.map(p=>productCardHTML(p)).join("");
  // values
  const values = [
    {icon:ICON.sparkles, title:"Erfahrene Medien", text:"Jedes Reading wird von geprüften, langjährigen Spirituellen durchgeführt."},
    {icon:ICON.shield, title:"100% vertraulich", text:"Deine Themen bleiben geschützt. Ende-zu-Ende verschlüsselte Sessions."},
    {icon:ICON.heart, title:"Geld-zurück-Garantie", text:"Wenn du dich nicht abgeholt fühlst, bekommst du dein Geld zurück."},
  ];
  document.getElementById("values-grid").innerHTML = values.map(v=>`
    <div class="feature-card">
      <div class="feature-icon">${v.icon}</div>
      <h3>${v.title}</h3><p>${v.text}</p>
    </div>`).join("");
  Cart.render();
}

function initShop(){
  injectHeader("shop"); injectFooter();
  // Filters state
  const params = new URLSearchParams(location.search);
  const state = {
    q: params.get("q") || "",
    cats: params.get("cat") ? [params.get("cat")] : [],
    formats: [],
    priceMax: 200,
    minRating: 0,
    sort: "featured",
    view: "grid",
  };
  // Render filter UI
  const sidebar = document.getElementById("filter-sidebar");
  sidebar.innerHTML = `
    <div class="filter-block">
      <h3>Kategorie</h3>
      ${CATEGORIES.map(c=>`
        <label class="filter-option">
          <input type="checkbox" data-cat="${c}" ${state.cats.includes(c)?'checked':''}>
          <span>${c}</span>
          <span class="filter-count">${PRODUCTS.filter(p=>p.category===c).length}</span>
        </label>`).join("")}
    </div>
    <div class="filter-block">
      <h3>Format</h3>
      ${FORMATS.map(f=>`
        <label class="filter-option">
          <input type="checkbox" data-format="${f}">
          <span>${f}</span>
        </label>`).join("")}
    </div>
    <div class="filter-block">
      <h3>Preis (CHF)</h3>
      <input type="range" id="price-range" min="0" max="200" step="10" value="200" style="width:100%;accent-color:var(--gold)">
      <div class="price-display"><span>CHF 0</span><span id="price-max-label">CHF 200+</span></div>
    </div>
    <div class="filter-block">
      <h3>Mindest-Bewertung</h3>
      ${[0,4.0,4.5,4.8].map(r=>`
        <label class="filter-option">
          <input type="radio" name="rating" data-rating="${r}" ${r===0?'checked':''}>
          <span>${r===0?'Alle':'ab '+r+' ★'}</span>
        </label>`).join("")}
    </div>
    <button class="btn btn-outline" id="clear-filters" style="width:100%">Filter zurücksetzen</button>
  `;
  // Search input
  const searchInput = document.getElementById("shop-search");
  if(state.q){ searchInput.value = state.q; }

  // Wire filters
  sidebar.querySelectorAll('input[data-cat]').forEach(el=>{
    el.addEventListener("change", ()=>{
      state.cats = [...sidebar.querySelectorAll('input[data-cat]:checked')].map(x=>x.dataset.cat);
      render();
    });
  });
  sidebar.querySelectorAll('input[data-format]').forEach(el=>{
    el.addEventListener("change", ()=>{
      state.formats = [...sidebar.querySelectorAll('input[data-format]:checked')].map(x=>x.dataset.format);
      render();
    });
  });
  sidebar.querySelectorAll('input[data-rating]').forEach(el=>{
    el.addEventListener("change", ()=>{
      state.minRating = parseFloat(el.dataset.rating);
      render();
    });
  });
  document.getElementById("price-range").addEventListener("input", e=>{
    state.priceMax = parseInt(e.target.value);
    document.getElementById("price-max-label").textContent = "CHF " + state.priceMax + (state.priceMax===200?"+":"");
    render();
  });
  document.getElementById("clear-filters").addEventListener("click", ()=>{
    state.cats=[]; state.formats=[]; state.priceMax=200; state.minRating=0; state.q="";
    sidebar.querySelectorAll("input[type=checkbox]").forEach(c=>c.checked=false);
    sidebar.querySelector('input[data-rating="0"]').checked=true;
    document.getElementById("price-range").value=200;
    document.getElementById("price-max-label").textContent="CHF 200+";
    searchInput.value="";
    render();
  });
  searchInput.addEventListener("input", e=>{ state.q = e.target.value; render(); });
  document.getElementById("sort-select").addEventListener("change", e=>{ state.sort = e.target.value; render(); });
  document.querySelectorAll("[data-view]").forEach(b=>{
    b.addEventListener("click", ()=>{
      state.view = b.dataset.view;
      document.querySelectorAll("[data-view]").forEach(x=>x.classList.toggle("active", x.dataset.view===state.view));
      render();
    });
  });

  function render(){
    let out = PRODUCTS.filter(p=>{
      if(state.q){
        const hay = (p.name+" "+p.short+" "+p.category).toLowerCase();
        if(!hay.includes(state.q.toLowerCase())) return false;
      }
      if(state.cats.length && !state.cats.includes(p.category)) return false;
      if(state.formats.length && !state.formats.some(f=>p.format.includes(f))) return false;
      if(p.price > state.priceMax) return false;
      if(p.rating < state.minRating) return false;
      return true;
    });
    switch(state.sort){
      case "price-asc": out.sort((a,b)=>a.price-b.price); break;
      case "price-desc": out.sort((a,b)=>b.price-a.price); break;
      case "rating": out.sort((a,b)=>b.rating-a.rating); break;
      case "duration": out.sort((a,b)=>(a.duration || 0)-(b.duration || 0)); break;
      default: out.sort((a,b)=>Number(!!b.bestseller)-Number(!!a.bestseller));
    }
    document.getElementById("result-count").textContent = `${out.length} Ergebnis${out.length!==1?'se':''}`;
    const grid = document.getElementById("product-results");
    if(out.length===0){
      grid.className=""; grid.innerHTML = `<div style="text-align:center;padding:4rem;border:1px dashed var(--border);border-radius:var(--radius);color:var(--muted)">Keine Readings gefunden.</div>`;
      return;
    }
    grid.className = state.view==="list" ? "product-list" : "product-grid";
    grid.innerHTML = out.map(p=>productCardHTML(p, state.view==="list")).join("");
  }

  // Reviews on shop page
  const reviewsEl = document.getElementById("reviews-grid");
  reviewsEl.innerHTML = REVIEWS.slice(0,5).map(r=>`
    <div class="review-card">
      <div class="review-avatar">${r.name[0]}</div>
      <div class="review-name">${r.name}</div>
      <div class="review-reading">${r.reading}</div>
      <div class="review-stars">${"★".repeat(r.stars)}${"☆".repeat(5-r.stars)}</div>
      <p class="review-text">"${r.text}"</p>
    </div>`).join("");

  render();
  Cart.render();
}

function initProduct(){
  injectHeader("shop"); injectFooter();
  const id = new URLSearchParams(location.search).get("id");
  const p = PRODUCTS.find(x=>x.id===id);
  const wrap = document.getElementById("product-detail");
  if(!p){ wrap.innerHTML = "<h1>Reading nicht gefunden</h1><a href='shop.html' class='btn btn-outline'>Zurück</a>"; return; }
  document.title = p.name + " · SeelenMagie-Bibliothek";
  wrap.innerHTML = `
    <a href="shop.html" style="display:inline-flex;gap:.5rem;color:var(--muted);margin-bottom:1.5rem;align-items:center">${ICON.arrow} Zurück zum Shop</a>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:2.5rem" class="product-detail-grid">
      <div style="aspect-ratio:4/5;border:1px solid var(--border);border-radius:var(--radius);overflow:hidden">
        <img src="${p.image}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover">
      </div>
      <div>
        <span class="product-cat" style="font-size:.8rem">${p.category}</span>
        <h1 style="font-size:clamp(2rem,4vw,3rem);font-weight:300;margin:.5rem 0 1rem">${p.name}</h1>
        <div style="display:flex;gap:1.5rem;font-size:.9rem;color:var(--muted);margin-bottom:1.5rem;flex-wrap:wrap">
          <span style="display:inline-flex;align-items:center;gap:.3rem">${ICON.star}${p.rating} (${p.reviews} Bewertungen)</span>
          ${p.duration ? `<span style="display:inline-flex;align-items:center;gap:.3rem">${ICON.clock}ca. ${p.duration} Min</span>` : ''}
        </div>
        <p style="font-size:1.05rem;color:rgba(236,228,245,.9);margin-bottom:1.5rem">${p.description}</p>
        <div style="display:flex;flex-direction:column;gap:.5rem;margin-bottom:1.5rem">
          ${["Persönliches Reading durch erfahrenes Medium","Zusammenfassung per E-Mail nach der Session","Flexible Terminwahl nach Buchung","100% vertraulich & anonym"].map(t=>`<div style="display:flex;align-items:center;gap:.5rem;font-size:.9rem;color:var(--gold)">${ICON.check}<span style="color:var(--text)">${t}</span></div>`).join("")}
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:.5rem;margin-bottom:2rem;align-items:center">
          <span style="font-size:.85rem;color:var(--muted)">Verfügbar als:</span>
          ${p.format.map(f=>`<span style="padding:.3rem .85rem;border:1px solid var(--border);border-radius:9999px;font-size:.78rem">${f}</span>`).join("")}
        </div>
        <div style="display:flex;align-items:center;gap:1rem;padding:1.5rem;border:1px solid var(--border);border-radius:var(--radius);background:var(--card)">
          <div style="flex:1">
            <div style="font-size:.7rem;text-transform:uppercase;letter-spacing:.18em;color:var(--muted)">Preis</div>
            <div style="font-family:'Cormorant Garamond',serif;font-size:2rem;color:var(--gold)">CHF ${p.price}</div>
          </div>
          <button class="btn btn-primary btn-lg" onclick="Cart.add('${p.id}')">${ICON.plus} In den Warenkorb</button>
        </div>
      </div>
    </div>`;
  Cart.render();
}

function initCheckout(){
  injectHeader(); injectFooter();
  const wrap = document.getElementById("checkout-root");
  if(Cart.items.length===0){
    wrap.innerHTML = `<div style="text-align:center;padding:5rem 1rem">
      <h1 style="font-size:2rem;margin-bottom:1rem">Dein Warenkorb ist leer</h1>
      <p style="color:var(--muted);margin-bottom:1.5rem">Entdecke unsere Readings und finde das Passende.</p>
      <a href="shop.html" class="btn btn-primary">Zum Shop</a></div>`;
    Cart.render(); return;
  }
  const tax = Cart.total()*0.077;
  const sumItems = Cart.items.map(i=>{
    const p = PRODUCTS.find(p=>p.id===i.id);
    return `<div style="display:flex;gap:.75rem;font-size:.88rem;margin-bottom:.75rem">
      <img src="${p.image}" style="width:54px;height:54px;object-fit:cover;border-radius:var(--radius)">
      <div style="flex:1;min-width:0">
        <div style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${p.name}</div>
        <div style="font-size:.78rem;color:var(--muted)">${i.quantity} × CHF ${p.price}</div>
      </div>
      <div style="font-weight:500">CHF ${(p.price*i.quantity).toFixed(2)}</div>
    </div>`;
  }).join("");
  wrap.innerHTML = `
    <a href="shop.html" style="display:inline-flex;gap:.5rem;color:var(--muted);margin-bottom:1rem;align-items:center">${ICON.arrow} Weiter stöbern</a>
    <h1 style="font-size:clamp(2.2rem,4.5vw,3.2rem);font-weight:300;margin-bottom:2.5rem">Kasse</h1>
    <form onsubmit="submitCheckout(event)" class="checkout-grid">
      <div>
        <div class="form-section">
          <h2>Kontakt</h2>
          <div class="form-grid">
            <div class="field"><label>Vorname</label><input class="field-input" required></div>
            <div class="field"><label>Nachname</label><input class="field-input" required></div>
            <div class="field full"><label>E-Mail</label><input class="field-input" type="email" required></div>
            <div class="field full"><label>Telefon (optional)</label><input class="field-input" type="tel"></div>
          </div>
        </div>
        <div class="form-section">
          <h2>Rechnungsadresse</h2>
          <div class="form-grid">
            <div class="field full"><label>Strasse & Nr.</label><input class="field-input" required></div>
            <div class="field"><label>PLZ</label><input class="field-input" required></div>
            <div class="field"><label>Ort</label><input class="field-input" required></div>
            <div class="field full"><label>Land</label><input class="field-input" value="Schweiz" required></div>
          </div>
        </div>
        <div class="form-section">
          <h2>Zahlung</h2>
          <label class="pay-option"><input type="radio" name="pay" value="card" checked><div><div class="pay-label">Kreditkarte</div><div class="pay-hint">Visa, Mastercard, Amex</div></div></label>
          <label class="pay-option"><input type="radio" name="pay" value="twint"><div><div class="pay-label">TWINT</div><div class="pay-hint">Bezahlen per App</div></div></label>
          <label class="pay-option"><input type="radio" name="pay" value="invoice"><div><div class="pay-label">Rechnung</div><div class="pay-hint">14 Tage Zahlungsziel</div></div></label>
          <p style="font-size:.78rem;color:var(--muted);margin-top:.75rem">🔒 Demo-Checkout – es werden keine echten Zahlungen verarbeitet.</p>
        </div>
        <div class="form-section">
          <h2>Notiz (optional)</h2>
          <textarea class="field-input textarea" placeholder="Gibt es etwas, das wir vor deinem Reading wissen sollten?"></textarea>
        </div>
      </div>
      <aside class="summary-card">
        <h2>Deine Bestellung</h2>
        <div style="max-height:280px;overflow-y:auto;margin-bottom:1rem">${sumItems}</div>
        <div style="border-top:1px solid var(--border);padding-top:1rem">
          <div class="summary-row"><span>Zwischensumme</span><span>CHF ${Cart.total().toFixed(2)}</span></div>
          <div class="summary-row"><span>MwSt. (7.7%)</span><span>CHF ${tax.toFixed(2)}</span></div>
          <div class="summary-row"><span>Versand</span><span>Digital</span></div>
          <div class="summary-total"><span>Gesamt</span><span class="price">CHF ${(Cart.total()+tax).toFixed(2)}</span></div>
        </div>
        <button type="submit" class="btn btn-primary btn-lg" style="width:100%;margin-top:1.25rem">Jetzt kostenpflichtig bestellen</button>
        <p style="font-size:.7rem;color:var(--muted);text-align:center;margin-top:.75rem">Mit dem Klick akzeptierst du unsere AGB & Datenschutzerklärung.</p>
      </aside>
    </form>`;
  Cart.render();
}

function submitCheckout(e){
  e.preventDefault();
  setTimeout(()=>{
    Cart.clear();
    window.location.href = "success.html";
  }, 600);
  toast("Wird bearbeitet…","");
}

function initContact(){
  injectHeader("contact"); injectFooter();
  document.getElementById("contact-form")?.addEventListener("submit", e=>{
    e.preventDefault();
    toast("Nachricht gesendet","Wir melden uns innerhalb von 24h.");
    e.target.reset();
  });
  Cart.render();
}
function initAbout(){ injectHeader("about"); injectFooter(); Cart.render(); }
function initSuccess(){ injectHeader(); injectFooter(); Cart.render(); }

// ---------- AUTO INIT ----------
document.addEventListener("DOMContentLoaded", ()=>{
  const page = document.body.dataset.page;
  ({home:initHome, shop:initShop, product:initProduct, checkout:initCheckout, contact:initContact, about:initAbout, success:initSuccess}[page]||(()=>{}))();
  // Close drawer with Esc
  document.addEventListener("keydown", e=>{ if(e.key==="Escape") closeDrawer(); });
});
