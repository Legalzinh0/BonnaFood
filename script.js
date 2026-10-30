/*
 * BONNA SALGADOS — CONFIGURAÇÃO DO CARDÁPIO
 * 1) Troque WHATSAPP_NUMBER pelo número da loja com código do país e DDD,
 *    somente números. Exemplo: "5531999999999".
 * 2) Edite nomes, descrições e preços na lista PRODUCTS abaixo.
 * 3) Preço deve ser número, sem "R$". Exemplo: price: 7.50
 */
const WHATSAPP_NUMBER = "5531982875937"; // Ex.: 5531999999999

const PRODUCTS = [
  {
    id: "coxinha frango",
    name: "Coxinha de Frango",
    category: "salgados",
    description: "Uma opção saborosa para sua pausa.",
    price: 9.90,
    image: "./img/Coxinha-de-Frango.jpeg",
    tag: "Salgado"
  },
   {
    id: "quibe",
    name: "Quibe",
    category: "salgados",
    description: "Uma opção saborosa para sua pausa.",
    price: 8.90,
    image: "./img/Quibe.jpeg",
    tag: "Salgado"
  },
   {
    id: "enroladinho",
    name: "Enroladinho de Salsicha",
    category: "salgados",
    description: "Uma opção saborosa para sua pausa.",
    price: 8.90,
    image: "./img/Enroladinho-de-Salsicha.jpeg",
    tag: "Salgado"
  },
   {
    id: "pastel-de-carne",
    name: "Pastel de Carne",
    category: "salgados",
    description: "Uma opção saborosa para sua pausa.",
    price: 6.00,
    image: "./img/Pastel-de-Carne.jpeg",
    tag: "Salgado"
  },
   {
    id: "coxinha-premium",
    name: "Coxinha Premium",
    category: "salgados",
    description: "Uma opção saborosa para sua pausa.",
    price: 9.90,
    image: "./img/Coxinha-Premium.jpeg",
    tag: "Salgado"
  },
   {
    id: "empadinha",
    name: "Empadinha",
    category: "salgados",
    description: "Uma opção saborosa para sua pausa.",
    price: 9.90,
    image: "./img/Empadinha.jpeg",
    tag: "Salgado"
  }, {
    id: "pastel-Assado",
    name: "Pastel Assado",
    category: "salgados",
    description: "Uma opção saborosa para sua pausa.",
    price: 9.90,
    image: "./img/Pastel-Assado.jpeg",
    tag: "Salgado"
  }, {
    id: "tortinha",
    name: "Tortinha",
    category: "salgados",
    description: "Uma opção saborosa para sua pausa.",
    price: 10.90,
    image: "./img/Tortinha.jpeg",
    tag: "Salgado"
  }, {
    id: "esfirra-de-Frango",
    name: "Esfirra de Frango",
    category: "salgados",
    description: "Uma opção saborosa para sua pausa.",
    price: 9.90,
    image: "./img/Esfirra-de-Frango.jpeg",
    tag: "Salgado"
  },
  {
    id: "copo-felicidade",
    name: "Copo da Felicidade",
    category: "doces",
    description: "Uma sobremesa especial para adoçar o dia.",
    price: 17.90,
    image: "./img/Copo-da-Felicidade.jpeg",
    tag: "Doce"
  },
  {
    id: "combo-assado",
    name: "Combo Assado",
    category: "combos",
    description: "Contém: 1 Empada 1 Pastel Assado 1 Refrigerante Coca-Cola 350ml",
    price: 26.90,
    image: "./img/Combo-Assado.jpeg",
    tag: "Combos"
  },
   {
    id: "queridinho",
    name: "Queridinho",
    category: "combos",
    description: "Selecione 3 Salgados a sua escolha com 1 Refrigerante Coca-Cola 350ml",
    price: 37.90,
    image: "./img/Queridinho.jpeg",
    tag: "Combos"
  },
   {
    id: "pra-dois",
    name: "Pra Dois",
    category: "combos",
    description: "Selecione 4 Salgados a sua escolha com 2 Refrigerante Coca-Cola 350ml",
    price: 56.70,
    image: "./img/Pra-Dois.jpeg",
    tag: "Combos"
  },
  {
    id: "coca-cola-2L",
    name: "Coca-Cola 2L",
    category: "refrigerantes",
    description: "Uma bebida refrescante para acompanhar seus lanches.",
    price: 18.00,
    image: "./img/Coca-Cola-2L.jpeg",
    tag: "Refrigerantes"
  },
  {
    id: "guarana-2L",
    name: "Guaraná 2L",
    category: "refrigerantes",
    description: "Uma bebida refrescante para acompanhar seus lanches.",
    price: 18.00,
    image: "./img/Guarana-2L.jpeg",
    tag: "Refrigerantes"
  },
  {
    id: "coca-cola-350ml",
    name: "Coca-Cola 350ml",
    category: "refrigerantes",
    description: "Uma bebida refrescante para acompanhar seus lanches.",
    price: 7.00,
    image: "./img/Coca-Cola-350ml.jpeg",
    tag: "Refrigerantes"
  },
  {
    id: "guarana-350ml",
    name: "Guaraná 350ml",
    category: "refrigerantes",
    description: "Uma bebida refrescante para acompanhar seus lanches.",
    price: 7.00,
    image: "./img/Guarana-350ml.jpeg",
    tag: "Refrigerantes"
  },
  {
    id: "coca-cola-200ml",
    name: "Coca-Cola 200ml",
    category: "refrigerantes",
    description: "Uma bebida refrescante para acompanhar seus lanches.",
    price: 3.50,
    image: "./img/Coca-Cola-200ml.jpeg",
    tag: "Refrigerantes"
  },
  {
    id: "guarana-200ml",
    name: "Guaraná 200ml",
    category: "refrigerantes",
    description: "Uma bebida refrescante para acompanhar seus lanches.",
    price: 3.50,
    image: "./img/Guarana-200ml.jpeg",
    tag: "Refrigerantes"
  },
  

  // Para adicionar outro produto, copie um objeto e altere id, nome,
  // categoria ("salgados" ou "doces"), descrição, preço, emoji e tag.
];

const cart = new Map();
let activeCategory = "todos";

const productGrid = document.getElementById("product-grid");
const cartDrawer = document.getElementById("cart-drawer");
const overlay = document.getElementById("overlay");
const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cart-total");
const cartSubtotal = document.getElementById("cart-subtotal");
const toast = document.getElementById("toast");
const deliveryRadio = document.getElementById("order-delivery");
const pickupRadio = document.getElementById("order-pickup");
const addressFields = document.getElementById("address-fields");
const customerAddress = document.getElementById("customer-address");
const addressComplement = document.getElementById("address-complement");

const money = value => value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

function renderProducts() {
  const shown = PRODUCTS.filter(p => activeCategory === "todos" || p.category === activeCategory);
  productGrid.innerHTML = shown.map(p => `
    <article class="product-card reveal-card">
      <div class="product-visual ${p.category}${p.image ? " has-image" : ""}">
        <span class="product-label">${escapeHtml(p.tag || p.category)}</span>
        ${p.image
          ? `<img class="product-image" src="${escapeHtml(p.image)}" alt="${escapeHtml(p.name)}" loading="lazy" onerror="this.hidden=true">`
          : `<span class="product-emoji" aria-hidden="true">${p.emoji || "🍴"}</span>`}
      </div>
      <div class="product-info">
        <h3>${escapeHtml(p.name)}</h3>
        <p>${escapeHtml(p.description || "")}</p>
        <div class="product-buy">
          <span class="product-price">${p.price > 0 ? money(p.price) : "Consulte o preço"}</span>
          <button class="add-button" data-add="${escapeHtml(p.id)}" aria-label="Adicionar ${escapeHtml(p.name)} ao carrinho">+</button>
        </div>
      </div>
    </article>`).join("");
  productGrid.querySelectorAll("[data-add]").forEach(btn => btn.addEventListener("click", () => addToCart(btn.dataset.add)));
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));
}

function addToCart(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  cart.set(id, (cart.get(id) || 0) + 1);
  renderCart();
  const badge = cartCount;
  badge.classList.remove("bump");
  void badge.offsetWidth;
  badge.classList.add("bump");
  window.setTimeout(() => badge.classList.remove("bump"), 400);
  showToast(`${product.name} adicionado ao carrinho`);
}

function changeQuantity(id, delta) {
  const next = (cart.get(id) || 0) + delta;
  if (next <= 0) cart.delete(id);
  else cart.set(id, next);
  renderCart();
}

function renderCart() {
  let count = 0;
  let total = 0;
  for (const [id, qty] of cart) {
    const p = PRODUCTS.find(item => item.id === id);
    if (p) { count += qty; total += p.price * qty; }
  }

  cartCount.textContent = count;
  cartTotal.textContent = money(total);
  cartSubtotal.textContent = money(total);

  if (cart.size === 0) {
    cartItems.innerHTML = `
      <div class="empty-cart">
        <span class="empty-cart-mark" aria-hidden="true">B.</span>
        <h3>Seu carrinho está esperando</h3>
        <p>Escolha algo gostoso no cardápio e ele aparece aqui.</p>
      </div>`;
    return;
  }

  cartItems.innerHTML = [...cart.entries()].map(([id, qty]) => {
    const p = PRODUCTS.find(item => item.id === id);
    const image = p.image
      ? `<img class="cart-item-image" src="${escapeHtml(p.image)}" alt="" loading="lazy" onerror="this.hidden=true">`
      : `<span class="cart-item-image cart-item-placeholder" aria-hidden="true">B.</span>`;
    return `<article class="cart-item">
      ${image}
      <div class="cart-item-main">
        <h3>${escapeHtml(p.name)}</h3>
        <small>${p.price > 0 ? money(p.price) + " cada" : "Preço a confirmar"}</small>
        <div class="quantity" aria-label="Quantidade de ${escapeHtml(p.name)}">
          <button type="button" data-change="${escapeHtml(id)}" data-delta="-1" aria-label="Diminuir ${escapeHtml(p.name)}">−</button>
          <span aria-live="polite">${qty}</span>
          <button type="button" data-change="${escapeHtml(id)}" data-delta="1" aria-label="Aumentar ${escapeHtml(p.name)}">+</button>
        </div>
      </div>
      <div class="cart-item-side">
        <strong class="cart-item-total">${p.price > 0 ? money(p.price * qty) : "A combinar"}</strong>
        <button type="button" class="remove-item" data-remove="${escapeHtml(id)}" aria-label="Remover ${escapeHtml(p.name)}">Remover</button>
      </div>
    </article>`;
  }).join("");

  cartItems.querySelectorAll("[data-change]").forEach(btn =>
    btn.addEventListener("click", () => changeQuantity(btn.dataset.change, Number(btn.dataset.delta)))
  );
  cartItems.querySelectorAll("[data-remove]").forEach(btn =>
    btn.addEventListener("click", () => {
      cart.delete(btn.dataset.remove);
      renderCart();
      showToast("Item removido do carrinho");
    })
  );
}
function openCart() {
  cartDrawer.hidden = false;
  overlay.hidden = false;
  requestAnimationFrame(() => {
    cartDrawer.classList.add("is-open");
    overlay.classList.add("is-visible");
  });
  document.body.style.overflow = "hidden";
  document.getElementById("close-cart").focus();
}
function closeCart() {
  cartDrawer.classList.remove("is-open");
  overlay.classList.remove("is-visible");
  document.body.style.overflow = "";
  window.setTimeout(() => {
    if (!cartDrawer.classList.contains("is-open")) {
      cartDrawer.hidden = true;
      overlay.hidden = true;
    }
  }, 260);
  document.getElementById("open-cart").focus({ preventScroll: true });
}
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => toast.classList.remove("show"), 2200);
}

document.querySelectorAll(".category-tab").forEach(btn => btn.addEventListener("click", () => {
  activeCategory = btn.dataset.category;
  document.querySelectorAll(".category-tab").forEach(tab => tab.classList.toggle("active", tab === btn));
  renderProducts();
}));
document.getElementById("open-cart").addEventListener("click", openCart);
document.getElementById("banner-cart").addEventListener("click", openCart);
document.getElementById("close-cart").addEventListener("click", closeCart);
overlay.addEventListener("click", closeCart);
document.addEventListener("keydown", event => { if (event.key === "Escape") closeCart(); });

function updateFulfilmentFields() {
  const deliverySelected = deliveryRadio.checked;
  addressFields.hidden = !deliverySelected;
  customerAddress.required = deliverySelected;
  document.querySelectorAll(".fulfilment-option").forEach(option => {
    const input = option.querySelector('input[type="radio"]');
    option.classList.toggle("selected", input.checked);
  });
  document.getElementById("delivery-summary").textContent =
    deliverySelected ? "Taxa a confirmar" : pickupRadio.checked ? "Retirada na loja" : "Selecione entrega ou retirada";
}

deliveryRadio.addEventListener("change", updateFulfilmentFields);
pickupRadio.addEventListener("change", updateFulfilmentFields);
updateFulfilmentFields();

document.getElementById("checkout").addEventListener("click", () => {
  if (cart.size === 0) { showToast("Adicione pelo menos um produto ao carrinho."); return; }
  if (!deliveryRadio.checked && !pickupRadio.checked) {
    showToast("Escolha entrega ou retirada para continuar.");
    document.getElementById("fulfilment-title").scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }
  if (deliveryRadio.checked && !customerAddress.value.trim()) {
    customerAddress.focus();
    customerAddress.reportValidity();
    showToast("Informe o endereço para entrega.");
    return;
  }
  if (!/^55\d{10,11}$/.test(WHATSAPP_NUMBER)) {
    showToast("Configure o número do WhatsApp no arquivo script.js.");
    return;
  }

  const name = document.getElementById("customer-name").value.trim();
  const notes = document.getElementById("order-notes").value.trim();
  const fulfilment = deliveryRadio.checked ? "Entrega" : "Retirada na loja";
  const lines = ["Olá, Bonna Salgados! Gostaria de fazer um pedido:", "", `Forma de recebimento: ${fulfilment}`];
  if (deliveryRadio.checked) {
    lines.push(`Endereço: ${customerAddress.value.trim()}`);
    if (addressComplement.value.trim()) lines.push(`Complemento/referência: ${addressComplement.value.trim()}`);
  }
  lines.push("");
  let total = 0;
  let hasUnpriced = false;
  for (const [id, qty] of cart) {
    const p = PRODUCTS.find(item => item.id === id);
    lines.push(`• ${qty}x ${p.name} — ${p.price > 0 ? money(p.price * qty) : "preço a confirmar"}`);
    total += p.price * qty;
    if (!(p.price > 0)) hasUnpriced = true;
  }
  lines.push("", `Subtotal dos itens: ${hasUnpriced ? "a confirmar" : money(total)}`);
  lines.push(`Taxa de entrega: ${deliveryRadio.checked ? "a confirmar" : "não se aplica (retirada)"}`);
  lines.push(`Total estimado: ${hasUnpriced ? "a confirmar" : money(total)}${deliveryRadio.checked ? " + eventual taxa de entrega" : ""}`);
  if (name) lines.push(`Nome: ${name}`);
  if (notes) lines.push(`Observações: ${notes}`);
  lines.push("", "Pode confirmar a disponibilidade e o valor final, por favor?");
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener,noreferrer");
});

document.getElementById("year").textContent = new Date().getFullYear();
renderProducts();
renderCart();


// Animações discretas de entrada: respeitam a preferência por movimento reduzido.
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll(".hero, .section-heading, .category-tabs, .product-card, .order-banner").forEach((element, index) => {
    element.classList.add("reveal-on-scroll");
    if (element.classList.contains("product-card")) element.style.setProperty("--reveal-delay", `${(index % 3) * 65}ms`);
    revealObserver.observe(element);
  });
}
