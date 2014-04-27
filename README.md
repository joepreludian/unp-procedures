## Projeto UNP Procedures

Aplicativo para iPad desenvolvido pelo grupo de engenharia de computação que visa servir como ferramenta para o estudo de práticas médicas.

## Informações importantes
Este projeto conta com uma base de dados sqlite para alimentação dos dados. Esta deve ser feita manualmente. O esquema básico do banco se encontra no arquivo sql desse projeto. Os videos precisam obedecer às regras de codificação.

### Encoding dos videos
para codificar os videos foi utilizado uma ferramenta em linha de comando "ffmpeg". Acabei por usar este dado que o meu mencoder precisava ter suporte à h264. preferi por utilizar o ffmpeg.

Para converter um arquivo para as especificações execute:

    ffmpeg -i video2.mp4 -s 720x480 -r 30000/1001 -b:v 800k -vcodec libx264 -vpre ipod640 -an video2_optimized.mp4
