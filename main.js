// variables para esuchar un evento
const menuEmail = document.querySelector('.navbar-email');
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const menuBurguerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const productDetailContainer = document.querySelector('#productDetail')
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurguerIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle('inactive');
  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive');
  }
  
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
  
  if (!isAsideClosed) {
      shoppingCartContainer.classList.add('inactive'); 
    }
    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');
  }
  

  function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive'); 
  }
  
  const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
  
  if (!isProductDetailClosed) {
    productDetailContainer.classList.add('inactive'); 
  }
  
  shoppingCartContainer.classList.toggle('inactive');
}


  


function openProductDetailAside () {
  shoppingCartContainer.classList.add('inactive');
  productDetailContainer.classList.remove('inactive')
}

function closeProductDetailAside () {
  productDetailContainer.classList.add('inactive')

}

const productList = [];
productList.push({
  name: 'Bicicleta',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'TV',
  price: 220,
  image: 'https://images.pexels.com/photos/6316063/pexels-photo-6316063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
  name: 'Computador gaming',
  price: 20000,
  image: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});

productList.push({
  name: 'Mesa de madera',
  price: 1620,
  image: 'https://images.pexels.com/photos/2451264/pexels-photo-2451264.jpeg?cs=srgb&dl=pexels-scott-webb-2451264.jpg&fm=jpg',
});

productList.push({
  name: 'Lampara de lava',
  price: 620,
  image: 'https://images.pexels.com/photos/5677999/pexels-photo-5677999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});

productList.push({
  name: 'Llave inglesa',
  price: 70,
  image: 'https://images.pexels.com/photos/210881/pexels-photo-210881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});

productList.push({
  name: 'Nevera',
  price: 2670,
  image: 'data:image/jpeg;base64,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',
});

productList.push({
  name: 'Mouse',
  price: 320,
  image: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=1600',
});

productList.push({
  name: 'Teclado',
  price: 2620,
  image: 'https://images.pexels.com/photos/1714205/pexels-photo-1714205.jpeg?cs=srgb&dl=pexels-josh-sorenson-1714205.jpg&fm=jpg',
});

productList.push({
  name: 'Tablet',
  price: 6320,
  image: 'https://images.pexels.com/photos/3785868/pexels-photo-3785868.jpeg?cs=srgb&dl=pexels-ravindar-negi-3785868.jpg&fm=jpg',
});

productList.push({
  name: 'Mando de Playstation',
  price: 920,
  image: 'https://images.pexels.com/photos/2885014/pexels-photo-2885014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});

productList.push({
  name: 'Camara',
  price: 350,
  image: 'https://images.pexels.com/photos/5856757/pexels-photo-5856757.jpeg?cs=srgb&dl=pexels-ruvim-5856757.jpg&fm=jpg',
});

productList.push({
  name: 'Baterias recargables',
  price: 10,
  image: 'https://images.pexels.com/photos/6015268/pexels-photo-6015268.jpeg?auto=compress&cs=tinysrgb&w=1600',
});

productList.push({
  name: 'Audifonos',
  price: 120,
  image: 'https://media.istockphoto.com/photos/red-headphones-isolated-picture-id835148968?b=1&k=20&m=835148968&s=612x612&w=0&h=pkLH-lI3Y2RM72Nruj7nN8k2LZG85nFa_BrpnSUpqlA=',
});
function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    // product= {name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetailAside );
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
  
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
  
    productInfoFigure.appendChild(productImgCart);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);
