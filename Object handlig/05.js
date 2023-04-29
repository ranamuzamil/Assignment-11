// 5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.
class Cylinder{
    constructor(radius,height){
        this.radius = radius,
        this.height = height
    }
    getvolume() {
        const volume = Math.PI * this.radius ** 2 * this.height;
        return volume.toFixed(4);
    }
}
// As a example
const cylinder = new Cylinder(2, 3);
console.log(cylinder.getvolume());
