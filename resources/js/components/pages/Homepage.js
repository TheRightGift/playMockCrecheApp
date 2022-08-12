
const Img = "/assets/duringTheStayRightImg.png";
const Img1 = "/assets/duringTheStayRightImg1.png";
const Img2 = "/assets/duringTheStayRightImg2.png";
const Img3 = "/assets/duringTheStayRightImg3.png";

const OurGalleryImg = "/assets/ourGalleryImg.png";
const OurGalleryImg1 = "/assets/ourGalleryImg1.png";
const OurGalleryImg2 = "/assets/ourGalleryImg2.png";
const OurGalleryImg3 = "/assets/ourGalleryImg3.png";

const TestimonialsProfileImg = "/assets/landTestimonialProImg.png";

export default function Homepage() {
    return (
        <div>
            <div className="landContainer">
                <div id="home" className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7">
                        <p className="text-primary landWelcomeTitle">
                            WELCOME TO DAYCARE
                        </p>
                        <p className="landWelcomeTxt">
                            We take pride in every child as they are all unique
                            individuals; providing the resources and equipment
                            they need to aid their learning.
                        </p>
                        <div>
                            <i className="fa-brands fa-instagram text-primary landSocialMediaHandles"></i>
                            <i className="fa-brands fa-facebook text-primary landSocialMediaHandles"></i>
                            <i className="fa-brands fa-linkedin text-primary landSocialMediaHandles"></i>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5">
                        <div id="landChildBgImg"></div>
                    </div>
                </div>
                <div id="about" className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7">
                        <div id="landRectangleBlueShape">
                            <div id="landRectangleBlueImg"></div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5">
                        <p className="text-primary" id="landJoinUsTitle">
                            Join us to be part of an unforgatable experience
                        </p>
                        <p className="landJoinUsTxt">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
                <div id="activities" className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                        <p className="text-primary duringTheStayTitle">
                            During the stay , children will be able to attend
                            wide range of activities
                        </p>
                        <p className="duringTheStayTxt">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum
                        </p>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                        <div className="row">
                            <div
                                className="col-xs-12 col-sm-12 col-md-6 col-lg-6"
                                id="duringTheStayRightBlueBoxContainDiv"
                            >
                                <div
                                    className="bg-primary"
                                    id="duringTheStayRightBlueBox"
                                ></div>
                                <img src={Img} id="duringTheStayRightImg" />
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                <img
                                    src={Img1}
                                    className="duringTheStayRightImg1"
                                />
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                <img
                                    src={Img2}
                                    className="duringTheStayRightImg2"
                                />
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                <div
                                    className="bg-primary"
                                    id="duringTheStayRightBlueBox1"
                                >
                                    <img
                                        src={Img3}
                                        className="duringTheStayRightImg3"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="gallery">
                    <p className="text-primary" id="ourGalleryTitle">
                        Our Gallery
                    </p>
                    <p id="ourGalleryTxt">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim
                    </p>
                </div>

                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                        <img src={OurGalleryImg} className="ourGalleryImg" />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                        <img src={OurGalleryImg1} className="ourGalleryImg" />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                        <img src={OurGalleryImg} className="ourGalleryImg" />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                        <img src={OurGalleryImg1} className="ourGalleryImg" />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                        <img
                            src={OurGalleryImg2}
                            className="ourGalleryImg ourGalleryImg1"
                        />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                        <img
                            src={OurGalleryImg3}
                            className="ourGalleryImg ourGalleryImg1"
                        />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                        <img
                            src={OurGalleryImg2}
                            className="ourGalleryImg ourGalleryImg1"
                        />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                        <img
                            src={OurGalleryImg3}
                            className="ourGalleryImg ourGalleryImg1"
                        />
                    </div>
                </div>

                <div id="pricing">
                    <p className="text-primary" id="ourPriceRatesTitle">
                        Our Pricing rates
                    </p>
                    <p id="ourPriceRatesTxt">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim
                    </p>
                </div>

                <div className="row" id="ourPriceRateChartMainDiv">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                        <div className="ourPriceRatesChart">
                            <p className="ourPriceRatesChartTitle">
                                weekday classes
                            </p>
                            <p className="ourPriceRatesChartTitle1">N60,000</p>
                            <p className="ourPriceRatesChartTxt">
                                Lorem ipsum dolor
                            </p>
                            <p className="ourPriceRatesChartTxt">
                                Lorem ipsum dolor sit
                            </p>
                            <p className="ourPriceRatesChartTxt">
                                Lorem ipsum
                            </p>
                            <p className="ourPriceRatesChartTxt">
                                Lorem ipsum dolor sit amet,
                            </p>
                            <p className="ourPriceRatesChartTxt">
                                Lorem ipsum dolor sit amet,
                            </p>
                            <p className="ourPriceRatesChartTxt">
                                Lorem ipsum dolor sit amet,
                            </p>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                        <div className="ourPriceRatesChart1">
                            <p className="ourPriceRatesChartTitle">
                                weekEND classes
                            </p>
                            <p className="ourPriceRatesChartTitle1">N40,000</p>
                            <p className="ourPriceRatesChartTxt">
                                Lorem ipsum dolor
                            </p>
                            <p className="ourPriceRatesChartTxt">
                                Lorem ipsum dolor sit
                            </p>
                            <p className="ourPriceRatesChartTxt">
                                Lorem ipsum
                            </p>
                            <p className="ourPriceRatesChartTxt">
                                Lorem ipsum dolor sit amet,
                            </p>
                            <p className="ourPriceRatesChartTxt">
                                Lorem ipsum dolor sit amet,
                            </p>
                            <p className="ourPriceRatesChartTxt">
                                Lorem ipsum dolor sit amet,
                            </p>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                        <div className="ourPriceRatesChart2">
                            <p className="ourPriceRatesChartTitle">
                                PRIVATE classes
                            </p>
                            <p className="ourPriceRatesChartTitle1">N100,000</p>
                            <p className="ourPriceRatesChartTxt">
                                Lorem ipsum dolor
                            </p>
                            <p className="ourPriceRatesChartTxt">
                                Lorem ipsum dolor sit
                            </p>
                            <p className="ourPriceRatesChartTxt">
                                Lorem ipsum
                            </p>
                            <p className="ourPriceRatesChartTxt">
                                Lorem ipsum dolor sit amet,
                            </p>
                            <p className="ourPriceRatesChartTxt">
                                Lorem ipsum dolor sit amet,
                            </p>
                            <p className="ourPriceRatesChartTxt">
                                Lorem ipsum dolor sit amet,
                            </p>
                        </div>
                    </div>
                </div>

                <div id="testimonials">
                    <p className="text-primary ourTestimonialsTitle">
                        Our Testimonials
                    </p>
                    <p className="ourTestimonialsTxt">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim
                    </p>

                    <div
                        id="carouselExampleDark"
                        className="carousel carousel-dark slide"
                        data-bs-ride="carousel"
                    >
                        <div className="carousel-indicators">
                            <button
                                type="button"
                                data-bs-target="#carouselExampleDark"
                                data-bs-slide-to="0"
                                className="active"
                                aria-current="true"
                                aria-label="Slide 1"
                                id="test"
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#carouselExampleDark"
                                data-bs-slide-to="1"
                                aria-label="Slide 2"
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#carouselExampleDark"
                                data-bs-slide-to="2"
                                aria-label="Slide 3"
                            ></button>
                        </div>
                        <div className="carousel-inner">
                            <div
                                className="carousel-item active"
                                data-bs-interval="10000"
                            >
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                                        <div className="card mb-3 testmonialsCardDiv">
                                            <div className="row">
                                                <div className="col-8">
                                                    <img
                                                        src={
                                                            TestimonialsProfileImg
                                                        }
                                                        className="TestimonialsProfileImg"
                                                    />
                                                </div>
                                                <div className="col-4">
                                                    <div className="testimonialProfileRightRoundShape"></div>
                                                    <div className="testimonialProfileRightRoundShape1"></div>
                                                </div>
                                            </div>
                                            <p className="TestimonialsProfileName">
                                                Akerele B.
                                            </p>
                                            <p className="TestimonialsProfileTxts">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed
                                                do eiusmod tempor incididunt ut
                                                labore et dolor.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                                        <div className="card mb-3 testmonialsCardDiv">
                                            <div className="row">
                                                <div className="col-8">
                                                    <img
                                                        src={
                                                            TestimonialsProfileImg
                                                        }
                                                        className="TestimonialsProfileImg"
                                                    />
                                                </div>
                                                <div className="col-4">
                                                    <div className="testimonialProfileRightRoundShape"></div>
                                                    <div className="testimonialProfileRightRoundShape1"></div>
                                                </div>
                                            </div>
                                            <p className="TestimonialsProfileName">
                                                Akerele B.
                                            </p>
                                            <p className="TestimonialsProfileTxts">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed
                                                do eiusmod tempor incididunt ut
                                                labore et dolor.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                                        <div className="card mb-3 testmonialsCardDiv">
                                            <div className="row">
                                                <div className="col-8">
                                                    <img
                                                        src={
                                                            TestimonialsProfileImg
                                                        }
                                                        className="TestimonialsProfileImg"
                                                    />
                                                </div>
                                                <div className="col-4">
                                                    <div className="testimonialProfileRightRoundShape"></div>
                                                    <div className="testimonialProfileRightRoundShape1"></div>
                                                </div>
                                            </div>
                                            <p className="TestimonialsProfileName">
                                                Akerele B.
                                            </p>
                                            <p className="TestimonialsProfileTxts">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed
                                                do eiusmod tempor incididunt ut
                                                labore et dolor.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="carousel-item"
                                data-bs-interval="2000"
                            >
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                                        <div className="card mb-3 testmonialsCardDiv">
                                            <div className="row">
                                                <div className="col-8">
                                                    <img
                                                        src={
                                                            TestimonialsProfileImg
                                                        }
                                                        className="TestimonialsProfileImg"
                                                    />
                                                </div>
                                                <div className="col-4">
                                                    <div className="testimonialProfileRightRoundShape"></div>
                                                    <div className="testimonialProfileRightRoundShape1"></div>
                                                </div>
                                            </div>
                                            <p className="TestimonialsProfileName">
                                                Akerele B.
                                            </p>
                                            <p className="TestimonialsProfileTxts">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed
                                                do eiusmod tempor incididunt ut
                                                labore et dolor.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                                        <div className="card mb-3 testmonialsCardDiv">
                                            <div className="row">
                                                <div className="col-8">
                                                    <img
                                                        src={
                                                            TestimonialsProfileImg
                                                        }
                                                        className="TestimonialsProfileImg"
                                                    />
                                                </div>
                                                <div className="col-4">
                                                    <div className="testimonialProfileRightRoundShape"></div>
                                                    <div className="testimonialProfileRightRoundShape1"></div>
                                                </div>
                                            </div>
                                            <p className="TestimonialsProfileName">
                                                Akerele B.
                                            </p>
                                            <p className="TestimonialsProfileTxts">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed
                                                do eiusmod tempor incididunt ut
                                                labore et dolor.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                                        <div className="card mb-3 testmonialsCardDiv">
                                            <div className="row">
                                                <div className="col-8">
                                                    <img
                                                        src={
                                                            TestimonialsProfileImg
                                                        }
                                                        className="TestimonialsProfileImg"
                                                    />
                                                </div>
                                                <div className="col-4">
                                                    <div className="testimonialProfileRightRoundShape"></div>
                                                    <div className="testimonialProfileRightRoundShape1"></div>
                                                </div>
                                            </div>
                                            <p className="TestimonialsProfileName">
                                                Akerele B.
                                            </p>
                                            <p className="TestimonialsProfileTxts">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed
                                                do eiusmod tempor incididunt ut
                                                labore et dolor.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                                        <div className="card mb-3 testmonialsCardDiv">
                                            <div className="row">
                                                <div className="col-8">
                                                    <img
                                                        src={
                                                            TestimonialsProfileImg
                                                        }
                                                        className="TestimonialsProfileImg"
                                                    />
                                                </div>
                                                <div className="col-4">
                                                    <div className="testimonialProfileRightRoundShape"></div>
                                                    <div className="testimonialProfileRightRoundShape1"></div>
                                                </div>
                                            </div>
                                            <p className="TestimonialsProfileName">
                                                Akerele B.
                                            </p>
                                            <p className="TestimonialsProfileTxts">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed
                                                do eiusmod tempor incididunt ut
                                                labore et dolor.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                                        <div className="card mb-3 testmonialsCardDiv">
                                            <div className="row">
                                                <div className="col-8">
                                                    <img
                                                        src={
                                                            TestimonialsProfileImg
                                                        }
                                                        className="TestimonialsProfileImg"
                                                    />
                                                </div>
                                                <div className="col-4">
                                                    <div className="testimonialProfileRightRoundShape"></div>
                                                    <div className="testimonialProfileRightRoundShape1"></div>
                                                </div>
                                            </div>
                                            <p className="TestimonialsProfileName">
                                                Akerele B.
                                            </p>
                                            <p className="TestimonialsProfileTxts">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed
                                                do eiusmod tempor incididunt ut
                                                labore et dolor.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                                        <div className="card mb-3 testmonialsCardDiv">
                                            <div className="row">
                                                <div className="col-8">
                                                    <img
                                                        src={
                                                            TestimonialsProfileImg
                                                        }
                                                        className="TestimonialsProfileImg"
                                                    />
                                                </div>
                                                <div className="col-4">
                                                    <div className="testimonialProfileRightRoundShape"></div>
                                                    <div className="testimonialProfileRightRoundShape1"></div>
                                                </div>
                                            </div>
                                            <p className="TestimonialsProfileName">
                                                Akerele B.
                                            </p>
                                            <p className="TestimonialsProfileTxts">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed
                                                do eiusmod tempor incididunt ut
                                                labore et dolor.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="contact" className="newsLetterMainDiv">
                <p className="ourNewsletterTitle">Our NEWSLETTER</p>
                <p className="ourNewsletterTxt">
                    Subscribe to our newsletter to stay upo date
                </p>

                <form className="ourNewsLetterInputDiv">
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        id="ourNewsLetterInput"
                    />
                    <a
                        href="#"
                        className="btn btn-primary btn-sm"
                        type="button"
                        id="ourNewsletterBtn"
                    >
                        Submit
                    </a>
                </form>
            </div>

            <div className="contactUsMainDiv">
                <p className="text-primary contactUsTxt">Contact us</p>
                <p className="contactUsTxt1">
                    KIndly reach out to us for enquiry
                </p>
            </div>

            <form className="contactUsForm">
                <div className="">
                    <input
                        type="text"
                        className="form-control contactUsInputs"
                        id="exampleFormControlInput1"
                        placeholder="Full name"
                    />
                </div>
                <div className="">
                    <input
                        type="email"
                        className="form-control contactUsInputs"
                        id="exampleFormControlInput1"
                        placeholder="Email"
                    />
                </div>
                <div className="">
                    <textarea
                        className="form-control contactUsTextarea"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="Message..."
                    ></textarea>
                </div>
                <div>
                    <button
                        type="button"
                        className="btn btn-primary"
                        id="contactUsBtn"
                    >
                        Send
                    </button>
                </div>
            </form>

            <div className="row" id="landOrgDetailsMainDiv">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                    <i className="fa-solid fa-envelope landOrgDetailsIcons d-flex justify-content-center"></i>
                    <p className="d-flex justify-content-center">
                        daycare@gmail.com
                    </p>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                    <i className="fa-solid  fa-phone landOrgDetailsIcons d-flex justify-content-center"></i>
                    <p className="d-flex justify-content-center">
                        +234006543738
                    </p>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                    <i className="fa-solid fa-location-dot landOrgDetailsIcons d-flex justify-content-center"></i>
                    <p className="d-flex justify-content-center">
                        lekki phase 1, lagos, Nigeria
                    </p>
                </div>
            </div>

        </div>
    )
}