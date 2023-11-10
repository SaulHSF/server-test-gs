const docs = {
  products: [
    {
      id: 0,
      name: "Cilindro 5kg",
      type: "normal",
      enabled: true,
      weight: 5,
      price: 10485,
      isPallet: true,
    },
    {
      id: 1,
      name: "Cilindro 11kg",
      type: "normal",
      enabled: true,
      weight: 11,
      price: 15255,
      isPallet: true,
    },
    {
      id: 2,
      name: "Cilindro 15kg",
      type: "normal",
      enabled: true,
      weight: 15,
      price: 21700,
      isPallet: true,
    },
    {
      id: 3,
      name: "Cilindro 45kg",
      type: "normal",
      enabled: true,
      weight: 45,
      price: 60000,
      isPallet: true,
    },
    {
      id: 4,
      name: "G.H 15kg",
      description: "normal acero",
      type: "gh",
      enabled: true,
      weight: 15,
      price: 35,
    },
    {
      id: 5,
      name: "G.H 15kg",
      description: "normal aluminio",
      type: "gh",
      enabled: true,
      weight: 15,
      price: 38,
    },
  ],
  combinations: [
    {
      id: 0,
      idProducts: [0, 1],
      combinations: [
        [
          {
            id: 0,
            weight: 5,
            quantity: 10,
          },
          {
            id: 1,
            weight: 11,
            quantity: 8,
          },
        ],
        [
          {
            id: 0,
            weight: 5,
            quantity: 15,
          },
          {
            id: 1,
            weight: 11,
            quantity: 10,
          },
        ],
      ],
    },
  ],
};

module.exports = docs;
