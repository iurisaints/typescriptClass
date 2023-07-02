"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaBancaria = void 0;
var ContaBancaria = /** @class */ (function () {
    function ContaBancaria(numeroConta) {
        this.numeroConta = numeroConta;
        this.saldo = 0;
    }
    ContaBancaria.prototype.depositar = function (valor) {
        if (valor > 0) {
            this.saldo += valor;
            console.log("Dep\u00F3sito de R$ ".concat(valor.toFixed(2), " realizado. Novo saldo: R$ ").concat(this.saldo.toFixed(2)));
        }
        else {
            console.log('O valor do depósito deve ser maior que zero.');
        }
    };
    ContaBancaria.prototype.sacar = function (valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            console.log("Saque de R$ ".concat(valor.toFixed(2), " realizado. Novo saldo: R$ ").concat(this.saldo.toFixed(2)));
        }
        else {
            console.log('Saldo insuficiente para realizar o saque.');
        }
    };
    ContaBancaria.prototype.verificarSaldo = function () {
        console.log("Saldo atual: R$ ".concat(this.saldo.toFixed(2)));
    };
    return ContaBancaria;
}());
exports.ContaBancaria = ContaBancaria;
