// Lorem Data
// const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

import { Easy } from "../pages/JodiDesawer/Easy";
import { Special } from "../pages/JodiDesawer/Special";
import { ReferenceTab } from "../pages/Reference/ReferenceTab";
import { Icons } from "../utils";

export const FooterContent = [
  {
    icons: Icons.home,
    name: "Home",
    url: "/",
  },
  {
    icons: Icons.bid,
    name: "My Bids",
    url: "my-bids",
  },
  {
    icons: Icons.funds,
    name: "Funds",
    url: "add-cash",
  },
  {
    icons: Icons.wallet,
    name: "PassBook",
    url: "bank-details",
  },
  {
    icons: Icons.chat,
    name: "Live Chat",
    url: "live-chat",
  },
];

export const asideBarList = [
  {
    slug: "notification-history",
    title: "notificationHistory",
    icons: Icons.arrowRight,
  },
  {
    slug: "my-balance",
    title: "MyBalance",
    icons: Icons.arrowRight,
  },
  {
    slug: "desawer",
    title: "desawer",
    icons: Icons.arrowRight,
  },
  {
    slug: "jodi-desawer",
    title: "jodiDesawer",
    icons: Icons.arrowRight,
  },
  {
    slug: "mpin",
    title: "mpin",
    icons: Icons.arrowRight,
  },
  {
    slug: "login",
    title: "login",
    icons: Icons.arrowRight,
  },
];

export const desawer = [
  {
    icons: Icons.diceTwo,
    title: "Play Jodi",
  },
  {
    icons: Icons.diceFour,
    title: "Play harf",
  },
  {
    icons: Icons.diceThree,
    title: "Crossing",
  },
];

export const gamesType = [
  {
    title: "Andar",
  },
  {
    title: "Bahar",
  },
];

export const people = [
  { name: "Wade Cooper" },
  { name: "Arlene Mccoy" },
  { name: "Devon Webb" },
  { name: "Tom Cook" },
  { name: "Tanya Fox" },
  { name: "Hellen Schmidt" },
];

export const SwiperImg = [
  {
    img: "https://images.unsplash.com/photo-1710595638861-a6f9680649b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8",
  },
  {
    img: "https://images.unsplash.com/photo-1710441970901-c9c2ae39a77c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const gamesDetails = [
  {
    close: "2:00 am",
    result: "5:00 am",
    gameName: "abc",
    gameNumber: 10,
  },
  {
    close: "2:00 am",
    result: "5:00 am",
    gameName: "abc",
    gameNumber: 10,
  },
  {
    close: "2:00 am",
    result: "5:00 am",
    gameName: "abc",
    gameNumber: 10,
  },
  {
    close: "2:00 am",
    result: "5:00 am",
    gameName: "abc",
    gameNumber: 10,
  },
  {
    close: "2:00 am",
    result: "5:00 am",
    gameName: "abc",
    gameNumber: 10,
  },
  {
    close: "2:00 am",
    result: "5:00 am",
    gameName: "abc",
    gameNumber: 10,
  },
];

export const JodiDesawerTabName = [
  {
    name: "Easy Mode",
  },
  {
    name: "Special Mode",
  },
];

export const JodiDesawerTabContent = [
  {
    component: <Easy />,
  },
  {
    component: <Special />,
  },
];

export const AddMoneyBtn = [
  {
    money: "100",
  },
  {
    money: "200",
  },
  {
    money: "300",
  },
  {
    money: "2000",
  },
];

export const tbodySpecial = [
  {
    No: "1",
    Amount: "1",
    GameType: "1",
  },
];
export const reference = [
  {
    name: "Reference",
  },
  {
    name: "Earning",
  },
];

export const referenceComponents = [
  {
    component: <ReferenceTab />,
  },
  {
    component: "",
  },
];
