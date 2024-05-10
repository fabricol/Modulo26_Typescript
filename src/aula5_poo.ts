class Pessoa {
    nome: string;
    renda?: number;

    constructor(nome: string, renda?: number) {
        this.nome = nome
        this.renda = renda;
    }

    dizOla(): string{
        return `${this.nome} disse oi`;
    }
}
//Novas funcionalidades do TypeScript
class ContaBancaria {
    // private saldo: number = 0;
    // O private não permite que as classes herdeiras acessem essa propriedade, por isso colocamos protected
    protected saldo: number = 0;
    numeroDaConta: number;

    constructor(numeroDaConta: number) {
        this.numeroDaConta = numeroDaConta;
    }

    //membro static fica apenas na classe, não é transportado par as instâncias
    static retornaNumeroDoBanco() {
        return 123;
    }

    getSaldo() {
        return this.saldo;
    }

    depositar(valor: number) {
        this.saldo += valor;
    }
}

class ContaBancariaPessoasFisica extends ContaBancaria {
    depositar(valor: number):void {
        this.saldo = valor * 2;
    }
}


const contaDoPedro = new ContaBancariaPessoasFisica(123456)

ContaBancaria.retornaNumeroDoBanco()
