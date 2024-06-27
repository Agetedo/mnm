interface TeamMemberContent {
  id: string | number | bigint;
  name: string;
  nameLink: string;
  post: string;
  imageSrc: string;
  twitterIcon: string;
  twitterLink: string;
  inIcon: string;
  inLink: string;
  beIcon: string;
  beLink: string;
  emailIcon: string;
  emailAdress: string;
}

export const teamMember: TeamMemberContent[] = [{
  id: "tm-1",
  name: "Ron Swanson",
  nameLink: "",
  post: "Founder",
  imageSrc: "/ron-foto.jpg",
  twitterIcon: "/twitter-icon.png",
  twitterLink: "",
  inIcon: "/in-icon.png",
  inLink: "",
  beIcon: "/be-icon.png",
  beLink: "",
  emailIcon: "/email-icon.png",
  emailAdress: "mailto:ron@minimal.com",
}, {
  id: "tm-2",
  name: "Julia Depish",
  nameLink: "",
  post: "Marketing",
  imageSrc: "/julia-foto.jpg",
  twitterIcon: "/twitter-icon.png",
  twitterLink: "",
  inIcon: "/in-icon.png",
  inLink: "",
  beIcon: "/be-icon.png",
  beLink: "",
  emailIcon: "/email-icon.png",
  emailAdress: "mailto:julia@minimal.com",
}, {
  id: "tm-3",
  name: "Danny Devry",
  nameLink: "",
  post: "Designer",
  imageSrc: "/danny-foto.jpg",
  twitterIcon: "/twitter-icon.png",
  twitterLink: "",
  inIcon: "/in-icon.png",
  inLink: "",
  beIcon: "/be-icon.png",
  beLink: "",
  emailIcon: "/email-icon.png",
  emailAdress: "mailto:devry@minimal.com",
}, {
  id: "tm-4",
  name: "Lisa Smith",
  nameLink: "",
  post: "Developer",
  imageSrc: "/lisa-foto.jpg",
  twitterIcon: "/twitter-icon.png",
  twitterLink: "",
  inIcon: "/in-icon.png",
  inLink: "",
  beIcon: "/be-icon.png",
  beLink: "",
  emailIcon: "/email-icon.png",
  emailAdress: "mailto:lisa@minimal.com",
}];