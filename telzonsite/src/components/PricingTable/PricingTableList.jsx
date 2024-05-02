import React from "react";
import { useState } from "react";
import PricingTable from ".";
import Section from "../Div";
import Spacing from "../Spacing";

export default function PricingTableList() {
  const [tab, setTab] = useState("monthly");
  return (
    <Section className="position-relative">
      <Section className="row">
        <Section className="col-lg-4">
          <PricingTable
            title="Digital Marketing"
            price="29"
            currency="$"
            timeline="monthly"
            features={[
              "PPC Marketing",
              "Social Media Management",
              "Search Engine Marketing (SEM)",
              "Email Marketing",
              "Content Marketing",
              "Influencer Marketing",
            ]}
            btnText="Contact Now"
            btnLink="/"
          />
          <Spacing lg="25" md="25" />
        </Section>
        <Section className="col-lg-4">
          <PricingTable
            title="Web Development"
            price="29"
            currency="$"
            timeline="monthly"
            features={[
              "Website Design and Development",
              "Landing Pages",
              "Full Stack Development",
              "Search Engine Optimization (SEO)",
              "Website Maintenance & Support",
            ]}
            btnText="Contact Now"
            btnLink="/"
          />
          <Spacing lg="25" md="25" />
        </Section>
        <Section className="col-lg-4">
          <PricingTable
            title="Social Media Marketing"
            price="29"
            currency="$"
            timeline="monthly"
            features={[
              "Facebook campaign",
              "Instagram Advertising",
              "Content Marketing",
              "Influencer Marketing",
              "Social Media Strategy",
              "Social Media Advertising",
              "Social Media Content Creation",
            ]}
            btnText="Contact Now"
            btnLink="/"
          />
          <Spacing lg="25" md="25" />
        </Section>

        <Section className="col-lg-4">
          <PricingTable
            title="Photo Video Production"
            price="29"
            currency="$"
            timeline="monthly"
            features={[
              "Product Photography",
              "Food Photography",
              "Portrait Photography",
              "Architectural Photography",
              "Event Videography",
              "Promotional Videos",
            ]}
            btnText="Contact Now"
            btnLink="/"
          />
          <Spacing lg="25" md="25" />
        </Section>
      </Section>
    </Section>
  );
}
