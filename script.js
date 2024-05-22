
// Функция для обработки нажатия на кнопку "Нравится"
function likePost(event) {
    const likeButton = event.target;
    const likeCount = likeButton.parentNode.querySelector(".like-count");
    let currentLikes = parseInt(likeCount.textContent);
    likeCount.textContent = currentLikes + 1;
}

// Получаем все кнопки "Нравится" на странице
const likeButtons = document.querySelectorAll('.like-btn');
likeButtons.forEach(button => {
    button.addEventListener('click', likePost);
});

});
function commentPost(event) {
    const commentButton = event.target;
    const post = commentButton.closest('.post');
    const commentInput = post.querySelector('.comment-input');
    const commentText = commentInput.value;
    console.log('Комментирование поста:', commentText);
    commentInput.value = ''; 
}


const commentInputs = document.querySelectorAll('.comment-input');
commentInputs.forEach(input => {
    input.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') { 
            commentPost(event);
        }
    });
});
