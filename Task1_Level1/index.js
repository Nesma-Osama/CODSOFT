window.addEventListener("DOMContentLoaded", () => {
    ////////////////////////////project objects
    const Menu = {
        image: "https://th.bing.com/th/id/OIP.MMw7QB132qdE18heNEuSbgHaFj?pid=ImgDet&rs=1",
        name: "Menu",
        description: "React Native App",
        Link: "https://github.com/monsReact/Menu/tree/main"
    }
    const Task = {
        image: "https://i.pinimg.com/originals/9f/2e/7f/9f2e7fd6cc25d63d103a922de166fd2d.jpg",
        name: "Tasks App",
        description: "React Native App",
        Link: "https://github.com/Nesma-Osama/Tasks-App"
    }

    const Resume = {
        image: "https://th.bing.com/th/id/OIP.oRRZTgJjeQ90fdGsNQbVDwHaE7?pid=ImgDet&rs=1",
        name: "Resume Builder",
        description: "React and Mongoose project ",
        Link: "https://github.com/monsReact/ResumeBuilder"
    }


    const Portfolio = {
        image: "https://cdn.dribbble.com/users/3416941/screenshots/10783906/final__2__4x.jpg",
        name: "Portfolio",
        description: "Html,CSS and JavaScript project",
        Link: "https://github.com/Nesma-Osama/Personal-Portfolio"
    }
    const Paint = {
        image: "https://i.ytimg.com/vi/2fJgo1I7Qtk/maxresdefault.jpg",
        name: "Paint For Kids",
        description: "OOP project ",
        Link: "https://github.com/Nesma-Osama/Paint-for-Kids"
    }
    const Processor = {
        image: "https://www.researchgate.net/profile/Amar-Dash/publication/276732451/figure/fig1/AS:361016480288775@1463084444461/Different-schedulers-and-Process-states-in-CPU-Scheduling.png",
        name: "Processor Scheduler",
        description: "DS project ",
        Link: "https://github.com/Nesma-Osama/Process-Scheduler-"
    }

    const AES = {
        image: "https://www.researchgate.net/profile/Mazen-Elbeheiry/publication/333376273/figure/fig4/AS:762438609805312@1558790938099/Symmetric-key-encryption-and-decryption-35.ppm",
        name: "AES-encryption-and-decryption",
        description: "Verilog ",
        Link: "https://github.com/Nesma-Osama/-AES-encryption-and-decryption."
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const arr = [Menu, Task, Resume, Portfolio, Paint, Processor, AES]//put in array
    let count = 0//initially
    let x = 0
    Right()//call it for first time

    function left() {

        list = ""
        if (count === arr.length && arr.length % 3 !== 0)//beacuse in last project page can find 1 ,2 ,3 project 
            x = count - count % 3
        else
            x = count - 3//count=6 mean i want the page of 0 1 2 so x=3 and i=x-3=0 i=0 1 2 
        i = x - 3
        for (i; i < x; i++) {
            if (i >= 0) {
                list += `<div class="Project">`
                list += `<img src=${arr[i].image} class="ProjectImage">`
                list += `<div class="ProjectSection">`
                list += `<h2 class="ProjectName">${arr[i].name}</h2>`
                list += `<div class="ProjectInfo">`
                list += `<h3 class="ProjectDes">${arr[i].description}</h3>`
                list += `<a href=${arr[i].Link} target="_blank" class="ProjectLink">See Code</a>`
                list += "</div>"
                list += "</div>"
                list += "</div>"

            }

        }
        document.getElementsByClassName("ProjectsPart")[0].removeChild(document.getElementsByClassName("ProjectsPart")[0].firstChild)//if has a child

        const Ele = document.createElement("div")//create child
        Ele.innerHTML = list
        Ele.className = "ProjectPart"
        document.getElementsByClassName("ProjectsPart")[0].appendChild(Ele)
        count = x//if x=3 count will be 3 because i print 0 1 2 so i want to print 3 4 5

        if (count < 4)//first page
            document.getElementsByClassName("Left")[0].classList.add("hidden")
        else
            document.getElementsByClassName("Left")[0].classList.remove("hidden")
        if (count === arr.length)
            document.getElementsByClassName("Right")[0].classList.add("hidden")
        else
            document.getElementsByClassName("Right")[0].classList.remove("hidden")
    }

    function Right() {
        list = ""
        i = count
        for (i; i < count + 3; i++) {
            if (i < arr.length) {//to get the right elements
                list += `<div class="Project">`
                list += `<img src=${arr[i].image} class="ProjectImage">`
                list += `<div class="ProjectSection">`
                list += `<h2 class="ProjectName">${arr[i].name}</h2>`
                list += `<div class="ProjectInfo">`
                list += `<h3 class="ProjectDes">${arr[i].description}</h3>`
                list += `<a href=${arr[i].Link} target="_blank" class="ProjectLink">See Code</a>`
                list += "</div>"
                list += "</div>"
                list += "</div>"

            }
            else break
        }
        document.getElementsByClassName("ProjectsPart")[0].removeChild(document.getElementsByClassName("ProjectsPart")[0].firstChild)//if has a child

        const Ele = document.createElement("div")//create child
        Ele.innerHTML = list
        Ele.className = "ProjectPart"
        document.getElementsByClassName("ProjectsPart")[0].appendChild(Ele)
        count = i

        if (count < 4)
            document.getElementsByClassName("Left")[0].classList.add("hidden")
        else
            document.getElementsByClassName("Left")[0].classList.remove("hidden")
        if (count === arr.length)//to hidden arrow
            document.getElementsByClassName("Right")[0].classList.add("hidden")
        else
            document.getElementsByClassName("Right")[0].classList.remove("hidden")

    }

    document.getElementsByClassName("Left")[0].addEventListener("click", () => {
        left()
    })

    document.getElementsByClassName("Right")[0].addEventListener("click", () => {
        Right()
    })
    ///////////////////////////////////////////////////////////////
    let countMop = 0
    let xMop = 0
    document.body.s

    RightMop()
    function leftMop() {

        list = ""


        xMop = countMop - 1//count=6 mean i want the page of 0 1 2 so x=3 and i=x-3=0 i=0 1 2 
        i = xMop - 1
        for (i; i < xMop; i++) {
            if (i >= 0) {
                list += `<div class="Project">`
                list += `<img src=${arr[i].image} class="ProjectImage">`
                list += `<div class="ProjectSection">`
                list += `<h2 class="ProjectName">${arr[i].name}</h2>`
                list += `<div class="ProjectInfo">`
                list += `<h3 class="ProjectDes">${arr[i].description}</h3>`
                list += `<a href=${arr[i].Link} target="_blank" class="ProjectLink">See Code</a>`
                list += "</div>"
                list += "</div>"
                list += "</div>"

            }

        }
        document.getElementsByClassName("ProjectsPartMop")[0].removeChild(document.getElementsByClassName("ProjectsPartMop")[0].firstChild)//if has a child

        const Ele = document.createElement("div")//create child
        Ele.innerHTML = list
        Ele.className = "ProjectPart"
        document.getElementsByClassName("ProjectsPartMop")[0].appendChild(Ele)
        countMop = xMop//if x=3 count will be 3 because i print 0 1 2 so i want to print 3 4 5

        if (countMop < 2)//first page
            document.getElementsByClassName("LeftMop")[0].classList.add("hidden")
        else
            document.getElementsByClassName("LeftMop")[0].classList.remove("hidden")
        if (countMop === arr.length)
            document.getElementsByClassName("RightMop")[0].classList.add("hidden")
        else
            document.getElementsByClassName("RightMop")[0].classList.remove("hidden")

    }

    function RightMop() {
        list = ""
        i = countMop
        for (i; i < countMop + 1; i++) {
            if (i < arr.length) {//to get the right elements
                list += `<div class="Project">`
                list += `<img src=${arr[i].image} class="ProjectImage">`
                list += `<div class="ProjectSection">`
                list += `<h2 class="ProjectName">${arr[i].name}</h2>`
                list += `<div class="ProjectInfo">`
                list += `<h3 class="ProjectDes">${arr[i].description}</h3>`
                list += `<a href=${arr[i].Link} target="_blank" class="ProjectLink">See Code</a>`
                list += "</div>"
                list += "</div>"
                list += "</div>"

            }
            else break
        }
        document.getElementsByClassName("ProjectsPartMop")[0].removeChild(document.getElementsByClassName("ProjectsPartMop")[0].firstChild)//if has a child

        const Ele = document.createElement("div")//create child
        Ele.innerHTML = list
        Ele.className = "ProjectPart"
        document.getElementsByClassName("ProjectsPartMop")[0].appendChild(Ele)
        countMop = i

        if (countMop < 2)
            document.getElementsByClassName("LeftMop")[0].classList.add("hidden")
        else
            document.getElementsByClassName("LeftMop")[0].classList.remove("hidden")
        if (countMop === arr.length)//to hidden arrow
            document.getElementsByClassName("RightMop")[0].classList.add("hidden")
        else
            document.getElementsByClassName("RightMop")[0].classList.remove("hidden")

    }

    document.getElementsByClassName("LeftMop")[0].addEventListener("click", () => {
        leftMop()
    })

    document.getElementsByClassName("RightMop")[0].addEventListener("click", () => {
        RightMop()
    })
    ////////////////////////////////////////////////////////
    let open = false
    document.getElementsByClassName("icon")[0].addEventListener("click", () => {
        open = !open
        if (open === true) {
            document.getElementsByClassName("Mob")[0].classList.add("MobDisplay")
        }
        else
            document.getElementsByClassName("Mob")[0].classList.remove("MobDisplay")

    })

let col=document.querySelectorAll(".Color li")//to get li
document.body.classList.add(localStorage.getItem("color"))//default

const colorArr=[]
for(let i=0;i<col.length;i++){
colorArr.push(col[i].getAttribute("data-color"))//put the color name to use it in remove
col[i].addEventListener('click',()=>{
    document.body.classList.remove(...colorArr)//to remove any class first
    document.body.classList.add(col[i].getAttribute("data-color"))
    localStorage.setItem("color",col[i].getAttribute("data-color"))
})
}
console.log(colorArr)



}














)