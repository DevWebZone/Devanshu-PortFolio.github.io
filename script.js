var aboutSection = document.getElementById("work-experience");
var dist = aboutSection.getBoundingClientRect()["y"];
var navToAbout = document.getElementsByTagName("a");
console.log(navToAbout);
var target = 0;
for(var i = 0; i < navToAbout.length; i++){


    navToAbout[i].addEventListener(
        'click', 
                function(event){
                    event.preventDefault();
                    var target = 0;
                    var targetSectionID = this.getAttribute('href');
                    var targetSection = document.querySelector(targetSectionID);
                    dist = targetSection.getBoundingClientRect()["y"];
                    console.log(targetSection);
                    var scrollInterval = setInterval(function () {
                        if (target >= dist){
                            clearInterval(scrollInterval);
                            return;
                        }
                        target +=50;
                        window.scrollBy(0, 50);
                        console.log(target);
                        console.log(dist);
                    }, 15);
                }  
        );
}

var skillBox = document.getElementById("skills-container");
var progressBars = document.querySelectorAll(".skill-progress > div");

var animationDone = false;
window.addEventListener('scroll', ShowSkill);


function initializeBar(){
    for(let bar of progressBars){
        bar.style.width = 0 + "%";
    }
}
initializeBar();

function fillBars(){
    for(let bar of progressBars){
        let barwidth = bar.getAttribute('data-bar-width');
        console.log(barwidth);
        let currentwidth = 0;
        console.log("check");
        let scrollInterval = setInterval(function(){
            if(currentwidth>=barwidth){
                clearInterval(scrollInterval);
                return;
            }
            currentwidth += 1;
            bar.style.width = currentwidth + "%";
        }, 3)
    }
};

function ShowSkill(){
    var top = skillBox.getBoundingClientRect().top;
    if(!animationDone && top < window.innerHeight){
        animationDone = true;
        fillBars();
    }
};
