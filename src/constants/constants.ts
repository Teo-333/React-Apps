import InstagramIcon from "../assets/images/Instagram-icon.svg";
import TwitterIcon from "../assets/images/Twitter-icon.svg";
import YoutubeIcon from "../assets/images/Youtube-icon.svg";

export interface SocialLink {
  name: string;
  url: string;
  iconName: string;
  path: string;
}


export const SOCIALLINKS: SocialLink[] = [
  {
    name: "Instagram",
    url: "https://instagram.com",
    iconName: "icon-instagram",
    path: InstagramIcon,
  },
  {
    name: "Twitter",
    url: "https://twitter.com",
    iconName: "icon-twitter",
    path: TwitterIcon,
  },
  {
    name: "YouTube",
    url: "https://youtube.com",
    iconName: "icon-youtube",
    path: YoutubeIcon,
  },
];




export interface ButtonColumn {
  firstColumn?: string[];
  secondColumn?: string[];
  thirdColumn?: string[];
  navBar?: string[];
  mainButtons?: string[];
  menubar?: string[];
}

export const BUTTONS: ButtonColumn[] = [
  { firstColumn: ["Company", "Home", "Order", "FAQ", "Contact"] },
  { secondColumn: ["Template", "Style Guide", "Changelog", "Licence", "Webflow University"] },
  { thirdColumn: ["Flowbase", "More Cloneables"] },
  { navBar: ["Home", "Menu", "Company", "Login"] },
  { mainButtons: ["Dessert", "Dinner", "Breakfast"] },
  { menubar: [
    "Burger Dreams", 
    "Burger Cali", 
    "Burger Spicy", 
    "Burger Waldo", 
    "Burger Bacon Buddy", 
    "Burger Classic"
  ]},
];



export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
}


export const TESTMENUITEMS: MenuItem[] = [
  {
    id: 1,
    name: "Burger Dreams",
    description: "A classic burger with cheese, lettuce, and a special sauce.",
    price: "$ 9.20",
    imageUrl: "path/to/burger-dreams",
  },
  {
    id: 2,
    name: "Burger Waldo",
    description: "Loaded with a variety of toppings to discover.",
    price: "$ 10.00",
    imageUrl: "path/to/burger-waldo",
  },
  {
    id: 3,
    name: "Burger Cali",
    description: "Topped with avocado and a sun-dried tomato spread.",
    price: "$ 8.00",
    imageUrl: "path/to/burger-cali",
  },
  {
    id: 4,
    name: "Burger Bacon Buddy",
    description: "Crispy bacon and smoky BBQ sauce atop a juicy patty.",
    price: "$ 9.99",
    imageUrl: "path/to/burger-bacon-buddy",
  },
  {
    id: 5,
    name: "Burger Spicy",
    description: "Spiced with jalapeños and a fiery salsa for a kick.",
    price: "$ 9.20",
    imageUrl: "path/to/burger-spicy",
  },
  {
    id: 6,
    name: "Burger Classic",
    description: "The timeless burger, perfect in its simplicity.",
    price: "$ 8.00",
    imageUrl: "path/to/burger-classic",
  },
];
