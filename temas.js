document.querySelector('#btTrocaTema').addEventListener('click',  () => {
    //pegar elemento com o tema
    //se o tema for light, entao mude o atributo para dark
    //se nao for, entao mude o atributo para light

    if (document.documentElement.getAttribute('data-tema') === 'light') {
        document.documentElement.setAttribute('data-tema', 'dark');
      }  else {
            document.documentElement.setAttribute('data-tema', 'light');
        } 
        
    
});