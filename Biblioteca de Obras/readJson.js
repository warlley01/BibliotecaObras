
// fetch - buscar dados do arquivo 'jsonFile.json'
fetch("./jsonFile.json")
    .then(response => response.json())
    .then(data => { 
        
        
         // ----------------------------- Lista Categorias --------------------------------

        let categoriasList = data.listCategorias
        btnMenuCategorias = document.querySelector('.btnMenuCategorias')
           
        btnMenuCategorias.addEventListener("click", e => {
            console.log(categoriasList)

            recentesDiv.innerHTML = " "

            for(h = 0; h < categoriasList.length; h++) {
                
                newBtnCategoria = document.createElement('div')
                newBtnCategoria.innerHTML = `
                    <button class="btn btn-secondary m-3 btnCateg${h}">${categoriasList[h].categoria}</button>
                `
                // colocar div 'newCard' dentro de 'recentesDiv'
                recentesDiv.appendChild(newBtnCategoria)
                
            }

        })

        // _________________________ Add Categoria à Obra _______________________________

        divCategOptions = document.querySelector('.divCategOptions')

        for(r = 0; r < categoriasList.length; r++) {

            divOptions = document.createElement('div')
            divOptions.innerHTML = `
                <button class="dropdown-item btn" onClick="chooseCategory(event, value)" value="${categoriasList[r].categoria}">${categoriasList[r].categoria}</button>
            `
            
            divCategOptions.appendChild(divOptions)

        }

        // -------------------------------------------------------------------------------


         // caso não houver nenhuma Obra no arquivo Json
        if(data.listData[0] != undefined) {
            console.log("Data JSON: " +  data.listData[0].titulo)
            console.log(data.listData.length)
            
            // Mostrar todas as obras
            let obrasTotal = data.listData.length

            for(i = 0; i < obrasTotal; i++) {

                recentesDiv = document.querySelector('.favoritosDiv')
                newCard = document.createElement('div')

                newCard.innerHTML = `
                    <div class="card m-5" style="width: 250px;">

                        <img class="card-img-top m-0 p-0 imgCard${i}" style="background-color:rgb(185, 185, 185); width: 250px; height: 230px;" src="..." alt="Card image cap">
                        <p class="capCard${i}"></p>
                        <div class="card-body">
                            <h5 class="card-title tituloCard${i}">Card title</h5>
                        </div>
                    </div>
                `
                // colocar div 'newCard' dentro de 'recentesDiv'
                recentesDiv.appendChild(newCard)
                                
                //  Criar cards com os valores do arquivo JSON
                document.querySelector(`.imgCard${i}`).setAttribute('src', "./imagens/" + data.listData[i].imagem)
                document.querySelector(`.tituloCard${i}`).innerText = data.listData[i].titulo
                document.querySelector(`.capCard${i}`).innerText = data.listData[i].capTotal
            }
            

            // ----------------------------------------------------------------------------------

           
            // ----------------------------- Lista Lendo --------------------------------

            listLendo = []

            for (a = 0; a < obrasTotal; a++) {
                if(data.listData[a].lendo == "on"){
                    listLendo.push(data.listData[a])
                }
            }
            
            btnMenuLendo = document.querySelector('.btnMenuLendo') // Quando esse botão recebe um click, gera os Cards da Lista de obras "Lidas"
            
            btnMenuLendo.addEventListener("click", e => {
            
                recentesDiv.innerHTML = " "
                
                for(z = 0; z < listLendo.length; z++) {

                    newCard = document.createElement('div')
                    newCard.innerHTML = `
                        <div class="card m-5" style="width: 250px;">

                            <img class="card-img-top m-0 p-0 imgCard${z}" style="background-color:rgb(185, 185, 185); width: 250px; height: 230px;" src="..." alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title tituloCard${z}">Card title</h5>
                                <p class="sinopseCard${z}"></p>
                            </div>
                        </div>
                    `
                    // colocar div 'newCard' dentro de 'recentesDiv'
                    recentesDiv.appendChild(newCard)
                                    
                    //  Criar cards com os valores do arquivo JSON
                    document.querySelector(`.imgCard${z}`).setAttribute('src', "./imagens/" + listLendo[z].imagem)
                    document.querySelector(`.tituloCard${z}`).innerText = listLendo[z].titulo
                    document.querySelector(`.sinopseCard${z}`).innerText = listLendo[z].sinopse
                }
            })

            // ---------------------------------------------------------------------------

            // ----------------------------- Lista Lerei --------------------------------

            listLerei = []

            for (b = 0; b < obrasTotal; b++) {
                if(data.listData[b].lerei == "on"){
                    listLerei.push(data.listData[b])
                }
            }
            
            btnMenuLerei = document.querySelector('.btnMenuLerei') // Quando esse botão recebe um click, gera os Cards da Lista de obras "Lidas"
            
            btnMenuLerei.addEventListener("click", e => {
                
                recentesDiv.innerHTML = " "
                
                for(y = 0; y < listLerei.length; y++) {
    
                    newCard = document.createElement('div')
                    newCard.innerHTML = `
                        <div class="card m-5" style="width: 250px;">
    
                            <img class="card-img-top m-0 p-0 imgCard${y}" style="background-color:rgb(185, 185, 185); width: 250px; height: 230px;" src="..." alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title tituloCard${y}">Card title</h5>
                                <p class="sinopseCard${y}"></p>
                            </div>
                        </div>
                    `
                    // colocar div 'newCard' dentro de 'recentesDiv'
                    recentesDiv.appendChild(newCard)
                                    
                    //  Criar cards com os valores do arquivo JSON
                    document.querySelector(`.imgCard${y}`).setAttribute('src', "./imagens/" + listLerei[y].imagem)
                    document.querySelector(`.tituloCard${y}`).innerText = listLerei[y].titulo
                    document.querySelector(`.sinopseCard${y}`).innerText = listLerei[y].sinopse
                }
            })
    
            // ---------------------------------------------------------------------------

            // ----------------------------- Lista Lidos --------------------------------

            listLidos = []

            for (c = 0; c < obrasTotal; c++) {
                if(data.listData[c].lido == "on"){
                    listLidos.push(data.listData[c])
                }
            }
            
            btnMenuLidos = document.querySelector('.btnMenuLidos') // Quando esse botão recebe um click, gera os Cards da Lista de obras "Lidas"
            
            btnMenuLidos.addEventListener("click", e => {
            
                recentesDiv.innerHTML = " "
                
                for(n = 0; n < listLidos.length; n++) {

                    newCard = document.createElement('div')
                    newCard.innerHTML = `
                        <div class="card m-5" style="width: 250px;">

                            <img class="card-img-top m-0 p-0 imgCard${n}" style="background-color:rgb(185, 185, 185); width: 250px; height: 230px;" src="..." alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title tituloCard${n}">Card title</h5>
                                <p class="sinopseCard${n}"></p>
                            </div>
                        </div>
                    `
                    // colocar div 'newCard' dentro de 'recentesDiv'
                    recentesDiv.appendChild(newCard)
                                    
                    //  Criar cards com os valores do arquivo JSON
                    document.querySelector(`.imgCard${n}`).setAttribute('src', "./imagens/" + listLidos[n].imagem)
                    document.querySelector(`.tituloCard${n}`).innerText = listLidos[n].titulo
                    document.querySelector(`.sinopseCard${n}`).innerText = listLidos[n].sinopse
                }
            })

            // ---------------------------------------------------------------------------

        
            
            // ----------------------------- Lista Favoritos ------------------------------
        
            listFavoritos = []

            for (d = 0; d < obrasTotal; d++) {
                if(data.listData[d].favorito == "on"){
                    listFavoritos.push(data.listData[d])
                }
            }

            btnMenuFavoritos = document.querySelector('.btnMenuFavoritos') // Quando esse botão recebe um click, gera os Cards da Lista de obras "Lidas"
            
            btnMenuFavoritos.addEventListener("click", e => {
            
                recentesDiv.innerHTML = " "
                
                for(c = 0; c < listFavoritos.length; c++) {

                    newCard = document.createElement('div')
                    newCard.innerHTML = `
                        <div class="card m-5" style="width: 250px;">

                            <img class="card-img-top m-0 p-0 imgCard${c}" style="background-color:rgb(185, 185, 185); width: 250px; height: 230px;" src="..." alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title tituloCard${c}">Card title</h5>
                                <p class="sinopseCard${c}"></p>
                            </div>
                        </div>
                    `
                    // colocar div 'newCard' dentro de 'recentesDiv'
                    recentesDiv.appendChild(newCard)
                                    
                    //  Criar cards com os valores do arquivo JSON
                    document.querySelector(`.imgCard${c}`).setAttribute('src', "./imagens/" + listFavoritos[c].imagem)
                    document.querySelector(`.tituloCard${c}`).innerText = listFavoritos[c].titulo
                    document.querySelector(`.sinopseCard${c}`).innerText = listFavoritos[c].sinopse
                }
            })
        }
        // ---------------------------------------------------------------------------
    })
