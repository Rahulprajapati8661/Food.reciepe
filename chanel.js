document.addEventListener('DOMContentLoaded', function() {
    const home = document.getElementById('home');
    const video = document.getElementById('video');
    const foodItem = document.getElementById('food-item');
    const short = document.getElementById('Short');
    const community = document.getElementById('Community');
  
    const containerHome = document.querySelector('.containerHome');
    const containerVideo = document.querySelector('.containerVideo');
    const containerfooditem = document.querySelector('.containerfooditem');
    const containershort = document.querySelector('.containershort');
    const containercommunity = document.querySelector('.containercommunity');
  
    home.addEventListener('click', function() {
      showContainer(containerHome);
    });
  
    video.addEventListener('click', function() {
      showContainer(containerVideo);
    });
  
    foodItem.addEventListener('click', function() {
      showContainer(containerfooditem);
    });
  
    short.addEventListener('click', function() {
      showContainer(containershort);
    });
  
    community.addEventListener('click', function() {
      showContainer(containercommunity);
    });
  
    function showContainer(container) {
      const allContainers = document.querySelectorAll('.containerHome, .containerVideo, .containerfooditem, .containershort, .containercommunity');
      allContainers.forEach(c => {
        c.style.display = 'none';
      });
  
      container.style.display = 'block';
    }
  });

  //community
  document.addEventListener('DOMContentLoaded', function() {
    const commentButton = document.querySelector('.comment-button');
  
    commentButton.addEventListener('click', function() {
      const nameInput = document.querySelector('.comment-name').value;
      const commentInput = document.querySelector('.comment-text').value;
  
      const newComment = document.createElement('div');
      newComment.classList.add('comment');
  
      const commentUser = document.createElement('div');
      commentUser.classList.add('comment-user');
      commentUser.textContent = nameInput;
  
      const commentText = document.createElement('div');
      commentText.classList.add('comment-text');
      commentText.textContent = commentInput;
  
      newComment.appendChild(commentUser);
      newComment.appendChild(commentText);
  
      const commentsSection = document.querySelector('.comments');
      commentsSection.appendChild(newComment);
  
      document.querySelector('.comment-name').value = '';
      document.querySelector('.comment-text').value = '';
    });
  });