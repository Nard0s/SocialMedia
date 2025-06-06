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
const themeModal=document.querySelector('.customize-theme');
const fontSize=document.querySelectorAll('.choose-size span')
var root = document.querySelector(':root');
const colorPalette=document.querySelectorAll('.choose-color span');
const backgroundColor=document.querySelectorAll('.choose-background div')

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
// open modal 
const openThemeModal=()=>{
    themeModal.style.display='grid';
};
theme.addEventListener('click', openThemeModal)

// close modal 
const closeThemeModal=(e)=>{
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display='none';
    }
};
themeModal.addEventListener('click',closeThemeModal)

// =========================================
//          FONT SIZE
// ========================================

const removeSizeSelector=()=>{
    fontSize.forEach(size=>{
        size.classList.remove('active')
    })
}
fontSize.forEach(size=>{
    size.addEventListener('click',()=>{
        removeSizeSelector();
        size.classList.toggle('active')
        let fontSize;
        
        if(size.classList.contains('font-size-1')){
            fontSize='10px';
            root.style.setProperty('--sticky-top-left','5.4rem')
            root.style.setProperty('--sticky-top-righ','5.4rem')
        }else if(size.classList.contains('font-size-2')){
            fontSize='13px';
            root.style.setProperty('--sticky-top-left','5.4rem')
            root.style.setProperty('--sticky-top-righ','-7rem')
        }
        else if(size.classList.contains('font-size-3')){
            fontSize='16px';
            root.style.setProperty('--sticky-top-left','-2rem')
            root.style.setProperty('--sticky-top-righ','-17rem')
        }
        else if(size.classList.contains('font-size-4')){
            fontSize='19px';
            root.style.setProperty('--sticky-top-left','5.4rem')
            root.style.setProperty('--sticky-top-right','-25rem')
        }
        else if(size.classList.contains('font-size-5')){
            fontSize='22px';
            root.style.setProperty('--sticky-top-left','5.4rem')
            root.style.setProperty('--sticky-top-right','-33rem')
        }
        // now we can change all font sises at once just by changing out html element
        document.querySelector('html').style.fontSize = fontSize;
    })
    

})
// =========================================
//          CHANGE COLOR
// ========================================
removeColorActive=()=>{
    colorPalette.forEach(color=>{
        color.classList.remove('active');
    })
}
colorPalette.forEach(color=>{
    color.addEventListener('click',()=>{
        removeColorActive();
        color.classList.toggle('active');
        if(color.classList.contains('color-1')){
            primaryHue=252;
        }else if(color.classList.contains('color-2')){
            primaryHue=52;
        }else if(color.classList.contains('color-3')){
            primaryHue=352;
        }else if(color.classList.contains('color-4')){
            primaryHue=152;
        }else if(color.classList.contains('color-5')){
            primaryHue=202;
        }
        root.style.setProperty('--primary-color-hue',primaryHue);
    })
})
// =========================================
//          CHANGE BACKGROUND
// ========================================


const removeActive=()=>{
    backgroundColor.forEach(color=>{
        color.classList.remove('active');
    })
}
backgroundColor.forEach(bColor=>{
    bColor.addEventListener('click', ()=>{
        removeActive();
        bColor.classList.toggle('active')

        let lightColorLightness;
        let whiteColorLightness;
        let darkColorLightness;
        if(bColor.classList.contains('bg-1')){
            lightColorLightness ='95%';
            darkColorLightness ='17%';
            whiteColorLightness ='100%';

        }else if(bColor.classList.contains('bg-2')){
            lightColorLightness ='15%';
            darkColorLightness ='95%';
            whiteColorLightness ='20%';

        }else if(bColor.classList.contains('bg-3')){
            lightColorLightness ='0%';
            darkColorLightness ='95%';
            whiteColorLightness ='10%';
        }
        root.style.setProperty('--light-color-lightness',lightColorLightness);
        root.style.setProperty('--dark-color-lightness',darkColorLightness);
        root.style.setProperty('--white-color-lightness',whiteColorLightness);
    })
})

