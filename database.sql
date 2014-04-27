
-- Table: procedure
CREATE TABLE procedure ( 
    id         INTEGER        PRIMARY KEY AUTOINCREMENT,
    nome       VARCHAR( 70 )  NOT NULL
                              UNIQUE,
    descricao  TEXT,
    requisitos TEXT 
);


-- Table: video
CREATE TABLE video ( 
    id           INTEGER         PRIMARY KEY AUTOINCREMENT,
    procedure_id INTEGER         REFERENCES procedure ( id ) ON DELETE SET NULL
                                                             ON UPDATE CASCADE,
    descricao    TEXT            NOT NULL,
    video        VARCHAR( 100 )  NOT NULL,
    nota         INTEGER         DEFAULT ( 7 ) 
);

