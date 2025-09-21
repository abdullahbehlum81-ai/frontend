"use client";
import "@/styles/css/hostingPlans.css";
import { useState } from "react";
import PackageSection from "./PackageSection";
import DomainPackage from "./DomainPackage";
function ChooseHostingPlans() {
  const [View, setView] = useState<"Domain" | "Web Hosting">("Domain");
  return (
    <section id="choose-hosting-plan-section">
      {" "}
      <div className="main-container">
        <div className="choose-hosting-sec-container container-spc">
          <div className="choose-hosting-sec-header">
            <h2>Choose Hosting Plan</h2>
            <p>Choose the best plan tailored to your needs.</p>
            <span className="guarantee-text">
              15 Days Money Back Guarantee!
            </span>

            <div className="choose-hosting-btn-wrap">
              <button
                className={`choose-hosting-btn ${
                  View === "Domain" ? "active-hosting-btn" : ""
                }`}
                onClick={() => setView("Domain")}
                type="button"
              >
                Domain
              </button>
              <button
                className={`choose-hosting-btn ${
                  View === "Web Hosting" ? "active-hosting-btn" : ""
                }`}
                onClick={() => setView("Web Hosting")}
                type="button"
              >
                Web Hosting
              </button>
            </div>
          </div>

          {View === "Domain" ? <DomainPackage /> : <PackageSection />}
        </div>
      </div>
    </section>
  );
}

export default ChooseHostingPlans;
