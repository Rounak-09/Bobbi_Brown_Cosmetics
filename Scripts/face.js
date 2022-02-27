
var cartArr = JSON.parse(localStorage.getItem("cartItems")) || [];

var productDetails = [
    {   
        anc: "",
        image: "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_E1LM01_600x600_0.jpg",
        name: "VITAMIN ENRICHED FACE BASE",
        details: "Multitasking, moisturizing primer",
        rating: 23,
        price: 6,
    },
    {   
        anc: "",
        image: "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ETRR01_600x600_0.jpg",
        name: "INTENSIVE SERUM CONCEALER",
        details: "Brightens and boosts hydration",
        rating: 2,
        price: 48,
    },
    {
        name1: "10X CORDYCEPS.",
        name2: "ALL-DAY RADIANCE.",
        name3: "NEW INTENSIVE SERUM FOUNDATION SPF 40/30",
        btn: "SHOP NOW",
    },
    {   
        anc: "",
        image: "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EPXL17_600x600_0.jpg",
        name: "SKIN CORRECTOR STICK",
        details: "Discoloration neutralizer for undereyes & face",
        rating: 238,
        price: 349,
    },
    {   
        anc: "",
        image: "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ERFJ09_600x600_0.jpg",
        name: "SKIN CONCEALER STICK",
        details: "Easy-to-use, long-lasting concealer stick",
        rating: 23,
        price: 353,
    },
    {   
        anc: "",
        image: "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EGXR04_600x600_0.jpg",
        name: "SKIN LONG WEAR WEIGHTLESS FOUNDATION SPF15",
        details: "Medium-Coverage Matte Foundation",
        rating: 2325,
        price: 289,
    },
    {
        name1: "TRY IT ON",
        name2: "Find your perfect shade-right from your phone. Scan the QR code to explore our formulas and get matched.",
        image: "https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/core_market_full/generator/dist/generator/assets/images/websiteQRCode_noFrame.png",
    },
    {   
        anc: "",
        image: "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EME717_600x600_0.jpg",
        name: "INTENSIVE SERUM FOUNDATION SPF 40/30",
        details: "Radiance-boosting foundation",
        rating: 3482,
        price: 3428,
    },
    {   
        anc: "",
        image: "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EA6C17_600x600_0.jpg",
        name: "SKIN FOUNDATION STICK",
        details: "Moisturizing Stick Foundation",
        rating: 382,
        price: 4389,
    },
    {   
        anc: "",
        image: "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_E2LE17_600x600_0.jpg",
        name: "SKIN FOUNDATION SPF 15",
        details: "Buildable, Natural Foundation",
        rating: 43,
        price: 544,
    },
    {   
        anc: "",
        image: "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ET5K11_600x600_0.jpg",
        name: "SKIN WEIGHTLESS POWDER FOUNDATION",
        details: "Silky, oil-free powder formula.",
        rating: 289,
        price: 2326,
    },
    {   
        anc: "",
        image: "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ENHM11_600x600_0.jpg",
        name: "SKIN LONG WEAR FLUID POWDER FOUNDATION SPF 20",
        details: "Liquid-to-powder foundation",
        rating: 34,
        price: 589,
    },
    {   
        anc: "",
        image: "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ENPT01_600x600_0.jpg",
        name: "SHEER FINISH PRESSED POWDER",
        details: "Oil-Absorbing Setting Powder",
        rating: 298,
        price: 224,
    },
    {   
        anc: "",
        image: "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ENPW01_600x600_0.jpg",
        name: "SHEER FINISH LOOSE POWDER",
        details: "Oil-Absorbing Setting Powder",
        rating: 231,
        price: 329,
    },
    {
        name1: "THE FOUNDATION GUIDE",
        name2: "Discover your perfect foundation formula by comparing our skin-loving lineup.",
        btn: "EXPLORE NOW",
    },
    {   
        anc: "",
        image: "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_E6XW02_600x600_0.jpg",
        name: "CORRECTOR",
        details: "Dark Circles Color Corrector",
        rating: 42,
        price: 432,
    },
    {   
        anc: "",
        image: "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_E6XT08_600x600_0.jpg",
        name: "CREAMY CONCEALER KIT",
        details: "All-in-one undereye-brightening kit",
        rating: 234,
        price: 657,
    },
    {   
        anc: "",
        image: "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EH9A08_600x600_0.jpg",
        name: "INSTANT FULL COVER CONCEALER",
        details: "Undereye Dark Circles Concealer",
        rating: 90,
        price: 870,
    },
    {
        name1: "COMPLEXION HOW TOS",
        name2: "From keeping your skin hydrated to evening out your skin tone, we have all the tips,tricks and tools you'll need to put your best face forward.",
        btn: "EXPLORE NOW",
    },
    {   
        anc: "",
        image: "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EN6F14_600x600_0.jpg",
        name: "INTENSIVE SKIN SERUM CONCEALER",
        details: "Brightens and boosts hydration",
        rating: 42,
        price: 543,
    },
    {   
        anc: "",
        image: "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EHLL01_600x600_0.jpg",
        name: "PRIMER PLUS MATTIFIER",
        details: "Oil-absorbing face primer",
        rating: 432,
        price: 355,
    },
    {   
        anc: "",
        image: "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EKLT01_600x600_0.jpg",
        name: "PRIMER PLUS PROTECTION SPF 50",
        details: "Protective face primer",
        rating: 21,
        price: 534,
    },
    {   
        anc: "",
        image: "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ERE011_600x600_0.jpg",
        name: "MINI SKIN LONG WEAR WEIGHTLESS FOUNDATION SPF 15",
        details: "16-hour, medium coverage matte formula",
        rating: 3849,
        price: 4738,
    },
    {   
        anc: "",
        image: "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_E3CA01_600x600_0.jpg",
        name: "FOUNDATION BRUSH",
        details: "Expertly angled face brush",
        rating: 42,
        price: 50,
    },
    {   
        anc: "",
        image: "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_E96N01_600x600_0.jpg",
        name: "FULL COVERAGE FACE BRUSH",
        details: "Flawless, HD finish face blender",
        rating: 201,
        price: 501,
    },
    {   
        anc: "",
        image: "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_E55501_600x600_0.jpg",
        name: "POWDER BRUSH",
        details: "Gently tapered setting brush",
        rating: 48,
        price: 239,
    },
    {   
        anc: "",
        image: "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_E55901_600x600_0.jpg",
        name: "BRONZER BRUSH",
        details: "Soft brush for seamless finish",
        rating: 42,
        price: 4423,
    },
    {   
        anc: "",
        image: "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EMCY01_600x600_0.jpg",
        name: "PRECISE BUFFING BRUSH",
        details: "Angular foundation brush",
        rating: 238,
        price: 349,
    },
    
    
]

productDetails.map(function(elem,index){

    if(index==2){

        var head = document.createElement("div");
        head.setAttribute("class","corrector1");

        var name1 = document.createElement("h3");
        name1.innerText = elem.name1;

        var name2 = document.createElement("h3");
        name2.innerText = elem.name2;

        var name3 = document.createElement("p");
        name3.innerText = elem.name3;

        var btn = document.createElement("button");
        btn.innerText = elem.btn;

        head.append(name1,name2,name3,btn);
        document.querySelector("#body").append(head);
    }
    else if(index==6){
        
        var head = document.createElement("div");
        head.setAttribute("class","corrector2");

        var name1 = document.createElement("h3");
        name1.innerText = elem.name1;

        var name2 = document.createElement("p");
        name2.innerText = elem.name2;

        var image = document.createElement("img");
        image.setAttribute("src",elem.image);

        head.append(name1,name2,image);
        document.querySelector("#body").append(head);
    }
    else if(index==14){
        
        var head = document.createElement("div");
        head.setAttribute("class","corrector3");

        var name1 = document.createElement("h3");
        name1.innerText = elem.name1;

        var name2 = document.createElement("p");
        name2.innerText = elem.name2;

        var btn = document.createElement("button");
        btn.innerText = elem.btn;

        head.append(name1,name2,btn);
        document.querySelector("#body").append(head);

    }
    else if(index==18){

        var head = document.createElement("div");
        head.setAttribute("class","corrector4");

        var name1 = document.createElement("h3");
        name1.innerText = elem.name1;

        var name2 = document.createElement("p");
        name2.innerText = elem.name2;

        var btn = document.createElement("button");
        btn.innerText = elem.btn;

        head.append(name1,name2,btn);
        document.querySelector("#body").append(head);
    }
    else{
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
    star4.innerText = "star";
    var star5 = document.createElement("span");
    star5.setAttribute("class","material-icons-outlined");
    star5.innerText = "star_half";

    var star6 = document.createElement("span");
    star6.innerText = "("+elem.rating+")";

    var starMain = document.createElement("p");
    starMain.setAttribute("class","rating");
    starMain.append(star1,star2,star3,star4,star5,star6);
    
    var price = document.createElement("p");
    price.innerText = "$"+elem.price+".00";

    var button = document.createElement("button");
    button.innerText = "ADD TO BAG";
    button.addEventListener("click",function(){
        addToBag(elem);
    })

    head.append(anc,name,details,starMain,price,button);
    document.querySelector("#body").append(head);
    }
    
    // Add To Bag
    function addToBag(elem){
        elem.quantity = 1;
        cartArr.push(elem);
        // cartArr.push("face");
        localStorage.setItem("cartItems",JSON.stringify(cartArr));
    }
});