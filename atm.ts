import inquirer from "inquirer";

async function main() {
    let totalbalance: number = 9000;
    let accountpin: number = 1987;

    let pinentered = await inquirer.prompt([
        {
            name: 'pin',
            message: 'Enter your pin number: ',
            type: 'number',
        },
    ]);

    if (pinentered.pin == accountpin) {
        let atmquestion = await inquirer.prompt([
            {
                name: "account type",
                message: "Select your account type: ",
                type: "list",
                choices: [
                    "current account",
                    "saving account",
                ]
            },
            {
                name: "transmethod",
                message: "Select your transition method: ",
                type: "list",
                choices: [
                    "cash withdraw",
                    "fast cash",
                ]
            }
        ]);

        if (atmquestion.transmethod == "cash withdraw") {
            let CashWithdrawAmount = await inquirer.prompt([
                {
                    name: "withdraw",
                    message: "Enter the amount you want to withdraw: ",
                    type: "number",
                }
            ]);
            if (totalbalance >= CashWithdrawAmount.withdraw) {
                totalbalance -= CashWithdrawAmount.withdraw;
                console.log(`Your total balance is: ${totalbalance}`);
            } else {
                console.log(`Insufficient balance`);
            }
        } else {
            let fastcashamount = await inquirer.prompt([
                {
                    name: "fastcash",
                    message: "Select the amount you want to withdraw: ",
                    type: "list",
                    choices: [
                        "1000",
                        "2000",
                        "3000",
                        "10000",
                    ]
                }
            ]);
            if (totalbalance >= parseInt(fastcashamount.fastcash)) {
                totalbalance -= parseInt(fastcashamount.fastcash);
                console.log(`Your total balance is: ${totalbalance}`);
            } else {
                console.log('Insufficient balance');
            }
        }
    } else {
        console.log("Incorrect PIN.");
    }
}

main();
