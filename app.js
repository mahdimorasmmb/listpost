let postes = []
document.addEventListener("DOMContentLoaded", () => {
    const inputSearch = document.querySelector('#inputSearch');
    const showButton = document.querySelector('#show')
    const deletButton = document.querySelector("#clear")
    listpost()
    deletButton.addEventListener("click", () =>{
        divpostes.innerHTML = "No items"

    })
    showButton.addEventListener("click", () =>{
        listpost()
    })
    

})
"ggdf".includes


document.addEventListener("keyup",(event) =>{
    let newPost=[]
    newPost =postes.filter((item) =>{
        return item.title.includes(event.target.value)
    })
    display(newPost)
})



const listpost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            postes = data
            display(postes)
        })
}

const display = (postes) => {
    const divpostes = document.querySelector('#postes');
    divpostes.innerHTML=""
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
};

