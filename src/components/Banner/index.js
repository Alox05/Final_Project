export default function Banner() {
    return (
        <div>
            {/* Banner Start */}
            <div className="container">
                <div className="banner" style={{ backgroundImage: 'url("img/new/1170x268.png")' }}>
                    <div className="content text-center">
                        <span>NEW CAKE!!! GET IT FOR $12/PAX (LIMITED)</span>
                        <h2>Strawberry Pancake</h2>
                        <h3>SHOP NOW</h3>
                        <img className="classic" src="img/new/icon.png" />
                    </div>
                </div>
            </div>
            {/* Banner End */}
        </div>
    )
}
