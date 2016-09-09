var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var products = [
  new Product({
    imagePath: "http://vignette2.wikia.nocookie.net/mario/images/6/60/SMBBoxart.png/revision/latest?cb=20120609143443",
    title: "Super Mario Bros",
    description: "Awesome Game!!!",
    price: 10
  }),
  new Product({
    imagePath: "http://vignette2.wikia.nocookie.net/mario/images/6/60/SMBBoxart.png/revision/latest?cb=20120609143443",
    title: "Legend of Zelda",
    description: "Awesome Game!!!",
    price: 10
  }),
  new Product({
    imagePath: "http://vignette2.wikia.nocookie.net/mario/images/6/60/SMBBoxart.png/revision/latest?cb=20120609143443",
    title: "Kirby",
    description: "Awesome Game!!!",
    price: 10
  }),
  new Product({
    imagePath: "http://vignette2.wikia.nocookie.net/mario/images/6/60/SMBBoxart.png/revision/latest?cb=20120609143443",
    title: "Pokemon",
    description: "Awesome Game!!!",
    price: 10
  }),
  new Product({
    imagePath: "http://vignette2.wikia.nocookie.net/mario/images/6/60/SMBBoxart.png/revision/latest?cb=20120609143443",
    title: "Donkey Kong",
    description: "Awesome Game!!!",
    price: 10
  }),
  new Product({
    imagePath: "http://vignette2.wikia.nocookie.net/mario/images/6/60/SMBBoxart.png/revision/latest?cb=20120609143443",
    title: "Yoshi's Story",
    description: "Awesome Game!!!",
    price: 10
  }),
];

var done = 0;
for (var i = 0; i < products.length; i++){
  products[i].save(function(err, result){
    done++;
    if (done = products.length){
      exit();
    }
  });
}

function exit(){
  mongoose.disconnect();
}
