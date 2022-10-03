let inputting = prompt("what type of task you want to do");
const todos = ["do computer homework" , "do some coding"];
while(inputting !== "quitting" && inputting !== "quit"){
if(inputting === "List"){
    console.log("*****************");
for(let i = 0; i < todos.length; i++){
console.log(`${i} : ${todos[i]}`);
}

    console.log("*****************");
}else if(inputting === "new"){
const newtodo = prompt("What new task we have to do");
todos.push(newtodo);
console.log(`${newtodo} is added to your list`)

}else if(inputting === "deletes"){
    let index = parseInt(prompt("which index we have to delete"));
    if(!Number.isNaN(index)){
        todos.splice(index , 1);
        console.log(`index ${index} is removed from list`)
    }else{
        console.log("wrong index")
    }
  
}

    inputting = prompt("what type of task you want to do");
}
console.log("ok quit the app");