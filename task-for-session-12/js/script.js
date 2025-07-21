


// var nums = [10 ,20 ,30, 35 ,40]

// var u_num = prompt("enter your num");

// var c_num = nums.find((index)=> index ==u_num)

// if(c_num != undefined){
//     prompt(u_num)
// }
// else if (c_num == undefined){
//     nums.push(u_num+5)
// }

// console.log(nums)



var users = []

function AddUser(Uname, Uid, Ubalance) {
    users.push(
        {
            name: Uname, id: Uid, balance: Ubalance
        }
    )
    console.table(users);
}
function EditBlanceById(id, newBalance) {
    var Ufid = users.findIndex(item => item.id == id);
    users[Ufid].balance = newBalance
    console.table(users);
}
function deleteUsersById(id) {
    var delId = users.findIndex(item => item.id == id) ;
    
    users.splice(delId,1);
    console.table(users);
}

var numOfUsers = prompt("how many user you will add");
var Uname
var Uid
var Ubalance

for (i = 0; i < numOfUsers; i++) {
    Uname = prompt("enter the name");
    Uid = Number(prompt("enter the id"));
    Ubalance = Number(prompt("enter the balance"));
    AddUser(Uname, Uid, Ubalance)
}

chId = Number(prompt("enter the id of object that have new balance"))
newBalance = Number(prompt("enter the new balance"))
EditBlanceById(chId, newBalance)



var dd = Number(prompt("enter the id of the object that you want to remove"))
deleteUsersById(dd);