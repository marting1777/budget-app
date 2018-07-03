
// BUDGET CONTROLLER
let budgetController = (function() {



})()

// UI CONTROLLER
let UIController = (function() {

    let DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }

    return {
        getinput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value, // Will be either INC or EXP
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            }
        },
        getDOMstrings: function() {
            return DOMstrings
        }
    }

})()

// GLOBAL APP CONTROLLER
let controller = (function(budgetCtrl, UICtrl) {

    let setUpEventListeners = function() {
        let DOM = UICtrl.getDOMstrings()
        
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem)

        document.addEventListener('keypress', function(event) {

            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem()
            }
        })
    }
    
    let ctrlAddItem = function() {
        // 1. Get the field input data
        let input = UICtrl.getinput()
        // 2. Add the item to the budget controller

        // Add the item to the UI

        // Calculate the Bugdet

        // Display the budget on the UI

    }

    return {
        init: function() {
            console.log('App has started.')
            setUpEventListeners()
        }
    }

})(budgetController, UIController)

controller.init()