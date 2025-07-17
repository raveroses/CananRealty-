export type Property = {
  id: number;
  category: string;
  image: string;
  heading: string;
  paragraph: string;
  view: string;
  service?: string;
};
export type Land = {
  id: number;
  title: string[];
  location: string;
  sqm: number;
  names: string;
  category: string;
  image: string;
  price: number;
};
const PropertyListing: Property[] = [
  {
    id: 1,
    category: "Villa",
    image: "/images/Modern2.png",
    heading: " Luxury Family Home",
    paragraph: "132 Greene Ave",
    view: "View",
  },
  {
    id: 2,
    category: "Villa",
    image: "/images/Modern2.png",
    heading: " Luxury Family Home",
    paragraph: "132 Greene Ave",
    view: "View",
  },
  {
    id: 3,
    category: "Office",
    image: "/images/Modern2.png",
    heading: " Luxury Family Home",
    paragraph: "132 Greene Ave",
    view: "View",
  },
  {
    id: 4,
    category: "Office",
    image: "/images/Modern2.png",
    heading: " Luxury Family Home",
    paragraph: "132 Greene Ave",
    view: "View",
  },
  {
    id: 5,
    category: "Home",
    image: "/images/Modern2.png",
    heading: " Luxury Family Home",
    paragraph: "132 Greene Ave",
    view: "View",
  },
  {
    id: 6,
    category: "Home",
    image: "/images/Modern2.png",
    heading: " Luxury Family Home",
    paragraph: "132 Greene Ave",
    view: "View",
  },
  {
    id: 7,
    category: "Apartment",
    image: "/images/Modern2.png",
    heading: " Luxury Family Home",
    paragraph: "132 Greene Ave",
    view: "View",
  },
  {
    id: 8,
    category: "Apartment",
    image: "/images/Modern2.png",
    heading: " Luxury Family Home",
    paragraph: "132 Greene Ave",
    view: "View",
  },
  {
    id: 9,
    category: "Apartment",
    image: "/images/Modern2.png",
    heading: " Luxury Family Home",
    paragraph: "132 Greene Ave",
    view: "View",
  },
];

export const PropertyForsale: Property[] = [
  {
    id: 1,
    category: "Apartment",
    image: "/images/greens.jpg",
    heading: " Luxury Family Home",
    paragraph: "132 Greene Ave",
    view: "View",
    service: "sell",
  },
  {
    id: 2,
    category: "Villa",
    image: "/images/greens2.jpg",
    heading: "  Family Home",
    paragraph: "132 Greene Ave",
    view: "View",
    service: "sell",
  },
  {
    id: 3,
    category: "Office",
    image: "/images/greens3.jpg",
    heading: " Home",
    paragraph: "132 Greene Ave",
    view: "View",
    service: "sell",
  },
  {
    id: 4,
    category: "Home",
    image: "/images/greens.jpg",
    heading: " Luxury Family Home",
    paragraph: "132 Greene Ave",
    view: "View",
    service: "sell",
  },
];
export const PropertyForRent: Property[] = [
  {
    id: 1,
    category: "Home",
    image: "/images/greens.jpg",
    heading: " Luxury Family Home",
    paragraph: "132 Greene Ave",
    view: "View",
    service: "rent",
  },
  {
    id: 2,
    category: "Apartment",
    image: "/images/sky.jpg",
    heading: " Luxury Family Home",
    paragraph: "132 Greene Ave",
    view: "View",
    service: "rent",
  },
  {
    id: 3,
    category: "Villa",
    image: "/images/sky2.jpg",
    heading: " Luxury Family Home",
    paragraph: "132 Greene Ave",
    view: "View",
    service: "rent",
  },
  {
    id: 4,
    category: "Home",
    image: "/images/greens.jpg",
    heading: " Luxury Family Home",
    paragraph: "132 Greene Ave",
    view: "View",
    service: "rent",
  },
  {
    id: 5,
    category: "Office",
    image: "/images/sixth.jpg",
    heading: " Luxury Family Home",
    paragraph: "132 Greene Ave",
    view: "View",
    service: "rent",
  },
  {
    id: 6,
    category: "Office",
    image: "/images/greens.jpg",
    heading: " Luxury Family Home",
    paragraph: "132 Greene Ave",
    view: "View",
    service: "rent",
  },
];

export const LandList: Land[] = [
  {
    id: 1,
    names: "The Box Estate",
    category: "Residential",
    image: "/images/box-first.jpg",
    title: ["C of O", "Registered Survey"],
    location: "Olorunsogo",
    sqm: 500,
    price: 3500000,
  },
  {
    id: 2,
    names: "Northern Ireland",
    category: "Residential",
    image: "/images/northernIreland.jpg",
    title: ["Registered Survey", "Deed of Assignment"],
    location: "Ido",
    sqm: 500,
    price: 1000000,
  },
  {
    id: 3,
    names: "Ile Aje",
    category: "Residential",
    image: "/images/box-first.jpg",
    title: ["Registered Survey", "Deed of Assignment"],
    location: "Moniya",
    sqm: 500,
    price: 1600000,
  },
];
export default PropertyListing;
