# Gerenciador de Tarefas

Aplicativo desenvolvido em **React Native** e **TypeScript** para gerenciar tarefas, permitindo listar, adicionar e marcar tarefas como concluídas, além de limpar todas as tarefas concluídas de uma só vez.

---

## Índice

- [Visão Geral](#visão-geral)
- [Link do Repositório](#link-do-repositório)
- [Principais Funcionalidades](#principais-funcionalidades)
- [Pré-Requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Execução](#execução)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Explicação das Escolhas Técnicas](#explicação-das-escolhas-técnicas)
- [Como Usar](#como-usar)
- [Melhorias Futuras](#melhorias-futuras)
- [Contribuição](#contribuição)
- [Licença](#licença)

---

## Visão Geral

Este projeto exemplifica o uso de **React Native** com **Context API** para gerenciar o estado global de tarefas. Ele oferece um fluxo simples de CRUD parcial (criação e alteração de status), com a possibilidade de limpar todas as tarefas concluídas.

---

## Link do Repositório

[Repositório no GitHub](https://github.com/joel-ferreira-dev/task-manager-)

Substitua `SEU-USUARIO` pelo seu nome de usuário e `gerenciador-de-tarefas` pelo nome do seu repositório.

---

## Principais Funcionalidades

- **Listagem de Tarefas:** Exibe as tarefas em uma lista, diferenciando entre pendentes e concluídas.
- **Adicionar Tarefa:** Permite criar uma nova tarefa, com validação para evitar títulos vazios ou duplicados.
- **Marcar Tarefa:** Altere o status de uma tarefa (pendente/concluída) ao clicar nela.
- **Limpar Concluídas:** Remove todas as tarefas marcadas como concluídas.
- **Feedback Visual:** Exibe mensagens de sucesso ou erro durante as interações.

---

## Pré-Requisitos

- **Node.js** (>= 14)
- **NPM** ou **Yarn**
- **Expo CLI** ou **React Native CLI**
- Emulador ou dispositivo físico (Android/iOS)

---

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/SEU-USUARIO/gerenciador-de-tarefas.git
   ```

2. Entre na pasta do projeto:
   ```bash
   cd gerenciador-de-tarefas
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```
   ou
   ```bash
   yarn
   ```

---

## Execução

### Usando Expo

1. Inicie o servidor de desenvolvimento:
   ```bash
   npx expo start
   ```

2. Abra o app:
   - Utilize o **Expo Go** no seu dispositivo e escaneie o QR Code, ou
   - Selecione “Run on Android device/emulator” ou “Run on iOS simulator”.

### Usando React Native CLI

#### Android:
```bash
npx react-native run-android
```

#### iOS (macOS):
```bash
npx react-native run-ios
```

---

## Estrutura de Pastas

```plaintext
gerenciador-de-tarefas/
├── app/
│   ├── components/
│   │   ├── CustomButton.tsx       // Botão customizado
│   │   ├── FeedbackMessage.tsx    // Mensagens de feedback (erro, sucesso)
│   │   └── TaskCard.tsx           // Card para exibir cada tarefa
│   ├── context/
│   │   └── TaskContext.tsx        // Context API para gerenciar o estado global de tarefas
│   ├── screens/
│   │   ├── TaskListScreen.tsx     // Tela para listar tarefas e ações
│   │   └── AddTaskScreen.tsx      // Tela para adicionar nova tarefa
├── App.tsx                        // Arquivo principal; configura Navigation e Provider
├── package.json                   // Dependências do projeto
├── tsconfig.json                  // Configuração do TypeScript
├── README.md                      // Documentação do projeto
└── .gitignore
```

---

## Explicação das Escolhas Técnicas

- **React Navigation:**
  Utilizado para navegar entre as telas de listagem e adição de tarefas, por ser uma biblioteca robusta e padrão para navegação em React Native.

- **Context API:**
  Escolhida para gerenciar o estado global de tarefas, sendo simples de configurar e integrar, dispensando bibliotecas mais complexas como Redux.

- **TypeScript:**
  Garante maior confiabilidade ao código, facilitando o desenvolvimento e manutenção.

- **Componentes Reutilizáveis:**
  Como `CustomButton`, `FeedbackMessage` e `TaskCard`, para padronizar a UI e manter o código organizado.

- **AsyncStorage (opcional):**
  Pode ser integrado para persistência de dados, armazenando tarefas localmente no dispositivo.

---

## Como Usar

### Tela de Listagem (TaskListScreen)

- Caso não existam tarefas, será exibida uma mensagem sugerindo adicionar.
- Cada tarefa exibe seu status (pendente/concluída). Clique para alternar o status.
- O botão “Limpar Concluídas” remove todas as tarefas concluídas.

### Tela de Adição de Tarefa (AddTaskScreen)

- Insira o título da tarefa. O app valida se o campo está vazio ou duplicado.
- Exibe mensagens de sucesso ou erro com base na interação.

---

## Melhorias Futuras

- **Filtros:** Exibir apenas tarefas pendentes ou concluídas.
- **Ordenação:** Ordenar por data de criação ou ordem alfabética.
- **Notificações:** Adicionar notificações push ou lembretes.
- **Sincronização:** Integração com backend para compartilhamento de tarefas entre dispositivos.
- **Testes Automatizados:** Implementar testes unitários e de integração com Jest ou React Native Testing Library.

---

## Contribuição

Contribuições são bem-vindas! Siga os passos abaixo:

1. Faça um fork do projeto.
2. Crie uma branch para sua feature:
   ```bash
   git checkout -b minha-feature
   ```

3. Faça suas alterações e commite:
   ```bash
   git commit -m "Minha nova feature"
   ```

4. Faça o push da branch:
   ```bash
   git push origin minha-feature
   ```

5. Abra um Pull Request no GitHub descrevendo suas mudanças.

---

## Licença

Este projeto está licenciado sob os termos da **Licença MIT**. Sinta-se à vontade para usar, modificar e distribuir.

---

Feito com ❤️ e **React Native**.

