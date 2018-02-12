(function (){

  function getProductItem(e) {
    var parentProductViewCart = e.parentNode;
    return parentProductViewCart.parentNode;
  }

  function getProductTitle(e) {
    return getProductItem(e).querySelector('.product-item__title').childNodes[1].innerHTML;
  }

  function getProductOldPrice(e) {
    return getProductItem(e).querySelector('.details-product-old-price').childNodes[1].innerHTML;
  }

  function getProductNewPrice(e) {
    return getProductItem(e).querySelector('.details-product-new-price').childNodes[1].innerHTML;
  }

  function getProductMeasurement(e) {
    return getProductItem(e).querySelector('.details-product-measurement').innerHTML;
  }

  // Get image attribute
  function getImage(e) {
    var imageLink = getProductItem(e).childNodes[3];
    if (imageLink.className !== 'product-item__image') {
      imageLink = getProductItem(e).childNodes[1];
    }
    return imageLink.querySelector('img');
  }

  // Show modal of specific product
  function showModal(e) {
    var modal = document.querySelector('#modal-overlay');
    modal.setAttribute('style', 'display: block');

    var modalImage = document.querySelector('#product-image-modal');
    modalImage.src = getImage(e).src;

    var modalTitle = document.querySelector('#product-title-modal');
    modalTitle.innerHTML = getProductTitle(e);

    var modalOldPrice = document.querySelector('#old-price-modal');
    modalOldPrice.innerHTML = 'de ' + getProductOldPrice(e) + ' por';

    var modalNewPrice = document.querySelector('#new-price-modal');
    modalNewPrice.innerHTML = getProductNewPrice(e);

    var modalMeasurement = document.querySelector('#product-measurement-modal');
    modalMeasurement.innerHTML = 'Medida: ' + getProductMeasurement(e);

    var closeModal = document.querySelector('#close-modal');
    closeModal.addEventListener('click', function () {
      modal.setAttribute('style', 'display: none');
    });
  }

  // View icon listener
  function addListenerToViewIcon(e) {
    var viewId = document.getElementById(e);
    viewId.addEventListener('click', function () {
      showModal(viewId);
    })
  }

  // Cart icon listener
  function addListenerToCartIcon(e) {
    var cartId = document.getElementById(e);
    cartId.addEventListener('click', function () {
      var addProduct = getProductItem(cartId).querySelector('.product-item__item-button');
      var att = document.createAttribute('onclick');
      att.value = addProduct.getAttribute('onclick');
      cartId.setAttributeNode(att);
      cartId.click();
    })
  }

  // New feature
  var productItem = document.getElementsByClassName('product-item');

  for (var i = 0; i < productItem.length; i++) {

    var div = document.createElement('div');
    div.className = 'product-view-cart';
    div.setAttribute('style', 'display: none');

    var view = document.createElement('div');
    view.className = 'product-view-icon';
    view.id = 'product-view-icon-' + i;

    var cart = document.createElement('div');
    cart.className = 'product-cart-icon';
    cart.id = 'product-cart-icon-' + i;

    div.appendChild(view);
    div.appendChild(cart);
    productItem[i].appendChild(div);
    addListenerToViewIcon(view.id);
    addListenerToCartIcon(cart.id);
  }

})();