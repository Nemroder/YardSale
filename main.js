//opciones en header al hacer touch correo
    const menuEmail = document.querySelector('.navbar-email');
    const desktopMenu = document.querySelector('.desktop-menu');

    menuEmail.addEventListener('click', toggleDesktopMenu);

    function toggleDesktopMenu() {
        aside.classList.add('inactive');//Este cierra
        mobileMenu.classList.add('inactive');

        desktopMenu.classList.toggle('inactive');//Este abre 
    }

//mobile menu
    const menuHamIcon = document.querySelector('.menu');
    const mobileMenu = document.querySelector('.mobile-menu');

    menuHamIcon.addEventListener('click', toggleMobileMenu);

    function toggleMobileMenu() {
        desktopMenu.classList.add('inactive');
        aside.classList.add('inactive');

        mobileMenu.classList.toggle('inactive');
    }

//detalles de carrito
    const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
    const aside = document.querySelector('.product-detail');

    menuCarritoIcon.addEventListener('click', toggleCarritoAside);

    function toggleCarritoAside() {
        desktopMenu.classList.add('inactive');
        mobileMenu.classList.add('inactive');

        aside.classList.toggle('inactive');
    }

    const productList = [];
    productList.push ({
        name:'Bike',
        price: 12700,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    });
    productList.push ({
        name:'Bicycle helmet',
        price: 1200,
        image: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
    });
    productList.push ({
        name:'Bicycle helmet',
        price: 1600,
        image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg'
    });
    productList.push ({
        name:'Bicycle helmet',
        price: 1500,
        image: 'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
    });
    productList.push ({
        name:'Seat',
        price: 300,
        image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg'
    });
    productList.push ({
        name:'Tennis Montain Bike',
        price: 2200,
        image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg'
    });
    productList.push ({
        name:'Sunglasses',
        price: 800,
        image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602'
    });
    productList.push ({
        name:'Sunglasses',
        price: 600,
        image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603'
    });
    productList.push ({
        name:'Bicycle seat bag',
        price: 876,
        image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg'
    }); 

    // <div class="product-card">
    //     <img src="./Images/bici.jpeg" alt="">

    //     <div class ="product-info">
    //         <div>
    //             <p>$120,00</p>
    //             <p>Bike</p>
    //         </div>
    //         <figure>
    //             <img src="./Icons/bt_add_to_cart.svg" alt="">
    //         </figure>
    //     </div>
    // </div>

    const cardsContainer = document.querySelector('.cards-container');
    
    // Se define la estructura para la lista de productos
    
    function renderProducts(arr) {
        for(product of productList) {
    
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
        
            const productImg = document.createElement('img');
            productImg.setAttribute('src', product.image);
        
            const productInfo = document.createElement('div');
            productInfo.classList.add('product-info');
    
            const productInfoDiv = document.createElement('div');
    
            const productPrice = document.createElement('p');
            productPrice.innerText = '$' + product.price;
    
            const productName = document.createElement('p');
            productName.innerText = product.name;
    
            const productInfoFigure = document.createElement('figure');
            const productImgcart = document.createElement('img');
            productImgcart.setAttribute('src', './Icons/bt_add_to_cart.svg');
    
            productInfo.append(productInfoDiv, productInfoFigure);
            productInfoDiv.append(productPrice, productName);//ProductInfoDiv es el contenedor de padre de lo que hay dentro del parentesisl
            productInfoFigure.appendChild(productImgcart);
            productCard.append(productImg, productInfo);
            cardsContainer.appendChild(productCard);
    
    
        }
    }

    renderProducts(productList)