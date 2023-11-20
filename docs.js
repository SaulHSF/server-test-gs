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
            name: "Cilindro 5kg",
            type: "normal",
            enabled: true,
            weight: 5,
            price: 10485,
            isPallet: true,
            amount: 10,
          },
          {
            id: 1,
            name: "Cilindro 11kg",
            type: "normal",
            enabled: true,
            weight: 11,
            price: 15255,
            isPallet: true,
            amount: 5,
          },
        ],
        [
          {
            id: 0,
            name: "Cilindro 15kg",
            type: "normal",
            enabled: true,
            weight: 15,
            price: 10485,
            isPallet: true,
            amount: 15,
          },
          {
            id: 1,
            name: "Cilindro 45kg",
            type: "normal",
            enabled: true,
            weight: 45,
            price: 15255,
            isPallet: true,
            amount: 10,
          },
        ],
      ],
    },
    {
      id: 1,
      idProducts: [0, 1, 2, 3],
      combinations: [
        [
          {
            id: 0,
            name: "Cilindro 5kg",
            type: "normal",
            enabled: true,
            weight: 5,
            price: 10485,
            isPallet: true,
            amount: 10,
          },
          {
            id: 1,
            name: "Cilindro 11kg",
            type: "normal",
            enabled: true,
            weight: 11,
            price: 15255,
            isPallet: true,
            amount: 5,
          },
          {
            id: 2,
            name: "Cilindro 15kg",
            type: "normal",
            enabled: true,
            weight: 15,
            price: 15255,
            isPallet: true,
            amount: 5,
          },
          {
            id: 3,
            name: "Cilindro 45kg",
            type: "normal",
            enabled: true,
            weight: 45,
            price: 15255,
            isPallet: true,
            amount: 15,
          },
        ],
        [
          {
            id: 0,
            name: "Cilindro 5kg",
            type: "normal",
            enabled: true,
            weight: 5,
            price: 10485,
            isPallet: true,
            amount: 15,
          },
          {
            id: 1,
            name: "Cilindro 11kg",
            type: "normal",
            enabled: true,
            weight: 11,
            price: 15255,
            isPallet: true,
            amount: 10,
          },
          {
            id: 2,
            name: "Cilindro 15kg",
            type: "normal",
            enabled: true,
            weight: 15,
            price: 15255,
            isPallet: true,
            amount: 5,
          },
          {
            id: 3,
            name: "Cilindro 45kg",
            type: "normal",
            enabled: true,
            weight: 45,
            price: 15255,
            isPallet: true,
            amount: 15,
          },
        ],
      ],
    },
  ],
  positiveBalance: [
    {
      id: 1,
      numDocument: 1000000000,
      dateCreation: "28/08/2023",
      value: 10000,
      type: "rut",
    },
    {
      id: 2,
      numDocument: 1000000001,
      dateCreation: "28/08/2023",
      value: 10001,
      type: "discount",
    },
    {
      id: 3,
      numDocument: 1000000002,
      dateCreation: "28/08/2023",
      value: 10001,
      type: "oneClick",
    },
    {
      id: 4,
      numDocument: 1000000003,
      dateCreation: "28/08/2023",
      value: 10001,
      type: "others",
    },
    {
      id: 5,
      numDocument: 1000000004,
      dateCreation: "28/09/2023",
      value: 1000000,
      type: "oneClick",
    },
    {
      id: 6,
      numDocument: 1000000005,
      dateCreation: "28/09/2023",
      value: 400000,
      type: "discount",
    },
  ],
};

module.exports = docs;
