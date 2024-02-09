// menú de correo
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

// mobile menu
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

// detalles del carrito
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');

// lista de productos (hechas con js)
const cardsContainer = document.querySelector('.cards-container');

// Detalle de productos
const divDetail = document.querySelector('.divDetail');
const productDetailClose = document.createElement('div');
productDetailClose.classList.add('product-detail-close');

// Flechita hacia atras en shopping-cart
const arrow = document.querySelector('.arrow');


// Funciones relacionadas con el menú
function toggleDesktopMenu() {
    shoppingCartContainer.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    divDetail.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    desktopMenu.classList.add('inactive');
    shoppingCartContainer.classList.add('inactive');
    divDetail.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    divDetail.classList.add('inactive');
    shoppingCartContainer.classList.toggle('inactive');
}

function openProductAside() {
    divDetail.classList.toggle('inactive');
}

function closeProductDetail() {
    divDetail.classList.add('inactive');
}
function backArrow() {
    shoppingCartContainer.classList.add('inactive');
    console.log('funciona')
}

// Función para renderizar productos
function renderProducts(arr) {
    for (const product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.src = product.image;
        productImg.addEventListener('click', openProductAside);


        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;

        const productName = document.createElement('p');
        productName.innerText = product.name;

        const productInfoDiv = document.createElement('div');
        const productInfoFigure = document.createElement('figure');
        const productImgcart = document.createElement('img');
        productImgcart.src = './Icons/bt_add_to_cart.svg';

        productInfo.append(productInfoDiv, productInfoFigure);
        productInfoDiv.append(productPrice, productName);
        productInfoFigure.appendChild(productImgcart);
        productCard.append(productImg, productInfo);
        cardsContainer.appendChild(productCard);
    }
}
// Funcion para renderizar detalles de los productos
function showDetails(product) {
    // Limpiar el contenido previo del divDetail
    divDetail.innerHTML = '';

    const productIconClose = document.createElement('img');
    productIconClose.src = './Icons/icon_close.png';

    const productImg = document.createElement('img');
    productImg.classList.add('productImg');
    productImg.src = product.image;

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;

    const productName = document.createElement('p');
    productName.innerText = product.name;

    const productDescription = document.createElement('p');
    productDescription.innerText = product.description;

    // button
    const productButton = document.createElement('button');
    productButton.classList.add('primary-button', 'add-to-cart-button');

    // Crear la imagen dentro del botón
    const addToCartImg = document.createElement('img');
    addToCartImg.src = './Icons/bt_add_to_cart.svg';
    addToCartImg.alt = 'add to cart';

    // Crear el texto dentro del botón
    const buttonText = document.createTextNode('Add to cart');

    productInfo.append(productPrice, productName, productDescription, productButton);
    productButton.append(addToCartImg, buttonText);

    productDetailClose.append(productImg, productIconClose);

    divDetail.append(productDetailClose, productImg, productInfo);
}

// Listener para los productos
function openProductAside(event) {
    // Obtener el producto específico al que se hizo clic
    const index = Array.from(cardsContainer.children).indexOf(event.target.closest('.product-card'));
    const product = productList[index];
    
    // Mostrar los detalles del producto específico
    showDetails(product);

    desktopMenu.classList.add('inactive');
    shoppingCartContainer.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    divDetail.classList.remove('inactive');
}

    // Añadir el listener a cada imagen de producto
    const productImgs = document.querySelectorAll('.product-card img');
    productImgs.forEach(img => {
        img.addEventListener('click', openProductAside);
});

// Listeners
menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailClose.addEventListener('click', closeProductDetail);
arrow.addEventListener('click', backArrow);



// Datos de detalles del producto


// Datos de productos
const productList = [];
    productList.push({
        name: 'Bike',
        price: 12700,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        description: 'With its practical position, this bike also fulfills a decorative function, add it to your hall or workspace.'
    });
    productList.push({
        name: 'Bicycle helmet',
        price: 1200,
        image: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto',
        description: 'Protect your head with this high-quality bicycle helmet, designed for both safety and style.'
    });
    productList.push({
        name: 'Bicycle helmet',
        price: 1600,
        image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg',
        description: 'Stay safe on the road or trail with this comfortable and durable bicycle helmet.'
    });
    productList.push({
        name: 'Bicycle helmet',
        price: 1500,
        image: 'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto',
        description: 'This bicycle helmet offers excellent protection and ventilation for your outdoor adventures.'
    });
    productList.push({
        name: 'Seat',
        price: 300,
        image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg',
        description: 'Upgrade your bicycle with this comfortable and stylish seat, perfect for long rides.'
    });
    productList.push({
        name: 'Tennis Mountain Bike',
        price: 2200,
        image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg',
        description: 'Conquer any terrain with this high-performance mountain bike, designed for tennis enthusiasts.'
    });
    productList.push({
        name: 'Sunglasses',
        price: 800,
        image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602',
        description: 'Protect your eyes from the sun and look stylish with these high-quality sunglasses.'
    });
    productList.push({
        name: 'Sunglasses',
        price: 600,
        image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603',
        description: 'Stay cool and comfortable on sunny days with these lightweight and durable sunglasses.'
    });
    productList.push({
        name: 'Bicycle seat bag',
        price: 876,
        image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg',
        description: 'Carry your essentials with ease with this convenient and stylish bicycle seat bag.'
    });


// Renderizar productos
renderProducts(productList);