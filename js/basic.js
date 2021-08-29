"use strict";
class Customer {
    constructor(name) {
        this.name = name;
        this.isActive = true;
    }
    announce() {
        return "Hello, my name is " + this.name;
    }
}
//create a new instance
let firstCustomer = new Customer("Christian");
// let newMessage = firstCustomer.announce();
//change the text ont he page
// let webHeading = document.querySelector('h1');
// webHeading.textContent = newMessage;
