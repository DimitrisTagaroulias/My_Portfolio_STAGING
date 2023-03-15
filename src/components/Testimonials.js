import React from "react";
import TestimonialsCarousel from "./TestimonialsCarousel";

const Testimonials = () => {
  return (
    <div id="testimonials" className="testimonials">
      <div className="container">
        <div className="testimonials-content">
          <h1>my happy clients</h1>
          <TestimonialsCarousel />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
