import sqlite3

con = sqlite3.connect('../../base.db') # talvez o caminho seja definido diferente dependendo de quem rodar o arquivo (manualmente na pasta, ou usando o caminho do servidor python na pasta (src))

cur = con.cursor()

def readObrasDB() :
    return """
            SELECT * FROM obras
           """
           
cur.execute(readObrasDB())

data = cur.fetchall()

print(data[0][3]) # data[linha][coluna] - exemplo: data[linha3][sinopse] ---> linha 3 da tabela, valor da coluna sinopse
# id = [0] - imagem = [1] - titulo = [2] - sinopse = [3] => Ordem das Colunas no banco de dados

i = 0

obraList = []

while i < 4:
    print(i)    
    obraList.append(data[2][i])
    i += 1
    print(obraList)
    

myData = {
    'id' : obraList[0],
    'imagem' : obraList[1],
    'titulo' : obraList[2],
    'sinopse' : obraList[3] 
}

print('\n')
print(myData)
print('\n')

con.close()