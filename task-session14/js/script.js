
var users = []

var Myform = document.getElementById("myForm")
Myform.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log(e.target)
    var nameValue = e.target[0].value
    console.log(nameValue)
    var emailValue = e.target[1].value
    console.log(emailValue)
    var user ={
        namen : nameValue ,
        email : emailValue
    }
    users.push(user)
    console.table(users)
    var divForData = document.createElement('div')
    Myform.appendChild(divForData)
    var p = document.createElement('p')
    divForData.appendChild(p)
    p.classList.add('text-black','p-2','bg-info')
    p.innerText = "the Name is :" + users[0].namen +"\n" +"the email is : "+ users[0].em
    // p.innerText = users
   
})




