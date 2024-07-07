document.addEventListener("DOMContentLoaded", function() {

    const listaItems = document.querySelectorAll("#categorias li");
    const menuItem = document.querySelectorAll('.menu-container .menu-item');

    const ham = document.getElementsByClassName('ham')

    listaItems.forEach(function(item) {
        item.addEventListener("click", function() {
            let liId = item.id;
    
            menuItem.forEach(function(elemento) {

             let menuItemId = elemento.id;

                if (liId === menuItemId || liId === 'all') {
                    elemento.style.display = "flex"

                }else{
                    elemento.style.display = "none";
                }
                
            });
        });  
    });

    function menuIcon(){
       
    }
});
