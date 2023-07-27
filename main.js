class ROICalc {
    constructor() {
        this.income = [];
        this.expense = [];
        this.yearlycf = [];
        this.investment = [];
    }

    showIncome() {
        console.log('\nThis is the income you input:');
        for (const item of this.income) {
            console.log(item);
        }
    }

    showExpense() {
        console.log('\nThis is the expense you input:');
        for (const item of this.expense) {
            console.log(item);
        }
    }

    monthlyIncome() {
        console.log("Let's get your income in!");
        const rentalIncome = parseFloat(prompt("How much do you intend to charge for monthly rent?: "));
        this.income.push(rentalIncome);

        const miscIncome = parseFloat(prompt("Will there be any other income from the property besides rent (such as laundry or a gym)? Input that here: "));
        this.income.push(miscIncome);

        const total = this.income.reduce((acc, curr) => acc + curr, 0);
        console.log(`\nOkay, so your total income is ${total}.`);

        if (this.income.length > 0 && this.expense.length > 0) {
            this.cashflow = this.income[0] - this.expense[0];
            console.log(`\nLooks like your monthly cash flow is ${this.cashflow}. Just a second while I figure out your yearly cash flow...`);

            const yearlyCashFlow = this.cashflow * 12;
            this.yearlycf.push(yearlyCashFlow);
            console.log(`\nAwesome! Based on your income and expenses, your yearly cash flow is:\n${yearlyCashFlow}. You can skip the 'calculate cash flow' step and move on to record your investment.`);

            const nextStep = prompt("Type 'investments' or 'back' to access the main menu. If you made a mistake in your income, type 'income' to redo it.");
            if (nextStep === "investments") {
                this.initialInvest();
            } else if (nextStep === 'back') {
                console.log('Okay!');
                return this.run();
            } else if (nextStep === 'income') {
                console.log('Okay!');
                this.income = [];
                this.monthlyIncome();
            }
        } else {
            const nextStep = prompt("\nLet's input your expenses: type 'expenses' or 'back' to access the main menu. If you made a mistake in your income, type 'income' to redo it.");
            if (nextStep === "expenses") {
                this.monthlyExpenses();
            } else if (nextStep === 'back') {
                console.log('Okay!');
                return this.run();
            } else if (nextStep === 'income') {
                console.log('Okay!');
                this.income = [];
                this.monthlyIncome();
            }
        }
    }

    monthlyExpenses() {
        console.log("\nLet's add your expenses!");

        const taxExpense = parseFloat(prompt("Monthly tax expenses: "));
        this.expense.push(taxExpense);

        const insExpense = parseFloat(prompt("Projected monthly insurance expenses: "));
        this.expense.push(insExpense);

        const utilityExpense = parseFloat(prompt("Projected monthly utility expenses: "));
        this.expense.push(utilityExpense);

        const hoaExpense = parseFloat(prompt("Projected monthly HOA fee: "));
        this.expense.push(hoaExpense);

        const yardExpense = parseFloat(prompt("Projected monthly lawn care expenses: "));
        this.expense.push(yardExpense);

        const vacancyExpense = parseFloat(prompt("Always best to be prepared for vacancy! Projected monthly vacancy budget: "));
        this.expense.push(vacancyExpense);

        const repairExpense = parseFloat(prompt("Everything breaks sometimes. Projected monthly repair budget: "));
        this.expense.push(repairExpense);

        const capExExpense = parseFloat(prompt("Sometimes the BIG things break. Projected monthly capital expense budget: "));
        this.expense.push(capExExpense);

        const propertyManagerExpense = parseFloat(prompt("Projected monthly property management fee: "));
        this.expense.push(propertyManagerExpense);

        const mortgageExpense = parseFloat(prompt("Almost done! How much is your monthly mortgage?: "));
        this.expense.push(mortgageExpense);

        const totalExpense = this.expense.reduce((acc, curr) => acc + curr, 0);
        console.log(`\nOkay, so your total expenses are ${totalExpense}.`);

        if (this.income.length > 0 && this.expense.length > 0) {
            this.cashflow = this.income[0] - this.expense[0];
            console.log(`\nLooks like your monthly cash flow is ${this.cashflow}. Just a second while I figure out your yearly cash flow...`);

            const yearlyCashFlow = this.cashflow * 12;
            this.yearlycf.push(yearlyCashFlow);
            console.log(`\nAwesome! Based on your income and expenses, your yearly cash flow is:\n${yearlyCashFlow}. You can skip the 'calculate cash flow' stepand move on to record your investment.`);

            const nextStep = prompt("Type 'investments' or 'back' to access the main menu. If you made a mistake in your expenses, type 'expenses' to redo it.");
            if (nextStep === "investments") {
                this.initialInvest();
            } else if (nextStep === 'back') {
                console.log('Okay!');
                return this.run();
            } else if (nextStep === 'expenses') {
                console.log('Okay!');
                this.expense = [];
                this.monthlyExpenses();
            }
        } else {
            console.log("\nPlease enter your income, and then move on to calculate your cash flow.");
            const nextStep = prompt("Type 'income' or 'back' to access the main menu. If you made a mistake in your expenses, type 'expenses' to redo it.");
            if (nextStep === "income") {
                this.monthlyIncome();
            } else if (nextStep === 'back') {
                console.log('Okay!');
                return this.run();
            } else if (nextStep === 'expenses') {
                console.log('Okay!');
                this.expense = [];
                this.monthlyExpenses();
            }
        }
    }

    yearlyCashFlow() {
        if (this.income.length === 0 || this.expense.length === 0) {
            console.log("You really should try entering your income and expenses first, but okay.");
        } else if (this.income.length > 0 && this.expense.length > 0) {
            this.cashflow = this.income[0] - this.expense[0];
            console.log(this.cashflow);
            const yearlyCashFlow = this.cashflow * 12;
            this.yearlycf.push(yearlyCashFlow);
            console.log(`Your yearly cash flow is: ${yearlyCashFlow}`);
        }
    }

    initialInvest() {
        console.log("Let's add your initial investment into the equation.");

        const downPayment = parseFloat(prompt("Please enter your initial down payment: "));
        this.investment.push(downPayment);

        const closingCosts = parseFloat(prompt("Please insert your closing costs: "));
        this.investment.push(closingCosts);

        const rehabBudget = parseFloat(prompt("Please insert your rehab budget: "));
        this.investment.push(rehabBudget);

        const miscOtherCost = parseFloat(prompt("Please insert any other initial investment costs: "));
        this.investment.push(miscOtherCost);

        const totalInvestment = this.investment.reduce((acc, curr) => acc + curr, 0);
        console.log(`\nJust to confirm, your initial investment is:\n${totalInvestment}`);

        if (this.yearlycf.length > 0 && this.investment.length > 0) {
            console.log("\nNow that you've input that absolutely bananas amount of information, let's get your projected return on investment!");

            let finalCashflow = 0;
            let finalInvestment = 0;
            for (const item of this.yearlycf) {
                finalCashflow += item;
            }
            for (const item of this.investment) {
                finalInvestment += item;
            }
            const ROI = (finalCashflow / finalInvestment) * 100;
            console.log(`\nAll done! Your projected ROI is:\n${ROI}%. Do with that information what you will.`);
        } else {
            console.log("\nHmmm, I think something is missing.");
            const nextStep = prompt("Type 'back' to access the main menu. If you made a mistake in your investments record, type 'investment' to redo it.");
            if (nextStep === 'back') {
                console.log('Okay!');
                return this.run();
            } else if (nextStep === 'investment') {
                console.log('Okay!');
                this.investment = [];
                this.initialInvest();
            }
        }
    }

    ROI() {
        if (this.yearlycf.length === 0 || this.investment.length === 0) {
            console.log("Can't do math if the input isn't there! Input your income/expenses, calculate your cash flow, and input your investment first.");
        } else if (this.yearlycf.length > 0 && this.investment.length > 0) {
            console.log("Now that you've input that absolutely bananas amount of information, let's get your projected return on investment!");

            let finalCashflow = 0;
            let finalInvestment = 0;
            for (const item of this.yearlycf) {
                finalCashflow += item;
            }
            for (const item of this.investment) {
                finalInvestment += item;
            }
            const ROI = (finalCashflow / finalInvestment) * 100;
            console.log(`All done! Your projected ROI is:\n${ROI}%. Do with that information what you will.`);
        }
    }

    run() {
        console.log('\nWelcome to the greatest ROI Calculator in the great state of Exaggeration!');
        console.log("Math is hard, so please make sure to input your income, expenses, investments, and calculate your cash flow before hitting that letter E!");
        
        while (true) {
            console.log('\nThese are your options:');
            const response = prompt('\nType:\n- "A" to report your property income,\n- "B" to input your property expense,\n- "C" to calculate cash flow,\n- "D" to report your initial investment,\n- "E" to get your total projected ROI, or\n- "quit" to quit the program:\n');
        
            if (response.toLowerCase() === 'quit') {
                console.log('Out the door dinosaur!');
                break;
            } else if (response.toLowerCase() === 'a') {
                this.monthlyIncome();
            } else if (response.toLowerCase() === 'b') {
                this.monthlyExpenses();
            } else if (response.toLowerCase() === 'c') {
                this.yearlyCashFlow();
            } else if (response.toLowerCase() === 'd') {
                this.initialInvest();
            } else if (response.toLowerCase() === 'e') {
                this.ROI();
            } else {
                console.log("Try something else, please. Look closely at the options.");
            }
        }
    }
}


const myROIC = new ROICalc();


myROIC.run();
