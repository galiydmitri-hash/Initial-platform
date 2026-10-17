const list = document.querySelectorAll('.list')
const nav = document.querySelector('.nav')

export default function listWidth(){
    const navWidht = nav.getBoundingClientRect().width

    list.forEach(el => el.style.width = `${navWidht}px`)
}