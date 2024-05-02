import React, {useState, Fragment, useEffect } from "react";
import { pageTitle } from "../../helper";
import PageHeading from "../PageHeading";
import Card from '../Card';
import Div from "../Div";
import SectionHeading from "../SectionHeading";
import Spacing from "../Spacing";
import Team from "../Team";
import PricingTableList from '../PricingTable/PricingTableList';
import { useParams } from "react-router-dom";


const NewLanding = () => {
  const { city } = useParams();
  console.log(city)

  const [openAccordion, setOpenAccordion] = useState(null);
const toggleAccordion = (index) => {
  setOpenAccordion(openAccordion == index ? null : index);

}
const [scroll, setScroll] = useState(0);
  const testimonialSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768, // Adjust breakpoint according to your design
        settings: {
          slidesToShow: 1, // Display 2 items at a time on desktop
        },
      },
    ],
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

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

  // const submitForm = async () =>{
  //   try {
  //     const response = await fetch(`${BASEURL}telzonmarketing\telzonsite\src\hostDomainHelper.js`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(formData)
  //     });
  //     setFormData({
  //       name: "",
  //       email: "",
  //       number: "",
  //       message: "",
  //     })
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  const [menuActive, setMenuState] = useState(false);

  const handleScroll = () => setScroll(document.documentElement.scrollTop);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   submitForm();
  // };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const className = scroll > 80 ? "fixed-navbar active" : "fixed-navbar";

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };
  console.log(city)
  return (
    <Fragment>
      <PageHeading
        // title="About Us"
        // bgSrc="images/about_hero_bg.jpeg"
        bgSrc="https://wallpapercave.com/wp/wp3950068.jpg"
        // pageLinkText="About Us"
      />

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
          {/* <Div className="col-lg-7">
            <img
              // src="images/about_img_2.jpeg"
              src="/images/main/about/marketing04.webp"
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div> */}
          {/* <Div className="col-lg-5">
            <img
              // src="/images/about_img_3.jpeg"
              src="/images/main/about/marketing03.webp"
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div> */}
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      <Div id="service">
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Services we can help you with"
                subtitle="What Can We Do"
                btnText="See All Services"
                btnLink="/service"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-8">
              <Div className="row">
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="UI/UX design"
                    link="/service/service-details"
                    src="/images/service_1.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="React.js Development"
                    link="/service/service-details"
                    src="/images/service_2.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Digital Marketing"
                    link="/service/service-details"
                    src="/images/service_3.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Technology"
                    link="/service/service-details"
                    src="/images/service_4.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>

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


      <section className="faq-section pt-50 pb-70" style={{ backgroundColor: "#000000" }}>
  <div className="container">
    <h2 className="text-center mb-5 mt-5" style={{ color: "#f8f8ff" }}>Frequently Asked Questions</h2>
    <div className="accordion mt-4" id="accordionExample">
      {FAQData.map((faq, index) => (
        <div className="accordion-item" key={index}>
          <h2 className="accordion-header" id={`heading${index}`}>
            <button
              className="accordion-button"
              type="button"
              style={{ color: "#000000" }}
              onClick={() => toggleAccordion(index)}
            >
              {faq.question}
            </button>
          </h2>
          <div
            id={`collapse${index}`}
            className={`accordion-collapse collapse ${openAccordion === index ? "show" : ""}`}
            aria-labelledby={`heading${index}`}
            data-bs-parent="#accordionExample"
            style={{ backgroundColor: "#ffffff" }}
          >
            <div className="accordion-body" style={{ color: "#000000" }}>{faq.answer}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
    </Fragment>
  )


};

export default NewLanding;

const FAQData = [
  {
    question: "Question 1: What types of accommodation do you offer?",
    answer: "Answer 1: We offer various types of accommodation including single rooms, double rooms, suites, and dormitories.",
  },
  {
    question: "Question 2: What amenities are included with the accommodation?",
    answer: "Answer 2: Our accommodation comes with amenities such as free Wi-Fi, complimentary breakfast, air conditioning, and 24/7 security.",
  },
  {
    question: "Question 3: Do you provide laundry services?",
    answer: "Answer 3: Yes, we offer laundry services for our guests.",
  },
  {
    question: "Question 4: Is parking available on-site?",
    answer: "Answer 4: Yes, we provide parking facilities for our guests.",
  },
]
