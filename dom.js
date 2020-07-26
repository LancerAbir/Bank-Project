//** */ Login Page 
const loginBtn = document.getElementById('login-btn')
const loginPage = document.getElementById('login-area')
const transactionPage = document.getElementById('transaction-area')
transactionPage.style.display = 'none'

//** */ catch Button
const depositBtn = document.getElementById('addDeposit')
const withdrawBtn = document.getElementById('addWithdraw')

//** */ catch Input target 


//** */ catch Main Amount Balance
const mainBalance = document.getElementById('main-balance')


loginBtn.addEventListener('click', function () {
    loginPage.style.display = 'none'
    transactionPage.style.display = 'block'
    // loginPage.remove()
    loginPage.replaceWith(transactionPage)
})

depositBtn.addEventListener('click', function () {
    //** */ catch Input target
    const depositNumber = getInputBalance('depositAmount')
    // const depositAmount = document.getElementById('depositAmount').value
    // const depositNumber = parseFloat(depositAmount)

    // //** */ catch current Amount Balance in Deposit
    // const depositBalance = document.getElementById('deposit-balance').innerText
    // const currentDepositBalance = parseFloat(depositBalance)

    // //** */ Total Balance in Deposit
    // const totalDeposit = depositNumber + currentDepositBalance
    // console.log(totalDeposit);
    // document.getElementById('deposit-balance').innerText = totalDeposit

    updateBalance('deposit-balance', depositNumber)

    updateBalance('main-balance', depositNumber)

    document.getElementById('depositAmount').value = ""
})

function updateBalance(id, depositNumber) {

    //** */ catch current Amount Balance in Main Balance
    const current = document.getElementById(id).innerText
    const currentMainBalance = parseFloat(current)

    //** */ Total Balance in Main Balance
    const totalBalance = depositNumber + currentMainBalance
    document.getElementById(id).innerText = totalBalance
}

withdrawBtn.addEventListener('click', function () {
    //** */ catch Input target
    // const withdrawAmount = document.getElementById('withdrawAmount').value
    // const withdrawNumber = parseFloat(withdrawAmount)
    const withdrawNumber = getInputBalance('withdrawAmount')

    //** */ catch current Amount Balance in Withdraw
    // const withdrawBalance = document.getElementById('withdraw-balance').innerText
    // const currentWithdrawBalance = parseFloat(withdrawBalance)

    //** */ Total Balance in Withdraw
    // const totalWithdraw = withdrawNumber + currentWithdrawBalance
    // document.getElementById('withdraw-balance').innerText = totalWithdraw

    updateBalance('withdraw-balance', withdrawNumber)

    //** */ catch current Amount Balance in Main Balance
    // const current = document.getElementById('main-balance').innerText
    // const currentMainBalance = parseFloat(current)

    //** */ Total Balance in Main Balance
    // const totalBalance = currentMainBalance - currentWithdrawBalance
    // document.getElementById('main-balance').innerText = totalBalance
    updateBalance('main-balance', -1 * withdrawNumber)

    document.getElementById('withdrawAmount').value = ""


})


function getInputBalance(id) {
    const inputAmount = document.getElementById(id).value
    const inputNumber = parseFloat(inputAmount)
    return inputNumber
}

