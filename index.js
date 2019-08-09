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
}

for(let i = 0; i < images.length; i++) {
  const main = document.getElementById('searchField')
  const img = document.createElement('img')
  img.alt = images[i].name
  img.src = images[i].src;
  img.style = 'height: 100px; position: absolute;'
  img.style.bottom = getRandomInt(30).toString() + 'rem';
  img.style.left= getRandomInt(60).toString() + 'rem';
  img.onclick = function(){addToFoundItems(images[i])};

  main.appendChild(img)
}

const foundItems = [];
console.log(foundItems)

const addToFoundItems = (image) => {
  
  if(!foundItems.includes(image)){
    foundItems.push(image)
    displayInFooter()
    return console.log(foundItems)
  }
  console.log('allready in')
  return null
}

const displayInFooter = () => {
  const foundItemsSection = document.getElementById('foundItems')
  foundItemsSection.innerHTML = "";

  for(let i = 0; i < foundItems.length; i++) {
      const img = document.createElement('img')
      img.alt = foundItems[i].name
      img.src = foundItems[i].src;
      img.style = 'height: 100px; margin:10px;'
      foundItemsSection.appendChild(img)
  }
}










