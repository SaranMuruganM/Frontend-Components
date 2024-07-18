const container=document.getElementById('carousal');
const carousalDescription=document.getElementById('description');
const content=document.querySelector('h3');
let imgIndex=-1;
const imageDescription = [
  {
    names: "Forest",
    url: "./assets/12953559_Scene-24.jpg",
    description:
      '"No man ever steps in the same river twice, for its not the same river and he is not the same man."',
  },
  {
    names: "sunset",
    url: "./assets/20988.jpg",
    description:
      '"No sun outlasts its sunset but will rise again and bring the dawn."',
  },
  {
    names: "Fog",
    url: "./assets/51.jpg",
    description:
      '"Sometimes when you lose your way in the fog, you end up in a beautiful place!<br> Don’t,be afraid of getting lost!"',
  },
  {
    names: "Mountain",
    url: "./assets/36668.jpg",
    description: '"Our peace shall stand as firm as rocky mountains."',
  },
];
const resetAnimation=()=>{
    content.style.animation='none';
    content.offsetHeight;
    content.style.animation = " imgSlider 2s";
}


const next=()=>{
    imgIndex++;
    if(imgIndex == imageDescription.length)
    {
        imgIndex=0;
    }
    console.log(imgIndex);
    container.style.backgroundImage = `url('${imageDescription[imgIndex].url}')`;
    carousalDescription.innerHTML=imageDescription[imgIndex].description;
    resetAnimation();

  }
  const previous=()=>{
    imgIndex--;
    if(imgIndex < 0)
    {
      imgIndex=imageDescription.length-1;
    }
    container.style.backgroundImage = `url('${imageDescription[imgIndex].url}')`;
    carousalDescription.innerHTML=imageDescription[imgIndex].description;
    resetAnimation();
}

if(imgIndex==-1) {
  next();
}
