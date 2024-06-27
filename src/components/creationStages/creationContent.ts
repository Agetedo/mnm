interface Media {
  id: string | number | bigint;
  imageSrc: string;
  imageAlt: string;
}

export const creationContent: Media[] = [{
  id: "cc-1",
  imageSrc: "/creation-image-01.jpg",
  imageAlt: "Brandmark",
}, {
  id: "cc-2",
  imageSrc: "/creation-image-02.svg",
  imageAlt: "Logotype",
}, {
  id: "cc-3",
  imageSrc: "/creation-image-03.svg",
  imageAlt: "Typography",
}, {
  id: "cc-4",
  imageSrc: "/creation-image-04.svg",
  imageAlt: "Brand Colors",
}, {
  id: "cc-5", 
  imageSrc: "/creation-image-05.jpg",
  imageAlt: "Icon Style",
}, {
  id: "cc-6",
  imageSrc: "/creation-image-06.jpg",
  imageAlt: "Mobile Style",
}];