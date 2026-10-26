const expretionContainer = document.querySelector('.expretion-container');
const totalSlides = Array.from(expretionContainer.children).length;

export default function animation() {
    const windowWidth = window.innerWidth;
    
    let count = 0;
    let movingForward = true; 

    const transform = [];
    for (let i = 0; i < totalSlides; i++) {
        transform.push(windowWidth * i);
    }

    setInterval(() => {
        if (movingForward) {
            count++;
            if (count >= totalSlides - 1) {
                movingForward = false;
            }
        } else {
            count--;
            if (count <= 0) {
                movingForward = true;
            }
        }

        expretionContainer.style.transform = `translateX(-${transform[count]}px)`;
    }, 5000);
}
