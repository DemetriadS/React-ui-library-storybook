import React, { useState } from "react";
import { Typography, Icon, Box, Button } from "../";
import { useWindowSize } from "../../hooks/useWindowSize";
import "./Testimonials.css";
import { PLACEHOLDER_TEXTS } from "../../utils/constants";

interface Testimonial {
  avatar: string;
  name: string;
  designation: string;
  feedback: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
  cardWidth?: string;
  style?: React.CSSProperties;
}

const Testimonials: React.FC<TestimonialsProps> = ({
  testimonials,
  cardWidth,
  style,
}) => {
  const { width } = useWindowSize();
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = width <= 1024 ? 2 : 3;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(
        prevIndex + 1,
        Math.ceil(testimonials.length / itemsPerSlide) - 1
      )
    );
  };

  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled =
    currentIndex === Math.ceil(testimonials.length / itemsPerSlide) - 1;

  return (
    <Box className="testimonials-container">
      <Typography variant="h2" style={{ color: "#fff", fontSize: "32px" }}>
        {PLACEHOLDER_TEXTS.USERS_SAY}
      </Typography>
      <Box className="testimonials-slider" style={style}>
        <Box className="testimonials-row">
          <Button
            onClick={handlePrev}
            className={`slider-arrow slider-arrow-left ${
              isPrevDisabled ? "arrow-hidden" : ""
            }`}
            aria-label="Previous testimonials"
            disabled={isPrevDisabled}
          >
            ←
          </Button>
          {testimonials
            .slice(currentIndex, currentIndex + itemsPerSlide)
            .map((testimonial, index) => (
              <Box
                key={index}
                className="testimonial-card"
                style={
                  cardWidth
                    ? ({
                        "--testimonial-card-width": cardWidth,
                      } as React.CSSProperties)
                    : undefined
                }
              >
                <Icon
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  size={64}
                />
                <Typography variant="h3" className="testimonial-name">
                  {testimonial.name}
                </Typography>
                <Typography variant="h2" className="testimonial-designation">
                  {testimonial.designation}
                </Typography>
                <Typography variant="p" className="testimonial-feedback">
                  "{testimonial.feedback}"
                </Typography>
              </Box>
            ))}
          <Button
            onClick={handleNext}
            className={`slider-arrow slider-arrow-right ${
              isNextDisabled ? "arrow-hidden" : ""
            }`}
            aria-label="Next testimonials"
            disabled={isNextDisabled}
          >
            →
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonials;
