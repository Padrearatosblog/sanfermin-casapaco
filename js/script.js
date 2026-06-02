const translations = {
  es: {
    heroKicker: "San Fermín · Pamplona",
    heroSubtitle: "Almuerzos · Menú del día · Carta",
    orderNote: "Puedes pedir indicando el número del plato.",
    breakfastTab: "Almuerzos",
    dailyTab: "Menú del día",
    menuTab: "Carta",
    menuTime: "18:00 — cierre",
    breakfastTitle: "Almuerzos San Fermín",
    dailyTitle: "Menú San Fermín",
    menuTitle: "Carta",
    drinkIncluded: "Bebida incluida",
    noPrice: "Precio no visible en carta digital",
    includedTitle: "Información del menú",
    includedText: "Bebida incluida: 1 botella de vino o sidra cada 2 personas, 1 refresco o 1 caña y agua.",
    glutenBreadNote: "Opción de pan sin gluten disponible.",
    noShareNote: "No está permitido compartir menú.",
    dailyAllergyNote: "Para alergias y/o intolerancias, consulta con nuestro personal.",
    allergensTitle: "Alérgenos",
    allergensWarning: "Consulta con nuestro equipo ante cualquier alergia o intolerancia.",
    infoBtn: "Más info",
    categories: {
      breakfast: "Almuerzos",
      starters: "Primeros",
      mains: "Segundos",
      desserts: "Postres",
      sharing: "Para compartir",
      sandwiches: "Bocadillos",
      mainDishes: "Platos principales",
      fried: "Fritos"
    },
    allergens: ["Gluten","Crustáceos","Huevo","Pescado","Cacahuetes","Soja","Lácteos","Frutos secos","Apio","Mostaza","Sésamo","Sulfitos","Altramuces","Moluscos","Alcohol","Sin gluten","Opción sin gluten","Puede contener trazas de gluten"],
    breakfast: [
      {
        n:"1.1",
        title:"Huevos con patatas, txistorra, jamón y panceta adobada",
        desc:"Almuerzo tradicional y contundente para empezar San Fermín.",
        tags:["Huevo","Sulfitos"],
        info:"La txistorra es un embutido típico navarro elaborado tradicionalmente con carne y especias."
      },
      {
        n:"1.2",
        title:"Ajoarriero con huevo y patata paja",
        desc:"Receta tradicional del norte acompañada de huevo y patata paja crujiente.",
        tags:["Pescado","Huevo"],
        info:"El ajoarriero es una receta tradicional elaborada con pescado desmigado, ajo y verduras."
      },
      {
        n:"1.3",
        title:"Callos a la navarra",
        desc:"Receta tradicional cocinada lentamente con jamón y chorizo.",
        tags:["Sulfitos"]
      },
      {
        n:"1.4",
        title:"Rabo guisado con patatas",
        desc:"Especialidad de la casa, cocinada lentamente hasta conseguir una textura melosa.",
        tags:["Sulfitos"]
      }
    ],
    daily: {
      starters: [
        {n:"1.1", title:"Ensalada de tomate de temporada con burrata", desc:"Aceite de albahaca, vinagreta y nueces.", tags:["Lácteos","Frutos secos","Sulfitos","Sin gluten"]},
        {n:"1.2", title:"Ensaladilla rusa casera con grisines", desc:"Opción sin gluten sin grisines.", tags:["Huevo","Pescado","Gluten","Opción sin gluten"]},
        {n:"1.3", title:"Pochas a la navarra con almejas y piparras", desc:"Guiso tradicional navarro.", tags:["Moluscos","Sin gluten"], info:"Las pochas son una variedad de alubia típica navarra de textura suave y sabor delicado."},
        {n:"1.4", title:"Risotto de hongos y parmesano", desc:"Arroz meloso con hongos y queso parmesano.", tags:["Lácteos"]},
        {n:"1.5", title:"Gazpacho casero con huevo duro, jamón y picatostes", desc:"Sin picatostes.", tags:["Huevo","Sulfitos","Sin gluten"]}
      ],
      mains: [
        {n:"2.1", title:"Solomillo de vaca con roquefort y patatas panaderas", desc:"Solomillo acompañado de salsa roquefort.", tags:["Lácteos","Sin gluten"]},
        {n:"2.2", title:"Rabo estofado con patatas fritas", desc:"⭐ Especialidad de la casa. Opción sin gluten con patatas panaderas en lugar de fritas.", tags:["Sulfitos","Opción sin gluten"]},
        {n:"2.3", title:"Callos estilo tradicional con jamón y chorizo", desc:"Receta tradicional elaborada lentamente.", tags:["Sulfitos","Sin gluten"]},
        {n:"2.4", title:"Ajoarriero con huevo a baja temperatura y patatas paja", desc:"Receta tradicional del norte.", tags:["Pescado","Huevo","Sin gluten"], info:"El ajoarriero es una receta tradicional elaborada con pescado desmigado, ajo y verduras."},
        {n:"2.5", title:"Lubina estilo Orio con patatas panaderas", desc:"Lubina preparada al estilo tradicional vasco.", tags:["Pescado","Sulfitos","Sin gluten"], info:"El estilo Orio es una preparación vasca con aceite, ajo, vinagre y guindilla servida sobre pescado."}
      ],
      desserts: [
        {n:"3.1", title:"Cuajada de Ultzama con miel y nueces", desc:"Postre tradicional navarro.", tags:["Lácteos","Frutos secos","Sin gluten"], info:"Ultzama es un valle navarro conocido por sus productos lácteos y su cuajada tradicional."},
        {n:"3.2", title:"Cremoso de queso con frutos rojos y lluvia de Lotus", desc:"Opción sin gluten sin galleta Lotus.", tags:["Lácteos","Gluten","Soja","Opción sin gluten"]},
        {n:"3.3", title:"Arroz con leche casero con canela", desc:"Receta tradicional elaborada lentamente.", tags:["Lácteos","Sin gluten"]},
        {n:"3.4", title:"Sorbete de mandarina al pacharán", desc:"Sorbete refrescante con pacharán navarro.", tags:["Alcohol","Sulfitos","Sin gluten"], info:"El pacharán es un licor típico navarro elaborado a partir de endrinas."}
      ]
    },
    menu: {
      sharing: [
        {n:"1.1", title:"Patatas Bravas", desc:"Patatas crujientes con salsa brava.", price:"10€", tags:["Sin gluten"]},
        {n:"1.2", title:"Rabas", desc:"Calamares rebozados y fritos.", price:"11€", tags:["Moluscos","Sin gluten"]},
        {n:"1.3", title:"Jamón ibérico con tumaca y tostones con AOVE", desc:"Opción sin gluten sin tostones.", price:"24€", tags:["Gluten","Opción sin gluten"]},
        {n:"1.4", title:"Pimientos de Padrón", desc:"Pimientos verdes fritos con sal.", price:"9€", tags:["Sin gluten"]},
        {n:"1.5", title:"Ración de txistorra de Arbizu", desc:"8 unidades. Puede contener trazas de gluten.", price:"11€", tags:["Sulfitos","Puede contener trazas de gluten"], info:"La txistorra es un embutido típico navarro elaborado tradicionalmente con carne y especias."}
      ],
      sandwiches: [
        {n:"2.1", title:"Albóndigas caseras con tomate", desc:"Bocadillo de albóndigas caseras en salsa de tomate.", price:"10€", tags:["Gluten","Huevo"]},
        {n:"2.2", title:"Ajoarriero", desc:"Bocadillo de receta tradicional del norte.", price:"11,50€", tags:["Gluten","Pescado"], info:"El ajoarriero es una receta tradicional elaborada con pescado desmigado, ajo y verduras."},
        {n:"2.3", title:"Lomo, queso y piquillos", desc:"Bocadillo de lomo con queso y pimientos del piquillo.", price:"10€", tags:["Gluten","Lácteos"]},
        {n:"2.4", title:"Jamón pasado con tomate", desc:"Bocadillo de jamón pasado con tomate.", price:"10€", tags:["Gluten"]},
        {n:"2.5", title:"Hamburguesa mixta", desc:"Con queso, lechuga, tomate, salsa brava y patatas fritas caseras.", price:"16€", tags:["Gluten","Lácteos","Huevo"]}
      ],
      mainDishes: [
        {n:"3.1", title:"Albóndigas con tomate y patatas fritas", desc:"Plato de albóndigas caseras con tomate.", price:"17€", tags:["Huevo","Sin gluten"]},
        {n:"3.2", title:"Rabo estofado con patatas fritas caseras", desc:"⭐ Especialidad de la casa.", price:"", tags:["Sulfitos"]},
        {n:"3.3", title:"Solomillo de vaca con roquefort y patatas panaderas", desc:"Solomillo acompañado de salsa roquefort y patatas panaderas.", price:"24€", tags:["Lácteos"]},
        {n:"3.4", title:"Callos estilo tradicional con jamón y chorizo", desc:"Receta tradicional cocinada lentamente.", price:"20€", tags:["Sulfitos"]},
        {n:"3.5", title:"Ajoarriero con huevo a baja temperatura y patatas paja", desc:"Receta tradicional con huevo y patatas paja.", price:"22€", tags:["Pescado","Huevo"], info:"El ajoarriero es una receta tradicional elaborada con pescado desmigado, ajo y verduras."},
        {n:"3.6", title:"Pescado fresco del día con patatas panaderas", desc:"Pescado fresco según mercado.", price:"20€", tags:["Pescado"]}
      ],
      fried: [
        {n:"4.1", title:"Croqueta de jamón", desc:"Frito casero.", price:"3,20€/unidad", tags:["Gluten","Lácteos","Huevo"]},
        {n:"4.2", title:"Frito de pimiento", desc:"Frito tradicional.", price:"3,20€/unidad", tags:["Gluten","Lácteos","Huevo"]},
        {n:"4.3", title:"Frito de jamón y queso", desc:"Frito de jamón y queso.", price:"3,20€/unidad", tags:["Gluten","Lácteos","Huevo"]},
        {n:"4.4", title:"Frito de gamba", desc:"Frito de gamba.", price:"3,20€/unidad", tags:["Gluten","Lácteos","Huevo","Crustáceos"]}
      ],
      desserts: [
        {n:"5.1", title:"Cuajada", desc:"Postre tradicional.", price:"5€", tags:["Lácteos"]},
        {n:"5.2", title:"Cremoso de queso", desc:"Postre cremoso de queso.", price:"5€", tags:["Lácteos"]},
        {n:"5.3", title:"Arroz con leche", desc:"Arroz con leche casero.", price:"5€", tags:["Lácteos"]},
        {n:"5.4", title:"Sorbete de mandarina al pacharán", desc:"Contiene alcohol.", price:"5€", tags:["Alcohol","Sulfitos"], info:"El pacharán es un licor típico navarro elaborado a partir de endrinas."}
      ]
    }
  },

  en: {
    heroKicker: "San Fermín · Pamplona",
    heroSubtitle: "Breakfast · Daily menu · À la carte",
    orderNote: "You can order by indicating the dish number.",
    breakfastTab: "Breakfast",
    dailyTab: "Daily menu",
    menuTab: "À la carte",
    menuTime: "18:00 — closing",
    breakfastTitle: "San Fermín Breakfast",
    dailyTitle: "San Fermín Menu",
    menuTitle: "À la carte",
    drinkIncluded: "Drink included",
    noPrice: "Price not shown on the digital menu",
    includedTitle: "Menu information",
    includedText: "Drink included: 1 bottle of wine or cider for every 2 people, 1 soft drink or 1 small beer, and water.",
    glutenBreadNote: "Gluten-free bread option available.",
    noShareNote: "Sharing the menu is not allowed.",
    dailyAllergyNote: "For allergies and/or intolerances, please ask our staff.",
    allergensTitle: "Allergens",
    allergensWarning: "Please ask our team about any allergy or intolerance.",
    infoBtn: "More info",
    categories: {
      breakfast: "Breakfast",
      starters: "Starters",
      mains: "Main courses",
      desserts: "Desserts",
      sharing: "To share",
      sandwiches: "Sandwiches",
      mainDishes: "Main dishes",
      fried: "Fried bites"
    },
    allergens: ["Gluten","Crustaceans","Egg","Fish","Peanuts","Soy","Dairy","Nuts","Celery","Mustard","Sesame","Sulphites","Lupin","Molluscs","Alcohol","Gluten free","Gluten-free option","May contain traces of gluten"],
    breakfast: [
      {n:"1.1", title:"Eggs with potatoes, txistorra, ham and marinated pork belly", desc:"A hearty traditional Navarre breakfast.", tags:["Egg","Sulphites"], info:"Txistorra is a typical Navarre sausage traditionally made with meat and spices."},
      {n:"1.2", title:"Ajoarriero with egg and straw potatoes", desc:"A traditional northern Spanish recipe with crispy straw potatoes.", tags:["Fish","Egg"], info:"Ajoarriero is a traditional dish made with shredded fish, garlic and vegetables."},
      {n:"1.3", title:"Navarre-style tripe", desc:"Traditional slow-cooked recipe with ham and chorizo.", tags:["Sulphites"]},
      {n:"1.4", title:"Stewed oxtail with potatoes", desc:"House speciality, slow-cooked until tender.", tags:["Sulphites"]}
    ],
    daily: {
      starters: [
        {n:"1.1", title:"Seasonal tomato salad with burrata", desc:"Basil oil, vinaigrette and walnuts.", tags:["Dairy","Nuts","Sulphites","Gluten free"]},
        {n:"1.2", title:"Homemade Russian salad with grissini", desc:"Gluten-free option without grissini.", tags:["Egg","Fish","Gluten","Gluten-free option"]},
        {n:"1.3", title:"Navarre-style pochas beans with clams and piparras", desc:"Traditional Navarre stew.", tags:["Molluscs","Gluten free"], info:"Pochas are a tender variety of white bean typical of Navarre."},
        {n:"1.4", title:"Mushroom and Parmesan risotto", desc:"Creamy rice with mushrooms and Parmesan cheese.", tags:["Dairy"]},
        {n:"1.5", title:"Homemade gazpacho with boiled egg, ham and croutons", desc:"Without croutons.", tags:["Egg","Sulphites","Gluten free"]}
      ],
      mains: [
        {n:"2.1", title:"Beef tenderloin with Roquefort and bakery potatoes", desc:"Tenderloin served with Roquefort sauce.", tags:["Dairy","Gluten free"]},
        {n:"2.2", title:"Stewed oxtail with fries", desc:"⭐ House speciality. Gluten-free option with bakery potatoes instead of fries.", tags:["Sulphites","Gluten-free option"]},
        {n:"2.3", title:"Traditional tripe with ham and chorizo", desc:"Slow-cooked traditional recipe.", tags:["Sulphites","Gluten free"]},
        {n:"2.4", title:"Ajoarriero with low-temperature egg and straw potatoes", desc:"Traditional northern Spanish recipe.", tags:["Fish","Egg","Gluten free"], info:"Ajoarriero is a traditional dish made with shredded fish, garlic and vegetables."},
        {n:"2.5", title:"Sea bass Orio style with bakery potatoes", desc:"Sea bass prepared in a traditional Basque style.", tags:["Fish","Sulphites","Gluten free"], info:"Orio style is a Basque preparation with olive oil, garlic, vinegar and chilli served over fish."}
      ],
      desserts: [
        {n:"3.1", title:"Ultzama curd with honey and walnuts", desc:"Traditional Navarre dessert.", tags:["Dairy","Nuts","Gluten free"], info:"Ultzama is a Navarre valley known for its dairy products and traditional curd."},
        {n:"3.2", title:"Creamy cheesecake with red berries and Lotus crumble", desc:"Gluten-free option without Lotus biscuit.", tags:["Dairy","Gluten","Soy","Gluten-free option"]},
        {n:"3.3", title:"Homemade rice pudding with cinnamon", desc:"Traditional slow-cooked dessert.", tags:["Dairy","Gluten free"]},
        {n:"3.4", title:"Mandarin sorbet with pacharán", desc:"Refreshing sorbet with Navarre pacharán.", tags:["Alcohol","Sulphites","Gluten free"], info:"Pacharán is a typical Navarre liqueur made from sloe berries."}
      ]
    },
    menu: {
      sharing: [
        {n:"1.1", title:"Patatas bravas", desc:"Crispy potatoes with spicy brava sauce.", price:"10€", tags:["Gluten free"]},
        {n:"1.2", title:"Fried squid strips", desc:"Battered and fried squid.", price:"11€", tags:["Molluscs","Gluten free"]},
        {n:"1.3", title:"Iberian ham with tomato bread and EVOO toast", desc:"Gluten-free option without toast.", price:"24€", tags:["Gluten","Gluten-free option"]},
        {n:"1.4", title:"Padrón peppers", desc:"Fried green peppers with salt.", price:"9€", tags:["Gluten free"]},
        {n:"1.5", title:"Arbizu txistorra portion", desc:"8 pieces. May contain traces of gluten.", price:"11€", tags:["Sulphites","May contain traces of gluten"], info:"Txistorra is a typical Navarre sausage traditionally made with meat and spices."}
      ],
      sandwiches: [
        {n:"2.1", title:"Homemade meatballs with tomato", desc:"Sandwich with homemade meatballs in tomato sauce.", price:"10€", tags:["Gluten","Egg"]},
        {n:"2.2", title:"Ajoarriero sandwich", desc:"Traditional northern Spanish recipe.", price:"11.50€", tags:["Gluten","Fish"], info:"Ajoarriero is a traditional dish made with shredded fish, garlic and vegetables."},
        {n:"2.3", title:"Pork loin, cheese and piquillo peppers", desc:"Sandwich with pork loin, melted cheese and piquillo peppers.", price:"10€", tags:["Gluten","Dairy"]},
        {n:"2.4", title:"Seared ham with tomato", desc:"Ham sandwich with tomato.", price:"10€", tags:["Gluten"]},
        {n:"2.5", title:"Mixed burger", desc:"With cheese, lettuce, tomato, brava sauce and homemade fries.", price:"16€", tags:["Gluten","Dairy","Egg"]}
      ],
      mainDishes: [
        {n:"3.1", title:"Meatballs with tomato and fries", desc:"Homemade meatballs with tomato sauce.", price:"17€", tags:["Egg","Gluten free"]},
        {n:"3.2", title:"Stewed oxtail with homemade fries", desc:"⭐ House speciality.", price:"", tags:["Sulphites"]},
        {n:"3.3", title:"Beef tenderloin with Roquefort and bakery potatoes", desc:"Tenderloin served with Roquefort sauce and bakery potatoes.", price:"24€", tags:["Dairy"]},
        {n:"3.4", title:"Traditional tripe with ham and chorizo", desc:"Slow-cooked traditional recipe.", price:"20€", tags:["Sulphites"]},
        {n:"3.5", title:"Ajoarriero with low-temperature egg and straw potatoes", desc:"Traditional recipe with egg and straw potatoes.", price:"22€", tags:["Fish","Egg"], info:"Ajoarriero is a traditional dish made with shredded fish, garlic and vegetables."},
        {n:"3.6", title:"Fresh fish of the day with bakery potatoes", desc:"Fresh market fish.", price:"20€", tags:["Fish"]}
      ],
      fried: [
        {n:"4.1", title:"Ham croquette", desc:"Homemade fried bite.", price:"3.20€/unit", tags:["Gluten","Dairy","Egg"]},
        {n:"4.2", title:"Pepper fritter", desc:"Traditional fried bite.", price:"3.20€/unit", tags:["Gluten","Dairy","Egg"]},
        {n:"4.3", title:"Ham and cheese fritter", desc:"Ham and cheese fried bite.", price:"3.20€/unit", tags:["Gluten","Dairy","Egg"]},
        {n:"4.4", title:"Prawn fritter", desc:"Prawn fried bite.", price:"3.20€/unit", tags:["Gluten","Dairy","Egg","Crustaceans"]}
      ],
      desserts: [
        {n:"5.1", title:"Curd", desc:"Traditional dessert.", price:"5€", tags:["Dairy"]},
        {n:"5.2", title:"Creamy cheese dessert", desc:"Creamy cheese dessert.", price:"5€", tags:["Dairy"]},
        {n:"5.3", title:"Rice pudding", desc:"Homemade rice pudding.", price:"5€", tags:["Dairy"]},
        {n:"5.4", title:"Mandarin sorbet with pacharán", desc:"Contains alcohol.", price:"5€", tags:["Alcohol","Sulphites"], info:"Pacharán is a typical Navarre liqueur made from sloe berries."}
      ]
    }
  },

  fr: {
    heroKicker: "San Fermín · Pampelune",
    heroSubtitle: "Déjeuners · Menu du jour · Carte",
    orderNote: "Vous pouvez commander en indiquant le numéro du plat.",
    breakfastTab: "Déjeuners",
    dailyTab: "Menu du jour",
    menuTab: "Carte",
    menuTime: "18:00 — fermeture",
    breakfastTitle: "Déjeuners San Fermín",
    dailyTitle: "Menu San Fermín",
    menuTitle: "Carte",
    drinkIncluded: "Boisson incluse",
    noPrice: "Prix non affiché sur la carte digitale",
    includedTitle: "Informations du menu",
    includedText: "Boisson incluse : 1 bouteille de vin ou de cidre pour 2 personnes, 1 boisson sans alcool ou 1 petite bière, et de l’eau.",
    glutenBreadNote: "Option pain sans gluten disponible.",
    noShareNote: "Il n’est pas permis de partager le menu.",
    dailyAllergyNote: "Pour toute allergie et/ou intolérance, veuillez consulter notre personnel.",
    allergensTitle: "Allergènes",
    allergensWarning: "Consultez notre équipe en cas d’allergie ou d’intolérance.",
    infoBtn: "Plus d’info",
    categories: {
      breakfast: "Déjeuners",
      starters: "Entrées",
      mains: "Plats principaux",
      desserts: "Desserts",
      sharing: "À partager",
      sandwiches: "Sandwichs",
      mainDishes: "Plats principaux",
      fried: "Fritures"
    },
    allergens: ["Gluten","Crustacés","Œuf","Poisson","Arachides","Soja","Produits laitiers","Fruits à coque","Céleri","Moutarde","Sésame","Sulfites","Lupin","Mollusques","Alcool","Sans gluten","Option sans gluten","Peut contenir des traces de gluten"],
    breakfast: [
      {n:"1.1", title:"Œufs avec pommes de terre, txistorra, jambon et poitrine marinée", desc:"Déjeuner traditionnel navarrais copieux.", tags:["Œuf","Sulfites"], info:"La txistorra est une saucisse typique de Navarre, préparée traditionnellement avec de la viande et des épices."},
      {n:"1.2", title:"Ajoarriero avec œuf et pommes paille", desc:"Recette traditionnelle du nord avec pommes paille croustillantes.", tags:["Poisson","Œuf"], info:"L’ajoarriero est une recette traditionnelle à base de poisson émietté, d’ail et de légumes."},
      {n:"1.3", title:"Tripes à la navarraise", desc:"Recette traditionnelle mijotée avec jambon et chorizo.", tags:["Sulfites"]},
      {n:"1.4", title:"Queue de bœuf mijotée avec pommes de terre", desc:"Spécialité de la maison, mijotée lentement.", tags:["Sulfites"]}
    ],
    daily: {
      starters: [
        {n:"1.1", title:"Salade de tomates de saison avec burrata", desc:"Huile de basilic, vinaigrette et noix.", tags:["Produits laitiers","Fruits à coque","Sulfites","Sans gluten"]},
        {n:"1.2", title:"Salade russe maison avec gressins", desc:"Option sans gluten sans gressins.", tags:["Œuf","Poisson","Gluten","Option sans gluten"]},
        {n:"1.3", title:"Pochas à la navarraise avec palourdes et piparras", desc:"Ragoût traditionnel navarrais.", tags:["Mollusques","Sans gluten"], info:"Les pochas sont une variété de haricot blanc tendre typique de Navarre."},
        {n:"1.4", title:"Risotto aux champignons et parmesan", desc:"Riz crémeux aux champignons et parmesan.", tags:["Produits laitiers"]},
        {n:"1.5", title:"Gaspacho maison avec œuf dur, jambon et croûtons", desc:"Sans croûtons.", tags:["Œuf","Sulfites","Sans gluten"]}
      ],
      mains: [
        {n:"2.1", title:"Filet de bœuf au roquefort et pommes boulangères", desc:"Filet servi avec sauce roquefort.", tags:["Produits laitiers","Sans gluten"]},
        {n:"2.2", title:"Queue de bœuf mijotée avec frites", desc:"⭐ Spécialité de la maison. Option sans gluten avec pommes boulangères à la place des frites.", tags:["Sulfites","Option sans gluten"]},
        {n:"2.3", title:"Tripes traditionnelles avec jambon et chorizo", desc:"Recette traditionnelle mijotée.", tags:["Sulfites","Sans gluten"]},
        {n:"2.4", title:"Ajoarriero avec œuf basse température et pommes paille", desc:"Recette traditionnelle du nord.", tags:["Poisson","Œuf","Sans gluten"], info:"L’ajoarriero est une recette traditionnelle à base de poisson émietté, d’ail et de légumes."},
        {n:"2.5", title:"Bar style Orio avec pommes boulangères", desc:"Bar préparé dans un style basque traditionnel.", tags:["Poisson","Sulfites","Sans gluten"], info:"Le style Orio est une préparation basque avec huile, ail, vinaigre et piment servie sur le poisson."}
      ],
      desserts: [
        {n:"3.1", title:"Caillé d’Ultzama avec miel et noix", desc:"Dessert traditionnel navarrais.", tags:["Produits laitiers","Fruits à coque","Sans gluten"], info:"Ultzama est une vallée de Navarre connue pour ses produits laitiers et son caillé traditionnel."},
        {n:"3.2", title:"Crémeux de fromage aux fruits rouges et éclats de Lotus", desc:"Option sans gluten sans biscuit Lotus.", tags:["Produits laitiers","Gluten","Soja","Option sans gluten"]},
        {n:"3.3", title:"Riz au lait maison à la cannelle", desc:"Dessert traditionnel mijoté.", tags:["Produits laitiers","Sans gluten"]},
        {n:"3.4", title:"Sorbet mandarine au pacharán", desc:"Sorbet rafraîchissant au pacharán navarrais.", tags:["Alcool","Sulfites","Sans gluten"], info:"Le pacharán est une liqueur typique de Navarre élaborée à partir de prunelles."}
      ]
    },
    menu: {
      sharing: [
        {n:"1.1", title:"Patatas bravas", desc:"Pommes de terre croustillantes avec sauce brava.", price:"10€", tags:["Sans gluten"]},
        {n:"1.2", title:"Rabas", desc:"Calamars panés et frits.", price:"11€", tags:["Mollusques","Sans gluten"]},
        {n:"1.3", title:"Jambon ibérique avec pain tomate et AOVE", desc:"Option sans gluten sans toasts.", price:"24€", tags:["Gluten","Option sans gluten"]},
        {n:"1.4", title:"Piments de Padrón", desc:"Petits piments verts frits au sel.", price:"9€", tags:["Sans gluten"]},
        {n:"1.5", title:"Portion de txistorra d’Arbizu", desc:"8 pièces. Peut contenir des traces de gluten.", price:"11€", tags:["Sulfites","Peut contenir des traces de gluten"], info:"La txistorra est une saucisse typique de Navarre, préparée traditionnellement avec de la viande et des épices."}
      ],
      sandwiches: [
        {n:"2.1", title:"Boulettes maison à la tomate", desc:"Sandwich aux boulettes maison à la sauce tomate.", price:"10€", tags:["Gluten","Œuf"]},
        {n:"2.2", title:"Sandwich d’ajoarriero", desc:"Recette traditionnelle du nord.", price:"11,50€", tags:["Gluten","Poisson"], info:"L’ajoarriero est une recette traditionnelle à base de poisson émietté, d’ail et de légumes."},
        {n:"2.3", title:"Longe, fromage et piquillos", desc:"Sandwich à la longe, fromage fondu et poivrons piquillo.", price:"10€", tags:["Gluten","Produits laitiers"]},
        {n:"2.4", title:"Jambon poêlé à la tomate", desc:"Sandwich au jambon et tomate.", price:"10€", tags:["Gluten"]},
        {n:"2.5", title:"Burger mixte", desc:"Avec fromage, laitue, tomate, sauce brava et frites maison.", price:"16€", tags:["Gluten","Produits laitiers","Œuf"]}
      ],
      mainDishes: [
        {n:"3.1", title:"Boulettes à la tomate avec frites", desc:"Boulettes maison à la sauce tomate.", price:"17€", tags:["Œuf","Sans gluten"]},
        {n:"3.2", title:"Queue de bœuf mijotée avec frites maison", desc:"⭐ Spécialité de la maison.", price:"", tags:["Sulfites"]},
        {n:"3.3", title:"Filet de bœuf au roquefort et pommes boulangères", desc:"Filet servi avec sauce roquefort et pommes boulangères.", price:"24€", tags:["Produits laitiers"]},
        {n:"3.4", title:"Tripes traditionnelles avec jambon et chorizo", desc:"Recette traditionnelle mijotée.", price:"20€", tags:["Sulfites"]},
        {n:"3.5", title:"Ajoarriero avec œuf basse température et pommes paille", desc:"Recette traditionnelle avec œuf et pommes paille.", price:"22€", tags:["Poisson","Œuf"], info:"L’ajoarriero est une recette traditionnelle à base de poisson émietté, d’ail et de légumes."},
        {n:"3.6", title:"Poisson frais du jour avec pommes boulangères", desc:"Poisson frais selon le marché.", price:"20€", tags:["Poisson"]}
      ],
      fried: [
        {n:"4.1", title:"Croquette de jambon", desc:"Friture maison.", price:"3,20€/unité", tags:["Gluten","Produits laitiers","Œuf"]},
        {n:"4.2", title:"Beignet de piment", desc:"Friture traditionnelle.", price:"3,20€/unité", tags:["Gluten","Produits laitiers","Œuf"]},
        {n:"4.3", title:"Beignet de jambon et fromage", desc:"Friture au jambon et fromage.", price:"3,20€/unité", tags:["Gluten","Produits laitiers","Œuf"]},
        {n:"4.4", title:"Beignet de crevette", desc:"Friture de crevette.", price:"3,20€/unité", tags:["Gluten","Produits laitiers","Œuf","Crustacés"]}
      ],
      desserts: [
        {n:"5.1", title:"Caillé", desc:"Dessert traditionnel.", price:"5€", tags:["Produits laitiers"]},
        {n:"5.2", title:"Crémeux de fromage", desc:"Dessert crémeux au fromage.", price:"5€", tags:["Produits laitiers"]},
        {n:"5.3", title:"Riz au lait", desc:"Riz au lait maison.", price:"5€", tags:["Produits laitiers"]},
        {n:"5.4", title:"Sorbet mandarine au pacharán", desc:"Contient de l’alcool.", price:"5€", tags:["Alcool","Sulfites"], info:"Le pacharán est une liqueur typique de Navarre élaborée à partir de prunelles."}
      ]
    }
  }
};

let currentLang = "es";

const breakfastContent = document.getElementById("breakfastContent");
const dailyContent = document.getElementById("dailyContent");
const menuContent = document.getElementById("menuContent");
const allergensList = document.getElementById("allergensList");

function renderCard(item){
  return `
    <article class="dish-card">
      <div class="dish-top">
        <span class="dish-number">${item.n}</span>
        ${item.price ? `<span class="dish-price">${item.price}</span>` : ""}
      </div>

      <h4>${item.title}</h4>

      ${item.desc ? `<p>${item.desc}</p>` : ""}

      ${item.tags && item.tags.length ? `
        <div class="tags">
          ${item.tags.map(tag => `<span>${tag}</span>`).join("")}
        </div>
      ` : ""}

      ${item.info ? `
        <button class="info-btn">${translations[currentLang].infoBtn}</button>
        <div class="info-box">${item.info}</div>
      ` : ""}
    </article>
  `;
}

function renderCategory(title, items){
  return `
    <div class="category">
      <h3>${title}</h3>
      <div class="dish-grid">
        ${items.map(renderCard).join("")}
      </div>
    </div>
  `;
}

function numberItems(items, start){
  return items.map((item, index) => ({
    ...item,
    n: String(start + index).padStart(2, "0")
  }));
}

function renderNumberedCategories(categories){
  let nextNumber = categories[0]?.start || 1;

  return categories.map(category => {
    const numberedItems = numberItems(category.items, nextNumber);
    nextNumber += category.items.length;
    return renderCategory(category.title, numberedItems);
  }).join("");
}

function renderContent(){
  const t = translations[currentLang];

  breakfastContent.innerHTML = renderCategory(t.categories.breakfast, numberItems(t.breakfast, 1));

  dailyContent.innerHTML = `
    ${renderNumberedCategories([
      {title: t.categories.starters, items: t.daily.starters, start: 10},
      {title: t.categories.mains, items: t.daily.mains},
      {title: t.categories.desserts, items: t.daily.desserts}
    ])}
  `;

  menuContent.innerHTML = `
    ${renderNumberedCategories([
      {title: t.categories.sharing, items: t.menu.sharing, start: 30},
      {title: t.categories.sandwiches, items: t.menu.sandwiches},
      {title: t.categories.mainDishes, items: t.menu.mainDishes},
      {title: t.categories.fried, items: t.menu.fried},
      {title: t.categories.desserts, items: t.menu.desserts}
    ])}
  `;

  allergensList.innerHTML = t.allergens.map(a => `<span>${a}</span>`).join("");

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if(t[key]) el.textContent = t[key];
  });

  document.documentElement.lang = currentLang;
}

document.querySelectorAll(".lang-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    currentLang = btn.dataset.lang;

    document.querySelectorAll(".lang-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    renderContent();
  });
});

document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.section;

    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    document.querySelectorAll(".menu-section").forEach(section => {
      section.classList.remove("active");
    });

    document.getElementById(target).classList.add("active");

    window.scrollTo({
      top: document.querySelector(".section-tabs").offsetTop,
      behavior: "smooth"
    });
  });
});

document.addEventListener("click", e => {
  if(e.target.classList.contains("info-btn")){
    const box = e.target.nextElementSibling;
    box.classList.toggle("show");
  }
});

renderContent();
