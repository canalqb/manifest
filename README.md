**README - Configurando o Manifesto e o Ícone "Maskable" para o Progressive Web App (PWA)**

Neste repositório, você encontrará os arquivos necessários para configurar um Progressive Web App (PWA) com um manifesto (manifest.json) e um ícone "maskable". O PWA permite que o seu site funcione como um aplicativo em dispositivos móveis, proporcionando uma experiência mais rápida e interativa para os usuários.

**Passo 1: Crie o Manifesto (manifest.json)**

O arquivo "manifest.json" é um arquivo de configuração que define informações básicas do PWA, incluindo o ícone a ser exibido na tela inicial do dispositivo. O manifesto deve ser colocado na raiz do seu projeto.

Exemplo de conteúdo para o arquivo "manifest.json":

```json
{
  "name": "Nome do seu aplicativo",
  "short_name": "Nome curto do seu aplicativo",
  "start_url": "/index.html",
  "display": "standalone",
  "icons": [
    {
      "src": "/caminho/para/o/seu/icone-maskable.png",
      "type": "image/png",
      "sizes": "512x512",
      "purpose": "maskable"
    }
  ]
}
```

Certifique-se de substituir "Nome do seu aplicativo", "Nome curto do seu aplicativo" e "/caminho/para/o/seu/icone-maskable.png" pelos valores relevantes para o seu aplicativo e pelo caminho correto para o ícone "maskable".

**Passo 2: Ícone "Maskable"**

O ícone "maskable" é um ícone projetado para preencher todo o espaço disponível no formato do ícone, sem deixar espaços em branco nas bordas. Isso proporciona uma aparência mais consistente e agradável ao instalar o aplicativo em diferentes dispositivos.

Certifique-se de que o ícone "maskable" esteja disponível no caminho especificado no manifesto. Salve o ícone com as dimensões corretas (por exemplo, 512x512 pixels) e inclua a propriedade "purpose" definida como "maskable".

**Passo 3: Registro do Service Worker**

Para que o PWA funcione corretamente, é necessário registrar um Service Worker, que é um script que permite o armazenamento em cache e outras funcionalidades offline. Certifique-se de incluir o script de registro do Service Worker na seção `<head>` do seu arquivo HTML principal (por exemplo, index.html):

```html
<!DOCTYPE html>
<html>
<head>
  <!-- Seu código HTML normal aqui -->

  <!-- Adicione este script para registrar o Service Worker -->
  <script>
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/caminho/para/o/seu/sw.js')
          .then(registration => {
            console.log('Service Worker registrado com sucesso!', registration.scope);
          })
          .catch(error => {
            console.log('Falha ao registrar o Service Worker:', error);
          });
      });
    }
  </script>
</head>
<body>
  <!-- Conteúdo do corpo do seu site aqui -->
</body>
</html>
```

**Passo 4: Commit no GitHub**

Após realizar todas as alterações, faça o commit de todos os arquivos na pasta do seu projeto no GitHub.

Com estes passos, seu Progressive Web App estará com o ícone "maskable" definido corretamente no manifesto e estará pronto para ser instalado em dispositivos, proporcionando uma experiência mais consistente e agradável para os usuários ao adicioná-lo à tela inicial de seus dispositivos móveis.
