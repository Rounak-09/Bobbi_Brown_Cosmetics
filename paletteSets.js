var productDetails = [
    {   
        anc: "./miniLongWear.html",
        image: "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EW3C01_600x600_0.jpg",
        name: "MINI LONG WEAR CREAM SHADOW STICK TRIO",
        details: "3 glide-and-go eye shadow stick minis",
        rating: 10,
        price: 29,
    },
    {   
        anc:"",
        image: "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ETP301_600x600_0.jpg",
        name: "LASHES ON THE DOUBLE SET",
        details: "Double dose of our bestselling mascara",
        rating: 5,
        price: 40,
    },
    {   
        anc:"",
        image: "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ETP201_600x600_0.jpg",
        name: "JUST A HINT EXTRA LIP TINT SET",
        details: "Powerful tinted lip treatment",
        rating: 50,
        price: 60,
    },
    {   
        anc:"",
        image: "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ETR201_600x600_0.jpg",
        name: "EXTRA SKINCARE PACKAGE",
        details: "Extra care for face, eyes & lips",
        rating: 20,
        price:200 ,
    },
    {   
        anc:"",
        image: "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ENWG01_600x600_0.jpg",
        name: "REAL NUDES EYE SHADOW PALETTE",
        details: "Next-level neutral eye palette",
        rating: 30,
        price: 120,
    },
    {   
        anc:"",
        image: "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EPFM01_600x600_0.jpg",
        name: "THE ESSENTIAL MULTICOLOR EYE SHADOW PALETTE",
        details: "Next-level neutral eye palette",
        rating:23 ,
        price: 438,
    },
    {   
        anc:"",
        image: "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EM6X02_600x600_0.jpg",
        name: "BROW KIT",
        details: "On-the-go kit for defined brows",
        rating: 89,
        price: 64,
    },
    {   
        anc:"",
        image: "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ETF301_600x600_0.jpg",
        name: "MINI LUXE LIP COLOR DUO",
        details: "Bold, moisture-full lipstick duo",
        rating:34 ,
        price: 86,
    },
    {   
        anc:"",
        image: "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ERJTY1_600x600_0.jpg",
        name: "CLEANSE & CARE EXTRA SKINCARE SET",
        details: "four revitalizing, glow-boosting essentials",
        rating: 63,
        price: 289,
    },
    {   
        anc:"",
        image: "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_555259_600x600_0.jpg",
        name: "EXTRA LIP TINT DUO",
        details: "Sheer,color-enhancing lip balm",
        rating: 28,
        price: 390,
    },
]

productDetails.map(function(elem){
    var head = document.createElement("div");

    var anc = document.createElement("a");
    anc.setAttribute("href", elem.anc);

    var image = document.createElement("img");
    image.setAttribute("src", elem.image);

    anc.append(image);

    var name = document.createElement("h4");
    name.innerText = elem.name;

    var details = document.createElement("p")
    details.innerText = elem.details;

    var star1 = document.createElement("span");
    star1.setAttribute("class","material-icons-outlined");
    star1.innerText = "star";
    var star2 = document.createElement("span");
    star2.setAttribute("class","material-icons-outlined");
    star2.innerText = "star";
    var star3 = document.createElement("span");
    star3.setAttribute("class","material-icons-outlined");
    star3.innerText = "star";
    var star4 = document.createElement("span");
    star4.setAttribute("class","material-icons-outlined");
    star4.innerText = "star_half";
    var star5 = document.createElement("span");
    star5.setAttribute("class","material-icons-outlined");
    star5.innerText = "star_border";

    var star6 = document.createElement("span");
    star6.innerText = "("+elem.rating+")";

    var starMain = document.createElement("p");
    starMain.setAttribute("class","rating");
    starMain.append(star1,star2,star3,star4,star5,star6);
    
    var price = document.createElement("p");
    price.innerText = "$"+elem.price+".00";

    var button = document.createElement("button");
    button.innerText = "ADD TO BAG";

    head.append(anc,name,details,starMain,price,button);
    document.querySelector("#body").append(head);

});