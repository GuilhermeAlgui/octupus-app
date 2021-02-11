Projeto criado com Expo.

React-Native com template Typescript.

Checklist de funcionalidades:

- Página home com um texto explicativo e um botão para iniciar o quiz: checked. (Landing.tsx)
- O quiz deverá ter 15 questões: checked (questions.ts)
- Insira uma imagem para cada questão: checked (questions.ts && Pergunta.tsx)
- Cada questão terá 5 alternativas: checked (questions.ts)
- Página de resultado: checked (Resultado.tsx)
- As perguntas ficaram por conta do desenvolvedor. Escolha os assuntos que achar
mais interessante: geografia, esportes, conhecimentos gerais etc: checked (assunto escolhido história)

Wireframe:
inspirado em - https://www.figma.com/file/kCxjvkoeo0Ni1LpTYeAvaT/desafio-octupus?node-id=0%3
A1&frame-preset-name=iPhone%2011%20Pro%20Max
alterações:
- Landing.tsx(home) foi aumentado o tamanho das letras para evitar espaço em branco e ficar mais facil visualização
- Pergunta.tsx(paginas de perguntas) Todas as perguntas são na mesma pagina e são exibidas em ordem; adicionado um contador de tempo na parte superior para mostrar o tempo limite para a resolução; texto da pergunta foi justificado; Ao inves de somente texto as alternativas se tornaram botões da mesma coloração do botão de inicio; fundo do botão da alternativa alterna de cor para mostrar qual alternativa foi marcada; cor do botão de proximo e anterior mudado para evitar confusão com alternativas.
-Resultado.tsx(pagina de resultado) Componentes foram mais espaçados para melhor visibilidade no espaço(evitar grandes espaços em branco), Tamanho do botão foi aumentado.

Tecnologias:
- O app deverá ser feito em React Native e executado em Android ou iOS: checked (testado em Android Galaxy J7 Prime)
- Fique a vontade em usar Expo ou qualquer outra biblioteca que desejar: checked (Utilizado Expo e diversas bibliotecas)

Desafios adicionais (não obrigatório, mas será um diferencial):
- Adicione um cronômetro de 10 minutos. Se o usuário não terminar dentro desse
tempo finalizar o quiz e ir para os resultados: checked (component cronometro.tsx implementado em Pergunta.tsx)
- Utilizar styled-components para escrever a estilização: checked (pages/StyledComponents && cronometro/cronometroStyled.ts) (Eslint entrou em conflito com o Typescript e o Styled por isso ele exibe um warning sobre o tipo Any mas isso não tem impacto na execução do projeto.)
- Gerenciar o estado da aplicação com Redux: not checked
- Configurar prettier e eslint no projeto: checked(normalmente utilizo eles como plugins do VScode mas adicionei no projeto tambem)

Dicas:
- Dê atenção ao código, deixe-o limpo: Fazendo verificações

