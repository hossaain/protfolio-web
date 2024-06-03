document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll animation
    const sections = document.querySelectorAll('section');
    const faders = document.querySelectorAll('.fade-in');
    const slidersLeft = document.querySelectorAll('.slide-in-left');
    const slidersRight = document.querySelectorAll('.slide-in-right');

    const appearOptions = {
        threshold: 0.25,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    sections.forEach(section => {
        appearOnScroll.observe(section);
    });

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    slidersLeft.forEach(slider => {
        appearOnScroll.observe(slider);
    });

    slidersRight.forEach(slider => {
        appearOnScroll.observe(slider);
    });

    // Modal popup
    const modal = document.querySelector('.modal');
    const modalClose = document.querySelector('.modal-close');
    const teamMembers = document.querySelectorAll('.team-member');

    teamMembers.forEach(member => {
        member.addEventListener('click', () => {
            modal.classList.add('show');
            modal.querySelector('.modal-content').innerText = member.dataset.name;
        });
    });

    modalClose.addEventListener('click', () => {
        modal.classList.remove('show');
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const blogs = [
        { title: "10 Tips for Improving Your Productivity", description: "Learn practical strategies to boost your productivity and achieve more in less time." },
        { title: "The Future of Artificial Intelligence", description: "Explore the latest advancements and potential applications of AI technology in various industries." },
        { title: "Mastering Web Development: Best Practices", description: "Discover essential tips and techniques for becoming a proficient web developer." },
        { title: "Effective Digital Marketing Strategies", description: "Unlock the secrets of successful digital marketing campaigns and grow your online presence." },
        { title: "The Impact of Blockchain Technology on Business", description: "Learn how blockchain is revolutionizing industries and transforming traditional business models." },
        { title: "Understanding Cybersecurity Threats", description: "Stay informed about common cybersecurity threats and learn how to protect your digital assets." },
        { title: "The Power of Data Analytics in Decision Making", description: "Harness the potential of data analytics to make informed decisions and drive business success." },
        { title: "Creating Engaging User Experiences with UI/UX Design", description: "Discover the principles of UI/UX design and how they can enhance user engagement and satisfaction." },
        { title: "Navigating the World of Freelancing", description: "Get insights into the freelancing industry and learn how to thrive as a freelancer in today's competitive market." },
        { title: "10 Must-Have Tools for Every Entrepreneur", description: "Explore essential tools and resources to streamline your workflow and boost your entrepreneurial journey." }
    ];

    const blogsContainer = document.querySelector('.blogs');

    blogs.forEach((blog, index) => {
        const blogItem = document.createElement('div');
        blogItem.classList.add('blog-item', index % 2 === 0 ? 'slide-in-left' : 'slide-in-right');
        blogItem.innerHTML = `
            <h3>${blog.title}</h3>
            <p>${blog.description}</p>
        `;
        blogsContainer.appendChild(blogItem);
    });
});
