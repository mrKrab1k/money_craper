const budgetValue = document.querySelector('.budget-value')
const startBtn = document.getElementById('start')

const expensesItemBtn = document.querySelector('.expenses-item-btn')
const expensesItem1 = document.querySelector('#expenses_1')
const expensesItem2 = document.querySelector('#expenses_2')
const expensesItem3 = document.querySelector('#expenses_3')
const expensesItem4 = document.querySelector('#expenses_4')
const expensesValue = document.querySelector('.expenses-value')

const optionalExpensesItem1 = document.querySelector('#optionalexpenses_1')
const optionalExpensesItem2 = document.querySelector('#optionalexpenses_2')
const optionalExpensesItem3 = document.querySelector('#optionalexpenses_3')
const optionalExpensesValue = document.querySelector('.optionalexpenses-value')
const optionalExpensesBtn = document.querySelector('.optionalexpenses-btn')

const dayBudgetValue = document.querySelector('.daybudget-value')
const levelValue = document.querySelector('.level-value')
const countBudgetBtn = document.querySelector('.count-budget-btn')

const chooseIncome = document.querySelector('#income')
const incomeValue = document.querySelector('.income-value')

const checkSavings = document.querySelector('.checksavings')
const summa = document.querySelector('.choose-sum')
const percent = document.querySelector('.choose-percent')
const monthSavingsValue = document.querySelector('.monthsavings-value')
const yearSavingsValue = document.querySelector('.yearsavings-value')


summa.disabled = true
percent.disabled = true
const appData = {
    budget: 0,
    expenses: {},
    o_expenses: {},
    income: 0,
    savings: false,
    start(){
        money = +prompt('Ваш бюджет на месяц?','')

        while (money == '' || money == null || isNaN(money)) {
            money = +prompt('Вы не ввели бюджет на месяц!','')
        }
        appData.budget = money
        budgetValue.textContent = appData.budget

    },
    getExpenses: () => {
        let a = expensesItem1.value
        let b = expensesItem2.value
        let c = expensesItem3.value
        let d = expensesItem4.value
        let sum = 0

        if ((typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50 && a.length >= 3){
            appData.expenses[a] = b
            sum += +b
        }

        if ((typeof (c)) != null && (typeof (d)) != null && c != '' && d != '' && c.length < 50 && c.length >= 3){
            appData.expenses[c] = d
            sum += +d

        }
        expensesValue.textContent = sum
    },
    getOExpenses: () => {
        let o_a = optionalExpensesItem1.value
        let o_b = optionalExpensesItem2.value
        let o_c = optionalExpensesItem3.value
        let o_sum = 0

        if (typeof (a) != null && o_a != ''){
            o_sum += +o_a
        }
        if (typeof (b) != null && o_b != ''){
            o_sum += +o_b
        }
        if (typeof (c) != null && o_c != ''){
            o_sum += +o_c
        }
        optionalExpensesValue.textContent = o_sum
    },
    getMoneyPerDay: () => {
        let a1 = expensesItem2.value
        let b1 = expensesItem4.value
        let bud = appData.budget
        let budPerDay = 0

        budPerDay = ((+bud - +a1 - +b1)/30).toFixed()
        dayBudgetValue.textContent = budPerDay

        if (+budPerDay <= 100){
            levelValue.textContent = 'Минимальный уровень достатка'
        }else if (+budPerDay > 100 && +budPerDay < 2000){
            levelValue.textContent = 'Средний уровень достатка'
        }else if (+budPerDay >= 2000){
            levelValue.textContent = 'Высокий уровень достатка'
        }else {
            levelValue.textContent = 'Произошла ошибка'
        }
    },
    getIncome: () => {
        let aI = chooseIncome.value
        appData.income = aI.split(',')
        if (isNaN(aI))
        incomeValue.textContent = aI
    },
    setSavings: () => {
        if (appData.savings == true) {
            appData.savings = false
        } else {
            appData.savings = true
        }
        console.log(appData.savings)
    },
    getSavings:() => {
        if (appData.savings == True) {
            
        let s = +summa.value
        let p = +percent.value
        appData.monthimcome = sum/100/12*percent
        appData.yearincome = sum/100*percent
        monthSavingsValue.textContent = appData.monthimcome.toFixed(2)
        yearSavingsValue.textContent = appData.yearimcome.toFixed(2)

        }
    }

}

startBtn.addEventListener('click', appData.start)
expensesItemBtn.addEventListener('click', appData.getExpenses)
optionalExpensesBtn.addEventListener('click', appData.getOExpenses)
countBudgetBtn.addEventListener('click', appData.getMoneyPerDay)
chooseIncome.addEventListener('input', appData.getIncome)
checkSavings.addEventListener('input', () => {
    appData.setSavings
    if (checkSavings.checked) {
        summa.disabled = false
        percent.disabled = false
    } else{
        summa.disabled = true
        percent.disabled = true
        summa.value = ''
        percent.value = ''
        monthSavingsValue.textContent = ''
        yearSavingsValue.textContent = ''
    }
})
summa.addEventListener('input', appData.getSavings)
percent.addEventListener('input', appData.getSavings)


const yearValue = document.querySelector('.year-value')
const monthValue = document.querySelector('.month-value')
const dayValue = document.querySelector('.day-value')
const now = new Date()

yearValue.value = now.getFullYear()
monthValue.value = now.getMonth() +1
dayValue.value = now.getDate()