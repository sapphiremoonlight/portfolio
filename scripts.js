const projects = [
    {
        title: "Pulp Fiction & Co. 🍊📚",
        description: "It's an ongoing cozy and citrus-hued book nook. It serves up reviews, monthly reading picks, and feel-good literary vibes.",
        category: "web",
        type: "leisure",
        tags: ["javascript", "html", "css", "mail-chimp", "reading"],
        images: ["assets/pulp-fiction.mp4"]
    },
    {
        title: "Frostflix ❅❆❆",
        description: "A cozy Christmas web app that recommends movies based on your mood and preferences. Includes favorites, calendar log, and light/dark frosty themes.",
        category: "web",
        type: "leisure",
        tags: ["javascript", "html", "css", "tmdb-api", "responsive"],
        images: ["assets/frostflix1.png", "assets/frostflix2.png", "assets/frostflix3.png", "assets/frostflix4.png", "assets/frostflix5.png", "assets/frostflix6.png"]
    },
    {
        title: "Candy Cane Mail 💌",
        description: "A Christmas-themed mini mailbox site with private messages, Bookmas page for book recommendations, festive UI, and snow trail animation.",
        category: "web",
        type: "leisure",
        tags: ["html", "css", "javascript", "responsive", "holiday-theme"],
        images: ["assets/candy-cane-1.jpeg", "assets/candy-cane-2.jpeg", "assets/candy-cane-3.jpeg"]
    },
    {
        title: "Saturn Rising 🪐",
        description: "This is my mental health web app where I can track my moods on the calendar and get a monthly wrapped. There's little games to keep me distracted when I get overwhelmed. I can log entries on my behaviour and journal my emotions and experiences.",
        category: "web",
        type: "leisure",
        tags: ["javascript", "html", "css", "canvas", "game", "mobile-friendly"],
        images: ["assets/saturn/calendar.jpeg", "assets/saturn/saturn-wrapped.jpeg", "assets/saturn/journal.jpeg", "assets/saturn/breathe.jpeg", "assets/saturn/behaviour-stats.jpeg", "assets/saturn/log-observation.jpeg", "assets/saturn/pattern-scanner.jpeg", "assets/saturn/lab-messages.jpeg", "assets/saturn/game-lobby.jpeg", "assets/saturn/pomodoro.jpeg", "assets/saturn/puzzle.jpeg", "assets/saturn/dungeon.jpeg", "assets/saturn/dungeon-game.jpeg"]
    },
    {
        title: "Cielo Cosmico",
        description: "A productivity & learning website for Spanish with celestial aesthetics. There's an interactive and gamified experience.",
        category: "web",
        type: "leisure",
        tags: ["javascript", "html", "css", "linguistics", "learning web app", "mobile-friendly"],
        images: ["assets/cielo.mp4"]
    },
    {
        title: "Tinsel & Tiaras 🎄",
        description: "This web app was created to celebrate the 2025 festive season. It's a cozy and interactive holiday-themed website featuring a virtual Christmas tree gallery, a magical snowglobe experience, and personalized theme ideas for all ages.",
        category: "web",
        type: "leisure",
        tags: ["javascript", "html", "css", "christmas", "mobile-friendly"],
        images: ["assets/tinsel/home.png", "assets/tinsel/categories.png", "assets/tinsel/oscars.mp4", "assets/tinsel/gallery.mp4", "assets/tinsel/mail.mp4"]
    },
    {
        title: "BookVerse",
        description: "This is a book website I did for my university Web Development module in 2024. It's meant for book enthusiasts and offers an environment for book lovers to explore, interact, and participate.",
        category: "web",
        type: "professional",
        tags: ["javascript", "html", "css", "books", "reading", "mobile-friendly"],
        images: ["assets/book-website.mp4"]
    },
    {
        title: "PastTimes",
        description: "In 2024, this was for a pair/duo assignment where we had to create a PHP e-commerce  website where users and consumers could register and log in. They could also purchase (user) thrifted/second-hand clothes OR sell (admin) their own for a profit.",
        category: "web",
        type: "professional",
        tags: ["javascript", "html", "css", "php", "thrift", "e-commerce", "shopping"],
        images: ["assets/pasttimes.mp4"]
    },
    {
        title: "Literary Love Affar",
        description: "This is an unfinished (ongoing) blog website where I'm going to rate and review all the books I enjoy.",
        category: "web",
        type: "leisure",
        tags: ["javascript", "html", "css", "reading", "books", "blog"],
        images: ["assets/literary/home.png", "assets/literary/bingo.png", "assets/literary/tray.png"]
    },
    {
        title: "Themed Wordle (Ongoing + not final name)",
        description: "This is an unfinished (ongoing) previously hallowe'en wordle game I just made for fun, because I was bored. I'm adding more themes.",
        category: "web",
        type: "leisure",
        tags: ["javascript", "html", "css", "game"],
        images: ["assets/themed-wordle.png", "assets/hint.png", "assets/green-mode.png", "assets/orange-mode.png"]
    },
    {
        title: "Recipe Application",
        description: "Manage recipes with a user-friendly interface. Add new recipes with ingredients, view existing recipes, and display recipe details for easy access.",
        category: "app",
        type: "professional",
        tags: ["C#", "WPF"],
        images: ["assets/recipe-app.png"]
    },
    {
        title: "Kanban Task",
        description: "A Java application for task management. Create tasks with details, update statuses ('To Do', 'Doing', 'Done'), generate reports, and search tasks.",
        category: "app",
        type: "professional",
        tags: ["Java"],
        images: ["assets/kanban-1.png", "assets/kanban-2.png", "assets/kanban-3.png"]
    },
    {
        title: "Calculator Application",
        description: "A basic Android calculator built with Kotlin. Supports addition, subtraction, multiplication, division, clear button, error handling, and shows ongoing computations in a TextView.",
        category: "app",
        type: "professional",
        tags: ["Kotlin", "Android Studio"],
        images: ["assets/calculator.png"]
    },
    {
        title: "Contract Monthly Claim System",
        description: "Web app for managing employee monthly claims. Submit claims, validate by manager/coordinator, generate reports, and use a dashboard to manage claim statuses.",
        category: "app",
        type: "professional",
        tags: ["ASP.NET MVC", "C#", "JSON", "JavaScript", "HTML5", "CSS3"],
        images: ["assets/cmcs.png", "assets/lecturer-dashboard.png", "assets/claim-list.png", "assets/project-manager-dashboard.png", "assets/academic-coordinator-dashboard.png", "assets/hr-dashboard.png"]
    },
    {
        title: "MoneyTrees Financial App",
        description: "A budget app for personal finances. It was a group assignment. Features dynamic budgeting, real-time insights, expense tracking, gamified experiences with achievements/badges, and a customizable interface.",
        category: "app",
        type: "professional",
        tags: ["Android", "Kotlin", "Application"],
        images: ["assets/moneytrees.png", "assets/moneytrees.mp4"],
        apk: "assets/moneytrees.apk"
    },
    {
        title: "Movie App",
        description: "HTML mockup of a Kotlin film and series app (group work). The prototype showcases layout and flow but is non-functional.",
        category: "uiux",
        type: "professional",
        tags: ["HTML5", "CSS3"],
        images: ["assets/movie-app1.png", "assets/movie-app2.png"]
    },
    {
        title: "E-Commerce Thrift Store App",
        description: "Figma prototype of a thrift store shopping experience. Users can browse items, manage the cart, filter by brand or store, and complete purchases.",
        category: "uiux",
        type: "professional",
        tags: ["Visily"],
        images: ["uiux/thrift-store.png"]
    },
    {
        title: "Coffee App Wireframe",
        description: "Adobe XD wireframe for a coffee ordering app. Users can browse options, customize orders, and checkout easily.",
        category: "uiux",
        type: "professional",
        tags: ["Figma"],
        images: ["assets/coffee-wireframe.png"]
    },
    {
        title: "Tree Saving Non-Profit Software Solution",
        description: "High-fidelity Adobe XD prototype for a forest preservation platform. Features donation management, volunteer coordination, and tree-planting tracking.",
        category: "uiux",
        type: "professional",
        tags: ["Adobe XD"],
        images: [
            "assets/tree-activity/tree-1.jpg",
            "assets/tree-activity/tree-2.png",
            "assets/tree-activity/tree-3.png",
            "assets/tree-activity/tree-4.png",
            "assets/tree-activity/tree-5.png",
            "assets/tree-activity/tree-6.png",
            "assets/tree-activity/tree-7.jpg",
            "assets/tree-activity/tree-8.png",
            "assets/tree-activity/tree-9.png",
            "assets/tree-activity/tree-10.png",
            "assets/tree-activity/tree-11.png",
            "assets/tree-activity/tree-12.png",
            "assets/tree-activity/tree-13.png",
            "assets/tree-activity/tree-14.jpg",
            "assets/tree-activity/tree-15.png"
        ]
    },
    {
        title: "Airport CRM Service Use Case + System",
        description: "Canva mockup for an airport CRM focused on lost baggage. Designed intuitive user flow for passengers and customer service agents.",
        category: "uiux",
        type: "professional",
        tags: ["Canva"],
        images: ["assets/airport-CRM-service.mp4"]
    },
    {
        title: "Logo & Banner Designs",
        description: "A collection of logo and banner concepts and brand marks created for various projects.",
        category: "graphics",
        type: "leisure",
        tags: ["Canva", "Adobe Express"],
        images: ["assets/bloom-1.png", "assets/lifelink.png", "assets/bloom-2.png", "assets/LLA.png", "assets/moneytrees.png", "assets/banner.png", "assets/boys next door.png", "assets/hatchery-1.png", "assets/hatchery-2.png", "assets/hatchery-3.png", "assets/nova.jpg", "assets/tinsel.png"]
    },
    {
        title: "Latitude Zero Lite",
        description: "This is meant to be a fun, but educational Geography game. Learn about continents, countries, cities (capitals and not), languages and cultures.",
        category: "web",
        type: "leisure",
        tags: ["javascript", "html", "css", "game", "educational"],
        images: ["assets/latitude-zero.png"]
    }
];

const filtersEl = document.querySelector('.filters');
const gridEl = document.getElementById('projectGrid');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalImages = document.getElementById('modalImages');
const closeModal = document.getElementById('closeModal');

const categories = ['all', ...new Set(projects.map(p => p.category))];
let activeCategory = 'all';

function renderFilters() {
    filtersEl.innerHTML = '';
    categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.textContent = cat;
        if (cat === activeCategory) btn.classList.add('active');
        btn.onclick = () => { activeCategory = cat; renderProjects(); };
        filtersEl.appendChild(btn);
    });
}

function renderProjects() {
    renderFilters();
    gridEl.innerHTML = '';

    projects
        .filter(p => activeCategory === 'all' || p.category === activeCategory)
        .forEach((p, index) => {
            const thumbNumber = (index % 2) + 1; // 1, 2, 1, 2...
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <div class="thumb" style="background-image:url('assets/thumbnail${thumbNumber}.png')"></div>
                <h3>${p.title}</h3>
                <p>${p.description}</p>
                <div class="tags">
                    ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
                </div>
            `;
            card.onclick = () => openModal(p);
            gridEl.appendChild(card);
        });
}

let currentSlide = 0;

function openModal(project) {
    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    currentSlide = 0;

    modalImages.innerHTML = `
        ${project.apk ? `<a class="apk-link" href="${project.apk}" download>⬇ Download APK</a>` : ''}

        <button class="carousel-btn left" id="prevSlide">‹</button>
        <button class="carousel-btn right" id="nextSlide">›</button>

        <div class="carousel-track" id="carouselTrack">
            ${project.images.map(media => {
        if (media.endsWith('.mp4')) {
            return `
                        <video
                            src="${media}"
                            controls
                            muted
                            playsinline
                        ></video>
                    `;
        }
        return `<img src="${media}" alt="">`;
    }).join('')}
        </div>
    `;

    modal.classList.add('active');

    const track = document.getElementById('carouselTrack');
    const total = project.images.length;
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');

    prevBtn.style.display = total > 1 ? 'block' : 'none';
    nextBtn.style.display = total > 1 ? 'block' : 'none';

    function pauseAllVideos() {
        track.querySelectorAll('video').forEach(v => {
            v.pause();
            v.currentTime = 0;
        });
    }

    function updateSlide() {
        track.style.transform = `translateX(-${currentSlide * 100}%)`;

        track.querySelectorAll('video').forEach((video, index) => {
            if (index === currentSlide) {
                video.play();
            } else {
                video.pause();
                video.currentTime = 0;
            }
        });
    }

    prevBtn.onclick = () => {
        pauseAllVideos();
        currentSlide = (currentSlide - 1 + total) % total;
        updateSlide();
    };

    nextBtn.onclick = () => {
        pauseAllVideos();
        currentSlide = (currentSlide + 1) % total;
        updateSlide();
    };

    // Touch swipe
    let startX = 0;

    track.addEventListener('touchstart', e => {
        startX = e.touches[0].clientX;
    });

    track.addEventListener('touchend', e => {
        const endX = e.changedTouches[0].clientX;
        if (startX - endX > 50) nextBtn.click();
        if (endX - startX > 50) prevBtn.click();
    });

    updateSlide();
}

closeModal.onclick = () => modal.classList.remove('active');
modal.onclick = e => { if (e.target === modal) modal.classList.remove('active'); };

renderProjects();


