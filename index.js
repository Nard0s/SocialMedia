// sidebar

const menuItems=document.querySelectorAll('.menu-item');

// remove active class from all menu items
const changeActiveClass=()=>{
    menuItems.forEach(item=>{
        item.classList.remove('active');
    })
}
menuItems.forEach(item=>{
    item.addEventListener('click',()=>{
        changeActiveClass();
        item.classList.add('active');

        if(item.id != 'notifications'){
            document.querySelector('.notification-popup')
            Style.display='none';
        }else{
            document.querySelector('.notification-popup')
            Style.display='block';
        }
        
    })
})