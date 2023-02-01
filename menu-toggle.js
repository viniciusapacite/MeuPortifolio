
    var img = document.querySelector('.hamburguer').addEventListener('click', ()=>{

        var menu = document.querySelectorAll('.menu-toggle');
        // console.log(menu.length)
        for (var i = 0; i < menu.length; i++) {
            if (menu[i].style.display == 'flex') {
                menu[i].style.display = 'none';
                console.log('yes');
            }else {
                menu[i].style.display = 'flex';
            }
        }
    
        console.log(menu)
    })




