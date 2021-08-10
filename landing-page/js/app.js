/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/




/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav && Scroll to section on link click
function createButtons(){
    const naveBtns= ['Interior','Exterior','Furniture','About Us'];
    const ul = document.querySelector('ul');
    const sections=document.querySelectorAll('section');

    for(navBtn of naveBtns){
        let li =document.createElement('li');
        if(navBtn==='Interior'){
            li.id = navBtn;
            li.innerHTML = `<a href="#section1"><p>${navBtn}</p></a>`
            li.classList.add('navBar-btn');
            ul.appendChild(li);

        }else if (navBtn === 'Exterior') {
            li.id = navBtn;
            li.innerHTML = `<a href="#section2"><p>${navBtn}</p></a>`
            li.classList.add('navBar-btn');
            ul.appendChild(li);

        }else if(navBtn==='Furniture'){
            li.id = navBtn;
            li.innerHTML = `<a href="#section3"><p>${navBtn}</p></a>`
            li.classList.add('navBar-btn');
            ul.appendChild(li);

        }else{ 
            li.id = navBtn;
            li.innerHTML = `<a href="#section4"><p>${navBtn}</p></a>`
            li.classList.add('navBar-btn');
            ul.appendChild(li);

        }
    };
}
createButtons();


//create section
const newSection = document.createElement('section');
const newDiv = document.createElement('div');
const newHeader= document.createElement('h2');
const newParagragh= document.createElement('p');
newDiv.classList.add('landing__container');
newHeader.textContent='About Us';
newParagragh.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non."

newDiv.appendChild(newHeader);
newDiv.appendChild(newParagragh);
newSection.appendChild(newDiv);

newSection.setAttribute('id','section4');

const main=document.querySelector('main');

main.appendChild(newSection);




//to top button 

const btnToTop = document.querySelector('.btnScrollUp');


btnToTop.addEventListener('click', function(){
    window.scrollTo({
        top : 0,
        left : 0,
        behavior : "smooth"
    });
});




// Scroll to anchor ID using scroll method
const links=document.querySelectorAll(".navBar-btn ul a");

for(const link of links){
    link.addEventListener('click',clickButton())
}
function clickButton(e){
    e.preventDefault();
    const href=this.getAttribute('href');
    const offsetTop = document.querySelector('href').offsetTop;

    scroll({
        
        top:offsetTop,
        behavior:"smooth"
    });
}


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 



// Set sections as active


