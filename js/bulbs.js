
  function lightbulb(lightcolor, x, y, rotation) {
    this.color = lightcolor;
    this.x = x;
    this.y = y;
    //this.rotation = rotation;
    this.brightness = floor(random(128,256));
    this.direction = 1;
    this.render = function() {
      noStroke();
      fill(color(red(this.color), green(this.color), blue(this.color), this.brightness));
      if(this.brightness >= 256 || this.brightness <= 128) {
        this.direction *= -1
      }
      this.brightness += 1 * this.direction;
      ellipse(this.x, this.y, 8 + 5 * this.brightness/255, 8 + 5 * this.brightness/255);

    }

  }
