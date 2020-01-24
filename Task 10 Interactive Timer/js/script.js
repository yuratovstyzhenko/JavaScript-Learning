window.addEventListener('DOMContentLoaded', function(){
    'use strict';

    let tabContent = document.querySelectorAll('.info-tabcontent');
    let info = document.querySelector('.info-header');
    let tab = document.querySelectorAll('.info-header-tab');

    function hideTabContent (a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    hideTabContent(1);
    
    function showTabContent (b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }
    
    info.addEventListener('click', function(event){
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                }
            }
        }
    });

    // Timer

    // Set deadline format y-m-d
    let deadline = '2020-01-25';
    // Set timer Id
    let timerId = 'timer';

    function getTimeRemaining(endTime) {
        let difference =  Date.parse(endTime) - Date.parse(new Date());
        
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

    function setClock(id, endTime) {
        let timer = document.getElementById(id);

        let hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'); 
        
        // Once per second
        let timeInterval = setInterval(updateClock, 1000);
        
        function updateClock() {
            let timeObject = getTimeRemaining(endTime);

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

    setClock(timerId, deadline);

});