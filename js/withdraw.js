// console.log('this is a withdraw js')


// step 1: add event handler to  the withdraw button 
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // console.log('withdraw clicked')

// step 2: get the withdraw field and convert the value string to number
    const inputWithdrawField = document.getElementById('input-withdraw');
    const inputWithdrawAmountString = inputWithdrawField.value;
    const newWithdrawAmount = parseFloat(inputWithdrawAmountString);
    // console.log(typeof totalWithdrawAmount)

    if(isNaN(newWithdrawAmount)){
        alert('please provide a valid number')
        return;
    }

// step 3: get the total withdraw element and convert the amount string to number
    const totalWithdrawElement = document.getElementById('total-withdraw');
    const previousWithdrawAmountString = totalWithdrawElement.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountString);

    // console.log(typeof previousWithdrawAmount);
    
    
// step 5: get the total balance and convert string to number
    const totalBalanceElement = document.getElementById('total-balance');
    const PreviousTotalBalanceString = totalBalanceElement.innerText;
    const PreviousTotalBalance = parseFloat(PreviousTotalBalanceString);
    // console.log(PreviousTotalBalance) 
    
//step 7: clear the input field
    inputWithdrawField.value = '';

// step Validation: check total balance to new withdraw amount
    if(newWithdrawAmount > PreviousTotalBalance){
        alert('tomar bap er bank a ato taka nai!!!')
        return;
    }
    
// step 4: add the new withdraw amount to previous amount total
    const totalWithdraw = previousWithdrawAmount + newWithdrawAmount;
    totalWithdrawElement.innerText = totalWithdraw;


// step 6: Subtraction new withdraw amount to total balance and set new balance 
    const currentTotalBalance = PreviousTotalBalance - newWithdrawAmount;
    totalBalanceElement.innerText = currentTotalBalance;


})