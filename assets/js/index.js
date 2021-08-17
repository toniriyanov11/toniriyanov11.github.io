const icBurger = document.querySelector(".ic-hamburger")
const icClose = document.querySelector(".ic-close")
const logo = document.querySelector(".nav__mobile  .nav__logo > .ic-logo")
const navMobile = document.querySelector(".nav__mobile nav")
const navMobileLink = document.querySelectorAll(".nav__mobile nav a")
const header = document.querySelector("header")
const body = document.querySelector("body")

//timeline
const school = document.getElementById("school")
const work = document.getElementById("work")
const schoolTitle = document.getElementById("title-school")
const workTitle = document.getElementById("title-work")


//skillset
const skillsets = document.querySelectorAll(".skillset")
const skillsetTitle = document.querySelector(".skillset__title")


setBar()
handleClickNavMobile()
handleTimeline()
handleSkillset()
handleBackToTop()
window.addEventListener("scroll",function(e){
    handleBackToTop()
})




//nav
function setBar() { 

    icBurger.addEventListener("click", function(e){
        showNavMobile()
    })

    icClose.addEventListener("click", function(e){
        hideNavMobile()
    })

}


function handleClickNavMobile() {
    for (nav of navMobileLink) {
        nav.addEventListener("click" ,function(e){     
            hideNavMobile()
        })
    }
}

function showNavMobile() {
    icBurger.style.display = "none"
    icClose.style.display = "block"
    logo.classList.remove("ic-logo")
    logo.classList.add("ic-logo-white")
    header.classList.add("header-mobile-active")
    navMobile.classList.add("show")
    navMobile.classList.remove("hidden")
    
}

function hideNavMobile() {
    icClose.style.display = "none"
    icBurger.style.display = "block"
    logo.classList.add("ic-logo")
    logo.classList.remove("ic-logo-white")
    header.classList.remove("header-mobile-active")
    navMobile.classList.add("hidden")
    navMobile.classList.remove("show")
}
//end of nav


//timeline
function handleTimeline() {
    schoolTitle.addEventListener("click", function(e){
        showSchoolTimeline()
        e.preventDefault()
    })

    workTitle.addEventListener("click", function(e){
        showWorkTimeline()
        e.preventDefault()
    })
}

function showSchoolTimeline() {
    schoolTitle.classList.add("timeline--active")
    workTitle.classList.remove("timeline--active")
    school.style.display = "block"
    work.style.display = "none"
}

function showWorkTimeline() {
    workTitle.classList.add("timeline--active")
    schoolTitle.classList.remove("timeline--active")
    school.style.display = "none"
    work.style.display = "block"
}
//end of timeline

//skillset
function handleSkillset() {
    skillsets.forEach( skillset => {
        const title = skillset.querySelector(".skillset__title")
        title.addEventListener('click', function(e){
            setSkillsetDetil(skillset)
        })
    }
    )
}

function setSkillsetDetil(skillset) {
    const hide = skillset.querySelector(".skillset__content").classList[1]
    if(hide) {
        showSkillsetDetil(skillset)
    }else{
        hideSkillsetDetil(skillset)
    }
}


function showSkillsetDetil(skillset) {
    const skillsetContent = skillset.querySelector(".skillset__content")
    const iconArrow = skillset.querySelector("#icon-skillset-arrow")
    iconArrow.style.transform = "rotate(0deg)"
    skillsetContent.classList.remove("hide")

}

function hideSkillsetDetil(skillset) {
    const skillsetContent = skillset.querySelector(".skillset__content")
    const iconArrow = skillset.querySelector("#icon-skillset-arrow")
    iconArrow.style.transform = "rotate(180deg)"
    skillsetContent.classList.add("hide")
}

//back to top
function handleBackToTop(){
    const docBody = document.documentElement.scrollTop;
    const body = document.body.scrollTop
    const btp = document.querySelector(".back__to__top")
    console.log()
    if(docBody > 800 || body > 800) {
        btp.classList.add("fadeIn")
        btp.classList.remove("fadeOut")
        btp.classList.remove("hide")
    }else {
        btp.classList.add("hide")
    }
}