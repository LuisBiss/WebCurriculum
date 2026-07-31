---
target: Public/Index.html
total_score: 23
max_score: 36
na_heuristics: 10
p0_count: 1
p1_count: 3
timestamp: 2026-07-31T02-56-21Z
slug: public-index-html
---
Method: dual-agent (A: revisão de design isolada · B: detector + evidência headless)

## Design Health Score

| # | Heurística | Nota | Problema-chave |
|---|---|---|---|
| 1 | Visibilidade do estado | 3 | "Baixar PDF" não dá retorno; `window.print()` leva 1–3 s no celular sem sinal nenhum |
| 2 | Correspondência com o mundo real | 3 | O rótulo promete "baixar", mas no iOS/Android abre a folha de impressão do sistema |
| 3 | Controle e liberdade | 2 | Trocar idioma não escreve `?lang=` na URL: quem encaminha o link manda a versão errada |
| 4 | Consistência e padrões | 2 | Tags do Coffee_Diseases_Finder ficam em português nas versões EN e 中文 (verificado) |
| 5 | Prevenção de erros | 2 | Texto do LinkedIn truncado para um endereço que não resolve — no papel é beco sem saída |
| 6 | Reconhecimento vs. memória | 3 | No mobile o CTA vive nos primeiros 90 px de ~3.700 px e nunca reaparece |
| 7 | Flexibilidade e eficiência | 3 | Há atalhos reais (`?lang=`, `?theme=`, localStorage, Ctrl+P sem JS); falta o caminho de volta |
| 8 | Estética e minimalismo | 3 | 27 pílulas em Competências; ~350 px de vazio no pé da lateral no desktop |
| 9 | Recuperação de erros | 2 | `404.html` é o boilerplate cru do Firebase, em inglês, sem link de volta |
| 10 | Ajuda e documentação | n/a | Leitura única, sem tarefa que exija instrução; a `.noscript-note` cobre o único caso |
| **Total** | | **23/36** | **Acceptable (64%) — melhorias significativas necessárias** |

## Veredito de Especificidade de Design

**Autoria alta na engenharia, autoria baixa na composição.**

O sistema de tokens é específico deste produto: o coral separado por função (`--accent` decorativo, `--accent-ink` texto, `--accent-solid` preenchimento, `--on-accent` o que vai por cima), o print CSS que reafirma `--on-accent` para o caso de imprimir a partir do tema escuro, o i18n que colhe o português do DOM em vez de duplicá-lo. Isso é trabalho pensado.

A composição não é. Tire o nome e sobra o template de duas colunas que qualquer gerador de currículo entrega — cabeçalho com círculo de foto, coluna principal Perfil → Experiência → Projetos, lateral Competências → Formação → Idiomas. Um dentista usaria esta folha sem mudar uma linha de layout. Nada na estrutura diz "segurança da informação".

O custo de oportunidade é o pior: o `PRODUCT.md` entrega a tese pronta — **ele atravessou a pilha de baixo para cima, PCI → redes Mikrotik → servidores → aplicação** — e ela está sepultada como última oração do segundo parágrafo do Perfil, em cinza. A lista de experiência ainda conta a história ao contrário (cronologia reversa), jogando fora a narrativa ascendente.

**Varredura determinística:** 2 achados, ambos `warning`, zero `error`. `overused-font` (Inter, `style.css:19`) — genuíno e já é decisão consciente em aberto. `em-dash-overuse` — **falso positivo re-verificado de forma independente**: das 14 ocorrências no HTML, todas são separadores estruturais (`2024 — fev/2025`, `TCEES — Tribunal de Contas`, `B2 — Fisk`); zero em prosa corrida.

**Overlays visuais:** nenhum. Não há automação de navegador visível neste ambiente. Toda a evidência é headless instrumentada.

## Impressão Geral

Um produto tecnicamente sólido que ainda não decidiu ser persuasivo. Contraste impecável (0 falhas em 4 cenários), PDF de 1 página nos 3 idiomas com extração ATS linear, funciona sem JavaScript, 155 KB e zero terceiros. Mas a página nunca pede a conversa, a tese não tem forma visual, e o artefato que vai para o RH não carrega nenhuma evidência clicável.

**A maior oportunidade:** o PDF é o que decide, e ele é auditável só na promessa.

## O Que Está Funcionando

**1. Contraste resolvido na origem, não no componente.** 0 falhas em tema claro, escuro, impressão-a-partir-do-claro e impressão-a-partir-do-escuro. Funciona porque a decisão foi tomada uma vez no token.

**2. O PDF resolve a tensão central de verdade.** 1 página A4 nos três idiomas, extração linear com cargo/empresa/data adjacentes. Coluna única na impressão e duas na tela reconhece que os leitores são diferentes.

**3. O caminho sem JavaScript é real.** 3.569 caracteres sobrevivem, com perfil, bullets e projetos íntegros. Importa porque proxies corporativos de recrutamento quebram JS.

## Problemas Prioritários

### [P0] No papel e no ATS, nenhuma evidência é alcançável
**Verificado:** o PDF inteiro contém **uma única URL** — `github.com/LuisBiss`, do cabeçalho. Nenhum dos 4 projetos, nem TryHackMe, nem LeetCode. E o texto do LinkedIn é `linkedin.com/in/luis-francisco`, enquanto o href real é `.../luis-francisco-bissoli-do-amparo-3152341b7`: **no papel, esse endereço não resolve.**
**Por que importa:** o Princípio 1 do produto é "auditável por construção". O fluxo declarado termina em "upload do PDF no sistema de RH", e ATS descarta anotações de link. O avaliador que decide não tem como chegar a nada.
**Correção:** trocar o texto do LinkedIn pelo slug real; em `@media print`, imprimir a URL curta ao lado de cada projeto e reexibir `.foot__fonte`; incluir os endereços de TryHackMe e LeetCode como texto.
**Comando:** `$impeccable harden`

### [P1] A página nunca pede a conversa
A `.toolbar` não é sticky (verificado: não há `position: sticky` no CSS). No mobile o "Baixar PDF" some após ~90 px de ~3.700 px, e o rodapé oferece código-fonte e data. Depois de sete telas de argumentação, não há convite.
**Por que importa:** o produto define sucesso como "o recrutador decide marcar conversa" e a página não pede a conversa em lugar nenhum. Pela regra do pico-fim, metade da memória deixada está sendo desperdiçada.
**Comando:** `$impeccable onboard`

### [P1] Alvos de toque violam WCAG 2.2 AA — medido
**12 de 16** alvos abaixo de 44×44. Mais grave: **5 abaixo de 24×24**, que é o piso do SC 2.5.8 (AA, não AAA): os quatro links de contato do cabeçalho a 23,0 px e o link do rodapé a 16,0 px. Estão empilhados sem margem, então não se qualificam na exceção de espaçamento.
**Por que importa:** o leitor primário lê no celular, e os links de contato são a ação mais valiosa da página.
**Comando:** `$impeccable adapt`

### [P1] A tese do produto não tem forma visual
"Do firmware até a aplicação" é a única afirmação incopiável do candidato e existe apenas como texto corrido.
**Correção:** transformar a linha do tempo numa espinha ascendente com as camadas rotuladas — PCI/firmware → redes → servidores → aplicação — cada degrau apontando para o cargo que o comprova. Sem inventar nada: são os quatro cargos já listados.
**Comando:** `$impeccable layout`

### [P2] Quebra de paridade entre idiomas
**Verificado:** `Index.html:243-244` — `<span>Redes Neurais</span>` e `<span>Visão Computacional</span>` não têm `data-i18n`, então permanecem em português nas versões EN e 中文. **Correção do relatório de A:** o defeito é **só na tela**; no PDF as tags são ocultadas por `.project__stack { display: none }`, e confirmei 0 ocorrências no PDF chinês.
**Comando:** `$impeccable harden`

### [P2] O 404 é boilerplate do Firebase
`Public/404.html` é o arquivo gerado pela CLI, em inglês, mencionando "Firebase Command-Line Interface", sem link de volta. É a única página de erro que um recrutador com link antigo pode encontrar.
**Comando:** `$impeccable clarify`

## Red Flags por Persona

**Casey (mobile, distraído — o leitor primário).** CTA fora de vista após 90 px de 3.700 px. Competências — onde vivem "Hardening", "Segurança de redes", "Pentest" — só aparece por volta dos 2.700 px, depois de quatro cards de projeto: num currículo de segurança, as palavras-chave de segurança estão enterradas no dispositivo em que ele será lido. Chips de idioma com 35,4 px de altura. Zero âncoras ou indicação de progresso.

**Sam (leitor de tela / teclado).** O `#theme-toggle` é um botão de estado binário que **nunca expõe `aria-pressed`** e mantém o mesmo nome acessível nos dois estados — os dois SVGs são `aria-hidden`, então o tema vigente é indeterminável. Cada `a.project` tem nome acessível englobando título + descrição + tags. Não há link de pular para o conteúdo. O `alt=""` na foto é a decisão correta e está justificada.

**Marina (analista de recrutamento, derivada do PRODUCT.md — triagem de ~40 s).** Abre no desktop e precisa ler dois parágrafos para saber que ele mexe com segurança. Baixa o PDF, sobe no ATS, e o texto extraído não tem uma URL de projeto. Copia o LinkedIn: endereço morto. Lê "Ganho expressivo de eficiência e redução de custos" — a única frase do currículo sem âncora verificável, adjetivo de impacto sem número. Vê "Ensino Médio Completo" com o mesmo peso do bacharelado.

## Observações Menores

- **"LF" vaza para a camada de texto do PDF** (verificado: é o primeiro token extraído). Está `aria-hidden` na tela, mas a impressão não o esconde quando a foto carregou.
- O separador `·` do cargo quebra em duas linhas a 1280 px, deixando "Informação" órfão.
- A troca de idioma não escreve `history.replaceState` — a leitura de `?lang=` existe, falta o espelho na escrita.
- Sem JSON-LD `Person`/`ProfilePage`, num artefato cujo público inclui máquinas.
- `.col--side` termina com ~350 px de vazio no desktop.
- **Correção de A:** a pilha CJK **está** declarada (`style.css:78-79`: Noto Sans SC, Source Han Sans SC, PingFang SC, Hiragino Sans GB, Microsoft YaHei). A alegou que não estava.
- **Nuance sobre 中文:** A tratou a ausência de caixa alta nos títulos como bug; foi decisão deliberada, porque `text-transform` não existe em CJK. Mas a consequência que A aponta é real: a hierarquia fica mais fraca em chinês e nada a substituiu.
- 0 erros de JavaScript, 0 overflow horizontal em 500/768/1280, 1 `<h1>`, 0 saltos de cabeçalho.
- **Lacuna de evidência declarada:** o Chromium fixa largura mínima em 500 px no modo de medição, então não há dado instrumentado entre 320 e 499 px.

## Perguntas a Considerar

1. E se a primeira dobra fosse a tese, e não o rosto? "Firmware → redes → servidores → aplicação. Trabalhei em cada camada."
2. A cronologia reversa é obrigatória ou é hábito? A história fica mais forte de baixo para cima.
3. Qual é o menor pedido possível no fim da página — um botão de e-mail com assunto pré-preenchido?
4. O que acontece se Competências mostrar 8 tags em vez de 27? A afirmação de segurança fica mais forte, ou perde palavra-chave de busca?
5. A ausência de certificação de segurança é lacuna ou enquadramento? Declarar "prática em laboratório desde 2024, perfis públicos abaixo" transforma silêncio em honestidade.
6. O PDF poderia carregar um QR code para a página viva?
