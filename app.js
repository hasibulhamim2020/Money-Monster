
function getinputedValue(elementId) {
    const field = document.getElementById(elementId);
    const fieldString = field.value;
    const fieldValue = parseFloat(fieldString);
    return fieldValue;
    }
document.getElementById('calculate-btn').addEventListener('click', function () {
    const incomeFieldValue = getinputedValue('income-field');
    const foodFieldValue = getinputedValue('food-field');
    const rentFieldValue = getinputedValue('rent-field');
    const clothsFieldValue = getinputedValue('cloths-field');

    const totalExpanse = foodFieldValue + rentFieldValue + clothsFieldValue;
    const balance = incomeFieldValue - totalExpanse;

    const setTotalExpanses = document.getElementById('total-expanses');
    setTotalExpanses.innerText = totalExpanse;
    const setCurrentBalance = document.getElementById('balance');
    setCurrentBalance.innerText = balance;
    
});
document.getElementById('save-btn').addEventListener('click', function () {
    const incomeFieldValue = getinputedValue('income-field');
    const saveFieldValue = getinputedValue('save-field');

    const persent = saveFieldValue / 100;
    const saveAmountstring = (incomeFieldValue * persent).toFixed(2);
    const saveAmount = parseFloat(saveAmountstring);

    const setCurrentBalance = document.getElementById('balance');
    const currentBalance = setCurrentBalance.innerText;
    const remainingBalanceValue = parseFloat(currentBalance);

    const remainingBalance = incomeFieldValue - (remainingBalanceValue + saveAmount);

    const setSaveAmount = document.getElementById('save-amount');
    setSaveAmount.innerText = saveAmount;
    const setRemainingBalance = document.getElementById('remain-bal');
    setRemainingBalance.innerText = remainingBalance;

});
