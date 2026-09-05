(function() {
    const PLACEHOLDER = 'emplacement.png';
    const RAIN_ICONS = [
        'https://github.com/zznkch/D-lice/blob/main/color%C3%A9/cacao.svg?raw=true',
        'https://github.com/zznkch/D-lice/blob/main/color%C3%A9/citron.svg?raw=true',
        'https://github.com/zznkch/D-lice/blob/main/color%C3%A9/coffee.svg?raw=true',
        'https://github.com/zznkch/D-lice/blob/main/color%C3%A9/framboise-bleu.svg?raw=true',
        'https://github.com/zznkch/D-lice/blob/main/color%C3%A9/framboise-rose.svg?raw=true',
        'https://github.com/zznkch/D-lice/blob/main/color%C3%A9/pomme-verte.svg?raw=true',
        'https://github.com/zznkch/D-lice/blob/main/color%C3%A9/pomme-rouge.svg?raw=true',
        'https://github.com/zznkch/D-lice/blob/main/color%C3%A9/mangue.svg?raw=true',
        'https://github.com/zznkch/D-lice/blob/main/color%C3%A9/peanut.svg?raw=true'
    ];

    const allProducts = [
        { name: 'Framboise', cat: 'trompe-l-oeil', price: 6.50, fullName: 'Trompe-l\'œil Framboise' },
        { name: 'Citron', cat: 'trompe-l-oeil', price: 6.50, fullName: 'Trompe-l\'œil Citron' },
        { name: 'Café', cat: 'trompe-l-oeil', price: 6.50, fullName: 'Trompe-l\'œil Café' },
        { name: 'Chocolat', cat: 'trompe-l-oeil', price: 6.50, fullName: 'Trompe-l\'œil Chocolat' },
        { name: 'Pomme', cat: 'trompe-l-oeil', price: 5.00, fullName: 'Trompe-l\'œil Pomme' },
        { name: 'Mangue', cat: 'trompe-l-oeil', price: 7.50, fullName: 'Trompe-l\'œil Mangue' },
        { name: 'Cacahuète', cat: 'trompe-l-oeil', price: 7.50, fullName: 'Trompe-l\'œil Cacahuète' },
        { name: 'Citron meringuée', cat: 'tartelettes', price: 3.90, fullName: 'Tartelette Citron meringuée' },
        { name: 'Framboise', cat: 'tartelettes', price: 3.90, fullName: 'Tartelette Framboise' },
        { name: 'Fraise', cat: 'tartelettes', price: 3.90, fullName: 'Tartelette Fraise' },
        { name: 'Fruits', cat: 'tartelettes', price: 3.90, fullName: 'Tartelette Fruits' },
        { name: 'Framboise/crème brûlée', cat: 'tartelettes', price: 3.90, fullName: 'Tartelette Framboise/crème brûlée' },
        { name: 'Façon snickers', cat: 'tartelettes', price: 3.90, fullName: 'Tartelette Façon snickers' },
        { name: 'Oreo', cat: 'cupcakes', price: 3.00, fullName: 'Cupcake Oreo' },
        { name: 'Kinder', cat: 'cupcakes', price: 3.00, fullName: 'Cupcake Kinder' },
        { name: 'Exotique', cat: 'cupcakes', price: 3.00, fullName: 'Cupcake exotique' },
        { name: 'Classique', cat: 'cupcakes', price: 3.00, fullName: 'Cupcake classique' },
        { name: 'Choco', cat: 'cupcakes', price: 3.00, fullName: 'Muffin choco' },
        { name: 'Nature', cat: 'cupcakes', price: 3.00, fullName: 'Muffin nature' },
        { name: 'Paris-brest', cat: 'patisseries', price: 3.90, fullName: 'Paris-brest' },
        { name: 'Tropézienne', cat: 'patisseries', price: 3.90, fullName: 'Tropézienne' },
        { name: 'Opéra', cat: 'patisseries', price: 3.90, fullName: 'Opéra' },
        { name: 'Forêt Noire (part)', cat: 'patisseries', price: 2.90, fullName: 'Forêt Noire (part)' },
        { name: 'Tiramisu', cat: 'patisseries', price: 2.90, fullName: 'Tiramisu' },
        { name: 'Trois Choco', cat: 'patisseries', price: 3.90, fullName: 'Trois Choco' },
        { name: 'Macaron XI Framboise', cat: 'patisseries', price: 3.90, fullName: 'Macaron XI Framboise' },
        { name: 'Choux praliné', cat: 'patisseries', price: 2.90, fullName: 'Choux praliné' },
        { name: 'Macaron (unité)', cat: 'patisseries', price: 1.90, fullName: 'Macaron (unité)' },
        { name: 'Cookies gourmand', cat: 'patisseries', price: 3.00, fullName: 'Cookies gourmand' },
        { name: 'Cookies Milka (unité)', cat: 'patisseries', price: 1.90, fullName: 'Cookies Milka (unité)' },
        { name: 'Box à offrir', cat: 'box', price: 25.00, fullName: 'Box à offrir' },
        { name: 'Forêt Noire (10 pers.)', cat: 'gateaux', price: 25.00, fullName: 'Forêt Noire (10 pers.)' },
        { name: 'Tarte au fromage (10 pers.)', cat: 'gateaux', price: 28.00, fullName: 'Tarte au fromage (10 pers.)' },
        { name: 'Tarte au citron meringuée (10 pers.)', cat: 'gateaux', price: 25.00, fullName: 'Tarte au citron meringuée (10 pers.)' },
        { name: 'Tarte aux fruits (10 pers.)', cat: 'gateaux', price: 22.00, fullName: 'Tarte aux fruits (10 pers.)' },
        { name: 'Tarte aux pommes (10 pers.)', cat: 'gateaux', price: 22.00, fullName: 'Tarte aux pommes (10 pers.)' },
        { name: 'Tarte tatin (10 pers.)', cat: 'gateaux', price: 22.00, fullName: 'Tarte tatin (10 pers.)' },
        { name: 'Flan (10 pers.)', cat: 'gateaux', price: 28.00, fullName: 'Flan (10 pers.)' }
    ];

    const catLabels = {
        'trompe-l-oeil': 'Trompe-l\'œil',
        'tartelettes': 'Tartelettes',
        'cupcakes': 'Cupcakes/Muffins',
        'patisseries': 'Pâtisseries',
        'box': 'Box à offrir',
        'gateaux': 'Gâteaux'
    };
    const catIcons = { 'trompe-l-oeil': 'fa-eye', 'tartelettes': 'fa-cake-candles', 'cupcakes': 'fa-cupcake', 'patisseries': 'fa-croissant', 'box': 'fa-gift', 'gateaux': 'fa-cake-candles' };

    // Détermine la page courante à partir du nom du fichier
    const path = window.location.pathname;
    let currentPage = 'home';
    if (path.includes('boutique')) currentPage = 'boutique';
    else if (path.includes('histoire')) currentPage = 'a-propos';
    else if (path.includes('contact')) currentPage = 'contact';

    const header = document.getElementById('header');
    const hamburger = document.getElementById('hamburger');
    const mobileOverlay = document.getElementById('mobileOverlay');
    const mobileNav = document.getElementById('mobileNav');
    const rainContainer = document.getElementById('rainContainer');

    // Active le bon lien dans la navigation
    document.querySelectorAll('.header__nav-link, .mobile-overlay__link').forEach(link => {
        const page = link.getAttribute('data-nav');
        if (page === currentPage) link.classList.add('active');
    });

    // Menu mobile
    function closeMobileMenu() {
        hamburger.classList.remove('active');
        mobileOverlay.classList.remove('open');
        document.body.classList.remove('menu-open');
        const links = mobileNav.querySelectorAll('.mobile-overlay__link');
        links.forEach(link => {
            link.style.opacity = '0';
            link.style.transform = 'translateY(30px)';
            link.style.transition = 'all 0.25s ease';
        });
    }

    function openMobileMenu() {
        hamburger.classList.add('active');
        mobileOverlay.classList.add('open');
        document.body.classList.add('menu-open');
        const links = mobileNav.querySelectorAll('.mobile-overlay__link');
        links.forEach((link, i) => {
            link.style.opacity = '0';
            link.style.transform = 'translateY(30px)';
            setTimeout(() => {
                link.style.transition = 'all 0.45s cubic-bezier(0.22, 0.61, 0.36, 1)';
                link.style.opacity = '1';
                link.style.transform = 'translateY(0)';
            }, 80 + i * 80);
        });
    }

    hamburger.addEventListener('click', () => {
        if (hamburger.classList.contains('active')) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    });

    mobileOverlay.addEventListener('click', (e) => {
        if (e.target === mobileOverlay) closeMobileMenu();
    });

    // Header scroll
    window.addEventListener('scroll', () => {
        if (header) header.classList.toggle('scrolled', window.scrollY > 40);
    });

    // Pluie d'icônes (uniquement sur l'accueil)
    function initRain() {
        if (!rainContainer) return;
        rainContainer.innerHTML = '';
        const cols = Math.floor(window.innerWidth / 70);
        for (let i = 0; i < cols; i++) {
            const img = document.createElement('img');
            img.className = 'rain-icon';
            img.src = RAIN_ICONS[Math.floor(Math.random() * RAIN_ICONS.length)];
            img.style.width = (24 + Math.random() * 20) + 'px';
            img.style.left = (i * (100 / cols) + Math.random() * 10) + '%';
            img.style.animationDuration = (12 + Math.random() * 16) + 's';
            img.style.animationDelay = Math.random() * 12 + 's';
            img.onerror = function() { this.remove(); };
            rainContainer.appendChild(img);
        }
    }

    if (currentPage === 'home' && rainContainer) {
        initRain();
    } else if (rainContainer) {
        rainContainer.style.display = 'none';
    }

    // --- CARROUSEL ACCUEIL ---
    const fullCarouselTrack = document.getElementById('fullCarouselTrack');
    let fullCarouselIndex = 0, fullCarouselInterval;

    function buildFullCarousel() {
        if (!fullCarouselTrack) return;
        fullCarouselTrack.innerHTML = '';
        fullCarouselIndex = 0;
        allProducts.forEach(prod => {
            const slide = document.createElement('div');
            slide.className = 'full-carousel__slide';
            slide.style.backgroundImage = `url(${PLACEHOLDER})`;
            slide.innerHTML = `<div class="slide-overlay"><div class="slide-cat">${catLabels[prod.cat]}</div><div class="slide-name">${prod.name}</div></div>`;
            slide.addEventListener('click', () => {
                window.location.href = 'boutique.html?cat=' + prod.cat + '&search=' + encodeURIComponent(prod.name);
            });
            fullCarouselTrack.appendChild(slide);
        });
        updateCarouselPos();
    }

    function updateCarouselPos() {
        if (!fullCarouselTrack) return;
        const w = fullCarouselTrack.querySelector('.full-carousel__slide')?.offsetWidth || window.innerWidth;
        fullCarouselTrack.style.transform = `translateX(-${fullCarouselIndex * w}px)`;
    }

    function nextSlide() { fullCarouselIndex = (fullCarouselIndex + 1) % allProducts.length; updateCarouselPos(); }
    function prevSlide() { fullCarouselIndex = (fullCarouselIndex - 1 + allProducts.length) % allProducts.length; updateCarouselPos(); }
    function startFullCarousel() { clearInterval(fullCarouselInterval); fullCarouselInterval = setInterval(nextSlide, 4000); }

    document.getElementById('fullCarouselNext')?.addEventListener('click', () => { nextSlide(); startFullCarousel(); });
    document.getElementById('fullCarouselPrev')?.addEventListener('click', () => { prevSlide(); startFullCarousel(); });
    if (fullCarouselTrack) {
        fullCarouselTrack.addEventListener('mouseenter', () => clearInterval(fullCarouselInterval));
        fullCarouselTrack.addEventListener('mouseleave', startFullCarousel);
        window.addEventListener('resize', updateCarouselPos);
        buildFullCarousel();
        startFullCarousel();
    }

    // Scroll héro
    const heroScroll = document.getElementById('heroScroll');
    if (heroScroll) {
        heroScroll.addEventListener('click', () => {
            const args = document.getElementById('arguments');
            if (args) args.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // --- BOUTIQUE ---
    const shopGroupsContainer = document.getElementById('shopGroupsContainer');
    const shopSearch = document.getElementById('shopSearch');
    const shopFilters = document.getElementById('shopFilters');
    const sortBtn = document.getElementById('sortBtn');
    let activeShopFilter = 'all', sortAsc = true;

    function getFilteredProducts(filter, search) {
        let arr = filter === 'all' ? [...allProducts] : allProducts.filter(p => p.cat === filter);
        if (search) {
            const s = search.toLowerCase();
            arr = arr.filter(p => p.name.toLowerCase().includes(s) || p.fullName.toLowerCase().includes(s));
        }
        arr.sort((a, b) => sortAsc ? a.price - b.price : b.price - a.price);
        return arr;
    }

    function prodCard(p) {
        return `<div class="shop-card"><div class="shop-card__img"><img src="${PLACEHOLDER}" alt="${p.name}" loading="lazy"></div><div class="shop-card__body"><h4>${p.name}</h4><span class="shop-card__price-tag">${p.price.toFixed(2).replace('.',',')}€</span></div></div>`;
    }

    function renderShop() {
        if (!shopGroupsContainer) return;
        const search = (shopSearch?.value || '').trim();
        if (activeShopFilter === 'all') {
            const cats = ['trompe-l-oeil', 'tartelettes', 'cupcakes', 'patisseries', 'box', 'gateaux'];
            shopGroupsContainer.innerHTML = cats.map(cat => {
                const prods = getFilteredProducts(cat, search);
                if (!prods.length) return '';
                return `<div class="category-group"><div class="category-group__title"><i class="fa-solid ${catIcons[cat]}"></i> ${catLabels[cat]}</div><div class="shop-grid">${prods.map(prodCard).join('')}</div></div>`;
            }).join('') || '<p style="text-align:center;padding:40px;">Aucun produit trouvé.</p>';
        } else {
            const prods = getFilteredProducts(activeShopFilter, search);
            shopGroupsContainer.innerHTML = prods.length ?
                `<div class="category-group"><div class="category-group__title"><i class="fa-solid ${catIcons[activeShopFilter]}"></i> ${catLabels[activeShopFilter]}</div><div class="shop-grid">${prods.map(prodCard).join('')}</div></div>` :
                '<p style="text-align:center;padding:40px;">Aucun produit.</p>';
        }
    }

    // Appliquer les paramètres d'URL si présents (depuis le carrousel)
    if (currentPage === 'boutique') {
        const urlParams = new URLSearchParams(window.location.search);
        const catParam = urlParams.get('cat');
        const searchParam = urlParams.get('search');
        if (catParam && catLabels[catParam]) {
            activeShopFilter = catParam;
            const chip = document.querySelector(`#shopFilters .chip[data-filter="${catParam}"]`);
            if (chip) {
                document.querySelectorAll('#shopFilters .chip').forEach(c => c.classList.remove('active'));
                chip.classList.add('active');
            }
        }
        if (searchParam && shopSearch) {
            shopSearch.value = searchParam;
        }
        renderShop();
    }

    shopFilters?.addEventListener('click', e => {
        const chip = e.target.closest('.chip');
        if (!chip) return;
        document.querySelectorAll('#shopFilters .chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        activeShopFilter = chip.dataset.filter;
        renderShop();
    });
    shopSearch?.addEventListener('input', renderShop);
    sortBtn?.addEventListener('click', () => {
        sortAsc = !sortAsc;
        const dirSpan = document.getElementById('sortDir');
        if (dirSpan) dirSpan.textContent = sortAsc ? 'croissant' : 'décroissant';
        const icon = sortBtn.querySelector('i');
        if (icon) icon.className = sortAsc ? 'fa-solid fa-arrow-up-wide-short' : 'fa-solid fa-arrow-down-wide-short';
        renderShop();
    });

    const counterOrders = document.getElementById('counterOrders');
    if (counterOrders) counterOrders.textContent = '1 247';

    // --- FORMULAIRE CONTACT AVEC EMAILJS ---
    const contactForm = document.getElementById('contactForm');
    const btnProduitExistant = document.getElementById('btnProduitExistant');
    const btnPersonnalise = document.getElementById('btnPersonnalise');
    const groupProduitExistant = document.getElementById('groupProduitExistant');
    const groupPersonnalise = document.getElementById('groupPersonnalise');
    const produitsList = document.getElementById('produitsList');

    // Initialisation d'EmailJS avec votre clé publique
    emailjs.init("bgXtc2W3guCdOPmlD");

    btnProduitExistant?.addEventListener('click', () => {
        btnProduitExistant.classList.add('active');
        btnPersonnalise.classList.remove('active');
        groupProduitExistant.style.display = 'block';
        groupPersonnalise.style.display = 'none';
    });
    btnPersonnalise?.addEventListener('click', () => {
        btnPersonnalise.classList.add('active');
        btnProduitExistant.classList.remove('active');
        groupPersonnalise.style.display = 'block';
        groupProduitExistant.style.display = 'none';
    });

    if (produitsList) {
        produitsList.innerHTML = allProducts.map(p => `<option value="${p.fullName}">`).join('');
    }

    // Gestionnaire d'envoi du formulaire via EmailJS
    contactForm?.addEventListener('submit', function(e) {
        e.preventDefault();

        // Récupération des champs
        const nom = document.querySelector('input[name="Nom"]')?.value.trim() || '';
        const email = document.querySelector('input[name="Email"]')?.value.trim() || '';
        const adresse = document.querySelector('input[name="Adresse"]')?.value.trim() || '';
        const telephone = document.querySelector('input[name="Telephone"]')?.value.trim() || '';
        const message = document.querySelector('textarea[name="Message"]')?.value.trim() || '';

        // Validation rapide des champs obligatoires
        if (!nom || !email || !adresse || !telephone || !message) {
            showToast('Veuillez remplir tous les champs obligatoires (*).', 'error');
            return;
        }

        // Récupération du produit (existant ou personnalisé)
        let produit = '';
        const groupExistant = document.getElementById('groupProduitExistant');
        const groupPerso = document.getElementById('groupPersonnalise');
        if (groupExistant && groupExistant.style.display !== 'none') {
            produit = document.querySelector('input[name="Produit souhaité"]')?.value.trim() || 'Non précisé';
        } else if (groupPerso && groupPerso.style.display !== 'none') {
            produit = document.querySelector('textarea[name="Description personnalisée"]')?.value.trim() || 'Non précisé';
        } else {
            produit = 'Non précisé';
        }

        // Préparation des paramètres pour EmailJS
        const templateParams = {
            title: 'Nouvelle commande',
            name: nom,
            email: email,
            phone: telephone,
            product: produit,
            message: message,
            time: new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Paris' })
        };

        // Envoi via EmailJS
        emailjs.send("service_uzwo4g8", "template_yo638zq", templateParams)
            .then(function(response) {
                console.log('Succès !', response.status, response.text);
                showToast('✅ Votre commande a été envoyée avec succès !', 'success');
                contactForm.reset(); // vide le formulaire
            }, function(error) {
                console.error('Erreur :', error);
                showToast('❌ Une erreur est survenue. Veuillez réessayer ou nous contacter directement.', 'error');
            });
    });

    // Fonction améliorée pour les notifications toast
    function showToast(msg, type = 'info') {
        const toast = document.getElementById('toastContainer');
        if (!toast) return;
        const div = document.createElement('div');
        div.textContent = msg;
        const bgColor = type === 'success' ? '#28a745' : '#533535';
        div.style.cssText = `background: ${bgColor}; color: #fff; padding: 16px 24px; border-radius: 20px; margin-bottom: 8px; animation: slideIn 0.4s ease; box-shadow: 0 4px 12px rgba(0,0,0,0.15);`;
        toast.appendChild(div);
        setTimeout(() => {
            div.style.opacity = '0';
            div.style.transition = 'opacity 0.3s ease';
            setTimeout(() => div.remove(), 300);
        }, 4000);
    }

    // Copie de l'email au clic
    document.getElementById('emailLink')?.addEventListener('click', function(e) {
        e.preventDefault();
        navigator.clipboard.writeText('delicebynaoual@gmail.com').then(() => showToast('Email copié !', 'info'));
    });

    // Protection anti-copie (conservez vos sécurités)
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
    });
    document.onkeydown = function(e) {
        if (e.keyCode === 123) {
            e.preventDefault();
            return false;
        }
        if (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)) {
            e.preventDefault();
            return false;
        }
        if (e.ctrlKey && (e.keyCode === 85 || e.keyCode === 83)) {
            e.preventDefault();
            return false;
        }
        if (e.ctrlKey && (e.keyCode === 73 || e.keyCode === 74)) {
            e.preventDefault();
            return false;
        }
    };

    console.log('🌸 Délice by Naoual — prêt.');
})();