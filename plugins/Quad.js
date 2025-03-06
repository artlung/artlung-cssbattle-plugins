function run(code) {

    return `<p><p x><p y><p x y><style>
* {margin:0}
body {
display: flex;
flex-wrap: wrap;
}
p {
width: 200;
height: 150;
background: linear-gradient(45deg,red,yellow);
scale: var(--x, 1) var(--y, 1);
}
[x] {
--x: -1
}
[y] {
--y: -1
}`;
}
