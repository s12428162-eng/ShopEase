export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: "jacket" | "shirt" | "set" | "suit";
};

export const products: Product[] = [
  {
    id: 1,
    name: "قميص شبابي مع حزام",
    price: 45,
    image: "/images/jacket.jpeg",
    description:
      "قميص شبابي أكمام طويلة صناعة تركية ذو ملمس ناعم مع حزام جلد هدية",
    category: "shirt"
  },
  {
    id: 2,
    name: "قميص رجالي",
    price: 25,
    image: "/images/t-shirt.jpeg",
    description:
      "قميص رجالي مخطط ذو كم طويل صناعة صينية نخب أول",
    category: "shirt"
  },
  {
    id: 3,
    name: "لبسة شبابية كاملة",
    price: 15,
    image: "/images/shoes.jpeg",
    description:
      "لبسة شبابية مع حذاء وساعة يد أصلية ونظارة شمسية",
    category: "set"
  },
  {
    id: 4,
    name: "لبسة شبابية",
    price: 5,
    image: "/images/t-shirts.jpeg",
    description:
      "أربع بلايز مع حذاء سبورت وبنطال كتان أسود",
    category: "set"
  },
  {
    id: 5,
    name: "لبسة شبابية",
    price: 350,
    image: "/images/dress.jpeg",
    description:
      "لبسة شبابية مع حذاء سبورت وساعة يد وبنطال كتان",
    category: "set"
  },
  {
    id: 6,
    name: "جاكيت شبابي",
    price: 70,
    image: "/images/jachets.jpeg",
    description:
      "جاكيت شبابي تركي نخب أول",
    category: "jacket"
  },
  {
    id: 7,
    name: "بدلة رسمية",
    price: 120,
    image: "/images/Formal.jpeg",
    description:
      "بدلة شبابية رسمية مع قميص أبيض وربطة عنق",
    category: "suit"
  },
  {
    id: 8,
    name: "لبسة شبابية",
    price: 150,
    image: "/images/paltes.jpeg",
    description:
      "لبسة شبابية موديل عصري",
    category: "set"
  },
  {
    id: 9,
    name: "قميص رجالي",
    price: 20,
    image: "/images/Men`s.jpeg",
    description:
      "قميص رجالي ذو جودة عالية",
    category: "shirt"
  },
];

export default products;