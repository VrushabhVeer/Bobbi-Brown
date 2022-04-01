var newProduct = [{
    Image: "https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_EPXL17_1080x1080_0.jpg",
    name: "SKIN CORRECTOR STICK",
    tag: "Discolored neutralizer for undereyes & face",
    price: 32,
},

{
    Image: "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ERFJ03_600x600_0.jpg",
    name: "SKIN CONCEALER STICK",
    tag: "Easy-to-use, long-lasting concealer stick",
    price: 32,
},

{
    Image: "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ETCW01_600x600_0.jpg",
    name: "HIGHLIGHTING POWDER",
    tag: "Pearl-infused illuminator",
    price: 56,
},

{
    Image: "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ETCY12_600x600_0.jpg",
    name: "EXTRA LIP TINT",
    tag: "Color-enhancing lip balm",
    price: 34,
},

{
    Image: "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ETCT01_600x600_0.jpg",
    name: "SOOTHING CLEANSING OIL",
    tag: "makeup Remover and Face Cleaner",
    price: 60,
},

{
    Image: "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ETP201_600x600_0.jpg",
    name: "JUST A HINT EXTRA LIP SET",
    tag: "Powerful tinted lip treatment",
    price: 56,
},

{
    Image: "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ETR201_600x600_0.jpg",
    name: "EXTRA SKINCARE PACKAGE",
    tag: "Extra care for face, eyes & lips",
    price: 125,
},

{
    Image: "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ERGC02_600x600_0.jpg",
    name: "LUXE EYE SHADOW",
    tag: "Metalic shimmer eye shadow",
    price: 38,
},

{
    Image: "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ETRR01_600x600_0.jpg",
    name: "INTENSIVE SERUM CONCEALER",
    tag: "Bright and boosts hydration",
    price: 45,
},

{
    Image: "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_E96E44_600x600_0.jpg",
    name: "LONG-WEAR CREAM SHADOW STICK",
    tag: "Our ultimate quick eye shadow stick",
    price: 30,
},

{
    Image: "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EM9301_600x600_0.jpg",
    name: "DELUX SIZE SOOTHING CLEANSING OIL",
    tag: "Value-sized gentle makeup-dissolving oil",
    price: 80,
},

{
    Image: "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EP7P01_600x600_0.jpg",
    name: "EXTRA REPAIRE EYE CREAM INTENSE",
    tag: "Revitalizing undereye treatment",
    price: 32,
},

{
    Image: "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EPHC01_600x600_0.jpg",
    name: "EXTRA REPAIR EYE INTENSE REFILL",
    tag: "Skin loving, planet conscious",
    price: 68,
},

{
    Image: "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EREP01_600x600_0.jpg",
    name: "EXTRA REPAIR MOISTURE CREAM INTENSE",
    tag: "Replenshing face cream with Vitamin C",
    price: 105,
},

{
    Image: "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ERER01_600x600_0.jpg",
    name: "EXTRA REPAIR MOISTURE CREAM INTENCE",
    tag: "Refil.Reuse.Repeat",
    price: 85,
},

{
    Image: "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ERAN01_600x600_0.jpg",
    name: "EXTRA CLEANSING BALM",
    tag: "Purifying, conditioning cleanser",
    price: 56,
},

{
    Image: "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EW3C01_600x600_0.jpg",
    name: "MINI LONG-WEAR CREAM SHADOW STICK",
    tag: "3 glide-and-go eye shadow stick minis",
    price: 29,
},

{
    Image: "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ETR501_600x600_0.jpg",
    name: "VITAMIN ENRICHED FACE BASE DUO",
    tag: "Multivitamin-enriched primer set",
    price: 64,
},

{
    Image: "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ET7C01_600x600_0.jpg",
    name: "DELUXE SIZE VITAMIN ENRICHED FACE BASE",
    tag: "Moisturizer and primer in one",
    price: 95,
},]

localStorage.setItem("newProductData", JSON.stringify("newProduct"));

var cartArr = JSON.parse(localStorage.getItem("cartItems")) || [];
function displayData() {
    document.querySelector("#container").innerHTML = "";
    newProduct.map(function (elem, index, array) {

        var div = document.createElement("div");

        var img = document.createElement("img");
        img.setAttribute("src", elem.Image);

        var name = document.createElement("h4");
        name.innerText = elem.name;

        var tag = document.createElement("p");
        tag.innerText = elem.tag;

        var price = document.createElement("p");
        price.innerText = "$ " + elem.price;

        // add to cart button

        var cart = document.createElement("button");
        cart.innerText = "ADD TO BAG";
        cart.addEventListener("click", function () {
            addToCart(elem);
        })

        div.append(img, name, tag, price, cart);
        document.querySelector("#container").append(div);
    })

    function addToCart(elem) {
    console.log(elem);
    elem.quant = 1;
    cartArr.push(elem);
    console.log(cartArr)
    localStorage.setItem("cartItems", JSON.stringify(cartArr));
   }

}
displayData(newProduct);

function sortItems() {
    var sorting = document.querySelector("#sorter").value;

    if (sorting == "H2L") {
        newProduct.sort(function (a, b) {
            return b.price - a.price;
        })
        displayData(newProduct);

    }
    else if (sorting === "L2H") {
        newProduct.sort(function (a, b) {
            return a.price - b.price;
        })
        displayData(newProduct);
    }
}
