import { createApp } from 'vue'
import App from './App.vue'
import FoodItem from './components/FoodItem.vue'
import FoodItem2 from './components/FoodItem2.vue'
import PersonalProfile from './components/PersonalProfile.vue'

const app = createApp(App)
app.component('food-item', FoodItem)
app.component('food-item2', FoodItem2)
app.component('personal-profile', PersonalProfile)
app.mount('#app')

// Vue app (for services)
const servicesApp = Vue.createApp({
    data() {
        return {
            services: [{
                    title: "GRAPHIC DESIGN",
                    icon: "assets/Graphic Design.png",
                    details: [
                        "Social Media Posts",
                        "Templates",
                        "Presentation Slides",
                        "Digital Products",
                        "Logo Design",
                        "Branding Materials",
                    ],
                    hoverIcon: "assets/Graphic Design Hover.png",
                },
                {
                    title: "VIDEO EDITING",
                    icon: "assets/Video Editing.png",
                    details: [
                        "Instagram Reels",
                        "TikTok Videos",
                        "UGC",
                        "Ads",
                        "YouTube Vlogs",
                        "Corporate Videos",
                    ],
                    hoverIcon: "assets/Video Editing Hover.png",
                },
                {
                    title: "ADMINISTRATIVE",
                    icon: "assets/Administrative.png",
                    details: [
                        "Data Entry",
                        "Email Management",
                        "Calendar Management",
                        "File Organization",
                        "Research and Documentation",
                    ],
                    hoverIcon: "assets/Administrative Hover.png",
                },
                {
                    title: "UX/UI DESIGN",
                    icon: "assets/UX UI Design.png",
                    details: [
                        "Wireframing",
                        "Prototyping",
                        "User Research",
                        "Usability Testing",
                        "Mobile and Web App Interfaces",
                        "Design Systems",
                    ],
                    hoverIcon: "assets/UX UI Design Hover.png",
                },
                {
                    title: "Curious? Hover to reveal!",
                    icon: "", 
                    details: [
                        "Check my other services!",
                    ],
                    hoverIcon: "", 
                },
                {
                    title: "PROGRAMMING",
                    icon: "assets/Programming.png",
                    details: [
                        "HTML/CSS",
                        "JavaScript",
                        "Python",
                        "Website Development",
                        "Basic Database Management",
                    ],
                    hoverIcon: "assets/Programming Hover.png",
                },
                {
                    title: "CONTENT CREATION",
                    icon: "assets/Content Creation.png",
                    details: [
                        "Social Media Captions",
                        "Blog Writing",
                        "Product Descriptions",
                        "Visual Content Planning",
                    ],
                    hoverIcon: "assets/Content Creation Hover.png",
                },
                {
                    title: "TUTORIAL",
                    icon: "assets/Tutorial.png",
                    details: [
                        "Elementary and High School Math",
                        "Academic Papers",
                    ],
                    hoverIcon: "assets/Tutorial Hover.png",
                },
                {
                    title: "SOCIAL MEDIA MANAGEMENT",
                    icon: "assets/Social Media Management.png",
                    details: [
                        "Content Scheduling",
                        "Analytics Tracking",
                        "Engagement Strategies",
                        "Community Management",
                    ],
                    hoverIcon: "assets/Social Media Management Hover.png",
                },
            ],
        };
    },
});

servicesApp.mount("#services");

// Lightbox functionality
document.addEventListener('DOMContentLoaded', () => {
   const portfolioItems = document.querySelectorAll('.portfolio-item img');
   const lightbox = document.getElementById('lightbox');
   const lightboxImg = document.getElementById('lightbox-img');
   const lightboxDescription = document.getElementById('lightbox-description');
   const lightboxClose = document.querySelector('.lightbox-close');

   // Open lightbox
   portfolioItems.forEach(item => {
      item.addEventListener('click', () => {
         lightbox.style.display = 'flex';
         lightboxImg.src = item.src;
         lightboxDescription.innerHTML = item.dataset.description;
      });
   });

   // Close lightbox
   lightboxClose.addEventListener('click', () => {
      lightbox.style.display = 'none';
   });

   // Close lightbox on outside click
   lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
         lightbox.style.display = 'none';
      }
   });
});

// Vue app (for contact form)
const contactApp = Vue.createApp({
    data() {
        return {
            name: '',
            message: '',
            submitted: false
        };
    },
    methods: {
        submitForm() {
            this.submitted = true;
        },
        resetForm() {
            this.name = '';
            this.message = '';
            this.submitted = false;
        }
    }
});

contactApp.mount('#app');

// HTML DOM (for scroll smooth behavior and fade-in elements)
document.querySelectorAll('.nav-menu a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const fadeInElements = document.querySelectorAll('.fade-in');

    const handleScroll = () => {
        fadeInElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
            if (isVisible) {
                el.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
});