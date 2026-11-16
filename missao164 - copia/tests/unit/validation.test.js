// importa a função 
const {normalizeTitle, validateTaskInput } = require('../../src/validation');

// agrupa um bloco de testes relacionado para manter a organização
describe('Validação de tarefas', () => {

    // remove espaços
    test('Remove espaços do início e do fim do título', () => { 
        expect(normalizeTitle(' Teste Unitário ')).toBe('Teste Unitário');
    });

    //retorna string vazia se o titulo for numero
    test('Retorna string vazia se o título for um número', () => {
        expect(normalizeTitle(15487)).toBe('');
    });
    
    // retorna string vazia se titulo for nulo
    test('Retorna string vazia se o título for nulo', () => {
        expect(normalizeTitle(null)).toBe('');
    });

    // retorna string vazia se titulo for indefinido
    test('Retorna string vazia se o título for indefinido', () => {
        expect(normalizeTitle(undefined)).toBe('');
    });

     // aceita titulo com letras maiusculas
    test('Aceita um título com letras maiúsculas', () => {
                expect(validateTaskInput({ title: 'ESTUDAR' })).toEqual({
                        valid: true,
                        data: {
                                title: 'ESTUDAR',
                                description: ''
                        }
                });
        });

        // aceita titulo com uma palavra
        test('Aceita um título com uma palavra', () => {
                expect(validateTaskInput({ title: 'Prova' })).toEqual({
                 valid: true,
                 data: {
                                title: 'Prova',
                                description: ''
                        }
                });
        });

        // aceita titulo com duas palavras
        test('Aceita um título com duas palavras', () => {
                expect(validateTaskInput({ title: 'Fazer tarefa' })).toEqual({
                        valid: true,
                        data: {
                                title: 'Fazer tarefa',
                                description: ''
                        }
                });
        });
});