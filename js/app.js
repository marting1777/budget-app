
// BUDGET CONTROLLER
let budgetController = (function() {



})()

// UI CONTROLLER
let UIController = (function() {



})()

// GLOBAL APP CONTROLLER
let controller = (function(budgetCtrl, UICtrl) {
    
    let ctrlAddItem = function() {
        // 1. Get the field input data

        // 2. Add the item to the budget controller

        // Add the item to the UI

        // Calculate the Bugdet

        // Display the budget on the UI

    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem)

    document.addEventListener('keypress', function(event) {

        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem()
        }

    })

})(budgetController, UIController)