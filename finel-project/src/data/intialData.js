export const productsArr = [
  {
    id: "p1",
    name: "Acoustic Guitar",
    price: 150.0,
    quantity: 120,
    customersId: ["c1", "c2", "c3", "c4"],
    img: undefined,
  },
  {
    id: "p2",
    name: "Sacsophone",
    price: 600.0,
    quantity: 50,
    customersId: ["c1"],
    img: undefined,
  },
  {
    id: "p3",
    name: "Drums",
    price: 250.0,
    quantity: 80,
    customersId: ["c1", "c3", "c4"],
  },
  {
    id: "p4",
    name: "Piano",
    price: 1500.0,
    quantity: 25,
    customersId: ["c3"],
  },
];

export const customersArr = [
  {
    id: "c1",
    firstName: "Bob",
    lastName: "Marley",
    city: "Nine Mile",
    productsIds: ["p1", "p2", "p3"],
  },
  {
    id: "c2",
    firstName: "Jhonny",
    lastName: "Cach",
    city: "Arkansas",
    productsIds: ["p1"],
  },
  {
    id: "c3",
    firstName: "Eric",
    lastName: "clapton",
    city: "Ripley",
    productsIds: ["p1", "p3", "p4"],
  },
  {
    id: "c4",
    firstName: "Tracy",
    lastName: "Chapman",
    city: "Cleveland",
    productsIds: ["p1", "p3"],
  },
];

export const purchasesArr = [
  {
    product: "Sacsophone",
    quantity: 5,
    customer: "Bob",
    price: 3000,
    creatAt: 1681150073751,
  },
  {
    product: "Drums",
    quantity: 5,
    customer: "Bob",
    price: 1250,
    creatAt: 1681150073751,
  },
  {
    product: "Sacsophone",
    quantity: 2,
    customer: "Bob",
    price: 1200,
    creatAt: 1680524271115,
  },
  {
    product: "Acoustic Guitar",
    quantity: 2,
    customer: "Bob",
    price: 300,
    creatAt: 1681150073751,
  },

  {
    product: "Acoustic Guitar",
    quantity: 3,
    customer: "Jhonny",
    price: 450,
    creatAt: 1680524278589,
  },

  {
    product: "Acoustic Guitar",
    quantity: 4,
    customer: "Eric",
    price: 600,
    creatAt: 1681150073751,
  },
  {
    product: "Piano",
    quantity: 1,
    customer: "Eric",
    price: 1500,
    creatAt: 1681150073751,
  },
  {
    product: "Acoustic Guitar",
    quantity: 8,
    customer: "Tracy",
    price: 1200,
    creatAt: 1680524288425,
  },
  {
    product: "Drums",
    quantity: 8,
    customer: "Eric",
    price: 2000,
    creatAt: 1680524288425,
  },
  {
    product: "Drums",
    quantity: 6,
    customer: "Tracy",
    price: 1500,
    creatAt: 1680524288425,
  },
  {
    product: "Acoustic Guitar",
    quantity: 2,
    customer: "Bob",
    price: 300,
    creatAt: 1680524288425,
  },
];
export const users = [
  {
    id: "u1",
    userName: "user",
    password: "1111",
  },
  {
    id: "u2",
    userName: "admin",
    password: "2222",
  },
];
