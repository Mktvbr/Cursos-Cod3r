Sistema de Autenticação com Cookies e JWT
Este é um projeto que implementa um sistema de autenticação simples utilizando Node.js, Express, JWT e cookies. O sistema gerencia o login de usuários, valida credenciais e utiliza tokens para autenticação.
________________________________________
Tecnologias Utilizadas
•	Front-end: 
o	HTML5, CSS3
o	JavaScript (Fetch API)
•	Back-end: 
o	Node.js
o	Express.js
o	JWT (JSON Web Tokens)
o	Bcrypt.js
•	Banco de Dados: 
o	MongoDB 
•	Outras Ferramentas: 
o	dotenv para variáveis de ambiente
________________________________________
Funcionalidades
•	Autenticação de usuário: 
o	Login
o	Validação de credenciais
o	Armazenamento de tokens em cookies
•	Segurança: 
o	Senhas criptografadas
o	Tokens JWT para sessões seguras
o	Registro de usuário 
________________________________________
Pré-requisitos
Certifique-se de ter instalado:
•	Node.js: Download Node.js
•	MongoDB: Configurar MongoDB
________________________________________
Como Executar
1.	Clone o repositório:
2.	git clone https://github.com/mktvbr/Cursos-Cod3r.
3.	Instale as dependências:
4.	npm install
5.	Configure as variáveis de ambiente:
o	Crie um arquivo .env na raiz do projeto com as seguintes variáveis: 
o	SECRET=seu_segredo_para_jwt
o	DB_URI=sua_url_do_mongodb
6.	Inicie o servidor:
7.	npm start
8.	Acesse no navegador:
9.	http://localhost:3003
________________________________________
Rotas Disponíveis
Autenticação
•	POST /login: Faz o login do usuário e retorna um token.
•	POST /register: Registra um novo usuário.
Página Inicial
•	GET /: Exibe a interface inicial após autenticação.
•	GET /cursos: Exibe uma animação de carregamento
________________________________________
Contato
•	Nome: Mateus Luiz da Silva Rodrigues
•	LinkedIn: Mateus Luiz (Mateus Luiz) Da Silva Rodrigues | LinkedIn
•	E-mail: mateusluizsr@hotmail.com


