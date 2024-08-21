const item = document.querySelector("#item");
const todobox = document.querySelector("#to-do-box");

item.addEventListener("keyup", function(event) {
    if (event.key === "Enter") { // Check for "Enter" key
        addtodo(this.value);
        this.value = ""; // Clear the value of the 'item' element
    }
});

const addtodo = (item) => {
    const listitem = document.createElement("li");

    listitem.innerHTML = `
        ${item}
        <i class="fas fa-times"></i>
    `;
listitem.addEventListener("click",function(){
    this.classList.toggle("done");
});
listitem.querySelector("i").addEventListener("click",function(){
    listitem.remove();
});

    todobox.appendChild(listitem);
}
