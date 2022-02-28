// função anonima que impede que essas variáveis tenham seus valores exibidos no console.
(function() {
    const busca = document.getElementById("busca");
    const profile = document.getElementById("profile");
    const url = "https://api.github.com/users";
    const client_id = "79618e0443c445a88085";
    const client_secret = "2ff1ae9e0f3ee978ed4a4437a99821275bb71cf5";        
})();




// let section = document.getElementById('Main-Content');

// function getApi(){
//     fetch(  'https://api.github.com/users/SulfiteA4/repos', {method : 'GET'}).then( async res => {

//         let data = await res.json();
//         data.map(item => {
//             let div = document.createElement('div');

//             div.innerHTML = 
//             `
//             <h2>${item.name}</h2>
//             <p>${item.description}</p>
//             <span>${Intl.DateTimeFormat('pt-BR').format(new Date(item.created_at)) }</span>
//             `
//             section.appendChild(div);
//     })
// })
// }

// getApi();
