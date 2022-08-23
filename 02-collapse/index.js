let collapsibleBtn = document.querySelector('.collapsible__button');
let textContent = document.querySelector('.collapsible__content');
let btnTextVisible = document.querySelector('.collapsible__action--visible');
let btnTextHidden = document.querySelector('.collapsible__action--hidden');

btnTextHidden.style.display = 'none';

let changeBtnText = function () {
    if (btnTextHidden.style.display === 'none') {
        btnTextHidden.style.display = 'block';
        btnTextVisible.style.display = 'none';
    } else {
        btnTextVisible.style.display = 'block';
        btnTextHidden.style.display = 'none';
    }
}

let collapse = textContent.animate([
    { transform: 'translateY(0px)', opacity: 1 },
    { transform: 'translateY(-10px)', opacity: 0 }
], {
        duration: 700,
        easing: "ease-in-out",
        iterations: 1,
        fill: "forwards"
    }
)

collapse.pause();

collapsibleBtn.addEventListener("click", () => {
    if (collapse.playState === 'paused') {
        collapse.play();
    } else {
        collapse.reverse();
    }
    changeBtnText();
});