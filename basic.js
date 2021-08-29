var Customer = /** @class */ (function () {
    function Customer(name) {
        this.name = name;
    }
    Customer.prototype.announce = function () {
        return "Hello, my name is " + this.name;
    };
    return Customer;
}());
//create a new instance
var firstCustomer = new Customer("Christian");
var newMessage = firstCustomer.announce();
//change the text ont he page
var webHeading = document.querySelector('h1');
webHeading.textContent = newMessage;
