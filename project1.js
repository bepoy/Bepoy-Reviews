let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [ {
    quote: `"fat."`,
    person: `-Vivi`
},

{
    quote: `"Beep-poy"`,
    person: `-Rk`
},

{
    quote: `"Rotund"`,
    person: `-Famiu`
},

{
    quote: `"beppy is smarter than most cats"`,
    person: `-Hahamid`
},

{
    quote: `"Fuckass ai users. They're beyond banning just kill them"`,
    person: `-Guppi`
},

{
    quote: `"beppy cute biral"`,
    person: `-Mogammel`
},
{
    quote: `"Bepoy"`,
    person: `-Susfiq`
},

{
    quote: `"VERY gashu"`,
    person: `-Rimco`

},

{
    quote: `"there are no words I can say that would be enough to capture beppi's essence appropriately"`,
    person: `-sharmin`

},
];

btn.addEventListener('click', function() {

let random = Math.floor(Math.random() * quotes.length); 

quote.innerText = quotes[random].quote;
person.innerText = quotes[random].person;
})