// step 1: Set the event handler to the button
document.getElementById('btn-deposit').addEventListener('click', function(){
    // console.log('deposit clicked')


// step 2: get the deposit input field value and convert input value string to number
    const inputDepositField = document.getElementById('input-deposit');
    const newDepositAmountString = inputDepositField.value
    const newDepositAmount = parseFloat(newDepositAmountString);
    // console.log(typeof newDepositAmount);


// step 3: get the  current diposit total and convert the total string to number
    const totalDepositElement = document.getElementById('total-deposit');
    const previusDepositTotalString = totalDepositElement.innerText;
    const previusDepositTotal = parseFloat(previusDepositTotalString);
    // console.log(typeof previusDepositTotal)


// step 4: add the numbers to set the total deposit
    const currentDepositTotal = previusDepositTotal + newDepositAmount;
    totalDepositElement.innerText = currentDepositTotal;


// step 5: Get the current Balance and Convert string to Number
    const totalBalanceElement = document.getElementById('total-balance');

    const PreviousTotalBalanceString = totalBalanceElement.innerText;
    const PreviousTotalBalance = parseFloat(PreviousTotalBalanceString);
    // console.log(typeof PreviousTotalBalance);

// step 6: add the new deposit input to the previous balance
    const totalCurrentBalance = PreviousTotalBalance + newDepositAmount;
    totalBalanceElement.innerText = totalCurrentBalance;

// clear the input field
    inputDepositField.value = '';
})