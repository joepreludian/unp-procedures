
-- Table: procedure
CREATE TABLE procedure ( 
    id         INTEGER        PRIMARY KEY AUTOINCREMENT,
    nome       VARCHAR( 70 )  NOT NULL
                              UNIQUE,
    descricao  TEXT,
    requisitos TEXT 
);

INSERT INTO [procedure] ([id], [nome], [descricao], [requisitos]) VALUES (1, 'Procedimento teste #1', 'Uma descrição teste', 'Requisitos do procedimento teste #1');
INSERT INTO [procedure] ([id], [nome], [descricao], [requisitos]) VALUES (2, 'Procedimento teste #2', 'Breve descrição', 'Sem requisitos');

-- Table: video
CREATE TABLE video ( 
    id           INTEGER         PRIMARY KEY AUTOINCREMENT,
    video        VARCHAR( 100 )  NOT NULL,
    procedure_id INTEGER         REFERENCES procedure ( id ) ON DELETE SET NULL
                                                             ON UPDATE CASCADE,
    descricao    TEXT            NOT NULL,
    nota         INTEGER         DEFAULT ( 7 ),
    nome         VARCHAR( 60 ) 
);

INSERT INTO [video] ([id], [video], [procedure_id], [descricao], [nota], [nome]) VALUES (1, 'video1.mp4', 1, 'Primeira forma de proceder', 7, 'Primeiro procedimento');
INSERT INTO [video] ([id], [video], [procedure_id], [descricao], [nota], [nome]) VALUES (2, 'video2.mp4', 1, 'Segunda forma de proceder', 5, 'Segundo procedimento');
INSERT INTO [video] ([id], [video], [procedure_id], [descricao], [nota], [nome]) VALUES (3, 'video3.mp4', 2, 'Forma teste 1', 8, 'Terceiro Procedimento');
INSERT INTO [video] ([id], [video], [procedure_id], [descricao], [nota], [nome]) VALUES (4, 'video4.mp4', 2, 'Forma teste #2', 3, 'Quarto procedimento');
