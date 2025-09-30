# Back-end Tcc PetGato

## Tecnologias usadas

- Node.js
- Prisma
- Autenticação JWT
- VsCode (IDE)
- JavaScript
- Mysql

  ## Como executar localmente
- Clone este repositório
- Abra com VsCode
- Crie o arquivo .env na raiz do projeto com a seguintes variaveis de ambiente:
````bash
SECRET_JWT=meu_segredo_jwt
DATABASE_URL="mysql://root@localhost:3306/fullpetgato?timezone=UTC"
````
- Caso ja exista, exclua o arquivo .env e crie um
- Caso tenha a pasta migrations em prisma/migrations exclua ela e execute as dependencias
- Não esqueça que se tiver um banco de dados com o nome fullpetgato em seu mysql é importante excluir para poder funcionar as dependencias
- Abra o terminal ctrl + '
- Instale as dependencias nessa ordem
```bash
npm install
npx prisma generate
npx prisma migrate dev --name init
npm run dev

```

## Teste no insomnia 
- Você pode testar tanto no insomnia quanto na própria tela de cadastro e consulta no fron-end
- Users
```bash
 http://localhost:3000/usuarios
 exemplo:
{
  "email": "teste@exemplo.com",
  "senha": "123456"
}
```

- Cadastro do Pet
```bash
 http://localhost:3000/consultas
 exemplo:
{
"id": 1,
"nomepet": "Rex",
"especie": "cachorro",
"raca": "Labrador",
"nomeproprietario": "João Silva",
"datanascpet": "2022-04-25T00:00:00.000Z",
"email": "joao.silva@example.com",
"alergia": "Nenhuma"
}
```

## Meodologia
- Metodologia: KANBAN
- Papéis e responsabilidades: Rebeca Lazarini: back-end, Larissa Santos: front-end, Evelyn Fernandes: Banco de dados, Larissa Rocha: Testes/relatórios e Crislaine Leopoldo: Documentação.
- O objetivo do nosso site de pet shop é oferecer uma experiência online de fácil acesso e navegação, com uma interface intuitiva e dinâmica. As telas serão funcionais e bem organizadas, permitindo que os clientes encontrem rapidamente os produtos e serviços que procuram, além de possibilitar um processo de compra simples e eficiente.