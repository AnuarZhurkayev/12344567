document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const commentInput = document.querySelector('.comment-input:focus');
        if (commentInput) {
            const commentText = commentInput.value;
            console.log('Комментирование поста:', commentText);
            commentInput.value = '';
        }
    }
});
