import { Icon } from "@iconify/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { pageTitle } from "../../helper";
import Cta from "../Cta";
import PageHeading from "../PageHeading";
import Portfolio from "../Portfolio";
import Div from "../Div";
import SectionHeading from "../SectionHeading";
import Spacing from "../Spacing";
import { domain } from "../../hostDomainHelper";
const portfolioData = [
  {
    title: "Colorful Art Work",
    subtitle: "See Details",
    href: "/portfolio/portfolio-details",
    src: "/images/portfolio_1.jpeg",
    category: "ui_ux_design",
  },
  {
    title: "Colorful Art Work",
    subtitle: "See Details",
    href: "/portfolio/portfolio-details",
    src: "/images/portfolio_5.jpeg",
    category: "logo_design",
  },
  {
    title: "Colorful Art Work",
    subtitle: "See Details",
    href: "/portfolio/portfolio-details",
    src: "/images/portfolio_6.jpeg",
    category: "web_design",
  },
  {
    title: "Colorful Art Work",
    subtitle: "See Details",
    href: "/portfolio/portfolio-details",
    src: "/images/portfolio_7.jpeg",
    category: "mobile_apps",
  },
  {
    title: "Colorful Art Work",
    subtitle: "See Details",
    href: "/portfolio/portfolio-details",
    src: "/images/portfolio_8.jpeg",
    category: "ui_ux_design",
  },
  {
    title: "Colorful Art Work",
    subtitle: "See Details",
    href: "/portfolio/portfolio-details",
    src: "/images/portfolio_9.jpeg",
    category: "web_design",
  },
  {
    title: "Colorful Art Work",
    subtitle: "See Details",
    href: "/portfolio/portfolio-details",
    src: "/images/portfolio_6.jpeg",
    category: "logo_design",
  },
  {
    title: "Colorful Art Work",
    subtitle: "See Details",
    href: "/portfolio/portfolio-details",
    src: "/images/portfolio_4.jpeg",
    category: "ui_ux_design",
  },
  {
    title: "Colorful Art Work",
    subtitle: "See Details",
    href: "/portfolio/portfolio-details",
    src: "/images/portfolio_5.jpeg",
    category: "logo_design",
  },
  {
    title: "Colorful Art Work",
    subtitle: "See Details",
    href: "/portfolio/portfolio-details",
    src: "/images/portfolio_6.jpeg",
    category: "web_design",
  },
];
const categoryMenu = [
  {
    title: "Web Design",
    category: "web_design",
  },
  {
    title: "UI/UX Design",
    category: "ui_ux_design",
  },
  {
    title: "Mobile Apps",
    category: "mobile_apps",
  },
  {
    title: "Logo Design",
    category: "logo_design",
  },
];

export default function PortfolioPage() {
  pageTitle(
    "Digital Marketing Case Studies | Telzon Marketing - Pune & Nagpur"
  );
  const [portfolio, setPortfolio] = useState([]);
  const [active, setActive] = useState("all");
  const [itemShow, setItemShow] = useState(7);

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
    async function getPortfolio() {
      // const res = await fetch("http://localhost:5173/api/post/getPosts");

      const res = await fetch(`${domain}/api/post/getposts?category=portfolio`);

      const data = await res.json();

      console.log(data.posts);
      setPortfolio(data.posts);
    }
    getPortfolio();
  }, []);
  return (
    <>
      {/* <PageHeading
        title="Portfolio"
        bgSrc="images/portfolio_hero_bg.jpeg"
        pageLinkText="Portfolio"
      /> */}
      <Spacing lg="145" md="80" />
      <Div className="container">
        <Div className="cs-portfolio_1_heading">
          <SectionHeading title="Some recent work" subtitle="Our Portfolio" />
          {/* <Div className="cs-filter_menu cs-style1">
            <ul className="cs-mp0 cs-center">
              <li className={active === "all" ? "active" : ""}>
                <span onClick={() => setActive("all")}>All</span>
              </li>
              {categoryMenu.map((item, index) => (
                <li
                  className={active === item.category ? "active" : ""}
                  key={index}
                >
                  <span onClick={() => setActive(item.category)}>
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </Div> */}
        </Div>
        <Spacing lg="90" md="45" />
        <Div className="row">
          {portfolio &&
            portfolio.slice(0, itemShow).map((item, index) => (
              <Div
                className={`${
                  index === 3 || index === 6 ? "col-lg-8" : "col-lg-4"
                } ${
                  active === "all"
                    ? ""
                    : !(active === item.category)
                    ? "d-none"
                    : ""
                }`}
                key={index}
              >
                <Portfolio
                  title={item.title}
                  subtitle={item.subtitle}
                  href={item.slug}
                  src={item.image}
                  variant="cs-style1 cs-type1"
                />
                <Spacing lg="25" md="25" />
              </Div>
            ))}
        </Div>

        <Div className="text-center">
          {portfolioData.length <= itemShow ? (
            ""
          ) : (
            <>
              <Spacing lg="65" md="40" />
              <span
                className="cs-text_btn"
                onClick={() => setItemShow(itemShow + 3)}
              >
                <span>Load More</span>
                <Icon icon="bi:arrow-right" />
              </span>
            </>
          )}
        </Div>
      </Div>
      <Spacing lg="145" md="80" />
      <Cta
        title="info@telzonmarketing.in"
        bgSrc="/images/cta_bg_2.jpeg"
        variant="rounded-0"
      />
    </>
  );
}
