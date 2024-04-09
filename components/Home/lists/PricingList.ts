import steering from "@/public/images/steering.png";
import book from "@/public/images/book.png";

export const PricingList = [
  {
    price: "$75",
    img: steering,
    title: "1 Hour Lesson",
    desc: "1 x 60 min Driving Lesson",
    button: "Book One Lesson",
  },
  {
    price: "$365",
    img: steering,
    title: "5 Hours",
    desc: "Save $10 on Total Package",
    button: "Book 5 Hour Pack",
  },
  {
    price: "$700",
    img: book,
    title: "10 Hours",
    desc: "Save $50 on Total Package",
    button: "Book 10 Hour Pack",
    book: true,
  },
  {
    price: "$1360",
    img: steering,
    title: "20 Hours",
    desc: "Save $140 on Total Package",
    button: "Book 20 Hour Pack",
  },
];
