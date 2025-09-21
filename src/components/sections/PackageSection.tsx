"use client";
import "@/styles/css/pacakages.css";
import { FaCheckCircle } from "react-icons/fa";

const plans = [
  {
    name: "Basic",
    subTitle: "Linux Hosting Plan",
    price: "$40 / Yearly",
    features: [
      "1 Lifetime Free Domain",
      "5GB SSD Storage",
      "50GB Bandwidth",
      "Unlimited Emails",
      "Unlimited Mysql Databases",
      "Unlimited Sub-Domains",
      "Weekly Jetbackup Service",
      "Cloudlinux OS",
      "Imunify360 Antivirus",
      "Litespeed Webserver",
      "Softaculous 450+ Scripts",
      "Free SSL Certificate",
      "Latest Cpanel",
    ],
    highlighted: false,
  },
  {
    name: "Business",
    subTitle: "Linux Hosting Plan",
    price: "$90 / Yearly",
    features: [
      "1 Lifetime Free Domain",
      "30GB SSD Storage",
      "100GB Bandwidth",
      "Unlimited Emails",
      "Unlimited Mysql Databases",
      "Unlimited Sub-Domains",
      "Weekly Jetbackup Service",
      "Cloudlinux OS",
      "Imunify360 Antivirus",
      "Litespeed Webserver",
      "Softaculous 450+ Scripts",
      "Free SSL Certificate",
      "Latest Cpanel",
    ],
    highlighted: true,
  },
  {
    name: "Corporate",
    subTitle: "Linux Hosting Plan",
    price: "$135 / Yearly",
    features: [
      "1 Lifetime Free Domain",
      "50GB SSD Storage",
      "200GB Bandwidth",
      "Unlimited Emails",
      "Unlimited Mysql Databases",
      "Unlimited Sub-Domains",
      "Weekly Jetbackup Service",
      "Cloudlinux OS",
      "Imunify360 Antivirus",
      "Litespeed Webserver",
      "Softaculous 450+ Scripts",
      "Free SSL Certificate",
      "Latest Cpanel",
    ],
    highlighted: false,
  },
  {
    name: "Corporate Plus",
    subTitle: "Linux Hosting Plan",
    price: "$190 / Yearly",
    features: [
      "1 Lifetime Free Domain",
      "100GB SSD Storage",
      "300GB Bandwidth",
      "Unlimited Emails",
      "Unlimited Mysql Databases",
      "Unlimited Sub-Domains",
      "Weekly Jetbackup Service",
      "Cloudlinux OS",
      "Imunify360 Antivirus",
      "Litespeed Webserver",
      "Softaculous 450+ Scripts",
      "Free SSL Certificate",
      "Latest Cpanel",
    ],
    highlighted: false,
  },
];

export default function PackageSection() {
  return (
    <section id="web-hosting-packages">
      <div className="container-spc">
        <div className="package-plan-align-container">
          <div id="packages-plans" className="pricing-grid">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={`pricing-card ${
                  plan.highlighted ? "highlighted" : ""
                }`}
              >
                {plan.highlighted && (
                  <span className="badge">Most Popular</span>
                )}
                <h3>{plan.name}</h3>
                <p className="sub-title">{plan.subTitle}</p>
                <p className="price">{plan.price}</p>
                <ul>
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx}>
                      <FaCheckCircle className="icon" /> {feature}
                    </li>
                  ))}
                </ul>
                <button className="btn-choose">Sign Up</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
