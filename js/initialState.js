const initialState = {
  term: '',
  category: 'all',
  products: [
    {
      id: 1,
      name: "Backless mini dress",
      category: "women",
      images: ["1-1.jpg", "1-2.jpg"],
      off: 40,
      price: 27,
      isChecked: false
    },
    {
      id: 2,
      name: "Floral sleeveless dress",
      category: "women",
      images: ["2-1.jpg", "2-2.jpg"],
      off: 34,
      price: 40,
      isChecked: false
    },
    {
      id: 3,
      name: "Cover up tunic",
      category: "women",
      images: ["3-1.jpg", "3-2.jpg"],
      off: 10,
      price: 50,
      isChecked: false
    },
    {
      id: 4,
      name: "Athletic T-Shirt",
      category: "men",
      images: ["4-1.jpg", "4-2.jpg"],
      off: 30,
      price: 24,
      isChecked: false
    },
    {
      id: 5,
      name: "Big & Tall Jacket",
      category: "men",
      images: ["5-1.jpg", "5-2.jpg"],
      off: 50,
      price: 33,
      isChecked: false
    },
    {
      id: 6,
      name: "Style Dome Men",
      category: "men",
      images: ["6-1.jpg", "6-2.jpg"],
      off: 40,
      price: 90,
      isChecked: false
    },
    {
      id: 7,
      name: "Casaquinho Rosa Legal",
      category: "kids",
      images: ["7-1.jpg", "7-2.jpg"],
      off: 20,
      price: 240,
      isChecked: false
    },
    {
      id: 8,
      name: "Casaco com Bolsinha",
      category: "kids",
      images: ["8-1.jpg", "8-2.jpg"],
      off: 55,
      price: 90,
      isChecked: false
    },
    {
      id: 9,
      name: "Pijama irmãos sapecas",
      category: "kids",
      images: ["9-1.jpg", "9-2.jpg"],
      off: 40,
      price: 340,
      isChecked: false
    }
  ],
  cart: {
    total: 0,
    qtd: 0,
    user: {
      email: '',
      cardNumber: '',
      cardExpires: '',
      cardCvc: ''
    },
    items: [
      // {
      //   id: 1,
      //   name: "Vlackness mini dress amaxon",
      //   image: "1-1.jpg",
      //   price: 500,
      //   qtd: 2
      // }
    ]
  }
};