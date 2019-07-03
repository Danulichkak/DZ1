
//задание 1

var HelloUser = [")", "Lol", "emanresu", "olleH"];
delete HelloUser[1];
console.log(HelloUser);
HelloUser.join(' ').split('').reverse().join('');
var newHellouser = HelloUser.join(' ').split('').reverse().join('');
console.log(newHellouser);


//задание 2

var array=[
 {name: 'Tetiana', mark: 4.8, diploma: true},
 {name: 'Andrew',  mark: 3.6, diploma: false},
 {name: 'Maria', mark: 4.8, diploma: true},
 {name: 'Margo', mark: 4.8, diploma: false},
 {name: 'Sergey', mark: 4.9, diploma: false},
 {name: 'Alex', mark: 4.9, diploma: false},
 {name: 'Anatoly', mark: 4.9, diploma: true},
];
function markFunction(user1, user2){
    if (user1.mark < user2.mark){
        return 1;
    }else if(user1.mark === user2.mark){
        if(user1.diploma < user2.diploma){
            return 1;
        }else if(user1.diploma === user2.diploma){
            if(user1.name < user2.name){
                return 1;
            }else{
                return -1;
            }
        }else{
                return -1;
            }
    }else{
            return -1;
        }
}
 array.sort(markFunction).splice(5,2);
 console.log( '5 самых способных студентов');
 console.log(array);

//задание 3

var list1 = ["el-1", "el-2", "el-3", "el-8", "el-5"];
list1.join(' ').split('');
var list2 = list1.join(' ').split(''); 
list2.splice(2,1,":");
list2.splice(7,1,":");
list2.splice(12,1,":");
list2.splice(17,1,":");
list2.splice(22,1,":");
list2.splice(4,0,"(1),");
list2.splice(10,0,"(2),");
list2.splice(16,0,"(3),");
list2.splice(22,0,"(4),");
list2.splice(28,0,"(5)");
list2.join('');
var list3=list2.join('');
console.log(list3);
