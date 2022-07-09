import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import HomePageStyles from "./homePage.module.css";
import Footer from "../../components/Footer/footer";

const HomePage = () => {
  return (
    <Container fluid className="p-0">
      <IntroSection />
      <WhyGBSSection />
      <AboutUsSection />
      <FAQSection />
      <Footer />
    </Container>
  );
};

export default HomePage;

// Used to simplify process of getting image link of an image under src/assets/images
const srcImgLink = (imgName) => {
  return require("../../assets/images/" + imgName);
};

const IntroSection = () => {
  return (
    <Row
      style={{
        backgroundImage: `url(${srcImgLink("home_introbg.jpg")}`,
        backgroundSize: "cover",
      }}
    >
      {/* NavBar section  */}
      <Row>
        <Col xs={5} className="d-flex justify-center">
          <img
            src="/images/gbs_logo_long.png"
            alt="Giving Back Singapore"
            style={{ width: "80%" }}
          />
        </Col>
        <Col xs={7} className="d-flex justify-content-end align-items-center">
          <div>
            <Button className="mx-2 rounded-3">Browse Events</Button>
          </div>
          <div>
            <Button variant="secondary" className="mx-2 rounded-3">
              Community
            </Button>

            <a href="/profile">
              <Image
                src="/images/avatar_default.png"
                alt="Avatar"
                style={{ height: "45px" }}
                className="px-3"
                roundedCircle
              />
            </a>
          </div>
        </Col>
      </Row>

      <Row
        className="px-5 py-8 justify-center justify-content-md-start"
        style={{ minHeight: "40vw" }}
      >
        <Col xs={12} sm={7} md={5} xxl={3} className="my-auto pb-5">
          <Row>
            <h1 className={`${HomePageStyles["lightpink-text"]}`}>
              Having trouble finding volunteer work?
            </h1>
          </Row>
          <Row>
            <p className="text-light">
              Giving Back SG can help with its easy-to-use and convenient
              volunteer-matching service.
              <br />
              Scroll down to find out more!
            </p>
          </Row>
        </Col>
      </Row>
    </Row>
  );
};

const WhyGBSSection = () => {
  return (
    <Row className="bg-dark px-2 px-sm-5" fluid>
      {/* << Why Minerva >> Header */}
      <Row className="py-5">
        <h1 className={`text-light text-center`}>WHY GIVING BACK SG</h1>
      </Row>

      {/* Reason 1: Direct Matching */}
      <Row className="justify-center">
        <Col xs={12} md={5} className="d-flex">
          <img
            src={srcImgLink("home_locationpin.png")}
            alt="Location Pin"
            style={{ maxWidth: "30vw" }}
          />
        </Col>
        <Col
          xs={10}
          md={7}
          className="d-flex flex-column justify-center text-light my-auto"
        >
          <Row>
            <p
              className={`text-center text-md-start`}
              style={{ fontFamily: "Inter" }}
            >
              CONVENIENT
            </p>
          </Row>
          <Row>
            <h2 className={`text-center text-md-start`}>LOCATION-BASED</h2>
          </Row>
          <Row>
            <p className={`text-center text-md-start`}>
              Find volunteering stations near you!
              <br />
              Less time travelling means more time making a difference.
            </p>
          </Row>
        </Col>
      </Row>

      {/* Reason 2: User-friendly Interfaces*/}
      <Row className="justify-center flex-row-reverse">
        <Col
          xs={12}
          md={6}
          className="d-flex justify-content-end align-center p-5"
        >
          <img
            src={srcImgLink("home_highfive.png")}
            alt="Teamwork"
            style={{ maxWidth: "30vw" }}
          />
        </Col>
        <Col
          xs={10}
          md={6}
          className="d-flex flex-column justify-center text-light my-auto"
        >
          <Row>
            <p
              className={`text-center text-md-end`}
              style={{ fontFamily: "Inter" }}
            >
              EASY TO CONNECT
            </p>
          </Row>
          <Row>
            <h2 className={`text-center text-md-end`}>COMMUNITY-FOCUSED</h2>
          </Row>
          <Row>
            <p className={`text-center text-md-end`}>
              Want to find like-minded individuals?
              <br />
              Look no further! Giving Back Singapore helps connect individuals
              with similar interests.
              <br />
              Make use of our platform to find new friends!
            </p>
          </Row>
        </Col>
      </Row>

      {/* Reason 3: Highly Customisable*/}
      <Row className="justify-center pb-5">
        <Col xs={12} md={6} className="d-flex justify-center align-center">
          <img
            src={srcImgLink("home_timer.png")}
            alt="Timer"
            style={{ maxWidth: "30vw" }}
          />
        </Col>
        <Col
          xs={12}
          md={6}
          className="d-flex flex-column justify-center text-light my-auto"
        >
          <Row>
            <p className={`text-center text-md-start font-inter`}>
              TRACK YOUR HOURS
            </p>
          </Row>
          <Row>
            <h2 className={`text-center text-md-start`}>
              VOLUNTEERING RECORDS
            </h2>
          </Row>
          <Row>
            <p className={`text-center text-md-start`}>
              Need solid evidence of your volunteering activities?
              <br />
              Fret not! Giving Back Singapore automatically tracks all your
              hours to make sure that you are credited appropriately for your
              merits.
            </p>
          </Row>
        </Col>
      </Row>
    </Row>
  );
};

const AboutUsSection = () => {
  return (
    // Background image
    <Container
      fluid
      style={{
        backgroundImage: `url(${srcImgLink("home_aboutusbg.webp")})`,
        backgroundSize: "cover",
      }}
      className="p-5"
      id="GetStarted"
    >
      {/* White overlay  */}
      <Row
        className="mx-auto p-4 bg-light shadow"
        style={{ borderRadius: "20px", width: "80vw" }}
      >
        <h1>The Team</h1>
        <Row className="py-4">
          <Col md={6} className="d-flex">
            <Image
              src="/images/avatar_default.png"
              className="w-50"
              roundedCircle
            />
            <Col className="ps-3 py-2 d-flex flex-column align-items-start">
              <h3>NAME</h3>
              <h5>SHORT TITLE</h5>
              <p>DESCRIPTION</p>
            </Col>
          </Col>

          <Col md={6} className="d-flex">
            <Image
              src="/images/avatar_default.png"
              className="w-50"
              roundedCircle
            />
            <Col className="ps-3 py-2 d-flex flex-column align-items-start">
              <h3>NAME</h3>
              <h5>SHORT TITLE</h5>
              <p>DESCRIPTION</p>
            </Col>
          </Col>
        </Row>
        <Row className="py-4">
          <Col md={6} className="d-flex">
            <Image
              src="/images/avatar_default.png"
              className="w-50"
              roundedCircle
            />
            <Col className="ps-3 py-2 d-flex flex-column align-items-start">
              <h3>NAME</h3>
              <h5>SHORT TITLE</h5>
              <p>DESCRIPTION</p>
            </Col>
          </Col>

          <Col md={6} className="d-flex">
            <Image
              src="/images/avatar_default.png"
              className="w-50"
              roundedCircle
            />
            <Col className="ps-3 py-2 d-flex flex-column align-items-start">
              <h3>NAME</h3>
              <h5>SHORT TITLE</h5>
              <p>DESCRIPTION</p>
            </Col>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

const FAQSection = () => {};
