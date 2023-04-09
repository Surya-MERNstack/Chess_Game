// window.addEventListener('load' , () => {
//     const loader = document.querySelector(".loader")

//     loader.classList.add('loader-hidden')

//     loader.addEventListener("transitionend", () => {
//           document.body.removeChild('loader')
//     })
// })

window.addEventListener('load' , () => {
    const loader = document.querySelector('.loaders');

    loader.classList.add('loaders-hidden');

    loader.addEventListener('transend', () => {
     document.body.removeChild('loaders')
    })
})