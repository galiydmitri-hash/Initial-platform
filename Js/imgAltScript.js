export default function imgAltScript(){
    const img = document.querySelectorAll('img')

    img.forEach((img) => {
        const fullSrc = img.src;
        const imgName = fullSrc.substring(fullSrc.lastIndexOf('/') + 1);
        img.setAttribute('alt', `${imgName}`);
    })
}