let divs = document.getElementsByClassName("cir")
let score = 0
let fr = document.getElementById("first")
let last = document.getElementById("last")
let result = document.getElementsByClassName("sc")[0]

for (let div of divs) {
    div.addEventListener("click", function (e) {
        for (let d of divs) {
            d.classList.remove("now")
        }
        div.classList.add("now")
        score = div.getAttribute("data-Number")
    })
};

document.getElementsByTagName("button")[0].onclick = _ => {
    fr.style.display = "none"
    last.style.display = "block"
    result.append(`You selected ${score} out of 5`)
}