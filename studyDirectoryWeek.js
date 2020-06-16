let w = 320, h = 240;
const image = new Image();

function fixSize() {
    w = window.innerWidth;
    h = window.innerHeight;
    const canvas = document.getElementById('kaleidoscopeCanvas');
    canvas.width = w;
    canvas.height = h;
}

function pageLoad() {

    window.addEventListener("resize", render);
    render();

}

function render() {

    const canvas = document.getElementById('studyDirectoryWeekCanvas');
    const context = canvas.getContext('2d');

    context.fillStyle = '#e8e7e9';
    context.fillRect(0,0,w,h);

    context.fillStyle = '#55366b';
    context.font = '50px "Roboto Slab"';
    context.fillText("It is week 34", 20, 80);

}
