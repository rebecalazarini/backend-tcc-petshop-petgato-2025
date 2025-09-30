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
- Troque o postgresl so prisma pra mysql 
```bash
datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}
```
- Abra o terminal ctrl + '
- Instale as dependencias nessa ordem
```bash
npm install
npx prisma generate
npx prisma migrate dev --name init
npm run dev
```

## Teste no insomnia localmente
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

## Testar na vercel
- Troque o nome mysql do prisma pra postgresql
```bash
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```
- Instale as dependencias
```bash
npm i -g vercel@latest
vercel link
vercel
```
- Teste com o link: https://back-end-tcc-gamma.vercel.app/

## Documentação
![matriz_swot](./docs/fofapetshop.png)
![DER](./docs/I1.png)
![UML](./docs/UML.png)
[Relatorio_Caixa_Preta](./docs/caixa_preta_back-end.pdf)
[Relatorio_Caixa_Branca](./docs/Relatório%20Back-end.pdf)
- Requisitos funicionais
- Clientes/Usuários
  - RF01: O sistema deve permitir o cadastro e login de clientes (nome, email, senha).
  - RF02: O cliente pode cadastrar seus pets (nome, espécie, raça, data de nascimento).
- Produtos e Compras
  - RF03: O sistema exibe o catálogo de produtos por categorias (cachorro, gato, peixe e pássaro.)
  -  RF04: O cliente pode adicionar e remover produtos do carrinho de compras.
- Agendamento de Serviços
  - RF05: O cliente pode agendar serviços (banho e tosa, veterinário) selecionando data, hora e pet.
- Administração (Back-end)
  - RF10: O administrador deve poder gerenciar o estoque (adicionar/remover produtos, atualizar quantidades).
  - RF11: O administrador deve poder visualizar e confirmar os agendamentos de serviços.
  - RF12: O sistema deve gerar um token para o login por 30min.
  - RF13: O sistema deve criptografar a senha dos usuários.

- Requisitos não funcionais 
- Desempenho
  - RNF01: A página inicial e as páginas de produtos carregam no máximo 3 segundos, mesmo com 500 usuários simultâneos.
  - RNF02: O processamento de uma transação de pagamento deve ser concluído em no máximo 5 segundos.
- Usabilidade
  - RNF03: A navegação do site é intuitiva, permitindo que o usuário encontre um produto em no máximo 3 cliques.
  - RNF04: O site está responsivo, funcionando perfeitamente em dispositivos móveis (smartphones e tablets).
- Segurança
  - RNF05: Todos os dados de login e pagamento devem ser transmitidos usando o protocolo de segurança JWT. 
- Escalabibidade
  - RNF06: O sistema deve ser capaz de suportar um aumento de 100% no volume de pedidos durante períodos promocionais (ex: Black Friday) sem degradação do desempenho.
- Tecnológicos
  - RNF7: O sistema deve ser compatível com os navegadores web mais recentes (Chrome, Firefox, Safari e Edge).
  - 	RNF8: O site deve integrar-se com o serviço de API do Correios para cálculo de frete. Ou ter um frete fixo pra todas as compras.



## Metodologia
- Metodologia: KANBAN
- Papéis e responsabilidades: Rebeca Lazarini: back-end, Larissa Santos: front-end, Evelyn Fernandes: Banco de dados, Larissa Rocha: Testes/relatórios e Crislaine Leopoldo: Documentação.
- O objetivo do nosso site de pet shop é oferecer uma experiência online de fácil acesso e navegação, com uma interface intuitiva e dinâmica. As telas serão funcionais e bem organizadas, permitindo que os clientes encontrem rapidamente os produtos e serviços que procuram, além de possibilitar um processo de compra simples e eficiente.