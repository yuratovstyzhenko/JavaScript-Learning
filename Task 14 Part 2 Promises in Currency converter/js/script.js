// let inputRub = document.getElementById('rub'),
//     inputUsd = document.getElementById('usd');

// inputRub.addEventListener('input', () => {
//     let request = new XMLHttpRequest();

//     request.open('GET', 'js/current.json');
//     request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//     request.send();
    
//     request.addEventListener('readystatechange', function() {
//         if (request.readyState === 4 && request.status == 200) {
//             let data = JSON.parse(request.response);

//             inputUsd.value = inputRub.value / data.usd;
//         } else {
//             inputUsd.value = "Что-то пошло не так!";
//         }
//     });

// });

// Same code, but written via Promises
let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();

        request.open('GET', 'js/current.json');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.onload = () => resolve(request.response);
        request.onerror = () => reject(new Error("Что-то пошло не так!"));
        request.send();

    })
    .then((response) => {
        let data = JSON.parse(response);   
        inputUsd.value = inputRub.value / data.usd;
    })
    .catch((error) => {
        inputUsd.value = error;
    });
});