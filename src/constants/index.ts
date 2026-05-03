import AboutImage from "@/assets/img/about-image.png";
import NewsLetter1 from "@/assets/img/newsletter1.png";
import NewsLetter2 from "@/assets/img/newsletter2.png";
import NewsLetter3 from "@/assets/img/newsletter3.png";
import Renovation from "@/assets/img/services/construction-renovation.png";
import Consulting from "@/assets/img/services/consulting.png";
import Credit from "@/assets/img/services/credit-intermediation.png";
import Lease from "@/assets/img/services/estate-lease.jpg";
import Avatar1 from "@/assets/img/avatars/avatar1.png";
import Avatar2 from "@/assets/img/avatars/avatar2.png";
import Avatar3 from "@/assets/img/avatars/avatar3.png";
import Avatar4 from "@/assets/img/avatars/avatar4.png";
import Project1 from "@/assets/img/projects/project1.png";
import Project2 from "@/assets/img/projects/project2.png";
import Project3 from "@/assets/img/projects/project3.png";
import { importMultipleImages } from "../utils";
const clientLogos = import.meta.glob(
  "@/assets/img/clients/*.{png,jpg,jpeg,svg}",
  { eager: true },
);

const productImgs = import.meta.glob(
  "@/assets/img/products/*.{png,jpg,jpeg,svg}",
  { eager: true },
);

const serviceImgs = import.meta.glob(
  "@/assets/img/services/*.{png,jpg,jpeg,svg}",
  { eager: true },
);

export const aboutUs = [
  "At Havenly, we are dedicated to redefining the real estate landscape through innovative development and a deep commitment to quality. With years of experience in the industry, our team of experts brings a wealth of knowledge and a keen eye for detail to every project we undertake. We specialize in creating thoughtful, sustainable spaces that enrich communities and elevate the living experience.",
  "Our focus is not just on building properties; it’s about crafting environments where people can thrive. We take pride in showcasing only our projects, demonstrating our expertise and passion for what we do.",
];

export const propertyImages = [
  {
    thumbnail: AboutImage,
    bigPropertyImg: AboutImage,
  },
  {
    thumbnail: NewsLetter1,
    bigPropertyImg: NewsLetter1,
  },
  {
    thumbnail: NewsLetter2,
    bigPropertyImg: NewsLetter2,
  },
];

export const clients = [...importMultipleImages(clientLogos)];

export const services = [
  {
    title: "Real Estate Consulting",
    src: Consulting,
  },
  {
    title: "Credit Intermediation",
    src: Credit,
  },
  {
    title: "Contruction and Renovation",
    src: Renovation,
  },
  {
    title: "Real Estate Lease",
    src: Lease,
  },
];

export const avatars = [Avatar4, Avatar3, Avatar2, Avatar1];
export const newsLetters = [
  {
    src: NewsLetter1,
    date: "Dec 20, 2024",
    title: "5 Essential Real Estate Trends to Watch in 2025",
  },
  {
    src: NewsLetter2,
    date: "Dec 20, 2024",
    title: "Shaping the Future of Property Investment",
  },
  {
    src: NewsLetter3,
    date: "Dec 20, 2024",
    title: "Transforming the Property Landscape",
  },
];

const importProductImgs = [...importMultipleImages(productImgs)];

export const products = [
  {
    size: "3,500 sq. ft.",
    title: "Modern Urban Apartments",
    location: "Downtown City Center",
    beds: 3,
    baths: 2,
    price: 950,
    urgent: true,
    src: importProductImgs[0],
  },
  {
    size: "3,800 sq. ft.",
    title: "Contemporary City Living Spaces",
    location: "Downtown City Center",
    beds: 3,
    baths: 2,
    price: 950,
    urgent: false,
    src: importProductImgs[1],
  },
  {
    size: "3,800 sq. ft.",
    title: "Chic Urban Residences",
    location: "Downtown City Center",
    beds: 3,
    baths: 2,
    price: 950,
    urgent: false,
    src: importProductImgs[2],
  },
  {
    size: "3,500 sq. ft.",
    title: "Stylish City Apartments",
    location: "Downtown City Center",
    beds: 3,
    baths: 2,
    price: 950,
    urgent: false,
    src: importProductImgs[3],
  },
  {
    size: "3,800 sq. ft.",
    title: "Sophisticated Urban Dwellings",
    location: "Downtown City Center",
    beds: 3,
    baths: 2,
    price: 950,
    urgent: false,
    src: importProductImgs[4],
  },
  {
    size: "3,800 sq. ft.",
    title: "Trendy Metropolitan Homes",
    location: "Downtown City Center",
    beds: 3,
    baths: 2,
    price: 950,
    urgent: false,
    src: importProductImgs[5],
  },
];

export const projects = [
  {
    title: "Skyline Luxury Condominiums",
    desc: "The Skyline Luxury Condominiums redefine urban living with their modern design, spacious layouts, and stunning city views. This project features state-of-the-art amenities and eco-friendly construction practices, making it a premier choice for discerning buyers.",
    src: Project1,
  },
  {
    title: "Green Valley Eco Homes",
    desc: "Nestled in the serene countryside, the Green Valley Eco Homes project focuses on sustainability and community living. Each home is designed with energy efficiency in mind, utilizing renewable resources and materials to minimize environmental impact.",
    src: Project2,
  },
  {
    title: "Tech Hub Office Space",
    desc: "The Tech Hub Office Space project offers innovative workspaces designed for collaboration and creativity. With flexible layouts and modern amenities, this space is ideal for startups and established companies in the tech industry.",
    src: Project3,
  },
];

export const navigationLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about-us" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact Us", href: "#contacts" },
];
