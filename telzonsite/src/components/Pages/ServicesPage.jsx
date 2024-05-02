import React, { useEffect } from "react";
import { pageTitle } from "../../helper";
import Card from "../Card";
import Cta from "../Cta";
import PageHeading from "../PageHeading";
import PricingTableList from "../PricingTable/PricingTableList";
import Div from "../Div";
import SectionHeading from "../SectionHeading";
import TestimonialSlider from "../Slider/TestimonialSlider";
import Spacing from "../Spacing";

export default function ServicesPage() {
  pageTitle(
    "Expert Digital Marketing Services | Telzon Marketing - Pune & Nagpur"
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PageHeading
        title="Services"
        // bgSrc="images/service_hero_bg.jpeg"
        bgSrc="https://img.freepik.com/free-vector/vector-abstract-black-gold-luxury-background_361591-3874.jpg?t=st=1710744302~exp=1710747902~hmac=ad54fa2537752c512516336263a1f2fb8a9aab635c85338170999423125fcf60&w=826"
        pageLinkText="Services"
      />
      <Spacing lg="150" md="80" />
      <Div className="cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Services we can help you with"
                subtitle="What Can We Do"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-8">
              <Div className="row">
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Social Media Marketing"
                    // link="/service/ui-ux-design"
                    src="https://img.freepik.com/free-vector/marketing-concept-illustration_114360-7324.jpg?t=st=1710746779~exp=1710750379~hmac=e504bc49f24220a1434f6e8bbe54f33d37f814998c147fcbc651ea22eabea598&w=740"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Web Development"
                    // link="/service/reactjs-development"
                    src="https://img.freepik.com/free-vector/operating-system-concept-illustration_114360-2195.jpg?t=st=1710746291~exp=1710749891~hmac=464e7af1fb185b0e0bfb3163259dd3eef9cef6fd7d1d85674de2984ead658656&w=740"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Digital Marketing"
                    // link="/service/digital-marketing"
                    // src="/images/service_3.jpeg"
                    src="https://img.freepik.com/free-vector/digital-marketing-banner_157027-1376.jpg?t=st=1710745908~exp=1710749508~hmac=fd2a2296616f58ec0525ca324b069c80bade75f401f0b7069bd3601c915c1147&w=740"
                    alt="Digital Marketing Services by Telzon Marketing"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="SEO"
                    // link="/service/technology"
                    src="https://img.freepik.com/free-vector/seo-analytics-concept-illustration_114360-9862.jpg?t=st=1710746455~exp=1710750055~hmac=2d5911b464cde7a77aa41058f3bd21048951f80bdc0ed01021b0e3e87ba8dad0&w=740"
                    alt="SEO Training and Workshops by Telzon Marketing"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Photo Videography"
                    // link="/service/consultancy"
                    src="https://img.freepik.com/free-vector/casting-call-abstract-concept-vector-illustration-open-call-models-commercial-shootings-photo-video-casting-modelling-agency-request-audition-brand-advertising-abstract-metaphor_335657-4165.jpg?t=st=1710746550~exp=1710750150~hmac=cf776d83fc3df82188384d48e878d1836d6daef351cb7e5311f46302aae7d438&w=740"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Creative Design"
                    // link="/service/creative-design"
                    src="https://img.freepik.com/free-vector/designer-life-concept-illustration_114360-1537.jpg?t=st=1710746601~exp=1710750201~hmac=8b5cf8c93e901f1698bfa60103f4d46a12c304dfc1c426979bed96cc11d207b6&w=740"
                    alt="Content Marketing Services from Telzon Marketing"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      <Div className="container">
        <SectionHeading
          title="Providing best <br/>Services for client"
          subtitle="Services Details"
        />
        <Spacing lg="85" md="40" />
        <PricingTableList />
        <Div style={{ border: "2px solid red" }}>
          <h1>Digital Marketing Agency in Nagpur</h1>
          <h2>Best Digital Marketing Course in Nagpur</h2>
          <h3>Social Media Marketing Services</h3>
          <h3>Search Engine Optimization (SEO) Services</h3>
          <h3>Content Marketing Services</h3>
          <h3>Web Design and Development Services</h3>
        </Div>
      </Div>
      <Spacing lg="125" md="55" />
      {/* <TestimonialSlider />
      <Spacing lg="150" md="80" /> */}
      <Div className="container">
        <Cta
          title="Let’s discuss & make <br />something <i>cool</i> together"
          btnText="Schedule a Meeting"
          btnLink="http://wa.me/+919307189776"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
    </>
  );
}
