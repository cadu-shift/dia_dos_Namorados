# Feature Specification: Site Presente dos Namorados

**Feature Branch**: `001-site-presente-namorados`

**Created**: 2026-06-11

**Status**: Draft

**Input**: User description: "Website de dia dos namorados com tela inicial de desbloqueio, música local em loop, contador de relacionamento, galeria/carrossel de fotos, seção de carta/mensagem carinhosa, design inspirado em referência LovePanda, fonte Montserrat, gradiente #ff00ff para #400040, assets locais e publicação no GitHub Pages."

## Clarifications

### Session 2026-06-11

- Q: Qual stack deve prevalecer diante do conflito entre a constituição Angular e o requisito React + Vite? → A: React + Vite é a decisão final; atualizar a constituição para refletir este projeto.
- Q: Qual é a data de início do namoro? → A: 2023-11-13.
- Q: Qual formato de galeria de memórias deve ser usado? → A: Ambos: carrossel principal e grade/masonry complementar.
- Q: Qual postura de privacidade vale para fotos, vídeos, texto e música? → A: Aceito publicar fotos, vídeos, texto e música no repositório/site público.
- Q: Qual será o nome exato do repositório no GitHub Pages? → A: dia_dos_Namorados.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Abrir o presente com música (Priority: P1)

Como destinatária do presente, quero tocar em um botão de boas-vindas para abrir o site, iniciar a música de fundo e entrar na experiência sem tela branca ou atraso perceptível.

**Why this priority**: O desbloqueio inicial é a porta de entrada da experiência e também garante a interação exigida pelos navegadores para liberar áudio.

**Independent Test**: Abrir o site em um celular real ou em emulação mobile, tocar no botão central de abertura e verificar que a experiência aparece e a música local começa a tocar em loop.

**Acceptance Scenarios**:

1. **Given** a visitante abre o link pela primeira vez, **When** a tela inicial carrega, **Then** ela vê uma mensagem de boas-vindas e um botão central com texto claro para abrir o presente.
2. **Given** a tela inicial está visível, **When** a visitante toca no botão de abertura, **Then** a tela inicial é removida ou transformada e a música de fundo local começa a tocar em loop.
3. **Given** o áudio não pode iniciar por restrição do navegador ou erro local, **When** a visitante toca no botão, **Then** o site continua navegável e mostra uma mensagem textual clara informando que o áudio não pôde ser iniciado.

---

### User Story 2 - Ver o tempo de relacionamento (Priority: P1)

Como destinatária do presente, quero ver há quanto tempo o casal está junto em anos, meses e dias, para sentir que a página foi feita especialmente para a nossa história.

**Why this priority**: O contador personaliza a experiência e é um dos elementos centrais do presente.

**Independent Test**: Configurar uma data de início conhecida, abrir o site em datas simuladas ou controladas e verificar se o texto exibe a diferença correta em anos, meses e dias.

**Acceptance Scenarios**:

1. **Given** existe uma data local configurada para o início do relacionamento, **When** o site é aberto, **Then** o contador mostra o tempo no formato "X anos, Y meses e Z dias".
2. **Given** o dia atual do mês é menor que o dia da data de início, **When** o contador calcula o período, **Then** o resultado não apresenta valores negativos e mantém meses e dias corretos.
3. **Given** a data atual é anterior à data configurada, **When** o contador é exibido, **Then** o site mostra uma mensagem textual de data inválida ou estado seguro sem quebrar o layout.

---

### User Story 3 - Navegar pelas memórias do casal (Priority: P2)

Como destinatária do presente, quero navegar por fotos e vídeos curtos do casal em uma galeria bonita e fluida, para reviver momentos importantes no celular.

**Why this priority**: A galeria dá corpo emocional ao presente, mas depende da experiência inicial e do layout base já funcionarem.

**Independent Test**: Abrir a página em largura mobile de 360px a 430px, percorrer o carrossel principal e a grade/masonry complementar, e confirmar que nenhuma mídia ou texto cria rolagem horizontal.

**Acceptance Scenarios**:

1. **Given** há fotos locais configuradas, **When** a visitante chega à seção de memórias, **Then** as imagens aparecem em um carrossel principal com controles claros.
2. **Given** há fotos locais configuradas, **When** a visitante continua explorando a seção de memórias, **Then** as imagens também aparecem em uma grade/masonry complementar sem vazar da tela.
3. **Given** há vídeos curtos locais configurados, **When** a visitante chega à seção de memórias, **Then** os vídeos aparecem como parte da galeria sem impedir a navegação principal.
4. **Given** uma imagem ou vídeo não carrega, **When** a galeria é renderizada, **Then** o site preserva o layout e apresenta texto alternativo ou fallback visual adequado.

---

### User Story 4 - Ler uma carta carinhosa (Priority: P2)

Como destinatária do presente, quero encontrar uma seção de mensagem pessoal com aparência de carta, para ler a declaração com calma durante a navegação.

**Why this priority**: A mensagem é o conteúdo afetivo principal depois do desbloqueio, do contador e das memórias visuais.

**Independent Test**: Abrir a seção em celular, verificar legibilidade, contraste, quebra de linhas, ausência de rolagem horizontal e leitura confortável do texto.

**Acceptance Scenarios**:

1. **Given** existe uma declaração pessoal configurada localmente, **When** a visitante chega à seção da carta, **Then** o texto aparece em um bloco dedicado, legível e com estilo que remete a uma carta.
2. **Given** o texto da carta é longo, **When** a seção é exibida em largura mobile, **Then** o conteúdo quebra linhas corretamente e não sobrepõe outras seções.

---

### User Story 5 - Acessar o presente publicado (Priority: P3)

Como pessoa que enviou o presente, quero publicar o site em um link do GitHub Pages que funcione ao abrir, atualizar e navegar pelo celular, para compartilhar sem depender de configuração manual.

**Why this priority**: A publicação final é essencial para entrega, mas pode ser validada após a experiência principal estar pronta.

**Independent Test**: Publicar o site em ambiente final, abrir o link direto, atualizar a página e verificar que tela, mídia e estilos carregam sem 404.

**Acceptance Scenarios**:

1. **Given** o site está publicado, **When** a visitante abre o link final no celular ou PC, **Then** a tela inicial renderiza sem tela branca.
2. **Given** o site está publicado, **When** a página é atualizada manualmente, **Then** o site carrega novamente sem cair em uma página 404.
3. **Given** o site está publicado, **When** o console do navegador é inspecionado, **Then** imagens, fonte, áudio e arquivos da aplicação não retornam erro 404.

### Edge Cases

- Se a música local falhar, a experiência principal continua acessível e informa o problema em texto.
- Se a data de início do relacionamento estiver ausente ou inválida, o contador mostra um estado textual seguro em vez de valores negativos ou quebrados.
- Se a galeria tiver muitas fotos, a tela inicial deve carregar rapidamente sem aguardar todas as mídias pesadas.
- Se uma mídia da galeria não existir ou estiver com caminho incorreto, a seção preserva o layout e informa alternativa textual.
- Se o site for aberto em largura de 360px a 430px, nenhum texto, botão, imagem, vídeo ou seção pode criar rolagem horizontal.
- Se a visitante navega por teclado, o botão inicial, controles da galeria e demais interações devem receber foco visível e funcionar.
- Se o link publicado for acessado diretamente ou recarregado, o site deve abrir a experiência inicial sem rota quebrada.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST present an initial welcome/unlock screen before the main gift content.
- **FR-002**: System MUST provide a central, clearly labeled action "ver presente" to unlock the experience.
- **FR-003**: System MUST start the configured local background music only after the first user interaction on the unlock screen.
- **FR-004**: System MUST keep the background music playing in loop while the visitor navigates the page after unlocking.
- **FR-005**: System MUST reuse the existing local music file named `Foi assim - Sotam.mp3` and must not substitute it with another track.
- **FR-006**: System MUST calculate relationship duration from the local relationship start date `2023-11-13` to the visitor's current date.
- **FR-007**: System MUST display the relationship duration as "X anos, Y meses e Z dias".
- **FR-008**: System MUST handle calendar boundaries without negative years, months, or days.
- **FR-009**: System MUST provide a memory gallery containing locally configured photos and, when supplied, short videos of the couple.
- **FR-010**: System MUST provide both a primary carousel with clear controls and a complementary masonry/cascade gallery for memories.
- **FR-011**: System MUST provide a dedicated personal message/letter section with readable formatting that suggests a handwritten or letter-like tone.
- **FR-012**: System MUST expose visible textual states for loading, error, and success when media, audio, or date-dependent content is pending, unavailable, or complete.
- **FR-013**: System MUST provide clear accessible names, visible focus, and keyboard operation for interactive controls.
- **FR-014**: System MUST prioritize mobile widths from 360px to 430px and prevent horizontal scrolling in that range.
- **FR-015**: System MUST use local content for texts, media paths, and relationship start date; no database or remote content source is required.
- **FR-016**: System MUST avoid including sensitive data such as passwords, CPFs, addresses, private credentials, or secrets in code or public media.
- **FR-019**: System MAY publish the configured photos, videos, letter text, and music as public repository and website assets, with no expectation of access restriction.
- **FR-017**: System MUST support static-page navigation by scrolling, conditional rendering, or hash-based navigation so page refresh does not break the published site.
- **FR-018**: System MUST load the initial unlock screen quickly without waiting for all gallery media or the full audio file to block first render.

### Non-Functional Requirements

- **NFR-001**: The visual direction MUST use Montserrat as the global typography and a background gradient from `#ff00ff` to `#400040`.
- **NFR-002**: The experience MUST be mobile-first, with primary validation on devices or emulated screens between 360px and 430px wide.
- **NFR-003**: Images SHOULD be compressed before publication, preferably as WebP or optimized JPEG, so the initial page feels near-instant on mobile networks.
- **NFR-004**: Publicly shipped media and text MUST be treated as internet-visible because the repository and deployed site are public.
- **NFR-005**: The final published link MUST load correctly on GitHub Pages, including app files, styles, images, fonts, and audio.

### Planning Constraints From Stakeholder Input

- The application stack is React configured through Vite.
- The repository constitution and dependent templates reflect React + Vite before implementation planning starts.
- The application is intended to be a static single-page experience hosted on GitHub Pages.
- The deployment process should be automated with either a `gh-pages` package script or a simple GitHub Actions workflow.
- The Vite base path must be `/dia_dos_Namorados/` to match the GitHub Pages repository name.
- Browser history routing should be avoided for production refresh safety; scroll navigation, conditional rendering, or hash-based routing are acceptable.
- Photos are expected to be local assets supplied by the project owner. The existing music file is currently available locally under the project assets.

### Key Entities *(include if feature involves data)*

- **Gift Experience**: The complete romantic page after unlock, including visual theme, audio state, content sections, and navigation behavior.
- **Unlock State**: Whether the visitor has interacted with the opening screen and whether audio playback was successfully requested.
- **Relationship Start Date**: Local configured date `2023-11-13` used to calculate the displayed relationship duration.
- **Relationship Duration**: Derived display value containing years, months, and days between the configured start date and current date.
- **Memory Item**: Local photo or short video with source path, optional caption, media type, and accessible alternative text.
- **Letter Message**: Local personal declaration text shown in the dedicated message section.
- **Deployment Configuration**: Publish-time settings required for static hosting, asset paths, refresh behavior, public exposure expectations, and the `/dia_dos_Namorados/` base path.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: On Safari iOS and Chrome Android, the music starts after the first tap on the unlock screen in at least 95% of manual test attempts where device audio is enabled.
- **SC-002**: The unlock screen becomes visible within 2 seconds on a typical 4G mobile connection during final acceptance testing.
- **SC-003**: The relationship counter returns correct non-negative years, months, and days from `2023-11-13` for at least 10 test dates, including month-end and day-of-month boundary cases.
- **SC-004**: At widths from 360px to 430px, every page section can be viewed without horizontal scrolling.
- **SC-005**: In the published site, a full page refresh opens the experience successfully without showing a static-hosting 404 page.
- **SC-006**: In the published site, browser console validation shows zero 404 errors for app files, images, font files, styles, and the music file.
- **SC-007**: The memory gallery carousel and complementary masonry/cascade view remain usable with at least 12 local photos without delaying the initial unlock screen beyond the 2-second target.
- **SC-008**: All primary interactive controls can be reached and activated using keyboard navigation in desktop browser testing.

## Assumptions

- The relationship start date is 2023-11-13.
- The final personal letter text and photo/video set will be supplied by the project owner before publication.
- The typo in the provided reference URL (`hhttps`) represents an intended `https` URL.
- If the external design reference is unavailable during implementation, the described visual tokens and interaction goals are authoritative.
- The GitHub Pages repository name is `dia_dos_Namorados`, so the production base path is `/dia_dos_Namorados/`.
- The project owner accepts that all public repository media and text can be discovered by anyone with access to the repository or deployed site.
- Photos, videos, letter text, and music may be published publicly as part of the repository and deployed website.
