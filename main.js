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