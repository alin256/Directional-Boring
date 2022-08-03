const p5 = require('node-p5');
const directionalBoring = require('./sketch');

function sketch(p) {
    p.setup = () => {
        directionalBoring.setup();
    }
    p.draw = () => {
        directionalBoring.draw();
    }
}

let p5Instance = p5.createSketch(sketch);
