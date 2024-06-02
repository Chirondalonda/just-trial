gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    lerp:0.1,
    // for tablet smooth
    tablet: { smooth: true },
 
    // for mobile
    smartphone: { smooth: true }
  });
  locoScroll.on("scroll", ScrollTrigger.update);
 
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      };
    }});


let tl = gsap.timeline()

/*button animations*/
function buttonAnimation(){
  const btns = document.querySelectorAll('.btn-b,.btn-w,.btn');
 

  btns.forEach((btn) => {
  
    btn.addEventListener('mouseenter', () => {
      const span = btn.querySelector('span');
      span.style.color = btn.classList.contains('btn-w') ? '' : '';
      btn.querySelector('.sp').style.backgroundColor = btn.classList.contains('btn-w') ? '' : '';
    });
  
    btn.addEventListener('mouseleave', () => {
      const span = btn.querySelector('span');
      span.style.color = '';
      btn.querySelector('.sp').style.backgroundColor = ''
  
  
    });
  
    //moving background position//
  
    btn.addEventListener('mousemove', (event) => {
      const rect = btn.getBoundingClientRect();
   
      const X = event.clientX - rect.left;
      const Y = event.clientY - rect.top;
  
     
  
      btn.style.setProperty('--x', X + 'px');
      btn.style.setProperty('--y', Y + 'px');
  
      //*moving background color*//
  
      if (btn.classList.contains('btn-w')) {
        document.documentElement.style.setProperty('--befclr','var(--theme-color)')
      } else {document.documentElement.style.setProperty('--befclr','')
    }
  
    });
  });
}
buttonAnimation()


//NAV GSAP//
gsap.from('.nav',{
  y:-100,
  duration:0.8,
})
gsap.from('.nav-button, .intro-btns-container',{
  duration: 3,
  Opacity: 0,
})

function navAnimation() {
  const navBar = document.querySelector('.nav')

navBar.addEventListener('mouseenter',()=>{
  let tl = gsap.timeline()
  tl.to('#nav-bottom',{
    height:'200px',
    duration:0.2,

  })
  gsap.to('.nav-part2 h5',{
    display:'block',
    duration:0.3,
  })
  gsap.to('.nav-part2 h5 span',{
    y:0,
    // duration:0.3,
    stagger:0.009,
  })
})

navBar.addEventListener("mouseleave", function () {
  
  tl.to(".nav-part2 h5 span", {
      y: 25,
      duration:0.15,
      stagger:0.01
  })
  tl.to(".nav-part2 h5", {
      display: "none",
      duration: 0.05
  })
  gsap.to("#nav-bottom", {
      height: 0,
      duration: 0.8,
      delay:0.15,
  })
})
}
navAnimation()
document.querySelector('.nav').addEventListener('mouseleave',navAnimation())



// Shery.imageEffect(".imm1", {
//   style: 1 /*OR 5 for different variant */,
//   // zIndex:1,
//   debug: true,
// });

function loadingAnimation() {

  var tl = gsap.timeline()
  tl.from("#main", {
      // opacity: 0,
      transform:"rotateX(80deg) translateY(1000px) scaleX(0) scaleY(0)",
      // height:'0px',
      // width:'100px',
      borderRadius: "250px",
      duration: 2,
      delay: 0.2,
      ease: "expo.out"
  },'a')
  tl.from(".penb", {
    // opacity: 0,
    transform:"rotateZ(200deg)",
    // height:'0px',
    // width:'100px',
    duration: 6,
    delay: 0.6,
    ease: "expo.out"
},'a')



//   gsap.from("h1,h2,h3,h4,p,#btt,#page5-right",{opacity:0,
//  y:100,
//  ease:"power3",
//                                     stagger:0.05,
//  delay:0.6,
//  duration:0.3,
//                                          })
}
// loadingAnimation()


function sherryeffects() {
Shery.textAnimate(".page1 .H1,.i", {
  style: 2,
  y: 30,
  delay: 2,
  // duration: 2,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.15,
});


//shery js//


Shery.mouseFollower({
  //Parameters are optional.
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 0.4,
});


Shery.makeMagnet(".penb" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 0.4,
  magnet:true,
});
}
sherryeffects()


const commonScrollTriggerProps = {
  scrub: 1,
  // markers: true,
  mobile: true,
  scroller: "#main"
};

const page2ScrollTriggerProps = {
  trigger: ".page2",
  start: "200% 30%",
  end: "310% 100%",
  ...commonScrollTriggerProps
};

const moverScrollTriggerProps = {
  trigger: ".page2",
  // markers:true,
  start: "200% 100%",
  // markers:true,
  end: "310% 100%",
  ...commonScrollTriggerProps
};

const c1ScrollTriggerProps = {
  trigger: "#c1",
  // markers:true,
  start: "800% 50%",
  end: "870% 50%",
  scrub: 0.5,
  ...commonScrollTriggerProps
};

const c2ScrollTriggerProps = {
  trigger: "#c2",
  start: "800% 50%",
  end: "870% 50%",
  scrub: 0.5,
  ...commonScrollTriggerProps
};

const c3ScrollTriggerProps = {
  trigger: "#c3",
  start: "800% 50%",
  end: "870% 50%",
  scrub: 0.5,
  ...commonScrollTriggerProps
};

gsap.to('.mo .mm1', {
  scrollTrigger: moverScrollTriggerProps,
  x: "-300px"
});

gsap.to('.mm2', {
  scrollTrigger:moverScrollTriggerProps,
  x: "300px"
});

gsap.to('.ii1', {
  scrollTrigger: c1ScrollTriggerProps,
  width: "100%"
});

gsap.to('.ii2', {
  scrollTrigger: {
    ...c1ScrollTriggerProps,
    start: "830% 50%"
  },
  width: "100%"
});

gsap.to('.ii11', {
  scrollTrigger: c2ScrollTriggerProps,
  width: "100%"
});

gsap.to('.ii22', {
  scrollTrigger: {
    ...c2ScrollTriggerProps,
    start: "830% 50%"
  },
  width: "100%"
});

gsap.to('.ii111', {
  scrollTrigger: c3ScrollTriggerProps,
  width: "100%"
});

gsap.to('.ii222', {
  scrollTrigger: {
    ...c3ScrollTriggerProps,
    start: "830% 50%"
  },
  width: "100%"
});


//page3 opner//

function opner() {
  var tl = gsap.timeline(
    {scrollTrigger:{
      trigger:".page3",
      start:"350% 50%",
      end:"475% 50%",
      scrub:1,
      // markers:true,
      pin:true,
      mobile: true,
      scroller:"#main"
    }})
    var tl1 = gsap.timeline({scrollTrigger:{
      trigger:".page3",
      start:"350% 50%",
      end:"440% 50%",
      scrub:1,
      // pin:true,
      // markers:true,
      mobile: true,
      scroller:"#main"
    }})
    tl1.to(".top",{
      top:"-50%"
    },'a'
    )
    tl1.to(".bottom",{
      bottom:"-50%"
    },'a')
    tl1.from('#hero-shape',{
      right:'-500px'
    },'a')
    tl.to('.t',{bottom:"50%"},'a')
    tl.to('.b',{top:"-50%"},'a')
    gsap.from(".pa1",{
      scrollTrigger:{
      trigger:".page3",
      // markers:true,
      start:"358% 60%",
      end:"400% 60%",
      scrub:1,
      mobile: true,
      scroller:"#main"
    },
      y:"800px",
      opacity:0
    })
    gsap.from(".pa2",{
      scrollTrigger:{
      trigger:".page3",
      // markers:true,
      start:"364% 65%",
      end:"410% 65%",
      scrub:1,
      mobile: true,
      pin:true,
      scroller:"#main"
    },
      y:"1800px",
      opacity:0
    })
    gsap.from(".pa3",{
      scrollTrigger:{
      trigger:".page3",
      // markers:true,
      start:"360% 60%",
      end:"435% 60%",
      scrub:1,
      mobile: true,
      // pin:true,
      scroller:"#main"
    },
      y:"2800px",
    })
}
 
opner()



//no pointer events//
const main = document.querySelector("#main"); // Replace "myDiv" with your actual div ID
const navElements = document.querySelector(".nav");

function addAndRemoveClass() {
  main.classList.add("pointer-none"); // Replace "myClass" with your desired class name
  setTimeout(() => {
    main.classList.remove("pointer-none");
    // alert('nothing')
  }, 2400); // 2 seconds in millisecolnds
  navElements.classList.add("pointer-none"); // Replace "myClass" with your desired class name
  setTimeout(() => {
    navElements.classList.remove("pointer-none");
    // alert('nothing')
  }, 2400);
}
addAndRemoveClass();

        const boxes = document.querySelectorAll('.card');
        
boxes.forEach(box =>{
  const crb = document.querySelectorAll('.cards');
    crb.forEach(ccc =>{ccc.addEventListener("mousemove", function(event) {
      const rect = box.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
  
      // console.log("Cursor position relative to innerbox center - X: " + x + ", Y: " + y);
      
  const rotationX = -(y / rect.height) *5; // Adjust the multiplier for desired rotation
      const rotationY = (x / rect.width) * 5; // Adjust the multiplier for desired rotation
      box.style.transform = `perspective(500px) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
    //  document.querySelector(".greenhvr").style.transform = `perspective(500px) rotateX(${rotationY}deg) rotateY(${rotationX}deg)`;
      });
      ccc.addEventListener('mouseleave',()=>{
        box.style.transform = `rotateX(0deg) rotateY(0deg)`;
      })
    })
    })

  const contact = document.querySelectorAll(".build,i")

  // contact.forEach(cc =>{
  //   cc.addEventListener('click',()=>{
  //   locoScroll.scrollTo("#page4")
  //   })
  // })
  // document.querySelectorAll('.dess').forEach(fe=>{fe.addEventListener('click',()=>{
  //   locoScroll.scrollTo("#page2")})})

    const crsr = document.getElementById('cursor')
    const bdy = document.querySelector('#main')
    document.addEventListener('mousemove',(pts)=>{
        crsr.style.left = pts.x+7+"px"
        crsr.style.top = pts.y+7+"px"
    })
    
    var baxas = document.querySelectorAll('.baxa')
    
    baxas.forEach(function(baxa){
        baxa.addEventListener('mouseover',()=>{
            crsr.style.width= "400px"
            crsr.style.height="300px"
            crsr.style.borderRadius="0"
            crsr.style.mixBlendMode="normal"
            crsr.style.backgroundImage= `url(${baxa.getAttribute('data-image')})`
        })
        baxa.addEventListener('mouseleave',()=>{
            crsr.style.width= ""
            crsr.style.height=""
            crsr.style.borderRadius=""
            crsr.style.backgroundImage= ""
            crsr.style.mixBlendMode=""
        })
      })
      // const container = document.getElementById('page4');
      // const text = container.textContent;
      // container.innerHTML = '';
      
      // for (let i = 0; i < text.length; i++) {
      //   const char = text[i];
      //   const span = document.createElement('span');
      //   span.textContent = char;
      //   container.appendChild(span);
      // }
      
      // const spans = container.querySelectorAll('.page4 span');    
      // spans.forEach(sp=>{
      //   sp.classList.add('H1')
      // })
      
      // gsap.to(".page4",{
      //   scrollTrigger:{
      //   trigger:".page1",
      //   // markers:true,
      //   start:"80% 50%",
      //   end:"130% 50%",
      //   scrub:1,
      //   mobile: true,
      //   scroller:"#main"},
      //   y:"0",
      //   // borderRadius: '0'
      //   // opacity:0
      // })
      // gsap.to("#cnrr",{
      //   scrollTrigger:{
      //   trigger:".page1",
      //   // markers:true,
      //   start:"100% 50%",
      //   end:"130% 50%",
      //   scrub:1,
      //   mobile: true,
      //   scroller:"#main"},
      //   y:"0",
      //   // borderRadius: '0'
      //   // opacity:0
      // })
      gsap.to(".page4",{
        scrollTrigger:{
        trigger:".page1",
        // markers:true,
        start:"100% 40%",
        end:"110% 40%",
        scrub:0.5,
        mobile: true,
        scroller:"#main"
      },
        // y:"0",
        borderRadius: '0'
        // opacity:0
      }) 
      
      gsap.to('.left-txtt',{
        scrollTrigger:{
        trigger:".page4",
        start:"50% 50%",
        end:"bottom bottom",
        endTrigger:'#lass',
        pin:true,
        // markers:true,
        scrub:0,
        mobile: true,
        scroller:"#main"
      },
        y:'-300%',
        ease: Power1
      })

      let sectionss = document.querySelectorAll('.left-txtt')
      Shery.imageEffect(".imggs", {
        config:{"uColor":{"value":false},"uSpeed":{"value":0.33,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":5,"range":[0,5]},"uFrequency":{"value":1.22,"range":[0,10]},"geoVertex":{"range":[1,64],"value":4.37},"zindex":{"value":"1","range":[-9999999,9999999]},"aspect":{"value":0.7058106584600384},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0.07,"range":[0,2]},"currentScroll":{"value":0.3375},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
       style: 4,
        // debug:true,
        slideStyle: (setScroll) => {
          sectionss.forEach(function (section, index) {
            let start, end;
            if (index === 0) {
              start = "0% center";
              end = "100% center";
            } else {
              start = "20% center";
              end = "70% center";
            }
            ScrollTrigger.create({
              trigger: section,
              start: start,
              end: end,
              markers: true,
              scroller:"#main",
              scrub: 0.3,
              onUpdate: function (prog) {
                console.log(prog);
                setScroll(prog.progress + index);

              },
            });
          });
        },
      });

      const preload = () => {

        let manager = new THREE.LoadingManager();
        manager.onLoad = function() { 
          const environment = new Environment( typo, particle );
        }
      
        var typo = null;
        const loader = new THREE.FontLoader( manager );
        const font = loader.load('https://res.cloudinary.com/dydre7amr/raw/upload/v1612950355/font_zsd4dr.json', function ( font ) { typo = font; });
        const particle = new THREE.TextureLoader( manager ).load( 'https://res.cloudinary.com/dfvtkoboz/image/upload/v1605013866/particle_a64uzf.png');
      
      }
      
      if ( document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll))
        preload ();
      else
        document.addEventListener("DOMContentLoaded", preload ); 
      
      class Environment {
      
        constructor( font, particle ){ 
      
          this.font = font;
          this.particle = particle;
          this.container = document.querySelector( '#magic' );
          this.scene = new THREE.Scene();
          this.createCamera();
          this.createRenderer();
          this.setup()
          this.bindEvents();
        }
    
        
      
        bindEvents(){
      
          window.addEventListener( 'resize', this.onWindowResize.bind( this ));
          
        }
      
        setup(){ 
      
          this.createParticles = new CreateParticles( this.scene, this.font,             this.particle, this.camera, this.renderer );
        }
      
        render() {
          
           this.createParticles.render()
           this.renderer.render( this.scene, this.camera )
        }
      
        createCamera() {
      
          this.camera = new THREE.PerspectiveCamera( 65, this.container.clientWidth /  this.container.clientHeight, 1, 10000 );
          this.camera.position.set( 0,0, 100 );
      
        }
      
        createRenderer() {
      
          this.renderer = new THREE.WebGLRenderer();
          this.renderer.setSize( this.container.clientWidth, this.container.clientHeight );
      
          this.renderer.setPixelRatio( Math.min( window.devicePixelRatio, 2));
      
          this.renderer.outputEncoding = THREE.sRGBEncoding;
          this.container.appendChild( this.renderer.domElement );
      
          this.renderer.setAnimationLoop(() => { this.render() })
      
        }
      
        onWindowResize(){
      
          this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
          this.camera.updateProjectionMatrix();
          this.renderer.setSize( this.container.clientWidth, this.container.clientHeight );
      
        }
      }
      
      class CreateParticles {
          
          constructor( scene, font, particleImg, camera, renderer ) {
          
              this.scene = scene;
              this.font = font;
              this.particleImg = particleImg;
              this.camera = camera;
              this.renderer = renderer;
    
              this.page1Element = document.querySelector('.contact-page');
        this.page1Offset = this.page1Element.getBoundingClientRect();
              
              this.raycaster = new THREE.Raycaster();
              this.mouse = new THREE.Vector2(-200, 200);
              
              this.colorChange = new THREE.Color();
      
              this.buttom = false;
      
              this.data = {
      
                  text: 'GET IN\nTOUCH',
                  amount: 1500,
                  particleSize: 1,
                  particleColor: 0xffffff,
                  textSize: 24,
                  area: 250,
                  ease: .05,
              }
      
              this.setup();
              this.bindEvents();
      
          }
      
      
          setup(){
      
              const geometry = new THREE.PlaneGeometry( this.visibleWidthAtZDepth( 100, this.camera ), this.visibleHeightAtZDepth( 100, this.camera ));
              const material = new THREE.MeshBasicMaterial( { color: 0x00ff00, transparent: true } );
              this.planeArea = new THREE.Mesh( geometry, material );
              this.planeArea.visible = false;
              this.createText();
      
          }
      
          bindEvents() {
      
              document.addEventListener( 'mousedown', this.onMouseDown.bind( this ));
              document.addEventListener( 'mousemove', this.onMouseMove.bind( this ));
              document.addEventListener( 'mouseup', this.onMouseUp.bind( this ));
              
          }
      
          onMouseDown(){
              
            const rect = this.page1Offset;
            this.mouse.x = (event.clientX - rect.left) / rect.width * 2 - 1;
            this.mouse.y = -(event.clientY - rect.top) / rect.height * 2 + 1;
      
              const vector = new THREE.Vector3( this.mouse.x, this.mouse.y, 0.5);
              vector.unproject( this.camera );
              const dir = vector.sub( this.camera.position ).normalize();
              const distance = - this.camera.position.z / dir.z;
              this.currenPosition = this.camera.position.clone().add( dir.multiplyScalar( distance ) );
              
              const pos = this.particles.geometry.attributes.position;
              this.buttom = true;
              this.data.ease = .01;
              
          }
      
          onMouseUp(){
      
              this.buttom = false;
              this.data.ease = .05;
          }
      
          onMouseMove( ) { 
      
            const rect = this.page1Offset;
            this.mouse.x = (event.clientX - rect.left) / rect.width * 2 - 1;
            this.mouse.y = -(event.clientY - rect.top) / rect.height * 2 + 1;
      
          }
      
          render( level ){ 
      
              const time = ((.001 * performance.now())%12)/12;
              const zigzagTime = (1 + (Math.sin( time * 2 * Math.PI )))/6;
      
              this.raycaster.setFromCamera( this.mouse, this.camera );
      
              const intersects = this.raycaster.intersectObject( this.planeArea );
      
              if ( intersects.length > 0 ) {
      
                  const pos = this.particles.geometry.attributes.position;
                  const copy = this.geometryCopy.attributes.position;
                  const coulors = this.particles.geometry.attributes.customColor;
                  const size = this.particles.geometry.attributes.size;
      
                  const mx = intersects[ 0 ].point.x;
                  const my = intersects[ 0 ].point.y;
                  const mz = intersects[ 0 ].point.z;
      
                  for ( var i = 0, l = pos.count; i < l; i++) {
      
                      const initX = copy.getX(i);
                      const initY = copy.getY(i);
                      const initZ = copy.getZ(i);
      
                      let px = pos.getX(i);
                      let py = pos.getY(i);
                      let pz = pos.getZ(i);
      
                      this.colorChange.setHSL( .5, 1 , 1 )
                      coulors.setXYZ( i, this.colorChange.r, this.colorChange.g, this.colorChange.b )
                      coulors.needsUpdate = true;
      
                      size.array[ i ]  = this.data.particleSize;
                      size.needsUpdate = true;
      
                      let dx = mx - px;
                      let dy = my - py;
                      const dz = mz - pz;
      
                      const mouseDistance = this.distance( mx, my, px, py )
                      let d = ( dx = mx - px ) * dx + ( dy = my - py ) * dy;
                      const f = - this.data.area/d;
      
                      if( this.buttom ){ 
      
                          const t = Math.atan2( dy, dx );
                          px -= f * Math.cos( t );
                          py -= f * Math.sin( t );
      
                          this.colorChange.setHSL( .5 + zigzagTime, 1.0 , .5 )
                          coulors.setXYZ( i, this.colorChange.r, this.colorChange.g, this.colorChange.b )
                          coulors.needsUpdate = true;
      
                          if ((px > (initX + 70)) || ( px < (initX - 70)) || (py > (initY + 70) || ( py < (initY - 70)))){
      
                              this.colorChange.setHSL( .15, 1.0 , .5 )
                              coulors.setXYZ( i, this.colorChange.r, this.colorChange.g, this.colorChange.b )
                              coulors.needsUpdate = true;
      
                          }
      
                      }else{
                      
                          if( mouseDistance < this.data.area ){
      
                              if(i%5==0){
      
                                  const t = Math.atan2( dy, dx );
                                  px -= .03 * Math.cos( t );
                                  py -= .03 * Math.sin( t );
      
                                  this.colorChange.setHSL( .15 , 1.0 , .5 )
                                  coulors.setXYZ( i, this.colorChange.r, this.colorChange.g, this.colorChange.b )
                                  coulors.needsUpdate = true;
      
                                  size.array[ i ]  =  this.data.particleSize /1.2;
                                  size.needsUpdate = true;
      
                              }else{
      
                                  const t = Math.atan2( dy, dx );
                                  px += f * Math.cos( t );
                                  py += f * Math.sin( t );
      
                                  pos.setXYZ( i, px, py, pz );
                                  pos.needsUpdate = true;
      
                                  size.array[ i ]  = this.data.particleSize * 1.3 ;
                                  size.needsUpdate = true;
                              }
      
                              if ((px > (initX + 10)) || ( px < (initX - 10)) || (py > (initY + 10) || ( py < (initY - 10)))){
      
                                  this.colorChange.setHSL( .15, 1.0 , .5 )
                                  coulors.setXYZ( i, this.colorChange.r, this.colorChange.g, this.colorChange.b )
                                  coulors.needsUpdate = true;
      
                                  size.array[ i ]  = this.data.particleSize /1.8;
                                  size.needsUpdate = true;
      
                              }
                          }
      
                      }
      
                      px += ( initX  - px ) * this.data.ease;
                      py += ( initY  - py ) * this.data.ease;
                      pz += ( initZ  - pz ) * this.data.ease;
      
                      pos.setXYZ( i, px, py, pz );
                      pos.needsUpdate = true;
      
                  }
              }
          }
      
          createText(){ 
      
              let thePoints = [];
      
              let shapes = this.font.generateShapes( this.data.text , this.data.textSize  );
              let geometry = new THREE.ShapeGeometry( shapes );
              geometry.computeBoundingBox();
          
              const xMid = - 0.5 * ( geometry.boundingBox.max.x - geometry.boundingBox.min.x );
              const yMid =  (geometry.boundingBox.max.y - geometry.boundingBox.min.y)/2.85;
      
              geometry.center();
      
              let holeShapes = [];
      
              for ( let q = 0; q < shapes.length; q ++ ) {
      
                  let shape = shapes[ q ];
      
                  if ( shape.holes && shape.holes.length > 0 ) {
      
                      for ( let  j = 0; j < shape.holes.length; j ++ ) {
      
                          let  hole = shape.holes[ j ];
                          holeShapes.push( hole );
                      }
                  }
      
              }
              shapes.push.apply( shapes, holeShapes );
      
              let colors = [];
              let sizes = [];
                          
              for ( let  x = 0; x < shapes.length; x ++ ) {
      
                  let shape = shapes[ x ];
      
                  const amountPoints = ( shape.type == 'Path') ? this.data.amount/2 : this.data.amount;
      
                  let points = shape.getSpacedPoints( amountPoints ) ;
      
                  points.forEach( ( element, z ) => {
                              
                      const a = new THREE.Vector3( element.x, element.y, 0 );
                      thePoints.push( a );
                      colors.push( this.colorChange.r, this.colorChange.g, this.colorChange.b);
                      sizes.push( 1 )
      
                      });
              }
      
              let geoParticles = new THREE.BufferGeometry().setFromPoints( thePoints );
              geoParticles.translate( xMid, yMid, 0 );
                      
              geoParticles.setAttribute( 'customColor', new THREE.Float32BufferAttribute( colors, 3 ) );
              geoParticles.setAttribute( 'size', new THREE.Float32BufferAttribute( sizes, 1) );
      
              const material = new THREE.ShaderMaterial( {
      
                  uniforms: {
                      color: { value: new THREE.Color( 0xffffff ) },
                      pointTexture: { value: this.particleImg }
                  },
                  vertexShader: document.getElementById( 'vertexshader' ).textContent,
                  fragmentShader: document.getElementById( 'fragmentshader' ).textContent,
      
                  blending: THREE.AdditiveBlending,
                  depthTest: false,
                  transparent: true,
              } );
      
              this.particles = new THREE.Points( geoParticles, material );
              this.scene.add( this.particles );
      
              this.geometryCopy = new THREE.BufferGeometry();
              this.geometryCopy.copy( this.particles.geometry );
              
          }
      
          visibleHeightAtZDepth ( depth, camera ) {
      
            const cameraOffset = camera.position.z;
            if ( depth < cameraOffset ) depth -= cameraOffset;
            else depth += cameraOffset;
      
            const vFOV = camera.fov * Math.PI / 180; 
      
            return 2 * Math.tan( vFOV / 2 ) * Math.abs( depth );
          }
      
          visibleWidthAtZDepth( depth, camera ) {
      
            const height = this.visibleHeightAtZDepth( depth, camera );
            return height * camera.aspect;
      
          }
      
          distance (x1, y1, x2, y2){
             
              return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
          }
      }

      



      





