interface ProccesCardContent {
  id: string | number | bigint;
  imageLink: string;
  imageSrc: string;
  caption: string;
  textLink: string;
  text: string;
}

export const cardLinks: ProccesCardContent[] = [{
  id: "cl-1",
  imageLink: "/process-page/target-page",
  imageSrc: "/set-image.jpg",
  caption: "Set a target",
  textLink: "/process-page/target-page",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
}, {
  id: "cl-2",
  imageLink: "/process-page/design-page",
  imageSrc: "/design-image.jpg",
  caption: "Design a solution",
  textLink: "/process-page/design-page",
  text: "Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
}, {
  id: "cl-3",
  imageLink: "/process-page/track-page",
  imageSrc: "/track-image.jpg",
  caption: "Track the progress",
  textLink: "/process-page/track-page",
  text: "Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
}];