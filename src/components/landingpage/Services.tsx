import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaRegClipboard } from "react-icons/fa";
import { MdDesignServices, MdSpaceDashboard } from "react-icons/md";
import { RiArmchairLine } from "react-icons/ri";

const servicesData = [
  {
    title: "Interior Design Consultation",
    icon: <MdDesignServices className="text-primary mr-2 text-3xl" />,
    content:
      "Our experts provide personalized interior design consultations to help you create a space that reflects your style and needs.",
  },
  {
    title: "Custom Furniture & Decor",
    icon: <RiArmchairLine className="text-primary mr-2 text-3xl" />,
    content:
      "We offer custom furniture and decor solutions tailored to your preferences, ensuring every piece fits perfectly in your home.",
  },
  {
    title: "Space Planning & Layout",
    icon: <MdSpaceDashboard className="text-primary mr-2 text-3xl" />,
    content:
      "Maximize your space with our professional space planning and layout services, designed for both functionality and aesthetics.",
  },
  {
    title: "Project Management",
    icon: <FaRegClipboard className="text-primary mr-2 text-3xl" />,
    content:
      "From concept to completion, our team manages your project efficiently, keeping you updated every step of the way.",
  },
];

export function Services() {
  return (
    <section id="service" className="w-full py-16 bg-white flex flex-col items-center container mx-auto px-4">
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="text-sm md:text-base font-medium mb-4 text-white text-center bg-secondary rounded-full px-4 py-1 shadow-md w-fit">
          Services
        </h1>
        <h3 className="text-2xl md:text-4xl font-medium mb-2">What we do</h3>
        <p className="text-lg md:text-xl text-gray-700 text-center max-w-2xl mb-8">
          Find out which one of our services fit the needs of your project
        </p>
      </div>
      <Accordion type="single" collapsible className="w-full">
        {servicesData.map((service, idx) => (
          <AccordionItem key={idx} value={`item-${idx}`}>
            <AccordionTrigger className="text-xl font-normal cursor-pointer hover:no-underline">
              <span className="flex items-center gap-2">
                {service.icon}
                {service.title}
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-base font-light">
              {service.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
