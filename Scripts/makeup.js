
var cartArr = JSON.parse(localStorage.getItem("cartItems")) || [];

var productDetails = [
    {   
        anc: "",
        image: "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_E1LM01_600x600_0.jpg",
        name: "SKIN CORRECTOR STICK",
        details: "Discoloration neutralizer for undereyes & face",
        rating: 10,
        price: 29,
    },
    {   
        anc: "",
        image: "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EGXR04_600x600_0.jpg",
        name: "SKIN CONCEALER STICK",
        details: "Easy-to-use, long-lasting concealer stick",
        rating: 1,
        price: 32,
    },

    {
        details: "NEW",
        before: "SKIN ",
        after: "CORRECTOR STICK",
        btn: "SHOP NOW",
    },
    {   
        anc: "",
        image: "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EER901_600x600_0.jpg",
        name: "HIGHLIGHTING POWDER",
        details: "Pearlescent Glow Highlighter",
        rating: 181,
        price: 50,
    },    
    {   
        anc: "",
        image: "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ENPT01_600x600_0.jpg",
        name: "EXTRA LIP TINT",
        details: "Color-Enhancing Lip Balm",
        rating: 339,
        price: 34,
    },    
    {   
        anc: "",
        image: "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_E96E40_600x600_0.jpg",
        name: "SOOTHING CLEANSING OIL",
        details: "Makeup Remover and Face Cleanser",
        rating: 10,
        price: 50,
    }, 
    {
        name1: "LET'S CHAT",
        name2: "Need advice? Our artists are here to help with Live Chat. Plus, get personalized recommendations when you upload a photo.", 
        name3: "CHAT NOW",
        name4: "The glowing reviews are in. See whateveryone’s learning with Live Chat.",
        name5: "READ REVIEWS",
        image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bobbi-brown-skin-long-wear-crop-1551183510.jpg?crop=0.529xw:1.00xh;0.231xw,0&resize=980:*",
    }  ,
    {   
        anc: "",
        image: "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EFAA01_600x600_0.jpg",
        name: "MINI LONG WEAR CREAM SHADOW STICK TRIO",
        details: "3 glide-and-go eye shadow stick minis",
        rating: 2,
        price: 29,
    },    
    {   
        anc: "",
        image: "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EM4201_600x600_0.jpg",
        name: "JUST A HINT EXTRA LIP TINT SET",
        details: "Powerful tinted lip treatment",
        rating: 39,
        price: 60,
    },    
    {   
        anc: "",
        image: "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EMCK07_600x600_0.jpg",
        name: "LASHES ON THE DOUBLE SET",
        details: "Double dose of our bestselling mascara",
        rating: 7,
        price: 65,
    },    
    {   
        anc: "",
        image: "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EH2126_600x600_0.jpg",
        name: "EXTRA SKINCARE PACKAGE",
        details: "Metallic Shimmer Eye Shadow",
        rating: 5,
        price: 29,
    },    
    {   
        anc: "",
        image: "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_E9TN01_600x600_0.jpg",
        name: "LUXE EYE SHADOW",
        details: "Metallic Shimmer Eye Shadow",
        rating: 24,
        price: 32,
    },    
    {   
        anc: "",
        image: "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EA6C17_600x600_0.jpg",
        name: "INTENSIVE SERIUM CONCEALER",
        details: "Brightens and boosts hydration",
        rating: 2,
        price: 45,
    },   
     {   
        anc: "",
        image: "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_E65Y01_600x600_0.jpg",
        name: "LONG WEAR CREAM SHADOW STICK",
        details: "Long-Lasting Cream Eye Shadow",
        rating: 36,
        price: 305,
    },   
     {   
        anc: "",
        image: "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_E0KK07_600x600_0.jpg",
        name: "EXTRA REPAIR EYE CREAM INTENSE",
        details: "Skin loving. Planet conscious.",
        rating: 38,
        price: 95,
    },  
    {   
        anc: "",
        image: "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EPHC01_600x600_0.jpg",
        name: "EXTRA REPAIR EYE CREAM INTENSE REFILL",
        details: "Skin loving. Planet conscious.",
        rating: 34,
        price: 65,
    },    
    {   
        anc: "",
        image: "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_E39Y01_600x600_0.jpg",
        name: "EXTRA REPAIR MOISTURE CREAM INTENSE",
        details: "Replenishing, peptide-infused cream",
        rating: 2,
        price: 98,
    },
    {   
        anc: "",
        image: "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_E7YW01_600x600_0.jpg",
        name: "EXTRA REPAIR MOISTURE CREAM INTENSE REFILL",
        details: "Refill. Reuse. Repeat.",
        rating: 23,
        price: 85,
    },
    {   
        anc: "",
        image: "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EPH201_600x600_0.jpg",
        name: "EXTRA CLEANSING BALM",
        details: "Purifying, conditioning cleanser",
        rating: 34,
        price: 87,
    },
    {   
        anc: "",
        image: "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_E65X01_600x600_0.jpg",
        name: "DELUXE SIZE VITAMIN ENRICHED FACE BASE",
        details: "Moisturizer and primer in one",
        rating: 283,
        price: 89,
    },
    {   
        anc: "",
        image: "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EPGN01_600x600_0.jpg",
        name: "MINI VITAMIN ENRICHED FACE BASE",
        details: "Oil-free moisturizer and primer",
        rating: 28,
        price: 29,
    },
    
]

productDetails.map(function(elem,index){

    if(index==2){

        var head = document.createElement("div");
        head.setAttribute("class","corrector")

        var details = document.createElement("p");
        details.innerText = elem.details;

        var name = document.createElement("h3");
        name.innerText = elem.before;

        var name2 = document.createElement("h3");
        name2.innerText = elem.after;


        var btn = document.createElement("button");
        btn.innerText = elem.btn;

        head.append(details,name,name2,btn);
        document.querySelector("#body").append(head);
    }
    else if(index==6){
        
        var head = document.createElement("div");
        head.setAttribute("class","newCorrector")
        // Sky
        var sky = document.createElement("div");

        var name1 = document.createElement("h4");
        name1.innerText = elem.name1;

        var name2 = document.createElement("p");
        name2.innerText = elem.name2;

        var name3 = document.createElement("button");
        name3.innerText = elem.name3;

        var name4 = document.createElement("p");
        name4.innerText = elem.name4;

        var name5 = document.createElement("a");
        name5.setAttribute("href","")
        name5.innerText = elem.name5;

        sky.append(name1,name2,name3,name4,name5);
        // Sea
        var sea = document.createElement("div");

        var image = document.createElement("img");
        image.setAttribute("src",elem.image);

        sea.append(image)

        head.append(sky,sea);
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
        // cartArr.push("makeup");
        localStorage.setItem("cartItems",JSON.stringify(cartArr));
    }

});