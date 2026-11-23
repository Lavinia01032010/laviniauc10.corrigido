const {calcularAcrescimo, classificarDesempenho, validarJogador, calcularEntrega, converterRealParaDolar, calcularPedido, verificarDisponibilidade, validarTamanhoSenha, calcularMediaFinal  } = require ("../src/operacoes");

//Q. 1
describe("Questão 1 - calcularAcrescimo", () =>{
    test('Verificar se mensagem de erro é retornada', () =>{
        expect, () => (calcularAcrescimo(1, -3)).toThrow('Dados inválidos');
    });

    test('Verificar se a função aceita o percentual máximo (100%)', () => {
        expect(calcularAcrescimo(50, 100)).toBe(100);
    });

    test('Verificar se aceita número percentual decimal', () =>{
        expect(calcularAcrescimo(100, 2.5)).toBe(102.5);
    });

    test('Verifica se volta ao valor original se o percentual for 0', () =>{
        expect(calcularAcrescimo(500, 0)).toBe(500);
    });
});

//Q. 2
describe("Questão  - classificarDesempenho", () => {
    test('Deve retornar "excelente"', () =>{
        expect(classificarDesempenho(9.56)).toBe('Excelente');
    });

    test('Deve retornar "bom"', () =>{
        expect(classificarDesempenho(7)).toBe('Bom');
    });

    test('Deve retornar "regular"', () =>{
        expect(classificarDesempenho(5)).toBe('Regular');
    });

    test('Deve retornar "insuficiente"', () =>{
        expect(classificarDesempenho(3.5)).toBe('Insuficiente');
    });

    test('Deve retornar "nota inválida"', () =>{
          expect(() => classificarDesempenho(11)).toThrow('Nota inválida')
    });
});

//Q. 3

describe("Questão 3 - validarJogador", () => {
    test('Verificar dados válidos', () => {
        expect(validarJogador('João', 20, 15)).toBe(true);
    });

    test ('Nome de usuário vazio', () => {
        expect(validarJogador('', 20, 15)).toBe(false);
    });

     test('Nome de usuário contém apenas espaços', () => {
        expect(validarJogador('   ', 20, 15)).toBe(false);
    });

     test('Idade abaixo do limite permitido', () => {
        expect(validarJogador('João', 12, 15)).toBe(false);
    });

    test('Idade acima do limite permitido', () => {
        expect(validarJogador('João', 81, 15)).toBe(false);
    });

    test('A pontuação é negativa', () => {
        expect(validarJogador('João', 20, -1)).toBe(false);
    });

    test('A pontuação é igual a zero', () => {
        expect(validarJogador('João', 81, 0)).toBe(false);
    });

     test('A idade está exatamente no limite mínimo permitido', () => {
        expect(validarJogador('João', 13, 15)).toBe(true);
    });

    test('A idade está exatamente no limite máximo permitido', () => {
        expect(validarJogador('João', 80, 15)).toBe(true);
    });
    
});

//Q. 4
describe("Questão 4 - calcularEntrega", () => {
    test('Teste 1', () => {
        expect(calcularEntrega(350, 10)).toBe(0);
    });

    test ('Teste 2', () => {
        expect(calcularEntrega(100, 3)).toBe(10);
    });

     test ('Teste 3', () => {
        expect(calcularEntrega(100, 8)).toBe(16);
    });

    test ('Teste 4', () => {
        expect(calcularEntrega(300, 5)).toBe(0);
    });

    test ('Teste 5', () => {
        expect(calcularEntrega(0, 5)).toBe(10);
    });

    test ('Teste 6', () => {
        expect, () => (calcularEntrega(-50, 10)).toThrow('Erro');
    });

    test ('Teste 7', () => {
        expect, () => (calcularEntrega(100, -2)).toThrow('Erro');
    });

});

//Q. 5

describe("Questão 5 - converterRealParaDolar",() =>{
    test('Teste 1', () => {
        expect(converterRealParaDolar(100, 5)).toBe(20);
    });

    test('Teste 2', () => {
        expect(converterRealParaDolar(250, 5)).toBe(50);
    });

    test('Teste 3', () => {
        expect(converterRealParaDolar(0, 5)).toBe(0);
    });

    test('Teste 4', () => {
        expect(converterRealParaDolar(100, 4)).toBe(25);
    });

    test('Teste 5', () => {
         expect, () => (converterRealParaDolar("100", 5)).toThrow('Erro');
    });

    test('Teste 6', () => {
         expect, () => (converterRealParaDolar(100, "5")).toThrow('Erro');
    });

    test('Teste 7', () => {
         expect, () => (converterRealParaDolar(-50, 5)).toThrow('Erro');
    });

    test('Teste 8', () => {
         expect, () => (converterRealParaDolar(100, 0)).toThrow('Erro');
    });
})

//Q. 6
describe("Questão 6 - calcularPedido", () => {
    test("deve calcular o valor total corretamente", () => {
        expect(calcularPedido(4, 20)).toBe(80);
    });

    test("deve retornar zero quando o preço for zero", () => {
        expect(calcularPedido(3, 0)).toBe(0);
    });

    test("deve lançar erro quando a quantidade for zero", () => {
        expect(() => calcularPedido(0, 10))
            .toThrow("Dados inválidos");
    });

    test("deve calcular o pedido com preço negativo", () => {
        expect(() => calcularPedido(2, -5)).toThrow("Dados inválidos");
    });
});

// Q. 7

describe("Questão 7 - validarTamanhoSenha", () =>{

    test("deve aceitar senha com 6 caracteres", () => {
        expect(validarTamanhoSenha("abc123")).toBe(true);
    });

    test("deve rejeitar senha com 5 caracteres", () => {
        expect(validarTamanhoSenha("abc12")).toBe(false);
    });

    test("deve rejeitar senha com 12 caracteres", () => {
        expect(validarTamanhoSenha("abc123456789")).toBe(true);
    });

    test("deve aceitar senha com 10 caracteres", () => {
        expect(validarTamanhoSenha("abc1234567")).toBe(true);
    });


    test("deve rejeitar senha com 13 caracteres", () => {
        expect(validarTamanhoSenha("abc1234567890")).toBe(false);
    });

    //testes criados
    test("deve aceitar senha com 7 caracteres", () => {
        expect(validarTamanhoSenha("abc1234")).toBe(true);
    });


    test("deve aceitar senha com 11 caracteres", () => {
        expect(validarTamanhoSenha("abc12345678")).toBe(true);
    });

});

// Q. 8

describe("Questão 8 - verificarDisponibilidade", () => {

    test("deve autorizar retirada quando há estoque suficiente", () => {
        expect(verificarDisponibilidade(20, 5))
            .toBe("Retirada autorizada");
    });

    test("deve informar estoque insuficiente", () => {
        expect(verificarDisponibilidade(5, 10))
            .toBe("Estoque insuficiente");
    });

    test("deve autorizar retirada de toda a quantidade disponível", () => {
        expect(verificarDisponibilidade(10, 10))
            .toBe("Retirada autorizada");
    });

    test("deve informar estoque insuficiente para quantidade zero", () => {
        expect(() => verificarDisponibilidade(10, 0)).toThrow("Quantidade inválida");
    });

    test("deve lançar erro para estoque negativo", () => {
        expect(() => verificarDisponibilidade(-5, 2))
            .toThrow("Estoque inválido");
    });

    test("deve lançar erro para quantidade negativa", () => {
        expect(() => verificarDisponibilidade(10, -3)).toThrow("Quantidade inválida");
    });

});

// Q. 9
describe("Questão 9 - calcularMediaFinal", () => {
    test("deve calcular a média corretamente", () => {
        expect(calcularMediaFinal(6, 8)).toBe(7);
    });

    test("deve retornar média máxima", () => {
        expect(calcularMediaFinal(10, 10)).toBe(10);
    });

    test("deve calcular média com nota zero", () => {
        expect(calcularMediaFinal(0, 8)).toBe(4);
    });

    test("deve rejeitar nota negativa", () => {
        expect(() => calcularMediaFinal(-2, 8))
            .toThrow("Notas inválidas");
    });

    test("deve rejeitar nota superior a 10", () => {
        expect(() => calcularMediaFinal(8, 12))
            .toThrow("Notas inválidas");
    });

    //testes criados

    test("deve calcular média de notas iguais", () => {
        expect(calcularMediaFinal(7, 7)).toBe(7);
    });

    test("deve retornar zero", () => {
        expect(calcularMediaFinal(0, 0)).toBe(0);
    });

    test("deve rejeitar segunda nota negativa", () => {
        expect(() => calcularMediaFinal(8, -1)).toThrow("Notas inválidas");
    });

});
