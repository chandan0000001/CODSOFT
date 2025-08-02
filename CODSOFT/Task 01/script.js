  // Custom alert function to replace browser alerts
        function showMessageBox(message) {
            const msgBox = document.getElementById('message-box');
            const msgBoxText = document.getElementById('message-box-text');
            const msgBoxClose = document.getElementById('message-box-close');

            msgBoxText.textContent = message;
            msgBox.classList.add('show');

            // Close when OK button is clicked
            msgBoxClose.onclick = () => {
                msgBox.classList.remove('show');
            };

            // Close when clicking outside the message box content
            msgBox.onclick = (e) => {
                if (e.target === msgBox) {
                    msgBox.classList.remove('show');
                }
            };
        }

        // Sticky Header
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            header.classList.toggle('sticky', window.scrollY > 0);
        });

        // Mobile Menu Toggle
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = hamburger.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.querySelector('i').classList.add('fa-bars');
                hamburger.querySelector('i').classList.remove('fa-times');
            });
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 90, // Adjusted for new header height
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Simple form validation using custom message box
        const contactForm = document.querySelector('.contact-form form');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const name = document.getElementById('name').value.trim();
                const email = document.getElementById('email').value.trim();
                const message = document.getElementById('message').value.trim();
                
                if (name && email && message) {
                    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailPattern.test(email)) {
                        showMessageBox('Please enter a valid email address.');
                        return;
                    }

                    showMessageBox('Thank you for your message! I will get back to you soon.');
                    contactForm.reset(); // Clear form fields
                } else {
                    showMessageBox('Please fill in all required fields.');
                }
            });
        }

        // Dynamic Copyright Year
        document.getElementById('current-year').textContent = new Date().getFullYear();

        // Typing Effect for Hero Title
        const typingTextElement = document.querySelector('.typing-text');
        const words = ["Web Developer", "Java Full Stack Enthusiast", "Reverse Engineering Enthusiast", "AI Explorer"];
        let wordIndex = 0;
        let charIndex = 1;
        let isDeleting = false;
        let typingSpeed = 150; // Speed of typing
        let deletingSpeed = 100; // Speed of deleting
        let delayBetweenWords = 1500; // Delay before typing next word

        function type() {
            const currentWord = words[wordIndex];
            if (isDeleting) {
                typingTextElement.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingTextElement.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }

            if (!isDeleting && charIndex === currentWord.length) {
                // Word is fully typed, start deleting after a delay
                isDeleting = true;
                setTimeout(type, delayBetweenWords);
            } else if (isDeleting && charIndex === 0) {
                // Word is fully deleted, move to next word
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(type, 500); // Short delay before typing next word
            } else {
                setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
            }
        }

        // Start typing effect when the window loads
        window.addEventListener('load', type);

        // Profile Photo Animation (Black & White to Color)
        window.addEventListener('load', () => {
            const profilePhoto = document.getElementById('profile-photo');
            // Ensure the image is initially grayscale via CSS
            // Then, after a short delay, remove the grayscale filter
            setTimeout(() => {
                profilePhoto.classList.add('colored');
            }, 1000); // 1-second delay before animation starts
        });


        // Scroll to Top Button functionality
        const scrollToTopBtn = document.getElementById('scroll-to-top');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) { // Show button after scrolling 400px
                scrollToTopBtn.classList.add('show');
            } else {
                scrollToTopBtn.classList.remove('show');
            }
        });

        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });