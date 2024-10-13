document.addEventListener("DOMContentLoaded", function () {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
            
            const mainMenuLinks = document.querySelectorAll('.header__menu .menu__link');
            const burger = document.getElementById('burger');
            const nav = document.getElementById('nav');
            const header = document.querySelector('header'); 
            
            let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
          
            header.classList.add('transparent-bg');
            
           
            function handleScroll() {
                let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
                
                if (currentScroll > 0) {
        
                    header.classList.remove('transparent-bg');
                } else {
                    
                    header.classList.add('transparent-bg');
                }
                
                lastScrollTop = currentScroll;
            }
            
           
            window.addEventListener('scroll', handleScroll);
            
            
            burger.addEventListener('click', () => {
                burger.classList.toggle('toggle');
                nav.classList.toggle('show');
            });
            
            const navLinks = document.querySelectorAll('#nav a');
            
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    burger.classList.remove('toggle'); 
                    nav.classList.remove('show'); 
                });
            });

            function setActiveLink() {
                const currentUrl = window.location.href;
                
                mainMenuLinks.forEach(link => {
                    if (link.href === currentUrl) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }

            setActiveLink();
        });
});
