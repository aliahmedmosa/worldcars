let productsArr = [{
        id: "1",
        name: "BMW",
        category: "bmw",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        price: "500.000",
        src: "img/car1.png"
    },
    {
        id: "2",
        name: "Mercedes benz",
        category: "mercedes",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        price: "700.000",
        src: "img/car2.png"
    },
    {
        id: "3",
        name: "Mercedes",
        category: "mercedes",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        price: "400.000",
        src: "img/car3.png"
    },
    {
        id: "4",
        name: "skoda octavia",
        category: "skoda",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        price: "50.000",
        src: "img/car4.png"
    },
    {
        id: "5",
        name: "audi",
        category: "audi",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        price: "50.000",
        src: "img/audi.png"
    },
    {
        id: "6",
        name: "Porsche",
        category: "Porsche",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        price: "50.000",
        src: "img/Porsche.png"
    }
];
let products = document.getElementById("products");




function displayProducts(categ) {
    console.log(categ);
    let filteredProduct;
    if (categ === "all") {
        filteredProduct = productsArr;
    } else {
        filteredProduct = productsArr.filter((item, index) => {

            return item.category == categ;
        });
    }
    products.innerHTML = "";
    for (let i = 0; i < filteredProduct.length; i++) {

        products.innerHTML += `<div class="item col-12 col-md-4 g-5">
    <div class="productContain  ">
        <div class="itemImg">
            <img src="${filteredProduct[i].src}" alt="">
        </div>
        <div class="itemDetails">
            <h4>${filteredProduct[i].name}</h4>
            <p>${filteredProduct[i].description}</p>
            <span>${filteredProduct[i].price}</span>
            <a href="#" class="">read more</a>
        </div>
    </div>
</div>`;
    }
}
displayProducts("all");

//var xhr = new XMLHttpRequest();
/*
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
            var data = JSON.parse(xhr.response);
            for (let i = 0; i < data.length; i++) {
                products.innerHTML += `<div class="item col-12 col-md-4 g-5">
                <div class="productContain  ">
                    <div class="itemImg">
                        <img src="${data[i].src}" alt="">
                    </div>
                    <div class="itemDetails">
                        <h4>${data[i].name}</h4>
                        <p>${data[i].description}</p>
                        <span>${data[i].price}</span>
                        <a href="#" class="">read more</a>
                    </div>
                </div>
            </div>`;
            }
            console.log(data);


            function getProduct(categ) {
                //products.innerHTML = "";
                let categProduct = data.filter((item, index) => {

                    return item[i].category == categ;
                });
                for (let i = 0; i < categProduct.length; i++) {
                    products.innerHTML += `<div class="item col-12 col-md-4 g-5">
                                               <div class="productContain  ">
                                                  <div class="itemImg">
                                                     <img src="${categProduct[i].src}" alt="">
                                                              </div>
                                                           <div class="itemDetails">
                                                                <h4>${categProduct[i].name}</h4>
                                                                <p>${categProduct[i].description}</p>
                                                                <span>${categProduct[i].price}</span>
                                                                <a href="#" class="">read more</a>
                                                            </div>
                                                        </div>
                                                    </div>`;
                }
            }
            all.onclick = getProduct("all");
            bmw.onclick = getProduct("bmw");
            mercedes.onclick = getProduct("mercedes");
            skoda.onclick = getProduct("skoda");

        }
    }
}
xhr.open("GET", "../json/products.json");
xhr.send("");*/