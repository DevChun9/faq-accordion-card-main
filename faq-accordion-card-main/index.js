document.querySelectorAll('.accordion__question').forEach((item) => {
    item.addEventListener('click', (Event) => {
        console.log("click!");
        item.classList.toggle('open');
        item.nextElementSibling.classList.toggle('open');
    })
})