# RELATÓRIO DE TESTES DE SOFTWARE

## 1\. Identificação do projeto

| Informação | Descrição |
| --- | --- |
| **Nome do projeto:** | Academia Viva |
| **Resumo do projeto:** | Plataforma de cursos onlines e presenciais. |
| **Nome do testador:** | Lavinia G. Freitas |
| **Data dos testes:** | 05/11/2026 |
| **Tecnologias utilizadas:** | JavaScript, Node.js, Jest |

---

## 2\. Objetivo dos testes

Descreva qual foi o objetivo da realização dos testes na aplicação.

- Qual funcionalidade foi testada?
- O que os testes pretendiam verificar?
- Quais possíveis erros ou falhas deveriam ser identificados?

**Resposta:**

- A funcionalidade testada foi a validação do formulário de cadastro dos usuários.
- Os testes pretendiam verificar se os campos do formulário aceitam informações válidas e rejeitam informações incorretas.
- Os erros seriam nomes muito curtos ou vazios, e-mails inválidos, telefone com tipo incorreto e modalidades inexistentes ou escritas com letras maiúsculas e minúsculas diferentes.

---

## 3\. Ambiente de testes

Informe as ferramentas e tecnologias utilizadas para executar os testes.

| Ferramenta/Tecnologia | Versão |
| --- | --- |
| JavaScript | \[Versão\] |
| Node.js | v22.2.0 |
| Jest | 30.5.2 |
| NPM | 10.7.0 |
| Visual Studio Code | 1.145.0 |

**Comando utilizado preparar o ambiente:**

``` bash
[npm install]
```

**Comando utilizado executar o sistema (servidor):**

``` bash
[npm start]
```

**Comando utilizado para executar os testes:**

``` bash
[npm test]
```

---

## 4\. Funcionalidades testadas

Liste as funções, métodos ou componentes da aplicação que foram submetidos aos testes.

| Nº | Funcionalidade/Função | Arquivo | Objetivo do teste |
| --- | --- | --- | --- |
| 1 | validateLead | validation.js | Verificar se os dados do cadastro são válidos |

---

## 5\. Registro detalhado dos testes realizados

Registre individualmente TODOS os testes implementados.

Para cada teste, preencha as informações abaixo.

### Teste 01 – \[Verifica nome válido\]

- **Funcionalidade testada:** validateLead
- **Nome do teste no Jest:** Verifica nome válido
- **Objetivo:** Verificar se a função aceita nomes com pelo menos 3 caracteres.
- **Entrada utilizada:** "João", email: "email@email.com"
- **Resultado esperado:** Nenhum erro e cadastro válido.
- **Resultado obtido:** Nenhum erro e cadastro válido.
- **Status:** Aprovado 

**Código do teste:**

``` javascript
test("Verifica nome válido", () => {
    const result = validateLead({name: "João", email: "email@email.com"});
    expect(result.errors.length).toBe(0);
    expect(result.valid).toBe(true);
});
```

---

### Teste 02 – \[Verifica nome inválido\]

- **Funcionalidade testada:** validateLead
- **Nome do teste no Jest:** Verifica nome inválido
- **Objetivo:** Verificar se a função rejeita nomes com menos de 3 caracteres.
- **Tipo de cenário:** Negativo
- **Entrada utilizada:** {name: "J", email: "email@email.com"}
- **Resultado esperado:** Retornar a mensagem "Informe seu nome (mínimo de 3 caracteres)."
- **Resultado obtido:** Mensagem de erro esperada.
- **Status:** Aprovado

**Código do teste:**

``` javascript
test("Verifica nome inválido", () => {
    //passamos um nome inválido com apenas um caractere e aguardamos o resultado na constante "result"
    const result = validateLead({name: "J", email: "email@email.com"});
    expect(result.errors).toContain("Informe seu nome (mínimo de 3 caracteres).");
});
```

---

### Teste 03 – \[Cadastro válido completo\]

- **Funcionalidade testada:** validateLead
- **Nome do teste no Jest:** Verifica cadastro válido completo (todos os campos preenchidos corretamente)
- **Objetivo:** Verificar se a função aceita um cadastro com todos os campos preenchidos corretamente.
- **Entrada utilizada:** Nome: "João E-mail", e-mail: "joao@email.com", telefone: "(27) 99999-9999", modalidade: "Online"
- **Resultado esperado:** Nenhum erro e resultado válido (true).
- **Resultado obtido:** Nenhum erro e resultado válido (true).
- **Status:** Aprovado

**Código do teste:**

``` javascript
test("Verifica cadastro válido completo (todos os campos preenchidos corretamente)", () => {
    const lead = {
        name: "João E-mail",
        email: "joao@email.com",
        phone: "(27) 99999-9999",
        modality: "Online"
    };
    const result = validateLead(lead);
    expect(result.errors.length).toBe(0);
    expect(result.valid).toBe(true);
});
```

---

### Teste 04 – \[Verifica cadastro mínimo\]

- **Funcionalidade testada:** validateLead
- **Nome do teste no Jest:** Verifica cadastro mínimo (apenas os campos obrigatórios preenchidos, omitindo os opcionais)
- **Objetivo:** Verificar se a função aceita um cadastro contendo apenas os campos obrigatórios
- **Tipo de cenário:** Positivo
- **Entrada utilizada:** Nome: João, e-mail: "joao@email.com"
- **Resultado esperado:** Nenhum erro e resultado válido (true)
- **Resultado obtido:** Nenhum erro e resultado válido (true)
- **Status:** Aprovado

**Código do teste:**

``` javascript
test("Verifica cadastro mínimo (apenas os campos obrigatórios preenchidos, omitindo os opcionais)", () => {
    const lead = {
        name: "João",
        email: "joao@email.com"
    };
    const result = validateLead(lead);
    expect(result.errors.length).toBe(0);
    expect(result.valid).toBe(true);
});
```

---

### Teste 05 – \[Nome com espaços vazios\]

- **Funcionalidade testada:** validateLead
- **Nome do teste no Jest:** Nome com espaços vazios (entrada contendo apenas espaços em branco)
- **Objetivo:** Verificar se a função rejeita nomes que possuem apenas espaços em branco
- **Entrada utilizada:** Nome: "   ", e-mail: "joao@email.com".
- **Resultado esperado:** Retornar a mensagem "Informe seu nome (mínimo de 3 caracteres)."
- **Resultado obtido:** Mensagem de erro esperada
- **Status:** Aprovado

**Código do teste:**

``` javascript
test("Nome com espaços vazios (entrada contendo apenas espaços em branco)", () => {
    const lead = {
        name: "   ",
        email: "joao@email.com"
    };
    const result = validateLead(lead);
    expect(result.errors).toContain("Informe seu nome (mínimo de 3 caracteres).");
});
```

---

### Teste 06 – Nome com tipo incorreto

- **Funcionalidade testada:** validateLead
- **Nome do teste no Jest:** Nome com tipo incorreto (entrada com tipo diferente de string)
- **Objetivo:** Verificar se a função rejeita nomes enviados em formato numérico.
- **Tipo de cenário:** Excepcional
- **Entrada utilizada:** Nome: 12345, e-mail: "joao@email.com".
- **Resultado esperado:** Retornar a mensagem "Informe seu nome (mínimo de 3 caracteres)."
- **Resultado obtido:** Mensagem de erro esperada.
- **Status:** Aprovado

**Código do teste:**

``` javascript
test("Nome com tipo incorreto (entrada com tipo diferente de string)", () => {
        //passamos um objeto lead com o campo name contendo um número em vez de uma string
        const lead = {
            name: 12345,
            email: "joao@email.com"
        };
        //chamamos a função validateLead() passando o objeto lead e aguardamos o resultado na constante "result"
        const result = validateLead(lead);
        expect(result.errors).toContain("Informe seu nome (mínimo de 3 caracteres).");
    });

```

---

### Teste 07 – E-mail sem @

- **Funcionalidade testada:** validateLead
- **Nome do teste no Jest:** E-mail sem @ (exemplo: anaemail.com)
- **Objetivo:** Verificar se a função rejeita endereços de e-mail sem o caractere @.
- **Entrada utilizada:**  name: "João", email: "joaoemail.com"
- **Resultado esperado:** Exibir a mensagem "Informe um e-mail válido"
- **Resultado obtido:** Exibe a mensagem de erro.
- **Status:** Aprovado

**Código do teste:**

``` javascript
test("E-mail sem @ (exemplo: anaemail.com)", () => {
        //passamos um objeto lead com o campo email sem o caractere "@" para simular um e-mail inválido
        const lead = {
            name: "João",
            email: "joaoemail.com"
        };
     //chamamos a função validateLead() passando o objeto lead e aguardamos o resultado na constante "result"
        const result = validateLead(lead);
        expect(result.errors).toContain("Informe um e-mail válido.");
    });
```

---

### Teste 08 – E-mail incompleto sem o domínio e sem o ponto

- **Funcionalidade testada:** validateLead
- **Nome do teste no Jest:** E-mail incompleto sem o domínio e sem o ponto (exemplo: email@email)
- **Objetivo:** Verificar se a função rejeita e-mails incompletos que não possuem domínio e ponto após o `@`.
- **Tipo de cenário:** Negativo
- **Entrada utilizada:**  name: "João", email: "joao@email"
- **Resultado esperado:** Informe um e-mail válido.
- **Resultado obtido:**Retornou a mensagem de erro esperada.
- **Status:** Aprovado

**Código do teste:**

``` javascript
test("E-mail incompleto sem o domínio e sem o ponto (exemplo: email@email)", () => {
        //passamos um objeto lead com o campo email incompleto, sem o domínio e sem o ponto, para simular um e-mail inválido
        const lead = {
            name: "João",
            email: "joao@email"
        };
        //chamamos a função validateLead() passando o objeto lead e aguardamos o resultado na constante "result"
        const result = validateLead(lead);
        expect(result.errors).toContain("Informe um e-mail válido.");
    });
```

---

### Teste 09 – E-mail com tipo incorreto

- **Funcionalidade testada:** validateLead
- **Nome do teste no Jest:** E-mail com tipo incorreto (entrada com tipo diferente de string)
- **Objetivo:** Verificar se a função rejeita valores numéricos enviados no campo de e-mail.
- **Entrada utilizada:**  name: "João", email: 12345 
- **Resultado esperado:** Retornar a mensagem "Informe um e-mail válido."
- **Resultado obtido:** Retornou a mensagem de erro esperada.
- **Status:** Aprovado

**Código do teste:**

```javascript
test("E-mail com tipo incorreto (entrada com tipo diferente de string)", () => {
    //passamos um objeto lead com o campo email contendo um número em vez de uma string
    const lead = {
        name: "João",
        email: 12345
    };
    //chamamos a função validateLead() passando o objeto lead e aguardamos o resultado na constante "result"
    const result = validateLead(lead);
    expect(result.errors).toContain("Informe um e-mail válido.");
});
```

---

### Teste 10 – Telefone com tipo incorreto

- **Funcionalidade testada:** validateLead
- **Nome do teste no Jest:** Telefone com tipo incorreto (enviado como tipo numérico em vez de string)
- **Objetivo:** Verificar se a função rejeita quando o telefone é enviado como tipo numérico em vez de texto.
- **Tipo de cenário:** Excepcional
- **Entrada utilizada:**  name: "João", email: "joao@email.com", phone: 12345 
- **Resultado esperado:** Retornar a mensagem "O telefone deve ser um texto."
- **Resultado obtido:** Retornou a mensagem de erro esperada.
- **Status:** Aprovado

**Código do teste:**

```javascript
test("Telefone com tipo incorreto (enviado como tipo numérico em vez de string)", () => {
    //passamos um objeto lead com o campo phone contendo um número em vez de uma string
    const lead = {
        name: "João",
        email: "joao@email.com",
        phone: 12345
    };
    //chamamos a função validateLead() passando o objeto lead e aguardamos o resultado na constante "result"
    const result = validateLead(lead);
    expect(result.errors).toContain("O telefone deve ser um texto.");
});
```

---

### Teste 11 – Modalidade/interesse inválido

- **Funcionalidade testada:** validateLead
- **Nome do teste no Jest:** Modalidade/interesse inválido (modalidade que não existe na lista permitida)
- **Objetivo:** Verificar se a função rejeita modalidades que não existem na lista permitida pelo sistema.
- **Entrada utilizada:** `{ name: "João", email: "joao@email.com", phone: "123456789", interest: "Modalidade Inválida" }`
- **Resultado esperado:** Retornar a mensagem `"Selecione uma modalidade válida."`
- **Resultado obtido:** Retornou a mensagem de erro esperada.
- **Status:** Aprovado

**Código do teste:**

```javascript
test("Modalidade/interesse inválido (modalidade que não existe na lista permitida)", () => {
    // passamos um objeto lead com o campo interest contendo uma modalidade inválida
    const lead = {
        name: "João",
        email: "joao@email.com",
        phone: "123456789",
        interest: "Modalidade Inválida"
    };
    // chamamos a função validateLead() passando o objeto lead e aguardamos o resultado na constante "result"
    const result = validateLead(lead);
    expect(result.errors).toContain("Selecione uma modalidade válida.");
});

---


> **Importante:** Duplique o bloco de registro acima para documentar todos os testes realizados. Não registre apenas os testes aprovados. Os testes reprovados também devem ser documentados.

---

## 6\. Resumo dos resultados

Apresente um resumo quantitativo de todos os testes executados.

| Indicador | Quantidade |
| --- | ---: |
| Total de testes executados | 12 |
| Testes aprovados (Passed) | 12 |
| Testes reprovados (Failed) | 0 |

**Percentual de aprovação:**

`(12 ÷ 12) × 100 = 100%`

*(Nota: Durante o desenvolvimento dos testes, o caso de teste "email com tipo incorreto" apresentou falha inicial por um typeerror (esqueci do colchete final) na mensagem esperada, sendo corrigido e reexecutado até atingir 100% de aprovação.)

---

## 7\. Evidências da execução dos testes

Insira capturas de tela (prints) que comprovem a execução dos testes no ambiente de desenvolvimento.
![alt text](image.png)

Inclua evidências que mostrem:

- Execução dos testes no Jest.
- Quantidade de testes aprovados e reprovados.
- Mensagens de erro, quando houver.
- Correções realizadas após a identificação de falhas, se aplicável.

---

## 8\. Problemas identificados e correções realizadas

Registre os problemas encontrados durante a execução dos testes e as soluções implementadas.

| Problema identificado | Causa do problema | Solução implementada | Situação |
| --- | --- | --- | --- |
| \[Descreva o erro\] | \[Possível causa\] | \[Correção realizada\] | \[Resolvido\] |
| \[Descreva o erro\] | \[Possível causa\] | \[Correção realizada\] | \[Resolvido\] 
| \[Descreva o erro\] | \[Possível causa\] | \[Correção realizada\] | \[Resolvido\] 

Caso nenhum problema tenha sido identificado, explique.

**Resposta:**

\[Escreva aqui\]

---

## 9\. Análise dos resultados

Responda às questões:

1. Todos os testes apresentaram os resultados esperados? Justifique.
2. Quais foram os cenários mais importantes verificados durante os testes?
3. Algum teste identificou uma falha na aplicação? Qual?
4. Quais alterações foram necessárias para corrigir os problemas encontrados?
5. Existem funcionalidades que ainda precisam ser testadas? Quais?

**Respostas:**

1. Nos resultados finais sim, mas enquanto fazia alguns apresentaram falhas.
2. 

---

## 10\. Conclusão

Apresente uma conclusão sobre o processo de testes realizado.

- Os testes contribuíram para identificar possíveis falhas?
- A aplicação apresentou o comportamento esperado nos cenários testados?
- Qual foi a importância dos testes unitários para a qualidade do software desenvolvido?

**Conclusão da equipe:**

- 
-
-

---

**Relatório elaborado por:** \[Lavinia G. Freitas\]

**Data da última atualização:** \[05/11/2026\]