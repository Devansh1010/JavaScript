// For of and For in Loop 

const myMap = new Map()

myMap.set("Name:", "Devansh")
myMap.set("Email:", "Devansh@gmail.com")
myMap.set("Password:", "Devansh1234")
myMap.set("IsLogedIn:", true)

const myArr = [2,3,4,5,6,7]

const myArrStr = ['name', "user", "email", "tony", "bruse", "natasha", "thor"]

const myObj = {
    username: "obj_Devansh",
    email: "Devansh@gmail.com",
    password: "sdfasdfas",
    isLogedIn: false,
}


for (const [key, value] of myMap) {   
    console.log(myMap);
    // console.log(`${key}, '=>' ${value}`)
}


// for (const key in myMap) {
//    console.log(myMap);
   
// }