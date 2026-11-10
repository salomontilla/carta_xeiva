"use client";
import { useState, useEffect, useMemo } from "react";
import { Accordion } from "@heroui/react";
import { Icon } from "@iconify/react";
import Reveal from "./Reveal";
import { fetchPublicMenu, getCachedMenu } from "../services/menu";

const FALLBACK_ITEMS = {
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
      descripcion: "Con papa salada, maduro melao y ensalada",
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
        "Con duraznos y banano melao bañados en crema de leche, acompañada de papa a la francesa y ensalada",
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
  }).format(price || 0);
};

/**
 * Deduce un ícono semántico según el nombre de la categoría,
 * con fallback a un ícono gastronómico general.
 */
function getCategoryIcon(categoryName) {
  if (!categoryName) return "mdi:silverware-fork-knife";
  const key = categoryName
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();

  if (key.includes("tipico") || key.includes("sancocho") || key.includes("horno")) {
    return "mdi:pot-steam";
  }
  if (key.includes("res") || key.includes("vaca") || key.includes("churrasco") || key.includes("lomo de res")) {
    return "mdi:cow";
  }
  if (key.includes("cerdo") || key.includes("chuleta") || key.includes("chicharron") || key.includes("tocino")) {
    return "mdi:pig";
  }
  if (key.includes("pollo") || key.includes("pechuga") || key.includes("gallina") || key.includes("ave")) {
    return "mdi:food-drumstick";
  }
  if (
    key.includes("pescado") ||
    key.includes("trucha") ||
    key.includes("mojarra") ||
    key.includes("salmon") ||
    key.includes("camaron") ||
    key.includes("marisco")
  ) {
    return "mdi:fish";
  }
  if (key.includes("jugo") || key.includes("fruta") || key.includes("limonada")) {
    return "mdi:fruit-cherries";
  }
  if (
    key.includes("bebida") ||
    key.includes("gaseosa") ||
    key.includes("cerveza") ||
    key.includes("coctel") ||
    key.includes("trago") ||
    key.includes("soda") ||
    key.includes("agua")
  ) {
    return "mdi:glass-cocktail";
  }
  if (key.includes("cafe") || key.includes("caliente") || key.includes("aromatica")) {
    return "mdi:coffee";
  }
  if (key.includes("postre") || key.includes("dulce") || key.includes("helado") || key.includes("torta")) {
    return "mdi:cupcake";
  }
  if (
    key.includes("porcion") ||
    key.includes("adicional") ||
    key.includes("acompana") ||
    key.includes("guarnic")
  ) {
    return "mdi:food-variant";
  }
  if (key.includes("sopa") || key.includes("crema") || key.includes("caldo")) {
    return "mdi:bowl-mix";
  }
  if (key.includes("ensalada") || key.includes("vegetal") || key.includes("verde")) {
    return "mdi:salad";
  }
  if (key.includes("entrada") || key.includes("abreboca") || key.includes("pasaboca") || key.includes("empanada")) {
    return "mdi:food-croissant";
  }

  return "mdi:silverware-fork-knife";
}

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
              className="flex flex-col border-b border-red-900/10 pb-3 last:border-0 text-left"
            >
              <div className="flex justify-between items-baseline">
                <span className="font-semibold text-red-900">
                  {item.nombre || item.tipo}
                </span>
                <span className="text-red-800 font-bold ml-4 shrink-0">
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
            <h4 className="font-semibold text-lg text-red-800 mb-3 ml-2 border-l-4 border-red-900 pl-2 text-left">
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
  const [menuData, setMenuData] = useState({
    isDynamic: false,
    categories: [],
    items: [],
  });

  useEffect(() => {
    let isMounted = true;

    // 1. Hidratar de inmediato con caché local si existe para no bloquear la UI
    const cached = getCachedMenu();
    if (
      cached &&
      Array.isArray(cached.categories) &&
      Array.isArray(cached.items) &&
      cached.categories.length > 0
    ) {
      setMenuData({
        isDynamic: true,
        categories: cached.categories,
        items: cached.items,
      });
    }

    // 2. Consultar la API pública en segundo plano (con soporte ETag 304)
    fetchPublicMenu()
      .then((data) => {
        if (
          isMounted &&
          data &&
          Array.isArray(data.categories) &&
          Array.isArray(data.items) &&
          data.categories.length > 0
        ) {
          setMenuData({
            isDynamic: true,
            categories: data.categories,
            items: data.items,
          });
        }
      })
      .catch((err) => {
        console.warn("No se pudo actualizar el menú dinámico:", err);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const dynamicCategories = useMemo(() => {
    if (!menuData.isDynamic || !menuData.categories) return [];

    const sortedCategories = [...menuData.categories].sort(
      (a, b) => (a.sort_order ?? 0) - (b.sort_order ?? 0)
    );

    const result = sortedCategories
      .map((category) => {
        const categoryItems = (menuData.items || [])
          .filter((item) => item.category_id === category.id)
          .sort((a, b) => (a.sort_order ?? 0) - (b.sort_order ?? 0));

        return {
          id: category.id,
          title: category.name,
          icon: getCategoryIcon(category.name),
          items: categoryItems,
        };
      })
      .filter((cat) => cat.items.length > 0);

    const orphanItems = (menuData.items || [])
      .filter((item) => !item.category_id)
      .sort((a, b) => (a.sort_order ?? 0) - (b.sort_order ?? 0));

    if (orphanItems.length > 0) {
      result.push({
        id: "otros",
        title: "Otras Especialidades",
        icon: "mdi:silverware-fork-knife",
        items: orphanItems,
      });
    }

    return result;
  }, [menuData]);

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
            {menuData.isDynamic
              ? dynamicCategories.map((category) => (
                  <Accordion.Item key={category.id}>
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
                          icon={category.icon}
                        />

                        {category.title}

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
                        <ul className="space-y-4">
                          {category.items.map((item) => (
                            <li
                              key={item.id}
                              className="flex flex-col border-b border-red-900/10 pb-3 last:border-0 text-left"
                            >
                              <div className="flex justify-between items-baseline">
                                <span className="font-semibold text-red-900">
                                  {item.name}
                                </span>
                                <span className="text-red-800 font-bold ml-4 shrink-0">
                                  {item.base_price > 0
                                    ? formatPrice(item.base_price)
                                    : item.variants?.length > 0
                                    ? `Desde ${formatPrice(
                                        Math.min(...item.variants.map((v) => v.price))
                                      )}`
                                    : formatPrice(item.base_price)}
                                </span>
                              </div>

                              {item.description && (
                                <p className="text-sm text-red-900/70 mt-1 italic">
                                  {item.description}
                                </p>
                              )}

                              {item.variants && item.variants.length > 0 && (
                                <div className="mt-2.5 rounded-lg bg-red-900/5 border border-red-900/10 p-2.5 space-y-1.5">
                                  <div className="text-[11px] font-semibold tracking-wider text-red-900/60 uppercase">
                                    Opciones / Porciones:
                                  </div>
                                  {item.variants.map((variant) => (
                                    <div
                                      key={variant.id || variant.name}
                                      className="flex justify-between items-center text-xs text-red-900/80"
                                    >
                                      <span className="font-medium">
                                        • {variant.name}
                                      </span>
                                      <span className="font-semibold text-red-800">
                                        {formatPrice(variant.price)}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </li>
                          ))}
                        </ul>
                      </Accordion.Body>
                    </Accordion.Panel>
                  </Accordion.Item>
                ))
              : Object.entries(FALLBACK_ITEMS).map(([key, content], index) => (
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
                          icon={categoryIcons[key] || getCategoryIcon(key)}
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
