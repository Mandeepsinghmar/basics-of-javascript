// alert('hello world');

// variable, const, var, and reserved words
// variable cant start from Number, and also any reserved word
// let age = 25;
// let year = 2020;

// log things to console
// console.log(age, year);

// age = 30;
// console.log(age);

// var point = 25;
// point = 27;
// console.log(point);

// const hello = 32;
// hello = 56;
// console.log(hello);

// strings
// console.log("hello, world");

// let email = "msingh8318@gmail.com";

// console.log(email);

// string concatenation
// let firstname = "ramn";
// let lastname = "singh";
// let fullname = firstname + " " + lastname;
// console.log(fullname);

// string characters
// console.log(fullname[2]);

// string length
// console.log(fullname.length);

// string methods

// console.log(fullname.toUpperCase());
// let result = fullname.toLowerCase();
// console.log(result);

// let index = email.indexOf("@");
// console.log(index);

// common string methods

// let email = "msingh@8324.con";

// let result = email.lastIndexOf('n');

// let result = email.slice(0,6);

// let result = email.substr(2,8);

// let result = email.replace('m', 's');
// console.log(result);


// data types - numbers

// let radius = 10;
// let pi = 3.14;

// console.log(radius,pi);

// math operators + - * / % **

// console.log(10/2);

// let result = radius % 3;
// let result = pi * radius**2;

//  order of operation  B I D M A S

// let result = 5 * (10-3)**2;

// console.log(result);

// let likes = 10;
// likes = likes + 1;
// likes++;
// likes--;

// likes += 10;
// likes -= 5;
// likes *= 2;
// likes **= 2;
// likes /= 2;

// console.log(likes);

// NaN - not a number

// console.log(2/'hell');

// let result = 'the video has ' + likes + ' likes';

// template strings

// const title = 'best reads of 2019';
// const author = 'mario';
// const likes = 30;

// concatenation way
//  let result = 'the blog called ' + title + ' by' + ' author' + ' has ' + likes + ' likes';
// console.log(result);

// template string way(template literate)
// let result = `the blog called ${title} by ${author} has ${likes} likes.`
// console.log(result);

// creating html template
// let html = `
//   <h1>${title}</h1>
//   <p>hwello world ${author}</p>
// `;
// console.log(html);

// arrays

// let name = ['mandeep', 'ramu', 'yamu'];
// console.log(name);
// name[1] = 'samu';
// console.log(name[1]);

// let age = [12,23,43,43];
// console.log(age[2]);

// let differdatatype = ['sam', 'ram', 12, 42];
// console.log(differdatatype);

// console.log(name.length);

// array methods

// let result = name.join('-');
// let result = name.indexOf('ramu');
// let result = name.concat(['namu', 'zdzf']);
// let result = name.push('sam');
//  result = name.pop();

// console.log(name);

// undefined
// let age;

// null
// let age = null;

// console.log(age, age + 3, `the age is ${age}`);

// booleans & comparisons

// console.log(true, false, 'true', 'false');

// methods can return booleans

// let email = 'msingh8328@gmail.com';
// let name = ['man', 'ijad', 'nam'];
// let result = email.includes('@');
// let result = name.includes('man');
// console.log(name)
// console.log(result);

// comparison opeators
// let age = 23;
// console.log(age == 23);
// console.log(age == 24);
// console.log(age != 23);
// console.log(age != 30);
// console.log(age > 30);
// console.log(age < 30);
// console.log(age <= 23);

// let name = 'mandeep';

// console.log(name == 'mandeep');
// console.log(name == 'Mandeep');
// console.log(name > 'bandeep');
// console.log(name > 'Mandeep');
// console.log(name > 'Bandeep');

// loose comparison(different types can still be equal)

// let age = 25;
// console.log(age == 25);
// console.log(age == '25');
// console.log(age != 25);
// console.log(age != '25');

// strict comparison(different types cannot be eaqual)

// console.log(age === 25);
// console.log(age === '25');
// console.log(age !== 25);
// console.log(age !== '25');

// type conversion

// let score = '100 ';

// score = Number(score);
// console.log(score + 1);
// console.log(typeof score);

// let result = Number('hello');
// let result = String(50);
// let result = Boolean(19);
// let result = Boolean('');

// console.log(result, typeof result);

// for loops

// for (let i = 0; i < 5; i++) {
//     console.log('in loop:', i);
// }

// console.log('loop finished');

// const names = ['mandeep', 'mand', 'add'];

// for(let i =  0; i < names.length; i++){
//     // console.log(names[i]);
//     let html = `<div>${names[i]}</div>`;
//     console.log(html);
// }

// while loop

// let i = 0;

// while(i < 5){
//     console.log('in loop:', i);
//     i++
// }
// let i = 0;
// while(i < 3){
//     let code = `div${names[i]}`;
//     console.log(code);
//     i++;
// }

// let i = 0;
// { console.log('the val of i is', i);
//     i++;
// }while(i < 3);


// conditionals
// if statements

// const age = 23;

// if(age > 20){
//     console.log('your age is over 20');
// }

// const name = ['man', 'nam', 'nab'];
// if(name.length > 3){
//     console.log('lname is mine');
// }

// const password = 'passsword';
// if(password.length > 8){
//     console.log('password is long emough');
// }

// if else  statement
// const password = 'password1';

// if(password.length > 8){
//     console.log('password is long emough');
// } else{
//     console.log('password is not long.');
// }


// else if  statement
// const password = 'password1';

// if(password.length >= 12){
//     console.log('password is very strong');
// }else if(password.length >= 8){
//     console.log('password is long emough');
// } else{
//     console.log('password is not long.');
// }

// logical operators OR || AND &&

// const password = 'mae@';

// if(password.length >= 12 && password.includes('@')){
//     console.log('password is very strong');
// }else if(password.length >= 8 || password.includes('@') && password.length >= 5){
//     console.log('password is strong');
// } else{
//     console.log('password is not strong.');
// }

// let user = false;

// if(!user){
//     console.log('you should log in');
// }

// console.log(!true);
// console.log(!false);


// breaks and continues

/*const scores = [23,43,34,0,34,100,23,4];

for(i = 0; i < scores.length; i++){
    if(scores[i] === 0){
        continue;
    }

    console.log('your score is', scores[i]);
    if(scores[i] === 100){
        console.log('congrats, your reach on top level');
        break;
    }
}*/

// switch statements

/*const grade = '50';

switch(grade){
    case '50':
        console.log('you get A grade.');
        break;
    case 'B':
        console.log('you get B grade.');
        break;
    case 'C':
        console.log('you get C grade.');
        break;  
    case 'D':
        console.log('you get D grade.'); 
        break;
    case 'E':
        console.log('you get E grade.'); 
        break;
    default:
        console.log('not a valid grade');
}
*/

// variables & global&block scope

// let age = 3;

// if(true){
//     let age = 4;
//     let name = 'mandeep';
//     age = 5;
//     console.log('inside code block', age, name);
//     if(true){
//         let age = 6;
//         console.log('inside 2nd code block', age,name)
//     }
// }
// console.log('outside code block', age);
 
// const age = 3;

// if(true){
//     const age = 4;
//     const name = 'mandeep';
//     console.log('inside code block', age, name);
//     if(true){
//         const age = 6;
//         console.log('inside 2nd code block', age,name)
//     }
// }
// console.log('outside code block', age);

// function declations

// function name(){
//     console.log('hello');
// }
// name();
// name();
// name();
// name();

// function expression
// const hello = function ram(){
//     console.log('yup');
// };
// hello();
// hello();
// hello();
// hello();


// arguments & parameters

// const speak = function(name ='mandeep', time = 'morning'){
//     console.log(`good ${time} ${name}`);
// }

// speak('ramu', 'night');

// returning values

// const calcArea = function (radius){
//     return 3.14*radius**2;
    
// };
// const areaa = calcArea(5.2);
// console.log(areaa);

// regular function

// const calcArea = function(radius){
//     return 3.14 * radius**2;
// }

// arrow function

// const calcArea =  radius  => 3.14 * radius**2;
// const area = calcArea(5,1);
// console.log(area);

// const greet = () => 'hello, world';
// const start = greet();
// console.log(start);

// const bill = (products, tax) => {
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i]*tax;
//     }
//     return total;
// };
// console.log(bill([10,12,42], 0.2));


//  callbacks and foreach
// callbacks for functions and foreach for methods


// foreach

// let people = [`'sam`,'sa','sma']

// people.forEach((people) => {
// console.log(people);
// });
// const ul = document.querySelector('.people')


// const people = [`sandeep`, `sonu`];
//  let html = ``;
// people.forEach(function(person){
//     // create html template
//     html += `<li style=" color:blue;>${person}</li>`;
// });

// ul.innerHTML = html
    

// object - properties & methods

// object literals


// let user = {
//     name: 'mandeep',
//     age: 21,
//     email: 'msingh3828@gmail.com',
//     location: 'haryana',
//     blog: [ 
//         {title: 'hello i am mandeep', likes: 30 },
//         {title: 'hi world', likes: 34 }
//     ] ,
//     login: function (){
//         console.log('the user is logged in');
//     },
//     logout(){
//         console.log('the user is logged out');
//     },
//     logblogs(){
//         // console.log(this.blog);
//         console.log('this blog has written the following blogs:');
//         this.blog.forEach(blogs => {
//             console.log(blogs.title, blogs.likes);
//         })
       
//     }
// };

// // user.login();
// // user.logout();
// user.logblogs();
// console.log(this);




// Math object

// console.log(Math);
// console.log(Math.PI);

//  const area = 7.6;

//  console.log(Math.round(area));
//  console.log(Math.floor(area));
//  console.log(Math.ceil(area));

// // random numbers

// const random = Math.random();
// console.log(Math.round(random*100));

// dom

// const heading = document.querySelector('h1');
// console.log(heading);

// const ul = document.querySelector('body > h1');
// console.log(ul);

// const par = document.querySelector('p');
// par.innerText = 'hello,my name is mandeep';

// par.forEach(para =>{
//    console.log(para);
// });
// console.log(par);
// const po = document.getElementsByClassName('people');
// console.log(po);


// const heading = document.querySelector('h1');

// const names = ['mandeep', 'sandeep', 'ramu'];

// names.forEach(person =>{
//     heading.innerHTML += `<p>${person}`;
// })


// const link = document.querySelector('a');

// link.setAttribute('href', 'https://www.google.com');
// // link.setAttribute('style', 'text-decoration:none;');

// link.style.margin = '20px';
// link.style.textDecoration = 'none';
// link.style.fontSize = '50px';

// console.log(link.classList);
// link.classList.add('link');
// link.classList.remove('link');

// const para = document.querySelectorAll('p');

// para.forEach(p=>{
//    if (p.textContent.includes('error')){
//        p.classList.add('error');
//    }
//    if (p.textContent.includes('success')){
//     p.classList.add('success');
// }
// });

// const heading = document.querySelector('h1');
// heading.classList.toggle('title');
// heading.classList.toggle('title');


// Parents,childs and siblings

// const heading = document.querySelector('h2');
// console.log(heading.parentElement);
// console.log(heading.nextElementSibling);
// console.log(heading.previousElementSibling);
// const button = document.querySelector('button');
// button.addEventListener('click', ()=>{
//     console.log('clicked'); 
// });

// const ul = document.querySelector('ul');
// // ul.remove();

// const button = document.querySelector('button');
// button.addEventListener('click', ()=>{
// //   ul.innerHTML += '<li>something new</li>';
// const li = document.createElement('li');
// li.textContent = 'some new to do';
// // ul.append(li);
// ul.prepend(li);
// });

// const items = document.querySelectorAll('li'); 

 
// items.forEach(item => {
//     item.addEventListener('click', e => {
//     //    e.target.style.textDecoration = 'line-through';
//     e.stopPropagation();
//     e.target.remove();

// });
// });`

// ul.addEventListener('click', (e)=>{
// //   console.log(e);
// if(e.target.tagName ==='LI'){
//     e.target.remove();}
// });


// const copy = document.querySelector('.copyme');
// copy.addEventListener('copy', ()=>{
//     console.log('my content is copyrght');
// });

// const box  = document.querySelector('.box');
// box.addEventListener('mousemove', e =>{
//     // console.log(e);
//     box.textContent = `x-pos ${e.offsetX} & y-pos ${e.offsetY}`
// });


// const button = document.querySelector('button');
// const popup = document.querySelector('.popup-wrapper');
// const popupclose = document.querySelector('.popup-close');


// button.addEventListener('click', ()=>{
//     popup.style.display = 'block';
// });

// popupclose.addEventListener('click', ()=>{
//     popup.style.display = 'none';
// });
// popup.addEventListener('click', ()=>{
//     popup.style.display = 'none';
// });

// const form = document.querySelector('.signup-form');
// const message = document.querySelector('.message')
// const checkpattern = /^[a-zA=Z]{6,10}$/;

// form.addEventListener('submit', (e)=>{
//     e.preventDefault();
//     // console.log(form.username.value);
// // validation
//     const username = form.username.value;

//     if(checkpattern.test(username)){
//     // valid info
//      message.textContent = 'username is valid';
//     }else {
//         message.textContent = 'username contains any letters between 6 to 10 letters longss '
//     }
// });

// // live validation
// form.username.addEventListener('keyup', e => {
//     // console.log(form.username.value, e.target.value);
//     if(checkpattern.test(e.target.value)){
//         form.username.setAttribute('class', 'success');
//    } else{
//     form.username.setAttribute('class', 'error');
//    }
// });

// Test regex

// const username = 'monusingh';
// const regpattern = /^[a-z]{6,}$/;
// let result = regpattern.test(username);
// // console.log(result);

// if(result){
//     console.log('pass');
// } else{
//     console.log('fail')
// }
// let result = username.search(regpattern);
// console.log(result);


// ninja quiz

// const correctanswers = ['B', 'B', 'B', 'B'];
// const form = document.querySelector('form');
// const result = document.querySelector('.result');

// form.addEventListener('submit', e => {
//     e.preventDefault();

//     let score = 0;
//   const useranswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]

// // check answers
//    useranswers.forEach((answer, index) => {
//        if(answer === correctanswers[index]){
//            score += 25;
//        }
//    });

//    //show result on page  
//    scrollTo(0,0);
//    result.classList.remove('d-none');

//    let output = 0;
//    const timer = setInterval(() => {
//     result.querySelector('span').textContent = `${output}%`;
//     if(output === score){
//         clearInterval(timer);
//     } else{
//        output++;
//     }
//    }, 10); 

// });

//window object (global object)--every method, property and function store in window object.

// console.log('hello');
// window.console.log('hello');

// console.log(document.querySelector('form'));
// console.log(window.document.querySelector('form'));

// console.log(alert('helloo'));
// console.log(window.alert('helloo'));

// setTimeout(() => {
// console.log(alert('hello'));
// }, 3000);

// array methods

// filter method

// const scores = [10,20,15,35,60,30,2];

// const newscore = scores.filter((score) =>{
//     return score > 20;
// });
// console.log(newscore);

// const users = [ 
//      {name: 'mandeep', premium: true},
//      {name: 'sandeep', premium: false},
//      {name: 'pandeep', premium: false},
//      {name: 'randeep', premium: true},
// ];

// const premiumuser = users.filter(user =>{
//     return user.premium;
// })
// console.log(premiumuser);

// map method

// const prices = [20,30,34,334,43,34,2,43];

// const saleprices = prices.map((price)=>{
//     return price*2;
// });

// console.log(saleprices);


// const products = [
//     {name: 'gold star', price:20},
//     {name: 'mushroom', price:40},
//     {name: 'butter', price:25},
//     {name: 'ice cream', price:30},
//     {name: 'gold star', price:50},
// ];
// const saleproducts = products.map((product) =>{
//     if(product.price > 30){
//          return {name: product.name, price: product.price/2};
//     }else{ 
//         return product;
//     }
// });
// console.log(saleproducts);


// reduce method

// const scores = [23,35,535,5,45,,56];
// const result = scores.reduce((increase, curr)=>{
//     if(curr > 50){
//         increase++;
//     }return increase; 
// }, 0);

// console.log(result);


// const products = [
//     {name: 'mandeep', price:20},
//     {name: 'mandeep', price:40},
//     {name: 'butter', price:25},
//     {name: 'mandeep', price:30},
//     {name: 'gold star', price:50},
// ];
// const mandeepprice = products.reduce((acc, curr)=>{
// if(curr.name === 'mandeep'){
//     acc += curr.price;
// }  return acc;
// },0);
// console.log(mandeepprice);


// find method

// const scores = [2,3,43,43,44,64,5,45];
// const firsthighscore = scores.find((score)=>{
//     return score > 20;
// });
// console.log(firsthighscore);

// sort method -- it is destructive  
// example 1 sorting string

// const  names = [' mand', 'san', 'adf', 'eef'];
// names.sort();
// names.reverse();
// console.log(names);




// const products = [
//     {name: 'mandeep', price:20},
//     {name: 'mandeep', price:40},
//     {name: 'butter', price:25},
//     {name: 'mandeep', price:30},
//     {name: 'gold star', price:50},
// ];

// products.sort((a,b)=> b.price - a.price);

//     console.log(products);

// chaining array methods


// const products = [
//     {name: 'mandeep', price:20},
//     {name: 'masep', price:40},
//     {name: 'butter', price:25},
//     {name: 'mddfdeep', price:30},
//     {name: 'gold star', price:50},
// ];

// const filtered = products.filter(product => product.price > 20);

// const newmap = filtered.map(product =>{
//     return `the ${product.name} is ${product.price} rs`;
// }) 

// const chaining = products.filter(product => product.price > 20)
// .map(product => {
//         return `the ${product.name} is ${product.price} rs`;
// });
// console.log(chaining);







