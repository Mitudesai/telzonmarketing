import React from "react";
import Div from "../Div";
import ContactInfoWidget from "../Widget/ContactInfoWidget";
import MenuWidget from "../Widget/MenuWidget";
import Newsletter from "../Widget/Newsletter";
import SocialWidget from "../Widget/SocialWidget";
import TextWidget from "../Widget/TextWidget";
import "./footer.scss";
const copyrightLinks = [
  {
    title: "Terms of Use",
    href: "/",
  },
  {
    title: "Privacy Policy",
    href: "/",
  },
];

const serviceMenu = [
  {
    title: "UI/UX design",
    href: "/service/service-details",
  },
  {
    title: "WP development",
    href: "/service/service-details",
  },
  {
    title: "Digital marketing",
    href: "/service/service-details",
  },
  {
    title: "React development",
    href: "/service/service-details",
  },
];

export default function Footer({ copyrightText, logoSrc, logoAlt, text }) {
  return (
    <footer className="cs-fooer">
      <Div className="cs-fooer_main">
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-8 col-sm-6">
              <Div className="cs-footer_item ">
                <TextWidget
                  logoSrc="images/main/telzonlogo.png"
                  logoAlt="Logo"
                  text="At Telzon Marketing, we're masters at making your brand shine. We create content that tells your story in a way that everyone remembers. We're young, full of energy, and passionate about what we do.
"
                />
                <SocialWidget />
              </Div>
            </Div>
            {/* <Div className="col-lg-4 col-sm-6">
              <Div className="cs-footer_item">
                <MenuWidget menuItems={serviceMenu} menuHeading="Services" />
              </Div>
            </Div> */}
            <Div className="col-lg-4 col-sm-6">
              <Div className="cs-footer_item">
                <ContactInfoWidget title="Contact Us" />
              </Div>
            </Div>
            {/* <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <Newsletter
                  title="Subscribe"
                  subtitle="At vero eos et accusamus et iusto odio as part dignissimos ducimus qui blandit."
                  placeholder="example@gmail.com"
                />
              </Div>
            </Div> */}
          </Div>
        </Div>
      </Div>
      <Div className="container">
        <Div className="cs-bottom_footer">
          <Div className="cs-bottom_footer_left">
            <Div className="cs-copyright">
              Copyright © {new Date().getFullYear()} TelZon Marketing
            </Div>
          </Div>
          <Div className="cs-bottom_footer_right">
            {/* <MenuWidget menuItems={copyrightLinks} variant=" cs-style2" /> */}
            <a
              target="_blank"
              href="http://wa.me/+919307189776"
              rel="noreferrer"
            >
              +91 9307189776
            </a>
            {" | "}
            <a href="mailto:info@telzonmarketing.in">info@telzonmarketing.in</a>
          </Div>
        </Div>
      </Div>
    </footer>
  );
}
