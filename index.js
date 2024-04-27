const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));


const products = [
    {
        id: 1,
        category: "electronics",
        name: "Iphone 14pro",
        description: "Best Smartphone in town",
        price: "₹1,20,000",
        imageSrc: "https://media.auchan.fr/MEDIASTEP183837760_750x750/B2CD/"
    },
    {
        id: 2,
        category: "electronics",
        name: "Samsung galaxy s20 5g",
        description: "Best Washing Machine in town",
        price: "₹96000",
        imageSrc: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s20-5g-r1.jpg"
    },

    {
        id: 3,
        category: "electronics",
        name: "Realme 10 pro",
        description: "Comfortable Tshirt",
        price: "₹24,000/-",
        imageSrc: "https://image01.realme.net/general/20221125/1669370365891.png"
    },
    {
        id: 4,
        category: "electronics",
        name: "Nothing phone",
        description: "Best Running sport shoes",
        price: "₹29,999/-",
        imageSrc: "https://fdn2.gsmarena.com/vv/pics/nothing/nothing-phone1-2.jpg"
    },
    {
        id: 5,
        category: "electronics",
        name: "Redmi 10 prime",
        description: "Best Running sport shoes",
        price: "₹12,999/-",
        imageSrc: "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-10-1.jpg"
    },
    {
        id: 6,
        category: "electronics",
        name: "poco M3",
        description: "Best Running sport shoes",
        price: "₹10,999/-",
        imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTei18TNxuIsb7tJS_OWUD_omO68ggyYrmSoT0RJMj2&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTei18TNxuIsb7tJS_OWUD_omO68ggyYrmSoT0RJMj2&s"
    },
    {
        id: 7,
        category: "electronics",
        name: "Macbook Pro",
        description: "Best Running sport shoes",
        price: "₹3,19,990/-",
        imageSrc: "https://m.media-amazon.com/images/I/61Y30DpqRVL._SX679_.jpg"
    },
    {
        id: 8,
        category: "electronics",
        name: "Mi NoteBook Ultra Win 11",
        description: "Best Running sport shoes",
        price: "₹56,990/-",
        imageSrc: "https://m.media-amazon.com/images/I/71f5Eu5lJSL._SX679_.jpg"
    },
    {
        id: 9,
        category: "electronics",
        name: "realme Book (Slim) Core i3 11th Gen",
        description: "Best Running sport shoes",
        price: "₹46,999/-",
        imageSrc: "https://cdn.shopify.com/s/files/1/0598/7919/4823/products/511EdA4iq7L._SS640.jpg?v=1657114545"
    },
    {
        id: 10,
        category: "electronics",
        name: "ASUS Vivobook 15 Core i7 11th Gen",
        description: "Best Running sport shoes",
        price: "₹56,990/-",
        imageSrc: "https://d2xamzlzrdbdbn.cloudfront.net/products/c2a36000-5bd9-4024-af68-b96045c6b4be22311404_416x416.jpg"
    },
    {
        id: 11,
        name: "Product 1",
        description: "This is product 1 description.",
        price: 1519.99,
        imageSrc: "https://cdn.shopify.com/s/files/1/0137/0292/2286/products/ChampagneGold_01_360x.png?v=1678362759",
    },
    {
        id: 12,
        name: "Product 1",
        description: "This is product 1 description.",
        price: 1312.99,
        imageSrc: "https://www.reliancedigital.in/medias/Sony-KD-55X75K-IN5-Television-492912658-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzNzQzOXxpbWFnZS9qcGVnfGltYWdlcy9oYTIvaDFjLzk4Mjg5MzUxMzkzNTguanBnfDA3NmU3MzgwM2IzMmYxZmZmNDY4OGNhY2ZiMDVlMjk4MzY4YmYwZDc5MTFiNzUyNmMwYTAwMzU5Y2FmNTE5Mzc",
    },
    {
        id: 13,
        name: "Product 1",
        description: "This is product 1 description.",
        price: 1211.99,
        imageSrc: "https://rukminim1.flixcart.com/image/416/416/xif0q/smartwatch/c/b/m/-original-imagkngy46ddsz5z.jpeg?q=70",
    },

    {
        id: 14,
        name: "Product 1",
        description: "This is product 1 description.",
        price: 1450.99,
        imageSrc: "https://cdn1.ethoswatches.com/media/catalog/product/cache/6e5de5bc3d185d8179cdc7258143f41a/b/o/bovet-fleurier-aifsq029-large_1.jpg",
    },

    {
        id: 15,
        name: "Product 1",
        description: "This is product 1 description.",
        price: 1350.99,
        imageSrc: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/450pro_white_main_600x.png?v=1646640003",
    },

    {
        id: 16,
        name: "Product 1",
        description: "This is product 1 description.",
        price: 2150.99,
        imageSrc: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MME73?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1632861342000 ",
    },

    {
        id: 17,
        name: "Product 1",
        description: "This is product 1 description.",
        price: 1150.99,
        imageSrc: " https://d2xamzlzrdbdbn.cloudfront.net/products/c2a36000-5bd9-4024-af68-b96045c6b4be22311404_416x416.jpg",
    },

    {
        id: 18,
        name: "Product 1",
        description: "This is product 1 description.",
        price: 1550.99,
        imageSrc: " https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1648709644.10661363.jpg",
    },
    {
        id: 19,
        name: "Product 1",
        description: "This is product 1 description.",
        price: 2150.99,
        imageSrc: "https://m.media-amazon.com/images/I/71f5Eu5lJSL._SX679_.jpg ",
    },
    {
        id: 20,
        name: "Product 1",
        description: "This is product 1 description.",
        price: 1050.99,
        imageSrc: " https://m.media-amazon.com/images/I/61Y30DpqRVL._SX679_.jpg",
    },
    {
        id: 21,
        name: "Product 1",
        description: "This is product 1 description.",
        price: 1850.99,
        imageSrc: "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-10-1.jpg",
    },
    {
        id: 22,
        name: "Product 1",
        description: "This is product 1 description.",
        price: 2250.99,
        imageSrc: "https://image01.realme.net/general/20221125/1669370365891.png",
    },
    {
        id: 23,
        name: "Product 1",
        description: "This is product 1 description.",
        price: 2340.99,
        imageSrc: "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-10-1.jpg ",
    },
    {
        id: 24,
        name: "Product 1",
        description: "This is product 1 description.",
        price: 3430.99,
        imageSrc: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s20-5g-r1.jpg",
    },
    {
        id: 25,
        name: "Product 1",
        description: "This is product 1 description.",
        price: 2150.99,
        imageSrc: " https://fdn2.gsmarena.com/vv/pics/nothing/nothing-phone1-2.jpg",
    },
    {
        id: 26,
        name: "Product 1",
        description: "This is product 1 description.",
        price: 1650.99,
        imageSrc: " https://media.auchan.fr/MEDIASTEP183837760_750x750/B2CD/",
    },
    {
        id: 1,
        category: "electronics",
        name: "Iphone 14pro",
        description: "Best Smartphone in town",
        price: "₹1,20,000",
        imageSrc: "https://media.auchan.fr/MEDIASTEP183837760_750x750/B2CD/"
    },
    {
        id: 2,
        category: "electronics",
        name: "Samsung galaxy s20 5g",
        description: "Best Washing Machine in town",
        price: "₹96000",
        imageSrc: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s20-5g-r1.jpg"
    },

    {
        id: 3,
        category: "electronics",
        name: "Realme 10 pro",
        description: "Comfortable Tshirt",
        price: "₹24,000/-",
        imageSrc: "https://image01.realme.net/general/20221125/1669370365891.png"
    },
    {
        id: 4,
        category: "electronics",
        name: "Nothing phone",
        description: "Best Running sport shoes",
        price: "₹29,999/-",
        imageSrc: "https://fdn2.gsmarena.com/vv/pics/nothing/nothing-phone1-2.jpg"
    },
    {
        id: 5,
        category: "electronics",
        name: "Redmi 10 prime",
        description: "Best Running sport shoes",
        price: "₹12,999/-",
        imageSrc: "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-10-1.jpg"
    },
    {
        id: 6,
        category: "electronics",
        name: "poco M3",
        description: "Best Running sport shoes",
        price: "₹10,999/-",
        imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTei18TNxuIsb7tJS_OWUD_omO68ggyYrmSoT0RJMj2&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTei18TNxuIsb7tJS_OWUD_omO68ggyYrmSoT0RJMj2&s"
    },
    {
        id: 7,
        category: "electronics",
        name: "Macbook Pro",
        description: "Best Running sport shoes",
        price: "₹3,19,990/-",
        imageSrc: "https://m.media-amazon.com/images/I/61Y30DpqRVL._SX679_.jpg"
    },
    {
        id: 8,
        category: "electronics",
        name: "Mi NoteBook Ultra Win 11",
        description: "Best Running sport shoes",
        price: "₹56,990/-",
        imageSrc: "https://m.media-amazon.com/images/I/71f5Eu5lJSL._SX679_.jpg"
    },
    {
        id: 9,
        category: "electronics",
        name: "realme Book (Slim) Core i3 11th Gen",
        description: "Best Running sport shoes",
        price: "₹46,999/-",
        imageSrc: "https://cdn.shopify.com/s/files/1/0598/7919/4823/products/511EdA4iq7L._SS640.jpg?v=1657114545"
    },
    {
        id: 10,
        category: "electronics",
        name: "ASUS Vivobook 15 Core i7 11th Gen",
        description: "Best Running sport shoes",
        price: "₹56,990/-",
        imageSrc: "https://d2xamzlzrdbdbn.cloudfront.net/products/c2a36000-5bd9-4024-af68-b96045c6b4be22311404_416x416.jpg"
    },
    {
        id: 11,
        name: "Product 1",
        description: "This is product 1 description.",
        price: 1519.99,
        imageSrc: "https://cdn.shopify.com/s/files/1/0137/0292/2286/products/ChampagneGold_01_360x.png?v=1678362759",
    },
    {
        id: 12,
        name: "Product 1",
        description: "This is product 1 description.",
        price: 1312.99,
        imageSrc: "https://www.reliancedigital.in/medias/Sony-KD-55X75K-IN5-Television-492912658-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzNzQzOXxpbWFnZS9qcGVnfGltYWdlcy9oYTIvaDFjLzk4Mjg5MzUxMzkzNTguanBnfDA3NmU3MzgwM2IzMmYxZmZmNDY4OGNhY2ZiMDVlMjk4MzY4YmYwZDc5MTFiNzUyNmMwYTAwMzU5Y2FmNTE5Mzc",
    },
    {
        id: 13,
        name: "Product 1",
        description: "This is product 1 description.",
        price: 1211.99,
        imageSrc: "https://rukminim1.flixcart.com/image/416/416/xif0q/smartwatch/c/b/m/-original-imagkngy46ddsz5z.jpeg?q=70",
    },

    {
        id: 14,
        name: "Product 1",
        description: "This is product 1 description.",
        price: 1450.99,
        imageSrc: "https://cdn1.ethoswatches.com/media/catalog/product/cache/6e5de5bc3d185d8179cdc7258143f41a/b/o/bovet-fleurier-aifsq029-large_1.jpg",
    },

    {
        id: 15,
        name: "Product 1",
        description: "This is product 1 description.",
        price: 1350.99,
        imageSrc: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/450pro_white_main_600x.png?v=1646640003",
    },

    {
        id: 16,
        name: "Product 1",
        description: "This is product 1 description.",
        price: 2150.99,
        imageSrc: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MME73?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1632861342000 ",
    },

    {
        id: 17,
        name: "Product 1",
        description: "This is product 1 description.",
        price: 1150.99,
        imageSrc: " https://d2xamzlzrdbdbn.cloudfront.net/products/c2a36000-5bd9-4024-af68-b96045c6b4be22311404_416x416.jpg",
    },

    {
        id: 18,
        name: "Product 1",
        description: "This is product 1 description.",
        price: 1550.99,
        imageSrc: " https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1648709644.10661363.jpg",
    },
    {
        id: 19,
        name: "Product 1",
        description: "This is product 1 description.",
        price: 2150.99,
        imageSrc: "https://m.media-amazon.com/images/I/71f5Eu5lJSL._SX679_.jpg ",
    },
    {
        id: 20,
        name: "Product 1",
        description: "This is product 1 description.",
        price: 1050.99,
        imageSrc: " https://m.media-amazon.com/images/I/61Y30DpqRVL._SX679_.jpg",
    },
    {
        id: 21,
        name: "Product 1",
        description: "This is product 1 description.",
        price: 1850.99,
        imageSrc: "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-10-1.jpg",
    },
    {
        id: 22,
        name: "Product 1",
        description: "This is product 1 description.",
        price: 2250.99,
        imageSrc: "https://image01.realme.net/general/20221125/1669370365891.png",
    },
    {
        id: 23,
        name: "Product 1",
        description: "This is product 1 description.",
        price: 2340.99,
        imageSrc: "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-10-1.jpg ",
    },
    {
        id: 24,
        name: "Product 1",
        description: "This is product 1 description.",
        price: 3430.99,
        imageSrc: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s20-5g-r1.jpg",
    },
    {
        id: 25,
        name: "Product 1",
        description: "This is product 1 description.",
        price: 2150.99,
        imageSrc: " https://fdn2.gsmarena.com/vv/pics/nothing/nothing-phone1-2.jpg",
    },
    {
        id: 26,
        name: "Product 1",
        description: "This is product 1 description.",
        price: 1650.99,
        imageSrc: " https://media.auchan.fr/MEDIASTEP183837760_750x750/B2CD/",
    },
    





]


// Creating Get api

app.get("/", (req, res) => {
    res.send(products)
})





app.get("/add_to_cart", (req, res) => {
    const data = req.body;
    var arr = products.filter((iteam, index) => {
        return (
            iteam.id == data.id
        )
    })
    if (arr.length > 0) {
        res.send({
            status: "error",
            data: "Product already exist"
        })
    }
    else {
        products.push(data)
        res.send({
            status: "success",
            data: "Product added to cart"
        })
    }
})











           /* iteam.uname === data.uname && iteam.pass === data.pass?
            iteam
            :null



        )
    })
arr.length > 0 ?
    console.log("Valid user")
    : console.log("Invalid user")
    
})
*/
app.listen(8000, () => {
    console.log("api working at port 8000")
})