import sqlite3

# conectar ao banco
con = sqlite3.connect('base.db')

# cursor para executar comandos no banco
cur = con.cursor()

# comando sql
sql = """
        CREATE TABLE obras (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
                            titulo TEXT NOT NULL,
                            sinopse TEXT NOT NULL)
      """
      
# executar sql
cur.execute(sql)
con.commit()
con.close()      