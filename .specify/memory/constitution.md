<!--
Sync Impact Report
Version change: 1.0.0 -> 2.0.0
Modified principles:
- I. Arquitetura Angular por Feature -> I. Arquitetura React + Vite para SPA Estatica
- II. Estado e Reatividade Explicitos -> II. Estado Local e Fluxo de Dados Explicitos
- III. Qualidade Verificavel e CI -> III. Qualidade Verificavel e CI
- IV. Acessibilidade e UX Basica -> IV. Acessibilidade e UX Mobile-First
- V. Escopo, Assets e Manutencao -> V. Assets, Privacidade e Deploy Estatico
Added sections:
- Estrutura React/Vite e Assets
- Fluxo de Desenvolvimento
Removed sections:
- Estrutura Angular e Assets
Templates requiring updates:
- updated: .specify/templates/plan-template.md
- checked: .specify/templates/spec-template.md
- updated: .specify/templates/tasks-template.md
- not present: .specify/templates/commands/*.md
Runtime guidance requiring updates:
- checked: AGENTS.md
- updated: specs/001-site-presente-namorados/spec.md
Follow-up TODOs:
- Nenhum
-->

# Constituição do Dia dos Namorados

## Core Principles

### I. Arquitetura React + Vite para SPA Estatica

Toda implementacao da aplicacao DEVE usar React com Vite e TypeScript como base
do projeto. A aplicacao DEVE ser uma SPA estatica, sem backend, banco de dados ou
servico remoto obrigatorio, salvo quando uma spec futura declarar essa mudanca e
o plan justificar o impacto.

Componentes React DEVEM ter responsabilidades claras. Componentes
presentational DEVEM receber dados via props, emitir intencoes por callbacks, e
nao podem conter regra de negocio, acesso direto a browser APIs complexas, audio,
armazenamento, rede ou configuracao de deploy. Componentes container/feature
DEVEM orquestrar estado de UI, efeitos, audio, carregamento de midia e composicao
dos componentes presentational. Funcoes de dominio, calculos de datas e
configuracoes de conteudo DEVEM ficar em modulos dedicados.

Componentes e estilos nao triviais DEVEM ficar em arquivos separados. Arquivos
`.tsx` devem concentrar estrutura e comportamento do componente; estilos de
layout e aparencia DEVEM ficar em CSS global controlado, CSS Modules ou arquivos
CSS importados, conforme o padrao definido no plan.

Racional: React + Vite atende ao objetivo de uma entrega leve em GitHub Pages e
mantem a experiencia facil de testar, publicar e evoluir.

### II. Estado Local e Fluxo de Dados Explicitos

Como nao ha banco de dados, todo conteudo configuravel DEVE ser local: textos,
caminhos de imagens, caminhos de videos, audio, data de inicio e opcoes visuais.
Esse conteudo DEVE viver em constantes, arquivos de dados locais ou modulos de
configuracao versionados.

Estado React DEVE ser simples e explicito. `useState` DEVE ser usado para estado
de UI, como desbloqueio inicial, status do audio e indice do carrossel. `useMemo`
ou funcoes puras DEVEM ser usados para valores derivados, como contador de tempo
de relacionamento. `useEffect` DEVE ser pequeno, necessario e rastreavel, usado
apenas para efeitos reais como audio, eventos do navegador, timers ou integracao
com APIs do browser.

Fluxos que escondem origem, transicao ou tratamento de erro sem necessidade sao
proibidos. Estados de `loading`, `erro` e `sucesso` DEVEM ser representados
quando audio, midia ou dados locais puderem falhar ou depender de carregamento.

Racional: fluxo local e explicito reduz surpresa, facilita testes e evita
complexidade desnecessaria em uma SPA afetiva e estatica.

### III. Qualidade Verificavel e CI

Toda feature com logica de dados, datas, audio, galeria, estado de desbloqueio ou
deploy DEVE ter testes minimos para funcoes puras e componentes responsaveis por
orquestracao. Correcoes de bugs DEVEM incluir teste de regressao que falha antes
da correcao e passa depois.

O CI DEVE executar testes em modo headless e falhar em qualquer quebra. O build
DEVE ser validado antes de publicar. Pull requests DEVEM incluir checklist de
validacao com, no minimo, test, build e run quando esses comandos existirem no
projeto.

Racional: comportamento de contador, audio, carrossel e paths de deploy quebra
facilmente sem testes objetivos.

### IV. Acessibilidade e UX Mobile-First

A experiencia DEVE ser projetada primeiro para larguras moveis de 360px a 430px.
Nenhum texto, botao, imagem, video ou secao pode gerar rolagem horizontal nessa
faixa. Layouts DEVEM usar constraints responsivas e preservar leitura confortavel
em celulares reais.

Estados de loading e erro DEVEM ser visiveis e textuais. Mensagens de erro DEVEM
explicar o problema em linguagem clara e indicar uma acao possivel quando houver
recuperacao. Botoes, controles de audio, controles de galeria e demais
interacoes DEVEM ter nome acessivel claro, contraste adequado, foco visivel e
funcionamento por teclado.

Novas interfaces DEVEM evitar interacoes que dependam apenas de cor, hover ou
gestos de ponteiro. Quando uma acao altera estado importante, a UI DEVE tornar a
mudanca perceptivel sem exigir inspecao tecnica.

Racional: o presente sera consumido principalmente no celular; a experiencia
precisa ser afetiva sem sacrificar legibilidade e acesso.

### V. Assets, Privacidade e Deploy Estatico

Assets publicos de runtime DEVEM ficar em `/public` quando precisarem de caminho
estavel em producao, ou em `src/assets` quando forem importados pelo bundle do
Vite. Assets soltos fora desses locais DEVEM ser migrados ou justificados no
plan antes de uso pela aplicacao. Imagens DEVEM ser comprimidas antes da
publicacao, preferencialmente WebP ou JPEG otimizado quando aplicavel.

Tipografia e estilos globais DEVEM ser definidos em um ponto unico, como
`src/styles.css` e `index.html`. Novas fontes ou estilos globais so podem ser
adicionados quando a spec exigir e o plan registrar o motivo.

Deploy em GitHub Pages DEVE configurar `base` no `vite.config` com o nome exato
do repositorio. A aplicacao NAO DEVE depender de roteamento por historico do
navegador que quebre refresh em hospedagem estatica; navegacao por scroll,
renderizacao condicional ou hash routing sao aceitaveis. Arquivos publicados em
repositorio/site publico DEVEM ser tratados como visiveis por qualquer pessoa na
internet; segredos, credenciais, CPFs, enderecos e dados sensiveis sao proibidos.

Racional: assets e base path sao os pontos mais provaveis de falha em GitHub
Pages, e midias pessoais exigem consciencia explicita de exposicao publica.

## Estrutura React/Vite e Assets

Features React/Vite DEVEM usar uma estrutura simples e rastreavel, adaptada ao
nome real da feature:

```text
src/
├── app/
│   └── App.tsx
├── features/
│   └── <nome-da-feature>/
│       ├── components/
│       │   ├── <Componente>.tsx
│       │   └── <Componente>.css
│       ├── data/
│       │   └── <conteudo>.ts
│       ├── hooks/
│       │   └── use<Comportamento>.ts
│       └── utils/
│           └── <calculo>.ts
├── assets/
└── styles.css

public/
└── assets/
```

Arquivos em `data` concentram conteudo local, caminhos de midia e configuracoes.
Arquivos em `utils` concentram funcoes puras, como calculo de datas. Arquivos em
`hooks` encapsulam efeitos de UI e browser APIs quando o comportamento for
reutilizavel ou complexo. Arquivos em `components` renderizam a experiencia e
DEVEM separar componentes presentational de componentes que orquestram estado.

Assets usados por caminho publico em producao DEVEM ficar em `public/assets`.
Assets importados pelo codigo DEVEM ficar em `src/assets`. O plan DEVE escolher
um padrao para cada tipo de midia e registrar como o Vite resolvera os paths em
GitHub Pages.

## Fluxo de Desenvolvimento

Planos de implementacao DEVEM registrar:

- Estrutura real da feature em React + Vite.
- Estrategia de estado local, incluindo loading, erro e sucesso.
- Fronteiras entre componentes presentational, containers, hooks, dados e utils.
- Estrategia de testes para funcoes puras, componentes, audio, galeria e deploy.
- Impacto em acessibilidade, teclado, foco, contraste e mensagens textuais.
- Estrategia de assets, compressao de imagens e base path do GitHub Pages.
- Comandos de validacao para test, build e run.

Specs DEVEM descrever comportamento observavel, estados de usuario e criterios
de sucesso. Plans DEVEM descrever decisoes tecnicas. Tasks DEVEM ser pequenas,
rastreaveis, ordenadas por dependencia e conter caminhos de arquivos concretos.

## Governance

Esta constituicao prevalece sobre preferencias locais, exemplos genericos de
templates e decisoes tecnicas nao documentadas. Qualquer excecao DEVE aparecer
no `plan.md` da feature, na secao Constitution Check, com justificativa,
alternativa mais simples rejeitada e validacao compensatoria.

Alteracoes nesta constituicao exigem:

- Registro da mudanca no Sync Impact Report.
- Atualizacao de templates e orientacoes afetadas.
- Incremento de versao semantica.
- Revisao de conformidade nas proximas specs, plans e tasks geradas.

Versionamento:

- MAJOR: remocao ou redefinicao incompativel de principios.
- MINOR: novo principio, nova secao obrigatoria ou expansao material de regras.
- PATCH: esclarecimentos, correcoes de texto e ajustes sem mudanca normativa.

Revisoes de PR DEVEM verificar conformidade com arquitetura, estado,
testabilidade, acessibilidade, assets, privacidade, deploy e documentacao da
feature. O checklist de validacao do PR DEVE registrar comandos executados ou
justificar comandos nao executados.

**Version**: 2.0.0 | **Ratified**: 2026-06-11 | **Last Amended**: 2026-06-11
