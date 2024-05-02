import React from "react";
import Div from "../Div";
import "./logolist.scss";
const partnerLogos = [
  {
    src: "/images/clientLogos/LM.png",
    alt: "Partner",
  },
  {
    src: "/images/clientLogos/fp.png",
    alt: "Partner",
  },
  {
    src: "/images/clientLogos/hardeo.png",
    alt: "Partner",
  },
  {
    src: "/images/clientLogos/kamakshi.png",
    alt: "Partner",
  },
  {
    src: "/images/clientLogos/chaarminaar.png",
    alt: "Partner",
  },
  {
    src: "/images/clientLogos/taywade.png",
    alt: "Partner",
  },
];

export default function LogoList() {
  return (
    <Div className="cs-partner_logo_wrap">
      {partnerLogos.map((partnerLogo, index) => (
        <div
          className="cs-partner_logo"
          key={index}
          // style={{ display: "flex", flexWrap: "wrap" }}
        >
          <img
            src={partnerLogo.src}
            alt={partnerLogo.alt}
            // style={{ height: "4rem" }}
          />
        </div>
      ))}
    </Div>
  );
}
