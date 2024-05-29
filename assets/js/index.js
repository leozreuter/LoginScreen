const arrayLogin = [
    {user: 'ju', pass: 'leo'},
    {user: 'leo', pass: 'ju'},
    {user: 'admin', pass: 'admin'}
]

let botao = document.getElementById('btnLogin');


botao.addEventListener('click', function logar(){
    
    let getUser = document.getElementById('user').value;
    let getPass = document.getElementById('password').value;
    let validaLogin = false;

    for(let i in arrayLogin){
        if(getUser == arrayLogin[i].user && getPass == arrayLogin[i].pass){ 
            validaLogin = true;
            break
        }
    }

    if (validaLogin){alert('deu certin mn');}
    else{alert('ish irmao, acho que tu se passou');}
   
})

