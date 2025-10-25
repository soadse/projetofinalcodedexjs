let busca = document.getElementById('busca');
let btn = document.getElementById('btn');
let campoResultado = document.getElementById('campoResultado')
let dados = [];

let h1 = document.createElement('h1');
let p = document.createElement('p');
let img = document.createElement('img');

async function buscarDados() {
    try {
        let response = await fetch('./dados.json');
        if(!response.ok){
            throw new Error(`Erro: ${response.status}`)
        }
        dados = await response.json();

        dados.forEach(element => {
        }); 
    } catch(error) {
        let err = document.createElement('p')
        err.style.color = 'red'
        err.textContent = error.message || String(error)
        document.body.appendChild(err)
    }
}

btn.addEventListener('click', () => { 
    let resultado = dados.find(el => el.signo.toLowerCase() === busca.value.toLowerCase())
    if(resultado){
        campoResultado.style.display = 'flex'
        h1.textContent = resultado.signo;
        p.textContent = resultado.caracteristica;
        p.style.fontSize = '1.5rem'
        img.src = resultado.imagem;

        campoResultado.appendChild(h1)
        campoResultado.appendChild(img)
        campoResultado.appendChild(p)
    } else {
        campoResultado.style.display = 'none'
    }

    if(resultado.elemento === 'FOGO'){
        campoResultado.style.backgroundColor = '#b6143a88'
    } else if(resultado.elemento === "TERRA"){
        campoResultado.style.backgroundColor = '#017b0188'
    } else if(resultado.elemento === "AR"){
        campoResultado.style.backgroundColor = '#fd8f0083'
    } else {
        campoResultado.style.backgroundColor = '#06a1e380'
    }
    busca.value = ""
});

buscarDados();
