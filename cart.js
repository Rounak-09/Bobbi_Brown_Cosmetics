var cartArr = JSON.parse(localStorage.getItem("cartItems")) || [];

function displayCartItems(){

    document.getElementById("tableBody").innerHTML = "";

    cartArr.map(function(elem, index){
        var row = document.createElement("tr");

        var image = document.createElement("img");
        image.setAttribute("src", elem.image);

        var photo = document.createElement("td");
        photo.append(image);

        var name = document.createElement("td");
        name.innerText = elem.name;

        var quantity = document.createElement("td");

        deductButton = document.createElement("button");
        deductButton.innerText = "-";
        deductButton.setAttribute("class","quantityButton");
        deductButton.addEventListener("click", function(){
            decreaseQuantity(index);
        })

        quantity.textContent = elem.quantity;

        var addButton = document.createElement("button");
        addButton.innerText = "+";
        addButton.setAttribute("class","quantityButton");
        addButton.addEventListener("click", function(){
            increaseQuantity(index)
        });
        quantity.append(deductButton, addButton);

        var price = document.createElement("td");
        price.innerText = "$"+elem.price+".00";

        var total = document.createElement("td");
        total.innerText = "$"+(elem.price*elem.quantity)+".00";

        row.append(photo,name,quantity,price,total);
        document.getElementById("tableBody").append(row);
    });
}

displayCartItems(cartArr);
updateTotal();

function updateTotal(){
    var subTotal = cartArr.reduce(function (acc,elem){
        return acc + (elem.price*elem.quantity);
    },0);
    document.getElementById("subTotal").textContent = "$"+subTotal+".00";
    document.getElementById("total").textContent = "$"+subTotal+".00";
    document.getElementById("grandTotal").textContent = "$"+subTotal+".00";
    document.getElementById("Total").textContent = "$"+subTotal+".00";
}

function decreaseQuantity(index){
    cartArr[index].quantity--;
    localStorage.setItem("cartItems",JSON.stringify(cartArr));

    displayCartItems();
    updateTotal();
}

function increaseQuantity(index){
    cartArr[index].quantity++;
    localStorage.setItem("cartItems",JSON.stringify(cartArr));

    displayCartItems();
    updateTotal();
}