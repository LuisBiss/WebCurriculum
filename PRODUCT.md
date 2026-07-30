# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Hoje: HTML, CSS e JavaScript estáticos, sem build, sem `package.json`, sem framework. Fontes vêm do Google Fonts por CDN; os ícones são SVG inline.

O usuário **não** marcou "sem dependências externas / build" como restrição quando perguntado diretamente. Portanto adotar um build ou framework no futuro não está vedado — mas também não foi aprovado. Decisão aberta.

## Users

Leitor primário: **recrutadores e times técnicos avaliando o Luis para vagas de segurança da informação**, em três mercados que ele trata em pé de igualdade:

1. **Brasil** — vagas locais no Espírito Santo e remotas nacionais.
2. **Remoto internacional em inglês** — empresas estrangeiras contratando no Brasil.
3. **Mercado chinês / empresas chinesas.**

Consequência confirmada: as três versões de idioma (PT / EN / 中文) são **peças de decisão**, não tradução decorativa. Nenhuma é secundária.

Situação de leitura: o avaliador chega por um link (LinkedIn, e-mail, candidatura), gasta poucos minutos, frequentemente no celular, e decide se marca conversa. Um segundo leitor é o sistema de RH, que recebe o PDF.

## Product Purpose

Conseguir entrevistas para vagas de segurança da informação. Sucesso não é "o site é bonito" — é o recrutador entender em menos de um minuto que o Luis tem base real em redes, sistemas e programação, e ter um caminho de um clique para verificar isso.

## Positioning

O Luis atravessou a pilha de baixo para cima, e cada degrau é verificável: produziu e manteve eletrônica em placa de circuito impresso, depois implantou redes Mikrotik e sistemas de monitoramento de servidores em clientes reais, e programa em C, C++, C# e Python — incluindo um motor de cálculo em C exposto por API.

Isso sustenta uma afirmação que um candidato só-software não pode copiar honestamente: ele entende segurança do firmware até a aplicação porque trabalhou nas duas pontas, não porque leu sobre elas.

## Operating Context

- Currículo publicado em Firebase Hosting, em `https://curriculo-luis-francisco.web.app/`. Código em `github.com/LuisBiss/WebCurriculum`, pasta publicada `Public/`.
- Fluxo real de uso: link compartilhado → leitura rápida na web → download do PDF → upload do PDF em sistema de RH.
- O PDF é gerado pelo próprio navegador (`window.print()` + CSS de impressão), e herda o idioma ativo na página.
- Os projetos citados são repositórios públicos, então qualquer afirmação técnica é auditável por quem abrir os links.

## Capabilities and Constraints

Restrições duráveis confirmadas pelo usuário:

- **PDF sempre em uma página.** Qualquer conteúdo novo tem que caber.
- **O PDF precisa passar por filtro ATS.** Texto real e selecionável, nunca imagem.
- **Permanecer em Firebase Hosting, na mesma URL.** Sem migrar hospedagem nem trocar domínio.

Tensão conhecida a resolver em trabalho futuro (registrada, não resolvida aqui): o PDF atual usa **layout de duas colunas**. Parsers ATS antigos leem duas colunas fora de ordem, embaralhando cargos e datas. "Uma página" e "compatível com ATS" empurram em direções opostas — uma coluna é mais segura para máquina e gasta mais altura. Decisão pendente do usuário.

Fatos de produto explicitamente **indefinidos**:

- Cargo e atribuições na Fass Advogados (empregador atual desde jun/2025) — desconhecidos. Cinco marcadores `[TODO]` no conteúdo aguardam isso.
- Instituição e ano da certificação de levantamento topográfico com drones.

## Brand Commitments

- Nome real e completo: Luis Francisco Bissoli do Amparo.
- Contatos confirmados: `luisfranciscobda@gmail.com`, `+55 (27) 99228-8775`, `github.com/LuisBiss`, LinkedIn `luis-francisco-bissoli-do-amparo-3152341b7`.
- Posicionamento escolhido pelo usuário: **Segurança da Informação**, cobrindo três trilhas simultâneas — infra/redes com foco em segurança, SOC/defesa (blue team) e pentest/ofensiva (red team).
- Foto de perfil: o usuário vai fornecer uma nova. Slot em `Public/Assets/img/profile.jpg`, com as iniciais "LF" como fallback.

## Evidence on Hand

Real e verificável:

- Graduação em Engenharia da Computação, FAESA, conclusão prevista dez/2026.
- Emprego atual: Fass Advogados, desde jun/2025. Anteriores: TCEES (estágio em TI, 2024 – fev/2025), Sinales (auxiliar eletrotécnico 2023–2024; estágio em eletrônica 2022–2023).
- Inglês B2 (Fisk).
- Certificação de levantamento topográfico com drones.
- Repositórios públicos: `atomic-ctmc-simulator` (motor C + FastAPI + Flask), `RecomendAI` (MLP), `Coffee_Diseases_Finder`, `Classificacao-Animais`, `Fighting_Game` (UART entre Arduinos), `Script_Shell`, `House_on_WPF`, `LeetCode_Problems`.
- Prática em TryHackMe e Hack The Box.

Ausências que trabalho futuro **não deve fabricar**:

- Nenhuma certificação formal de segurança (sem Security+, CCNA, CEH, eJPT, ISO 27001).
- Nenhuma experiência profissional em pentest — a prática ofensiva é de laboratório. Ele busca vagas de red team sem histórico pago na área.
- Nenhum ranking, sala concluída ou pontuação confirmada em TryHackMe/HTB. Só as plataformas foram confirmadas.
- **Não fala chinês.** O usuário confirmou isso e ainda assim quer as três versões e trata empresas chinesas como público real. Logo: a versão 中文 existe para alcance, e a seção de idiomas lista apenas português e inglês. Nunca listar chinês como competência.
- Nenhum cliente, número, métrica ou depoimento. Nada de resultados quantificados até que ele forneça.

## Product Principles

1. **Auditável por construção.** Tudo no currículo aponta para trabalho público ou verificável. Se um leitor clicar, tem que encontrar o que foi prometido.
2. **Os três idiomas têm paridade de conteúdo.** Nenhuma versão pode contar menos que a outra; uma vaga se decide em qualquer uma delas.
3. **Vocabulário de segurança só se ancorado em trabalho feito.** Termos vêm do que ele operou — Mikrotik, servidores, monitoramento, hardening, laboratório — nunca de lista de buzzwords.
4. **Dois artefatos, duas funções, ambos sozinhos.** A página convence humanos; o PDF sobrevive a máquinas de RH. Nenhum dos dois pode depender do outro para fazer sentido.
5. **Lacuna declarada vence lacuna preenchida.** Dado factual que falta fica marcado como pendente, jamais inventado ou inferido.

## Accessibility & Inclusion

Nenhum requisito de acessibilidade específico do produto foi estabelecido pelo usuário.

Há, porém, um requisito de **legibilidade por máquina** confirmado: o PDF precisa ser parseável por ATS. Isso torna texto real (não imagem), ordem de leitura correta e hierarquia semântica obrigações funcionais, não preferências.
