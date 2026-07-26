document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Smooth Navigation for all buttons
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 2. Start Learning Button Logic
    const startBtn = document.getElementById('startLearningBtn');
    if (startBtn) {
        startBtn.addEventListener('click', () => {
            document.getElementById('grammar').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // 3. Language Selector Logic
    const langSelect = document.getElementById('langSelect');
    langSelect.addEventListener('change', (e) => {
        alert(`Language changed to: ${e.target.value.toUpperCase()}`);
        // Here you would typically trigger a translation function
    });

    // 4. Reveal Animations on Scroll
    const sections = document.querySelectorAll('.section');
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // 5. Card Interaction Logic
    const cardButtons = document.querySelectorAll('.open-card');
    cardButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const topic = this.parentElement.querySelector('h3').innerText;
            alert(`Opening detailed module for: ${topic}`);
        });
    });

    // 6. AI Teacher Interface Logic
    const chatInput = document.getElementById('chatInput');
    const sendBtn = document.getElementById('sendMessage');
    const chatWindow = document.getElementById('chatWindow');

    function addMessage(text, sender) {
        const msgDiv = document.createElement('div');
        msgDiv.classList.add('message', sender);
        msgDiv.innerText = text;
        chatWindow.appendChild(msgDiv);
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }

    sendBtn.addEventListener('click', () => {
        const text = chatInput.value;
        if (text.trim() !== "") {
            addMessage(text, 'user');
            chatInput.value = "";
            
            // Simulating AI Response
            setTimeout(() => {
                addMessage("That's a great question about grammar! Let me explain that for you...", 'ai');
            }, 1000);
        }
    });

    // 7. Quiz Logic (Simple implementation)
    const options = document.querySelectorAll('.option');
    options.forEach(opt => {
        opt.addEventListener('click', function() {
            // Remove previous selections
            options.forEach(o => o.style.background = "none");
            
            if (this.classList.contains('correct')) {
                this.style.background = "#dcfce7"; // Success color
                this.style.borderColor = "#22c55e";
                alert("Correct Answer!");
            } else {
                this.style.background = "#fee2e2"; // Error color
                this.style.borderColor = "#ef4444";
                alert("Try again!");
            }
        });
    });

    // 8. Mobile Menu Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.addEventListener('click', () => {
        const nav = document.querySelector('.nav-links');
        nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
        nav.style.flexDirection = 'column';
        nav.style.position = 'absolute';
        nav.style.top = '70px';
        nav.style.left = '0';
        nav.style.width = '100%';
        nav.style.background = 'white';
        nav.style.padding = '20px';
    });
});