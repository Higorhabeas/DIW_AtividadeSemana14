let bancoContatos = JSON.parse(localStorage.getItem("contatos"));

if (!bancoContatos){
    bancoContatos = [
        {
            "nomeContato": "João da Silva", 
            "telContato": "(31) 9 8795-5587"
                        
        },
        {
            "nomeContato": "Maria das Graças", 
            "telContato": "(31) 9 8795-5547" 
                        
        }
    ]
}





function limparForm(){
    document.getElementById("nome").value = "";
    document.getElementById("telefone").value = "";
}

function cadastraNovoContato (){
    // Ler os dados do localStorage
    //let objDados = leDados();

    // Incluir um novo contato
    let nome = document.getElementById ('nome').value;
    let telefone = document.getElementById ('telefone').value;

    if (nome.length < 2 || telefone.length < 16){
        if(nome.length < 2){
            alert("É necessário no mínimo duas letras no nome!")
        }
        if (telefone.length < 16){
            alert("O campo telefone deve ter o seguinte formato: (DD) 9 ####-####");
        }
    }else{
        var novoContato = {
            "nomeContato": nome,
            "telContato": telefone
        };
        bancoContatos.push(novoContato);
        localStorage.setItem("contatos",JSON.stringify(bancoContatos));
        limparForm();
        alert("Contato cadastrado com sucesso!");
        exibirContatos();
    }
    
    

}

function filtro(){
    var filtros = document.getElementById("nomeBusca").value;
    exibirContatos(filtros.toLowerCase());
}

function exibirContatos(filtroBusca){
    var strCard = "";

    for(let index=0; index < bancoContatos.length; index++){
        const contato = bancoContatos[index];

        var dados = [index, contato.nomeContato, contato.telContato];

        if (contato.nomeContato.toLowerCase().startsWith(filtroBusca)){

            strCard += `<div class="card mx-1 my-1 col-md-3">
                            <div class="row justify-content-center pt-2">
                                <div class="col-auto">
                                    <center> <h5 class="card-title" id="nm">${contato.nomeContato}</h5> </center>
                                    <p class="card-text" id="tl">${contato.telContato}</p>
                                </div>
                            </div>
                            <div class="row justify-content-center py-3">
                                <div class="col-auto">
                                    <a href="tel:${contato.telContato}">
                                        <button type="button" class="btn btn-sucess">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                                            </svg>
                                        </button>
                                    </a>
                                </div>
                                <div class="col-auto">
                                    <button type="Button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-toggle="#exampleModal">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                        </svg>
                                    </button>
                                </div>
                                <div class="col-auto">
                                    <button type="button" class="btn btn-danger" onclick="removerContato(${index})">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                                  </svg>
                                  </button>
                                </div>
                            </div>
                        </div>`
        }
        else if( filtroBusca == null){
            strCard += `<div class="card mx-1 my-1 col-md-3">
            <div class="row justify-content-center pt-2">
                <div class="col-auto">
                    <center> <h5 class="card-title" id="nm">${contato.nomeContato}</h5> </center>
                    <p class="card-text" id="tl">${contato.telContato}</p>
                </div>
            </div>
            <div class="row justify-content-center py-3">
                <div class="col-auto">
                    <a href="tel:${contato.telContato}">
                        <button type="button" class="btn btn-sucess">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                            </svg>
                        </button>
                    </a>
                </div>
                <div class="col-auto">
                    <button type="Button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                        </svg>
                    </button>
                </div>
                <div class="col-auto">
                    <button type="button" class="btn btn-danger" onclick="removerContato(${index})">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                  </svg>
                  </button>
                </div>
            </div>
        </div>`
        }

        const exampleModal = document.getElementById('exampleModal');

        if(exampleModal){
            exampleModal.addEventListener('show.bs.modal',(event) =>{
                const button = event.relatedTarget;
                var recipient = button.getAttribute('data-bs-whatever');
                var infos = recipient.split(",");
                const modalId = exampleModal.querySelector('#idIn');
                const modalNome = exampleModal.querySelector('#nomeEdit');
                const modalTel = exampleModal.querySelector('#telefoneEdit');

                modalId.value = infos[0];
                modalNome.value = infos[1];
                modalTel.value = infos[2];
            })
        }

    }

    document.querySelector('#tela').innerHTML = strCard;
}

function editarContato(){
    var i = document.getElementById("idIn").value;
    var n = document.getElementById("nomeEdit").value;
    var t = document.getElementById("telefoneEdit").value;
    if ((n.length < 2 || telefone.length < 16)){
        if(nome.length < 2){
            alert("É necessário no mínimo duas letras no nome!")
        }
        if (telefone.length < 16){
            alert("O campo telefone deve ter o seguinte formato: (DD) 9 ####-####");
        }else{
            bancoContatos[i].nomeContato = n;
            bancoContatos[i].telContato = t;

            localStorage.setItem("contatos", JSON.stringify(bancoContatos));

            alert("Informações editadas com sucesso!");
            $('#exampleModal').modal('hide');
            exibirContatos();
        }
    }    
}

function removerContato(id){
    var r = confirm("Prosseguir com a exclusão do contato?");
    if(r == true){
        let index = id;
        bancoContatos.splice(index,1);
        localStorage.setItem("contatos",JSON.stringify(bancoContatos));

        alert("Contato removido com sucesso!");
        exibirContatos();
    }else{
        alert("Operção cancelada!");
    }
}

onload = () =>{
    exibirContatos();
}