function navDisplay(){
    var x = document.getElementById('dropthis');
    var ul = document.getElementById('mobilelist');

    console.log(ul.className);

    if(x.className === 'dropdown-menu-hide'){
        x.className = 'dropdown-menu';
        ul.className = 'mobile-list';
    }
    else if (x.className === 'dropdown-menu'){
        x.className = 'dropdown-menu-hide';
        ul.className = 'mobile-list-hide';
    }
    
}

