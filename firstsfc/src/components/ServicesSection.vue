<template>
   <!-- Service Section -->
      <div class="fade-in">
         <div id="services">
            <section class="services">
               <h2>Services</h2>
               <div class="service-grid">
                  <div class="service-item" v-for="(service, index) in services" :key="`service-${index}`">
                     <div class="service-content">
                        <img v-if="service.icon && service.icon.trim() !== ''"
                          :src="service.icon"
                          :alt="service.title || 'Service Icon'"
                          class="service-icon">
                        <h3 class="service-title">{{ service.title }}</h3>
                     </div>
                     <div class="service-hover-content">
                        <ul>
                           <li v-for="(detail, i) in service.details" :key="i">{{ detail }}</li>
                        </ul>
                     </div>
                  </div>
               </div>
            </section>
         </div>
      </div>
</template>

<script>
export default {
      data() {
        return {
            services: [{
                    title: "GRAPHIC DESIGN",
                    icon: "./assets/Graphic Design.",
                    details: [
                        "Social Media Posts",
                        "Templates",
                        "Presentation Slides",
                        "Digital Products",
                        "Logo Design",
                        "Branding Materials",
                    ],
                    hoverIcon: "./assets/Graphic Design Hover.png",
                },
                {
                    title: "VIDEO EDITING",
                    icon: "./assets/Video Editing.png",
                    details: [
                        "Instagram Reels",
                        "TikTok Videos",
                        "UGC",
                        "Ads",
                        "YouTube Vlogs",
                        "Corporate Videos",
                    ],
                    hoverIcon: "./assets/Video Editing Hover.png",
                },
                {
                    title: "ADMINISTRATIVE",
                    icon: "./assets/Administrative.png",
                    details: [
                        "Data Entry",
                        "Email Management",
                        "Calendar Management",
                        "File Organization",
                        "Research and Documentation",
                    ],
                    hoverIcon: "./assets/Administrative Hover.png",
                },
                {
                    title: "UX/UI DESIGN",
                    icon: "./assets/UX UI Design.png",
                    details: [
                        "Wireframing",
                        "Prototyping",
                        "User Research",
                        "Usability Testing",
                        "Mobile and Web App Interfaces",
                        "Design Systems",
                    ],
                    hoverIcon: "./assets/UX UI Design Hover.png",
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
                    icon: "./assets/Programming.png",
                    details: [
                        "HTML/CSS",
                        "JavaScript",
                        "Python",
                        "Website Development",
                        "Basic Database Management",
                    ],
                    hoverIcon: "./assets/Programming Hover.png",
                },
                {
                    title: "CONTENT CREATION",
                    icon: "./assets/Content Creation.png",
                    details: [
                        "Social Media Captions",
                        "Blog Writing",
                        "Product Descriptions",
                        "Visual Content Planning",
                    ],
                    hoverIcon: "./assets/Content Creation Hover.png",
                },
                {
                    title: "TUTORIAL",
                    icon: "./assets/Tutorial.png",
                    details: [
                        "Elementary and High School Math",
                        "Academic Papers",
                    ],
                    hoverIcon: "./assets/Tutorial Hover.png",
                },
                {
                    title: "SOCIAL MEDIA MANAGEMENT",
                    icon: "./assets/Social Media Management.png",
                    details: [
                        "Content Scheduling",
                        "Analytics Tracking",
                        "Engagement Strategies",
                        "Community Management",
                    ],
                    hoverIcon: "./assets/Social Media Management Hover.png",
                },
            ],
        };
    },
};
</script>

<style scoped>
</style>
