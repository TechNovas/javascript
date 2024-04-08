"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var totalbalance, accountpin, pinentered, atmquestion, CashWithdrawAmount, fastcashamount;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    totalbalance = 9000;
                    accountpin = 1987;
                    return [4 /*yield*/, inquirer_1.default.prompt([
                            {
                                name: 'pin',
                                message: 'Enter your pin number: ',
                                type: 'number',
                            },
                        ])];
                case 1:
                    pinentered = _a.sent();
                    if (!(pinentered.pin == accountpin)) return [3 /*break*/, 7];
                    return [4 /*yield*/, inquirer_1.default.prompt([
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
                        ])];
                case 2:
                    atmquestion = _a.sent();
                    if (!(atmquestion.transmethod == "cash withdraw")) return [3 /*break*/, 4];
                    return [4 /*yield*/, inquirer_1.default.prompt([
                            {
                                name: "withdraw",
                                message: "Enter the amount you want to withdraw: ",
                                type: "number",
                            }
                        ])];
                case 3:
                    CashWithdrawAmount = _a.sent();
                    if (totalbalance >= CashWithdrawAmount.withdraw) {
                        totalbalance -= CashWithdrawAmount.withdraw;
                        console.log("Your total balance is: ".concat(totalbalance));
                    }
                    else {
                        console.log("Insufficient balance");
                    }
                    return [3 /*break*/, 6];
                case 4: return [4 /*yield*/, inquirer_1.default.prompt([
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
                    ])];
                case 5:
                    fastcashamount = _a.sent();
                    if (totalbalance >= parseInt(fastcashamount.fastcash)) {
                        totalbalance -= parseInt(fastcashamount.fastcash);
                        console.log("Your total balance is: ".concat(totalbalance));
                    }
                    else {
                        console.log('Insufficient balance');
                    }
                    _a.label = 6;
                case 6: return [3 /*break*/, 8];
                case 7:
                    console.log("Incorrect PIN.");
                    _a.label = 8;
                case 8: return [2 /*return*/];
            }
        });
    });
}
main();
