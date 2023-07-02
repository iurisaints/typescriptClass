"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Teste do código
var conta_1 = require("./conta");
var minhaConta = new conta_1.ContaBancaria('123456');
minhaConta.depositar(1000);
minhaConta.sacar(500);
minhaConta.verificarSaldo();
