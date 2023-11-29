const MethodPaymentEnum = {
  cash: "cash",
  credit: "credit",
  other: "other",
};

const MethodPaymentCreditEnum = {
  currentAccount: 14,
  check: 15,
};

const MethodPaymentCashEnum = {
  webpay: 17,
  bank: 18,
};

const MethodPaymentOtherEnum = {
  manual: 16,
};

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
  paymentMethods: [
    {
      id: 1,
      name: "Cuenta corriente a 3 días",
      cod: "C127",
      value: 3,
      method: MethodPaymentCreditEnum.currentAccount,
      type: MethodPaymentEnum.credit,
    },
    {
      id: 2,
      name: "Cuenta corriente a 7 días",
      cod: "C041",
      value: 7,
      method: MethodPaymentCreditEnum.currentAccount,
      type: MethodPaymentEnum.credit,
    },
    {
      id: 3,
      name: "Cuenta corriente a 10 días",
      cod: "C042",
      value: 10,
      method: MethodPaymentCreditEnum.currentAccount,
      type: MethodPaymentEnum.credit,
    },
    {
      id: 5,
      name: "Cuenta corriente a 12 días",
      cod: "C043",
      value: 2,
      method: MethodPaymentCreditEnum.currentAccount,
      type: MethodPaymentEnum.credit,
    },
    {
      id: 6,
      name: "Cuenta corriente a 15 días",
      cod: "C044",
      value: 15,
      method: MethodPaymentCreditEnum.currentAccount,
      type: MethodPaymentEnum.credit,
    },
    {
      id: 11,
      name: "Santander",
      value: "Santander",
      method: MethodPaymentCashEnum.bank,
      type: MethodPaymentEnum.cash,
    },
    {
      id: 12,
      name: "Banco de Chile",
      value: "Banco de Chile",
      method: MethodPaymentCashEnum.bank,
      type: MethodPaymentEnum.cash,
    },
    {
      id: 13,
      name: "Banco Estado",
      value: "Banco Estado",
      method: MethodPaymentCashEnum.bank,
      type: MethodPaymentEnum.cash,
    },
    {
      id: MethodPaymentCashEnum.webpay,
      name: "WebPay",
      value: "WebPay",
      type: MethodPaymentEnum.cash,
      method: MethodPaymentCashEnum.webpay,
    },
    {
      id: MethodPaymentOtherEnum.manual,
      name: "Transferencia manual",
      value: "Transferencia manual",
      type: MethodPaymentEnum.other,
      method: MethodPaymentOtherEnum.manual,
    },

    {
      id: 20,
      hierarchy: 1,
      cod: "C002",
      labelSummary: "Cheque al día",
      value: 1,
      method: MethodPaymentCreditEnum.check,
      type: MethodPaymentEnum.credit,
    },
    {
      id: 21,
      hierarchy: 2,
      cod: "C008",
      labelSummary: "Con cheque a 7 dias",
      value: 7,
      method: MethodPaymentCreditEnum.check,
      type: MethodPaymentEnum.credit,
    },
    {
      id: 22,
      hierarchy: 3,
      cod: "C016",
      labelSummary: "Con cheque a 15 dias",
      value: 15,
      method: MethodPaymentCreditEnum.check,
      type: MethodPaymentEnum.credit,
    },
    {
      id: 23,
      hierarchy: 4,
      cod: "C006",
      labelSummary: "Con cheque a 5 dias",
      value: 5,
      method: MethodPaymentCreditEnum.check,
      type: MethodPaymentEnum.credit,
    },
    {
      id: 24,
      hierarchy: 5,
      cod: "C011",
      labelSummary: "Con cheque a 10 dias",
      value: 10,
      method: MethodPaymentCreditEnum.check,
      type: MethodPaymentEnum.credit,
    },
    {
      id: 25,
      hierarchy: 6,
      cod: "C017",
      labelSummary: "Con cheque a 16 dias",
      value: 16,
      method: MethodPaymentCreditEnum.check,
      type: MethodPaymentEnum.credit,
    },
    {
      id: 26,
      hierarchy: 7,
      cod: "C004",
      labelSummary: "Con cheque a 3 dias",
      value: 3,
      method: MethodPaymentCreditEnum.check,
      type: MethodPaymentEnum.credit,
    },
    {
      id: 27,
      hierarchy: 8,
      cod: "C018",
      labelSummary: "Con cheque a 17 dias",
      value: 17,
      method: MethodPaymentCreditEnum.check,
      type: MethodPaymentEnum.credit,
    },
    {
      id: 28,
      hierarchy: 9,
      cod: "C003",
      labelSummary: "Con cheque a 2 dias ",
      value: 2,
      method: MethodPaymentCreditEnum.check,
      type: MethodPaymentEnum.credit,
    },
    {
      id: 29,
      hierarchy: 10,
      cod: "C005",
      labelSummary: "Con cheque a 4 dias",
      value: 4,
      method: MethodPaymentCreditEnum.check,
      type: MethodPaymentEnum.credit,
    },
    {
      id: 30,
      hierarchy: 11,
      cod: "C007",
      labelSummary: "Con cheque a 6 dias",
      value: 6,
      method: MethodPaymentCreditEnum.check,
      type: MethodPaymentEnum.credit,
    },

    {
      id: 30,
      hierarchy: 11,
      cod: "C007",
      labelSummary: "Con cheque a 6 dias",
      value: 6,
      method: MethodPaymentCreditEnum.check,
      type: MethodPaymentEnum.credit,
    },
    {
      id: 31,
      hierarchy: 12,
      cod: "C009",
      labelSummary: "Con cheque a 8 dias",
      value: 8,
      method: MethodPaymentCreditEnum.check,
      type: MethodPaymentEnum.credit,
    },
    {
      id: 32,
      hierarchy: 13,
      cod: "C010",
      labelSummary: "Con cheque a 9 dias",
      value: 9,
      method: MethodPaymentCreditEnum.check,
      type: MethodPaymentEnum.credit,
    },
    {
      id: 33,
      hierarchy: 14,
      cod: "C013",
      labelSummary: "Con cheque a 12 dias",
      value: 12,
      method: MethodPaymentCreditEnum.check,
      type: MethodPaymentEnum.credit,
    },
    {
      id: 34,
      hierarchy: 15,
      cod: "C014",
      labelSummary: "Con cheque a 13 dias",
      value: 13,
      method: MethodPaymentCreditEnum.check,
      type: MethodPaymentEnum.credit,
    },
    {
      id: 35,
      hierarchy: 16,
      cod: "C015",
      labelSummary: "Con cheque a 14 dias",
      value: 14,
      method: MethodPaymentCreditEnum.check,
      type: MethodPaymentEnum.credit,
    },
    {
      id: 36,
      hierarchy: 19,
      cod: "C012",
      labelSummary: "Con cheque a 11 dias",
      value: 11,
      method: MethodPaymentCreditEnum.check,
      type: MethodPaymentEnum.credit,
    },
  ],
};

module.exports = docs;
