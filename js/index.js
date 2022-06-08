function reveal(){
    var reveals = document.querySelectorAll('.reveal')

    for(let i=0; i<reveals.length; i++){
        var windowHeight = window.innerHeight
        var elementTop = reveals[i].getBoundingClientRect().top
        var elementVisible = 150
    
        if(elementTop < windowHeight - elementVisible){
            reveals[i].classList.add('active')
        }
        else{
            reveals[i].classList.remove('active')
        }
    }
}

window.addEventListener('scroll',reveal)

///////////////////////////////////////////////////////////////////////////

function navColor(){
    var navbar = document.querySelector('.nav-container')
    var windowY = window.scrollY
    if(windowY >= 200){
        navbar.classList.add('nav-color')
    }
    else{
        navbar.classList.remove('nav-color')
    }
}

window.addEventListener('scroll', navColor)

///////////////////////////////////////////////////////////////////////////

let tabs = document.querySelectorAll('.best-selling-tabs-container h3')
let img_lists = document.querySelectorAll('.image-list')
console.log(img_lists)
tabs.forEach((element)=>{
    element.addEventListener('click',()=>tab_click(element))
})

function tab_click(element){
    if(!element.classList.contains('selected')){
        element.classList.add('selected')
        let siblings = Array.from(element.parentElement.children).filter((sibling)=>{
            return sibling != element
        })

        siblings.forEach((sibling)=>{
            sibling.classList.remove('selected')
        })

        if(element.innerText === 'Last Act'){
            img_lists[0].classList.add('selected-image-list')
            img_lists[1].classList.remove('selected-image-list')
            img_lists[2].classList.remove('selected-image-list')
        }
        if(element.innerText === 'Best Selling'){
            img_lists[1].classList.add('selected-image-list')
            img_lists[0].classList.remove('selected-image-list')
            img_lists[2].classList.remove('selected-image-list')
        }
        if(element.innerText === 'Top Rated'){
            img_lists[2].classList.add('selected-image-list')
            img_lists[0].classList.remove('selected-image-list')
            img_lists[1].classList.remove('selected-image-list')
        }
        
    }
}

/////////////////////////////////////////////////////////////////////

let count = 4.8

function animateValue(id, start, end, duration) {

    var windowY = window.scrollY
    console.log('windowY',windowY)
    if(windowY >= 3160 && windowY <= 3170){
        // assumes integer values for start and end
        
        var obj = document.querySelector(id);
        var range = end - start;
        // no timer shorter than 50ms (not really visible any way)
        var minTimer = 50;
        // calc step time to show all interediate values
        var stepTime = Math.abs(Math.floor(duration / range));
        
        // never go below minTimer
        stepTime = Math.max(stepTime, minTimer);
        
        // get current time and calculate desired end time
        var startTime = new Date().getTime();
        var endTime = startTime + duration;
        var timer;
    
        function run() {
            var now = new Date().getTime();
            var remaining = Math.max((endTime - now) / duration, 0);
            var value = Math.round(end - (remaining * range)).toLocaleString();
            obj.innerHTML = value;
            if (value == end) {
                clearInterval(timer);
            }
        }
        
        timer = setInterval(run, stepTime);
        run();
    }
}


window.addEventListener('scroll',()=> animateValue('.review-number', 0, 4842, 1500))
window.addEventListener('scroll',()=> animateValue('.customer-number', 0, 450000, 1500))


/////////////////////////////////////////////////////////////////////

let hamburger = document.querySelector('.hamburger-box')
let lines = Array.from(hamburger.children)
console.log(lines)

let hamburger_list = document.querySelector('.hamburger-list')
console.log(hamburger_list)

function toggle_hamburger(){
    lines.forEach((line)=>{
        if(line.classList.contains('open')){
            line.classList.remove('open')
        }
        else{
            line.classList.add('open')
        }
    })

    if(hamburger_list.classList.contains('opens')){
        hamburger_list.classList.remove('opens')
    }
    else{
        hamburger_list.classList.add('opens')
    }
}

hamburger.addEventListener('click',toggle_hamburger)

//////////////////////////////////////////////////////////////



 // function to set a given theme/color-scheme
 function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
// function toggleTheme() {
//     if (localStorage.getItem('theme') === 'theme-one') {
//         setTheme('theme-two');
//     } else {
//         setTheme('theme-one');
//     }
// }

// function toggleThemeTwo() {
//     if (localStorage.getItem('theme') !== 'theme-three') {
//         setTheme('theme-three');
//     } else {
//         setTheme('theme-four');
//     }
// }


// // Immediately invoked function to set the theme on initial load
// (function () {
//     if (localStorage.getItem('theme') === 'theme-one') {
//         setTheme('theme-one');
//         document.getElementById('slider').checked = false;
//     } else {
//         setTheme('theme-two');
//       document.getElementById('slider').checked = true;
//     }
// })();

