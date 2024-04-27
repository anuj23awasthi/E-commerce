import React, { useEffect, useState } from 'react'
import Axios from 'axios';


export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8000/")
      .then((res) => { setData(res.data) })
  }, [])
  /*
    return (
      <div>
        <h1>Home</h1>
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              <a href={item.url}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    )*/


    const product = data.map((products, index) => {
    return (
  

      <div key={index}>
        
        <h4>{products.id}</h4>
        <h1>{products.name}</h1>
        <p>{products.description}</p>
        <p>{products.price}</p>
        <p>{products.image}</p>
      </div>
    )
  })

  return (

    <div>


      <div className="text-scroll-container">
        <div className="text-scroll-content"><b> Welcome to our online store,some more product updated and more product is coming soon.  ||UNDER CONSTRUCTION|| </b></div>
      </div>

      <div className="top-img">
        <img src="https://eyewear.fastrack.in/pub/media/titan/homepage/1200X200.jpg" alt='top-img'></img>
      </div>


      <div className="hero-section">

        <p className="hero-subtitle">Find the perfect product for you</p>
        <a href="/products" className="btn">Shop Now</a>
      </div>


      <section className="products-section" id="products">
        <h3 className="section-title">Featured Products</h3>
        <div className="product-cards">
          {data.map((products) => (
            <div className="product-card" key={products.id}>

              <img src={products.imageSrc} alt={products.title} className="product-image" />
              <h4 className="product-title">{products.name}</h4>
              <p className="product-price">₹{products.price}</p>
              {/* Render buy and add to cart buttons here  ^toFixed(2)*/}

            </div>
          ))}
        </div>
      </section>
      <div className='middle-img'>
        <img src="https://images.samsung.com/is/image/samsung/assets/in/2201/preorder/1_image_carousel/1_group_kv1/S21FE_Carousel_GroupKV1_PC.jpg" alt="product1"></img>
      </div>

      <div>
        <section className="product-list-section">
          <h3 className="section-title">Latest Products</h3>
          <ul className="product-list">
            <div className="product-cards">
              <div className="product-card">
                <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MME73?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1632861342000" alt="Product 3" className="product-image" />
                <h4 className="product-title">Apple Airpods Pro </h4>
                <p className="product-price">₹24,990/-</p>
              </div>
              <div className="product-card">
                <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/450pro_white_main_600x.png?v=1646640003" alt="Product 3" className="product-image" />
                <h4 className="product-title">boAt Rockerz 450 Pro </h4>
                <p className="product-price">₹ 1,999/-</p>
              </div>
              <div className="product-card">
                <img src="https://cdn.shopify.com/s/files/1/0137/0292/2286/products/ChampagneGold_01_360x.png?v=1678362759" alt="Product 3" className="product-image" />
                <h4 className="product-title">Fire-bolt  Legend</h4>
                <p className="product-price">Sale Price:₹1499/-</p>
              </div>
              <div className="product-card">
                <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/viper-green_600x.png?v=1642405569" alt="Product 3" className="product-image" />
                <h4 className="product-title">boAt Airdopes 131</h4>
                <p className="product-price">₹56,990</p>
              </div>
              <div className="product-card">
                <img src="https://staticimg.titan.co.in/Fastrack/Catalog/38083PP09_1.jpg?impolicy=pqmed&imwidth=640" alt="Product 3" className="product-image" />
                <h4 className="product-title">Fastrack-REFLEX PLAY</h4>
                <p className="product-price">₹4450/-</p>
              </div>
              <div className="product-card">
                <img src="https://www.reliancedigital.in/medias/Sony-KD-55X75K-IN5-Television-492912658-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzNzQzOXxpbWFnZS9qcGVnfGltYWdlcy9oYTIvaDFjLzk4Mjg5MzUxMzkzNTguanBnfDA3NmU3MzgwM2IzMmYxZmZmNDY4OGNhY2ZiMDVlMjk4MzY4YmYwZDc5MTFiNzUyNmMwYTAwMzU5Y2FmNTE5Mzc" alt="Product 3" className="product-image" />
                <h4 className="product-title">Sony Bravia 139 cm (55 inches) 4K Ultra HD Smart LED Google TV</h4>
                <p className="product-price">₹62,690/-</p>
              </div>
              <div className="product-card">
                <img src="https://rukminim1.flixcart.com/image/416/416/xif0q/smartwatch/c/b/m/-original-imagkngy46ddsz5z.jpeg?q=70" alt="Product 3" className="product-image" />
                <h4 className="product-title">Samgsung Watch 5 pro45mmSuper AMOLED display</h4>
                <p className="product-price">₹49,999/-</p>
              </div>
              <div className="product-card">
                <img src="https://cdn1.ethoswatches.com/media/catalog/product/cache/6e5de5bc3d185d8179cdc7258143f41a/b/o/bovet-fleurier-aifsq029-large_1.jpg" alt="Product 3" className="product-image" />
                <h4 className="product-title">BOVET Amadeo Fleurier AIFSQ029</h4>
                <p className="product-price">₹MRP ₹ 2,62,90,000 *Inclusive of all taxes EMI from ₹ 23,48,152/-</p>
              </div>




            </div>

          </ul>
        </section>
      </div>
      <div className='adv-img'>
        <img src=" https://staticimg.titan.co.in/production/promotions/fastrack/Reflex_Play/Play_1.jpg" alt="Product 1" className='img1'></img>
        <img src=" https://staticimg.titan.co.in/production/promotions/fastrack/Reflex_Play/Play_3.jpg" alt="Product 1" className='img2'></img>

      </div>




      <div>

        <section className="hero-section2">
          <div className="hero-content2">
            <p className="hero-subtitle2">Shop the latest trends in fashion</p>
            <div className="product-images2">
              <div className="product-image-wrapper2">
                <img src="https://lp2.hm.com/hmgoepprod?set=source[/70/14/7014677f276639f52441f79e0b12036f6723b24d.jpg],origin[dam],category[],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]" alt="Product 1" className="product-image2" />
                <div className="product-description">
                  <h3 className="product-title2">Relaxed Fit Lyocell resort shirt </h3>
                  <p className="product-details2"><p>Rs.1,049.00 MRP incl. of all taxes</p>
                    Light beige/Orange Black/Oranges, Model-30% SAVE AS FAVOURITE Relaxed Fit Lyocell resort shirt </p>
                </div>
              </div>
              <div className="product-image-wrapper2">
                <img src="https://i.pinimg.com/originals/ca/63/3c/ca633ce61980bcd968bfbed8e1616edb.jpg" alt="Product 2" className="product-image2" />
                <div className="product-description2">
                  <h3 className="product-title2">White shirt & Trouger</h3>
                  <p className="product-details2"> <p> ₹ 1,590.00 MRP incl. of all taxes,</p>
                    To Wear To A Christmas Party: Men's Outfit Guide 2023, From the office Christmas party to black tie events, here are 6 go-to Christmas party outfit combinations to cover all basis
                  </p>
                </div>
              </div>
              <div className="product-image-wrapper2">
                <img src="https://static.zara.net/photos///2023/V/1/2/p/2602/120/800/2/w/560/2602120800_2_1_1.jpg?ts=1676288178535" alt="Product 3" className="product-image2" />
                <div className="product-description">
                  <h3 className="product-title">TRACK SOLE LOAFERS</h3>
                  <p className="product-details">  <p> ₹ 4,590.00 MRP incl. of all taxes,</p>
                    Plain upper loafers. Decorative penny strap on the instep. Black chunky track sole.
                    BLACK | 2602/120</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>



      <section className="product-info-section">
        <h3 className="section-title">Product Information</h3>
        <ul className="product-info-list">
          <li className="product-info-item">Free Shipping on All Orders</li>
          <li className="product-info-item">30-Day Money Back Guarantee</li>
          <li className="product-info-item">Secure Payment Options</li>
          <li className="product-info-item">24/7 Customer Support</li>
        </ul>
      </section>

      <footer className="footer">
        <p className="footer-text">© 2023 E-Commerce Store. All rights reserved.</p>
      </footer>
    </div>

  )
}

