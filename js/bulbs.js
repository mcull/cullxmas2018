
  function lightbulb(lightcolor, rotation) {
    this.color = lightcolor;
    this.minBrightness = 80;
    this.maxBrightness = 230;

    //this.rotation = rotation;
    this.brightness = floor(random(this.minBrightness,this.maxBrightness));
    this.direction = 1;
    this.render = function(x,y) {
      noStroke();
      fill(color(red(this.color), green(this.color), blue(this.color), this.brightness));
      if(this.brightness >= this.maxBrightness || this.brightness <= this.minBrightness) {
        this.direction *= -1
      }
      this.brightness += random(0,3) * this.direction;
      var radius = 8 + 3 * this.brightness/this.maxBrightness
      ellipse(x, y+7, radius, radius+6);
    }

  }
