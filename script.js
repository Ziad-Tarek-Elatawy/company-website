// Initialize Lucide Icons
lucide.createIcons();

// Elements
const htmlElement = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const langToggle = document.getElementById('langToggle');
const langText = document.getElementById('langText');

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const menuIcon = document.getElementById('menuIcon');

function closeMobileMenu() {
    if (mobileMenu) {
        mobileMenu.style.display = 'none';
        menuIcon.setAttribute('data-lucide', 'menu');
        lucide.createIcons();
    }
}

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = mobileMenu.style.display === 'block';
        if (isOpen) {
            mobileMenu.style.display = 'none';
            menuIcon.setAttribute('data-lucide', 'menu');
        } else {
            mobileMenu.style.display = 'block';
            menuIcon.setAttribute('data-lucide', 'x');
        }
        lucide.createIcons();
    });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (mobileMenu && mobileMenu.style.display === 'block') {
        if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            closeMobileMenu();
        }
    }
});

// Dictionaries
const translations = {
    ar: {
        nav_home: "الرئيسية",
        nav_services: "خدماتنا",
        nav_process: "آلية العمل",
        nav_portfolio: "أعمالنا",
        nav_contact: "تواصل معنا",
        hero_badge: "End-to-End Engineering Studio",
        hero_title_1: "نحول الأفكار المعقدة إلى",
        hero_title_gradient: "منتجات برمجية متكاملة",
        hero_subtitle: "فريق متكامل من المهندسين والخبراء، جاهزون لتطوير منتجات برمجية قوية، آمنة، وقابلة للتوسع. من الواجهات العصرية إلى البنية التحتية السحابية.",
        btn_start: "ابدأ مشروعك <i data-lucide='arrow-left' class='w-5 h-5 rtl-icon'></i>",
        btn_browse: "تصفح خدماتنا",
        social_proof: "فريق هندسي شامل بكافة التخصصات التقنية، جاهزون لتنفيذ أي مشروع برمجي من الصفر وحتى الإطلاق بأعلى معايير الجودة.",
        services_title: "من الفكرة إلى منتج حقيقي بفريق واحد",
        services_subtitle: "نغطي كل مرحلة في دورة حياة منتجك، من الفكرة والتصميم حتى النشر والتوسع.",
        srv_ai_title: "ذكاء اصطناعي يخدم أعمالك",
        srv_ai_desc: "نبني حلول ذكاء اصطناعي تخفض التكاليف وتضاعف الإنتاجية، من نماذج توليدية ومعالجة لغوية إلى أنظمة تحليل بيانات دقيقة تساعدك على اتخاذ قرارات أفضل.",
        srv_front_title: "تجارب مستخدم تزيد مبيعاتك",
        srv_front_desc: "واجهات وتطبيقات هاتف (iOS/Android) سريعة وجذابة تحول الزوار إلى عملاء، لأن التصميم ليس زينة، بل هو أداة بيع.",
        srv_back_title: "بنية تحتية تحمل نموك",
        srv_back_desc: "نصمم أنظمة خلفية قوية، آمنة، وقابلة للتوسع مع أعمالك. حتى لو تضاعف مستخدميك عشرة أضعاف غداً، نظامك لن يتعثر.",
        srv_cloud_title: "نشر وأتمتة بلا توقف",
        srv_cloud_desc: "نضمن استمرارية أنظمتك 24/7 عبر بيئات سحابية مدارة باحتراف، لرفع سرعة إطلاق منتجك وتقليل التكاليف في آن واحد.",
        srv_ui_title: "تصميم يدفع العميل للضغط",
        srv_ui_desc: "نصمم تجارب مدروسة تجعل كل نقرة وكل شاشة مقصودة، فالتصميم الجيد ليس ترفاً، بل هو نتيجة أعمال قابلة للقياس.",
        srv_qa_title: "جودة وأمان لا تهاون فيهما",
        srv_qa_desc: "نحمي منتجك وبيانات عملائك باختبارات شاملة وحماية متقدمة، لأن خطأً برمجياً واحداً يكفي ليكلفك سمعتك وعملاءك.",
        process_title: "آلية عمل مرنة تناسب حجم مشروعك",
        process_subtitle: "",
        proc_1_title: "دراسة وتصميم الحل الأمثل",
        proc_1_desc: "نحلل متطلباتك بدقة لنختار التقنيات الأنسب لحجم مشروعك وميزانيتك، دون تعقيد مبالغ فيه أو قصور تقني.",
        proc_2_title: "تنفيذ دقيق وسريع",
        proc_2_desc: "نبدأ بالبرمجة والتطوير بخطوات واضحة، مع إبقائك على اطلاع دائم لضمان أن النتيجة النهائية تطابق توقعاتك تماماً.",
        proc_3_title: "التسليم والدعم المستمر",
        proc_3_desc: "نُسلمك مشروعك جاهزاً للعمل، ونبقى بجانبك لتقديم الدعم الفني أو لتوسيع النظام مستقبلاً كلما احتجت لذلك.",
        works_title: "أفكار حوّلناها إلى واقع",
        works_subtitle: "استكشف كيف قمنا بتحويل تحديات عملائنا إلى حلول برمجية ذكية.",
        ph_title: "مساحة عمل فارغة",
        ph_desc: "هنا سيتم إضافة المشاريع الفعلية في المستقبل.",
        cta_title: "مشروعك يستحق فريقاً على مستواه",
        cta_subtitle: "نحن هنا لنحول أي فكرة برمجية إلى واقع ملموس، مهما كان حجمها أو تفاصيلها.",
        btn_consult: "احجز مكالمة مجانية",
        footer_copy: "",
        contact_title: "تواصل معنا",
        contact_name: "الاسم",
        contact_email: "البريد الإلكتروني",
        contact_msg: "الرسالة",
        contact_btn: "إرسال الرسالة",
        contact_email_value: "eng.ziadtarek1@gmail.com",
        contact_loc_value: "القاهرة، مصر",
        btn_whatsapp: "تواصل عبر واتساب",
        btn_telegram: "تواصل عبر تليجرام"
    },
    en: {
        nav_home: "Home",
        nav_services: "Services",
        nav_process: "Process",
        nav_portfolio: "Portfolio",
        nav_contact: "Contact Us",
        hero_badge: "End-to-End Engineering Studio",
        hero_title_1: "Turning complex ideas into",
        hero_title_gradient: "Integrated Software Products",
        hero_subtitle: "A fully integrated team of engineers and experts, ready to build robust, secure, and scalable software products. From modern interfaces to cloud infrastructure.",
        btn_start: "Start Project <i data-lucide='arrow-right' class='w-5 h-5'></i>",
        btn_browse: "Browse Services",
        social_proof: "A fully integrated team across all tech disciplines, ready to build and deliver any software project from scratch to launch.",
        services_title: "One Team. Every Discipline.",
        services_subtitle: "We cover the full product lifecycle, from idea validation and design to development, deployment, and beyond.",
        srv_ai_title: "AI That Works for Your Business",
        srv_ai_desc: "We build AI solutions that cut costs and multiply productivity, from generative models and NLP to data analytics and RAG systems that help you decide smarter.",
        srv_front_title: "Interfaces That Convert",
        srv_front_desc: "Fast, stunning web and mobile apps (iOS/Android) that turn visitors into customers, because great design isn’t just aesthetic, it’s revenue.",
        srv_back_title: "Backend Built to Scale",
        srv_back_desc: "Rock-solid, secure, and infinitely scalable architectures using modern Microservices. Your system won’t break when you grow 10x overnight.",
        srv_cloud_title: "Zero-Downtime Deployment",
        srv_cloud_desc: "Automated cloud pipelines (AWS/Azure) with 24/7 monitoring. Ship faster, reduce costs, and sleep knowing your system is always up.",
        srv_ui_title: "Design That Drives Action",
        srv_ui_desc: "Meticulously crafted user experiences that make every click and every screen intentional. Good design is not a luxury, it’s measurable impact.",
        srv_qa_title: "Quality You Can Ship With Confidence",
        srv_qa_desc: "Comprehensive testing and advanced security hardening to protect your product and your users. One bug in production is enough to cost a reputation.",
        process_title: "A Flexible Process for Any Scale",
        process_subtitle: "",
        proc_1_title: "Tailored Solution Design",
        proc_1_desc: "We analyze your requirements to select the tech stack that perfectly fits your project's scope and budget, avoiding unnecessary complexity.",
        proc_2_title: "Precise & Agile Execution",
        proc_2_desc: "We build your software with clear milestones and constant communication, ensuring the final deliverable matches your exact vision.",
        proc_3_title: "Delivery & Ongoing Support",
        proc_3_desc: "We hand over a fully functional solution and remain available for technical support or future feature expansions as your needs grow.",
        works_title: "Ideas Turned Into Reality",
        works_subtitle: "Explore how we transformed our clients' challenges into smart software solutions.",
        ph_title: "Empty Workspace",
        ph_desc: "Actual projects will be added here in the future.",
        cta_title: "Your Project Deserves a World-Class Team",
        cta_subtitle: "We are here to turn any software idea into reality, no matter the scale or complexity.",
        btn_consult: "Book a Free Call",
        footer_copy: "",
        contact_title: "Contact Us",
        contact_name: "Name",
        contact_email: "Email",
        contact_msg: "Message",
        contact_btn: "Send Message",
        contact_email_value: "eng.ziadtarek1@gmail.com",
        contact_loc_value: "Cairo, Egypt",
        btn_whatsapp: "WhatsApp",
        btn_telegram: "Telegram"
    }
};

// Projects Data (Dummy Data for Structure)
const projectsData = [
    {
        ar: { title: "OmniCRM", description: "لوحة تحكم ذكية لفريق المبيعات تدعم الأتمتة، إدارة مسار المبيعات (Pipeline)، والتكامل مع واتساب." },
        en: { title: "OmniCRM", description: "A smart CRM dashboard for sales teams supporting automation, pipeline management, and WhatsApp integration." },
        tech: ["Vue.js", "Laravel", "Twilio", "MySQL"],
        image: "Projects/OmniCRM/omnicrm.png",
        link: "#"
    },
    {
        ar: { title: "CoreERP", description: "نظام إداري شامل لمتوسطي وكبار الشركات لربط الحسابات، الموارد البشرية، والمستودعات في شاشة واحدة." },
        en: { title: "CoreERP", description: "A comprehensive ERP system for mid-to-large enterprises connecting finance, HR, and inventory in one dashboard." },
        tech: ["Angular", "Spring Boot", "MySQL", "Docker"],
        image: "Projects/CoreERP/coreerp.png?v=5",
        link: "#"
    },
    {
        ar: { title: "EduNova", description: "منصة تعليم إلكتروني متكاملة (LMS) تدعم الفصول الافتراضية، تتبع مسار الطلاب، ونظام اختبارات ذكي." },
        en: { title: "EduNova", description: "A comprehensive e-learning platform (LMS) supporting virtual classrooms, student progress tracking, and smart examination systems." },
        tech: ["Next.js", "Node.js", "WebRTC", "PostgreSQL"],
        image: "Projects/EduNova/edunova.png",
        link: "#"
    },
    {
        ar: { title: "SmartResolve AI", description: "منصة تعمل بالذكاء الاصطناعي تستخدم المعالجة المتقدمة للغات الطبيعية (NLP) لتصنيف الشكاوى، توجيهها للقسم المختص تلقائياً، وتتبع حالة الشكوى بدقة." },
        en: { title: "SmartResolve AI", description: "An AI-powered platform utilizing Advanced NLP to automatically classify complaints, route them to the specialized department, and track their status in real-time." },
        tech: ["Python", "NLP", "LLMs", "Sentiment Analysis"],
        image: "Projects/SmartResolve AI/SmartResolve AI screenshot.jpg",
        link: "#"
    },
    {
        ar: { title: "FleetX", description: "تطبيق لوجستي لتتبع أسطول التوصيل في الوقت الفعلي مع خوارزميات ذكية لتحديد أفضل مسار." },
        en: { title: "FleetX", description: "A logistics app for real-time fleet tracking with smart algorithms for route optimization." },
        tech: ["Flutter", "Node.js", "Google Maps API", "Socket.io"],
        image: "Projects/FleetX/fleetx.png",
        link: "#"
    },
    {
        ar: { title: "HealthSync", description: "نظام سحابي لإدارة العيادات، حجز المواعيد، وإدارة السجلات الطبية الإلكترونية للمرضى بطريقة آمنة." },
        en: { title: "HealthSync", description: "A cloud SaaS for clinic management, appointment booking, and secure electronic health records (EHR)." },
        tech: ["React", "Express", "MongoDB", "AWS"],
        image: "Projects/HealthSync/healthsync.png",
        link: "#"
    },
    {
        ar: { title: "ShopVerse", description: "منصة تجارة إلكترونية مبنية من الصفر تتحمل ملايين الزيارات مع نظام توصيات يعتمد على الذكاء الاصطناعي." },
        en: { title: "ShopVerse", description: "A custom-built e-commerce platform scalable for millions of visits with AI-driven product recommendations." },
        tech: ["Next.js", "NestJS", "PostgreSQL", "Redis"],
        image: "Projects/ShopVerse/shopverse.png",
        link: "#"
    },


    {
        ar: { title: "CloudOps", description: "لوحة تحكم سحابية لمراقبة البنية التحتية (Microservices) وإدارة الـ Deployments على خوادم AWS." },
        en: { title: "CloudOps", description: "A cloud dashboard for monitoring infrastructure (Microservices) and managing deployments on AWS." },
        tech: ["React", "Go", "Kubernetes", "AWS"],
        image: "Projects/CloudOps/cloudops.png?v=5",
        link: "#"
    },
    {
        ar: { title: "EventHub", description: "منصة حجز تذاكر للفعاليات الضخمة تدعم اختيار المقاعد بشكل تفاعلي والدفع الآمن." },
        en: { title: "EventHub", description: "A ticketing platform for large events supporting interactive seat selection and secure payments." },
        tech: ["React Native", "Node.js", "Stripe", "PostgreSQL"],
        image: "Projects/EventHub/eventhub.png",
        link: "#"
    },
    {
        ar: { title: "SmartHome", description: "تطبيق هاتف ذكي للتحكم في الأجهزة المنزلية المتصلة بالإنترنت ومراقبة استهلاك الطاقة في الوقت الفعلي." },
        en: { title: "SmartHome", description: "A mobile app for controlling IoT smart home devices and monitoring real-time energy consumption." },
        tech: ["Swift", "Kotlin", "MQTT", "AWS IoT"],
        image: "Projects/SmartHome/smarthome.png",
        link: "#"
    },
    {
        ar: { title: "QuickServe", description: "تطبيق متعدد المتاجر (Multi-vendor) لطلب وتوصيل الطعام بواجهة مستخدم عصرية وسريعة جداً." },
        en: { title: "QuickServe", description: "A multi-vendor food delivery app with a modern, ultra-fast user interface." },
        tech: ["Flutter", "Firebase", "Node.js", "MongoDB"],
        image: "Projects/QuickServe/quickserve.png",
        link: "#"
    },

];

// Carousel Variables
let currentSlideIndex = 0;
let autoPlayInterval;

function renderProjectsCarousel(lang) {
    const track = document.getElementById('projects-track');
    const dotsContainer = document.querySelector('.carousel-dots');
    
    if (!track) return;
    
    track.innerHTML = '';
    if(dotsContainer) dotsContainer.innerHTML = '';

    projectsData.forEach((project, index) => {
        const langData = project[lang];
        const techSpans = project.tech.map(t => `<span>${t}</span>`).join('');
        
        const slideHTML = `
            <div class="carousel-slide">
                <div class="slide-visual">
                    <img src="${project.image}" alt="${langData.title}" class="slide-img">
                </div>
                <div class="slide-info">
                    <h3 class="slide-title">${langData.title}</h3>
                    <p class="text-sm opacity-80 max-w-md mx-auto">${langData.description}</p>
                    <div class="project-tech mt-3">
                        ${techSpans}
                    </div>
                </div>
            </div>
        `;
        track.insertAdjacentHTML('beforeend', slideHTML);
        
        if (dotsContainer) {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        }
    });

    goToSlide(currentSlideIndex);
    setupModal();
}

function updateDots() {
    const dotsContainer = document.querySelector('.carousel-dots');
    if (!dotsContainer) return;
    const dots = dotsContainer.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlideIndex);
    });
}

function goToSlide(index) {
    const allSlides = document.querySelectorAll('.carousel-slide');
    const numSlides = allSlides.length;
    
    if (numSlides === 0) return;
    if (index < 0) index = numSlides - 1;
    if (index >= numSlides) index = 0;
    
    currentSlideIndex = index;

    allSlides.forEach(slide => {
        slide.classList.remove('active', 'prev', 'next');
    });

    const prevIndex = (currentSlideIndex - 1 + numSlides) % numSlides;
    const nextIndex = (currentSlideIndex + 1) % numSlides;

    if (allSlides[currentSlideIndex]) allSlides[currentSlideIndex].classList.add('active');

    if (numSlides > 1) {
        if (allSlides[prevIndex]) allSlides[prevIndex].classList.add('prev');
        if (numSlides > 2 && allSlides[nextIndex]) allSlides[nextIndex].classList.add('next');
    }

    updateDots();
}

function startAutoPlay() {
    clearInterval(autoPlayInterval);
    autoPlayInterval = setInterval(() => goToSlide(currentSlideIndex + 1), 6000);
}

function setupModal() {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    const projectImages = document.querySelectorAll(".slide-img");
    const closeModal = document.querySelector(".close-modal");
    
    if (!modal) return;

    // Reset old event listeners to avoid duplicates if re-rendered
    const newModalImg = modalImg.cloneNode(true);
    if(modalImg.parentNode) modalImg.parentNode.replaceChild(newModalImg, modalImg);

    projectImages.forEach(img => {
        img.addEventListener("click", () => {
            modal.classList.add("show");
            newModalImg.src = img.src;
        });
    });

    if (closeModal) {
        closeModal.addEventListener("click", () => {
            modal.classList.remove("show");
        });
    }

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.classList.remove("show");
        }
    });
}

// Event Listeners for Carousel
document.addEventListener("DOMContentLoaded", () => {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (nextBtn) nextBtn.addEventListener('click', () => goToSlide(currentSlideIndex + 1));
    if (prevBtn) prevBtn.addEventListener('click', () => goToSlide(currentSlideIndex - 1));

    startAutoPlay();
    
    const carousel = document.querySelector('.projects-carousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
        carousel.addEventListener('mouseleave', () => startAutoPlay());
    }

    window.addEventListener('resize', () => goToSlide(currentSlideIndex));
});

// Theme Logic
let isDark = false;
themeToggle.addEventListener('click', () => {
    isDark = !isDark;
    if (isDark) {
        htmlElement.classList.add('dark');
        themeIcon.setAttribute('data-lucide', 'sun');
    } else {
        htmlElement.classList.remove('dark');
        themeIcon.setAttribute('data-lucide', 'moon');
    }
    lucide.createIcons();
});

// Language Logic
let currentLang = 'ar';

function applyTranslations(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            el.setAttribute('placeholder', translations[lang][key]);
        }
    });

    lucide.createIcons();
    renderProjectsCarousel(lang);
}

// Apply translations on page load
applyTranslations(currentLang);

langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    langText.textContent = currentLang === 'ar' ? 'EN' : 'عربي';
    htmlElement.setAttribute('lang', currentLang);
    htmlElement.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
    applyTranslations(currentLang);
});

// Scrollspy Logic
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px', // trigger when section enters top part of screen
    threshold: 0
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach(link => {
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('text-neon-blue');
                    link.classList.remove('text-slate-500');
                } else {
                    link.classList.remove('text-neon-blue');
                    link.classList.add('text-slate-500');
                }
            });
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});
