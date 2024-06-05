document.getElementById('toggle-button').addEventListener('click', function() {
    let fullText = document.getElementById('full-text');
    let button = document.getElementById('toggle-button');
    
    if (fullText.classList.contains('hidden')) {
        fullText.classList.remove('hidden');
        button.textContent = 'See less';
    } else {
        fullText.classList.add('hidden');
        button.textContent = 'See more';
    }
});
