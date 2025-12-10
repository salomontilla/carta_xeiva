// Menu data for Restaurant Xeiva
// All categories with sample dishes

export const menuData = {
  specialties: {
    title: "Especialidades Xeiva",
    icon: "mdi:star",
    items: [
      {
        id: 1,
        name: "Bandeja Xeiva",
        description: "Nuestra bandeja especial con carne asada, chicharrón, chorizo, arepa, plátano y ensalada",
        price: 28000,
        image: "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=800&auto=format&fit=crop"
      },
      {
        id: 2,
        name: "Plato Campesino",
        description: "Carne de cerdo, frijoles, arroz, huevo frito, chicharrón y plátano maduro",
        price: 25000,
        image: "https://images.unsplash.com/photo-1619367903931-ec0c2c6e6d3f?w=800&auto=format&fit=crop"
      },
      {
        id: 3,
        name: "Parrillada Familiar",
        description: "Variedad de carnes asadas para compartir (4 personas)",
        price: 95000,
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&auto=format&fit=crop"
      }
    ]
  },
  
  beef: {
    title: "Carnes de Res",
    icon: "mdi:food-steak",
    items: [
      {
        id: 10,
        name: "Lomo de Res",
        description: "Jugoso lomo a la parrilla con papas y ensalada fresca",
        price: 32000,
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&auto=format&fit=crop"
      },
      {
        id: 11,
        name: "Sobrebarriga",
        description: "Sobrebarriga al horno con papa criolla y hogao",
        price: 28000,
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&auto=format&fit=crop"
      },
      {
        id: 12,
        name: "Churrasco",
        description: "Corte premium con chimichurri, arroz y ensalada",
        price: 35000,
        image: "https://images.unsplash.com/photo-1558030006-450675393462?w=800&auto=format&fit=crop"
      },
      {
        id: 13,
        name: "Carne Asada",
        description: "Carne a la parrilla con arepa, papa y ensalada",
        price: 24000,
        image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&auto=format&fit=crop"
      }
    ]
  },
  
  chicken: {
    title: "Carnes de Pollo",
    icon: "mdi:food-drumstick",
    items: [
      {
        id: 20,
        name: "Pollo a la Plancha",
        description: "Pechuga jugosa con ensalada y arroz blanco",
        price: 22000,
        image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=800&auto=format&fit=crop"
      },
      {
        id: 21,
        name: "Pollo Campesino",
        description: "Pollo al horno con papa criolla y hogao",
        price: 24000,
        image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&auto=format&fit=crop"
      },
      {
        id: 22,
        name: "Pollo Apanado",
        description: "Crujiente pollo con patacones y ensalada",
        price: 23000,
        image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=800&auto=format&fit=crop"
      }
    ]
  },
  
  pork: {
    title: "Carnes de Cerdo",
    icon: "mdi:pig",
    items: [
      {
        id: 30,
        name: "Chuleta de Cerdo",
        description: "Chuleta a la parrilla con arroz, papa y ensalada",
        price: 26000,
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop"
      },
      {
        id: 31,
        name: "Costillas BBQ",
        description: "Costillas en salsa barbecue con yuca frita",
        price: 29000,
        image: "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=800&auto=format&fit=crop"
      },
      {
        id: 32,
        name: "Chicharrón",
        description: "Chicharrón crujiente con arepa y limón",
        price: 20000,
        image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&auto=format&fit=crop"
      }
    ]
  },
  
  fish: {
    title: "Pescados",
    icon: "mdi:fish",
    items: [
      {
        id: 40,
        name: "Mojarra Frita",
        description: "Mojarra fresca con patacón, arroz y ensalada",
        price: 30000,
        image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&auto=format&fit=crop"
      },
      {
        id: 41,
        name: "Trucha al Ajillo",
        description: "Trucha fresca con salsa de ajo, papa y verduras",
        price: 32000,
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&auto=format&fit=crop"
      },
      {
        id: 42,
        name: "Filete de Pescado",
        description: "Filete a la plancha con arroz y ensalada",
        price: 28000,
        image: "https://images.unsplash.com/photo-1580959375821-c74ef03ce97d?w=800&auto=format&fit=crop"
      }
    ]
  },
  
  juices: {
    title: "Jugos Tradicionales",
    icon: "mdi:fruit-citrus",
    items: [
      {
        id: 50,
        name: "Jugo de Lulo",
        description: "Refrescante jugo natural de lulo",
        price: 6000,
        image: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=800&auto=format&fit=crop"
      },
      {
        id: 51,
        name: "Jugo de Mora",
        description: "Jugo natural de mora con leche o agua",
        price: 6000,
        image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=800&auto=format&fit=crop"
      },
      {
        id: 52,
        name: "Jugo de Maracuyá",
        description: "Jugo de maracuyá fresco y tropical",
        price: 6000,
        image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=800&auto=format&fit=crop"
      },
      {
        id: 53,
        name: "Jugo de Mango",
        description: "Dulce jugo natural de mango",
        price: 6000,
        image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=800&auto=format&fit=crop"
      }
    ]
  },
  
  beverages: {
    title: "Bebidas",
    icon: "mdi:cup",
    items: [
      {
        id: 60,
        name: "Gaseosa",
        description: "Coca Cola, Colombiana, Sprite (350ml)",
        price: 3500,
        image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=800&auto=format&fit=crop"
      },
      {
        id: 61,
        name: "Agua",
        description: "Agua mineral o natural",
        price: 2500,
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&auto=format&fit=crop"
      },
      {
        id: 62,
        name: "Aromática",
        description: "Tinto o aromática de hierbas",
        price: 2000,
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&auto=format&fit=crop"
      }
    ]
  },
  
  desserts: {
    title: "Postres",
    icon: "mdi:cupcake",
    items: [
      {
        id: 70,
        name: "Torta de Chocolate",
        description: "Deliciosa torta de chocolate casera",
        price: 8000,
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&auto=format&fit=crop"
      },
      {
        id: 71,
        name: "Flan de Caramelo",
        description: "Suave flan con caramelo",
        price: 7000,
        image: "https://images.unsplash.com/photo-1551247958-331b5f6bdccc?w=800&auto=format&fit=crop"
      },
      {
        id: 72,
        name: "Tres Leches",
        description: "Tradicional torta de tres leches",
        price: 8500,
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&auto=format&fit=crop"
      }
    ]
  },
  
  portions: {
    title: "Porciones",
    icon: "mdi:silverware-fork-knife",
    items: [
      {
        id: 80,
        name: "Porción de Arroz",
        description: "Arroz blanco o con coco",
        price: 4000,
        image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?w=800&auto=format&fit=crop"
      },
      {
        id: 81,
        name: "Porción de Papa",
        description: "Papas fritas o criolla cocida",
        price: 5000,
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&auto=format&fit=crop"
      },
      {
        id: 82,
        name: "Porción de Ensalada",
        description: "Ensalada fresca mixta",
        price: 4500,
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop"
      },
      {
        id: 83,
        name: "Arepas",
        description: "Arepas de maíz (2 unidades)",
        price: 3000,
        image: "https://images.unsplash.com/photo-1612906782524-c9c3c3b6d4e8?w=800&auto=format&fit=crop"
      },
      {
        id: 84,
        name: "Plátano Maduro",
        description: "Plátano maduro frito",
        price: 4000,
        image: "https://images.unsplash.com/photo-1587411768941-1c4e4e4a3a8f?w=800&auto=format&fit=crop"
      }
    ]
  }
};

// Helper function to get all categories
export const getAllCategories = () => {
  return Object.keys(menuData).map(key => ({
    key,
    ...menuData[key]
  }));
};

// Helper function to format price
export const formatPrice = (price) => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
};
