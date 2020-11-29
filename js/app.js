const ul = document.querySelector('.nav-list');
const li = Array.from(ul.children)

ul.addEventListener("click", (e) => {
    const targetLi = e.target.closest('li');

    // Code stops if it is not a li item
    if (!targetLi) return

    const activeLi = document.querySelector(".active")
    // const targetIndex = li.findIndex(dot => dot === targetLi);

    activeLi.classList.remove('active');
    targetLi.classList.add('active');
    console.log('Previous Active Li:', activeLi)
    console.log('Now Target Li:', targetLi)
})
