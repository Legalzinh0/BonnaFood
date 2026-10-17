# Cardápio digital — Bonna Salgados

Site estático responsivo feito com HTML, CSS e JavaScript. Não precisa de servidor, banco de dados ou instalação de dependências.

## Antes de publicar

1. Abra `script.js`.
2. Troque `WHATSAPP_NUMBER = "55DDNUMEROAQUI"` pelo WhatsApp comercial da Bonna, com código do Brasil + DDD + número, só dígitos. Exemplo fictício: `5531999999999`.
3. Confira a lista `PRODUCTS`: edite os preços (números como `7.50`), descrições e nomes. O projeto começa com Empadinha e Copo da Felicidade, que podem ser ajustados conforme o cardápio real.
4. Salve o arquivo. Os preços estão como `0` de propósito para não inventar os valores da loja.

## Testar no computador

Abra o arquivo `index.html` no navegador. Para testar o checkout de verdade, configure o número de WhatsApp no `script.js` primeiro.

## Publicar grátis no GitHub Pages

### Método pelo site do GitHub

1. Entre em https://github.com/Legalzinh0/Bonna
2. Clique em **Add file** → **Upload files**.
3. Extraia o ZIP deste projeto no computador e envie os arquivos que estão dentro da pasta (`index.html`, `style.css`, `script.js` e `README.md`). Envie os arquivos, não apenas o ZIP.
4. Na parte inferior, clique em **Commit changes** para salvar na branch `main`.
5. No repositório, abra **Settings** → **Pages**.
6. Em **Build and deployment**, selecione **Deploy from a branch**.
7. Escolha a branch `main` e a pasta `/ (root)`, depois clique em **Save**.
8. Aguarde alguns minutos e atualize a página de Pages. O endereço normalmente será:
   `https://legalzinh0.github.io/Bonna/`

### Atualizar depois

Quando quiser alterar produtos ou preços, edite `script.js` no GitHub e clique em **Commit changes**. O Pages publicará a atualização automaticamente após alguns minutos.

## Importante

- O cardápio não processa pagamentos online; o pedido é enviado ao WhatsApp para confirmação.
- O preço, disponibilidade, entrega/retirada e formas de pagamento devem ser combinados com a loja.
- Se o endereço público não abrir, confirme em **Settings → Pages** se a publicação foi ativada e se o repositório está público.


## Imagem do produto Queridinho

Coloque o arquivo original `Queridinho.jpeg` dentro de uma pasta chamada `img`, no mesmo nível de `index.html`, `style.css` e `script.js`. O caminho esperado é `img/Queridinho.jpeg`.
