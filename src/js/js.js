// const numberOfFilms = prompt('how many films did you watched?', '');
 
// // second

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: {},
//     privat: false
// };
// if (numberOfFilms > 10) {
//     alert('u tebya okazyvayetsya dohrena vremeni!');
// } else {
//     alert('ne tak uj i mnogo');
// }


// // third

// const lastFilm = prompt('Your last film?', ''),
//       levelFilm = prompt('Films level');
// personalMovieDB.movies[lastFilm] = levelFilm;

// console.log(personalMovieDB);

// for(let i = 5; i <= 10; i++) {
//     console.log(i);
// }

// for (let i = 20; i >= 10; i--) {
//     if (i === 13) {
//         break;
//     }
//     console.log(i);
// }

// for (let i = 2; i <=10; i++) {
//     if(i % 2 == 0) {
//         console.log(i);
//     } 
// }

// let i = 2;
// while(i <= 16) {
//     if (i % 2 === 0) {
//         i++;
//         continue;
//     } else {
//         console.log(i);
//     }
//     i++;
// }

// let massiv = [];
// for(let i = 5; i <= 10; i++) {
//     massiv[i - 5] = i;
// }
// console.log(massiv);

// const arr = [ 5, 6,];
// const result = [];
// for (let i = 0; i < arr.length; i++) {
//     result[i] = arr[i];
// }
// console.log(result);


// const data = [ 5, 10, 'shopping', 20, 'Homework'];
// for (let i = 0; i < data.length; i++) {
//     if (typeof(data[i]) === 'number') {
//         data[i] = data[i] * 2;
//     } else if (typeof(data[i]) === 'string') {
//         data[i] = `${data[i]} - done` ;
//     }
// }
// console.log(data);
//     return data;

// const numberOfFilms = prompt('how many films did you watched?', '');

let numberOfFilms;

function star() {
    numberOfFilms = prompt('How many films did you watched?');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = prompt('How many films did you watched?');
    }
}
star();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
console.log(personalMovieDB);


function personalQutions() {
    for(let i = 0; i <1; i++) {
        const a = prompt('what is the last one?','');
        const b = prompt('level?','');
        if (a != null && b != null && a != '' && b != '' && a.length <= 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
} 
personalQutions();

function personalLevel() {
    if(personalMovieDB.count < 10) {
        console.log('normal');
     } else if( personalMovieDB.count >= 10 && personalMovieDB.count <= 50) {
        console.log('who are you?');
     } else {
        console.log('you are the monstr or program has broken');
     }
}
personalLevel();


function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    } else {
        console.log('tebe syuda nelzya');
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for(let i = 1; i <= 3; i++) {
        const genre = prompt(`Your favorite janr by the number ${i}`);
        personalMovieDB.genres[i - 1] =  genre;
    }
}
writeYourGenres();

// const usdCurr = 10;
// const evroCurr = 15;

// function convert(amount, curr) {
//     console.log(amount * curr);
// }
// convert(2,usdCurr);
// convert(evroCurr, 10);

// const person = 'Alex';
// function sayHello(name) {
//     return `Hi, ${name}`;
// }
// sayHello(person);


// const massiv = [];
// function returmNeigboringNumbers(Num) {
//     return [Num - 1, Num, Num +1];
// }
// returmNeigboringNumbers(5);







// function numSnake (base,progress) {
//     if (typeof(progress) != 'number' || progress <= 0) {
//         return base;
//     }

//     let src = '';

//     for(let i = 1; i <= progress; i++) {
//         if(i === progress) {
//             src += `${base * i}`;
//         } else {
//             src += `${base * i}---`;
//         }
//     }
//     console.log(src);
// } 
// numSnake(10, 5);


// const pokl = '12.4pop';
// console.log(parseInt(pokl));
// console.log(pokl);




