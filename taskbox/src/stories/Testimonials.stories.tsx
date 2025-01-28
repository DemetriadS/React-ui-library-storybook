import React from "react";
import { Testimonials } from "../components";
import { testimonialsData } from "../data/testimonialsData";

type TestimonialsProps = React.ComponentProps<typeof Testimonials>;

export default {
  title: "Example/Testimonials",
  component: Testimonials,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    testimonials: {
      control: "object",
      description: "Array of testimonials",
    },
    cardWidth: {
      control: "text",
      description: "Card width for the testimonial.",
    },
    style: {
      control: "object",
      description: "Inline styles for custom card styling.",
    },
  },
};

export const Default = (args: TestimonialsProps) => (
  <Testimonials cardWidth="140px" {...args} />
);

Default.args = {
  testimonials: testimonialsData,
};

export const EmptyData = () => <Testimonials testimonials={[]} />;

export const CustomData = () => {
  const customData = [
    {
      avatar: "/src/images/testimony-person1.jpg",
      name: "Alice Cooper",
      designation: "UX Designer",
      feedback:
        "This platform has completely changed my workflow. Highly recommend it!",
    },
    {
      avatar: "/src/images/testimony-person2.jpg",
      name: "Bob Marley",
      designation: "Marketing Director",
      feedback: "A fantastic tool! The usability and design are top.",
    },
  ];

  return <Testimonials testimonials={customData} />;
};
