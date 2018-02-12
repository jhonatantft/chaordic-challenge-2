// want to understand better? go to my repo https://github.com/jhonatantft/chaordic-challenge-2 and clone it
// this script and product.js will work properly within the project
window.onload = function(){

  var iframe = document.createElement('iframe');
  iframe.src = 'src/netfarma.html';

  var body = document.getElementsByTagName('body')[0];
  body.appendChild(iframe);

  setTimeout(function() {

    var style = document.createElement('link');
    style.href = '../public/css/style.css';

    // this css link belongs to the project on this repo, but you can use the real one. Don't forget to concatenate the getDateTime() at the end of the url
    // if you do so, probably you'll get a cross origin request error
    var link = iframe.contentDocument.head.querySelector('link[href="https://busca2.netfarma.com.br/css/neemu-styles-v1.css?20180210023436"]');
    link.href = style.href;

    var productInteraction = document.createElement('script');
    productInteraction.src = '../public/js/product.js';
    productInteraction.type = 'text/javascript';
    iframe.contentDocument.body.appendChild(productInteraction);

    appendModal();

  }, 5000);

  // Product detail modal
  function appendModal() {
    var modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';
    modalOverlay.id = 'modal-overlay';
    modalOverlay.setAttribute('style', 'display: none');
    modalOverlay.innerHTML = '<div id="product-modal" class="modal-style">'+
      '<span id="close-modal" class="close">&times;</span>'+
      '<div class="product-image-modal">' +
      '<img id="product-image-modal" src="" alt=""/>' +
      '</div>' +
      '<div class="product-detail-modal">' +
      '<h2 id="product-title-modal"></h2>' +
      '<p id="old-price-modal"></p>' +
      '<p id="new-price-modal"></p>' +
      '<p id="product-measurement-modal"></p>' +
      '<button class="btn-modal">Comprar</button>' +
      '</div>' +
      '</div>';
    iframe.contentDocument.body.appendChild(modalOverlay);
  }

  // Function to concatenate the neemu-styles url on the fly #not used, just a sample
    function getDateTime() {
      var now     = new Date(new Date().toLocaleString("en-UK",{timeZone:'Europe/London'}));
      var year    = now.getFullYear();
      var month   = now.getMonth()+1;
      var day     = now.getDate();
      var hour    = now.getHours();
      var minute  = now.getMinutes();
      var second  = now.getSeconds();
      if (month.toString().length == 1) {
        var month = '0'+month;
      }
      if (day.toString().length == 1) {
        var day = '0'+day;
      }
      if (hour.toString().length == 1) {
        var hour = '0'+hour;
      }
      if (minute.toString().length == 1) {
        var minute = '0'+minute;
      }
      if (second.toString().length == 1) {
        var second = '0'+second;
      }
      var dateTime = year+month+day+hour+minute+second;
      return dateTime;
    }
};