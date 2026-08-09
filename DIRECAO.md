# DIRECAO — LP Gel 3 em 1 · Condessa Beauty

## Estilo nomeado
**Editorial Quiet Luxury** (studio de beleza sofisticado) — hairlines, muito branco,
caixa-alta espaçada como marcador de seção, foto grande e contida. Zero ruído decorativo.
Traduzido do que a própria marca já pratica: *"Discreta. Sofisticada. Sempre atual."*,
*"Clean & chic"*, *"Clássico não significa comum."*

## Paleta com roles — extraída das fotos reais (ffmpeg), não chutada
| Role | Cor | Origem |
|---|---|---|
| `bg-base` | `#FAF8F5` | off-white quente (nunca #FFF puro, foto de pele respira melhor) |
| `bg-elevated` | `#FFFFFF` | cards |
| `text-primary` | `#1C1A18` | off-black quente, nunca #000 |
| `text-muted` | `#6B6560` | |
| `accent` | `#6B4A31` | marrom profundo — dominante nas fotos, e é o 🤎 da marca |
| `accent-hover` | `#54392५` → `#543926` | |
| `border` | `#E6E0D9` | |
Saturação do acento: 0.55. Uma cor de acento só, exclusiva do botão primário.

## Tipografia — UMA família
**Outfit** (300/400/500/600). Decisão consciente: a `construir-sites` prega display+body,
mas a anatomia de LP de cosmético mostrou que as campeãs usam **uma família só**. A elegância
vem de espaçamento, peso leve e hairline — não de segunda fonte.
Escala: `hxl 34 / h1 24 / h2 20 / h3 17 / body 16 / ui 14 / cap 12`. Mobile: hxl 24.
Caixa-alta + `letter-spacing .16em` só em eyebrow de seção.

## Motion
Uma duração: **.6s**. Uma curva: **cubic-bezier(.22,1,.36,1)**.
Só `transform` e `opacity`. Reveal on scroll via IntersectionObserver, sem lib.
`prefers-reduced-motion` desliga tudo.

## Oferta
- **Promessa:** um gel, três funções — fixa, nutre e hidrata a sobrancelha.
- **Mecanismo:** as três funções declaradas pela marca (verbatim do post original).
- **Vilão:** nenhum confirmado. Seção de ataque à categoria **deletada** — não invento vilão.
- **Alma:** *especialista* — quem faz sobrancelha todos os dias criou o próprio gel.
  Ancorada no fato verificável: o studio, o histórico técnico e os 32 mil seguidores da Tamires.
- **CTA único:** `Pedir no WhatsApp` — mesmo texto em todas as aparições.
- **Destino:** `wa.me/5531992489081` com mensagem pré-preenchida citando o Gel 3 em 1.

## Camadas de prova — 5, todas verificáveis
1. Fundadora especialista: Tamires Condessa, 32.000 seguidores
2. Studio físico real: @condessabeautystudio, 1.113 posts, Vale do Aço/MG
3. Loja própria: @condessabshop
4. Marca própria — não é revenda (o resto da loja é)
5. Registro em vídeo do produto em uso (reel)

## Lacunas — marcadas na página com `[[ ... ]]` visível
Preço · composição · ANVISA · prazo de resultado · antes/depois do gel · depoimento sobre o gel

## Uso de imagem — decisão registrada
Antes/depois do feed são de **nanofios e brow lamination** (procedimentos do salão), **não do
gel**. Entram apenas na seção rotulada "O studio por trás do produto", nunca como resultado do
produto. Nenhum rosto de cliente aparece como prova do gel.

## Wireframe
1. Barra de anúncio — marca própria do studio
2. Header — logo + CTA WhatsApp (sem menu)
3. Hero — foto real do produto na mão, promessa "Fixa. Nutre. Hidrata.", CTA
4. Barra de stats — 3 funções / 1 passada / 32 mil / marca própria
5. As três funções — 3 cards, hairline, uma por função declarada
6. Mecanismo — o que muda na sobrancelha, foto do gel aplicado
7. Como usar — 3 passos [[ confirmar com a dona ]]
8. O studio por trás — grade de 4 fotos de trabalho real, rotulada
9. A fundadora — Tamires, foto + texto de autoridade
10. FAQ — 5 objeções, respostas marcadas onde faltam fatos
11. Fechamento — alma + CTA final
12. CTA fixo mobile
