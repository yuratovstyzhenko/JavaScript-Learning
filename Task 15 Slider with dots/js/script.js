window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // Tab Highlighting ES6
    class TabFocus{
        // tabContent - array of contents where we need to highlight single one 
        // while clicking on aproppriate headliner 
        // info - parent element of all headliners
        // tab - array of directly headliners
        constructor(tabContent, info, tab) {
            this.tabContent = document.querySelectorAll(tabContent);
            this.info = document.querySelector(info);
            this.tab = document.querySelectorAll(tab);
            this.hideTabContent(1);
        }
        hideTabContent (a) {
            for (let i = a; i < this.tabContent.length; i++) {
                this.tabContent[i].classList.remove('show');
                this.tabContent[i].classList.add('hide');
            }
        }
        showTabContent (b) {
            if (this.tabContent[b].classList.contains('hide')) {
                this.tabContent[b].classList.remove('hide');
                this.tabContent[b].classList.add('show');
            }
        }
        track(){
            this.info.addEventListener('click', (event) => {
                let target = event.target;
                if (target && target.classList.contains('info-header-tab')) {
                    for (let i = 0; i < this.tab.length; i++) {
                        if (target == this.tab[i]) {
                            this.hideTabContent(0);
                            this.showTabContent(i);
                        }
                    }
                }
            });
        }
    }
    const tabOnFocus = new TabFocus('.info-tabcontent', '.info-header', '.info-header-tab');
    tabOnFocus.track();


    // Timer
    class Timer {
        // timerId - directly id of your HTML timer
        // deadline - time point in future wich will be the end of some stoke/offer 
        constructor(timerId, deadline) {
            this.timerId = timerId;
            this.deadline = deadline;
        }
        getTimeRemaining() {
            let difference =  Date.parse(this.deadline) - Date.parse(new Date());
            
            let seconds = Math.floor((difference/1000) % 60),
                minutes = Math.floor((difference/1000/60) % 60),
                hours = Math.floor(difference/1000/60/60);
            
            return {
                'total' : difference,
                'hours' : hours,
                'minutes' : minutes,
                'seconds' : seconds
            };
        }
        setClock() {
            let timer = document.getElementById(this.timerId);
    
            let hours = timer.querySelector('.hours'),
                minutes = timer.querySelector('.minutes'),
                seconds = timer.querySelector('.seconds'); 
            
            let updateFunc = updateClock.bind(this);
            // Once per second
            let timeInterval = setInterval(updateFunc, 1000);
            
            function updateClock() {
                let timeObject = this.getTimeRemaining();

                for(let key in timeObject) {
                    if(timeObject[key] < 10 && timeObject.total > 0) {
                        timeObject[key] = '0' + timeObject[key];
                    }
                }
                hours.textContent = timeObject.hours;
                minutes.textContent = timeObject.minutes;
                seconds.textContent = timeObject.seconds;
    
                if(timeObject.total <= 0) {
                    clearInterval(timeInterval);
                    hours.textContent = '00';
                    minutes.textContent = '00';
                    seconds.textContent = '00';
                }
            }
        }
    }
    const webTimer = new Timer('timer', '2020-02-04');
    webTimer.setClock();

    // Modal Window ES6
    class Modal {
        // overlay - directly overlay
        // seeMore - button "show info"
        // closeOverlay - cross "hidde info"
        constructor(overlay, seeMore, closeOverlay){
            this.overlay = document.querySelector(overlay);
            this.seeMore = document.querySelector(seeMore);
            this.closeOverlay = document.querySelector(closeOverlay);
        }
        track(){
            this.seeMore.addEventListener('click', () => {
                this.overlay.style.display = 'block';
                this.seeMore.classList.add('more-splash');
                document.body.style.overflow = 'hidden';
            });

            this.closeOverlay.addEventListener('click', () => {
                this.overlay.style.display = 'none';
                this.seeMore.classList.remove('more-splash');
                document.body.style.overflow = '';
            });
        }
    }
    
    const modalWindow = new Modal('.overlay', '.more', '.popup-close');
    modalWindow.track();

    // Forms and AJAX requests
    
    // Form for modal window written via Promises
    let message = {
        loading: 'Loading...',
        success: 'Thank you. We will contact you soon !',
        failure: 'Opss... Something is wrong !'
    };
    let modalForm = document.querySelector('.main-form');
    let modalInput = modalForm.getElementsByTagName('input');
    
    let statusMessageModal = document.createElement('div');
    statusMessageModal.classList.add('status');

    modalForm.addEventListener('submit', function(event){
        event.preventDefault();
        modalForm.appendChild(statusMessageModal);
        
        return new Promise(function (resolve, reject) {
            let request = new XMLHttpRequest();
            request.open('POST', '/server.php');
            // 'application/x-www-form-urlencoded' for FormData only
            // for JSON
            request.setRequestHeader('Content-Type', 'application/json; charset=utf-8'); 

            let formData = new FormData(modalForm);
            // How to send data using FormData format
            // request.send(formData);

            // How to send data using JSON format
            let obj = {};
            formData.forEach(function(value, key){
                obj[key] = value;
            });
            let json = JSON.stringify(obj);
            request.send(json);

            request.onload = () => {
                if(request.readyState < 4) {
                    statusMessageModal.innerHTML = message.loading;
                } else if (request.readyState === 4 && request.status == 200) {
                    resolve();
                } else {
                    reject();
                }
            };
        })
        .then(() => {
            statusMessageModal.innerHTML = message.success;
        })
        .catch(() => {
            statusMessageModal.innerHTML = message.failure;
        })
        .finally(() => {
            for (let i = 0; i < modalInput.length; i++) {
                modalInput[i].value = '';
            }
        });
    });
    
    // Form for contact form written via Promises
    let contactForm = document.getElementById('form');
    let contactInput = contactForm.getElementsByTagName('input');

    let statusMessageContact = document.createElement('div');
    statusMessageContact.classList.add('status');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        contactForm.appendChild(statusMessageContact);

        return new Promise(function (resolve, reject) {
            let request = new XMLHttpRequest();
            request.open('POST', '/server.php');
            request.setRequestHeader('Content-Type', 'application/json; charset=utf-8' /*'application/x-www-form-urlencoded'*/);
            let formData = new FormData(contactForm);
            // request.send(formData);

            //  to JSON
            let obj = {};
            formData.forEach(function(key, value){
                obj[key] = value;
            });
            let json = JSON.stringify(obj);
            request.send(json);

            request.onload = () => {
                if(request.readyState < 4) {
                    statusMessageContact.innerHTML = message.loading;
                } else if (request.readyState === 4 && request.status == 200) {
                    resolve();
                } else {
                    reject();
                }
            };
        })
        .then(() => {
            statusMessageContact.innerHTML = message.success;
        })
        .catch(() => {
            statusMessageContact.innerHTML = message.failure;
        })
        .finally(() => {
            for (let i = 0; i < contactInput.length; i++) {
                contactInput[i].value = '';
            }
        });
    });

    // Slider with dots

    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');
    
    showSlide(slideIndex);
    function showSlide(n) {
        if(n < 1) {
            slideIndex = slides.length;
        }
        if(n > slides.length) {
            slideIndex = 1;
        }
        slides.forEach((item) => item.style.display = 'none');
        dots.forEach((item) => item.classList.remove('dot-active'));

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    }
    function moveSlide(n) {
        showSlide(slideIndex += n);
    }
    function currentSlide(n) {
        showSlide(slideIndex = n);
    }
    prev.addEventListener('click', () => {
        moveSlide(-1);
    });
    next.addEventListener('click', () => {
        moveSlide(1);
    });
    dotsWrap.addEventListener('click', (event) => {
        for(let i = 0; i < dots.length + 1; i++) {
            if(event.target.classList.contains('dot') && event.target == dots[i - 1]) {
                currentSlide(i);
            }
        }
    });
});