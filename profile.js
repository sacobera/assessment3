let faveColor= document.querySelector("#color");
faveColor.addEventListener('click', () => {
	alert ('My favorite color is the color of the ocean');
}
)

let favePlace= document.querySelector("#place");
favePlace.addEventListener('click', () => {
	alert ('I love Hawaii! ');
}
)

let faveRitual= document.querySelector("#ritual");
faveRitual.addEventListener('click', () => {
	alert ('I love waking up early, so I can manifest and meditate to start the day right. ');
}
)

let randomRestaurant = {
    randomRestaurantName: "",
    findRestaurant: function() {
      var restaurantName = Math.random();
      if (restaurantName < 0.20) {
        this.randomRestaurantName = "Maharaja Foods";
      } else if (restaurantName < 0.40) {
        this.randomRestaurantName = "Taqueria El Ranchero";
      } else if (restaurantName < 0.60) {
        this.randomRestaurantName = "Maui Mike's Fire Roasted Chicken";
      } else if (restaurantName < 0.80) {
        this.randomRestaurantName = "S7 Icy Bubble";
      } else {
        this.randomRestaurantName = "Steak-To-Go";
      }
    }
  };
  
  var randomRestaurantButton = document.getElementById('randomRestaurantName');
  randomRestaurantButton.addEventListener('click', function() {
    randomRestaurant.findRestaurant();

    document.getElementById("restaurantNameDisplay").neighborhood.html = randomRestaurant.randomRestaurantName;
    
  });