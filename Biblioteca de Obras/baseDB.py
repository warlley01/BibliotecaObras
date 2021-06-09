import sqlite3

# conectar ao banco
con = sqlite3.connect('base.db')

# cursor para executar comandos no banco
cur = con.cursor()

# comando sql
sql = """
        CREATE TABLE obras (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
                            imagem VARCHAR(100),
                            titulo TEXT NOT NULL,
                            sinopse TEXT NOT NULL,
                            capTotal VARCHAR(25),
                            capLidos VARCHAR(25),
                            categoria VARCHAR(25),
                            favorito BOOLEAN NOT NULL,
                            lerei BOOLEAN NOT NULL,
                            lendo BOOLEAN NOT NULL,
                            lido BOOLEAN NOT NULL,
                            dataLido DATETIME NULL,
                            dataAdicionado DATETIME NOT NULL
                            )                            
      """
      
# executar sql
cur.execute(sql)
con.commit()
con.close()      