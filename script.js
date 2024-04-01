document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.boxShadow = '0 0 10px #F3FFFD';
    });
    item.addEventListener('mouseout', () => {
        item.style.boxShadow = 'none';
    });
});
