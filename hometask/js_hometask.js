// TASK 1
// function getUserName () {
//     const mail = prompt("Enter your mail");
//     const name1 = prompt("Enter your name");
//     const last_name = prompt("Enter your last name");
//     const formattedstring = mail + "-" + name1 +" " + last_name;
//     return formattedstring;
// }
// const registration = getUserName()
// console.log(registration);





// TASK 2 
// function getDeliveryCost () {
//     const kilometer = prompt("Enter the kilometer:");
//     const delivery_cost = 5 + (0.25 * kilometer)
//     return delivery_cost;
// }
// const cost_of_delivery = getDeliveryCost()
// console.log(cost_of_delivery)






// TASK 3
// const name = prompt("Enter the name of receipt:");
// const unit_price = prompt("Enter the unit price");
// const quantity = prompt("Enter the quantity");
// const participation = prompt("Enter the participation (yes/no)");

// function getDiscount (name, unit_price, quantity, participation) {
//     if (quantity >= 5){
//         product_discount = unit_price - (unit_price * 0.1)
//     }
//     if (participation == "yes") {
//         product_discount = unit_price - (unit_price * 0.15)
//     }
//     else if (quantity >= 5 && participation == "yes"){
//         product_discount = unit_price - (unit_price * 0.25)
//     }

//     return product_discount;
// }

// const answer = getDiscount(name, unit_price, quantity, participation)
// console.log(answer)






// TASK 4
// const number_of_guests = prompt('Enter the number of guests')

// function handleSuitableTable(number_of_guests) {
//     if (number_of_guests > 0 && number_of_guests < 3 ){
//         suitable_table = "small table"
//     }
//     if (number_of_guests > 2 && number_of_guests < 5){
//         suitable_table = "medium table"
//     }
//     else if (number_of_guests > 4 && number_of_guests < 9){
//         suitable_table = "large table"
//     }
//     else {
//         suitable_table = "restaurant will not be able to accommodate a company of more than 8 people within one table :’-("
//     }
//     return suitable_table;
// }
// const answer = handleSuitableTable(number_of_guests);
// console.log (answer)






// TASK 5
// const first_temp = prompt("Enter first temperature:");
// const second_temp = prompt("Enter second temperature:");
// const third_temp = prompt("Enter third temperature:");
// const array = [first_temp, second_temp, third_temp];

// function descending_order(first_temp, second_temp, third_temp) {
//     const new_array = array.sort((a, b) => {return b - a});
//     return new_array;
// }
//  const answer = descending_order(first_temp, second_temp, third_temp);
//  console.log(answer)






// TASK 6
// const name = prompt('Enter the name')
// const age = prompt("Enter the age")
// const number_of_orders = prompt("Enter the number of orders") 
// const amount_of_orders = prompt("Enter the amount of orders")

// function getDiscount (name, age, number_of_orders, amount_of_orders) {
//     if (age >= 60 || number_of_orders >= 4 && amount_of_orders >= 100){
//         discount = "customer receives a discount"
//     }
//     else {
//         discount = "customer does not receive a discount"
//     }
//     return discount
// }

// const answer = getDiscount (name, age, number_of_orders, amount_of_orders);
// console.log (answer)






// TASK 7 
// const item_length = prompt("Enter the length of an item in cm:");
// const item_width = prompt("Enter the width of an item in cm:");
// const item_height = prompt("Enter the height of an item in cm:");
// const item_weight = prompt("Enter the weight of an item in kg:");
// const delivery_distance = prompt("Enter the distance of a delivery in kg:");

// function getReportOfShipment(item_length, item_width, item_height, item_weight, delivery_distance) {
//     const dimension_sum = item_length + item_width + item_height;
//     if (dimension_sum <= 150) {
//         report = "shipment is small"
//     }
//     if (item_length <= 100 && item_width <= 100 && item_height <= 100 && item_weight <= 10 && delivery_distance >= 3 && delivery_distance <= 10) {
//         report = "Shipment is small"
//     }
//     else  {
//         report = "shipment is not small"
//     }
//     return report;
// }
// const answer = getReportOfShipment(item_length, item_width, item_height, item_weight, delivery_distance);
// console.log(answer)




// TASK 8
// const number = prompt("enter the number:")

// function convertNumToText(number) {
//     let number1 = number;
//     let number2 = number1 % 10;
//     let number3 = number1 / 10;
//     let number4 = number3-((number2)/10)
//     if (number >= 10 && number <= 20){
//         if (number == 10) {
//             console.log("ten");
//           }
//           if (number == 11) {
//             console.log("eleven");
//           }
//           if (number == 12) {
//             console.log("twelve");
//           }
//           if (number == 13) {
//             console.log("thirteen");
//           }
//           if (number == 14) {
//             console.log("forteen");
//           }
//           if (number == 15) {
//             console.log("fifteen");
//           }
//           if (number == 16) {
//             console.log("sixteen");
//           }
//           if (number == 17) {
//             console.log("seventeen");
//           }
//           if (number == 18) {
//             console.log("eightteen");
//           }
//           if (number == 19) {
//             console.log("nineteen");
//           }
//           if (number == 20) {
//             console.log("twenty");
//           }
//     }
//     if (number > 20 && number <= 99){
//         if (number4 == 2) {
//             console.log("twenty");
//         }
//         if (number4 == 3) {
//             console.log("thirty");
//         }
//         if (number4 == 4) {
//             console.log("forty");
//         }
//         if (number4 == 5) {
//             console.log("fifty");
//         }
//         if (number4 == 6) {
//             console.log("sixty");
//         }
//         if (number4 == 7) {
//             console.log("seventy");
//         }
//         if (number4 == 8) {
//             console.log("eighty");
//         }
//         if (number4 == 9) {
//             console.log("ninety");
//         }



//         if (number2 == 1) {
//             console.log("one");
//         }
//         if (number2 == 2) {
//             console.log("two");
//         }
//         if (number2 == 3) {
//             console.log("three");
//         }
//         if (number2 == 4) {
//             console.log("four");
//         }
//         if (number2 == 5) {
//             console.log("five");
//         }
//         if (number2 == 6) {
//             console.log("six");
//         }
//         if (number2 == 7) {
//             console.log("seven");
//         }
//         if (number2 == 8) {
//             console.log("eight");
//         }
//         if (number2 == 9) {
//             console.log("nine");
//         }
//     }

//     let answer = console.log(number2) + console.log(number3)
//     return answer
// }

// convertNumToText (number)






// TASK 9
// const userNumber = prompt("Please enter a number:");
// function printDivisibleNumbers(userNumber) {
//     for (let i = 1; i <= 1000; i++) {
//       if (i % userNumber === 0) {
//         console.log(i);
//       }
//     }
//   }
// printDivisibleNumbers(userNumber);
    




// TASK 10
// const initial_amount = prompt("Enter initial amount")
// const duration_in_years = prompt("Enter duration in years")
// const percent_per_year = prompt("Enter percentage per year")

// function getDepositAmount(initial_amount, duration_in_years, percent_per_year) {
//     final_amount = Number(initial_amount) + (initial_amount * [((1 + percent_per_year / 100)**duration_in_years)-1])
//     final_amount = Math.round(final_amount)
//     return final_amount;
// }
// const answer = getDepositAmount(initial_amount, duration_in_years, percent_per_year);
// console.log(answer)





// TASK 11
// const order_number = prompt("Enter the number of orders:")

// function getLoyaltyPoints(order_number) {
//     let award_point = [0, 1];
//     for (i = 2; i<= order_number; i++){
//         award_point[i] = award_point[i - 2] + award_point[i - 1];
//     }
//    return award_point;
// }
// const answer = getLoyaltyPoints(order_number)
// console.log(answer)





// TASK 12
// const individual_code = prompt("enter the individual code of a user");

// function getDigitsSum (individual_code) {
//     let sum = 0
//     for (i=0; i < individual_code.length; i++) {
//         sum = sum + Number(individual_code[i])
//     }
//     return sum;
// }
// const answer = getDigitsSum (individual_code)
// console.log(answer)






// TASK 13
// const denominations = [100, 50, 20, 10, 5, 1]
// const amount = prompt("enter the amount of money")


// function getBanknotes (denominations, amount) {
//     let a = amount % 100
//     let b = a % 50
//     let c = b % 20
//     let d = c % 10
//     let f = d % 5

//     const units_of_hundred = Math.floor(amount / 100);
//     const units_of_fifty = Math.floor(a / 50);
//     const units_of_twenty = Math.floor(b / 20);
//     const units_of_ten = Math.floor(c / 10);
//     const units_of_five = Math.floor(d / 5);
//     const units_of_one = Math.floor(f / 1);


//     console.log( units_of_hundred + " units of hundred;") 
//     console.log(units_of_fifty + " units of fifty;")  
//     console.log(units_of_twenty + " units of twenty;")  
//     console.log(units_of_ten + " units of ten;") 
//     console.log(units_of_five + " units of five;")
//     console.log(units_of_one + " units of one;")
// }
// getBanknotes(denominations, amount)
