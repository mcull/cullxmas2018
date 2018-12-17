
  function lightbulb(lightcolor, rotation) {
    this.color = lightcolor;
    //this.rotation = rotation;
    this.brightness = floor(random(128,256));
    this.direction = 1;
    this.render = function(x, y) {
      noStroke();
      fill(color(red(this.color), green(this.color), blue(this.color), this.brightness));
      if(this.brightness >= 256 || this.brightness <= 128) {
        this.direction *= -1
      }
      this.brightness += 1 * this.direction;
      ellipse(x, y, 8 + 5 * this.brightness/255, 8 + 5 * this.brightness/255);

    }

  }
