


function looping(start , end , breaknum ,contnum){
    if(start == undefined || end == undefined || breaknum == undefined || contnum == undefined ){
        console.log("please enter full number")
    }
    else{
        for(start ; start <= end ; start++){
            if(start == contnum) continue
            if(start == breaknum) break
            console.log(start)
        }
    }
}


looping(0,10,5)

looping(1,6)

looping(0,20,19,10)