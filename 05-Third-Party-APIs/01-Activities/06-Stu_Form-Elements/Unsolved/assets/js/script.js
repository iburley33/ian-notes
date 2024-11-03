var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');
var listItems = [];

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`
function displayList(event) = {
    event.preventDefault();
    $.each(shoppingListEl, function())
        listItems.push($(this).val());

}
// TODO: Add an event listener to the `shoppingFormEl` to handle submission
shoppingFormEl.on('submit', displayList);