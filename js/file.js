//Un Mute Video
var spanButton1 = document.querySelector(".heroarea .muteVideo span");
var videoHero = document.querySelector(".heroarea .player video");
var spanButton2 = document.querySelector(".heroarea .muteVideo span:nth-child(2)");
spanButton1.onclick = function(e) {
    if (this.className.indexOf("move") < 0) {
        this.classList.add("move");
        spanButton2.textContent = "Mute";
        videoHero.muted = false;
    } else {
        this.classList.remove("move");
        spanButton2.textContent = "Un Mute";
        videoHero.muted = true;
    }
};




//sticky header

var navBar = document.getElementById("upperNav");

var heaightNav = navBar.clientHeight;

window.addEventListener("scroll", stickyHeader);

function stickyHeader() {
    if (window.pageYOffset > heaightNav) {
        navBar.classList.add("headerBlack");
    } else {
        navBar.classList.remove("headerBlack");
    }
}

//Close Pop Up Presentation Section
var presenatioSection = document.querySelector(".presntaion");

var closeIcon = document.querySelector(".presntaion .overlay i");

var overlay = document.querySelector(".presntaion .overlay");

var linkOpen = document.querySelector(".presntaion .content >a");

var iframeVideo = document.querySelector(".youtubevideo")

closeIcon.addEventListener("click", closeSection);

overlay.addEventListener("click", closeSection);
linkOpen.addEventListener("click", popUp);

function popUp(e) {
    overlay.classList.add("show");
    e.preventDefault();
    document.body.classList.add("fixed");
}

function closeSection() {
    if (overlay.className.indexOf("show") > -1) {
        overlay.classList.add("hide");
        overlay.classList.remove("show");
        document.body.classList.remove("fixed");
        window.scrollTo(0, 1800);


        iframeVideo.setAttribute("src", iframeVideo.getAttribute("src"))

    }
}


//Add class Active for tab link

/*carousel */

var items = document.querySelectorAll(".carousel .item");
var dots = document.querySelectorAll(".carousel-indicators li");
var currentItem = 0;
var isEnabled = true;
const auto = false; // Auto scroll
const intervalTime = 5000;
let slideInterval;

function changeCurrentItem(n) {
    currentItem = (n + items.length) % items.length;
}

function nextItem(n) {
    hideItem("to-left");
    changeCurrentItem(n + 1);
    showItem("from-right");
}

function previousItem(n) {
    hideItem("to-right");
    changeCurrentItem(n - 1);
    showItem("from-left");
}

function goToItem(n) {
    if (n < currentItem) {
        hideItem("to-right");
        currentItem = n;
        showItem("from-left");
    } else {
        hideItem("to-left");
        currentItem = n;
        showItem("from-right");
    }
}

function hideItem(direction) {
    isEnabled = false;
    items[currentItem].classList.add(direction);
    dots[currentItem].classList.remove("active");
    items[currentItem].addEventListener("animationend", function() {
        this.classList.remove("active", direction);
    });
}

function showItem(direction) {
    items[currentItem].classList.add("next", direction);
    dots[currentItem].classList.add("active");
    items[currentItem].addEventListener("animationend", function() {
        this.classList.remove("next", direction);
        this.classList.add("active");
        isEnabled = true;
    });
}

document.querySelector(".carousel-control.left").addEventListener("click", function() {
    if (isEnabled) {
        previousItem(currentItem);
    }
});


document.querySelector(".carousel-control.left").addEventListener("touchend", function() {
    if (isEnabled) {
        previousItem(currentItem);
    }
});


document.querySelector(".carousel-control.right").addEventListener("click", function() {
    if (isEnabled) {
        nextItem(currentItem);
    }
});
document.querySelector(".carousel-control.right").addEventListener("touchstart", function() {
    if (isEnabled) {
        nextItem(currentItem);
    }
});

document.querySelector(".carousel-indicators").addEventListener("click", function(e) {
    var target = [].slice.call(e.target.parentNode.children).indexOf(e.target);
    if (target !== currentItem && target < dots.length) {
        goToItem(target);
    }
});
// Auto slide
if (!auto) {
    // Run next slide at interval time
    slideInterval = setInterval(function() {
        if (isEnabled) {
            previousItem(currentItem);
        }
    }, intervalTime);
}
//get date copyright

document.getElementById("datecopyright").textContent = new Date().getFullYear();

//function Hamburg Menu

var hambMenu = document.querySelector(".Hamburgmenu");

var maniList = document.querySelector(".main-navlist");

var heroArea = document.querySelector(".heroarea .hero-body");

var span1 = document.querySelector("#upperNav .navbar .Hamburgmenu span:nth-child(1)");
var span2 = document.querySelector("#upperNav .navbar .Hamburgmenu span:nth-child(2)");
var span3 = document.querySelector("#upperNav .navbar .Hamburgmenu span:nth-child(3)");
var show = false;

hambMenu.addEventListener("click", slideDown);

function slideDown() {
    if (!show) {
        maniList.classList.add("slidedown");
        hambMenu.classList.add("rotate");
        span1.classList.add("rotate1");
        span2.classList.add("hide");
        span3.classList.add("rotate3");
        heroArea.classList.add("relative");
        show = true;
    } else {
        maniList.classList.remove("slidedown");
        hambMenu.classList.remove("rotate");
        span1.classList.remove("rotate1");
        span2.classList.remove("hide");
        span3.classList.remove("rotate3");
        setTimeout(function() {
            heroArea.classList.remove("relative");
        }, 500);
        show = false;
    }
}

//function mouse enter nav bar

var mainlinks = document.querySelectorAll("#upperNav .navbar .navbar-menu .navbar-start .main-navlist .navbar-item > .navbar-link");

var dropdowndirect = document.querySelectorAll("#upperNav .navbar .navbar-menu .navbar-start .main-navlist .navbar-item > .navbar-dropdown");

var listdropndown = document.querySelectorAll(".main-navlist > li");

mainlinks.forEach(function(link) {
    link.onmouseenter = function() {
        for (var i = 0; i < mainlinks.length; i++) {
            mainlinks[i].nextElementSibling.classList.remove("appear");
        }
        this.nextElementSibling.classList.add("appear");
    };
    link.onmouseleave = function() {
        for (var i = 0; i < mainlinks.length; i++) {
            mainlinks[i].nextElementSibling.classList.remove("appear");
        }
        this.nextElementSibling.classList.remove("appear");
    };
});

//function drop down menu

var directLinks = document.querySelectorAll("#upperNav .navbar .navbar-menu .navbar-start .main-navlist .navbar-item > .navbar-link");

var dropdowns = document.querySelectorAll("#upperNav .navbar .navbar-menu .navbar-start .main-navlist .navbar-item > .navbar-dropdown");

var mainArrow = document.querySelectorAll("#upperNav .navbar .navbar-menu .navbar-start .main-navlist .navbar-item > .navbar-link i");

directLinks.forEach(function(dL) {
    dL.onclick = function() {
        if (this.nextElementSibling.className.indexOf("show") < 0) {
            for (var i = 0; i < dropdowns.length; i++) {
                dropdowns[i].classList.remove("show");
            }
            for (var i = 0; i < mainArrow.length; i++) {
                mainArrow[i].classList.remove("rotate");
            }
            for (var i = 0; i < subMenu2Ch2.length; i++) {
                subMenu2Ch2[i].classList.remove("show");
                subArrowslinkCh2[i].firstElementChild.classList.remove("rotate");
            }
            for (var i = 0; i < 5; i++) {
                subMenu2Ch3[i].classList.remove("show");
                subArrowslinkCh3[i].firstElementChild.classList.remove("rotate");
            }
            for (var i = 0; i < subArrowslinkCh5.length; i++) {
                subMenu2Ch5[i].classList.remove("show");
                subArrowslinkCh5[i].firstElementChild.classList.remove("rotate");
            }
            for (var i = 0; i < subArrowslinkCh4.length; i++) {
                subMenu2Ch4[i].classList.remove("show");
                subArrowslinkCh4[i].firstElementChild.classList.remove("rotate");
            }
            for (var i = 0; i < directLinks.length; i++) {
                directLinks[i].classList.remove("white");
            }
            for (var i = 0; i < linksBox.length; i++) {
                linksBox[i].nextElementSibling.classList.remove("show");
                linksBox[i].firstElementChild.classList.remove("rotate");
            }
            this.nextElementSibling.classList.add("show");
            this.firstElementChild.classList.add("rotate");
            this.classList.add("white");
        } else {
            this.nextElementSibling.classList.remove("show");
            this.firstElementChild.classList.remove("rotate");
            subMenu2Ch7[0].classList.remove("show");
            subArrowslinkCh7[0].firstElementChild.classList.remove("rotate");
            this.classList.remove("white");
        }
    };
});

// start drop down child 2 Headers

var subArrowslinkCh2 = document.querySelectorAll("#upperNav .navbar .navbar-menu .navbar-start .main-navlist .navbar-item:nth-child(2) .navbar-dropdown >li  > a ");

var subMenu2Ch2 = document.querySelectorAll("#upperNav .navbar .navbar-menu .navbar-start .main-navlist .navbar-item:nth-child(2) .navbar-dropdown > li > ul");

subArrowslinkCh2.forEach(function(arr) {
    arr.onclick = function() {
        if (this.nextElementSibling.className.indexOf("show") < 0) {
            for (var i = 0; i < subMenu2Ch2.length; i++) {
                subMenu2Ch2[i].classList.remove("show");
                subArrowslinkCh2[i].firstElementChild.classList.remove("rotate");
            }
            for (var i = 0; i < 5; i++) {
                subMenu2Ch3[i].classList.remove("show");
                subArrowslinkCh3[i].firstElementChild.classList.remove("rotate");
            }

            for (var i = 0; i < subMenu2Ch5.length; i++) {
                subMenu2Ch5[i].classList.remove("show");
                subArrowslinkCh5[i].firstElementChild.classList.remove("rotate");
            }

            for (var i = 0; i < subMenu2Ch4.length; i++) {
                subMenu2Ch4[i].classList.remove("show");
                subArrowslinkCh4[i].firstElementChild.classList.remove("rotate");
            }
            for (var i = 0; i < subArrowslinkCh2.length; i++) {
                subArrowslinkCh2[i].classList.add("grey-lighter");
            }
            for (var i = 0; i < linksBox.length; i++) {
                linksBox[i].nextElementSibling.classList.remove("show");
                linksBox[i].firstElementChild.classList.remove("rotate");
            }
            this.classList.add("grey-lighter");
            this.nextElementSibling.classList.add("show");
            this.firstElementChild.classList.add("rotate");
        } else {
            this.nextElementSibling.classList.remove("show");
            this.firstElementChild.classList.remove("rotate");
            this.classList.add("grey-lighter");
        }
    };
});

//end drop down child 2 Headers

// start drop down child 3 Headers

var subArrowslinkCh3 = document.querySelectorAll("#upperNav .navbar .navbar-menu .navbar-start .main-navlist .navbar-item:nth-child(3) .navbar-dropdown >li  > a ");

var subMenu2Ch3 = document.querySelectorAll("#upperNav .navbar .navbar-menu .navbar-start .main-navlist .navbar-item:nth-child(3) .navbar-dropdown > li > ul");

subArrowslinkCh3.forEach(function(arr) {
    arr.onclick = function() {
        if (this.nextElementSibling.className.indexOf("show") < 0) {
            for (var i = 0; i < 5; i++) {
                subMenu2Ch3[i].classList.remove("show");
                subArrowslinkCh3[i].firstElementChild.classList.remove("rotate");
            }
            for (var i = 0; i < subMenu2Ch4.length; i++) {
                subMenu2Ch4[i].classList.remove("show");
                subArrowslinkCh4[i].firstElementChild.classList.remove("rotate");
            }
            for (var i = 0; i < subMenu2Ch5.length; i++) {
                subMenu2Ch5[i].classList.remove("show");
                subArrowslinkCh5[i].firstElementChild.classList.remove("rotate");
            }
            for (var i = 0; i < subArrowslinkCh3.length; i++) {
                subArrowslinkCh3[i].classList.remove("grey-lighter");
            }
            for (var i = 0; i < linksBox.length; i++) {
                linksBox[i].nextElementSibling.classList.remove("show");
                linksBox[i].firstElementChild.classList.remove("rotate");
            }

            this.nextElementSibling.classList.add("show");
            this.firstElementChild.classList.add("rotate");
            this.classList.add("grey-lighter");
        } else {
            this.nextElementSibling.classList.remove("show");
            this.firstElementChild.classList.remove("rotate");
            this.classList.remove("grey-lighter");
        }
    };
});

//end drop down child 3 Headers

// start drop down child 4 Headers

var subArrowslinkCh4 = document.querySelectorAll("#upperNav .navbar .navbar-menu .navbar-start .main-navlist .navbar-item:nth-child(4) .navbar-dropdown >li  > a ");

var subMenu2Ch4 = document.querySelectorAll("#upperNav .navbar .navbar-menu .navbar-start .main-navlist .navbar-item:nth-child(4) .navbar-dropdown > li > ul");

subArrowslinkCh4.forEach(function(arr) {
    arr.onclick = function() {
        if (this.nextElementSibling.className.indexOf("show") < 0) {
            for (var i = 0; i < subArrowslinkCh4.length; i++) {
                subMenu2Ch4[i].classList.remove("show");
                subArrowslinkCh4[i].firstElementChild.classList.remove("rotate");
            }

            for (var i = 0; i < subMenu2Ch2.length; i++) {
                subMenu2Ch2[i].classList.remove("show");
                subArrowslinkCh2[i].firstElementChild.classList.remove("rotate");
            }
            for (var i = 0; i < 5; i++) {
                subMenu2Ch3[i].classList.remove("show");
                subArrowslinkCh3[i].firstElementChild.classList.remove("rotate");
            }
            for (var i = 0; i < dropPortFiliolist.length; i++) {
                dropPortFiliolist[i].classList.remove("show");
                linkportfolio[i].firstElementChild.classList.remove("rotate");
            }

            for (var i = 0; i < subArrowslinkCh4.length; i++) {
                subArrowslinkCh4[i].classList.remove("grey-lighter");
            }
            for (var i = 0; i < linksBox.length; i++) {
                linksBox[i].nextElementSibling.classList.remove("show");
                linksBox[i].firstElementChild.classList.remove("rotate");
            }

            this.classList.add("grey-lighter");
            this.nextElementSibling.classList.add("show");
            this.firstElementChild.classList.add("rotate");
        } else {
            this.nextElementSibling.classList.remove("show");
            this.firstElementChild.classList.remove("rotate");
            this.classList.remove("grey-lighter");
        }
    };
});

//Drop down Boxed

var linksBox = document.querySelectorAll(".portfoli-dropdown5 > li > a");

linksBox.forEach(function(lbox) {
    function dropLbx() {
        if (lbox.nextElementSibling.className.indexOf("show") < 0) {
            for (var i = 0; i < linksBox.length; i++) {
                linksBox[i].nextElementSibling.classList.remove("show");
            }

            this.nextElementSibling.classList.add("show");
            this.firstElementChild.classList.add("rotate");
            this.classList.add("grey-lighter");
        } else {
            this.nextElementSibling.classList.remove("show");
            this.firstElementChild.classList.remove("rotate");
            this.classList.remove("grey-lighter");
        }
    }

    lbox.addEventListener("click", dropLbx);
});

//end drop down child 4 Headers

// start drop down child 5 Headers

var subArrowslinkCh5 = document.querySelectorAll("#upperNav .navbar .navbar-menu .navbar-start .main-navlist .navbar-item:nth-child(5) .navbar-dropdown >li  > a ");

var subMenu2Ch5 = document.querySelectorAll("#upperNav .navbar .navbar-menu .navbar-start .main-navlist .navbar-item:nth-child(5) .navbar-dropdown > li > ul");

subArrowslinkCh5.forEach(function(arr) {
    arr.onclick = function() {
        if (this.nextElementSibling.className.indexOf("show") < 0) {
            for (var i = 0; i < subArrowslinkCh5.length; i++) {
                subMenu2Ch5[i].classList.remove("show");
                subArrowslinkCh5[i].firstElementChild.classList.remove("rotate");
            }
            for (var i = 0; i < subArrowslinkCh4.length; i++) {
                subMenu2Ch4[i].classList.remove("show");
                subArrowslinkCh4[i].firstElementChild.classList.remove("rotate");
            }

            for (var i = 0; i < subMenu2Ch2.length; i++) {
                subMenu2Ch2[i].classList.remove("show");
                subArrowslinkCh2[i].firstElementChild.classList.remove("rotate");
            }
            for (var i = 0; i < 5; i++) {
                subMenu2Ch3[i].classList.remove("show");
                subArrowslinkCh3[i].firstElementChild.classList.remove("rotate");
            }
            for (var i = 0; i < subArrowslinkCh5.length; i++) {
                subArrowslinkCh5[i].classList.remove("grey-lighter");
            }
            for (var i = 0; i < linksBox.length; i++) {
                linksBox[i].nextElementSibling.classList.remove("show");
                linksBox[i].firstElementChild.classList.remove("rotate");
            }
            this.classList.add("grey-lighter");
            this.nextElementSibling.classList.add("show");
            this.firstElementChild.classList.add("rotate");
        } else {
            this.nextElementSibling.classList.remove("show");
            this.firstElementChild.classList.remove("rotate");
            this.classList.remove("grey-lighter");
        }
    };
});

//end drop down child 5 Headers

// start drop down child 7 Headers

var subArrowslinkCh7 = document.querySelectorAll("#upperNav .navbar .navbar-menu .navbar-start .main-navlist .navbar-item:nth-child(7) .navbar-dropdown >li  > a ");

var subMenu2Ch7 = document.querySelectorAll("#upperNav .navbar .navbar-menu .navbar-start .main-navlist .navbar-item:nth-child(7) .navbar-dropdown > li > ul");

subArrowslinkCh7.forEach(function(arr) {
    arr.onclick = function() {
        if (this.nextElementSibling.className.indexOf("show") < 0) {
            for (var i = 0; i < subArrowslinkCh5.length; i++) {
                subMenu2Ch5[i].classList.remove("show");
                subArrowslinkCh5[i].firstElementChild.classList.remove("rotate");
            }
            for (var i = 0; i < subArrowslinkCh4.length; i++) {
                subMenu2Ch4[i].classList.remove("show");
                subArrowslinkCh4[i].firstElementChild.classList.remove("rotate");
            }

            for (var i = 0; i < subMenu2Ch2.length; i++) {
                subMenu2Ch2[i].classList.remove("show");
                subArrowslinkCh2[i].firstElementChild.classList.remove("rotate");
            }
            for (var i = 0; i < 5; i++) {
                subMenu2Ch3[i].classList.remove("show");
                subArrowslinkCh3[i].firstElementChild.classList.remove("rotate");
            }
            for (var i = 0; i < subArrowslinkCh7.length; i++) {
                subArrowslinkCh7[i].classList.remove("grey-lighter");
            }
            for (var i = 0; i < linksBox.length; i++) {
                linksBox[i].nextElementSibling.classList.remove("show");
                linksBox[i].firstElementChild.classList.remove("rotate");
            }

            this.classList.add("grey-lighter");
            this.nextElementSibling.classList.add("show");
            this.firstElementChild.classList.add("rotate");
        } else {
            this.nextElementSibling.classList.remove("show");
            this.firstElementChild.classList.remove("rotate");
            this.classList.remove("grey-lighter");
        }
    };
});

//end drop down child 7 Headers

//opned sub sub menu in portfolio menu

var linkportfolio = document.querySelectorAll(".portfoli-dropdown7 > li > a");

var dropPortFiliolist = document.querySelectorAll(".portfoli-dropdown7 > li > ul");

linkportfolio.forEach(function(link) {
    link.onclick = function() {
        if (this.nextElementSibling.className.indexOf("show") < 0) {
            for (var i = 0; i < dropPortFiliolist.length; i++) {
                dropPortFiliolist[i].classList.remove("show");
                linkportfolio[i].firstElementChild.classList.remove("rotate");
            }

            this.nextElementSibling.classList.add("show");
            this.firstElementChild.classList.add("rotate");
        } else {
            this.nextElementSibling.classList.remove("show");
            this.firstElementChild.classList.remove("rotate");
        }
    };
});

//close Hamburg menu close all list

var Hamburgmenu = document.querySelector(".Hamburgmenu");
Hamburgmenu.addEventListener("click", removeLists);

function removeLists() {
    var allList = document.querySelectorAll(".main-navlist  li  ul");
    /* var subList = document.querySelectorAll(".main-navlist > li > ul > ul ")*/
    var iconsArrow = document.querySelectorAll(".main-navlist > li i");

    if (Hamburgmenu.className.indexOf("rotate") < 0) {
        for (var i = 0; i < allList.length; i++) {
            allList[i].classList.remove("show");
        }
        for (var i = 0; i < iconsArrow.length; i++) {
            iconsArrow[i].classList.remove("rotate");
        }
    }
}

//Add grey lighter for single menu

var linksSingle = document.querySelectorAll(".portfoli-dropdown7 > li > a");

linksSingle.forEach(function(lgs) {
    lgs.addEventListener("click", addgrey);

    function addgrey() {
        if (lgs.className.indexOf("grey-lighter") < 0) {
            for (var i = 0; i < linksSingle.length; i++) {
                linksSingle[i].classList.remove("grey-lighter");
            }
            this.classList.add("grey-lighter");
        } else {
            this.classList.add("grey-lighter");
        }
    }
});
//Add transtions for all icons
var icon = document.querySelectorAll("i");

for (var i = 0; i < icon.length; i++) {
    icon[i].classList.add("trans");
}

var tabLinks = document.querySelectorAll(".ourworks .content .tabs > ul > li > a");
var workLinks = document.querySelectorAll(".ourworks .content .works-photos > a");
var ScrollTabLink = document.querySelector(".ourworks a:nth-child(1)").offsetTop; /*- getDynH()*/
var scrollAll = document.querySelector(".ourworks").offsetTop;

var heightWorkPhotos = document.querySelector(".works-photos");

//Put Active Color

tabLinks.forEach(function(tl) {
    tl.onclick = function() {
        for (var i = 0; i < tabLinks.length; i++) {
            tabLinks[i].classList.remove("active");
        }
        if (tl.className.indexOf("active") < 0) {
            this.classList.add("active");
        } else {
            this.classList.remove("active");
        }
    };
});


//Get Dynamic Width & Height for photo and when resize update height and width auto
/*Get width & Height realtive to width of the window to be Dynamic */

/*Desktop */
function getDynW() {
    var w = document.documentElement.clientWidth;

    var we = w * (33.3333333 / 100);

    return we;
}

function getDynH() {
    var dYnH = getDynW() * (61.1154329 / 100);
    return dYnH;
}
/*Tablet */

function getWidthTablet() {
    var w = document.documentElement.clientWidth;

    var wTablet = w * (50 / 100);

    return wTablet;
}

function getHeightTablet() {
    var hTablet = getWidthTablet() * (61.1454329 / 100);
    return hTablet;
}

/*Mobile  */
function getWidthMobile() {
    var w = document.documentElement.clientWidth;

    var wMobile = w * (100 / 100);

    return wMobile;
}

function getHeightMobile() {
    var hMobile = getWidthMobile() * (61.1454329 / 100);
    return hMobile;
}


/*Function when user resize elements get as normal */


/*Media Query to control in viewport events */
var DesktopWidth = window.matchMedia("(min-width: 1200px)");
var x = window.matchMedia("(min-width: 992px)");
var y = window.matchMedia("(min-width: 450px)")
var z = window.matchMedia("(min-width: 350px)")

/*Check Media Query to implemet js in min-width:1200*/
function backNormal() {
    if (DesktopWidth.matches) {
        window.onresize = function() {
            for (var i = 0; i < workLinks.length; i++) {
                workLinks[i].style.transform = "translate(" + 0 + "px," + 0 + "px" + ")";
                workLinks[i].style.opacity = 1;
                workLinks[i].style.zIndex = 10;
                heightWorkPhotos.style.height = "auto";
                workLinks[i].classList.remove("animate");
                heightWorkPhotos.style.overflow = "hidden";
            }
        }
    }
}
backNormal();




myFunction(x);
x.addListener(myFunction);

function myFunction(x) {
    if (x.matches) {
        // If media query matches
        for (var i = 0; i < workLinks.length; i++) {
            workLinks[i].style.transform = "translate(" + 0 + "px," + 0 + "px" + ")";
            workLinks[i].style.opacity = 1;
            workLinks[i].style.zIndex = 10;
            heightWorkPhotos.style.height = "auto";
            workLinks[i].classList.remove("animate");
            heightWorkPhotos.style.overflow = "hidden";
        }
        tabLinks.forEach(function(tblnk, index) {
            for (var i = 0; i < tabLinks.length; i++) {
                tabLinks[i].classList.remove("showtablet");

                tabLinks[i].classList.add("showDesktop");
            }

            tblnk.addEventListener("click", showDesktop);

            function showDesktop(e) {
                if (e.target.className.indexOf("showDesktop") > -1) {
                    showTransform();
                }
            }

            function showTransform() {
                if (index === 0) {
                    for (var i = 0; i < workLinks.length; i++) {
                        workLinks[i].style.transform = "translate(0px,0px)";
                        workLinks[i].style.opacity = "1";
                        workLinks[i].style.zIndex = 10;
                        heightWorkPhotos.style.height = "auto";
                    }
                }
                if (index === 1) {
                    for (var i = 0; i < workLinks.length; i++) {
                        workLinks[i].style.transform = "translate(0px,0px)";
                        workLinks[i].style.opacity = "0";
                        workLinks[i].style.zIndex = -1;

                        workLinks[i].classList.remove("animate");
                    }

                    workLinks[2].style.transform = "translate(" + -(getDynW()) + "px," + 2 + "px" + ")";
                    workLinks[4].style.transform = "translate(" + (getDynW()) + "px," + -getDynH() + "px" + ")";
                    workLinks[0].style.transform = "translate(" + 0 + "px," + 0 + "px" + ")";
                    workLinks[0].style.opacity = "1";
                    workLinks[2].style.opacity = "1";
                    workLinks[4].style.opacity = "1";
                    workLinks[0].style.zIndex = 10;
                    workLinks[2].style.zIndex = 10;
                    workLinks[4].style.zIndex = 10;
                    heightWorkPhotos.style.height = getDynH() + "px";
                    workLinks[0].classList.add("animate");
                    workLinks[2].classList.add("animate");
                    workLinks[4].classList.add("animate");
                }
                if (index === 2) {
                    for (var i = 0; i < workLinks.length; i++) {
                        workLinks[i].style.transform = "translate(0px,0px)";
                        workLinks[i].style.opacity = "0";
                        workLinks[i].style.zIndex = -1;
                        workLinks[i].classList.remove("animate");
                    }

                    workLinks[1].style.transform = "translate(" + -(getDynW() + 8) + "px," + 2 + "px" + ")";
                    workLinks[3].style.transform = "translate(" + (getDynW()) + "px," + -getDynH() + "px" + ")";
                    workLinks[5].style.transform = "translate(" + 0 + "px," + -getDynH() + "px" + ")";
                    workLinks[1].style.opacity = "1";
                    workLinks[3].style.opacity = "1";
                    workLinks[5].style.opacity = "1";
                    workLinks[1].style.zIndex = 10;
                    workLinks[3].style.zIndex = 10;
                    workLinks[5].style.zIndex = 10;
                    heightWorkPhotos.style.height = getDynH() + "px";
                    workLinks[1].classList.add("animate");
                    workLinks[3].classList.add("animate");
                    workLinks[5].classList.add("animate");
                }

                if (index === 3) {
                    for (var i = 0; i < workLinks.length; i++) {
                        workLinks[i].style.transform = "translate(0px,0px)";
                        workLinks[i].style.opacity = "0";
                        workLinks[i].style.zIndex = -1;
                        workLinks[i].classList.remove("animate");
                    }

                    workLinks[1].style.transform = "translate(" + -(getDynW() + 8) + "px," + 2 + "px" + ")";
                    workLinks[2].style.transform = "translate(" + -(getDynW() + 8) + "px," + 2 + "px" + ")";
                    workLinks[3].style.transform = "translate(" + (2 * (getDynW())) + "px," + -getDynH() + "px" + ")";
                    workLinks[1].style.opacity = "1";
                    workLinks[2].style.opacity = "1";
                    workLinks[3].style.opacity = "1";
                    workLinks[1].style.zIndex = 10;
                    workLinks[2].style.zIndex = 10;
                    workLinks[3].style.zIndex = 10;
                    heightWorkPhotos.style.height = getDynH() + "px";
                    workLinks[1].classList.add("animate");
                    workLinks[2].classList.add("animate");
                    workLinks[3].classList.add("animate");
                }
                if (index === 4) {
                    for (var i = 0; i < workLinks.length; i++) {
                        workLinks[i].style.transform = "translate(0px,0px)";
                        workLinks[i].style.opacity = "0";
                        workLinks[i].style.zIndex = -1;
                        workLinks[i].classList.remove("animate");
                    }

                    workLinks[0].style.transform = "translate(" + 0 + "px," + 2 + "px" + ")";
                    workLinks[4].style.transform = "translate(" + 0 + "px," + -getDynH() + "px" + ")";
                    workLinks[5].style.transform = "translate(" + 0 + "px," + -getDynH() + "px" + ")";
                    workLinks[0].style.opacity = "1";
                    workLinks[4].style.opacity = "1";
                    workLinks[5].style.opacity = "1";
                    workLinks[0].style.zIndex = 10;
                    workLinks[5].style.zIndex = 10;
                    workLinks[4].style.zIndex = 10;
                    heightWorkPhotos.style.height = getDynH() + "px";
                    workLinks[0].classList.add("animate");
                    workLinks[4].classList.add("animate");
                    workLinks[5].classList.add("animate");
                }
            }
        });
    } else if (y.matches) {
        for (var i = 0; i < workLinks.length; i++) {
            workLinks[i].style.transform = "translate(" + 0 + "px," + 0 + "px" + ")";
            workLinks[i].style.opacity = 1;
            workLinks[i].style.zIndex = 10;
            heightWorkPhotos.style.height = "auto";
            workLinks[i].classList.remove("animate");
            heightWorkPhotos.style.overflow = "hidden";
        }
        for (var i = 0; i < tabLinks.length; i++) {
            tabLinks[i].classList.remove("showDesktop");
            tabLinks[i].classList.add("showtablet");
        }

        tabLinks.forEach(function(tlink, index) {
            tlink.addEventListener("click", showTablet);

            function showTablet(e) {
                if (e.target.className.indexOf("showtablet") > -1) {
                    transformTablet();
                }
            }

            function transformTablet() {
                if (index === 0) {
                    for (var i = 0; i < workLinks.length; i++) {
                        workLinks[i].style.transform = "translate(0px,0px)";
                        workLinks[i].style.opacity = "1";
                        workLinks[i].style.zIndex = 10;
                        heightWorkPhotos.style.height = "auto";
                        workLinks[i].classList.remove("animate");
                    }
                }
                if (index === 1) {
                    for (var i = 0; i < workLinks.length; i++) {
                        workLinks[i].style.transform = "translate(0px,0px)";
                        workLinks[i].style.opacity = "0";
                        workLinks[i].style.zIndex = -1;
                        workLinks[i].classList.remove("animate");
                    }

                    workLinks[2].style.transform = "translate(" + getWidthTablet() + "px," + -getHeightTablet() + "px" + ")";
                    workLinks[4].style.transform = "translate(" + 0 + "px," + -(getHeightTablet() + 6) + "px" + ")";
                    workLinks[0].style.transform = "translate(" + 0 + "px," + 0 + "px" + ")";
                    workLinks[0].style.opacity = "1";
                    workLinks[2].style.opacity = "1";
                    workLinks[4].style.opacity = "1";
                    workLinks[0].style.zIndex = 10;
                    workLinks[2].style.zIndex = 10;
                    workLinks[4].style.zIndex = 10;
                    heightWorkPhotos.style.height = "auto";
                    workLinks[0].classList.add("animate");
                    workLinks[2].classList.add("animate");
                    workLinks[4].classList.add("animate");
                    heightWorkPhotos.style.height = (2 * getHeightTablet()) + "px";
                }
                if (index === 2) {
                    for (var i = 0; i < workLinks.length; i++) {
                        workLinks[i].style.transform = "translate(0px,0px)";
                        workLinks[i].style.opacity = "0";
                        workLinks[i].style.zIndex = -1;
                        workLinks[i].classList.remove("animate");
                    }

                    workLinks[1].style.transform = "translate(" + -getWidthTablet() + "px," + 0 + "px" + ")";
                    workLinks[3].style.transform = "translate(" + 0 + "px," + -(getHeightTablet() + 6) + "px" + ")";
                    workLinks[5].style.transform = "translate(" + -getWidthTablet() + "px," + -getHeightTablet() + "px" + ")";
                    workLinks[1].style.opacity = "1";
                    workLinks[3].style.opacity = "1";
                    workLinks[5].style.opacity = "1";
                    workLinks[1].style.zIndex = 10;
                    workLinks[3].style.zIndex = 10;
                    workLinks[5].style.zIndex = 10;
                    heightWorkPhotos.style.height = "auto";
                    workLinks[1].classList.add("animate");
                    workLinks[3].classList.add("animate");
                    workLinks[5].classList.add("animate");
                    heightWorkPhotos.style.height = (2 * getHeightTablet()) + "px";
                }
                if (index === 3) {
                    for (var i = 0; i < workLinks.length; i++) {
                        workLinks[i].style.transform = "translate(0px,0px)";
                        workLinks[i].style.opacity = "0";
                        workLinks[i].style.zIndex = -1;
                        workLinks[i].classList.remove("animate");
                    }

                    workLinks[1].style.transform = "translate(" + -getWidthTablet() + "px," + 0 + "px" + ")";
                    workLinks[2].style.transform = "translate(" + getWidthTablet() + "px," + -(getHeightTablet() + 10) + "px" + ")";
                    workLinks[3].style.transform = "translate(" + -getWidthTablet() + "px," + 0 + "px" + ")";
                    workLinks[1].style.opacity = "1";
                    workLinks[2].style.opacity = "1";
                    workLinks[3].style.opacity = "1";
                    workLinks[1].style.zIndex = 10;
                    workLinks[2].style.zIndex = 10;
                    workLinks[3].style.zIndex = 10;
                    heightWorkPhotos.style.height = "auto";
                    workLinks[1].classList.add("animate");
                    workLinks[2].classList.add("animate");
                    workLinks[3].classList.add("animate");
                    heightWorkPhotos.style.height = (2 * getHeightTablet()) + "px";
                }
                if (index === 4) {
                    for (var i = 0; i < workLinks.length; i++) {
                        workLinks[i].style.transform = "translate(0px,0px)";
                        workLinks[i].style.opacity = "0";
                        workLinks[i].style.zIndex = -1;
                        workLinks[i].classList.remove("animate");
                    }

                    workLinks[0].style.transform = "translate(" + 0 + "px," + 0 + "px" + ")";
                    workLinks[4].style.transform = "translate(" + getWidthTablet() + "px," + -(2 * (getHeightTablet() + 6)) + "px" + ")";
                    workLinks[5].style.transform = "translate(" + -getWidthTablet() + "px," + -getHeightTablet() + "px" + ")";
                    workLinks[0].style.opacity = "1";
                    workLinks[4].style.opacity = "1";
                    workLinks[5].style.opacity = "1";
                    workLinks[0].style.zIndex = 10;
                    workLinks[4].style.zIndex = 10;
                    workLinks[5].style.zIndex = 10;
                    heightWorkPhotos.style.height = "auto";
                    workLinks[0].classList.add("animate");
                    workLinks[5].classList.add("animate");
                    workLinks[4].classList.add("animate");
                    heightWorkPhotos.style.height = (2 * getHeightTablet()) + "px";
                }
            }
        });
    } else if (z.matches) {
        for (var i = 0; i < workLinks.length; i++) {
            workLinks[i].style.transform = "translate(" + 0 + "px," + 0 + "px" + ")";
            workLinks[i].style.opacity = 1;
            workLinks[i].style.zIndex = 10;
            heightWorkPhotos.style.height = "auto";
            workLinks[i].classList.remove("animate");
            heightWorkPhotos.style.overflow = "hidden";
        }
        for (var i = 0; i < tabLinks.length; i++) {
            tabLinks[i].classList.remove("showDesktop");
            tabLinks[i].classList.remove("showtablet");
            tabLinks[i].classList.add("mobile");
        }


        function showMobile(e) {

            if (e.target.className.indexOf("mobile") > -1) {
                transformMobile()
            }
        }

        tabLinks.forEach(function(lk, index) {

            lk.addEventListener("click", transformMobile)


            function transformMobile() {

                if (index === 0) {
                    for (var i = 0; i < workLinks.length; i++) {
                        workLinks[i].style.transform = "translate(0px,0px)";
                        workLinks[i].style.opacity = "1";
                        workLinks[i].style.zIndex = 10;
                        heightWorkPhotos.style.height = "auto";
                        workLinks[i].classList.remove("animate");
                        heightWorkPhotos.style.overflow = "hidden"
                    }
                }

                if (index === 1) {
                    for (var i = 0; i < workLinks.length; i++) {
                        workLinks[i].style.transform = "translate(0px,0px)";
                        workLinks[i].style.opacity = "0";
                        workLinks[i].style.zIndex = -1;
                        workLinks[i].classList.remove("animate");
                    }

                    workLinks[2].style.transform = "translate(" + 0 + "px," + -getHeightMobile() + "px" + ")";
                    workLinks[4].style.transform = "translate(" + 0 + "px," + -(2 * getHeightMobile()) + "px" + ")";
                    workLinks[0].style.transform = "translate(" + 0 + "px," + 0 + "px" + ")";
                    workLinks[0].style.opacity = "1";
                    workLinks[2].style.opacity = "1";
                    workLinks[4].style.opacity = "1";
                    workLinks[0].style.zIndex = 10;
                    workLinks[2].style.zIndex = 10;
                    workLinks[4].style.zIndex = 10;
                    heightWorkPhotos.style.height = "auto";
                    workLinks[0].classList.add("animate");
                    workLinks[2].classList.add("animate");
                    workLinks[4].classList.add("animate");
                    heightWorkPhotos.style.height = (3 * getHeightMobile()) + "px"
                    /*heightWorkPhotos.style.overflow = "visible"*/

                }
                if (index === 2) {
                    for (var i = 0; i < workLinks.length; i++) {
                        workLinks[i].style.transform = "translate(0px,0px)";
                        workLinks[i].style.opacity = "0";
                        workLinks[i].style.zIndex = -1;
                        workLinks[i].classList.remove("animate");
                    }

                    workLinks[1].style.transform = "translate(" + 0 + "px," + -getHeightMobile() + "px" + ")";
                    workLinks[3].style.transform = "translate(" + 0 + "px," + -(2 * getHeightMobile()) + "px" + ")";
                    workLinks[5].style.transform = "translate(" + 0 + "px," + -(3 * getHeightMobile()) + "px" + ")";
                    workLinks[1].style.opacity = "1";
                    workLinks[3].style.opacity = "1";
                    workLinks[5].style.opacity = "1";
                    workLinks[1].style.zIndex = 10;
                    workLinks[3].style.zIndex = 10;
                    workLinks[5].style.zIndex = 10;
                    heightWorkPhotos.style.height = "auto";
                    workLinks[1].classList.add("animate");
                    workLinks[3].classList.add("animate");
                    workLinks[5].classList.add("animate");
                    heightWorkPhotos.style.height = (3 * getHeightMobile()) + "px"
                    /*heightWorkPhotos.style.overflow = "visible"*/
                }
                if (index === 3) {
                    for (var i = 0; i < workLinks.length; i++) {
                        workLinks[i].style.transform = "translate(0px,0px)";
                        workLinks[i].style.opacity = "0";
                        workLinks[i].style.zIndex = -1;
                        workLinks[i].classList.remove("animate");
                    }

                    workLinks[1].style.transform = "translate(" + 0 + "px," + -getHeightMobile() + "px" + ")";
                    workLinks[2].style.transform = "translate(" + 0 + "px," + -(getHeightMobile()) + "px" + ")";
                    workLinks[3].style.transform = "translate(" + 0 + "px," + -(getHeightMobile()) + "px" + ")";
                    workLinks[1].style.opacity = "1";
                    workLinks[2].style.opacity = "1";
                    workLinks[3].style.opacity = "1";
                    workLinks[1].style.zIndex = 10;
                    workLinks[2].style.zIndex = 10;
                    workLinks[3].style.zIndex = 10;
                    heightWorkPhotos.style.height = "auto";
                    workLinks[1].classList.add("animate");
                    workLinks[2].classList.add("animate");
                    workLinks[3].classList.add("animate");
                    heightWorkPhotos.style.height = (3 * getHeightMobile()) + "px"
                    /*heightWorkPhotos.style.overflow = "visible"*/
                }
                if (index === 4) {
                    for (var i = 0; i < workLinks.length; i++) {
                        workLinks[i].style.transform = "translate(0px,0px)";
                        workLinks[i].style.opacity = "0";
                        workLinks[i].style.zIndex = -1;
                        workLinks[i].classList.remove("animate");
                    }

                    workLinks[0].style.transform = "translate(" + 0 + "px," + 0 + "px" + ")";
                    workLinks[4].style.transform = "translate(" + 0 + "px," + -(3 *
                        getHeightMobile()) + "px" + ")";
                    workLinks[5].style.transform = "translate(" + 0 + "px," + -(3 * getHeightMobile()) + "px" + ")";
                    workLinks[0].style.opacity = "1";
                    workLinks[4].style.opacity = "1";
                    workLinks[5].style.opacity = "1";
                    workLinks[0].style.zIndex = 10;
                    workLinks[4].style.zIndex = 10;
                    workLinks[5].style.zIndex = 10;
                    heightWorkPhotos.style.height = "auto";
                    workLinks[0].classList.add("animate");
                    workLinks[5].classList.add("animate");
                    workLinks[4].classList.add("animate");
                    heightWorkPhotos.style.height = (3 * getHeightMobile()) + "px"
                    /*heightWorkPhotos.style.overflow = "visible"*/
                }

            }

        })


    }
}
//Compensate Hover Action In Mobile View In Our Team Section


//validate subscribe form

var mailSubscribe = document.querySelector(".subscribe  form  input[type='text']");
var subscribeForm = document.querySelector(".subscribe .content .form-subscribe form");
var vaildText = document.querySelector(".validemail");
var expressionMail = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
var newRegMail = new RegExp(expressionMail);
subscribeForm.addEventListener("submit", validateEmail);

function validateEmail(e) {
    e.preventDefault();
    if (!mailSubscribe.value.match(newRegMail)) {
        vaildText.textContent = "Please Type Valid Email Address";
        vaildText.classList.add("show");
    } else {
        vaildText.textContent = "";
        vaildText.classList.remove("show");
    }
}

//valid Get Intouch form

var getIntouchForm = document.querySelector(".getintouch__form");

var inputName = document.querySelector(".getintouch__form form .control:nth-child(1) input");

var inputEmail = document.querySelector(".getintouch__form form .control:nth-child(2) input");
var validemail2 = document.querySelector(".validmail2");
var validName = document.querySelector(".validName");
var regNames = /^[a-z][a-z\s]*$/gi;
var newRegNams = new RegExp(regNames);
getIntouchForm.addEventListener("submit", validGetintouch);

function validGetintouch(e) {
    e.preventDefault();
    if (!inputEmail.value.match(newRegMail)) {
        validemail2.textContent = "Please Type Valid Email Address";
        validemail2.classList.add("show");
    } else {
        validemail2.textContent = "";
        validemail2.classList.remove("show");
    }
    if (!inputName.value.match(newRegNams)) {
        validName.textContent = "Please Type Valid Name";
        validName.classList.add("show");
    } else {
        validName.textContent = "";
        validName.classList.remove("show");
    }
}

//scrollto top

var scrollTopButton = document.querySelector(".scrolltop");

scrollTopButton.addEventListener("click", scrollPageTop);

function scrollPageTop(e) {
    e.preventDefault();

    scrollToTop(800);
}



function scrollToTop(duration) {
    if (document.scrollingElement.scrollTop === 0) return;

    const totalScrollDistance = document.scrollingElement.scrollTop;
    let scrollY = totalScrollDistance,
        oldTimestamp = null;

    function step(newTimestamp) {
        if (oldTimestamp !== null) {
            scrollY -= (totalScrollDistance * (newTimestamp - oldTimestamp)) / duration;
            if (scrollY <= 0) return (document.scrollingElement.scrollTop = 0);
            document.scrollingElement.scrollTop = scrollY;
        }
        oldTimestamp = newTimestamp;
        window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
}
//Make Scroll Animation for each section

var featuresection = document.querySelector(".features");
var scrollNav = document.querySelector("#upperNav").scrollHeight;
var scrollfeature = featuresection.offsetTop;
var presenation = document.querySelector(".presntaion");
var scrollpresnation = presenation.offsetTop;
var ourworks = document.querySelector(".ourworks");
var scrollourworks = ourworks.offsetTop;
var ourservice = document.querySelector(".ourservices");
var scrollourservice = ourservice.offsetTop;
var ourteam = document.querySelector(".ourteam");

var maincarousel = document.querySelector(".main-carousel");

var caroselScroll = maincarousel.offsetTop;

var blog = document.querySelector(".blog");

var scrollsubscribe = document.querySelector(".subscribe").offsetTop - 400;

var getTouch = document.querySelector(".getintouch");
window.onscroll = function() {

    if (window.pageYOffset > 500) {
        scrollTopButton.classList.add("hideopacity");
    } else {
        scrollTopButton.classList.remove("hideopacity");
    }


    /*Add Animation effect for tab links in Our Works Section */

    for (var i = 0; i < tabLinks.length; i++) {

        tabLinks[i].classList.add("op-0")
    }

    if (window.pageYOffset > scrollpresnation) {

        for (var i = 0; i < tabLinks.length; i++) {

            tabLinks[i].classList.add("fadeout")
        }
    }


    //Animate Our Team Crads Section 
    var cardsOurTeam = document.querySelector(".ourteam__cards")
    if (window.pageYOffset > scrollourservice) {
        cardsOurTeam.classList.add("wow")
    } else {
        cardsOurTeam.classList.remove("wow")
    }

};


//Click Evenet instead of hover effect in our Team Section 


var columnCard = document.querySelectorAll(".ourteam__cards--card")

function ClickViewPort() {
    columnCard.forEach(function(card) {

        card.onclick = function() {

            for (var i = 0; i < columnCard.length; i++) {
                columnCard[i].firstElementChild.firstElementChild.nextElementSibling.classList.remove("showOverlay")
                columnCard[i].firstElementChild.firstElementChild.nextElementSibling.firstElementChild.classList.remove("showContent")

            }

            this.firstElementChild.firstElementChild.nextElementSibling.classList.add("showOverlay")
            this.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.classList.add("showContent")
        }


        card.onmouseleave = function() {

            for (var i = 0; i < columnCard.length; i++) {
                columnCard[i].firstElementChild.firstElementChild.nextElementSibling.classList.remove("showOverlay")
                columnCard[i].firstElementChild.firstElementChild.nextElementSibling.firstElementChild.classList.remove("showContent")

            }
        }
    })
}

ClickViewPort()



var images = document.querySelectorAll("img")


var observer = new IntersectionObserver(function(entires, observer) {


    entires.forEach(entry => {

        if (entry.isIntersecting) {
            var img = entry.target;

            img.setAttribute("src", img.getAttribute("data-src"))
            img.classList.add("adjustHeight")
            observer.unobserve(entry.target)
        }
    })


}, {})

images.forEach(imgBlog => {

    observer.observe(imgBlog)
})


//lazy load for iframe 


var observer = new IntersectionObserver(function(entires, observer) {


    entires.forEach(entry => {

        if (entry.isIntersecting) {
            var iframeYoutube = entry.target;

            iframeYoutube.setAttribute("src", iframeYoutube.getAttribute("data-src"))

            observer.unobserve(entry.target)
        }
    })


}, {})

observer.observe(iframeVideo)
/*Add load overlay */

var hero = document.querySelector(".heroarea");
var video = document.querySelector(".heroarea .player video");
var overlayLoad = document.querySelector(".overlayload")

var playerVideo = document.querySelector(".player")
setTimeout(function() {
    overlayLoad.classList.add("hide")
}, 1200)
video.addEventListener("canplaythrough", function() {
    setTimeout(function() {
        hero.classList.add("no-animate")
        playerVideo.classList.add("no-animate")

    }, 5000)
}, false);