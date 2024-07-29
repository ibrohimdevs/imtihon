let dom = document.querySelector("body")
let dom2 = document.createElement("section")

fetch("https://dummyjson.com/products")
    .th

dom.innerHTML += `
    <navbar class="navbar">
        <div class="navbar__top">
            <img src="assets/img/plant 1.jpg" alt="">
            <h1>
                Ecobazar
            </h1>
        </div>
        <div class="input">
            <input type="text" placeholder="Search">
        </div>
        <div class="acc">
            <img src="assets/img/Vector (1).png" alt="">
            <div>
                <img src="assets/img/Cart.png" alt="">
                <span>
                    <p>Shopping cart</p>
                    <p>$57.00</p>
                </span>
            </div>
        </div>
    </navbar>
    <header>
        <div class="home">
            <div class="paragrpg">
                <p>Home</p>
                <p>Shop</p>
                <p>Pages</p>
                <p>Blog</p>
                <p>About Us</p>
                <p>Contact Us</p>
            </div>
            <div class="img">
                <img src="/assets/img/PhoneCall 1.png" alt="" style="width: 20px; height: 20px;">
                <p>(219) 555-0114</p>
            </div>
        </div>
        <div class="banner">
            <div>
                <img src="assets/img/Bannar Big.png" alt="">
            </div>
            <div class="img__two">
                <div>
                    <img src="assets/img/Bannar.png" alt="">
                    <img src="assets/img/Bannar (1).png" alt="">
                </div>
            </div>
        </div>
        <section class="second-card">
        <div>
            <img width="50px" src="assets/img/delivery-truck 1.png" alt="">
            <span>
                <b>Free Shipping</b>
                <p>Free shipping on all your order</p>
            </span>
        </div>
        <div>
            <img width="50px" src="assets/img/headphones 1.png" alt="">
            <span>
                <b>Free Shipping</b>
                <p>Free shipping on all your order</p>
            </span>
        </div>
        <div>
            <img width="50px" src="assets/img/Group (1).png" alt="">
            <span>
                <b>Free Shipping</b>
                <p>Free shipping on all your order</p>
            </span>
        </div>
        <div>
            <img width="50px" src="assets/img/package.png" alt="">
            <span>
                <b>Free Shipping</b>
                <p>Free shipping on all your order</p>
            </span>
        </div>
    </section>
        <section>
            <div class="h4">
                <h4>Popular Categories</h4>
                <p>View All</p>
            </div>
            <div class="menu-box">
            </div>
        </section>
    </header>
`
