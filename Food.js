class Food {
       
      constructor (){

        this.foodStock = 0
        this.lastFed
        this.image = loadImage ("images/Milk.png")

      }  


      updateFoodStock (foodStock){

      this.foodStock = foodStock

      }

      getFedTime (lastFed){

      this.lastFed = lastFed

      }

      deductFood () {

      if (this.foodStock > 0){
        this.foodStock = this.foodStock - 1;
      }

      }


      getFoodStock (){

      return this.foodStock

      }

      display (){

      var x = 360
      var y = 150
      imageMode (CENTER)
     // image (this.image, 720, 220, 60, 60)
      if (this.foodStock != 0){
        for (var i = 0; i < this.foodStock; i++){
          if (i % 10 === 0){
            x = 360;
            y = y+50
          }
          image (this.image, x, y, 50, 50)
          x = x + 30
        }
      }

      }
}