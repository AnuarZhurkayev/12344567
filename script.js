document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const c = document.querySelector('.comment-input:focus');
        if (c) {
            const t = c.value;
            console.log('Коммент:', t);
            c.value = '';
        }
    }
});
