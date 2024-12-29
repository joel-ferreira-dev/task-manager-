Gerenciador de Tarefas
Aplicativo em React Native e TypeScript para gerenciar tarefas, permitindo listar, adicionar e marcar tarefas como concluídas, além de limpar todas as tarefas concluídas de uma só vez.

<br>
Índice
Visão Geral
Link do Repositório
Principais Funcionalidades
Pré-Requisitos
Instalação
Execução
Estrutura de Pastas
Explicação das Escolhas Técnicas
Como Usar
Melhorias Futuras
Contribuição
Licença
Visão Geral
Este projeto exemplifica o uso de React Native com Context API para gerenciar o estado global de tarefas. Ele disponibiliza um fluxo simples de CRUD parcial (criação e alteração de status), com possibilidade de limpar todas as tarefas concluídas.

<br>
Link do Repositório
Clique aqui para acessar o repositório

Substitua SEU-USUARIO pelo seu nome de usuário e gerenciador-de-tarefas pelo nome do seu repositório.

<br>
Principais Funcionalidades
Listagem de Tarefas: Exibe as tarefas em uma lista, diferenciando pendentes/concluídas.
Adicionar Tarefa: Permite criar uma nova tarefa, com validação para evitar títulos vazios ou duplicados.
Marcar Tarefa: Clicar em uma tarefa alterna o status (pendente ↔ concluída).
Limpar Concluídas: Remove todas as tarefas que estejam marcadas como concluídas.
Feedback Visual: Mostra mensagens de sucesso ou erro durante as interações.
<br>
Pré-Requisitos
Node.js (>= 14)
NPM (ou Yarn)
Expo CLI ou React Native CLI (dependendo de como você vai rodar)
Emulador ou dispositivo físico (Android/iOS)
<br>
Instalação
Clonar o repositório:
bash
Copiar código
git clone https://github.com/SEU-USUARIO/gerenciador-de-tarefas.git
Entrar na pasta do projeto:
bash
Copiar código
cd gerenciador-de-tarefas
Instalar as dependências:
bash
Copiar código
npm install
ou
bash
Copiar código
yarn
<br>
Execução
Caso esteja usando o Expo
Iniciar o servidor de desenvolvimento:
bash
Copiar código
npx expo start
Abrir o app:
Abra o Expo Go no seu dispositivo e escaneie o QR Code, ou
Selecione “Run on Android device/emulator” ou “Run on iOS simulator” para rodar em emuladores.
Caso esteja usando React Native CLI
Android:
bash
Copiar código
npx react-native run-android
iOS (macOS):
bash
Copiar código
npx react-native run-ios
<br>
Estrutura de Pastas
text
Copiar código
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
<br>
Explicação das Escolhas Técnicas
React Navigation:

Utilizado para navegar entre a tela de lista de tarefas e a tela de adicionar tarefa, pois é uma biblioteca padrão e robusta para navegação em React Native.
Context API:

Escolhida para gerenciar o estado global de tarefas por ser simples de configurar e integrar, dispensando a necessidade de bibliotecas mais complexas, como Redux.
TypeScript:

Garante mais confiabilidade ao código, facilitando o desenvolvimento e manutenção. Oferece tipagem estática e autocompletes mais ricos no editor.
CustomButton, FeedbackMessage e TaskCard:

Componentes reutilizáveis que padronizam a UI (botões, mensagens de erro/sucesso, cartões de tarefas) e mantêm o código mais organizado.
AsyncStorage (opcional):

Se desejado, é possível integrar o AsyncStorage para persistência de dados, armazenando as tarefas localmente no dispositivo.
<br>
Como Usar
Tela de Listagem (TaskListScreen):

Se não houver tarefas, aparecerá uma mensagem sugerindo adicionar.
Cada tarefa exibe seu status (pendente/concluída). Ao clicar, alterna o status.
O botão “Limpar Concluídas” remove todas as tarefas já concluídas.
Adicionar Nova Tarefa (AddTaskScreen):

Insira o título da tarefa. O app valida se está vazio ou se já existe.
Feedback de sucesso ou erro aparece na tela.
Feedback:

Mensagens de erro surgem ao tentar inserir título duplicado ou vazio.
Mensagem de sucesso aparece ao adicionar uma nova tarefa ou limpar concluídas.
<br>
Melhorias Futuras
Filtros: Exibir somente tarefas pendentes ou somente concluídas.
Ordenação: Ordenar por data de criação ou ordem alfabética.
Notificações: Implementar notificações push ou lembretes.
Sincronização: Integração com um backend para compartilhar tarefas entre dispositivos.
Testes automatizados: Adicionar testes unitários e de integração usando Jest ou React Native Testing Library.
<br>
Contribuição
Contribuições são bem-vindas!

Faça um fork do projeto.
Crie uma nova branch para sua feature:
bash
Copiar código
git checkout -b minha-feature
Faça suas alterações e commite:
bash
Copiar código
git commit -m 'Minha nova feature'
Faça o push da sua branch:
bash
Copiar código
git push origin minha-feature
Abra um Pull Request descrevendo suas mudanças no GitHub.
<br>
Licença
Este projeto está licenciado sob os termos da Licença MIT. Sinta-se à vontade para usar, modificar e distribuir.

Feito com ♥ e React Native.