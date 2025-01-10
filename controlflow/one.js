// For of and For in Loop 

const myMap = new Map()

myMap.set("Name:", "Devansh")
myMap.set("Email:", "Devansh@gmail.com")
myMap.set("Password:", "Devansh1234")
myMap.set("IsLogedIn:", true)

const myArr = [2,3,4,5,6,7]

const myObj = {
    username: "obj_Devansh",
    email: "Devansh@gmail.com",
    password: "sdfasdfas",
    isLogedIn: false
}

for (const key of myMap) {
    console.log(Object.keys[key])
}