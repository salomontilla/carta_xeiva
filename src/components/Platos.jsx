"use client";
import { Accordion } from "@heroui/react";
import { Icon } from "@iconify/react";
import Reveal from "./Reveal";

const items = {
  tipicos_xeiva: [
    {
      nombre: "Carnes al horno Xeiva",
      descripcion:
        "Res, pollo y cerdo acompañados de papa salada, maduro melao, yuca y guacamole",
      precio: 32000,
    },
    {
      nombre: "Sancocho de gallina criolla",
      descripcion:
        "Bandeja con 1/4 de gallina, arroz, yuca, platano, papa y una taza de sopa",
      precio: 35000,
    },
    {
      nombre: "Sancocho de gallina criolla entera",
      precio: 180000,
    },
    {
      nombre: "Taza de sancocho",
      precio: 6000,
    },
  ],
  carnes_res: [
    {
      nombre: "Lomito de la casa",
      descripcion:
        "Lomo fino de res, con lonchitas de queso crema, hogao, maíz tierno, acompañado con patacón y arroz",
      precio: 36000,
    },
    {
      nombre: "Solomillo Fusión",
      descripcion:
        "Lomo fino de res en champiñón y tocineta, acompañado con patacón y arroz",
      precio: 38000,
    },
    {
      nombre: "Churrasco",
      descripcion: "Con papa salada, maduro melao y ensalada",
      precio: 35000,
    },
  ],
  carnes_cerdo: [
    {
      nombre: "Lomo de cerdo",
      descripcion: "Con papa salada, maduro meló y ensalada",
      precio: 34000,
    },
    {
      nombre: "Lomo de cerdo en salsa hawaiana",
      descripcion: "Con papa a la francesa y arroz",
      precio: 35000,
    },
    {
      nombre: "Lomo de cerdo campestre",
      descripcion:
        "Lomo de cerdo con lonchas de queso crema, hogao, maíz tierno, acompañado de patacones y arroz",
      precio: 36000,
    },
    {
      nombre: "Lomo de cerdo en salsa de champiñones y tocineta",
      descripcion: "Con papa a la francesa y arroz",
      precio: 36000,
    },
    {
      nombre: "Chuleta de cerdo",
      descripcion: "Con papa a la francesa y ensalada",
      precio: 35000,
    },
    {
      nombre: "Lomo de cerdo salsa BBQ",
      descripcion: "Con papa a la francesa",
      precio: 35000,
    },
  ],
  pollos: [
    {
      nombre: "Pechuga Xeiva",
      descripcion:
        "Con duraznos y banano meló bañados en crema de leche, acompañada de papa a la francesa y ensalada",
      precio: 34000,
    },
    {
      nombre: "Pechuga en salsa de champiñones y tocineta",
      descripcion: "Con papa a la francesa y arroz",
      precio: 35000,
    },
    {
      nombre: "Pechuga Montañera",
      descripcion:
        "Pechuga con lonchitas de queso crema, hogao, maíz tierno, acompañada con patacón y arroz",
      precio: 35000,
    },
    {
      nombre: "Pechuga Napolitana",
      descripcion:
        "Pechuga de pollo con lonchitas de queso, rodajas de tomate, papa a la francesa y ensalada",
      precio: 33000,
    },
    {
      nombre: "Pechuga Hawaiana",
      descripcion: "Papas a la francesa y arroz",
      precio: 34000,
    },
    {
      nombre: "Milanesa de pollo",
      descripcion:
        "Filete de pechuga apanado acompañado de papa a la francesa y ensalada",
      precio: 34000,
    },
  ],
  pescados: [
    {
      nombre: "Trucha en salsa de camarones",
      descripcion: "Con papa a la francesa y arroz",
      precio: 36000,
    },
    {
      nombre: "Trucha ahumada",
      descripcion: "Con patacón y ensalada",
      precio: 32000,
    },
    {
      nombre: "Trucha al ajillo",
      descripcion: "Con papa a la francesa y ensalada",
      precio: 33000,
    },
    {
      nombre: "Mojarra dorada",
      descripcion: "Con patacón y ensalada",
      precio: 34000,
    },
    {
      nombre: "Salmón dorado en salsa de la casa",
      descripcion: "Con papa a la francesa y ensalada",
      precio: 42000,
    },
    {
      nombre: "Salmón en salsa de uchuvas",
      descripcion: "Con papa a la francesa y ensalada",
      precio: 42000,
    },
  ],
  bebidas: {
    jugos_tipicos_xeiva: [
      {
        tipo: "En jarra",
        precio: 13000,
      },
      {
        tipo: "Media jarra",
        precio: 7000,
      },
      {
        tipo: "En copa",
        precio: 4000,
      },
    ],
    bebidas_generales: [
      { nombre: "Agua en botella", precio: 3000 },
      { nombre: "Gaseosa personal", precio: 4000 },
      { nombre: "Gaseosa (1.5 L)", precio: 8000 },
      { nombre: "Cerveza en lata (Aguila, Club)", precio: 5000 },
      { nombre: "Copa Ginger (Cerezada)", precio: 8000 },
      { nombre: "Limonada de coco (copa)", precio: 10000 },
      { nombre: "Limonada Cerezada (copa)", precio: 8000 },
      { nombre: "Soda de frutos silvestres rojos", precio: 10000 },
      { nombre: "Soda de frutos tropicales amarillos", precio: 10000 },
    ],
  },
  postres: [
    "Leche asada",
    "Durazno",
    "Milo",
    "Oreo",
    "Maracuyá",
    "Limón",
    "Frutos Rojos",
  ],
  por_porcion: [
    { nombre: "Papa a la francesa", precio: 7000 },
    { nombre: "Patacón", precio: 5000 },
    { nombre: "Arroz", precio: 3000 },
  ],
};

const categoryIcons = {
  tipicos_xeiva: "mdi:pot-steam",
  carnes_res: "mdi:cow",
  carnes_cerdo: "mdi:pig",
  pollos: "mdi:food-drumstick",
  pescados: "mdi:fish",
  bebidas: "mdi:glass-cocktail",
  postres: "mdi:cupcake",
  por_porcion: "mdi:food-variant",
  jugos_tipicos_xeiva: "mdi:fruit-cherries",
  bebidas_generales: "mdi:bottle-soda",
};

const categoryTitles = {
  tipicos_xeiva: "Típicos Xeiva",
  carnes_res: "Res",
  carnes_cerdo: "Cerdo",
  pollos: "Pollo",
  pescados: "Pescados",
  bebidas: "Bebidas",
  postres: "Postres $8.000",
  por_porcion: "Porciones",
  jugos_tipicos_xeiva: "Jugos Típicos",
  bebidas_generales: "Bebidas Generales",
};

const formatPrice = (price) => {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(price);
};

const renderCategoryContent = (categoryKey, content) => {
  if (Array.isArray(content)) {
    return (
      <ul className="space-y-4">
        {content.map((item, idx) => {
          if (typeof item === "string") {
            return (
              <li
                key={idx}
                className="flex justify-between items-center border-b border-red-900/10 pb-2 last:border-0"
              >
                <span className="font-medium">{item}</span>
              </li>
            );
          }
          return (
            <li
              key={idx}
              className="flex flex-col border-b border-red-900/10 pb-3 last:border-0"
            >
              <div className="flex justify-between items-baseline">
                <span className="font-semibold text-red-900">
                  {item.nombre || item.tipo}
                </span>
                <span className="text-red-800 font-bold ml-4">
                  {formatPrice(item.precio)}
                </span>
              </div>
              {item.descripcion && (
                <p className="text-sm text-red-900/70 mt-1 italic">
                  {item.descripcion}
                </p>
              )}
            </li>
          );
        })}
      </ul>
    );
  } else if (typeof content === "object" && content !== null) {
    return (
      <div className="space-y-6">
        {Object.entries(content).map(([subKey, subContent]) => (
          <div key={subKey}>
            <h4 className="font-semibold text-lg text-red-800 mb-3 ml-2 border-l-4 border-red-900 pl-2">
              {categoryTitles[subKey] || subKey}
            </h4>
            {renderCategoryContent(subKey, subContent)}
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export default function Platos() {
  return (
    <div
      id="menu"
      className="relative py-20 px-6 bg-red-900 text-center overflow-hidden"
    >
      {/* Title Section */}
      <div className="relative z-10 max-w-3xl mx-auto mb-16">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-red-50">
            Nuestros Platos
          </h2>

          {/* Rustic underline */}

          <div className="mt-6 h-[2px] w-full mx-auto bg-gradient-to-r from-red-300 via-red-200 to-red-100 rounded-full shadow-[0_2px_6px_rgba(255,0,0,0.25)]"></div>
        </Reveal>
      </div>

      {/* Accordion Container */}
      <Reveal>
      <div className="relative z-10 flex justify-center">
        <Accordion
          allowsMultipleExpanded
          className="
    w-full max-w-lg 
    rounded-xl 
    p-4 
    shadow-lg 
    bg-amber-50
  "
        >
          {Object.entries(items).map(([key, content], index) => (
            <Accordion.Item key={index}>
              <Accordion.Heading>
                <Accordion.Trigger
                  className="

                hover:bg-white
                rounded-lg 
                p-8 
                transition-all 
                font-semibold
                text-xl 
                text-red-900
                flex items-center
              "
                >
                  <Icon
                    className="mr-3 size-6 text-red-600 shrink-0"
                    icon={categoryIcons[key] || "mdi:silverware-fork-knife"}
                  />

                  {categoryTitles[key] || key}

                  <Accordion.Indicator>
                    <Icon
                      icon="gravity-ui:chevron-down"
                      className="text-red-700"
                    />
                  </Accordion.Indicator>
                </Accordion.Trigger>
              </Accordion.Heading>

              <Accordion.Panel>
                <Accordion.Body className="text-red-900/80 leading-relaxed">
                  {renderCategoryContent(key, content)}
                </Accordion.Body>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </Reveal>
    </div>
  );
}
