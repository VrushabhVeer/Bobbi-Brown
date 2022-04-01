var cartArr = JSON.parse(localStorage.getItem("cartItems")) || [];
    console.log(cartArr);

    var cartArr = JSON.parse(localStorage.getItem("cartItems"));
    console.log(cartArr)

    function displayData(cartArr) {
        document.querySelector(".ShippingCart").innerHTML = "";
        cartArr.map(function (elem, index, array) {

            var div = document.createElement("div");

            var img = document.createElement("img");
            img.setAttribute("src", elem.Image);
            img.setAttribute("class", "image")

            var name = document.createElement("p");
            name.innerText = elem.name;

            var tag = document.createElement("p");
            tag.innerText = elem.tag;

            var price = document.createElement("p");
            price.innerText = "$" + elem.price + " / " + "Qty" + " - " + elem.quant;

            var btn = document.createElement("button");
            btn.innerText = "+";

            btn.addEventListener("click", function () {
                increaseQuant(index);
            })

            var btn2 = document.createElement("button");
            btn2.innerText = "-";

            btn2.addEventListener("click", function () {
                decreaseQuant(index);
            })

            var deleteicon = document.createElement("i");
            deleteicon.className = "fa-solid fa-trash";
            deleteicon.addEventListener("click", function () {
                deleteItem(index)
            })

            div.append(img, name, tag, price, btn, btn2, deleteicon);
            document.querySelector(".ShippingCart").append(div);
        })
    }
    displayData(cartArr);

    function Total() {
        var cartTotal = cartArr.reduce(function (acc, elem, index) {
            return acc + (elem.price * elem.quant);
        }, 0);

        document.querySelector(".total").innerText = cartTotal;
    }
    Total();

    function increaseQuant(index) {
        cartArr[index].quant++;
        localStorage.setItem("cartItems", JSON.stringify(cartArr));
        displayData(cartArr);
        Total();
    }
    function decreaseQuant(index) {
        cartArr[index].quant--;
        localStorage.setItem("cartItems", JSON.stringify(cartArr));
        displayData(cartArr);
        Total();
    }
    function deleteItem(index) {
        cartArr.splice(index, 1);
        localStorage.setItem("cartItems", JSON.stringify(cartArr));
        displayData(cartArr);
        Total();
    }

    function myFunction(){
        window.location = "checkout.html"
    }