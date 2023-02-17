document.getElementById("btn-calculate").addEventListener("click", function () {
  const getIncome = getInputValue("income-input");
  const foodCost = getInputValue("food-cost");
  const rentCost = getInputValue("rent-cost");
  const clothCost = getInputValue("cloth-cost");
  if ( isNaN(getIncome) || isNaN(foodCost) || isNaN(rentCost) || isNaN(clothCost) || getIncome < 0 || foodCost < 0 || rentCost < 0 || clothCost < 0) {
    alert("Please enter only Number");
    const inputTag = document.getElementsByTagName("input");
    for (const tag of inputTag) {
      tag.value = "";
    }
  } else {
    const totalExpense = foodCost + rentCost + clothCost;
    const balance = getIncome - totalExpense;
    if (totalExpense > getIncome) {
      alert("You have no enough income for expense!");
      const inputTag = document.getElementsByTagName("input");
      for (const tag of inputTag) {
        tag.value = "";
      }
    } else {
      setInnerText("total-expense", totalExpense);
      setInnerText("balance", balance);
    }
  }
});

document.getElementById("btn-save").addEventListener("click", function () {
  const getIncome = getInputValue("income-input");
  const getSavings = getInputValue("saving-input");
  if (isNaN(getSavings) || getSavings > 100) {
    alert("Enter only number and less than 100!");
    document.getElementById("saving-input").value = "";
  } else {
    const savingNumber = getSavings / 100;
    const savingAmount = getIncome * savingNumber;
    setInnerText("saving-amount", savingAmount);
    const balanceValue = getInnerTextNumber("balance");
    const remainingBalance = balanceValue - savingAmount;
    if (savingAmount > balanceValue) {
      alert("You have no enough balance for saving!");
    } else {
      setInnerText("remaining-balance", remainingBalance);
      // clear input data
      const inputTag = document.getElementsByTagName("input");
      for (const tag of inputTag) {
        tag.value = "";
      }
    }
  }
});
