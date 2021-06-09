import cgi
import json


formCategoria = cgi.FieldStorage()

categoriaInput = formCategoria.getvalue('inputNewCategoria')

def writeJson(categoriaJson) :
    # Ler Arquivo
    with open('../jsonFile.json', 'r', encoding='utf8') as f:
        fileData = json.load(f)
        
    # Escrever no Arquivo
    with open('../jsonFile.json', 'w', encoding='utf8') as f:
        fileData['listCategorias'].append(categoriaJson)
        print(fileData)
        json.dump(fileData, f, ensure_ascii=False, indent=4, separators=(',', ':'))


addCategoriaJson = { "categoria" : categoriaInput }

writeJson(addCategoriaJson)

# ________________________________________________________________________
