// Creation of Array of Objects
var productsArr = [
    {
        image : "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EPXL17_600x600_0.jpg",
        shade : "EXTRA LIGHT BISQUE",
        name : "SKIN CORRECTOR STICK",
        description : "Discoloration neutralizer for undereyes and face",
        rating : 3,
        price : 32,
    },
    {
        image : "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ERFJ01_600x600_0.jpg",
        shade : "PORCELAIN",
        name : "SKIN CORRECTOR STICK",
        description : "Easy-to-use, long-lasting concealer stick",
        rating : 1,
        price : 32,
    },
    {
        image : "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ERGC03_600x600_0.jpg",
        shade : "SUN DIP",
        name : "LUXE EYE SHADOW",
        description : "Metallic Shimmer Eye Shadow",
        rating : 96,
        price : 38,
    }
]

// Mapping Array of Objects to Container-2
productsArr.map(function(elem){
    var mainDiv = document.createElement("div");

    var image = document.createElement("img");
    image.setAttribute("src", elem.image);

    var shade = document.createElement("h5");
    shade.innerText = elem.shade;

    var name = document.createElement("h4");
    name.innerText = elem.name;

    var description = document.createElement("p");
    description.innerText = elem.description;

    var star1 = document.createElement("i");
    star1.setAttribute("class","fa-solid fa-star");
    var star2 = document.createElement("i");
    star2.setAttribute("class","fa-solid fa-star");
    var star3 = document.createElement("i");
    star3.setAttribute("class","fa-solid fa-star");
    var star4 = document.createElement("i");
    star4.setAttribute("class","fa-solid fa-star");
    var star5 = document.createElement("i");
    star5.setAttribute("class","fa-solid fa-star");
    star5.innerText = " ("+elem.rating+") ";

    var starDiv = document.createElement("div");
    starDiv.setAttribute("class","rating");
    starDiv.append(star1,star2,star3,star4,star5);

    var price = document.createElement("p");
    price.innerText = "$"+elem.price+".00";

    var button = document.createElement("button");
    button.innerText = "ADD TO BAG";
    button.addEventListener("click", function(){
        addToCart(elem);
    });

    mainDiv.append(image,shade,name,description,starDiv,price,button);
    document.querySelector("#products2").append(mainDiv);
});

function addToCart(elem)
{
    var cartArr = JSON.parse(localStorage.getItem("cartItems")) || [];
    elem.quantity = 1;
    cartArr.push(elem);
    localStorage.setItem("cartItems", JSON.stringify(cartArr));
}

function openLogin(){
    window.location.href = window.location.origin+'/newlogin.html'
}