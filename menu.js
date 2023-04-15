///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays. 
*/


//////////////////PROBLEM 1////////////////////
/*  
    Create an object called `pizza` that has 6
    properties: 
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/

//CODE HERE
console.log("----------------------------------")

const pizza = {
    name: 'Veganpizzas',
    price: 15.99,
    category: 'Vegan',
    popularity: 4,
    rating: 4.5,
    tags: ['vegan','vegetarian','healthy','low-calorie']

}



//////////////////PROBLEM 2////////////////////
/* 
    Let's print a few values from our pizza object.

    First, log the popularity of pizza. 
    Use dot notation to access the value.
*/

//CODE HERE
console.log("----------------------------------")
console.log(pizza.popularity)

/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/

//CODE HERE
console.log("----------------------------------")
console.log(pizza.tags[1])
/*
    Third, destructure the price off of the
    pizza object.
    
    Print the value of your new price variable.
*/

//CODE HERE
console.log("----------------------------------")
let {price} = pizza
console.log(price)
/*
    Fourth, and last, destructure the category
    property.

    Print the value of your category variable. 
*/

//CODE HERE
console.log("----------------------------------")
let {category} = pizza
console.log(category)

//////////////////PROBLEM 3////////////////////
/* 
    Create an array with about 5 objects in it.
    The objects should mimic the `pizza` object.
    Call the array `foodArr`.

    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/

// //CODE HERE
// name: 'Veganpizzas',
//     price: 15.99,
//     category: 'Vegan',
//     popularity: 4,
//     rating: 4.5,
//     tags: ['vegan','vegetarian','healthy','low-calorie']
console.log("----------------------------------")
const foodArr =[
    {
        price: 20,
        category: 'Meat',
        popularity: 2,
        rating: 5,
        tags: ['cow-lover','animals','juicy']
    },
    {
        price: 14,
        category: 'Vegetables',
        popularity: 7,
        rating: 2.7,
        tags: ['environment','salad','keto']
    },
    {price: 18,
        category: 'Meat',
        popularity: 3,
        rating: 4.7,
        tags: ['heart attack','cheesy','tender']
    },
    {
        price: 19,
        category: 'Vegetarian',
        popularity: 6,
        rating: 4.5,
        tags: ['cheese','vegetarian','healthy']
    },
    {
        price: 11,
        category: 'Regular',
        popularity: 1,
        rating: 5,
        tags: ['cheesy','kids','fun']
    }
]

//////////////////PROBLEM 4////////////////////
/* 
    Let's filter the food objects according
    to their tags.

    Write a callback function below that will
    return only food objects that have a certain tag.

    You can check for any tag that at least 1 of
    your food objects has.
*/

//CODE HERE
console.log("----------------------------------")
const filteredFood = foodArr.filter(element => element.tags.includes('cheesy'))
console.log(filteredFood)

//////////////////PROBLEM 5////////////////////
/* 
    Now let's write a function that's a little
    more flexible than just filtering for one
    value. We want to be able to filter for 
    food that has above a certain rating, 
    below a certain price, or any other combo.

    Write a function called `filterByProperty`
    that takes in three arguments: `property`, 
    `number`, and `type. 

    The property will be a string (rating,
    popularity, or price)

    The number will be the number that you want
    to compare against 

    The type should be 'above' or 'below' to 
    indicate whether you want to get foods with
    values that are above or below the given number
    for the given property

    Inside the function, create a variable to hold
    a filtered array

    Use the filter method to filter the foodArr

        In the callback, check if the `type` is `above`, 
        if it is, return objects whose value for the given
        property is greater than the `number` passed in

        If the type isn't `below`, return objects whose
        value for the given property is less than the 
        `number` passed in
    
    Return the filtered array from the entire function
*/
console.log("----------------------------------")


const filterByProperty = (property,number,type) =>{
    if(type === 'above'){
        const filteredArr = foodArr.filter(element => element[property] > number);
        return filteredArr
    }else if(type === 'below'){
        const filteredArr = foodArr.filter(element => element[property] < number);
        return filteredArr
    }
}
/*
    [object1{propery1,property2..}, object2{propery1,property2..}]
    The property will be a string (rating,
    popularity, or price)

    The number will be the number that you want
    to compare against 

    The type should be 'above' or 'below' 

    Inside the function, create a variable to hold
    a filtered array
        price: 14,
        category: 'Vegetables',
        popularity: 7,
        rating: 2.7,
        tags: ['environment','salad','keto']



    Invoke the `filterByProperty` function passing
    in a value for each paramter.

    You'll have to console.log to see the filtered array
*/

//CODE HERE
console.log("----------------------------------")
console.log("filter rating above 3")
console.log(filterByProperty('rating',3,'above'))
console.log("now below 5")
console.log(filterByProperty('rating',5,'below'))