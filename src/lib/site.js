export const site = {
  name: "Affordable Insurance Group",
  shortName: "Affordable",
  tagline: "We do the shopping for you — saving you time and money.",
  founded: 1985,
  phone: "(803) 430-9002",
  phoneHref: "tel:+18034309002",
  fax: "(803) 798-5100",
  email: "info@affordableinsgrp.com",
  address: {
    street: "6168 Saint Andrews Rd",
    city: "Columbia",
    state: "SC",
    zip: "29212",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=6168+Saint+Andrews+Rd+Columbia+SC+29212",
  mapsEmbed:
    "https://www.google.com/maps?q=6168+Saint+Andrews+Rd,+Columbia,+SC+29212&output=embed",
  hours: [
    { day: "Monday", time: "9:00 AM – 5:30 PM" },
    { day: "Tuesday", time: "9:00 AM – 5:30 PM" },
    { day: "Wednesday", time: "9:00 AM – 5:30 PM" },
    { day: "Thursday", time: "9:00 AM – 5:30 PM" },
    { day: "Friday", time: "9:00 AM – 5:30 PM" },
    { day: "Saturday", time: "Closed" },
    { day: "Sunday", time: "Closed" },
  ],
  serviceAreas: ["Columbia", "Irmo", "Chapin", "Lexington", "West Columbia", "St. Andrews"],
  social: {
    yelp: "http://www.yelp.com/biz/affordable-insurance-group-columbia/",
    twitter: "https://twitter.com/affordableinsgp/",
    chamber:
      "https://greaterirmochamber.chambermaster.com/list/member/affordable-insurance-group-1101",
  },
  // Online quote tools that live outside this site and keep working without a backend.
  quoteTools: {
    personal: "https://quotes.xilo.io/affordable-insurance-group/wIX87i",
    contractors: "https://quickquote.ibqsystems.com/affordable/Contractors/#Location",
  },
};

export const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}`;

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Insurance", href: "/insurance" },
  { label: "Service Center", href: "/service-center" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

export const carriers = [
  { name: "Progressive", src: "/images/carriers/progressive.jpg" },
  { name: "Travelers", src: "/images/carriers/travelers.jpg" },
  { name: "The Hartford", src: "/images/carriers/hartford.jpg" },
  { name: "Zurich", src: "/images/carriers/zurich.jpg" },
  { name: "National General", src: "/images/carriers/national_general.jpg" },
  { name: "American Strategic Insurance", src: "/images/carriers/asi.jpg" },
  { name: "Stillwater Insurance", src: "/images/carriers/stillwater_insurance.jpg" },
  { name: "Homeowners of America", src: "/images/carriers/hoaic.jpg" },
  { name: "Main Street America", src: "/images/carriers/the_main_street.jpg" },
];

export const team = [
  { name: "Julius G. Jones III, CLU", role: "Agency Manager", initials: "JJ" },
  { name: "J. Gamble Jones IV", role: "Auto Insurance Agent", initials: "GJ" },
  { name: "Hannah Hernandez", role: "Homeowners & Commercial Agent, CSR", initials: "HH" },
  { name: "Ashley Saville", role: "Customer Service Manager", initials: "AS" },
  { name: "Cheyenne Frank", role: "Customer Service Representative", initials: "CF" },
];

export const reviews = [
  {
    name: "C. Foster",
    text: "I have been with this company for years and the customer service is great! All of the agents have been able to assist me with auto insurance. I appreciate Jamie for taking the time to research and help find the lowest and best quote possible.",
  },
  {
    name: "C. Rao",
    text: "The most helpful staff I've ever experienced for car insurance. Heather spent an incredible amount of time helping me get the best possible insurance and quotes. She went above and beyond what an agent is required to do.",
  },
  {
    name: "C. Riffle",
    text: "Been with this agency for 11+ years. Great customer service and very friendly! Looking forward to another 11 years!",
  },
  {
    name: "R. Trujillo",
    text: "I have been with Affordable Insurance Group for quite a while now. They never cease to amaze me. Always friendly, always knowledgeable, and all-around nice people.",
  },
  {
    name: "T. Humes",
    text: "I love this company! I left and came back. They were very friendly, always honest, and make sure you leave satisfied. Thank you for all of your help!",
  },
  {
    name: "A. Brown",
    text: "Everyone was very personable, respectful and professional. I appreciated the suggestions and the advice given by the staff. Staff exceeded my expectations!",
  },
  {
    name: "M. Miller",
    text: "Super friendly. They've been able to accommodate things and help me with things under my policy, and have overall been great. Jamie is the best!",
  },
  {
    name: "B. White",
    text: "They were very knowledgeable and helpful! We were in and out. And the process was very, very simple. Glad I chose them!",
  },
  {
    name: "J. Harris",
    text: "Heather did a great job getting back to me in a timely manner and even found me a lower rate.",
  },
  {
    name: "P. Carter",
    text: "Great customer service. Rates were lower than anyone that had quoted me.",
  },
  {
    name: "Q. Loyal",
    text: "Customer service was perfect. I am satisfied with the price and appreciate the patience and compassion I received.",
  },
  {
    name: "T. Perry",
    text: "Very satisfied with the service and the people here in this office. They were very nice and great to work with!",
  },
  { name: "Charlie", location: "Ballentine, SC", text: "Best rates and great service from Affordable Insurance Group!!!" },
  { name: "A. Crumpton", text: "Jamie was great today, really helpful. Affordable Insurance is a great place." },
  { name: "R. Sowell", text: "Great fast service." },
];

export const serviceCenter = [
  {
    title: "Make a Payment",
    text: "Pay your Progressive policy online in a few clicks.",
    href: "https://onlineservice4.progressive.com/SelfService.Web/SelfService.aspx?Page=Non-LoggedIn.VerifyPolicy.ProvidePolicyInformation&QueryStringSetKey=SessionGateway&OfferingID=SelfService&SessionStart=TRUE&EZDestination=EZPAY",
    icon: "card",
  },
  {
    title: "Request an Auto ID Card",
    text: "Need proof of insurance? Request a new ID card any time.",
    href: "https://affordableinsgroup.com/service-center/request-auto-id-card/",
    icon: "idcard",
  },
  {
    title: "Request a Certificate",
    text: "Get a certificate of insurance for a client, landlord or job site.",
    href: "https://affordableinsgroup.com/service-center/request-certificate/",
    icon: "file",
  },
  {
    title: "Request a Policy Review",
    text: "Make sure your coverage still fits your life — and your budget.",
    href: "https://affordableinsgroup.com/service-center/policy-review/",
    icon: "search",
  },
  {
    title: "21-Point Insurance Checklist",
    text: "A free home protection review checklist (PDF).",
    href: "https://www.affordableinsgrp.com/img/~www.affordableinsgrp.com/21%20point%20home%20protection%20review.pdf",
    icon: "list",
  },
  {
    title: "Refer a Friend",
    text: "Know someone overpaying for insurance? Send them our way.",
    href: "https://affordableinsgroup.com/contact/refer-us/",
    icon: "users",
  },
  {
    title: "Home & Auto Newsletter",
    text: "Tips and updates for protecting your family and property.",
    href: "https://affordableinsgroup.com/personal-lines-newsletter/",
    icon: "mail",
  },
  {
    title: "Commercial Newsletter",
    text: "News and risk-management ideas for business owners.",
    href: "https://affordableinsgroup.com/commercial-lines-newsletter/",
    icon: "briefcase",
  },
];
