# Appmoove: Teste prático para desenvolvedor front-end

## Pré-requisitos
* HTML5
* CSS3
* JavaScript
* Git

## Desafio
O desafio é realizar o desenvolvimento de um site fictício que exibe detalhadamente cada perfil de um deputado. O desenvolvimento deve seguir as instruções apresentadas abaixo.

## Instruções
1. Crie um repositório git.

2. Implemente o desafio.

3. Após o término, envie o link do seu repositório ou seu projeto <nome_candidato>.zip para o e-mail contato@appmoove.com.br.

### Design
Use sua imaginação e proficiência para construir um design agradável, moderno, responsivo e usual.

## Especificações Técnicas

- Deve ser uma SPA (single page application);

### Página principal
- deve haver `header` e `footer` personalizado de acordo com sua criatividade;
- um campo de pesquisa para buscar pelo nome do deputado;
- um gráfico contendo o tipo de despesa que mais possui gastos dos deputados (utilizar pelo menos 100 deputados para fazer a média).

#### Gráfico
O gráfico do tipo de despesa pode ser de pizza ou barras (avalie qual melhor apresenta a informação).

Para obter os dados para o gráfico você terá de construir uma função na qual obtenha pelo menos 100 resultados de despesas de 100 deputados.
> Dica: Utilize a rota `GET /deputados` e `GET /deputados/{id}/despesas`

### Seção do perfil
A seção de perfil deve ser uma página contendo informações do deputado. Ela será exibida após pesquisar um deputado por nome na caixa de busca e clicar sobre seu nome (link).

**Campos obrigatórios:**

* Nome civil;
* Nome eleitoral;
* Idade;
* Foto;
* CPF;
* Partido.
* Estado (uf).

** Você pode adicionar mais informações que achar relevantes para o perfil.

## Critérios de Avaliação

### O que esperamos do seu teste
* Código escrito da maneira mais semântica possível.
* Layout responsivo.
* Utilização adequada do Bootstrap.

### O que ficaríamos felizes em ver em seu teste
* Utilização de conceitos de UX/UI design.

### O que não gostaríamos
* Descobrir que não foi você quem fez seu teste;
* Ver commits grandes, sem ou com descrição sem sentido.

## API
[Api com documentação](https://dadosabertos.camara.leg.br/swagger/api.html)


### Observações
* É permitido o uso de bibliotecas e APIs.
* O design do layout é livre.
* Qualquer dúvida envie um e-mail para contato@appmoove.com.br
* Boa sorte!!!
