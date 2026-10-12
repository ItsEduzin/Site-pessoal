# 🚀 Portfólio & Plataforma Pessoal Full-Stack

Bem-vindo ao repositório da minha plataforma pessoal e portfólio profissional! Este projeto foi concebido para divulgar a minha marca, apresentar meus projetos de desenvolvimento de software e fornecer um canal direto de contato para recrutadores, clientes e parceiros.

## 🎯 Objetivo do Projeto

O objetivo principal desta aplicação é servir como uma vitrine viva das minhas habilidades técnicas e engenharia de software. Em vez de utilizar apenas um site estático simples, o projeto é construído sobre uma arquitetura **Full-Stack robusta**, combinando uma API REST no Back-end com persistência de dados em um banco relacional e uma interface moderna no Front-end.

## 🛠️ Tecnologias Utilizadas

* **Back-end:** Java (JDK 17/21), Spring Boot 3.x (Spring Data JPA, Spring Web)
* **Gerenciamento de Dependências:** Maven
* **Banco de Dados:** PostgreSQL & pgAdmin 4
* **Front-end:** HTML5, CSS3, JavaScript (ES6+)
* **Ferramentas & Ferramental:** VS Code, Git, GitHub

## 📌 Status do Desenvolvimento

### 🟢 Concluído
* [x] Configuração e inicialização do projeto base Spring Boot com Maven.
* [x] Estruturação do repositório no GitHub e controle de versão.
* [x] Configuração da árvore de diretórios estáticos no Spring Boot (`src/main/resources/static`).
* [x] Criação da estrutura base do Front-end (`index.html`, `style.css`, `main.js`).
* [x] Implementação dos scripts JS iniciais (rolagem suave e tratamento do formulário).

### 🟡 Em Andamento
* [ ] **Front-end (Design & Responsividade):** Refinamento do layout CSS, adição de componentes interativos e melhorias na experiência visual.

### 🔴 Próximas Etapas (Pendente)
* [ ] **Banco de Dados:** Modelagem e criação do banco `site_portfolio_db` no PostgreSQL via pgAdmin 4.
* [ ] **Integração Back-end:** Configuração do `application.properties` para conexão com o banco de dados.
* [ ] **Entidades & Repositórios:** Criação das classes `@Entity` (`Projeto`, `MensagemContato`) e interfaces JPA.
* [ ] **Controladores REST:** Desenvolvimento dos endpoints da API para servir projetos e receber mensagens.
* [ ] **Integração Front/Back:** Conexão do formulário e dos cards via Fetch API.
* [ ] **Deploy:** Publicação da aplicação na nuvem.

## 📂 Estrutura do Projeto

```text
site-pessoal/
├── .mvn/
├── src/
│   ├── main/
│   │   ├── java/              # Código fonte Java (Spring Boot)
│   │   └── resources/
│   │       ├── static/        # Arquivos do Front-end
│   │       │   ├── css/
│   │       │   ├── js/
│   │       │   └── assets/
│   │       └── application.properties
│   └── test/
├── pom.xml                    # Dependências do Maven
└── README.md
