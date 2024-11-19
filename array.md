const items = [
    {name:'Bike', price:100},
    {name:'TV', price:200},
    {name:'Album', price:10},
    {name:'Book', price:5},
    {name:'Phone', price:500},
    {name:'Computer', price:1000},
    {name:'Keyboard', price:25},
]
//filter method ex:finding the less than or greater than a 100

const filterItems = items.filter((item)=>{
    return item.price <= 100;
})
console.log(filterItems)

//map method allow you to convert into new array
const mapItems = items.map((item)=>{
    return item.name
})
console.log(mapItems)
//find method return the first item that shows its true
const findItems = items.find((item)=>{
    return item.name ==='Bike'
})
console.log(findItems)
//forEach method does not return anything
items.forEach((item)=>{
    console.log(item.name)
})
//some method return true or false if one condition met
const hasIndexpenisveItems = items.some((item)=>{
    return item.price<=100
})
console.log(hasIndexpenisveItems)
//every methodis same as some method but it must met all the condition for every single Items
const allExpensiveItems = items.every((item)=>{
    return item.price <=100;
})
console.log(allExpensiveItems)
//reduce method return a single value 
const total = items.reduce((currentTotal/*this is a container for the total*/, item /*this is for actual array*/)=>{
    return item.price + currentTotal
},0 /*for starting */)
console.log(total)
//includes mostly used in in searching when filtering the items, if not used in filter it return only a boolean
const includeBikeItem = items.filter(item => 
    item.name.toLowerCase().includes('bike')
);
console.log(includeBikeItem)

## Tech Stack

**Client:** Tailwindcss and React Vite

**Server** Express

**Database** MongoDB and Cloudinary




## Acknowledgements

 - I created this with the help of AI in the frontend—so technically, it’s a human-AI co-production… or maybe AI just did most of the heavy lifting while I supervised with snacks!
 - V0 - I use this ai generation to generate design I polish to make it easy to navigate but I'm not good in frontend RT.


