const reviews = [
    {
      id: 1,
      name: 'Sara Jones',
      job: 'model',
      img: 'Images/rafaella-mendes-diniz-et_78QkMMQs-unsplash.jpg',
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'Ian johnson',
      job: 'web designer',
      img: 'Images/ian-dooley-d1UPkiFd04A-unsplash.jpg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'Helena jones',
      job: 'mechanical engineer',
      img: 'Images/patricio-n2WT4H30L9k-unsplash.jpg',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'bill anderson',
      job: 'musician',
      img: 'Images/prince-akachi-4Yv84VgQkRM-unsplash.jpg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    }
];
const imgProfile = document.querySelector('#person-img');
const nameProfile = document.querySelector('#author');
const jobProfile = document.querySelector('#job');
const textProfile = document.querySelector('#info');

const btnPrev = document.querySelector('.prev-btn');
const btnNext = document.querySelector('.next-btn');
const btnSurprise = document.querySelector('.random-btn')

var currentProfile = -1;

btnPrev.addEventListener('click', prevProfile);
btnNext.addEventListener('click', nextProfile);
btnSurprise.addEventListener('click', randomProfile);

nextProfile()

function nextProfile(){
  currentProfile++; 
  if(currentProfile > reviews.length - 1){
    currentProfile = 0;
  }
  profile(currentProfile);
}

function prevProfile(){
  currentProfile--; 
  if(currentProfile < 0){
    currentProfile = reviews.length - 1;
  }
  profile(currentProfile);
}

function randomProfile(){
  let chosenProfile = '';
  chosenProfile = Math.floor(Math.random() * reviews.length);
  console.log(chosenProfile)
  profile(chosenProfile);
}

function profile(n){
  imgProfile.setAttribute('src', reviews[n].img);
  nameProfile.textContent = reviews[n].name;
  jobProfile.textContent = reviews[n].job;
  textProfile.textContent = reviews[n].text;
}

  