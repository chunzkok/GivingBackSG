import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

const HomePage = () => {
  return (
    <Container fluid>
      <IntroSection />
      <WhyGBSSection />
      <AboutUsSection />
      <FAQSection />
    </Container>
  );
};

export default HomePage;

// Used to simplify process of getting image link of an image under src/assets/images
const srcImgLink = (imgName) => {
  return `url("${require("../../assets/images/" + imgName)}")`;
};

const IntroSection = () => {
  return (
    <Row
      style={{
        backgroundImage: srcImgLink("home_introbg.jpg"),
        backgroundSize: "cover",
      }}
    >
      {/* NavBar section  */}
      <Row>
        <Col xs={5} className="d-flex justify-center">
          <img src="/images/gbs_logo_long.png" alt="Giving Back Singapore" style={{width:"80%", }}/>
        </Col>
        <Col xs={7} className="d-flex justify-content-end align-items-center">
            <div>

            <Button className="mx-2 rounded-3" size="sm">
                Browse Events
            </Button>
            </div>
            <div>

            <Button className="mx-2 rounded-3" size="sm">
                Community
            </Button>

            <a href="/profile">
                <Image src="/images/avatar_default.png" alt="Avatar" style={{height: "45px"}} className="px-3" roundedCircle/>
            </a>
            </div>
        </Col>
      </Row>
    </Row>
  );
};

const WhyGBSSection = () => {};

const AboutUsSection = () => {};

const FAQSection = () => {};
