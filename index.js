// sidebar

const menuItems=document.querySelectorAll('.menu-item');
const notification=document.querySelectorAll('#notifications');
const notificationPopup = document.querySelector('.notification-popup');
    // MESSAGE 
const messageNotification=document.querySelector('#Messages-notification');
const messages=document.querySelector('.messages')
const message= document.querySelectorAll('.message')
const messageSearch= document.querySelector('#message-search')
// THEME 
const theme=document.querySelector('#theme')
const themeModal=document.querySelector('.customiz-theme');
// remove active class from all menu items

// =========================================
//           SIDE-BAR
// ========================================
const changeActiveClass=()=>{
    menuItems.forEach(item=>{
        item.classList.remove('active');
    })
};
menuItems.forEach(item=>{
    item.addEventListener('click',(e)=>{
        e.preventDefault();

        changeActiveClass();
        item.classList.add('active');

        if(item.id != 'notifications'){
            notificationPopup.style.display = 'none';
           
        }
        else if(item.id =='Messages-notifications'){
            document.querySelector('#Messages-notifications .notification-count').style.display='none';
        }
        else{
            notificationPopup.style.display='block';
            document.querySelector('#notifications .notification-count').style.display='none'
            
        } 
    })
})

// =========================================
//                 MESSAGE
// =========================================
// search chat 
const searchMessage =()=>{
    const val= messageSearch.value.toLowerCase();
    message.forEach(user=>{
        let name= user.querySelector('h5').textContent.toLowerCase();
        
        if(name.indexOf(val)!==-1){
            user.style.display='flex';

        }else{
            user.style.display='none';
        }
    });
};

messageSearch.addEventListener ('keyup', searchMessage)


// heightlite messege card when message menu item is clicked
    messageNotification.addEventListener('click',()=>{
        messageNotification.querySelector('.notification-count').style.display='none';
        messages.style.boxShadow='0 0 1rem var(--color-primary)';
        setTimeout(()=>{
            messages.style.boxShadow='none';
        },1000 )
    })
// =========================================
//           SIDE-BAR END
// ========================================



// =========================================
//          THEME CUSTOMIZATION
// ========================================







