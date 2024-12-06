
//synchronous javascript
/*----
console.log("this is first line")
alert("hello")
console.log("this is second line")
-----*/

//asynchornous javascript
/*---example1
setTimeout(function(){
    console.log("this is first line")
},2000)
console.log("this is second line")
-----*/

/*---example2
test()
console.log("this is first line")
function test()
{
    console.log("this is second line")
}
----*/

/*----example3
setTimeout(function(){
    console.log("this is first line")
},0)
console.log("this is second line")
-----*/

/*----example4
setTimeout(function(){
    console.log("first line")
},2000)
console.log("second line")
console.log("third line")
console.log("fourth line")
----*/

//callback function
/*----example1
function fun(add)
{
    console.log("first line")
    add()
}
function notfun()
{
    console.log("second line")
}
fun(notfun)
----*/
/*----example2
function fun()
{
    setTimeout(()=>{
        console.log("first line")
    },2000)
}
function notfun()
{
    console.log("second line")
}
fun()
notfun()
----*/

/*----example3
function fun(add)
{
    setTimeout(()=>{
        console.log("first line")
        add()
    },2000)
}
function notfun()
{
    console.log("second line")
}
fun(notfun)
----*/

/*----example4
function fun(add)
{
    setTimeout(()=>{
        console.log("first line")
    },2000)
    add()
}
function notfun()
{
    console.log("second line")
}
fun(notfun)
----*/

//callback hell
/*---example
function callBackHell()
{
    setTimeout(()=>{
        console.log("first callback")
        setTimeout(()=>{
            console.log("second callback")
            setTimeout(()=>{
                console.log("third callback")
            },1000)
        },2000)
    },2000)
}
callBackHell()
----*/



/*--------06 dec 2024 js----------------*/


//promise .then()
/*---
let p=new Promise(function(resolve,reject){
    reject("hello")
})
console.log(p)
p.then(function(success){
    console.log(success)
},function(error){
    console.log(error)
})
    ----*/

/*---promise .catch()
let p=new Promise(function(resolve,reject){
    reject("hello")
})
console.log(p)
p.then(function(success){
    console.log(success)
})
p.catch(function(error){
    console.log(error)
})
----*/

/*---promise()
let p=new Promise(function(resolve,reject){
    let x=5
    let y='5'
    if(x===y){
        resolve()
    }
    else
    {
        reject()
    }
})
p.then(function(success){
    console.log('success,goodmorning')
})
p.catch(function(error){
    console.log('error')
})
----*/

/*----promise
let p=new Promise(function(resolve,reject){
    let x="hello"
    let y="Hello"
    if(x===y){
        resolve()
    }
    else
    {
        reject()
    }
})
p.then(function(success){
    console.log('success')
})
p.catch(function(error){
    console.log('error')
})
----*/


//fetch api example
/*----fetch with url
let p=fetch("https://restcountries.com/v3.1/name/india")
p.then(response=>{
    response.json().then(function(countryinfo){
        console.log(countryinfo)
    })
})
p.catch(error=>{
    console.log('error')
})
----*/

/*----fetch with local text file
let p=fetch("text.txt")
p.then(response=>{
    response.text().then(function(countryinfo){
        console.log(countryinfo)
    })
})
p.catch(error=>{
    console.log('error')
})
----*/

//async functions
/*---example1
async function test()
{
    let x=4+5
    return x
}
let res=test()
console.log(res)
async gives promise
to remove that promise we have to do then ()
----*/

/*----example2
async function test()
{
    let x=4+5
    return x
}
let res=test()
res.then(function(data){
    console.log(data)
})
----*/

//await keyword
/*---example1
async function test()
{
    let x= await 4+5
    return x
}
let res=test()
res.then(function(data){
    console.log(data)
})
----*/

/*---example2
async function test()
{
    let x=await 4+5
    console.log("inside function")
    return x
}
let res=test()
console.log("outside function")
res.then(function(data){
    console.log(data)
    
})
-----*/

/*---example3
async function test()
{
    let p=fetch("text.txt")
    p.then(function(response){
        response.text().then(function(data){
            console.log(data)
        })
    })
}
test()
---*/
/*----example4
async function test()
{
    let p = await fetch("text.txt")
    let res=await p.text()
    console.log(res)
}
test()
-----*/
