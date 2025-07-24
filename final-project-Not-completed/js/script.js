var contactForm = document.getElementById('ConForm')
var eName = document.getElementById("namError")

let vaildName = (element)=>{
    let inputValue = element.value.trim()
    if( inputValue.lenght < 3){
        eName.innerText = "must be more than 3 char"
    }
    else{
        eName.innerText = ""
    }
    console.log(inputValue)
    console.log(eName)

}








contactForm.addEventListener('input',(e)=>{
    if(e.target.id == "userName")
    {
        vaildName(e.target)
    }
    else if(e.target.id == "userEmail"){

    }
    else if(e.target.id == "userPassword"){

    }
})