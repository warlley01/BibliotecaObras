import sqlite3

con = sqlite3.connect('base.db')

cur = con.cursor()

sql = """
        CREATE TABLE obras (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
                            titulo TEXT NOT NULL,
                            sinopse TEXT NOT NULL)
      """
      
cur.execute(sql)
con.commit()
con.close()      