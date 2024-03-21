var aboutSection = document.getElementById("work-experience");
var dist = aboutSection.getBoundingClientRect()["y"];
var nav = document.getElementById("pages")
var navToAbout = nav.getElementsByTagName("a");
console.log(navToAbout);
var target = 0;
// Get the modal
var modal = document.getElementById("modal")
var project_modal = document.querySelectorAll(".project-modal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgs = document.querySelectorAll(".project-image > img");
var modalImg = document.querySelectorAll(".modal-content");
var captionText = document.querySelectorAll(".caption");
console.log(imgs)
for(let i = 0 ; i < imgs.length; i++)
{
    imgs[i].onclick = function(){
        modal.style.display = "block";
        project_modal[i].style.display = "block";
        modalImg[i].src = this.src;
        captionText[i].innerHTML = this.alt;
      }
}



// Get the <span> element that closes the modal
var spans = document.querySelectorAll(".close");

// When the user clicks on <span> (x), close the modal
for(let i = 0 ; i < spans.length; i++)
{
    spans[i].onclick = function() {
        modal.style.display = "none";
        project_modal[i].style.display = "none";
        }
}

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
