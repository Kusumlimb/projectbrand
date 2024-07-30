const HeroSection = () => {
    return <main className="hero container">
        <div className="hero-content">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES</p>
            <div className="hero-btn">
                <button className="shop-btn">Shop now</button>
                <button className="cat-btn">category</button>
        
            </div>
            <div className="shopping">
                <p>Also available on</p>
                <div className="brand-icons">
                <img src="/images/amazon.png" alt="amazon" />
                    <img src="/images/flipkart.png" alt="shoe" />
                </div>
            </div>
        </div>
        <div className="hero-image">
        <img src="/images/shoe_image.png" alt="hero-image" />
        </div>




    </main>
};

export default HeroSection;