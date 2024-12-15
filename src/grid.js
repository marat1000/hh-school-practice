const grid = document.createElement('div');
grid.className = 'grid';
document.body.appendChild(grid);

document.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.code === 'KeyG') {
        grid.classList.toggle('grid_visible');
    }
});

console.log(4);

// 'eslint --fix' example

// const foo = true;
// if (!!foo) {
//     // ...
// }
