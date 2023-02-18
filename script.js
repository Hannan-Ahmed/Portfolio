$(document).ready(function () {
    

    var content = document.getElementsByTagName('body')[0];
    var darkMode = document.getElementById('dark-change');
    darkMode.addEventListener('click', function(){
        darkMode.classList.toggle('active');
        content.classList.toggle('night');
    })





  


    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");

        }
    })



        
      
    











    // toogle menu/navbar script
    $('.menu-btn').click(function () {
        $(' .navbar .menu').toggleClass("active");
        $(' .menu-btn i').toggleClass("active");
    });

//typinh animation starts
var typed=new Typed(".typing",{
    strings:["Mern Developer","Web Designer","Backend Developer","Animator",'Enthusiastic Learner'],
    typeSpeed:100,
    backSpeed:60,
    loop:true
})
var typed=new Typed(".typing-2",{
    strings:["MERN Stack","PHP","Mysql","WordPress","Tailwind Css",'Bootstarp','Android Development'],
    typeSpeed:100,
    backSpeed:60,
    loop:true
})
var typed=new Typed(".typing-3",{
  strings:["Air University Islamabad","Accenture","Fazaia Inter College Islamabad"],
  typeSpeed:100,
  backSpeed:60,
  loop:true
})

var typed=new Typed(".typing-4",{
  strings:["Neo Docto","Societies","Self Projects"],
  typeSpeed:100,
  backSpeed:60,
  loop:true
})

    // owl carousel scripting
    $(".carousel").owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut:2000,
        autoplayHoverPause:true,
        responsive:{
           0:{ items:1,
            nav:false},
            600:{ items:2,
                nav:false},
             1000:{ items:3,
                nav:false}
                        
        }

    });
});



var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
}

//  images controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var circles = document.getElementsByClassName("dot");
  if (n > slides.length) {slidePosition = 1}
  if (n < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition-1].style.display = "block";
  circles[slidePosition-1].className += " enable";
  
} 






document.querySelectorAll('.button').forEach(button => {

    let duration = 3000,
        svg = button.querySelector('svg'),
        svgPath = new Proxy({
            y: null,
            smoothing: null
        }, {
            set(target, key, value) {
                target[key] = value;
                if(target.y !== null && target.smoothing !== null) {
                    svg.innerHTML = getPath(target.y, target.smoothing, null);
                }
                return true;
            },
            get(target, key) {
                return target[key];
            }
        });
  
    button.style.setProperty('--duration', duration);
  
    svgPath.y = 20;
    svgPath.smoothing = 0;
  
    button.addEventListener('click', e => {
        
        // e.preventDefault();
  
        if(!button.classList.contains('loading')) {
  
            button.classList.add('loading');
  
            gsap.to(svgPath, {
                smoothing: .3,
                duration: duration * .065 / 1000
            });
  
            gsap.to(svgPath, {
                y: 12,
                duration: duration * .265 / 1000,
                delay: duration * .065 / 1000,
                ease: Elastic.easeOut.config(1.12, .4)
            });
  
            setTimeout(() => {
                svg.innerHTML = getPath(0, 0, [
                    [3, 14],
                    [8, 19],
                    [21, 6]
                ]);
            }, duration / 2);
  
        }
        
  
    });
  
  });
  
  function getPoint(point, i, a, smoothing) {
    let cp = (current, previous, next, reverse) => {
            let p = previous || current,
                n = next || current,
                o = {
                    length: Math.sqrt(Math.pow(n[0] - p[0], 2) + Math.pow(n[1] - p[1], 2)),
                    angle: Math.atan2(n[1] - p[1], n[0] - p[0])
                },
                angle = o.angle + (reverse ? Math.PI : 0),
                length = o.length * smoothing;
            return [current[0] + Math.cos(angle) * length, current[1] + Math.sin(angle) * length];
        },
        cps = cp(a[i - 1], a[i - 2], point, false),
        cpe = cp(point, a[i - 1], a[i + 1], true);
    return `C ${cps[0]},${cps[1]} ${cpe[0]},${cpe[1]} ${point[0]},${point[1]}`;
  }
  
  function getPath(update, smoothing, pointsNew) {
    let points = pointsNew ? pointsNew : [
            [4, 12],
            [12, update],
            [20, 12]
        ],
        d = points.reduce((acc, point, i, a) => i === 0 ? `M ${point[0]},${point[1]}` : `${acc} ${getPoint(point, i, a, smoothing)}`, '');
    return `<path d="${d}" />`;
  }
  



  AOS.init();