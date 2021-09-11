const reviews = [
    {
      id: 1,
      name: "Maria Necula",
      job: "muzician",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque aspernatur aliquid voluptatum voluptates ullam iure dolorem ipsam.",
    },
    {
      id: 2,
      name: "Sara Penes",
      job: "jurnalist",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptates qui voluptatem distinctio possimus hic aliquid repudiandae ratione odit illo!",
    },
    {
      id: 3,
      name: "Petru Dan",
      job: "economist",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore labore dolore dolor dolorem quae consequuntur?",
    },
    {
      id: 4,
      name: "Denis Lemn",
      job: "berar",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, odit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, facere? ",
    },
  ];

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// now we set the starting item and load initial item
let currentItem = 0;

window.addEventListener('DOMContentLoaded', function() {
showPerson(currentItem);
});

function showPerson(person){
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

//show next person
nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length-1){
        currentItem = 0;
    }
    showPerson(currentItem);
});

//show previous person
prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem<0){
        currentItem = reviews.length-1;
    }
    showPerson(currentItem);
});

//show random person
randomBtn.addEventListener('click', function(){
    currentItem = Math.floor(Math.random()*reviews.length);
    showPerson(currentItem);
})