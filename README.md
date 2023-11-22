# UniQuest_Teste

# Jogo de Movimento do Personagem

Este é um jogo simples onde um personagem pode se mover em um fundo usando as setas do teclado ou o toque em dispositivos móveis.

### Código JavaScript (script.js)

O código JavaScript é responsável por controlar o movimento do personagem. Aqui estão as principais características:

1. **Variáveis Globais:**
    - `image`: Referência ao elemento de imagem do personagem.
    - `positionX` e `positionY`: Posição atual do personagem.
    - `isFlipped`: Indica se o personagem está virado para a esquerda.
    - `zoomLevel`: Nível de zoom do dispositivo.
    - `speedArrow` e `speedTouch`: Velocidades para movimento lateral com setas e toque, respectivamente.
    - `backgroundWidth` e `backgroundHeight`: Dimensões do background.
    - `characterWidth` e `characterHeight`: Dimensões do personagem.

2. **Eventos de Teclado e Toque:**
    - `keydown`: Detecta as teclas pressionadas para movimentar o personagem usando as setas.
    - `touchstart` e `touchmove`: Permitem o movimento do personagem ao tocar na tela.

3. **Limitação de Movimento:**
    - A posição do personagem é limitada pelos limites do fundo do jogo.

4. **Inversão de Direção ao Toque:**
    - Ao tocar em diferentes partes da tela, o personagem inverte a direção sem girar.

## Personalização

- **Ajuste de Velocidades:**
    - Você pode ajustar as variáveis `speedArrow` e `speedTouch` para controlar a velocidade do personagem.

- **Ajuste de Dimensões:**
    - Certifique-se de ajustar as dimensões do personagem (`characterWidth` e `characterHeight`) e do fundo (`backgroundWidth` e `backgroundHeight`) de acordo com o layout do seu jogo.

Divirta-se jogando!
