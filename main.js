let users = ['Nick1','Nick2','Nick3','Nick4','Nick5'];
let messages = ['Text1','Text2','Text3','Text4','Text5','Text6','Text7','Text8'];
let flags = ['poland.webp','portugal.webp','brazil.webp']
let container = document.getElementById('container');

setInterval(function(){
    let span = document.createElement('span');
    let br = document.createElement('br');
    span.innerHTML=('<img src="'+flags[Math.floor(Math.random()*flags.length)] +'"/> ' + users[Math.floor(Math.random()*users.length)]+": "+ messages[Math.floor(Math.random()*messages.length)]);
    container.appendChild(span);
    container.appendChild(br);
    container.scrollTo(0,container.scrollHeight);
}
, 3000);