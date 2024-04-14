**Olá meu nome é Thales :D**

**E esse é meu pequeno código de login, utilizando React!!**

*Aplicação de Login*

Esta é uma aplicação simples de login, com um frontend construído com React e um backend construído com Node.js e Express.

*Como usar*

1. *Iniciar o servidor backend:*
Vá até a pasta raiz do projeto e execute o seguinte comando para iniciar o servidor backend:

    node server.js
   
Certifique-se de que o servidor backend está em execução antes de usar a aplicação.

3. *Iniciar a aplicação frontend:*
Abra um novo terminal e vá até a pasta raiz do projeto. Execute o seguinte comando para iniciar a aplicação 
frontend:
    npm start
Isso iniciará a aplicação frontend em um servidor de desenvolvimento. 
Você pode acessá-la em http://localhost:3000 no seu navegador.

4. *Testar a aplicação:*
Após iniciar tanto o servidor backend quanto a aplicação frontend, você pode acessar a aplicação no navegador e testar o processo de login.

5. *Utilizar usuários pré prontos no user.json*

    [
  { "email": "usuario1@usuario.com", "password": "senha123" },
  { "email": "usuario2@usuario.com", "password": "senha223" }
    ]
    
Caso queira adicionar outro usuário no package.json modifique diretamente na pasta do arquivo!

**Observação Importante**
É importante iniciar o servidor backend antes de tentar usar a aplicação, pois o frontend fará solicitações para o backend para autenticar os usuários. Certifique-se de ter o servidor backend em execução antes de tentar fazer login.


