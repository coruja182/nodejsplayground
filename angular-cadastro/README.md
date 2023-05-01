# angular cadastro

Projeto de estudo de Angular 2.x.
A finalidade deste projeto:

- aprender a fazer um `CRUD`[^crud] em `Angular`
- usar a lib `json-server` para mockar o backend
- usar alguma lib de componentes para deixar o projeto mais bonito e usar um padrão de componentes usado no mercado de trabalho
  - angular material
  - angular bootstrap

## Estrutura do Projeto

- `src/app/componentes`: novos componentes
- `mockserver`: base de dados do `json-server`

## Rotas

- `/pessoa/nova`: formulário de cadastro de pessoa
- `/pessoa/:id/editar`: formulário de cadastro de pessoa em modo de edição
- `/pessoa/lista`: lista de pessoas

As rotas estão definidas em [app-routing.module.ts](./src/app/app-routing.module.ts#L6)

## Desenvolvimento

### Requisitos

- nodejs lts (atualmente 18.12.1)
- Postman (opcional para fazer testes no backend)

### Executar o projeto em modo de desenvolvimento

```sh
npm install

npm run start
```

### scripts do node

```shell
npm run <script>
```

- start: roda o projeto
- build: constrói o projeto
- watch: constrói continuamente, observando por arquivos modificados
- test: executa os testes
- `sobe-mock`: executar o json-server para simular o backend

### json-server

Depois de executar o json.server o mesmo estará disponível no endereço <http://localhost:3000>

#### endpoints

- GET `/pessoas`: listar pessoas
- POST `/pessoas`: adicionar pessoa, passando o objeto pessoa no body
- PUT/PATCH `/pessoas/:id`: editar pessoa com id `:id`, passando o objeto pessoa no body
- DELETE `/pessoas/:id` deletar pessoa com id `:id`

[^crud]: create, read, update, delete

### postman

Criei uma collection para o postman. Pode ser importada a partir da pasta `postman-arquivos`

## Documentação Adicional

- [Angular Docs: validação de formulários][angular-io-form-validation]
- [Angular Training Guide: Linkando rotas com parâmetros][angular-training-guide-linking-routes]

[angular-io-form-validation]: https://angular.io/guide/form-validation
[angular-training-guide-linking-routes]: https://angular-training-guide.rangle.io/routing/routeparams
