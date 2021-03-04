function buttonClick() {
    let nav = document.querySelector('.header');
    let burger = document.querySelector('.burger');
    let bodys = document.querySelector('body')
    if(bodys.style.overflow === "hidden") {    
        bodys.style.overflow = "unset";
    } else {
        bodys.style.overflow = "hidden";
    }
    nav.classList.toggle('nav');
    burger.classList.toggle('burgerActive');
}

let navbarLink = document.querySelectorAll('.navLink')
let navbar = document.querySelector('.header')

window.addEventListener('scroll', () => {

    navbar.classList.toggle('sticky', window.pageYOffset > 0);

    let yPos = window.pageYOffset;
    let home = 0
    let about = 350
    let feature = 900
    let tutor = 1650

    if (yPos > home & yPos < about) {
        addNavbarColor(0)
    } else if (yPos > about & yPos < feature) {
        addNavbarColor(1)
    } else if (yPos > feature & yPos < tutor) {
        addNavbarColor(2)
        navbarLink[3].classList.remove('navActive');
    } else if (yPos > tutor) {
        addNavbarColor(3)
    }
})

navbarLink.forEach(nav => {
    nav.addEventListener('click', () => {
        let bodys = document.querySelector('body')
        let navCheck = navbar.className.split(" ")

        if(navCheck.some(m => m === "nav")) {
            if(bodys.style.overflow === "hidden") {
                bodys.style.overflow = "unset";
            }
        }
        navbar.classList.remove('nav')
        document.querySelector('.burger').classList.remove('burgerActive');
    })
})

function addNavbarColor(give) {
    let except = [0, 1, 2, 3];
    let barLink = document.querySelectorAll('.navLink');
    let saring = except.filter(m => m !== give);
    for (let i = 0; i < saring.length; i++) {
        barLink[i].classList.remove('navActive');
    }
    barLink[give].classList.add('navActive');
}

function copyIp(number) {
    let copyTextFrom = document.getElementById('copyFrom');
    let copyNotif = document.querySelectorAll('.h3Copy')
    let optionNumber;
    copyTextFrom.value = option.ip_address;

    copyTextFrom.select()
    copyTextFrom.setSelectionRange(0, 9999999999)
    document.execCommand('copy');
    
    if(number === "1") {
        optionNumber = 0
    } else if (number === "2") {
        optionNumber = 1
    }
    
    copyNotif[optionNumber].style.opacity = ".5";

    setTimeout(() => {
        copyNotif[optionNumber].style.opacity = "0"
    }, 2000)
}

/* Require the option */
let logo = document.getElementById('logo');
let middleName = document.querySelectorAll('.serverName');
let middleDescription = document.getElementById('serverDescription');
let ownerServer = document.getElementById('owner');
let copyTextFrom = document.getElementById('copyFrom');
let footerText = document.getElementById('serverFooter');

let discordLink = document.querySelector('.discordLink');
let hostLink = document.getElementById('hostLink');

let ownerList = "";
for(let i = 0; i < option.owner.length; i++) {
    ownerList += option.owner[i].concat(', ')
}

middleName.forEach(name => {
    name.innerHTML = option.server_name
})

ownerServer.innerHTML = ownerList.slice(0, ownerList.length - 2);
logo.innerHTML = option.server_name;
middleDescription.innerHTML = option.server_description;
copyTextFrom.value = option.ip_address;
footerText.innerHTML = option.server_name;

hostLink.href = option.host_for_android;
discordLink.href = option.discord_invite_link;
