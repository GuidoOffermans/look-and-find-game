const images = [  
  { name: 'spaceship', 
    src: 'http://www.pngmart.com/files/3/Spaceship-PNG-Transparent-Image.png'
   },
   { name: 'car', 
    src: 'http://www.pngmart.com/files/3/Spaceship-PNG-Photos.png'
  },
  { name: 'spaceship', 
    src: 'http://www.pngmart.com/files/3/Spaceship-PNG-File.png'
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
  img.style = 'height: 100px; position: absolute; margin: 10px;'
  img.style.bottom = getRandomInt(30).toString() + 'rem';
  img.style.left= getRandomInt(60).toString() + 'rem';
  img.onclick = function(){addToFoundItems(images[i]);
    this.style.display='none';
  };

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
  if (foundItems.length === images.length) {
    setTimeout(function(){ alert("job well done!"); }, 100);
    
  }
}

let userName = prompt("Please enter your name")
if (userName != null) {
  document.getElementById("user").innerHTML =
  userName[0].toUpperCase() + userName.slice(1) + "'s   Items";
}








