## Projeto UNP Procedures

Aplicativo para iPad desenvolvido pelo grupo de engenharia de computação que visa servir como ferramenta para o estudo de práticas médicas.

## Informações importantes
Este projeto conta com uma base de dados sqlite para alimentação dos dados. Esta deve ser feita manualmente. O esquema básico do banco se encontra no arquivo sql desse projeto. Os videos precisam obedecer às regras de codificação.

### Encoding dos videos
para codificar os videos foi utilizado uma ferramenta em linha de comando "mencoder", pertecente ao pacote Mplayer.

Para converter um arquivo para as especificações execute:

    mencoder -of lavf -lavfopts format=mp4 -oac copy -nosound -ovc lavc -lavcopts aglobal=1:vcodec=mpeg4:vbitrate=400  -vf scale=720:480,pp=boxblur=2 video4.mp4 -o video4_optimized.mp4


