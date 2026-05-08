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
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
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
                var match = cat === 'all' || group.getAttribute('data-group') === cat;
                group.style.display = match ? 'block' : 'none';
            });
        });
    });
});

function showProjects(projects) {
    let projectsContainer = document.querySelector("#work .box-container");
    let projectHTML = "";
    projects.slice(0, 4).forEach(project => {
        projectHTML += `
        <div class="box tilt">
      <img draggable="false" src="./assets/images/projects/${project.image}.PNG" alt="${project.name}" />
      <div class="content">
        <div class="tag">
        <h3>${project.name}</h3>
        </div>
        <div class="desc">
          <p>${project.desc}</p>
          <div class="btns">
            <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
          </div>
        </div>
      </div>
    </div>`
    });
    projectsContainer.innerHTML = projectHTML;

    // <!-- tilt js effect starts -->
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
        max: 15,
    });
    // <!-- tilt js effect ends -->

    /* ===== SCROLL REVEAL ANIMATION ===== */
    const srtop = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 1000,
        reset: true
    });

    /* SCROLL PROJECTS */
    srtop.reveal('.work .box', { interval: 200 });

}

fetchData("projects").then(data => {
    showProjects(data);
});

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


// ===== BINARY RAIN ANIMATION =====
(function () {
    const canvas = document.getElementById('binaryCanvas');
    if (!canvas) return;
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