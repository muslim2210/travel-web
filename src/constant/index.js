import {
  airbnb,
  bookingCom,
  tripadvisor,
  orbit,
  expedia,
  booking,
  logo,
  hambmenu,
  work1,
  twt,
  fb,
  ig,
  key1,
  key2,
  key3,
  home,
  discover,
  specials,
  contact,
} from "../assets/icons";

import {
  hero,
  service1,
  service2,
  service3,
  keyfeautures,
  test1,
  travelpoint,
  destination1,
  destination2,
  destination3,
} from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Home", imgURL: home },
  { href: "#discover", label: "Discover", imgURL: discover },
  { href: "#special-deals", label: "Special Deals", imgURL: specials },
  { href: "#contact", label: "Contact", imgURL: contact },
];

export const sponsor = [tripadvisor, expedia, airbnb, orbit];

export const services = [
  {
    imgURL: service1,
    label: "Best Tour Guide",
    subtext: "What looked like a small patch of purple grass, above five feet.",
  },
  {
    imgURL: service2,
    label: "Easy Booking",
    subtext: "Square, was moving across the sand in their direction.",
  },
  {
    imgURL: service3,
    label: "Weather Forecast",
    subtext: "What looked like a small patch of purple grass, above five feet.",
  },
];

export const destinations = [
  {
    imgURL: destination1,
    label: "Paradise Beach, Bantayan Island",
    price: "$550.16",
    country: "Rome, Italy",
    rating: "4.8",
  },
  {
    imgURL: destination2,
    label: "Ocean with full of Colors",
    price: "$20.99",
    country: "Maldives",
    rating: "4.5",
  },
  {
    imgURL: destination3,
    label: "Mountain View, Above the cloud",
    price: "$150.99",
    country: "Uni Emirate Arab",
    rating: "4.9",
  },
  {
    imgURL: destination1,
    label: "Paradise Beach, Bantayan Island",
    price: "$550.16",
    country: "Rome, Italy",
    rating: "4.8",
  },
  {
    imgURL: destination3,
    label: "Mountain View, Above the cloud",
    price: "$150.99",
    country: "Uni Emirate Arab",
    rating: "4.9",
  },
];

export const statistics = [
  { value: "500+", label: "Holiday Package" },
  { value: "100", label: "Luxury Hotel" },
  { value: "7", label: "Premium Airlane" },
  { value: "2k+", label: "Happy Customer" },
];

export const reviews = [
  {
    imgURL: test1,
    client: "Mark Smith",
    type: "/ Travel Enthusiast",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has rootsin a piece of classical Latin literature from 45 BC.",
  },
  {
    imgURL: test1,
    client: "Mark Smith",
    type: "/ Travel Enthusiast",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has rootsin a piece of classical Latin literature from 45 BC.",
  },
];

export const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "About", link: "/" },
      { name: "Career", link: "/" },
      { name: "Mobile", link: "/" },
    ],
  },
  {
    title: "Contact",
    links: [
      { name: "Why Travlog?", link: "/" },
      { name: "Partner with us", link: "/" },
      { name: "FAQ’s", link: "/" },
      { name: "Blog", link: "/" },
    ],
  },
  {
    title: "Meet Us",
    links: [
      { name: "+00 92 1234 56789", link: "tel:+00 92 1234 56789" },
      { name: "info@travlog.com", link: "mailto:info@travlog.com" },
      { name: "205. R Street, New York, USA" },
      { name: "BD23200" },
    ],
  },
];

export const socialMedia = [
  { src: fb, alt: "facebook logo" },
  { src: twt, alt: "twitter logo" },
  { src: ig, alt: "instagram logo" },
];
