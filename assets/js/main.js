
async function execute() {
    respost = await axios('pessoas.json')
    const json = respost.data
    document.addEventListener('click', e => {
        const el = e.target
        if(el.classList.contains('buscar')) loadPageOnElement(json)
        if(el.classList.contains('maiores')) loadPageOnElement(json.filter(people => people.idade > 18));
        if(el.classList.contains('clear')) clear();
    })

}

function loadPageOnElement(json) {
  const table = document.createElement('table');

  for (people of json) {
    const tr = document.createElement('tr');

    let td1 = document.createElement('td');
    td1.innerHTML = people.nome;
    tr.appendChild(td1);

    let td2 = document.createElement('td');
    td2.innerHTML = `Idade: ${people.idade}`;
    tr.appendChild(td2);

    let td3 = document.createElement('td');
    td3.innerHTML = `Salário R$ ${people.salario}`
    tr.appendChild(td3);

    table.appendChild(tr);
  }

  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = '';
  resultado.appendChild(table);
}

function clear() {
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = '';
}

execute()
 
