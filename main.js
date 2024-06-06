document.getElementById('toggle-button').addEventListener('click', function() {
    let fullText = document.getElementById('full-text');
    let button = document.getElementById('toggle-button');
    let movile = document.querySelector('.section4')
    let text = document.querySelector('.text')
    
    if (fullText.classList.contains('hidden')) {
        fullText.classList.remove('hidden');
        button.textContent = 'See less';
    } else {
        fullText.classList.add('hidden');
        button.textContent = 'See more';
    }

    if (window.screen.width <= '400') {
        movile.classList.replace('section4','section4-400')
        text.classList.add('movile-400')
    }else if (window.screen.width <= '450') {
        movile.classList.replace('section4','section4-450')
        text.classList.add('movile')
    }else if (window.screen.width <= '690') {
        movile.classList.replace('section4','section4-690')
    }else if (window.screen.width <= '880') {
        movile.classList.replace('section4','section4-880')
    }else if (window.screen.width <= '1030') {
        movile.classList.replace('section4','section4-1030')
    }else if (window.screen.width <= '1210') {
        movile.classList.replace('section4','section4-1210')
    }else if (window.screen.width <= '2000') {
        movile.classList.replace('section4','section4-2000')
    }
})


addEventListener('load', () =>{
    if (window.screen.width <= '600') {
        let web = document.querySelectorAll('.btn-visit')
        let code = document.querySelectorAll('.btn-code')
        for (let i = 0; i < web.length; i++) {
            web[i].innerText = 'Web'
        }
        for (let i = 0; i < web.length; i++) {
            code[i].innerText = 'Code'
        }
    }
})