
var cartArr = JSON.parse(localStorage.getItem("cartItems")) || [];
cartArr = "";
localStorage.setItem("cartItems",JSON.stringify(cartArr));