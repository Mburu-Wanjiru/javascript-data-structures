'use strict';

// Data needed for a later exercise
const flights =
  `_Delayed_Departure;fao93766109;txl2133758440;11:25+
  _Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;
  hel7439299980;fao93766109;12:05+_Departure;fao93766109;
  lis2323639855;12:30`;

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria',
   'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta',
   'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order:function(starterIndex,mainIndex){
return [this.starterMenu[starterIndex],
this.mainMenu[mainIndex]];
  },
  orderDelivery:function({
      starterIndex=null,mainIndex=null,
      address=null,time=null}) {
console.log(`order received! ${
  this.starterMenu[starterIndex]} and
   ${this.mainMenu[mainIndex]} will be delivered to
    ${address} at ${time}`);
  },

orderPasta:function(ing1,ing2,ing3){
  console.log(`Here is your delicious meal with ${ing1},
  ${ing2} and ${ing3}`);
},

orderPizza:function(mainIngredients,...otherIngredients){
console.log(mainIngredients);
console.log(otherIngredients);
}
};

restaurant.guest=0;
const guest= restaurant.guest || 10;
// OR is supposed to return the 1st truth value.also return the last value if no result found
//but it takes 0 as falsy value.
console.log(guest);

//using nullish coalescing oprator
//works with null and undefined(not 0 , '')
//corrects above
const guestcorrect=restaurant.guest ?? 10;
console.log(guestcorrect);

//short circuiting using && and ||
console.log('..................OR..................');
//can .. use any data type,..return any data type
// and does short circuiting
console.log(3 || `jim`);//3
console.log('' || `jim`);//jim
console.log(undefined || null);//null
console.log(true || false);//true
console.log(false || 1);//1
console.log(0 || 1);//1
console.log(undefined || 0 || '' || '' || '23');

//in short circuiting of OR operation,,it checks if
// the 1st value is a truthy value.if it is,it returns the 
//first values

const guess1=restaurant.guest?restaurant.guest:
 `content unavailable`;
console.log(guess1);

//implementing the above code using short circuiting
const guest2=restaurant.guest2 || 'content not available'
console.log(guest2);

//
console.log('..................and..................');
console.log(0 &&`jim`);//0
console.log(3 && `jim`);//jim
console.log('' && `jim`);//''
console.log(undefined && null);//undefined
console.log(null && undefined);
console.log(true && false);//false
console.log(false && 1);//false
console.log(0 && 1);//0
console.log(12 && 5 && 'j' && '5' && 'k');



//starts to check and if it gets a falsy value first it 
//returns it.and if the system has no falsy value it returns
// the last element which is a true value

if(restaurant.orderPizza){
  restaurant.orderPizza(`mushroom`,`others`)
}
restaurant.orderPizza && restaurant
.orderPizza(`mushroom`,`spinach`);



/**/ 
//recap defactoring
 //spread operator bcoz dots are put first;
const Arrr=[1,2,...[3,4]];
console.log(Arrr);

const [aa,bb,...others]=[1,2,3,4,5];//takes the named out only
console.log(aa,bb,others)
//extracting 1st & 3rd elements in restaurant.mainmenu
// then add an array of restaurant.startermunu
const [pizzza,,risotto]=[...restaurant.mainMenu,
  ...restaurant.starterMenu];
  console.log(pizzza,risotto,);

  //object
  const {sat,...weekdays}=restaurant.openingHours;
  console.log(sat)

//functions
//function that can add any element with values
const add=function(...numbers){
  let sum=0;
  for(let i=0;i<numbers.length;i++){
    sum=sum+numbers[i];
  }
  console.log(sum);

}
add(2,3);
add(2,3,4,5);
add(8,7,6,8,9,6,5,4);
const xx=[23,5,7];
add(...xx);

restaurant.orderPizza('mushrooms',
...restaurant.starterMenu);










/**/restaurant.orderDelivery({
  time:'22:30',
  address:'via del sole, 21',
  mainIndex:0,
  starterIndex:0,
})

//destructuring objects

const {name,openingHours,categories}=restaurant;
console.log(name,openingHours,categories);
const {name:restaurantName, openingHours: hours,
  categories:tags}=restaurant;
console.log(restaurantName,  hours,tags);


//default values
const {menu=1,starterMenu:sstarter=1}=restaurant;
console.log(menu,sstarter);

//mutating 
let aaa=111;
let bbb=999;
const obj={a:23,b:7,c:14};
({aaa,bbb}=obj);
console.log(aaa,bbb);

console.log(aaa,bbb);

//nested object
const{fri: {open:s,close:g}}=openingHours;
console.log(s,g);

//////////////////////////////

const ar=[7,8,9];
const badnewarray=[1,2,ar[0],ar[1],ar[2]];
console.log(badnewarray);
const newarr=[1,2,...ar];
console.log(newarr);

console.log(...newarr);

//adding an element in array usi spread operator
const newmenu=[...restaurant.mainMenu, 'gnocci'];
console.log(newmenu);

//copy array*/
const mainMenucopy=[...restaurant.mainMenu];
console.log(mainMenucopy);

//join many arrays
const Anew=[...restaurant.mainMenu,...restaurant.starterMenu];
console.log(Anew);

//iterables:arrays,strings,maps,sets,not objects

const str='jimmy';
const letters=[...str,'p',3,2];
console.log(letters);
///////using prompt

//const ingredients=[prompt('ingredient 1'),
//prompt('ingredient 2'),
  //prompt('ingredient 3'),];
//console.log(ingredients);

//restaurant.orderPasta(ingredients[0],ingredients[1],
  //ingredients[2]);

  //restaurant.orderPasta(...ingredients);

  /////
 const newhot={
  founder:1980,
  ...restaurant,
shareholders:'jim'
};
console.log(newhot);

const restaurantCopy={...restaurant};
restaurantCopy.name='jumuia'
console.log(restaurantCopy);










//destructing arrays

let Arr=[2,3,4];
const a=Arr[0];
const b=Arr[1];
const c=Arr[2];

//using destructimg

const [x,y,z]=Arr;
console.log(x,y,z);
console.log(Arr);

//destructing elements,
let[main,,secondary]=restaurant.categories;
console.log(main,secondary);//output;Italian, Pizzeria

//switching the positions of elements in an array.
//without destructing.

const temp=main;
main=secondary;
secondary=temp;
console.log(main,secondary);


// switching using destructing.

[main,secondary]=[secondary,main];
console.log(main,secondary);

//
console.log(restaurant.order(2, 0));//output:array of 
//(`garlic Bread`,`pizza`)

//destructing
//receiving   2;returning values from a function 
const [starter,mainP]=restaurant.order(2,0);
console.log(starter);
console.log(mainP);


//nested==>array inside an array;
const nested=[2,4,[5,6]];
//const[i, ,j]=nested;
//console.log(i,j);
const [i,j,[k,l]]=nested;
console.log(i,l);
console.log(i,j,k,l);
console.log(i,j);
console.log(i,k);

//default values
const [m=1 ,n=1,o=1]=[8,5]
console.log(m,n,o);


console.log(`................the soccer........................`);

//creating an object
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//destructuring
const [players1,players2]=game.players;
console.log(players1,players2);

//
const[gk1,...fieldplayers1]=players1;
console.log(gk1,fieldplayers1);

//
const[gk2,...fieldplayers2]=players2;
console.log(gk2,fieldplayers2);

//
const allplayers=[...players1,...players2];
console.log(allplayers);

//
const players1final=[...players1,'thiago','coutho','balani'];
console.log(players1final);

//nested
const{odds: {team1,x:draw,team2}}=game;
console.log(team1,draw,team2);

//
//[...players]=game.scored;
//console.log(players);

//
const printgoals=function(...players){
  console.log(players);

}
printgoals(...game.scored);

//
team1<team2 && console.log(`Team 1 is more likely to win`);

//
for(const [i,player] of game.scored.entries())
console.log(`Goal ${i+1}: ${player}`);

//
const app=Object.values(game.odds);
let average=0;
for(const odds of app)
  average+=odds;
  average/=app.length;
  console.log(average);



//looping array

console.log(`..............looping arrays..........................................................`);
//calling an array 
//displays an aray
const allAvailable=[...restaurant.mainMenu,...restaurant.starterMenu];
console.log(allAvailable);//display array

console.log(`..............looping arrays.............`);
 
/*for (let i=0;i<welcomToOurHotel.length;i++){
console.log(i);
}*/3//cant loop in an array in array;

//we now use for of loop
 for(const displayMenu of allAvailable)
  console.log(displayMenu);//displays foods only
  
  //using ..entry()-to display the index of the array based on original home
  for (const [naming,foods] of allAvailable.entries()){
    //console.log (foods);//displays the array of food
    //read each element in array in every iteration
   console.log(`${naming+1}:${foods}`);//displays the menu

  }
  
 
 console.log(`................................................................`);


 //checking an element
if(restaurant.openingHours.fri.open){
  console.log(restaurant.openingHours.fri.open);
}
//looping array
const Dayss=['mon','tue','wed','thur','fri','sat','sun']
console.log(`restaurant openning hours`);
for(const day of Dayss){
  const ope=restaurant.openingHours[day] ?.open?? `restaurant closed` 
  
  console.log(`${day} we open at:${ope}`);
 
}
const Days=['mon','tue','wed','thur','fri','sat','sun']
//looping objectsS
//Object.keys(object)
const dayarray=Object.keys(Days)
console.log(dayarray);//displays :(7) ['0', '1', '2', '3', '4', '5', '6']

for(const da of dayarray){
  console.log(da);//displays rray vertically
}

console.log(`another`)

//reads the values since they are numbers
const num=[1,2,3,4]
for(const da of Object.keys(num)){
  console.log(da);
}

//Object.values(object) displays array despite the type of it
///////displays an array of defined value
 const values=Object.values(Days);
 console.log(values);
 //loop above displays the array values vertically
 for(const val of values){
  console.log(val);
 }

 ////displays an array of defined value
 const value=Object.values(num);
 console.log(value);//display:(7) ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun']
 //displays an array of defined value
 for(const va of value){
  console.log(va);//displays array vertically
 }

 //Object.entries(Object)
 const entries=Object.entries(Days);
 console.log(entries);
 //takes each element in array and puts it into its array adding index of that element in an original array
 /*(7) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
0
: 
(2) ['0', 'mon']
1
: 
(2) ['1', 'tue']
2
: 
(2) ['2', 'wed']
3
: 
(2) ['3', 'thur']
4
: 
(2) ['4', 'fri']
5
: 
(2) ['5', 'sat']
6
: 
(2) ['6', 'sun']
length
: 
7 */

for(const ent of entries){
  console.log(ent);
}
//we can destructure above array
for(const [a,b] of entries){
  console.log(`${a}: ${b}.`)
}
//////////////////////////////caution
//it does not operate like entry in arrays
for(const [a,b] of entries){
  console.log(`${a+1}: ${b}.`)
}

 

console.log(`..............................sessionStorage................`)

const orderset=new Set(['pasta','pizza','pizza','risotto','pasta','pizza']);
//removes duplicates in array
console.log(orderset);
//set are iterables
console.log(new Set('jimna'));
//finding length of our meals
//NB
console.log(orderset.size);
//checking an element(meals availabilty)
console.log(orderset.has('pizza'));
console.log(orderset.has('bread'));
//adding an element(requesting any meal)
console.log(orderset.add('chipomwitu'));
console.log(orderset.add('pigmeat'));
//removing an element(customer disgusting meal)
console.log(orderset.delete('pigmeat'));
console.log(orderset);
//NB;we cant retrieve any data in a set
//console.log(orderset.clear());

//looping in a set
//display them vertically.

for (const order of orderset)
console.log(order);

//test data
const staff=['manager','chairman','chairlady','priest','waiter','waiter','casual','casual','soldier','soldier'];
//using set to display the different positions are in an institution.
//removes dumplicates
const staffpositions=[...new Set(staff)];
console.log(staffpositions);

console.log(new Set(['manager','chairman','chairlady','priest','waiter','waiter','casual','casual','soldier','soldier']).size);
console.log(new Set('jamesmburuwanjiru').size);

console.log(`.............maps.........Days...`);

//creating a new map
const jimhotel=new Map();
//adding elements(adding important credentials about a hotel)
jimhotel.set('name','JIMNA hotel');
jimhotel.set('1','Miguta Githunguri');
jimhotel.set('2','Kiambu kenya')
console.log(jimhotel);
//chaining the set.
jimhotel.set('categories',['githeri','chipo','viazi','rice'])
.set('open','11')
.set('close','23')
//a bug in deep.NB
.set(true,'we are open')
.set(false,'we are closed');
console.log(jimhotel);
//console.log(jimhotel.get(true));//bug identifier
//showing when the hotel is open
//get the time from the system
//close modal
const time=8;
const timestatus=jimhotel.get(time > jimhotel.get(`open`) 
&& time <jimhotel.get(`close`));
console.log(timestatus);
 
///////
//open modal
const time2=18;
const timestatus2=jimhotel.get(time2 > jimhotel.get(`open`) 
&& time <jimhotel.get(`close`));
console.log(timestatus2);

//notes
console.log(jimhotel.has('categories'));
jimhotel.delete(2);
//jimhotel.clear();
console.log(jimhotel);
console.log(jimhotel.size);

////
const arr=[1,2];
jimhotel.set(arr,'Test');
console.log(jimhotel.get(arr));

//dorm manipulation
jimhotel.set(document.querySelector('h1'),'Tittle');

//new way of implementing a map without use of set
//putting a question in programming
const quiz=new Map([
  [`question`,`What is the best programming language in the world?`],
  [1,'C Programming'],
  [2,'java Programming'],
  [3,'Javascript Programming'],
  ['correct',3],
  [true,'Correct answer'],
  [false,'Try again!']
]);
console.log(quiz);

//looping the question
//displaying the quiz map
console.log(quiz.get('question'));
for(const [key,value] of quiz){
  if(typeof key ==='number') 
  console.log(`answer ${key}:${value}`);
}
//display the quiz in prompt
//receive answer
//dispaly answer
const answer=Number(prompt('your answer'));

 const anw=answer===quiz.get('correct')
 ?quiz.get(true):quiz.get(false);
console.log(anw);
//another implementation
console.log(quiz.get(quiz.get('correct') ===answer));

//the above map is of an array holding other arrays
//meaning it is the same as an aray in an object called by the following 
//syntax
const obje=Object.entries(restaurant.openingHours);
console.log(obje); 
//hence we can convert an object into a map
//syntax
const objMapConverter=new Map(Object.entries(restaurant.openingHours));
console.log(objMapConverter); 
//converting map into an array
const mapArrConverter=[...quiz];
console.log(mapArrConverter);
//
console.log([...quiz.keys()]);
console.log([...quiz.values()]);
console.log([...quiz.entries()]);

//















