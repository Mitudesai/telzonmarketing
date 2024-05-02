import React from "react";
import Spacing from "../Spacing";
import Card from "../Card";
import Div from "../Div";
import SectionHeading from "../SectionHeading";

const HomeServices = () => {
  return (
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
                  title="Websites"
                  // link="/service/ui-ux-design"
                  src="/images/service_1.jpeg"
                  alt="Service"
                />
                <Spacing lg="0" md="30" />
              </Div>
              <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
              <Div className="col-lg-3 col-sm-6">
                <Card
                  title="Web Development"
                  // link="/service/reactjs-development"
                  src="/images/service_2.jpeg"
                  alt="Service"
                />
                <Spacing lg="0" md="30" />
              </Div>
              <Div className="col-lg-3 col-sm-6">
                <Card
                  title="Digital Marketing"
                  // link="/service/digital-marketing"
                  src="/images/service_3.jpeg"
                  alt="Service"
                />
                <Spacing lg="0" md="30" />
              </Div>
              <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
              <Div className="col-lg-3 col-sm-6">
                <Card
                  title="SEO"
                  // link="/service/technology"
                  src="/images/service_4.jpeg"
                  alt="Service"
                />
                <Spacing lg="0" md="30" />
              </Div>
              <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
              <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
              <Div className="col-lg-3 col-sm-6">
                <Card
                  title="Consultancy"
                  // link="/service/consultancy"
                  src="/images/service_5.jpeg"
                  alt="Service"
                />
                <Spacing lg="0" md="30" />
              </Div>
              <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
              <Div className="col-lg-3 col-sm-6">
                <Card
                  title="Creative Design"
                  // link="/service/creative-design"
                  src="/images/service_6.jpeg"
                  alt="Service"
                />
                <Spacing lg="0" md="30" />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
    </Div>
  );
};

export default HomeServices;
