"use client";
import { useHeaderTitle } from "@/context/HeaderTitleContext";
import { useEffect } from "react";
import { FaPlus } from "react-icons/fa";

function EditHeroSection() {
  const { setHeaderTitle } = useHeaderTitle();
  useEffect(() => {
    setHeaderTitle("Hero Section Customization");
  }, [setHeaderTitle]);

  return (
    <div className="card">
      <div className="card_header page-header-wrap">
        <div className="page-header-content-wrap">
          <h2 className="myPage-title">Hero Section Customization</h2>
          <button
            type="button"
            className="bs-btn bs-btn-primary page-item-wrap"
          >
            <FaPlus /> Add New Banner
          </button>
        </div>
      </div>
      <div className="card_body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nulla ad
        natus animi modi amet nostrum, minima facilis tempora ratione ullam
        laudantium dolorum esse, nesciunt corporis ipsam temporibus tempore.
        Vitae.
      </div>
    </div>
  );
}

export default EditHeroSection;
