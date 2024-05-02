import React, { useState } from "react";
import { Link } from "react-router-dom";
import Div from "../Div";
import "./servicelist.scss";

const serviceData = [
  {
    title: "Digital Marketing",
    subtitle: "Next-Level Digital Marketing for Next-Level Brands",
    imgUrl:
      "https://img.freepik.com/free-photo/social-media-marketing-concept-marketing-with-applications_23-2150063170.jpg?t=st=1710740809~exp=1710744409~hmac=0309ff5dd79c576e5600e5751a66d13c631397173e3066081a5a794a2c707d61&w=360",
    href: "/service/service-details",
  },
  {
    title: "Web Development",
    subtitle: "Maximize Your Online Impact with Next-Gen Web Solutions",
    imgUrl:
      "https://img.freepik.com/free-photo/top-view-unrecognizable-hacker-performing-cyberattack-night_1098-18706.jpg?t=st=1710740511~exp=1710744111~hmac=cb2ef0965732fa92366fae8e44e90fc62f94630083159bf37f144b4b4be6c508&w=360",
    href: "/service/service-details",
  },
  {
    title: "Brand Building",
    subtitle: "Crafting Unforgettable Brands for Forward-Thinking Businesses",
    imgUrl:
      "https://img.freepik.com/free-photo/creative-light-bulb-abstract-glowing-blue-background-generative-ai_188544-8090.jpg?t=st=1710740669~exp=1710744269~hmac=930e2b02bc5e5942735167d77b33c89e6e6070688c675bd0a6956c853658b0d5&w=360",
    href: "/service/service-details",
  },

  {
    title: "Photo & Video Production",
    subtitle:
      "Transform Your Vision into Stunning Designs with Expert Graphics",
    imgUrl:
      "https://img.freepik.com/free-photo/man-filming-with-professional-camera-new-movie_23-2149066401.jpg?t=st=1710743565~exp=1710747165~hmac=a09e1a773e7ebe367b0b834ce72e34fc4ce0d2fcf8cbda5a0f33f94ed39475ce&w=360",
    href: "/service/service-details",
  },
];

export default function ServiceList({ variant }) {
  const [active, setActive] = useState(0);
  const handelActive = (index) => {
    setActive(index);
  };
  return (
    <Div className={`cs-iconbox_3_list ${variant ? variant : ""}`}>
      {serviceData.map((item, index) => (
        <Div
          className={`cs-hover_tab ${active === index ? "active" : ""}`}
          key={index}
          onMouseEnter={() => handelActive(index)}
        >
          <Link className="cs-iconbox cs-style3">
            <>
              <Div className="cs-image_layer cs-style1 cs-size_md">
                <Div className="cs-image_layer_in">
                  <img
                    src={item.imgUrl}
                    alt="Thumb"
                    className="w-100 cs-radius_15"
                  />
                </Div>
              </Div>
              <span className="cs-iconbox_icon cs-center">
                <svg
                  width={30}
                  height={29}
                  viewBox="0 0 30 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.3803 3.05172C29.4089 1.94752 28.537 1.02921 27.4328 1.00062L9.43879 0.534749C8.33459 0.506159 7.41628 1.37811 7.38769 2.48231C7.35911 3.58651 8.23106 4.50482 9.33526 4.53341L25.3299 4.94752L24.9158 20.9422C24.8872 22.0464 25.7592 22.9647 26.8634 22.9933C27.9676 23.0218 28.8859 22.1499 28.9144 21.0457L29.3803 3.05172ZM3.37714 28.5502L28.7581 4.4503L26.0039 1.54961L0.622863 25.6495L3.37714 28.5502Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <Div className="cs-iconbox_in">
                <h2 className="cs-iconbox_title">{item.title}</h2>
                <Div className="cs-iconbox_subtitle">{item.subtitle}</Div>
              </Div>
            </>
          </Link>
        </Div>
      ))}
    </Div>
  );
}
