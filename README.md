# 📱 CRM Frontend
Projeto frontend de um sistema CRM com autenticação JWT, interface responsiva, e funcionalidades completas de CRUD com gerenciamento de produtos, categorias e usuários.  

## ✅ Objetivo e Modelo de Negócio
Desenvolver uma aplicação frontend moderna e responsiva para sistema de CRM, conectada a uma API segura com autenticação JWT. O sistema permite cadastro de usuários e gerenciamento completo de produtos categorizados por usuários autenticados, incluindo controle de atividades e solicitações empresariais.  

## 🧾 Descrição Geral
- Interface moderna com Tailwind CSS
- Autenticação JWT com Context API
- CRUD completo para `Usuario`, `Categoria` e `Produto`
- Gerenciamento de atividades e afazeres
- Sistema de rotas protegidas com React Router
- Requisições HTTP otimizadas com Axios
- Deploy automatizado na Netlify

## 🔄 Funcionalidades Implementadas
- `Cadastro de usuários` — registro de novos usuários no sistema
- `Login/Logout` — autenticação com token JWT
- `Gestão de Produtos` — criar, listar, editar e excluir produtos
- `Gestão de Categorias` — CRUD completo de categorias
- `Controle de Atividades` — adicionar afazeres e solicitações
- `Rotas Protegidas` — acesso controlado por autenticação

## 🧪 Tecnologias Utilizadas
| Tecnologias        | Versão / Observação              |
|--------------------|----------------------------------|
| React              | 18 - Framework principal         |
| TypeScript         | Tipagem estática                 |
| Tailwind CSS       | Framework de estilos             |
| Context API        | Gerenciamento de estado          |
| React Router DOM   | Roteamento da aplicação          |
| Axios              | Cliente HTTP                     |
| Netlify            | Deploy e hospedagem              |  

## 🔐 Segurança
- Autenticação via **JWT tokens** enviados no header Authorization usando o esquema Bearer
- Gerenciamento de estado com **Context API**
  Navegação das rotas com **React Router DOM**
- Interceptadores Axios para **headers automáticos**
- **Logout automático** em caso de token expirado  

## 🛠️ Setup e Execução
### 1. Clone o repositório:
```bash
git clone https://github.com/Grupo-4-Turma-Javascript-07/crm-frontend.git
cd crm-frontend
```  
### 2. Instale as dependências:
```bash
yarn
```
### 3. Configure seu arquivo .env:
```bash
VITE_API_URL=http://localhost:3000
```  
### 4. Execução e Testes da Aplicação em modo Desenvolvimento:
```bash
yarn dev
```
### 4. Execução da Aplicação:
```bash
yarn start
```
### 5. Build para Produção:
```bash
yarn build
```
### 6. Deploy
O projeto está configurado para deploy automático na [Netlify](https://netlify.com).
Acesse a aplicação em: `https://seu-crm.netlify.app`  

### 7. Estrutura do Projeto
```
src/
├── components/      # Componentes reutilizáveis
├── assets/       # Arquivos de imagem
├── contexts/       # Context API (autenticação)
├── pages/          # Páginas da aplicação
├── services/       # Configuração do Axios
└── utils/          # Funções utilitárias
```

## 📝 Status de Desenvolvimento
### ✅ Concluído
- [x] Sistema de autenticação (login/cadastro)
- [x] CRUD de produtos
- [x] CRUD de categorias
- [x] Gerenciamento de atividades
- [x] Interface responsiva
- [x] Deploy na Netlify

### ⏳ Em Desenvolvimento
- [ ] Edição de perfil de usuários
- [ ] Exclusão de usuários
- [ ] Dashboard com métricas
- [ ] Sistema de notificações
- [ ] Busca de um único produto e categoria

## 👥 Autores

* [@melcsilva](https://github.com/melcsilva)
* [@igorpardinho](https://github.com/igorpardinho)
* [@larissa-pinheiro](https://github.com/larissa-pinheiro)
* [@marinavarroo](https://github.com/marinavarroo)
* [@oligEdu](https://github.com/oligEdu)
* [@Juliotbr](https://github.com/Juliotbr)
* [@VanessaTargino](https://github.com/VanessaTargino)

---
Projeto desenvolvido como parte do aprendizado prático no bootcamp FullStack JavaScript da Generation Brasil.
