import sqlite3
import cgi

formValue = cgi.FieldStorage()

titulo = formValue.getvalue('tituloInput')
sinopse = formValue.getvalue('sinopseInput')

con = sqlite3.connect('../base.db')

cur = con.cursor()

def insertObra(tituloParam, sinopseParam):
    return """
            INSERT INTO obras(titulo, sinopse)
                VALUES('{}', '{}')
           """.format(tituloParam, sinopseParam)
           
cur.execute(insertObra(titulo, sinopse))

con.commit()

con.close()