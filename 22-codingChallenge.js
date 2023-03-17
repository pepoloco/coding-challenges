'use strict'
// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

// const renderCountry = function (data, className = '') {
//     const html = `
//   <article class="country ${className}">
//     <img class="country__img" src="${data.flag}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(
//             +data.population / 1000000
//         ).toFixed(1)} people</p>
//       <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//       <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//     </div>
//   </article>
//   `;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
// };

// const renderError = function (msg) {
//     countriesContainer.insertAdjacentText('beforeend', msg);
//     countriesContainer.style.opacity = 1;
// };

// const getJSON = function (url, errorMsg = 'Something went wrong') {
//     return fetch(url).then(response => {
//         if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

//         return response.json();
//     });
// };
// const whereAmI = function (lat, lng) {
//     const url = `https://geocode.xyz/${lat},${lng}?geoit=json`

//     fetch(url)
//         .then(response => {
//             if (!response.ok) throw new Error(`Problem with geocoding ${response.status}`);
//             return response.json()
//         })
//         .then(data => {
//             const city = data.city;
//             const country = data.country;
//             console.log(`The coordinates with latitude ${lat}, longitude ${lng} correspond to ${city}, ${country}.`);
//             return fetch(`https://restcountries.eu/rest/v2/name${country}`)
//         })
//         .then(response => {
//             if (!response.ok)
//                 throw new Error(`Country not found (${response.status})`);
//             return response.json();
//         })
//         .then(data => renderCountry(data[0], 'neighbour'))
//         .catch(error => console.error(`${error.message}`));

// }
// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);

// 23-codingChallenge
const wait = function (seconds) {
    return new Promise(function (res) {
        setTimeout(res, seconds * 1000);
    });
}
const imgContainer = document.querySelector('.images');
const createImage = function (imgPath) {
    return new Promise((resolve, reject) => {
        const img = document.createElement('img');
        img.src = imgPath;
        img.addEventListener('load', function () {
            imgContainer.append(img);
            resolve(img);
        })
        img.addEventListener('error', function () {
            reject(new Error('Image not found.'));
        });
    });
}
let curImg;
createImage('istockphoto-1187355956-612x612.jpg')
    .then(img => {
        curImg = img;
        console.log('Image 1 loaded');
        return wait(2);
    })
    .then(() => {
        curImg.style.display = 'none';
        return createImage('tree-736885__480.jpg');
    })
    .then(img => {
        curImg = img;
        console.log('Image 2 loaded');
        return wait(2);
    })
    .then(() => {
        curImg.style.display = 'none'
    })
    .catch(err => console.error(err));