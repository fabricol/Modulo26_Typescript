// mudando o tipo de uma variável
// Ele não nos permite criar variáveis com aos mesmos nomes de variáveis
// let idade : any = 25

namespace casting {
    let idade: any =25;
    (idade as number).toFixed();
    (idade as string).length;
    // (idade as string[]).forEach(x => {
    //     console.log(x);
    // })

    
    let nome: string = 35 as unknown as string; // não foi possivel fazer a conversão number>str direto, por isso o unknown
    
}