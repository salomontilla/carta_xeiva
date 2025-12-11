"use client";
import { Accordion } from "@heroui/react";
import { Icon } from "@iconify/react";

const items = {
  tipicos_xeiva: [
    {
      nombre: "Carnes al horno Xeiva",
      descripcion: "Carnes de res, pollo, cerdo asados al horno de leña",
      precio: 29000,
    },
    {
      nombre: "Sancocho de gallina criolla por presa",
      precio: 33000,
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
      descripcion: "Con papa salada, maduro meló y ensalada",
      precio: 33000,
    },
  ],
  carnes_cerdo: [
    {
      nombre: "Lomo de cerdo",
      descripcion: "Con papa salada, maduro meló y ensalada",
      precio: 30000,
    },
    {
      nombre: "Lomo de cerdo en salsa hawaiana",
      descripcion: "Con papa a la francesa y arroz",
      precio: 34000,
    },
    {
      nombre: "Lomo de cerdo campestre",
      descripcion:
        "Lomo de cerdo con lonchas de queso crema, hogao, maíz tierno, acompañado de patacones y arroz",
      precio: 35000,
    },
    {
      nombre: "Lomo de cerdo en salsa de champiñones y tocineta",
      descripcion: "Con papa a la francesa y arroz",
      precio: 35000,
    },
    {
      nombre: "Chuleta de cerdo",
      descripcion: "Con papa a la francesa y ensalada",
      precio: 34000,
    },
    {
      nombre: "Lomo de cerdo salsa BBQ",
      descripcion: "Con papa a la francesa",
      precio: 32000,
    },
  ],
  pollos: [
    {
      nombre: "Pechuga Xeiva",
      descripcion:
        "Con duraznos y banano meló bañados en crema de leche, acompañada de papa a la francesa y ensalada",
      precio: 32000,
    },
    {
      nombre: "Pechuga en salsa de champiñones y tocineta",
      descripcion: "Con papa a la francesa y arroz",
      precio: 33000,
    },
    {
      nombre: "Pechuga Montañera",
      descripcion:
        "Pechuga con lonchitas de queso crema, hogao, maíz tierno, acompañada con patacón y arroz",
      precio: 34000,
    },
    {
      nombre: "Pechuga Napolitana",
      descripcion:
        "Pechuga de pollo con lonchitas de queso, rodajas de tomate, papa a la francesa y ensalada",
      precio: 32000,
    },
    {
      nombre: "Pechuga Hawaiana",
      descripcion: "Papas a la francesa y arroz",
      precio: 33000,
    },
    {
      nombre: "Milanesa de pollo",
      descripcion:
        "Filete de pechuga apanado acompañado de papa a la francesa y ensalada",
      precio: 33000,
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
      precio: 32000,
    },
    {
      nombre: "Mojarra dorada",
      descripcion: "Con patacón y ensalada",
      precio: 29000,
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
      { nombre: "Gaseosa (1.5 L)", precio: 9000 },
      { nombre: "Cerveza en lata", precio: 5000 },
      { nombre: "Copa Ginger (Cerezada)", precio: 3000 },
      { nombre: "Limonada de coco (copa)", precio: 9000 },
      { nombre: "Limonada en jarra", precio: 10000 },
      { nombre: "Soda de frutos silvestres rojos", precio: 10000 },
      { nombre: "Soda de frutos tropicales amarillos", precio: 10000 },
    ],
  },
  postres: [
    "Leche asada",
    "Durazno",
    "Fresa",
    "Milo",
    "Oreo",
    "Maracuyá",
    "Limón",
    "Postres fitness (limón y frutos rojos)",
  ],
  por_porcion: [
    { nombre: "Papa a la francesa", precio: 7000 },
    { nombre: "Patacón", precio: 5000 },
    { nombre: "Arroz", precio: 3000 },
  ],
};

export default function Platos() {
  return (
    <div
      id="menu"
      className="relative py-20 px-6 bg-[#faf5f3] text-center overflow-hidden"
    >
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
    rounded-xl 
    p-4 
    shadow-lg 
  "
        >
          {items.map((item, index) => (
            <Accordion.Item key={index}>
              <Accordion.Heading>
                <Accordion.Trigger
                  className="
                hover:bg-red-50/60 
                rounded-lg 
                p-8 
                transition-all 
                font-semibold
                text-xl 
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
                    <Icon
                      icon="gravity-ui:chevron-down"
                      className="text-red-700"
                    />
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
