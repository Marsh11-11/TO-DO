(()=>{
    const form = document.querySelector("form")
    const input = document.querySelector("input")
    const tasks = document.querySelector("#tasks")
     input.focus()

    form.addEventListener("submit",(e)=>{
        e.preventDefault()

        
        let value = input.value;
        

        let current_task = []
        // get all task content 
        const taskcontent = document.querySelectorAll("#taskname")
        taskcontent.forEach(text =>{
            current_task.push(text.innerHTML.trim().toLowerCase())
        })
         
        // check if task already exists
        if(current_task.includes(value.toLowerCase().trim())){
            alert("Task already exists")
            input.focus()
        }else if(value.trim()== ""){
            alert("please enter a Task")
            input.focus()
        }else {
            const task = document.createElement("div")
            task.classList.add("task")

            const p = document.createElement("p")
            p.setAttribute("id","taskname")
            p.textContent = value
            

            const edit_btn = document.createElement("button")
            edit_btn.classList.add("edit")
            edit_btn.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`

            const delete_btn = document.createElement("button")
            delete_btn.classList.add("delete")
            delete_btn.innerHTML = `<i class="fa-solid fa-trash"></i>`


            task.appendChild(p)
            task.appendChild(edit_btn)
            task.appendChild(delete_btn)
            tasks.appendChild(task)
            input.focus()

            // save data to local storage
            savedData()
        }

        input.value = ""

         // Edit Task
         const editBtn = document.querySelectorAll(".edit")
         for(let i = 0;i < editBtn.length;i++){
            editBtn[i].addEventListener("click",()=>{
                let currentText = editBtn[i].parentElement.querySelector("#taskname").textContent
                let taskText = prompt("Edit Task",currentText)
                if(taskText!=null && taskText.trim()!= ""){
                    editBtn[i].parentElement.querySelector("#taskname").textContent = taskText
                    savedData()
                }
            })
         }

        //  Delete Task
        const delBtn = document.querySelectorAll(".delete")
        for(let i = 0; i < delBtn.length; i++){
            delBtn[i].addEventListener("click",()=>{
                tasks.removeChild(delBtn[i].parentElement)
                // delbtn[i].parentElement.remove()
                savedData()
            })
        }
            })

            
    // local storage
    function savedData(){
        localStorage.setItem("data",JSON.stringify(tasks.innerHTML))
    }

    // get data
    function getData(){
        const data = localStorage.getItem("data")
        if(data){
            tasks.innerHTML = JSON.parse(data)
        }
    }
    getData()

        
})()

const editBtn = document.querySelectorAll(".edit")
for(let i = 0;i < editBtn.length;i++){
   editBtn[i].addEventListener("click",()=>{
       let currentText = editBtn[i].parentElement.querySelector("#taskname").textContent
       let taskText = prompt("Edit Task",currentText)
       if(taskText!=null && taskText.trim()!= ""){
           editBtn[i].parentElement.querySelector("#taskname").textContent = taskText
           savedData()
       }
   })
}

const delBtn = document.querySelectorAll(".delete")
for(let i = 0; i < delBtn.length; i++){
    delBtn[i].addEventListener("click",()=>{
        tasks.removeChild(delBtn[i].parentElement)
        // delbtn[i].parentElement.remove()
        savedData()
    })
}

         
    // local storage
    function savedData(){
        localStorage.setItem("data",JSON.stringify(tasks.innerHTML))
    }

   