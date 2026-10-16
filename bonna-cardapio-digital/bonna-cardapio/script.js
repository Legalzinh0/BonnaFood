/*
 * BONNA SALGADOS — CONFIGURAÇÃO DO CARDÁPIO
 * 1) Troque WHATSAPP_NUMBER pelo número da loja com código do país e DDD,
 *    somente números. Exemplo: "5531999999999".
 * 2) Edite nomes, descrições e preços na lista PRODUCTS abaixo.
 * 3) Preço deve ser número, sem "R$". Exemplo: price: 7.50
 */
const WHATSAPP_NUMBER = "55DDNUMEROAQUI"; // Ex.: 5531999999999

const PRODUCTS = [
  {
    id: "empadinha",
    name: "Empadinha",
    category: "salgados",
    description: "Uma opção saborosa para sua pausa.",
    price: 0,
    emoji: "🥧",
    tag: "Salgado"
  },
  {
    id: "copo-felicidade",
    name: "Copo da Felicidade",
    category: "doces",
    description: "Uma sobremesa especial para adoçar o dia.",
    price: 0,
    emoji: "🍨",
    tag: "Doce"
  }
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
const toast = document.getElementById("toast");

const money = value => value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

function renderProducts() {
  const shown = PRODUCTS.filter(p => activeCategory === "todos" || p.category === activeCategory);
  productGrid.innerHTML = shown.map(p => `
    <article class="product-card">
      <div class="product-visual ${p.category}">
        <span class="product-label">${escapeHtml(p.tag || p.category)}</span>
        <span class="product-emoji" aria-hidden="true">${p.emoji || "🍴"}</span>
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
  if (cart.size === 0) {
    cartItems.innerHTML = '<p class="empty-cart">Seu carrinho está vazio.<br>Escolha algo gostoso no cardápio!</p>';
    return;
  }
  cartItems.innerHTML = [...cart.entries()].map(([id, qty]) => {
    const p = PRODUCTS.find(item => item.id === id);
    return `<div class="cart-item">
      <div><h3>${escapeHtml(p.name)}</h3><small>${p.price > 0 ? money(p.price) + " cada" : "Preço a confirmar"}</small>
        <div class="quantity">
          <button data-change="${escapeHtml(id)}" data-delta="-1" aria-label="Diminuir quantidade">−</button>
          <span>${qty}</span>
          <button data-change="${escapeHtml(id)}" data-delta="1" aria-label="Aumentar quantidade">+</button>
        </div>
      </div>
      <div class="cart-item-total">${p.price > 0 ? money(p.price * qty) : "A combinar"}</div>
    </div>`;
  }).join("");
  cartItems.querySelectorAll("[data-change]").forEach(btn =>
    btn.addEventListener("click", () => changeQuantity(btn.dataset.change, Number(btn.dataset.delta)))
  );
}

function openCart() {
  cartDrawer.hidden = false;
  overlay.hidden = false;
  document.body.style.overflow = "hidden";
}
function closeCart() {
  cartDrawer.hidden = true;
  overlay.hidden = true;
  document.body.style.overflow = "";
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

document.getElementById("checkout").addEventListener("click", () => {
  if (cart.size === 0) { showToast("Adicione pelo menos um produto ao carrinho."); return; }
  if (!/^55\d{10,11}$/.test(WHATSAPP_NUMBER)) {
    showToast("Configure o número do WhatsApp no arquivo script.js.");
    return;
  }
  const name = document.getElementById("customer-name").value.trim();
  const notes = document.getElementById("order-notes").value.trim();
  const lines = ["Olá, Bonna Salgados! Gostaria de fazer um pedido:", ""];
  let total = 0;
  for (const [id, qty] of cart) {
    const p = PRODUCTS.find(item => item.id === id);
    lines.push(`• ${qty}x ${p.name} — ${p.price > 0 ? money(p.price * qty) : "preço a confirmar"}`);
    total += p.price * qty;
  }
  lines.push("", `Total estimado: ${total > 0 ? money(total) : "a confirmar"}`);
  if (name) lines.push(`Nome: ${name}`);
  if (notes) lines.push(`Observações: ${notes}`);
  lines.push("", "Pode confirmar a disponibilidade, por favor?");
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener,noreferrer");
});

document.getElementById("year").textContent = new Date().getFullYear();
renderProducts();
renderCart();
