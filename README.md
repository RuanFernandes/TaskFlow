# TaskFlow

Aplicação de gerenciamento de tarefas fullstack desenvolvida para demonstrar conhecimentos em desenvolvimento web moderno.

## O que é?

TaskFlow permite que usuários se registrem, façam login e gerenciem suas tarefas pessoais. Cada tarefa pode ter título, descrição, status e data de vencimento.

## Tech Stack

**Backend:** NestJS, TypeScript, Prisma, PostgreSQL, JWT  
**Frontend:** React, TypeScript, Vite, Material-UI  
**DevOps:** Docker, ESLint, Prettier, Husky

## Instalação Rápida

```bash
git clone https://github.com/RuanFernandes/TaskFlow.git
cd TaskFlow
yarn install

# Configure o .env em apps/backend
# DATABASE_URL="postgresql://usuario:senha@localhost:5432/taskflow"
# JWT_SECRET="sua-chave"

cd apps/backend
yarn prisma:migrate
yarn start:dev

# Em outro terminal
cd apps/frontend
yarn dev
```

## Endpoints da API

### Autenticação

**POST /auth/register**

```json
{
    "name": "João Silva",
    "email": "joao@example.com",
    "password": "senha123"
}
```

**POST /auth/login**

```json
{
    "email": "joao@example.com",
    "password": "senha123"
}
```

Response: `{ access_token }`

### Tarefas (Requerem autenticação: `Authorization: Bearer <token>`)

**GET /tasks**  
Listar todas as tarefas do usuário

**GET /tasks/:id**  
Obter uma tarefa específica

**POST /tasks**

```json
{
    "title": "Estudar TypeScript",
    "description": "Conceitos avançados",
    "dueDate": "2025-12-31T23:59:59Z"
}
```

**PATCH /tasks/:id**

```json
{
    "title": "Novo título",
    "status": "IN_PROGRESS",
    "description": "Nova descrição",
    "dueDate": "2025-12-31T23:59:59Z"
}
```

**DELETE /tasks/:id**  
Deletar uma tarefa

## Status de Tarefa

- `PENDING` - Pendente
- `IN_PROGRESS` - Em Progresso
- `DONE` - Concluído

## Autor

Ruan Fernandes - ruan_guimaraes2004@hotmail.com
