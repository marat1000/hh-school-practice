const grid = document.createElement('div');
grid.className = 'grid';
document.body.appendChild(grid);

// if (false) {
//     let k = 2;
// }

document.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.code === 'KeyG') {
        grid.classList.toggle('grid_visible');
    }
});
