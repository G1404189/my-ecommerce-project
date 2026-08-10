function controlWitnessBox() {
    var menuOptions = document.getElementById("enquiry-type");
    var witnessBox = document.getElementById("witness-box-container");
    var nameField = document.getElementById("witness-name");
    var dobField = document.getElementById("witness-dob");

    if (menuOptions && menuOptions.value === "witness") {
        if (witnessBox) witnessBox.style.display = "block";
        if (nameField) nameField.required = true;
        if (dobField) dobField.required = true;
    } else {
        if (witnessBox) witnessBox.style.display = "none";
        if (nameField) nameField.required = false;
        if (dobField) dobField.required = false;
    }
}

// 1. Catálogo Oficial de Produtos (Preço em £ e Peso em Gramas)
// CATEGORY 1 & 2: biometers & Graphics (Itens 1 a 18)
const PRODUCT_CATALOG = {
    "chakras-complete-analysis-biometer": { isVariable: true, variants: { pdf: { name: "Chakras Complete Biometer (PDF Download)", price: 2.50, weight: 0, type: "digital" }, laminated: { name: "Chakras Complete Biometer (Laminated A4)", price: 12.00, weight: 80, type: "physical" } } },
    "frequency-vibration-agatha-scale": { isVariable: true, variants: { pdf: { name: "Agatha Scale Biometer (PDF Download)", price: 2.50, weight: 0, type: "digital" }, laminated: { name: "Agatha Scale Biometer (Laminated A4)", price: 12.00, weight: 80, type: "physical" } } },
    "bovis-scale-biometer": { isVariable: true, variants: { pdf: { name: "Bovis Scale Biometer (PDF Download)", price: 2.50, weight: 0, type: "digital" }, laminated: { name: "Bovis Scale Biometer (Laminated A4)", price: 12.00, weight: 80, type: "physical" } } },
    "body-systems-biometer": { isVariable: true, variants: { pdf: { name: "Body Systems Biometer (PDF Download)", price: 2.50, weight: 0, type: "digital" }, laminated: { name: "Body Systems Biometer (Laminated A4)", price: 12.00, weight: 80, type: "physical" } } },
    "body-organs-biometer": { isVariable: true, variants: { pdf: { name: "Body Organs Biometer (PDF Download)", price: 2.50, weight: 0, type: "digital" }, laminated: { name: "Body Organs Biometer (Laminated A4)", price: 12.00, weight: 80, type: "physical" } } },
    "body-glands-biometer": { isVariable: true, variants: { pdf: { name: "Body Glands Biometer (PDF Download)", price: 2.50, weight: 0, type: "digital" }, laminated: { name: "Body Glands Biometer (Laminated A4)", price: 12.00, weight: 80, type: "physical" } } },
    "physical-spiritual-psychological-causes-biometer": { isVariable: true, variants: { pdf: { name: "Physical/Spiritual Causes Biometer (PDF)", price: 2.50, weight: 0, type: "digital" }, laminated: { name: "Physical/Spiritual Causes Biometer (A4)", price: 12.00, weight: 80, type: "physical" } } },
    "limiting-beliefs-biometer": { isVariable: true, variants: { pdf: { name: "Limiting Beliefs Biometer (PDF Download)", price: 2.50, weight: 0, type: "digital" }, laminated: { name: "Limiting Beliefs Biometer (Laminated A4)", price: 12.00, weight: 80, type: "physical" } } },
    "time-duration-biometer": { isVariable: true, variants: { pdf: { name: "Time & Duration Biometer (PDF Download)", price: 2.50, weight: 0, type: "digital" }, laminated: { name: "Time & Duration Biometer (Laminated A4)", price: 12.00, weight: 80, type: "physical" } } },

    "high-vitality-graphic": { isVariable: true, variants: { pdf: { name: "High Vitality Radionic Graphic (PDF)", price: 2.50, weight: 0, type: "digital" }, laminated: { name: "High Vitality Radionic Graphic (A4)", price: 12.00, weight: 80, type: "physical" } } },
    "harmony-graphic": { isVariable: true, variants: { pdf: { name: "Harmony Radionic Graphic (PDF)", price: 2.50, weight: 0, type: "digital" }, laminated: { name: "Harmony Radionic Graphic (Laminated A4)", price: 12.00, weight: 80, type: "physical" } } },
    "scap-graphic": { isVariable: true, variants: { pdf: { name: "SCAP Radionic Graphic (PDF)", price: 2.50, weight: 0, type: "digital" }, laminated: { name: "SCAP Radionic Graphic (Laminated A4)", price: 12.00, weight: 80, type: "physical" } } },
    "luck-and-success-graphic": { isVariable: true, variants: { pdf: { name: "Luck & Success Radionic Graphic (PDF)", price: 2.50, weight: 0, type: "digital" }, laminated: { name: "Luck & Success Radionic Graphic (A4)", price: 12.00, weight: 80, type: "physical" } } },
    "anti-magic-graphic": { isVariable: true, variants: { pdf: { name: "Anti-Magic Radionic Graphic (PDF)", price: 2.50, weight: 0, type: "digital" }, laminated: { name: "Anti-Magic Radionic Graphic (Laminated A4)", price: 12.00, weight: 80, type: "physical" } } },
    "cosmic-spiral-graphic": { isVariable: true, variants: { pdf: { name: "Cosmic Spiral Radionic Graphic (PDF)", price: 2.50, weight: 0, type: "digital" }, laminated: { name: "Cosmic Spiral Radionic Graphic (A4)", price: 12.00, weight: 80, type: "physical" } } },
    "divine-justice-graphic": { isVariable: true, variants: { pdf: { name: "Divine Justice Radionic Graphic (PDF)", price: 2.50, weight: 0, type: "digital" }, laminated: { name: "Divine Justice Radionic Graphic (A4)", price: 12.00, weight: 80, type: "physical" } } },
    "luxor-graphic": { isVariable: true, variants: { pdf: { name: "Luxor Radionic Graphic (PDF)", price: 2.50, weight: 0, type: "digital" }, laminated: { name: "Luxor Radionic Graphic (Laminated A4)", price: 12.00, weight: 80, type: "physical" } } },
    "joshua-graphic": { isVariable: true, variants: { pdf: { name: "Joshua Radionic Graphic (PDF)", price: 2.50, weight: 0, type: "digital" }, laminated: { name: "Joshua Radionic Graphic (Laminated A4)", price: 12.00, weight: 80, type: "physical" } } },

    // CATEGORY 3: Wooden Boards (Itens 19 a 21)
    "wooden-scap-board": { name: "SCAP Environmental Neutralisation Board", price: 40.00, weight: 1200, type: "Wooden", ukOnly: true },
    "high-vitality-emitter-board": { name: "High-Vitality Emitter Wooden Board", price: 85.00, weight: 1200, type: "Wooden", ukOnly: true },
    "wooden-joshua-board": { name: "Joshua Sacred Geometry Protective Board", price: 35.00, weight: 1200, type: "Wooden", ukOnly: true },

    // CATEGORY 4: Guided Journals & Wellness (Itens 22 a 25)
    "alignment-journal": { name: "Daily Alignment Journal", price: 5.50, weight: 0, type: "digital" },
    "affirmation-cards-pack": {
        isVariable: true, variants: {
            protection: { name: "Affirmation Cards (Protection Pack)", price: 2.50, weight: 0, type: "digital" },
            alignment: { name: "Affirmation Cards (Alignment Pack)", price: 2.50, weight: 0, type: "digital" },
            abundance: { name: "Affirmation Cards (Abundance Pack)", price: 2.50, weight: 0, type: "digital" }
        }
    },
    "moon-cycle-sync-sheet": { name: "Moon Cycle Sync Tracking Sheet", price: 2.50, weight: 0, type: "digital" },

    // CATEGORY 5: Specialised Energetic Alignments (Itens 26 a 28) - Unificados com Peso 0
    "multidimensional-bioenergetic-assessment-shielding": { name: "Multidimensional Bioenergetic Assessment", price: 130.00, weight: 0, type: "digital" },
    "deep-quantum-healing-cycle": { name: "Deep Quantum Healing Month Cycle", price: 85.00, weight: 0, type: "digital" },
    "targeted-emotional-reprocessing-call": { name: "Emotional Reprocessing Focused Call", price: 65.00, weight: 0, type: "digital" },

    // CATEGORY 6: Physical Tools & Jewellery (Itens 29 a 39)
    "tigers-eye-bullet": { name: "Tiger's Eye Crystal Bullet-Shaped Pendant", price: 5.00, weight: 25, type: "jewellery", stock: 10 },
    "raw-amethyst-necklace": { name: "Amethyst Raw Crystal Pendant Necklace", price: 8.00, weight: 25, type: "jewellery", stock: 10 },
    "lapis-heart-necklace": { name: "Lapis Lazuli Heart-Shaped Necklace", price: 8.00, weight: 25, type: "jewellery", stock: 10 },
    "tigers-eye-teardrop": { name: "Tiger's Eye Irregular Teardrop Necklace", price: 9.00, weight: 60, type: "jewellery", stock: 10 },
    "copper-filigree-pendulum": { name: "Copper Filigree Dowsing Pendulum", price: 7.00, weight: 45, type: "jewellery", stock: 10 },
    "obsidian-heart": { name: "Black Obsidian Puffy Heart Pendant", price: 5.00, weight: 30, type: "jewellery", stock: 10 },
    "metatron-cube-necklace": { name: "Metatron's Cube Sacred Geometry Pendant", price: 7.00, weight: 20, type: "jewellery", stock: 10 },
    "tigers-eye-moon": { name: "Tiger's Eye Carved Crescent Moon Necklace", price: 11.00, weight: 60, type: "jewellery", stock: 10 },
    "triple-goddess-pendulum": { name: "Triple Goddess Water Drop Pendulum", price: 8.00, weight: 45, type: "jewellery", stock: 10 },
    "faceted-sceptre-pendulum": { name: "Faceted Ornate Crystal Sceptre Pendulum", price: 8.00, weight: 45, type: "jewellery" },
    "black-premium-waxed-cord": { name: "Black Premium Waxed Cord (with Clasp & Extender)", price: 2.30, weight: 5, type: "jewellery", stock: 10 },
    "brown-cord-2d": { name: "Brown Flat Suede Cord (Cut-to-Length)", price: 2.00, weight: 5, type: "jewellery", stock: 10 }
};

// 2. Memória do Carrinho
let shoppingCart = JSON.parse(localStorage.getItem('shoppingCart')) || [];

// 3. Função Automática para Calcular Totais e Portes por Peso
function calculateCartTotals() {
    const countrySelect = document.getElementById("cart-country-select");
    let destinationCountry = countrySelect ? countrySelect.value : "UK";
    let subtotal = 0;
    let totalWeight = 0;
    let woodenWeight = 0;
    let hasWoodenBoard = false;
    const shippingColorEl = document.getElementById("cart-shipping");

    shoppingCart.forEach(item => {
        subtotal += item.price * (item.quantity || 1);
        totalWeight += item.weight * (item.quantity || 1);
        if (item.type === "Wooden") {
            hasWoodenBoard = true;
            woodenWeight += item.weight * (item.quantity || 1);
        }
    });

    let shippingCost = 0;  // Começa a zero para ir somando as taxas de forma independente
    let shippingLabel = "Calculated at checkout";

    if (destinationCountry === "UK") {
        // CORREÇÃO: Força o texto dos portes a voltar a preto no Reino Unido
        if (shippingColorEl) shippingColorEl.style.setProperty("color", "#010101", "important");

        let jewellerySubtotal = 0;
        let hasLaminated = false;
        let jewelleryWeight = 0;

        // 1. Descobrir os valores e tipos de produtos no carrinho
        shoppingCart.forEach(item => {
            if (item.type === "jewellery") {
                jewellerySubtotal += item.price * (item.quantity || 1);
                jewelleryWeight += item.weight * (item.quantity || 1);
            }
            if (item.type === "physical") {
                hasLaminated = true;
            }
        });

        // 2. Regra das Tábuas de Madeira baseada no peso acumulado
        if (hasWoodenBoard) {
            if (woodenWeight <= 2000) {
                shippingCost += 8.50;  // Até 2kg
            } else {
                shippingCost += 12.00; // Dos 2kg aos 10kg
            }
        }

        // 3. Regra das Jóias / Cristais (Abaixo de £25 aplica escalões de peso)
        if (jewellerySubtotal > 0 && jewellerySubtotal < 25.00) {
            if (jewelleryWeight <= 2000) {
                shippingCost += 3.60;  // Joias leves abaixo de £25
            } else {
                shippingCost += 6.50;  // Joias pesadas abaixo de £25
            }
        }

        // 4. Definição da Etiqueta de Texto para o ecrã
        if (shippingCost === 0) {
            shippingLabel = "FREE";
        } else {
            shippingLabel = "£" + shippingCost.toFixed(2);
        }

    } else {
        // Criar uma variável para saber se há itens proibidos fora do UK
        let hasRestrictedItem = false;

        shoppingCart.forEach(item => {
            // Se for Madeira (Wooden) ou Jóia (peso <= 70), bloqueia
            if (item.type === "Wooden") {
                hasRestrictedItem = true;
            }
        });

        if (hasRestrictedItem) {
            shippingCost = 0; // Zera para não somar valores fictícios
            shippingLabel = "Review cart restricted item";
            // ATIVA O LARANJA: Apenas quando há o aviso de restrição
            if (shippingColorEl) shippingColorEl.style.setProperty("color", "var(--brand-orange)", "important");

            // BÓNUS: Desativar o botão de checkout se ele existir na página
            const checkoutBtn = document.getElementById("btn-proceed-to-checkout");
            if (checkoutBtn) checkoutBtn.disabled = true;

        } else if (totalWeight === 0) {
            shippingCost = 0;
            shippingLabel = "FREE";
            // DEVOLVE A COR DA MARCA: Para o estado normal permitido
            if (shippingColorEl) shippingColorEl.style.setProperty("color", "#010101", "important");

        } else {
            // Criar uma variável para saber se há itens proibidos fora do UK
            let hasRestrictedItem = false;
            let laminatedWeight = 0;
            let internationalJewelleryWeight = 0;

            shoppingCart.forEach(item => {
                // Bloqueia as madeiras fora do Reino Unido
                if (item.type === "Wooden") {
                    hasRestrictedItem = true;
                }
                // Isola o peso dos laminados
                if (item.type === "physical") {
                    laminatedWeight += item.weight * (item.quantity || 1);
                }
                // Isola o peso das jóias
                if (item.type === "jewellery") {
                    internationalJewelleryWeight += item.weight * (item.quantity || 1);
                }
            });

            if (hasRestrictedItem) {
                shippingCost = 0; // Zera para não somar valores fictícios
                shippingLabel = "Review cart restricted item";
                // ATIVA O LARANJA: Apenas quando há o aviso de restrição
               if (shippingColorEl) shippingColorEl.style.setProperty("color", "var(--brand-orange)", "important");

                // Desativar o botão de checkout se ele existir na página
                const checkoutBtn = document.getElementById("btn-proceed-to-checkout");
                if (checkoutBtn) checkoutBtn.disabled = true;

            } else {
                // DEVOLVE A COR DA MARCA: Para o estado normal permitido
                if (shippingColorEl) shippingColorEl.style.setProperty("color", "#010101", "important");

                // 1. CALCULO DOS PORTES DOS LAMINADOS (Envio separado)
                let laminatedCost = 0;
                if (laminatedWeight > 0) {
                    if (laminatedWeight <= 250) {
                        laminatedCost = 7.50; // Envelope leve internacional
                    } else {
                        laminatedCost = 14.99; // Envelope pesado internacional
                    }
                }

                // 2. CALCULO DOS PORTES DAS JÓIAS (Envio separado por peso)
                let jewelleryCost = 0;
                if (internationalJewelleryWeight > 0) {
                    if (internationalJewelleryWeight <= 250) {
                        jewelleryCost = 7.50; // Pacote de jóias leve internacional
                    } else {
                        jewelleryCost = 14.99; // Pacote de jóias pesado internacional
                    }
                }

                // 3. SOMA TOTAL DOS PORTES INDEPENDENTES
                shippingCost = laminatedCost + jewelleryCost;

                if (shippingCost === 0) {
                    shippingLabel = "FREE";
                } else {
                    shippingLabel = "£" + shippingCost.toFixed(2);
                }
            }
        }


    }

    let finalTotal = subtotal + shippingCost;

    const subtotalEl = document.getElementById("cart-subtotal");
    const shippingEl = document.getElementById("cart-shipping");
    const totalWeightEl = document.getElementById("cart-total-weight");
    const totalEl = document.getElementById("cart-total");

    if (subtotalEl) subtotalEl.innerText = "£" + subtotal.toFixed(2);
    if (shippingEl) shippingEl.innerText = shippingLabel;
    if (totalWeightEl) {
        totalWeightEl.innerText = totalWeight + "g";
    }

    if (totalEl) {
        if (hasWoodenBoard && destinationCountry !== "UK") {
            totalEl.innerText = "N/A";
        } else {
            totalEl.innerText = "£" + finalTotal.toFixed(2);
        }
    }
}

// 4. Função Visual para Desenhar o Carrinho no Ecrã (Renderizar)
function renderCart() {
    const container = document.getElementById("cart-items-container");
    const checkoutBtn = document.getElementById("btn-proceed-to-checkout");

    if (!container) return;

    if (shoppingCart.length === 0) {
        container.innerHTML = `
            <div class="empty-cart-message">
                <p>Your shopping cart is currently empty.</p>
                <a href="products.html" class="btn-return-shop">Return to Shop</a>
            </div>
        `;
        if (checkoutBtn) checkoutBtn.disabled = true;
        calculateCartTotals("UK");
        return;
    }

    container.innerHTML = "";
    if (checkoutBtn) checkoutBtn.disabled = false;

    shoppingCart.forEach((item, index) => {
        const itemRow = document.createElement("article");
        const countrySelect = document.getElementById("cart-country-select");
        const currentCountry = countrySelect ? countrySelect.value : "UK";

        let noticeHTML = "";
        if (item.type === "Wooden" && currentCountry !== "UK") {
            noticeHTML = `<div class="summary-notice-box" style="margin-top: 10px;"><p>* Handcrafted wooden boards are strictly limited to UK shipping. Please <strong onclick="removeItemFromCart(${index})" style="cursor: pointer; text-decoration: underline; color: #fc831a;">[ Remove this item ]</strong> to proceed with your international order.</p></div>`;
        }

        itemRow.className = "cart-item-row";
        itemRow.innerHTML = `
                <div class="cart-item-details" >
                <h3>${item.name}</h3>
                ${noticeHTML}
                <p class="cart-item-meta">Weight: ${item.weight}g</p>
       </div>
            <p class="cart-item-price">£${(item.price * (item.quantity || 1)).toFixed(2)}</p>
            
            <!--Grupo Horizontal Único para os Botões-->
                <div class="cart-item-qty-control">
                    <button type="button" onclick="adjustItemQuantity(${index}, -1)">-</button>
                    <span>${item.quantity || 1}</span>
                    <button type="button" onclick="adjustItemQuantity(${index}, 1)">+</button>
                    <button type="button" class="btn-remove-item" onclick="removeItemFromCart(${index})">&times;</button>
                </div>
            `;
        container.appendChild(itemRow);
    });

    calculateCartTotals();
}

// 5. Função de Suporte para o cliente poder remover um item do carrinho
function removeItemFromCart(index) {
    shoppingCart.splice(index, 1);
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
    renderCart();
}

// Executa a verificação assim que a página do carrinho é carregada
document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("cart-items-container")) {
        renderCart();
    }
});

// 6. Função para Adicionar Itens ao Carrinho a partir do Catálogo
function addItemToCart(selectId, productKey) {
    const baseProduct = PRODUCT_CATALOG[productKey];
    if (!baseProduct) return;

    let finalName = baseProduct.name;
    let finalPrice = baseProduct.price;
    let finalWeight = baseProduct.weight;
    let finalType = baseProduct.type;

    if (baseProduct.isVariable) {
        const targetButton = document.querySelector('.add-to-cart-btn[data-id="' + productKey + '"]');
        const productCard = targetButton.closest('.product-card');
        const selectEl = productCard.querySelector('.product-format-select');

        if (!selectEl) return;

        const chosenVariant = selectEl.value;
        const variantData = baseProduct.variants[chosenVariant];
        if (!variantData) return;

        finalName = variantData.name;
        finalPrice = variantData.price;
        finalWeight = variantData.weight;
        finalType = variantData.type;
    }

    // CORREÇÃO: Verifica se o item com o mesmo nome já existe no carrinho
    const existingItem = shoppingCart.find(item => item.name === finalName);

    if (existingItem) {
        // Se já existe, soma 1 à quantidade existente
        existingItem.quantity = (existingItem.quantity || 1) + 1;
    } else {
        // Se é um item novo, adiciona o objeto com quantidade inicial 1
        const itemToAdd = {
            name: finalName,
            price: finalPrice,
            weight: finalWeight,
            type: finalType,
            quantity: 1
        };
        shoppingCart.push(itemToAdd);
    }

    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
    alert(`"${finalName}" has been successfully added to your cart!`);


    if (document.getElementById("cart-items-container")) {
        renderCart();
    }
}
const checkoutBtnElement = document.getElementById("btn-proceed-to-checkout");
if (checkoutBtnElement) {
    checkoutBtnElement.addEventListener("click", function () {
        localStorage.removeItem("shoppingCart");
        window.location.href = "thank-you.html";
    });
}
function adjustItemQuantity(index, amount) {
    if (!shoppingCart[index].quantity) {
        shoppingCart[index].quantity = 1;
    }
    shoppingCart[index].quantity += amount;
    if (shoppingCart[index].quantity <= 0) {
        removeItemFromCart(index);
    } else {
        localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
        renderCart();
    }
}
// Alarme para recalcular os totais sempre que o país mudar no ecrã
document.addEventListener("change", function (e) {
    if (e.target && e.target.id === "cart-country-select") {
        calculateCartTotals();
        renderCart();  //Força a renderização para atualizar as mensagens de aviso sobre itens restritos //
    }
});

// Toggle mobile navigation menu visibility
function toggleMenu() {
    const navMenu = document.querySelector('body header nav ul');
    if (navMenu) {
        navMenu.classList.toggle('open');
    }
}
