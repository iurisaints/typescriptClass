import { Voo } from "./qt3";

const voo = new Voo("voo-123", "22-08-2023");

console.log(voo.proximoLivre());

console.log(voo.ocupa(1));

console.log(voo.proximoLivre());

console.log(voo.verifica(1));

console.log(voo.ocupa(2));

console.log(voo.vagas());