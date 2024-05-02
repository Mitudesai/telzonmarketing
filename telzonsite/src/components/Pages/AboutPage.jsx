import React, { useEffect } from "react";
import { pageTitle } from "../../helper";
import Cta from "../Cta";
import FunFact from "../FunFact";
import PageHeading from "../PageHeading";
import Div from "../Div";
import SectionHeading from "../SectionHeading";
import TeamSlider from "../Slider/TeamSlider";
import Spacing from "../Spacing";
import Team from "../Team";
const funfaceData = [
  {
    title: "Global Happy Clients",
    factNumber: "40K",
  },
  {
    title: "Project Completed",
    factNumber: "50K",
  },
  {
    title: "Team Members",
    factNumber: "245",
  },
  {
    title: "Digital products",
    factNumber: "550",
  },
];
const teamData = [
  {
    memberImage: "/images/main/team/himanshu.jpg",
    memberName: "Himanshu Golar",
    memberDesignation: "Photo Video Production",
    // memberSocial: {
    //   linkedin: '/',
    //   twitter: '/',
    //   youtube: '/',
    //   facebook: '/',
    // },
  },
  {
    memberImage: "/images/main/team/himanshu.jpg",
    memberName: "Himanshu Golar",
    memberDesignation: "Photo Video Production",
    // memberSocial: {
    //   linkedin: '/',
    //   twitter: '/',
    //   youtube: '/',
    //   facebook: '/',
    // },
  },
];

export default function AboutPage() {
  pageTitle(
    "About Telzon Marketing | Your Trusted Digital Partner - Pune & Nagpur"
  );
  useEffect(() => {
    // Update meta description dynamically

    document
      .querySelector('meta[name="description"]')
      .setAttribute(
        "content",
        "Hire Telzon Marketing for top-notch digital marketing services for small businesses in Nagpur. We help you achieve your online marketing goals with customized strategies."
      );
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* Start Page Heading Section */}
      <PageHeading
        title="About Us"
        // bgSrc="images/about_hero_bg.jpeg"
        bgSrc="https://img.freepik.com/free-vector/vector-abstract-black-gold-luxury-background_361591-3874.jpg?t=st=1710744302~exp=1710747902~hmac=ad54fa2537752c512516336263a1f2fb8a9aab635c85338170999423125fcf60&w=826"
        pageLinkText="About Us"
      />
      {/* End Page Heading Section */}

      {/* Start About Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-7">
            <SectionHeading
              title="Telzon: Beyond Marketing"
              subtitle="About Our Agency"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                At Telzon, we're more than marketers; we're brand
                architects.Let’s build your brand's legacy together.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="40" />
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-xl-2">
            <img
              // src="/images/about_img_1.jpeg"
              src="/images/main/about/marketing01.webp"
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-7">
            <img
              // src="images/about_img_2.jpeg"
              src="/images/main/about/marketing04.webp"
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-5">
            <img
              // src="/images/about_img_3.jpeg"
              src="/images/main/about/marketing03.webp"
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
        </Div>
      </Div>
      <Spacing lg="75" md="55" />
      {/* End About Section */}

      {/* Start Fun Fact Section */}
      {/* <Div className="container">
        <FunFact
          title="Our fun fact"
          subtitle="Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis."
          data={funfaceData}
        />
      </Div> */}
      {/* End Fun Fact Section */}

      {/* Start Why Choose Section */}
      <Spacing lg="100" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-image_layer cs-style1">
              <Div className="cs-image_layer_in">
                <img
                  // src="/images/about_img_4.jpeg"
                  src="/images/main/about/marketing02.webp"
                  // src="https://img.freepik.com/free-vector/polygonal-wireframe-business-strategy-composition-with-editable-text-images-columns-arrow-shining-particles_1284-32260.jpg?t=st=1710770131~exp=1710773731~hmac=d6db8307e43266cc852de378165504f2bb0a37fe2d29b81764909983340b8a2a&w=740"
                  alt="About"
                  className="w-100 cs-radius_15"
                />
              </Div>
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-xl-5 offset-xl-1 col-lg-6">
            <SectionHeading
              title="Highly experienced pepole with us"
              subtitle="Why Choose Us"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                Partner with Telzon for a fusion of creativity and strategic
                insight in marketing. Our team specializes in custom solutions,
                driving brand growth with impactful, resonant campaigns. Trust
                us to deliver innovative strategies that uplift your brand and
                engage your audience meaningfully.
              </p>
              {/* <Spacing lg="15" md="15" />
              <p className="cs-m0">
                This is the main factor that sets us apart from our competition
                and allows us to deliver a specialist business consultancy
                service. Our team applies its wide-ranging experience to
                determining.
              </p> */}
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="0" />
            </SectionHeading>
          </Div>
        </Div>
      </Div>
      {/* End Why Choose Section */}

      {/* Start Team Section */}
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Awesome team <br/>members"
          subtitle="Our Team"
          variant="cs-style1"
        />
        <Spacing lg="85" md="45" />
        <TeamSlider />
        {/* <Div className="container">
          {teamData.map((item, index) => (
            <Div key={index}>
              <Team
                memberImage={item.memberImage}
                memberName={item.memberName}
                memberDesignation={item.memberDesignation}
                // memberSocial={item.memberSocial}
              />
            </Div>
          ))}
        </Div> */}
      </Div>
      {/* End Team Section */}

      {/* Start CTA Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Cta
          title="Let’s disscuse make <br />something <i>cool</i> together"
          btnText="Schedule a Meeting"
          btnLink="http://wa.me/+919307189776"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
      {/* End CTA Section */}
    </>
  );
}
