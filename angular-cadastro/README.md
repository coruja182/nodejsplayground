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

## Desenvolvimento

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

[^crud]: create, read, update, delete
