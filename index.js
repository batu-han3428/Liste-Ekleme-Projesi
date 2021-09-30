var input = document.getElementById('floatingInput');
var kayit = document.getElementById('gonder');
var ul = document.getElementById('listeUl');
var hepsiniSil = document.getElementById('hepsiniSil');
var sil = document.getElementsByClassName('btn-close');


const kaydet = function(){
    localStorage.setItem(input.value,input.value);
    window.location.reload();
};

for (let index = 0; index < localStorage.length; index++) {
    let li = document.createElement('li');
    li.className='list-group-item';
    li.innerText= localStorage.key(index);
    let closeButton = document.createElement('button');
    closeButton.setAttribute('style','position:absolute; left:90%;');
    closeButton.setAttribute('type','button');
    closeButton.className='btn-close';
    closeButton.setAttribute('aria-label','Close');
    li.appendChild(closeButton);
    ul.appendChild(li);
}

const allDelete = function(){
    if(ul.childElementCount <= 0){
        alert("Liste boş");
    }else{
        let uyari = confirm('Hepsini silmek istediğinden emin misin?');
        if(uyari){
            localStorage.clear();
            window.location.reload();
        }
    }
};

for (let index = 0; index < sil.length; index++) {
    sil[index].addEventListener('click',function(){
        let uyari = confirm('Silmek istediğinden emin misin?');
        if(uyari){
            localStorage.removeItem(sil[index].parentElement.innerText);
            window.location.reload();
        }
    });
}

eventListeners();

function eventListeners(){
    hepsiniSil.addEventListener('click',allDelete);
    kayit.addEventListener('click',kaydet);
};