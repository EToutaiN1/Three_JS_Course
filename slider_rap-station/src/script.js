import * as THREE from 'three'
import * as dat from 'lil-gui'
import { Vector2 } from 'three'
import { gsap } from 'gsap';
import vertexShader from './shaders/slide-period/vertex.glsl'
import fragmentShader from './shaders/slide-period/fragment.glsl'

/**
 * Base
 */

let speed = 0;
let position = 0;
let rounded = 0;

let clickedPlane;
let hoveredSlide;

let clickEnabled = true;
let scrollEnabled = true;

let alreadyClicked = false;

let isRepeated = false;



let logoAnimate = bodymovin.loadAnimation({

    container: document.getElementById('logo-animated'),
    
    path: '../animations/logo.json',
    
    renderer: 'svg',
    
    loop: true,
    
    autoplay: true,
    
    name: "Logo Animation",
    
});

let tunnerLoad = bodymovin.loadAnimation({

    container: document.getElementById('tunner-load'),
    
    path: '../animations/tunner-load.json',
    
    renderer: 'svg',
    
    loop: false,
    
    autoplay: false,
    
    name: "Tunner load Animation",
    
});

let tunnerNext = bodymovin.loadAnimation({

    container: document.getElementById('tunner-next'),
    
    path: '../animations/tunner-next.json',
    
    renderer: 'svg',
    
    loop: false,

    // loopTime: 1.5,
    
    autoplay: false,
    
    name: "Tunner next Animation",
    
});

let tunnerClick = bodymovin.loadAnimation({

    container: document.getElementById('tunner-click'),
    
    path: '../animations/tunner-click.json',
    
    renderer: 'svg',
    
    loop: false,
    
    autoplay: false,
    
    name: "Tunner click Animation",
});




// Debug
const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Textures
 */

const textureLoader = new THREE.TextureLoader()

const rapPeriodData = {
    0: {
        textureUrl: 'images/first-steps-of-hip-hop.jpg',
        color: '#6B84C9',
        titlePeriod: 'The first steps of hip-hop',
        period: "70"
    },
    1: {
        textureUrl: 'images/the-sounds-of-rap.jpg',
        color: '#6BC1C6',
        titlePeriod: 'The sounds of rap',
        period: "75"
    },
    2: {
        textureUrl: 'images/substance-before-form.jpg',
        color: '#6BC1C6',
        titlePeriod: 'Substance before form',
        period: "75"
    },
    3: {
        textureUrl: 'images/golden-age.jpg',
        color: '#6BC1C6',
        titlePeriod: 'Golden Age',
        period: "75"
    },
    4: {
        textureUrl: 'images/new-school.jpg',
        color: '#EFEF3C',
        titlePeriod: 'New School',
        period: "80"
    },
    5: {
        textureUrl: 'images/rap-explosion.jpg',
        color: '#FF7900',
        titlePeriod: 'Rap Explosion',
        period: "85"
    },
    6: {
        textureUrl: 'images/g-funk.jpg',
        color: '#DD2626',
        titlePeriod: 'G-Funk',
        period: "90"
    },
    7: {
        textureUrl: 'images/after-math.jpg',
        color: '#5EA53D',
        titlePeriod: 'After Math',
        period: "95"
    },
    8: {
        textureUrl: 'images/post-2000.jpg',
        color: '#8E4267',
        titlePeriod: 'Post 2000',
        period: "2000"
    },
}



/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

// Define initial aspect ratio
let aspectRatio = 1.78;

// Geometry
const geometry = new THREE.PlaneGeometry(aspectRatio, 1, 32, 32)

// console.log(geometry);

let slides = []

for (let i = 0; i < Object.keys(rapPeriodData).length; i++) {
    const periodData = rapPeriodData[i];
    const texture = textureLoader.load(periodData.textureUrl);
    const material = new THREE.ShaderMaterial({
        side: THREE.DoubleSide,
        transparent: true,
        uniforms: {
            uTexture: { value: texture},
            uFilterIntensity: { value: 1.0},
            uRepeat: { value: 0.5},
            uOffset: { value: new THREE.Vector2(0.25, 0.25)},
        },
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
    })

    
    const slide = new THREE.Mesh(
        geometry,
        material
    )

    slide.position.set(0, 0, 0)
    // slide.position.x = i * (aspectRatio + margin);


    slides.push(
        {
            slide,
            index: i,
            dist:0
        }
    )

    scene.add(slide)
}

const margin = 3

const totalWidth = (aspectRatio + margin) * rapPeriodData.length - margin;

const updateSlider = () => {
    slides.forEach(o => {
        // o.slide.position.x = (margin * o.index + position + wholeWidthMargin) % wholeWidthMargin - 3 * margin
        o.slide.position.x = (margin * o.index + position) 
    })
}

const leftEdge = -aspectRatio / 2;
const rightEdge = -24 + aspectRatio;

const scrollEvent = (e) => {
    
    const isAtLeftEdge = leftEdge < position;
    if (isAtLeftEdge) {
        if (e.deltaY > 0) {
            // Scrolling down
            scrollEnabled = true;
        }else{
            gsap.to(camera.position, {
                duration: 2.5,
                x: slides[0].slide.position.x,
                ease: "power3.out",
            });
            scrollEnabled = false;
        }
    }
    // console.log(aspectRatio);
    const isAtRightEdge = rightEdge > position;
    
    if (isAtRightEdge) {
        if (e.deltaY < 0) {
            // Scrolling down
            scrollEnabled = true;
        }else {
            gsap.to(camera.position, {
                duration: 2.5,
                x: slides[slides.length - 1].slide.position.x,
                ease: "power3.out",
            });
            scrollEnabled = false;
        }
    }

    if (!isAtLeftEdge && !isAtRightEdge) {
        scrollEnabled = true;
    }

    if (scrollEnabled){
        // Otherwise, scroll normally
        speed += -e.deltaY * 0.0003;
        
        // console.log(Math.abs(position));

        // Get the current vertical scroll position
        // const scrollPosition = Math.abs(position);

        // console.log(tunnerNext);
        // console.log(scrollPosition);

        // // Calculate the desired progress of the tunnerNext animation
        // const animationDuration = tunnerNext.totalFrames / tunnerNext.frameRate;
        // const animationProgress = Math.min((scrollPosition / animationDuration), 1);
        // const animationFrame = Math.round(animationProgress * tunnerNext.totalFrames);

        // // Set the current frame of the tunnerNext animation
        // tunnerNext.goToAndStop(animationFrame);
    }

    if(!clickEnabled){
        window.addEventListener('wheel', scrollWhilePlaneClicked)
    }
};  



window.addEventListener('wheel', scrollEvent)

window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight
    
    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()
    
    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.set(0, 0, 1.6)
scene.add(camera)

// const cameraHelper = new THREE.CameraHelper(camera);
// scene.add(cameraHelper);

// gui.add(camera.position, 'z').min(-10).max(+10)
// gui.add(camera.position, 'x').min(-10).max(+10)
// gui.add(camera.position, 'y').min(-10).max(+10)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setClearColor(0x212121);

const raycaster = new THREE.Raycaster();

const mouse = new THREE.Vector2();

// Manage the hover effect on the different slides
const hoverSlide = (event) =>{
    // console.log('mouseHover');

    // slides.forEach((o) => {
    //     // Calculate mouse position in normalized device coordinates (-1 to +1)
    //     mouse.x = (event.clientX / sizes.width) * 2 - 1;
    //     mouse.y = -(event.clientY / sizes.height) * 2 + 1;
        
    //     // Raycast from camera to mouse position
    //     raycaster.setFromCamera(mouse, camera);
    //     const intersects = raycaster.intersectObjects(scene.children);

        
    //     if(intersects.length > 0)
    //     {
    //         if (intersects[0].object.geometry.isBufferGeometry){
    //             hoveredSlide = intersects[0].object
    //             // console.log(hoveredSlide.material);
    //             gsap.to(hoveredSlide.material.uniforms.filterIntensity, {
    //                 value: 0,
    //                 duration: 1.5,
    //                 ease: 'power3.out'
    //             })
    //         }
    //     }
    // })
}

// Handle plane click
const handlePlaneClick = (event) => {

    if(clickEnabled){

        // Hide the tunnerNext element
        tunnerNextItem.style.display = 'none';

        // Show the tunnerClick element
        tunnerClickItem.style.display = 'block';

        // Play the tunnerClick animation
        tunnerClick.setDirection(1);
        tunnerClick.play();
        
        // Calculate mouse position in normalized device coordinates (-1 to +1)
        mouse.x = (event.clientX / sizes.width) * 2 - 1;
        mouse.y = -(event.clientY / sizes.height) * 2 + 1;
        
        // Raycast from camera to mouse position
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(scene.children);
        // console.log(intersects[0].object);
        if(intersects.length > 0)
        {
            if (intersects[0].object.geometry.isBufferGeometry){
                clickEnabled = false
                // console.log('you clicked on the plane :', intersects[0].object.id % 9);
                clickedPlane = intersects[0].object;
                
                // console.log(clickedPlane);
                
                // Increase clicked plane size
                gsap.to(clickedPlane.scale, {
                    x: 1.2,
                    y: 1.2,
                    duration: 1.5,
                    ease: 'power3.out'
                });

                // Increase clicked plane position
                gsap.to(clickedPlane.position, {
                    z: 1,
                    duration: 1,
                    ease: 'power3.out'
                });

                // Animate the camera to center on the clicked plane
                const distance = clickedPlane.position.x - position;
                // console.log(distance);
                // console.log(clickedPlane.position.x);
                
                gsap.to(camera.position, {
                    duration: 1.5,
                    x: clickedPlane.position.x,
                    ease: "power3.out",
                });

                // Decrease other slides size and update their positions
                slides.forEach((p) => {
                    if (p.slide !== clickedPlane) {
                        gsap.to(p.slide.scale, {
                            x: 0.5,
                            y: 0.5,
                            z: 1,
                            duration: 1.5,
                            ease: 'power3.out'
                        });
                        gsap.to(p.slide.position, {
                            x: (margin * p.index) - (margin * clickedPlane.id),
                            y: 0,
                            z: 0,
                            duration: 1.5,
                            ease: 'power3.out'
                        });
                    }
                })
                
                // Move clicked plane to center
                gsap.to(clickedPlane.position, {
                    x: 0,
                    y: 0,
                    z: 0,
                    duration: 1.5,
                    ease: 'power3.out'
                });

                // Animate the color change of HTML elements
                // gsap.to('.navlink', {
                //     color: clickedSlideData.color,
                //     duration: 1.5,
                //     ease: "power3.out"
                // });
                
                // gsap.to('p', {
                //     color: clickedSlideData.color,
                //     duration: 1.5,
                //     ease: "power3.out"
                // });
                
                // // Animate the color change of the Lottie animation elements
                // animation.addEventListener('DOMLoaded', function() {
                //     var layer = animation.layers.find(l => l.nm === 'myLayerName');
                //     var tl = gsap.timeline({paused: true});
                //     tl.to(layer, {duration: 1.5, colorProps: {fill: clickedSlideData.color}});
                //     tl.restart();
                // });

                // Toggle the texture repeat and offset values
                const repeatValue = isRepeated ? 0.5 : 1;
                const offsetValue = isRepeated ? new THREE.Vector2(0.25, 0.25) : new THREE.Vector2(0, 0);

                
                // console.log(clickedPlane.material.uniforms.uRepeat);
                
                // Animate the texture repeat and offset values
                gsap.to(clickedPlane.material.uniforms.uRepeat, {
                    value: repeatValue,
                    duration: 1,
                    ease: "power2.out"
                });
                // console.log(clickedPlane.material.uniforms.uRepeat);
                
                gsap.to(clickedPlane.material.uniforms.uOffset.value, {
                    x: offsetValue.x,
                    y: offsetValue.y,
                    duration: 1,
                    ease: "power2.out"
                });
                
                isRepeated = !isRepeated;
                // Toggle the repeat flag
                // console.log(isRepeated);

            }

            // Stop listening to click events for the different slides
            window.removeEventListener('click', handlePlaneClick);
            console.log('plane click event disabled');
    
            // Start listening to click events outside of the clicked plane
            window.addEventListener('click', handleOutsideClick);
            console.log('outside click event enabled');
        }


    }
};

window.addEventListener('click', handlePlaneClick)

const scrollWhilePlaneClicked = () => {

    // Play the tunnerClick animation
    // Play the animation in reverse
    tunnerClick.setDirection(-1);
    tunnerClick.play();

    // Delay hiding the tunnerClickItem element by 2 seconds
    setTimeout(() => {
        // Hide the tunnerClick element
        tunnerClickItem.style.display = 'none';
    
        // Show the tunnerNext element
        tunnerNextItem.style.display = 'block';
    }, 1300);
    
    // Reset slides size and position
    slides.forEach((p) => {
        gsap.to(p.slide.scale, {
            x: 1,
            y: 1,
            duration: 2.5,
            ease: 'power3.out'
        });

        // console.log(p.slide.i);
        
        gsap.to(p.slide.position, {
            z: 0,
            // x: (2.2 * p.slide) % (2.2 * rapPeriodData.length) - 2.2 * rapPeriodData.length / 2,
            duration: 2.5,
            ease: 'power3.out' 
        }); 
    }); 

    // Toggle the texture repeat and offset values
    const repeatValue = isRepeated ? 0.5 : 1;
    const offsetValue = isRepeated ? new THREE.Vector2(0.25, 0.25) : new THREE.Vector2(0, 0);

    // Animate the texture repeat and offset values
    // console.log(clickedPlane.material.uniforms.uRepeat);
    gsap.to(clickedPlane.material.uniforms.uRepeat, {
        value: repeatValue,
        duration: 1,
        ease: "power2.out"
    });
    // console.log(clickedPlane.material.uniforms.uRepeat);
    
    gsap.to(clickedPlane.material.uniforms.uOffset.value, {
        x: offsetValue.x,
        y: offsetValue.y,
        duration: 1,
        ease: "power2.out"
    });
    
    clickEnabled = true
    clickedPlane = null
    
    // Toggle the repeat flag
    isRepeated = !isRepeated;

    // Start listening to click events outside of the clicked plane
    window.addEventListener('click', handlePlaneClick)
    console.log('Out side : plane click event enabled');
    
    // Stop listening to click events outside of the clicked plane
    window.removeEventListener('click', handleOutsideClick);
    console.log('Out side : outside click event disabled');
}

// Handle click outside of clicked plane
const handleOutsideClick = (event) => {
    
    if (!clickEnabled) {
        // console.log(clickedPlane);

        // Play the tunnerClick animation
        // Play the animation in reverse
        tunnerClick.setDirection(-1);
        tunnerClick.play() // Play the animation in reverse

        setTimeout(() => {
            // Hide the tunnerClick element
            tunnerClickItem.style.display = 'none';
        
            // Show the tunnerNext element
            tunnerNextItem.style.display = 'block';
        }, 1300);
        
        // Calculate mouse position in normalized device coordinates (-1 to +1)
        mouse.x = (event.clientX / sizes.width) * 2 - 1;
        mouse.y = -(event.clientY / sizes.height) * 2 + 1;
        
        // Raycast from camera to mouse position
        raycaster.setFromCamera(mouse, camera);
        let intersectsOutsideClick = raycaster.intersectObjects(scene.children);
        // console.log(intersectsOutsideClick);

            if(intersectsOutsideClick.length > 0 && intersectsOutsideClick[0].object == clickedPlane){
                alreadyClicked = true;
                console.log('plane already clicked');
                // intersectsOutsideClick = []
            }
            console.log('intersect')
            console.log(intersectsOutsideClick);

            // Check if the clicked plane was already clicked
            if (intersectsOutsideClick.length == 0 || (!(intersectsOutsideClick[0].object == clickedPlane))) {
                console.log('handle outside click');

                // Reset slides size and position
                slides.forEach((p) => {
                    gsap.to(p.slide.scale, {
                        x: 1,
                        y: 1,
                        duration: 1.5,
                        ease: 'power3.out'
                    });

                    // console.log(p.slide.i);
                    
                    gsap.to(p.slide.position, {
                        z: 0,
                        // x: (2.2 * p.slide) % (2.2 * rapPeriodData.length) - 2.2 * rapPeriodData.length / 2,
                        duration: 1.5,
                        ease: 'power3.out' 
                    }); 
                }); 

                // Toggle the texture repeat and offset values
                const repeatValue = isRepeated ? 0.5 : 1;
                const offsetValue = isRepeated ? new THREE.Vector2(0.25, 0.25) : new THREE.Vector2(0, 0);

                // Animate the texture repeat and offset values
                console.log(clickedPlane.material.uniforms.uRepeat);
                gsap.to(clickedPlane.material.uniforms.uRepeat, {
                    value: repeatValue,
                    duration: 1,
                    ease: "power2.out"
                });
                console.log(clickedPlane.material.uniforms.uRepeat);
                
                gsap.to(clickedPlane.material.uniforms.uOffset.value, {
                    x: offsetValue.x,
                    y: offsetValue.y,
                    duration: 1,
                    ease: "power2.out"
                });
                
                clickEnabled = true
                clickedPlane = null
                
                // Toggle the repeat flag
                isRepeated = !isRepeated;

                // Start listening to click events outside of the clicked plane
                window.addEventListener('click', handlePlaneClick)
                console.log('Out side : plane click event enabled');
                
                // Stop listening to click events outside of the clicked plane
                window.removeEventListener('click', handleOutsideClick);
                console.log('Out side : outside click event disabled');
            }
    }
};

const tunnerLoadItem = document.querySelector('#tunner-load')
const tunnerNextItem = document.querySelector('#tunner-next')
const tunnerClickItem = document.querySelector('#tunner-click')

// Wait for the page to fully load
window.addEventListener('load', () => {

    // Play the tunnerLoad animation
    tunnerLoad.play();

    setTimeout(() => {
        // Hide the tunnerLoad element
        tunnerLoadItem.style.display = 'none';

        // Show the tunnerNext element
        tunnerNextItem.style.display = 'block';

        // Play the tunnerNext animation
        tunnerNext.play();
    }, 2000);
});

// create a timeline for the slide animations
const timeline = gsap.timeline({ delay: 2.5 });

// animate each slide
slides.forEach((o) => {
  // set the initial position of the slide
  gsap.set(o.slide.position, { y: -2 });

  // animate the slide to its final position
  timeline.to(o.slide.position, {
    duration: 2,
    y: 0,
    ease: "power4.out",
  }, "-=1.5"); // start the animation 0.6s before the end of the previous animation
});

timeline.play()



window.addEventListener('mousemove', hoverSlide)
/**
 * Animate
 */
const tick = () =>
{

    position += speed
    speed *= 0.9

    // console.log(speed);

    rounded = Math.round(position)

    let diff = (rounded - position)

    position += Math.sign(diff)*Math.pow(Math.abs(diff), 0.96) * 0.015

    updateSlider()

    // Render
    renderer.render(scene, camera)
    // camera.lookAt(scene.position)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()