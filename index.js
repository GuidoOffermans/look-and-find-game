const images = [  
  { name: 'spaceship', 
    src: 'https://i.ytimg.com/vi/vzLeq2pRgIY/maxresdefault.jpg'
   },
   { name: 'car', 
    src: 'https://images-na.ssl-images-amazon.com/images/I/91FibnTnD8L._SY355_.png'
   },
];


const getRandomInt = (max) => {
   return Math.floor(Math.random() * max)
  // console.log(currentPicture)
  // console.log(images[currentPicture])
  
}

getRandomInt();

for(let i = 0; i < images.length; i++) {
  const main = document.getElementById('searchField')
  const img = document.createElement('img')
  
  img.alt = images[i].name
  img.src = images[i].src;
  img.style = 'height: 50px; position: absolute;'
  img.style.bottom = getRandomInt(30).toString() + 'rem';
  img.style.left= getRandomInt(60).toString() + 'rem';

  main.appendChild(img)
  console.log(main)
  
}














