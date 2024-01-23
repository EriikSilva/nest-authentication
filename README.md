# Nest Authentication (JWT)


## 📰 Sobre
Fiz este projeto para me tomar de base para uma rota de login com objetivo de ficar padronizado, fiz com postgres e prisma


# 💾 Instalação
- Necessario Node e Angular
- Clonar o projeto ```git clone https://github.com/EriikSilva/nest-authentication.git```
- Rodar o comando pelo cmd na pasta do projeto ```npm install```
- Criar arquivo no raiz do projeto ```.env``` e configurar banco de dados de acordo como esta em ```.env.example``` (Docker é opcional) 
- Rodar o Schema do banco ```npx prisma db push``` e logo após ```npm run migrate-and-seed``` para rodar a seed com os usuários abaixo
- Rodar o projeto com o comando no terminal ```npm run start:dev``` e acessar ```http://localhost:3000```


<table>
        <tr>
            <th>Email</th>
            <th>Senha</th>
        </tr>
        <tr>
            <td>john.doe@example.com</td>
            <td>Abc@123</td>
        </tr>
        <tr>
            <td>jane.doe@example.com</td>
            <td>123@Abc</td>
        </tr>
    </table>

## 🐱‍👤 ROTAS
# Cadastro de Usuário
- POST => /user
`
{
    "email": "john.doe@example.com",
    "senha":"Abc@123"
}
`

# Login
- POST => /login
`
{
    "email": "john.doe@example.com",
    "senha":"Abc@123!"
}
`
- Me
= GET => /me

retorno `{
    "id_usuario": "b967a0ba-8349-4385-9e0d-d9ac2e44531e",
    "email": "john.doe@example.com"
}`

# 📃 Tabela(s)
<img src="https://github.com/EriikSilva/nest-authentication/assets/61124602/2a4a2aa2-780f-4724-9c2f-b481f0ca1787" />

# Bônus Docker 
- Estando com o .env configurado rode o comando ```docker compose up -d``` isso ira acionar a imagem do docker do arquivo docker-compose.yml.
- Após isso rode o comando ```docker compose up``` e ```docker ps``` para visualizar o container.
