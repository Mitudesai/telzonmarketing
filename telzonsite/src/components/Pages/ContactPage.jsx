import { Icon } from "@iconify/react";
import React, { useEffect } from "react";
import { pageTitle } from "../../helper";
import Div from "../Div";
import PageHeading from "../PageHeading";
import SectionHeading from "../SectionHeading";
import Spacing from "../Spacing";
import ContactInfoWidget from "../Widget/ContactInfoWidget";

export default function ContactPage() {
  pageTitle(
    "Contact Telzon Marketing | Digital Marketing Experts - Pune & Nagpur"
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PageHeading
        title="Contact Us"
        // bgSrc="/images/contact_hero_bg.jpeg"
        bgSrc="https://img.freepik.com/free-vector/vector-abstract-black-gold-luxury-background_361591-3874.jpg?t=st=1710744302~exp=1710747902~hmac=ad54fa2537752c512516336263a1f2fb8a9aab635c85338170999423125fcf60&w=826"
        pageLinkText="Contact"
      />
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading
              title="Do you have a project <br/>in your mind?"
              subtitle="Contact us"
            />
            <Spacing lg="55" md="30" />
            <ContactInfoWidget withIcon />
            <Spacing lg="0" md="50" />
          </Div>
          <Div className="col-lg-6">
            {/* <form action="#" className="row">
              <Div className="col-sm-6">
                <label className="cs-primary_color">Full Name*</label>
                <input type="text" className="cs-form_field" />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Email*</label>
                <input type="text" className="cs-form_field" />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Project Type*</label>
                <input type="text" className="cs-form_field" />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Mobile*</label>
                <input type="text" className="cs-form_field" />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-12">
                <label className="cs-primary_color">Mobile*</label>
                <textarea
                  cols="30"
                  rows="7"
                  className="cs-form_field"
                ></textarea>
                <Spacing lg="25" md="25" />
              </Div>
              <Div className="col-sm-12">
                <button className="cs-btn cs-style1">
                  <span>Send Message</span>
                  <Icon icon="bi:arrow-right" />
                </button>
              </Div>
            </form> */}
            <h2 className="cs-font_50 cs-m0 mt-5 cs-line_height_4 text-center">
              Contact us on WhatsApp
            </h2>
            <h3 className="cs-font_30 cs-m0 mt-5 cs-line_height_4 text-center">
              <a target="_blank" href="http://wa.me/+919307189776">
                {/* <Icon icon="fa6-brands:whatsapp" /> 9307189776 */}
                <Icon icon="logos:whatsapp-icon" className="mr-2" /> Chat with
                Us!
              </a>
            </h3>
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      {/* <Div className="cs-google_map">

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.719311254112!2d79.07871837438876!3d21.083870085885156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xae7e7485eff0aeaf%3A0x98d7c5152355b89!2sTelzon%20-%20Best%20digital%20marketing%20agency!5e0!3m2!1sen!2sin!4v1710317235806!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </Div> */}
      {/* <Spacing lg="50" md="40" /> */}
    </>
  );
}
