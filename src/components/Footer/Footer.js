import React from "react";
import "./Footer.css";

function Footer() {
    return (

        <footer className="text-center text-lg-start bg-light text-muted">
            <section className="d-flex justify-content-center justify-content-lg-between p-2 border-bottom">
                <div className="me-5 d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                </div>

                <div>
                    <a href="https://www.facebook.com/abhinav.yadav.988926" className="me-4 text-reset">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com/thekhurapaati" className="me-4 text-reset">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com/the_khurapaati_mind/" className="me-4 text-reset">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/abhinav-yadav-00a288200/" className="me-4 text-reset">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/thekhurapaatimind" className="me-4 text-reset">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </section>

            <section className="">
                <div className="container text-center text-md-start mt-1">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                <i className="fas fa-gem me-3"></i>Address
                            </h6>
                            <p>
                                IIT Indore, Khandwa Road Simrol, <br />
                                Indore 452020, INDIA
                                <br />
                                Timings: 11:00 PM to 2:00 AM{" "}
                            </p>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                            <p>
                                <i className="fas fa-home me-3"></i> IIT Indore, Indore 452020,
                                India
                            </p>
                            <p>
                                <i className="fas fa-envelope me-3"></i>
                                actcrick02@gmail.com
                            </p>
                            <p>
                                <i className="fas fa-phone me-3"></i> + 91 999 999 999
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div
                className="text-center p-1"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
            >
                © 2023 Copyright:
                <a
                    className="text-reset fw-bold"
                    href="https://github.com/AayushiChoubey/Night-Canteen_PWA-Brute-Force"
                >
                    Team-BruteForce IIT Indore
                </a>
            </div>
        </footer>
    );
}

export default Footer;