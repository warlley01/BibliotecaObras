import sqlite3
import cgi

# Pegar Valor do Form
formValue = cgi.FieldStorage()

# o parametro de "getvalue()" é o name do input no HTML 
titulo = formValue.getvalue('tituloInput')
sinopse = formValue.getvalue('sinopseInput')

# Conectar ao banco de dados 
con = sqlite3.connect('../base.db')

# cursor para executar comandos no banco
cur = con.cursor()

# Função que retorna um simples comando sql com os dados que pegamos do form
def insertObra(tituloParam, sinopseParam):
    return """
            INSERT INTO obras(titulo, sinopse)
                VALUES('{}', '{}')
           """.format(tituloParam, sinopseParam)
           
# executa o sql da função no banco de dados
cur.execute(insertObra(titulo, sinopse))

con.commit()

con.close()