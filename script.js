let input = document.getElementById("input");
let enter = document.getElementById('enter');
let shoplist = document.getElementById('shoplist');


enter.addEventListener("click",function(){
    if (input.value == ""){
        alert("Please Enter Some Value😊")
        console.log(input.value)
    }
    else{
        let item = document.createElement("li");
        item.appendChild(document.createTextNode(input.value));
        shoplist.appendChild(item);
        input.value = "";
    }
})

