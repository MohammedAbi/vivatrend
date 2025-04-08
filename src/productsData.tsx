import Img1 from "./assets/images/background.jpg";
import Img2 from "./assets/images/Background2.jpg";
import Img3 from "./assets/images/Background3.jpg";
import { Product } from "./components/cart/types";

export const productsData: Product[] = [
  {
    id: "1",
    title: "Brown headphones",
    description: "Professional headphones with gold trim.",
    price: 449.99,
    discountedPrice: 382.49,
    image: { url: Img1, alt: "Gold headphones" },
    rating: 4,
    tags: ["headphones"],
    reviews: [
      { id: "r1", username: "Michael", rating: 4, description: "Good sound" },
      { id: "r2", username: "Michaelaa", rating: 5, description: "Good" },
    ],
  },
  {
    id: "2",
    title: "Gold headphones",
    description: "Professional headphones with gold trim.",
    price: 449.99,
    discountedPrice: 382.49,
    image: { url: Img2, alt: "Gold headphones" },
    rating: 4,
    tags: ["phones"],
    reviews: [
      { id: "r2", username: "John", rating: 4, description: "Very nice" },
    ],
  },
  {
    id: "3",
    title: "Silver headphones",
    description: "Professional headphones with silver trim.",
    price: 449.99,
    discountedPrice: 382.49,
    image: { url: Img3, alt: "Silver headphones" },
    rating: 4,
    tags: ["watches"],
    reviews: [
      { id: "r3", username: "Anna", rating: 4, description: "Clean sound" },
    ],
  },
  {
    id: "4",
    title: "Yellow headphones",
    description: "Professional headphones with gold trim.",
    price: 449.99,
    discountedPrice: 382.49,
    image: { url: Img1, alt: "Gold headphones" },
    rating: 4,
    tags: ["PS"],
    reviews: [
      { id: "r2", username: "Michael", rating: 4, description: "Good sound" },
    ],
  },
  {
    id: "5",
    title: "Blue headphones",
    description: "Professional headphones with gold trim.",
    price: 449.99,
    discountedPrice: 382.49,
    image: { url: Img2, alt: "Gold headphones" },
    rating: 4,
    tags: ["shoes"],
    reviews: [
      { id: "r2", username: "John", rating: 4, description: "Very nice" },
    ],
  },
  {
    id: "9",
    title: "Black headphones",
    description: "Professional headphones with silver trim.",
    price: 449.99,
    discountedPrice: 382.49,
    image: { url: Img3, alt: "Silver headphones" },
    rating: 4,
    tags: ["clothes"],
    reviews: [
      { id: "r3", username: "Anna", rating: 4, description: "Clean sound" },
    ],
  },
];
