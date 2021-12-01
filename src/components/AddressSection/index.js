export default function AddressSection() {
    return (
        <div>
            {/* Address Section Start */}
            <section id="section7" className="row address parallax-window" data-parallax="scroll" data-image-src="img/slider/1900x1000.png">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-5 col-md-offset-1 addess-description">
                            <span>CemreBakery Location</span>
                            <h2>CemreBakery Address</h2>
                            <p>I must explain to you how all this mistaken idea of denouncing pleure and praising pain was born.</p>
                            <ul>
                                <li className="address-section">
                                    <div className="row">
                                        <div className="col-md-2 col-sm-2 col-xs-2">
                                            <i className="fa fa-address-card" />
                                        </div>
                                        <div className="col-md-10 col-sm-10 col-xs-10 lineHeight">
                                            Primary:Lorem Ipsum Dolar<br />Second:Lorem Ipsum Dolar
                                        </div>
                                    </div>
                                </li>
                                <li className="address-section">
                                    <div className="row">
                                        <div className="col-md-2 col-sm-2 col-xs-2">
                                            <i className="fa fa-phone" />
                                        </div>
                                        <div className="col-md-10 col-sm-10 col-xs-10 lineHeight">
                                            Primary:Lorem Ipsum Dolar<br />Second:Lorem Ipsum Dolar
                                        </div>
                                    </div>
                                </li>
                                <li className="address-section">
                                    <div className="row">
                                        <div className="col-md-2 col-sm-2 col-xs-2">
                                            <i className="fa fa-envelope" />
                                        </div>
                                        <div className="col-md-10 col-sm-10 col-xs-10 lineHeight">
                                            Primary:Lorem Ipsum Dolar<br />Second:Lorem Ipsum Dolar
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 addess-map">
                            <div id="map" />
                        </div>
                    </div>
                </div>
            </section>
            {/* Adress Section End */}
        </div>
    )
}
