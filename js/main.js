document.getElementById('btn-calculate').addEventListener('click', function(){
    const getIncome = getInputValue('income-input');
    const foodCost = getInputValue('food-cost');
    const rentCost = getInputValue('rent-cost');
    const clothCost = getInputValue('cloth-cost');
    const totalExpense = foodCost + rentCost + clothCost;
    const balance = getIncome - totalExpense;
    setInnerText('total-expense', totalExpense);
    setInnerText('balance', balance);
})

document.getElementById('btn-save').addEventListener('click', function(){
    const getIncome = getInputValue('income-input');
    const getSavings = getInputValue('saving-input');
    const savingNumber = getSavings / 100 ;
    const savingAmount = getIncome * savingNumber;
    setInnerText('saving-amount', savingAmount);
    const balanceValue = getInnerTextNumber('balance');
    const remainingBalance = balanceValue - savingAmount;
    setInnerText('remaining-balance', remainingBalance);
    // clear input data
    const inputTag = document.getElementsByTagName('input');
    for(const tag of inputTag){
        tag.value = '';
    }
})
