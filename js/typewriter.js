var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('2D Designer')
    .pauseFor(2500)
    .deleteAll()
    .typeString('3D Designer')
    .pauseFor(2500)
    .deleteChars(8)
    .typeString('<strong>Designer</strong>')
    .pauseFor(2500)
    .start();