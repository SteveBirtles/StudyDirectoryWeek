let w = 0, h = 0;
const image = new Image();

function pageLoad() {

    window.addEventListener("resize", render);
    render();

}

function render() {

    w = window.innerWidth;
    h = window.innerHeight;
    const canvas = document.getElementById('studyDirectoryWeekCanvas');
    canvas.width = w;
    canvas.height = h;

    const context = canvas.getContext('2d');

    context.fillStyle = '#e8e7e9';
    context.fillRect(0,0,w,h);

    context.fillStyle = '#55366b';
    context.font = '32px "Roboto Slab,serif"';
    context.textBaseline = "top";
    context.textAlign = "end";

    context.fillText("It is week 34", w, 0);

}
