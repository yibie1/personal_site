$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        // Don't prevent if the link is to an external page
        if (this.hostname !== window.location.hostname) return;
        
        e.preventDefault();
        const target = $(this).attr('href');
        
        // Handle links from other pages (like projects page)
        if (target.includes('/')) {
            window.location.href = target;
            return;
        }
        
        // Smooth scroll to section
        const targetElement = $(target);
        if (targetElement.length) {
            $('html, body').animate({
                scrollTop: targetElement.offset().top,
            }, 600, 'linear');
            
            // Close mobile menu if open
            $('#menu').removeClass('fa-times');
            $('.navbar').removeClass('nav-toggle');
        }
    });

    // <!-- emailjs to mail contact form data -->
    $("#contact-form").submit(function (event) {
        emailjs.init("user_TTDmetQLYgWCLzHTDgqxm");

        emailjs.sendForm('contact_service', 'template_contact', '#contact-form')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                document.getElementById("contact-form").reset();
                alert("Form Submitted Successfully");
            }, function (error) {
                console.log('FAILED...', error);
                alert("Form Submission Failed! Try Again");
            });
        event.preventDefault();
    });
    // <!-- emailjs to mail contact form data -->

});

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio | Yibeltal Simachew";
            $("#favicon").attr("href", "assets/images/coder.png");
        }
        else {
            document.title = "Come Back To Portfolio";
            $("#favicon").attr("href", "assets/images/coder.png");
        }
    });


// <!-- typed js effect starts -->
$(document).ready(function () {
    if (typeof Typed !== 'undefined') {
        new Typed(".typing-text", {
            strings: [
                "Mobile App Developer (Flutter & React Native)",
                "iOS & Android App Developer",
                "Full-Stack Web Developer",
                "Laravel & Django Backend Developer",
                "React & Node.js Developer",
                "Quality Assurance Tester",
                "WordPress CMS Developer",
                "Database Engineer (MySQL & MongoDB)",
            ],
            loop: true,
            typeSpeed: 45,
            backSpeed: 22,
            backDelay: 1200,
            smartBackspace: true,
        });
    }
});
// <!-- typed js effect ends -->

async function fetchData() {
    try {
        const response = await fetch("./projects/projects.json");
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return await response.json();
    } catch (err) {
        console.error("fetchData failed:", err);
        return [];
    }
}
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.skill-tab').forEach(function (tab) {
        tab.addEventListener('click', function () {
            // update active tab
            document.querySelectorAll('.skill-tab').forEach(function (t) {
                t.classList.remove('active');
            });
            this.classList.add('active');

            var cat = this.getAttribute('data-cat');

            // show / hide groups
            document.querySelectorAll('.skill-group').forEach(function (group) {
                if (cat === 'all') {
                    // Show all groups
                    group.style.display = 'block';
                } else {
                    // Show only matching group
                    var match = group.getAttribute('data-group') === cat;
                    group.style.display = match ? 'block' : 'none';
                }
            });
        });
    });
    
    // Show all skills by default on load
    document.querySelectorAll('.skill-group').forEach(function (group) {
        group.style.display = 'block';
    });
});

function showProjects(projects) {
    let projectsContainer = document.querySelector("#work .home-proj-grid");
    if (!projectsContainer) {
        console.warn("Projects container not found");
        return;
    }
    
    // Clear any existing content
    projectsContainer.innerHTML = "";
    
    // EthioStays
    const ethioStaysCard = `
    <div class="home-proj-card">
      <div class="home-proj-img">
        <img draggable="false" src="./assets/images/placeholder-web.svg" alt="EthioStays" loading="lazy"/>
        <div class="home-proj-overlay">
          <a href="https://ethiostays.vercel.app/" target="_blank" rel="noopener noreferrer" class="home-proj-live">
            <i class="fas fa-external-link-alt"></i> Live Demo
          </a>
        </div>
        <span class="home-proj-badge web-badge">Web</span>
      </div>
      <div class="home-proj-body">
        <h3>EthioStays</h3>
        <div class="home-proj-tags">
          <span>React</span><span>Node.js</span><span>Chapa</span><span>Stripe</span>
        </div>
        <p>Ethiopian travel &amp; hotel booking platform — like Booking.com but built for Ethiopia.</p>
        <a href="https://ethiostays.vercel.app/" class="home-proj-btn" target="_blank" rel="noopener noreferrer">
          <i class="fas fa-eye"></i> View
        </a>
      </div>
    </div>`;
    
    // Zembile
    const zembileCard = `
    <div class="home-proj-card">
      <div class="home-proj-img">
        <img draggable="false" src="./assets/images/placeholder-web.svg" alt="Zembile Marketplace" loading="lazy"/>
        <div class="home-proj-overlay">
          <a href="https://zembile.vercel.app/" target="_blank" rel="noopener noreferrer" class="home-proj-live">
            <i class="fas fa-external-link-alt"></i> Live Demo
          </a>
        </div>
        <span class="home-proj-badge web-badge">Web</span>
      </div>
      <div class="home-proj-body">
        <h3>Zembile Marketplace</h3>
        <div class="home-proj-tags">
          <span>React</span><span>Tailwind</span><span>Chapa</span>
        </div>
        <p>Ethiopian e-commerce marketplace for authentic products — coffee, spices, traditional clothing &amp; more.</p>
        <a href="https://zembile.vercel.app/" class="home-proj-btn" target="_blank" rel="noopener noreferrer">
          <i class="fas fa-eye"></i> View
        </a>
      </div>
    </div>`;
    
    // Sukie
    const sukieCard = `
    <div class="home-proj-card">
      <div class="home-proj-img">
        <img draggable="false" src="./assets/images/su3.jpg" alt="Sukie Mobile App" loading="lazy"/>
        <div class="home-proj-overlay">
          <a href="https://expo.dev/artifacts/eas/UobRfhuaTshikVTu9CRqN.apk" target="_blank" rel="noopener noreferrer" class="home-proj-live">
            <i class="fab fa-android"></i> Download
          </a>
        </div>
        <span class="home-proj-badge mobile-badge">Mobile</span>
      </div>
      <div class="home-proj-body">
        <h3>Sukie Mobile App</h3>
        <div class="home-proj-tags">
          <span>Flutter</span><span>Dart</span><span>SQLite</span>
        </div>
        <p>Offline-first shop management app — inventory, sales, profits &amp; credit book for Ethiopian businesses.</p>
        <a href="https://expo.dev/artifacts/eas/UobRfhuaTshikVTu9CRqN.apk" class="home-proj-btn home-proj-btn--green" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-android"></i> APK
        </a>
      </div>
    </div>`;
    
    // Zembile Admin
    const zembileAdminCard = `
    <div class="home-proj-card">
      <div class="home-proj-img">
        <img draggable="false" src="./assets/images/placeholder-web.svg" alt="Zembile Admin" loading="lazy"/>
        <div class="home-proj-overlay">
          <a href="https://zembile-admin.vercel.app/" target="_blank" rel="noopener noreferrer" class="home-proj-live">
            <i class="fas fa-external-link-alt"></i> Live Demo
          </a>
        </div>
        <span class="home-proj-badge web-badge">Web</span>
      </div>
      <div class="home-proj-body">
        <h3>Zembile Admin Panel</h3>
        <div class="home-proj-tags">
          <span>React</span><span>Recharts</span><span>Dashboard</span>
        </div>
        <p>Full-featured dashboard for managing the Zembile marketplace — products, orders, analytics &amp; payments.</p>
        <a href="https://zembile-admin.vercel.app/" class="home-proj-btn" target="_blank" rel="noopener noreferrer">
          <i class="fas fa-eye"></i> View
        </a>
      </div>
    </div>`;
    
    projectsContainer.innerHTML = ethioStaysCard + zembileCard + sukieCard + zembileAdminCard;

    /* ===== SCROLL REVEAL ANIMATION ===== */
    if (typeof ScrollReveal !== 'undefined') {
        const srtop = ScrollReveal({
            origin: 'top',
            distance: '80px',
            duration: 1000,
            reset: true
        });
        srtop.reveal('.home-proj-card', { interval: 200 });
    }
}

// Initialize projects immediately
showProjects([]);

// dynamic footer year
document.addEventListener('DOMContentLoaded', function () {
    var el = document.getElementById('footer-year');
    if (el) el.textContent = new Date().getFullYear();
});

// ── Skills filter tabs (static HTML, no fetch needed) ──
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.skill-tab').forEach(function (tab) {
        tab.addEventListener('click', function () {
            document.querySelectorAll('.skill-tab').forEach(function (t) {
                t.classList.remove('active');
            });
            this.classList.add('active');
            var cat = this.getAttribute('data-cat');
            document.querySelectorAll('.skill-group').forEach(function (group) {
                var match = cat === 'all' || group.getAttribute('data-group') === cat;
                group.style.display = match ? 'block' : 'none';
            });
        });
    });
});

// <!-- tilt js effect starts -->
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});
// <!-- tilt js effect ends -->


/* ===== BINARY RAIN ANIMATION ===== */
(function () {
    const canvas = document.getElementById('binaryCanvas');
    if (!canvas) return;
    
    // Disable on mobile for performance
    if (window.innerWidth < 768) {
        canvas.style.display = 'none';
        return;
    }
    
    const ctx = canvas.getContext('2d');

    function resize() {
        canvas.width  = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノ';
    const fontSize = 14;
    let columns = Math.floor(canvas.width / fontSize);
    let drops = Array(columns).fill(1);

    // colour palette: mix of green matrix + blue dev tones
    const colours = [
        'rgba(0,255,100,0.85)',
        'rgba(0,200,255,0.75)',
        'rgba(80,140,255,0.7)',
        'rgba(0,255,160,0.6)',
    ];

    function draw() {
        // semi-transparent black fade trail
        ctx.fillStyle = 'rgba(6, 8, 24, 0.18)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.font = fontSize + 'px monospace';

        columns = Math.floor(canvas.width / fontSize);
        while (drops.length < columns) drops.push(Math.random() * -100);

        for (let i = 0; i < columns; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillStyle = colours[Math.floor(Math.random() * colours.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    setInterval(draw, 45);
})();
// ===== END BINARY RAIN =====

// disable developer mode removed - allows normal browser usage

/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });

srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.home .linkedin', { interval: 600 });
srtop.reveal('.home .github', { interval: 800 });
srtop.reveal('.home .twitter', { interval: 1000 });
srtop.reveal('.home .telegram', { interval: 600 });
srtop.reveal('.home .instagram', { interval: 600 });
srtop.reveal('.home .dev', { interval: 600 });

/* SCROLL ABOUT */
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });


/* SCROLL SKILLS — handled by CSS keyframe animation on .skill-card */

/* SCROLL EDUCATION */
srtop.reveal('.education .box', { interval: 200 });

/* SCROLL PROJECTS */
srtop.reveal('.work .box', { interval: 200 });

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.experience .timeline .container', { interval: 400 });

/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 400 });
srtop.reveal('.contact .container .form-group', { delay: 400 });