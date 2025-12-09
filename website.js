
const website = {
    website_icon: ' <i id="logo-icon"class="fa-brands fa-yahoo"></i>',
    website_Logo_link: '',
    website_name: 'Advacy',
    website_description: '',
    website_keywords: '',
    website_author: '',
    website_copyright: '',
    website_url: ''

}

const header_nav_items =[
    {
        icon: '<i class="fa-solid fa-house"></i>',
        name: 'Home',
        link: 'home.html'
    },
    {
        icon: '<i class="fa-solid fa-user-check"></i>',
        name: 'Services',
        link: 'services.html'
    },
       {
        icon: '<i class="fa-solid fa-diagram-project"></i>',
        name: 'Projects',
        link: 'projects.html'
    },
    {
        icon: '<i class="fa-solid fa-briefcase"></i>',
        name: 'Skills',
        link: 'skills.html'
    },
       {
        icon: '<i class="fa-solid fa-address-card"></i>',
        name: 'About Me',
        link: 'about.html'
    },
    {
        icon: '<i class="fa-solid fa-id-badge"></i>',
        name: 'Contact Us',
        link: 'Contact.html'
    },
     {
        icon: '<i class="fa-solid fa-marker"></i>',
        name: 'Custom website',
        link: 'Contact.html'
    },
     {
        icon: '<i class="fa-solid fa-dollar-sign"></i> ',
        name: 'Buy Premium',
        link: 'Contact.html'
    },

];
const selectFilter = [
    {
        option: 'All',
        optionValue: 'all',
        id: 'all',
         onclick: '1'
    },
       {
        option: 'Website',
        optionValue: 'website',
        id: 'website',
        onclick: '2'
    },
       {
        option: 'App' ,
        optionValue: 'app',
        id: 'app',
        onclick: '3'
    },
       {
        option: 'Grafics Design' ,
        optionValue: 'grafics design',
        id: 'grafics design',
        onclick: '4'
    },
       {
        option: 'Microcontroller',
        optionValue: 'microcontroller',
        id: 'microcontroller',
        onclick: '5'
    },
       {
        option: 'Robotics',
        optionValue: 'robotics',
        id: 'robotics',
        onclick: '6'
    }
      
];




const ul = document.getElementById('create_li');

header_nav_items.forEach(items => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${items.link}"><span class="icon-header">${items.icon}</span>&nbsp;${items.name}</a>`;
    ul.appendChild(li);
});

const selectFilterOption = document.getElementById('select-filter');

selectFilter.forEach(options => {
    const option = document.createElement('span');
option.innerHTML = `<option  value="${options.optionValue}"> ${options.option}</option>`;
    selectFilterOption.appendChild(option);
});
const sidebar = document.getElementById('side-ul');

header_nav_items.forEach(list => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${list.link}" class="common">${list.icon} &nbsp;${list.name}</a>`;
    sidebar.appendChild(li)
});
const barsT = document.getElementById('barsT');
const sidebarT = document.getElementById('sidebar');

barsT.addEventListener('click', 
    function(event){
        event.stopPropagation();
    
        sidebarT.style.right = sidebarT.style.right == '0px' ? '0px' : '0px';
      
    }
);
document.body.addEventListener('click', 
    function(){
        sidebarT.style.right = sidebarT.style.right == '-550px' ? '-550px' : '-550px';
    }
);
sidebarT.addEventListener('click',
    function(event){
        event.stopPropagation();
    }
)

function closeSideBar(){
     sidebarT.style.right = sidebarT.style.right == '-550px' ? '-550px' : '-550px';
}


document.getElementById('my_web_icon').innerHTML = website.website_icon;
document.getElementById('web_name').innerHTML = website.website_name;



const btnRecomends = document.getElementById('btn-recomends');

selectFilter.forEach(list => {
    const li = document.createElement('li');
    li.innerHTML = `<button onclick=press(${list.onclick}) id="${list.id}"class="common">${list.option}</button>`;
    btnRecomends.appendChild(li)
});

const selectFilterU = document.getElementById('select-filter');

selectFilterU.addEventListener('change', function(){
    switch(this.value){
        case 'all':
            document.getElementById('all').style.backgroundColor = 'white';
            document.getElementById('all').style.color = 'black';
            document.getElementById('website').style.backgroundColor = '';
            document.getElementById('website').style.color = '';
            document.getElementById('app').style.backgroundColor = '';
            document.getElementById('app').style.color = '';
            document.getElementById('grafics design').style.backgroundColor = '';
            document.getElementById('grafics design').style.color = '';
            document.getElementById('microcontroller').style.backgroundColor = '';
            document.getElementById('microcontroller').style.color = '';
            document.getElementById('robotics').style.backgroundColor = '';
            document.getElementById('robotics').style.color = '';
            break;
        case 'website':
            document.getElementById('website').style.backgroundColor = 'white';
            document.getElementById('website').style.color = 'black';
             document.getElementById('all').style.backgroundColor = ' rgba(51, 51, 51, 0.916)';
            document.getElementById('all').style.color = 'white';
            document.getElementById('app').style.backgroundColor = '';
            document.getElementById('app').style.color = '';
            document.getElementById('grafics design').style.backgroundColor = '';
            document.getElementById('grafics design').style.color = '';
            document.getElementById('microcontroller').style.backgroundColor = '';
            document.getElementById('microcontroller').style.color = '';
            document.getElementById('robotics').style.backgroundColor = '';
            document.getElementById('robotics').style.color = '';
            break;
         break;
        case 'app':
            document.getElementById('all').style.backgroundColor = ' rgba(51, 51, 51, 0.916)';
            document.getElementById('all').style.color = 'white';
            document.getElementById('website').style.backgroundColor = '';
            document.getElementById('website').style.color = '';
            document.getElementById('app').style.backgroundColor = 'white';
            document.getElementById('app').style.color = 'black';
            document.getElementById('grafics design').style.backgroundColor = '';
            document.getElementById('grafics design').style.color = '';
            document.getElementById('microcontroller').style.backgroundColor = '';
            document.getElementById('microcontroller').style.color = '';
            document.getElementById('robotics').style.backgroundColor = '';
            document.getElementById('robotics').style.color = '';
            break;
        case 'grafics design':
            document.getElementById('all').style.backgroundColor = ' rgba(51, 51, 51, 0.916)';
            document.getElementById('all').style.color = 'white';
            document.getElementById('website').style.backgroundColor = '';
            document.getElementById('website').style.color = '';
            document.getElementById('app').style.backgroundColor = '';
            document.getElementById('app').style.color = '';
            document.getElementById('grafics design').style.backgroundColor = 'white';
            document.getElementById('grafics design').style.color = 'black';
            document.getElementById('microcontroller').style.backgroundColor = '';
            document.getElementById('microcontroller').style.color = '';
            document.getElementById('robotics').style.backgroundColor = '';
            document.getElementById('robotics').style.color = '';
            break;
        case 'microcontroller':
            document.getElementById('all').style.backgroundColor = ' rgba(51, 51, 51, 0.916)';
            document.getElementById('all').style.color = 'white';
            document.getElementById('website').style.backgroundColor = '';
            document.getElementById('website').style.color = '';
            document.getElementById('app').style.backgroundColor = '';
            document.getElementById('app').style.color = '';
            document.getElementById('grafics design').style.backgroundColor = '';
            document.getElementById('grafics design').style.color = '';
            document.getElementById('microcontroller').style.backgroundColor = 'white';
            document.getElementById('microcontroller').style.color = 'black';
            document.getElementById('robotics').style.backgroundColor = '';
            document.getElementById('robotics').style.color = '';
            break;
                case 'robotics':
            document.getElementById('all').style.backgroundColor = ' rgba(51, 51, 51, 0.916)';
            document.getElementById('all').style.color = 'white';
            document.getElementById('website').style.backgroundColor = '';
            document.getElementById('website').style.color = '';
            document.getElementById('app').style.backgroundColor = '';
            document.getElementById('app').style.color = '';
            document.getElementById('grafics design').style.backgroundColor = '';
            document.getElementById('grafics design').style.color = '';
            document.getElementById('microcontroller').style.backgroundColor = '';
            document.getElementById('microcontroller').style.color = '';
            document.getElementById('robotics').style.backgroundColor = 'white';
            document.getElementById('robotics').style.color = 'black';
            break;
     
    }
});
function press(id){
 switch(id){
    case 1:
          document.getElementById('all').style.backgroundColor = 'white';
            document.getElementById('all').style.color = 'black';
            document.getElementById('website').style.backgroundColor = '';
            document.getElementById('website').style.color = '';
            document.getElementById('app').style.backgroundColor = '';
            document.getElementById('app').style.color = '';
            document.getElementById('grafics design').style.backgroundColor = '';
            document.getElementById('grafics design').style.color = '';
            document.getElementById('microcontroller').style.backgroundColor = '';
            document.getElementById('microcontroller').style.color = '';
            document.getElementById('robotics').style.backgroundColor = '';
            document.getElementById('robotics').style.color = '';
        break;
    case 2:
         document.getElementById('website').style.backgroundColor = 'white';
            document.getElementById('website').style.color = 'black';
             document.getElementById('all').style.backgroundColor = '  rgba(51, 51, 51, 0.916)';
            document.getElementById('all').style.color = 'white';
            document.getElementById('app').style.backgroundColor = '';
            document.getElementById('app').style.color = '';
            document.getElementById('grafics design').style.backgroundColor = '';
            document.getElementById('grafics design').style.color = '';
            document.getElementById('microcontroller').style.backgroundColor = '';
            document.getElementById('microcontroller').style.color = '';
            document.getElementById('robotics').style.backgroundColor = '';
            document.getElementById('robotics').style.color = '';
        break;
    case 3:
        document.getElementById('all').style.backgroundColor = ' rgba(51, 51, 51, 0.916)';
            document.getElementById('all').style.color = 'white';
            document.getElementById('website').style.backgroundColor = '';
            document.getElementById('website').style.color = '';
            document.getElementById('app').style.backgroundColor = 'white';
            document.getElementById('app').style.color = 'black';
            document.getElementById('grafics design').style.backgroundColor = '';
            document.getElementById('grafics design').style.color = '';
            document.getElementById('microcontroller').style.backgroundColor = '';
            document.getElementById('microcontroller').style.color = '';
            document.getElementById('robotics').style.backgroundColor = '';
            document.getElementById('robotics').style.color = '';
        break;
    case 4: 
    document.getElementById('all').style.backgroundColor = ' rgba(51, 51, 51, 0.916)';
            document.getElementById('all').style.color = 'white';
            document.getElementById('website').style.backgroundColor = '';
            document.getElementById('website').style.color = '';
            document.getElementById('app').style.backgroundColor = '';
            document.getElementById('app').style.color = '';
            document.getElementById('grafics design').style.backgroundColor = 'white';
            document.getElementById('grafics design').style.color = 'black';
            document.getElementById('microcontroller').style.backgroundColor = '';
            document.getElementById('microcontroller').style.color = '';
            document.getElementById('robotics').style.backgroundColor = '';
            document.getElementById('robotics').style.color = '';
        break;
    case 5:
         document.getElementById('all').style.backgroundColor = ' rgba(51, 51, 51, 0.916)';
            document.getElementById('all').style.color = 'white';
            document.getElementById('website').style.backgroundColor = '';
            document.getElementById('website').style.color = '';
            document.getElementById('app').style.backgroundColor = '';
            document.getElementById('app').style.color = '';
            document.getElementById('grafics design').style.backgroundColor = '';
            document.getElementById('grafics design').style.color = '';
            document.getElementById('microcontroller').style.backgroundColor = 'white';
            document.getElementById('microcontroller').style.color = 'black';
            document.getElementById('robotics').style.backgroundColor = '';
            document.getElementById('robotics').style.color = '';
        break;
    case 6:
            document.getElementById('all').style.backgroundColor = ' rgba(51, 51, 51, 0.916)';
            document.getElementById('all').style.color = 'white';
            document.getElementById('website').style.backgroundColor = '';
            document.getElementById('website').style.color = '';
            document.getElementById('app').style.backgroundColor = '';
            document.getElementById('app').style.color = '';
            document.getElementById('grafics design').style.backgroundColor = '';
            document.getElementById('grafics design').style.color = '';
            document.getElementById('microcontroller').style.backgroundColor = '';
            document.getElementById('microcontroller').style.color = '';
            document.getElementById('robotics').style.backgroundColor = 'white';
            document.getElementById('robotics').style.color = 'black';
        break;
 }

};
const arrowData = document.getElementById('arrow-recomend-controll');
const recomendsData = document.getElementById('btn-recomends');

function arrowCon(){
    arrowData.style.transform = arrowData.style.transform == 'rotate(180deg)'? 'rotate(0deg)': 'rotate(180deg)';
    if( arrowData.style.transform === 'rotate(180deg)'){
        recomendsData.style.marginTop ='-1px';
        postContainer.style.marginTop = '0px';
        document.getElementById('header_three').style.backgroundColor = ' rgba(235, 234, 234, 0.108)';
      
    }
        else{
          recomendsData.style.marginTop ='-200px';
    arrowData.style.opacity = '0';
     postContainer.style.marginTop = '115px';
        document.getElementById('header_three').style.backgroundColor = 'transparent';
    }

};
const selectFilterI= document.getElementById('select-filter');
const postContainer = document.getElementById('container');
selectFilterI.addEventListener('click', function(){
     arrowData.style.transform = arrowData.style.transform == 'rotate(180deg)'? 'rotate(180deg)': 'rotate(180deg)';
if(this.click){
     recomendsData.style.marginTop ='-1px';
     arrowData.style.opacity = '1';
     postContainer.style.marginTop = '200px';
        document.getElementById('header_three').style.backgroundColor = ' rgba(235, 234, 234, 0.108)';
}
    else{
          recomendsData.style.marginTop ='-200px';
         arrowData.style.opacity = '0';
         postContainer.style.marginTop = '180px';
        document.getElementById('header_three').style.backgroundColor = 'transparent';
    }
});
const postInfoi = document.getElementById('post_info');

function press(value){
    switch(value){
   case 1:

    postInfoi.style.opacity = postInfoi.style.opacity == '0'? '1': '0';
   postInfoi.style.transform = postInfoi.style.transform == 'translateY(-20px)'? 'translateY(0px)': 'translateY(-20px)';
     postInfoi.style.zIndex = postInfoi.style.zIndex == '-1'? '9': '-1';
     break;
        case 2:

    postInfoi.style.opacity = postInfoi.style.opacity == '0'? '1': '0';
   postInfoi.style.transform = postInfoi.style.transform == 'translateY(-20px)'? 'translateY(0px)': 'translateY(-20px)';
     postInfoi.style.zIndex = postInfoi.style.zIndex == '-1'? '9': '-1';
     break;
    }
}
function press(value2){
    switch(value2){
        case 1:
     postInfoi.style.opacity = postInfoi.style.opacity == '0'? '1': '0';
   postInfoi.style.transform = postInfoi.style.transform == 'translateY(-20px)'? 'translateY(0px)': 'translateY(-20px)';
     postInfoi.style.zIndex = postInfoi.style.zIndex == '-1'? '9': '-1';
     break;
     case 2:
     postInfoi.style.opacity = postInfoi.style.opacity == '0'? '1': '0';
   postInfoi.style.transform = postInfoi.style.transform == 'translateY(-20px)'? 'translateY(0px)': 'translateY(-20px)';
     postInfoi.style.zIndex = postInfoi.style.zIndex == '-1'? '9': '-1';
     break;
    }
}

