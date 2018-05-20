function Circle() {
    this.rad = -Math.PI / (3-1);
    this.r = 0;
    this.pgr = settings[1];
    this.speed = settings[0];
    this.x = random(0, width - this.pgr);
    this.y = random(0, height - this.pgr);

    this.show = function () {
        stroke("#c3c3c3");
        fill(0, 0, 255);
        ellipse(this.x, this.y, this.r, this.r);
    }

    this.update = function () {
        this.r = this.pgr * Math.cos(this.rad);
        this.rad += 0.02;
    }

    this.mouseIn = function () {
        if (dist(mouseX, mouseY, this.x, this.y)<this.r/2) {
            return true;
        } else {
            return false;
        }
    }
    this.mouseOut = function() {
        if (dist(mouseX, mouseY, this.x, this.y)>this.r){
            return true;
        }else {return false;}
    }

}
