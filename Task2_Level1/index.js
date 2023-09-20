window.addEventListener("DOMContentLoaded", () => {
    let open = false
    document.getElementsByClassName("icon")[0].addEventListener("click", () => {
        open = !open
        if (open === true)
            document.getElementsByClassName("MopNavSection")[0].style.display = "flex"//if true display 
        else
            document.getElementsByClassName("MopNavSection")[0].style.display = "none" //if false none

    })

    //////////////////////////////////////////////////////////////////////////////////////////
    let arr = document.querySelectorAll(".Color li");
    document.body.classList.add(localStorage.getItem("Color"))
    let cont = []
    for (let i = 0; i < arr.length; i++) {
        cont.push(arr[i].getAttribute("data-color"))
        arr[i].addEventListener('click', () => {

            document.body.classList.remove(...cont)
            document.body.classList.add(arr[i].getAttribute("data-color"))
            localStorage.setItem("Color", arr[i].getAttribute("data-color"))
        })
    }
})