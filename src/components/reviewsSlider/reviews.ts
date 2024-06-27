interface ReviewsContent {
  id: string | number | bigint;
  reviewText: string;
  imageSrc: string;
  reviewAutor: string;
}

export const reviews: ReviewsContent[] = [{
  id: "r-1",
  reviewText: "“I love these guys! They did a great job. I would recommend themto anyone.”",
  imageSrc: "/uberstien-foto.png",
  reviewAutor: "Julius Von Uberstien",
}, {
  id: "r-2",
  reviewText: "“Elexis Corp has grown immensely with the help of Minimal.”",
  imageSrc: "/rachel-foto.png",
  reviewAutor: "Rachel Stamos",
}, {
  id: "r-3",
  reviewText: "“I love these guys! They did a great job. I would recommend themto anyone.”",
  imageSrc: "/uberstien-foto.png",
  reviewAutor: "Julius Von Uberstien",
}, {
  id: "r-4",
  reviewText: "“Elexis Corp has grown immensely with the help of Minimal.”",
  imageSrc: "/rachel-foto.png",
  reviewAutor: "Rachel Stamos",
}];