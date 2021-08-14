
document.addEventListener("DOMContentLoaded", () => {
    const divpostes = document.querySelector('#postes')
    const showButton = document.querySelector('#show')
    const deletButton = document.querySelector("#clear")
    listpost(divpostes)
    deletButton.addEventListener("click", () =>{
        divpostes.innerHTML = "No items"
        console.log(divpostes)

    })
    showButton.addEventListener("click", () =>{
        listpost(divpostes)
    })

})



const listpost = (divpostes) => {
    divpostes.innerHTML=""
    let postes = []
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            postes = data
            postes.map((post) => {
                const div = document.createElement("div");
                const h2 = document.createElement("h2");
                const p = document.createElement("p");
                div.classList.add("post")
                h2.classList.add('title');
                p.classList.add("description")
                h2.textContent = post.title;
                p.textContent = post.body;
                div.appendChild(h2);
                div.appendChild(p);
                divpostes.appendChild(div);


            })
        })
}

