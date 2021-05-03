const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// header selectors
const navItem1 = document.querySelector('nav a:nth-of-type(1)');
const navItem2 = document.querySelector('nav a:nth-of-type(2)');
const navItem3 = document.querySelector('nav a:nth-of-type(3)');
const navItem4 = document.querySelector('nav a:nth-of-type(4)');
const navItem5 = document.querySelector('nav a:nth-of-type(5)');
const navItem6 = document.querySelector('nav a:nth-of-type(6)');
const headerImg = document.querySelector('#logo-img');

// cta selectors
const ctaHeader = document.querySelector('.cta h1');
const ctaButton = document.querySelector('.cta button');
const ctaImg = document.querySelector('#cta-img');

// main content selectors
const featureH4 = document.querySelector('.top-content .text-content:nth-of-type(1) h4');
const featureContent = document.querySelector('.top-content .text-content:nth-of-type(1) p');
const aboutH4 = document.querySelector('.top-content .text-content:nth-of-type(2) h4');
const aboutContent = document.querySelector('.top-content .text-content:nth-of-type(2) p');
const middleImg = document.querySelector('#middle-img');
const servicesH4 = document.querySelector('.bottom-content .text-content:nth-of-type(1) h4');
const servicesContent = document.querySelector('.bottom-content .text-content:nth-of-type(1) p');
const productH4 = document.querySelector('.bottom-content .text-content:nth-of-type(2) h4');
const productContent = document.querySelector('.bottom-content .text-content:nth-of-type(2) p');
const visionH4 = document.querySelector('.bottom-content .text-content:nth-of-type(3) h4');
const visionContent = document.querySelector('.bottom-content .text-content:nth-of-type(3) p');

// contact selectors
const contactH4 = document.querySelector('.contact h4');
const contactAddress = document.querySelector('.contact p:nth-of-type(1)');
const contactPhone = document.querySelector('.contact p:nth-of-type(2)');
const contactEmail = document.querySelector('.contact p:nth-of-type(3)');

// footer selectors
const copyright = document.querySelector('footer p');

// Update HTML
// header
navItem1.textContent = siteContent.nav["nav-item-1"];
navItem2.textContent = siteContent.nav["nav-item-2"];
navItem3.textContent = siteContent.nav["nav-item-3"];
navItem4.textContent = siteContent.nav["nav-item-4"];
navItem5.textContent = siteContent.nav["nav-item-5"];
navItem6.textContent = siteContent.nav["nav-item-6"];

// cta
ctaHeader.textContent = siteContent.cta.h1;
ctaButton.textContent = siteContent.cta.button;
ctaImg.src = siteContent.cta["img-src"];

// main
featureH4.textContent = siteContent["main-content"]["features-h4"];
featureContent.textContent = siteContent["main-content"]["features-content"];
aboutH4.textContent = siteContent["main-content"]["about-h4"];
aboutContent.textContent = siteContent["main-content"]["about-content"];
middleImg.src = siteContent["main-content"]["middle-img-src"];
servicesH4.textContent = siteContent["main-content"]["services-h4"];
servicesContent.textContent = siteContent["main-content"]["services-content"];
productH4.textContent = siteContent["main-content"]["product-h4"];
productContent.textContent = siteContent["main-content"]["product-content"];
visionH4.textContent = siteContent["main-content"]["vision-h4"];
visionContent.textContent = siteContent["main-content"]["vision-content"];

// contact
contactH4.textContent = siteContent.contact["contact-h4"];
contactAddress.textContent = siteContent.contact.address;
contactPhone.textContent = siteContent.contact.phone;
contactEmail.textContent = siteContent.contact.email;

//footer
copyright.textContent = siteContent.footer.copyright;