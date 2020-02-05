window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // Tab Highlighting 
    // let tabContent = document.querySelectorAll('.info-tabcontent');
    // let info = document.querySelector('.info-header');
    // let tab = document.querySelectorAll('.info-header-tab');

    // function hideTabContent (a) {
    //     for (let i = a; i < tabContent.length; i++) {
    //         tabContent[i].classList.remove('show');
    //         tabContent[i].classList.add('hide');
    //     }
    // }
    // hideTabContent(1);
    
    // function showTabContent (b) {
    //     if (tabContent[b].classList.contains('hide')) {
    //         tabContent[b].classList.remove('hide');
    //         tabContent[b].classList.add('show');
    //     }
    // }
    
    // info.addEventListener('click', function(event){
    //     let target = event.target;
    //     if (target && target.classList.contains('info-header-tab')) {
    //         for (let i = 0; i < tab.length; i++) {
    //             if (target == tab[i]) {
    //                 hideTabContent(0);
    //                 showTabContent(i);
    //             }
    //         }
    //     }
    // });

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

    // // Timer

    // // Set deadline format y-m-d
    // let deadline = '2020-01-25';
    // // Set timer Id
    // let timerId = 'timer';

    // function getTimeRemaining(endTime) {
    //     let difference =  Date.parse(endTime) - Date.parse(new Date());
        
    //     let seconds = Math.floor((difference/1000) % 60),
    //         minutes = Math.floor((difference/1000/60) % 60),
    //         hours = Math.floor(difference/1000/60/60);
        
    //     return {
    //         'total' : difference,
    //         'hours' : hours,
    //         'minutes' : minutes,
    //         'seconds' : seconds
    //     };
    // }

    // function setClock(id, endTime) {
    //     let timer = document.getElementById(id);

    //     let hours = timer.querySelector('.hours'),
    //         minutes = timer.querySelector('.minutes'),
    //         seconds = timer.querySelector('.seconds'); 
        
    //     // Once per second
    //     let timeInterval = setInterval(updateClock, 1000);
        
    //     function updateClock() {
    //         let timeObject = getTimeRemaining(endTime);

    //         for(let key in timeObject) {
    //             if(timeObject[key] < 10 && timeObject.total > 0) {
    //                 timeObject[key] = '0' + timeObject[key];
    //             }
    //         }
    //         hours.textContent = timeObject.hours;
    //         minutes.textContent = timeObject.minutes;
    //         seconds.textContent = timeObject.seconds;

    //         if(timeObject.total <= 0) {
    //             clearInterval(timeInterval);
    //             hours.textContent = '00';
    //             minutes.textContent = '00';
    //             seconds.textContent = '00';
    //         }
    //     }
    // }

    // setClock(timerId, deadline);

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

    // Modal Window 

    // let seeMore = document.querySelector('.more'),
    //     closeOverlay = document.querySelector('.popup-close');
    // let overlay = document.querySelector('.overlay');

    // seeMore.addEventListener('click', function(){
    //     overlay.style.display = 'block';
    //     this.classList.add('more-splash');
    //     document.body.style.overflow = 'hidden';
    // });

    // closeOverlay.addEventListener('click', function() {
    //     overlay.style.display = 'none';
    //     seeMore.classList.remove('more-splash');
    //     document.body.style.overflow = '';
    // });

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
});