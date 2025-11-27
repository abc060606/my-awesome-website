document.addEventListener('DOMContentLoaded', () => {
    const h1 = document.querySelector('h1');
    h1.addEventListener('click', () => {
        h1.style.color = '#ff5722';
        alert('你点击了标题！');
    });
});