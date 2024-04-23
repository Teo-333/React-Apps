import BurgerDreams from "../assets/img/Burger-1.png";
import BurgerWaldo from "../assets/img/Burger-2.png";
import BurgerCali from "../assets/img/Burger-3.png";
import BurgerBaconBuddy from "../assets/img/Burger-4.png";
import BurgerSpicy from "../assets/img/Burger-5.png";
import BurgerClassic from "../assets/img/Burger-6.png";
import InstagramLogo from "../assets/img/Instagram-icon.svg";
import TwitterLogo from "../assets/img/Twitter-icon.svg";
import YoutubeLogo from "../assets/img/Youtube-icon.svg";

export const SOCIALLINKS = [
  {
    name: "Instagram",
    url: "https://instagram.com",
    iconName: "icon-instagram",
    path: InstagramLogo,
  },
  {
    name: "Twitter",
    url: "https://twitter.com",
    iconName: "icon-twitter",
    path: TwitterLogo,
  },
  {
    name: "YouTube",
    url: "https://youtube.com",
    iconName: "icon-youtube",
    path: YoutubeLogo,
  },
];

export const BUTTONS = [
  {
    firstColumn: ["Company", "Home", "Order", "FAQ", "Contact"],
  },
  {
    secondColumn: [
      "Template",
      "Style Guide",
      "Changelog",
      "Licence",
      "Webflow University",
    ],
  },
  {
    thirdColumn: ["Flowbase", "More Cloneables"],
  },
  {
    navBar: ["Home", "Menu", "Company", "Login"],
  },
  { mainButtons: ["Desert", "Dinner", "Breakfast"] },
  {
    menubar: [
      "Burger Dreams",
      "Burger Cali",
      "Burger Spicy",
      "Burger Waldo",
      "Burger Bacon Buddy",
      "Burger Classic",
    ],
  },
];

export const MENUITEMS = [
  {
    id: 1,
    name: "Burger Dreams",
    description: "A classic burger with cheese, lettuce, and a special sauce.",
    price: "$ 9.20",
    imageUrl: BurgerDreams,
  },
  {
    id: 2,
    name: "Burger Waldo",
    description: "Loaded with a variety of toppings to discover.",
    price: "$ 10.00",
    imageUrl: BurgerWaldo,
  },
  {
    id: 3,
    name: "Burger Cali",
    description: "Topped with avocado and a sun-dried tomato spread.",
    price: "$ 8.00",
    imageUrl: BurgerCali,
  },
  {
    id: 3,
    name: "Burger Bacon Buddy",
    description: "Crispy bacon and smoky BBQ sauce atop a juicy patty.",
    price: "$ 9.99",
    imageUrl: BurgerBaconBuddy,
  },
  {
    id: 4,
    name: "Burger Spicy",
    description: "Spiced with jalapeños and a fiery salsa for a kick.",
    price: "$ 9.20",
    imageUrl: BurgerSpicy,
  },
  {
    id: 6,
    name: "Burger Classic",
    description: "The timeless burger, perfect in its simplicity.",
    price: "$ 8.00",
    imageUrl: BurgerClassic,
  },
];
