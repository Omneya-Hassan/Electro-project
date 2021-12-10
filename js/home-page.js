$(document).ready(function () {
    // niceScroll
  
    $("body").niceScroll({
      cursorcolor: "#fcb416",
      cursorwidth: "7px",
      cursorborder: "1px solid #fcb416",
    });

  //  card button & popup

    $(".card a.btn").on("click", function (e) {
      e.preventDefault();
  
      $(this).css({'background-color': "#fcb416",
       "color": "#fff",
        "box-shadow": "none"});
      $(this).parents('.card').addClass("disabled");
  
      $(".popup").css("display", "flex").fadeIn(1000).delay(1000).fadeOut(1000);

      var ItemsNumber = parseInt($(".second-navbar .cart-button .btn span").text()) + 1;
      localStorage.setItem("cartNumber", ItemsNumber);
  
      var Items = localStorage.getItem("cartNumber");
      Items = parseInt(Items);
  
      $(".second-navbar .cart-button .btn span").text(Items);
    });



    $(".second-navbar .input-group-prepend .dropdown-item").on("click", function () {
      var text = $(this).text();
      $(".second-navbar .input-group-prepend > .btn").text(text);
    });
  // cart-page functions
  //calc price
  var calcItems = 0;
  $('.cart table td .amount .total-price span').each(function () {
    calcItems +=parseInt($(this).text());
    $('.cart-price .total span').text(calcItems);
  $('.final-price .table table td:nth-child(2) .Items-price').text(calcItems);
  $('.second-navbar .form-inline .btn span').text(calcItems);
  var subtotal = parseInt($('.final-price .table table td:nth-child(2) .Items-price').text())
  var delivery = parseInt($('.final-price table td:nth-child(2) .Items-delivery').text());
  var discount = parseInt($('.final-price table td:nth-child(2) .discount').text());
  $('.final-price .table table td:nth-child(2) .total').text((subtotal+delivery) - discount);
  });

   //cloes button function/remove item from cart
$('.cart table td .amount .close').on('click', function(){
 var itemPrice = parseInt($(this).parents('.amount').find('.total-price span').text());
 var TotalItemsprice = $('.cart-price .total span').text();
 TotalItemsprice = parseInt(TotalItemsprice);
 $('.cart-price .total span').text(TotalItemsprice - itemPrice);
 $('.final-price .table table td:nth-child(2) .Items-price').text(TotalItemsprice - itemPrice);
 $('.second-navbar .form-inline .btn span').text(TotalItemsprice - itemPrice);
 var subtotal = parseInt($('.final-price .table table td:nth-child(2) .Items-price').text())
 var delivery = parseInt($('.final-price table td:nth-child(2) .Items-delivery').text());
 var discount = parseInt($('.final-price table td:nth-child(2) .discount').text());
 $('.final-price .table table td:nth-child(2) .total').text((subtotal+delivery) - discount);

 $(this).parents('tr').fadeOut();

});

  //add more than one item
$('.cart table td .amount .input-group-append .btn').on('click', function(){
  numberOfItems = parseInt($(this).parents('.input-group').find('.form-control').val());
  $(this).parents('.input-group').find('.form-control').val(numberOfItems + 1);

  var mainPrice = parseInt($(this).parents('td').find('.product-name .price span').text());
  var itemPrice = parseInt($(this).parents('.amount').find('.total-price span').text());
  $(this).parents('.amount').find('.total-price span').text(mainPrice + itemPrice);
  var TotalItemsprice = $('.cart-price .total span').text();
  TotalItemsprice = parseInt(TotalItemsprice);
  $('.cart-price .total span').text(TotalItemsprice + mainPrice);
  $('.final-price .table table td:nth-child(2) .Items-price').text(TotalItemsprice + mainPrice);
  $('.second-navbar .form-inline .btn span').text(TotalItemsprice + mainPrice);
  var subtotal = parseInt($('.final-price .table table td:nth-child(2) .Items-price').text())
  var delivery = parseInt($('.final-price table td:nth-child(2) .Items-delivery').text());
  var discount = parseInt($('.final-price table td:nth-child(2) .discount').text());
  $('.final-price .table table td:nth-child(2) .total').text((subtotal+delivery) - discount);
 

});

// decrease button

$('.cart table td .amount .input-group-prepend .btn').on('click', function(){
  numberOfItems = parseInt($(this).parents('.input-group').find('.form-control').val());
  $(this).parents('.input-group').find('.form-control').val(numberOfItems - 1);
  var mainPrice = parseInt($(this).parents('td').find('.product-name .price span').text());
  var itemPrice = parseInt($(this).parents('.amount').find('.total-price span').text());
  var TotalItemsprice = $('.cart-price .total span').text();
  TotalItemsprice = parseInt(TotalItemsprice);
  $(this).parents('.amount').find('.total-price span').text(itemPrice - mainPrice);
  $('.cart-price .total span').text(TotalItemsprice - mainPrice);
  $('.final-price .table table td:nth-child(2) .Items-price').text(TotalItemsprice - mainPrice);
  $('.second-navbar .form-inline .btn span').text(TotalItemsprice - mainPrice);
  var subtotal = parseInt($('.final-price .table table td:nth-child(2) .Items-price').text())
  var delivery = parseInt($('.final-price table td:nth-child(2) .Items-delivery').text());
  var discount = parseInt($('.final-price table td:nth-child(2) .discount').text());
  $('.final-price .table table td:nth-child(2) .total').text((subtotal+delivery) - discount);
value = parseInt($(this).parents('.input-group').find('.form-control').val());
  if( value == 0){
    $(this).parents('tr').fadeOut();
  
     }

});




});