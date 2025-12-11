"use client";
import { Accordion } from "@heroui/react";
import { Icon } from "@iconify/react";

const items = [
  {
    content:
      "Browse our products, add items to your cart, and proceed to checkout. You'll need to provide shipping and payment information to complete your purchase.",
    icon: "gravity-ui:shopping-bag",
    title: "How do I place an order?",
  },
  {
    content:
      "Yes, you can modify or cancel your order before it's shipped. Once your order is processed, you can't make changes.",
    icon: "gravity-ui:receipt",
    title: "Can I modify or cancel my order?",
  },
  {
    content:
      "We accept all major credit cards, including Visa, Mastercard, and American Express.",
    icon: "gravity-ui:credit-card",
    title: "What payment methods do you accept?",
  },
  {
    content:
      "Shipping costs vary based on your location and the size of your order. We offer free shipping for orders over $50.",
    icon: "gravity-ui:box",
    title: "How much does shipping cost?",
  },
  {
    content:
      "Yes, we ship to most countries. Please check our shipping rates and policies for more information.",
    icon: "gravity-ui:planet-earth",
    title: "Do you ship internationally?",
  },
  {
    content:
      "If you're not satisfied with your purchase, you can request a refund within 30 days of purchase. Please contact our customer support team for assistance.",
    icon: "gravity-ui:arrows-rotate-left",
    title: "How do I request a refund?",
  },
];

export default function Platos() {
  return (
    <div
  id="menu"
  className="relative py-20 px-6 bg-[#faf5f3] text-center overflow-hidden"
>

  {/* Background rustic texture */}
  <div className="absolute inset-0 bg-[url('/textures/grain.svg')] opacity-[0.18] pointer-events-none"></div>

  {/* Decorative warm accents */}
  <div className="absolute top-0 left-0 w-40 h-40 bg-red-900/20 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 right-0 w-52 h-52 bg-red-700/20 rounded-full blur-3xl"></div>

  {/* Title Section */}
  <div className="relative z-10 max-w-3xl mx-auto mb-16">
    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-red-900">
      Nuestros Platos
    </h2>

    <p className="mt-3 text-red-900/80 text-lg md:text-xl font-light">
      Sabores hechos con tradición, fuego y autenticidad.
    </p>

    {/* Rustic underline */}
    <div className="mt-6 h-[3px] w-28 mx-auto bg-gradient-to-r from-red-700 via-red-500 to-red-700 rounded-full shadow-[0_2px_6px_rgba(255,0,0,0.25)]"></div>
  </div>

  {/* Accordion Container */}
  <div className="relative z-10 flex justify-center">
    <Accordion
      className="
        w-full max-w-lg 
        bg-white/90 
        backdrop-blur-sm 
        p-4 
        rounded-xl 
        shadow-lg 
        border border-red-200/50
      "
    >
      {items.map((item, index) => (
        <Accordion.Item key={index}>
          <Accordion.Heading>
            <Accordion.Trigger
              className="
                hover:bg-red-50/60 
                rounded-lg 
                p-3 
                transition-all 
                font-medium 
                text-red-900
                flex items-center
              "
            >
              {item.icon ? (
                <Icon
                  className="mr-3 size-5 text-red-600 shrink-0"
                  icon={item.icon}
                />
              ) : null}

              {item.title}

              <Accordion.Indicator>
                <Icon icon="gravity-ui:chevron-down" className="text-red-700" />
              </Accordion.Indicator>
            </Accordion.Trigger>
          </Accordion.Heading>

          <Accordion.Panel>
            <Accordion.Body className="text-red-900/80 leading-relaxed">
              {item.content}
            </Accordion.Body>
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  </div>

</div>


  );
}
