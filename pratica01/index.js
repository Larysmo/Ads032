const contatos = {nome:"Nome do contato", fone: "Fone do contato"};
const root = document.getElementById('root');

function titulo(nome){
  const novoH2 = document.createElement("h2");
  novoH2.innerHTML = nome;
  return novoH2;
}

function inputText(){
  const recebeContato = document.createElement("input");
  recebeContato.setAttribute("type", "text");
  return recebeContato;
}

function inputTel(){
  const recebeTelefone = document.createElement("input");
  recebeTelefone.setAttribute("type", "tel");
  return recebeTelefone;
}

function inputSubmit(){
  const botaoEnviar = document.createElement("input");
  botaoEnviar.setAttribute("type", "submit");
  return botaoEnviar;
}

function formContato(){
  let formulario = document.createElement("form");
  formulario.append(inputText());
  formulario.append(inputTel());
  formulario.append(inputSubmit());
  formulario.addEventListener("submit", handleSubmit);
  return formulario;
}

function handleSubmit(event){
   const{nome:"Nome do contato", fone: "Fone do contato"} = formData
  
         
}

function listaContato(){
  const tabela = createElement("table");
  tabela.appendChildElement("tr");
  tabela.appendChildElement("td");


function meusContatos(){
  const novoContato = root.createElement("h2");
  novoContato = innerHtml("Novo Contato");
  root.getAttribute(formulario);
}


