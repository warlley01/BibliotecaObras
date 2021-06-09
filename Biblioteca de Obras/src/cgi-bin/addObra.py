import sqlite3
import cgi
import json
from datetime import date

todayDate = date.today()
print(todayDate)

# Pegar Valor do Form
formValue = cgi.FieldStorage()

# o parametro de "getvalue()" é o name do input no HTML 
imagem = formValue.getvalue('imageInput')
titulo = formValue.getvalue('tituloInput')
sinopse = formValue.getvalue('sinopseInput')
capTotal = formValue.getvalue('capTotalInput')
capLido = formValue.getvalue('capLidoInput')
categoria = formValue.getvalue('categoriaInput')
favorito = formValue.getvalue('favoritoInput')
lido = formValue.getvalue('lidoInput')
lendo = formValue.getvalue('lendoInput')
lerei = formValue.getvalue('lereiInput')

# Conectar ao banco de dados 
con = sqlite3.connect('../base.db')

# cursor para executar comandos no banco
cur = con.cursor()

# Função que retorna um simples comando sql com os dados que pegamos do form
def insertObra(imagemParam, tituloParam, sinopseParam, capTotalParam, capLidoParam, categoriaParam, favoritoParam, lereiParam, lendoParam, lidoParam, dateLido, dateAdd):
    return """
            INSERT INTO obras(imagem, titulo, sinopse, capTotal, capLidos, categoria, favorito, lerei, lendo, lido, dataLido, dataAdicionado)
                VALUES('{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}')
           """.format(imagemParam, tituloParam, sinopseParam, capTotalParam, capLidoParam, categoriaParam, favoritoParam, lereiParam, lendoParam, lidoParam, dateLido, dateAdd)
           
# executa o sql da função no banco de dados
cur.execute(insertObra(imagem, titulo, sinopse, capTotal, capLido, categoria, favorito, lerei, lendo, lido, todayDate, todayDate))

con.commit()

con.close()

# -------------------------------- Add Json --------------------------------------


# Adicionar valores ao Json
def writeJson(obraValue):
    
    # ler o arquivo
    with open('../jsonFile.json', 'r', encoding='utf8') as f:
        fileData = json.load(f)
        
    # Escrever no arquivo
    with open('../jsonFile.json', 'w', encoding='utf8') as f:      
        fileData["listData"].append(obraValue)
        print(fileData)
       # fileData.update(fileData)
       # f.seek(2)
        json.dump(fileData, f, ensure_ascii=False, indent=4, separators=(',', ':'))


# Este objeto será usado para adicionar novas "Obras" - esses valores são os mesmos que recebemos dos "Inputs" que vieram do form no ínicio
addObraJson = {
    "imagem" : imagem,
    "titulo" : titulo,
    "sinopse" : sinopse,
    "capTotal" : capTotal,
    "capLido" : capLido,
    "categoria" : [categoria],
    "favorito" : favorito,
    "lido" : lido,
    "lendo" : lendo,
    "lerei" : lerei
}


writeJson(addObraJson) # chama a função mandando o objeto com o conteúdo da "Obra"


# --------------------------------------------------------------------------------



