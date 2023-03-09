import * as THREE from 'three'
import * as dat from 'lil-gui'
// import * as bodymovin from 'lottie-web'
import { Vector2 } from 'three'
import { gsap } from 'gsap';
import vertexShader from './shaders/slide-period/vertex.glsl'
import fragmentShader from './shaders/slide-period/fragment.glsl'
import { LottieInteractive } from 'lottie-interactive';


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

// Set the initial progress of the animation to 0
let animationTunnerProgress = 0;

let clickedId;

const pageWrapper = document.querySelector('.section')

const musicSound = document.getElementById('music-sound');

const musicBlock = document.querySelector('.music-block')
const playBlock = document.getElementById('play');
const pauseBlock = document.getElementById('pause');

const titleElement = document.getElementById('title-period');

const tunnerBox = document.getElementById('tunner-box')
const tunnerText = document.getElementById('tunner-text')

const discoverBlock = document.querySelector('.discover-block')
const discoverLoadItem = document.querySelector('#discover-load')
const discoverHoverItem = document.querySelector('#discover-hover')

let animation = []

let logoAnimate = bodymovin.loadAnimation({

    container: document.getElementById('logo-animated'),
    
    path: '../animations/logo.json',
    
    renderer: 'svg',
    
    loop: true,
    
    autoplay: true,
    
    name: "Logo Animation"
    
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

let playMusic = bodymovin.loadAnimation({

    container: document.getElementById('play'),
    
    path: '../animations/play.json',
    
    renderer: 'svg',
    
    loop: false,
    
    autoplay: false,
    
    name: "Play Music Animation",
});

let pauseMusic = bodymovin.loadAnimation({

    container: document.getElementById('pause'),
    
    path: '../animations/pause.json',
    
    renderer: 'svg',
    
    loop: false,
    
    autoplay: false,
    
    name: "Pause Music Animation",
});

let discoverLoad = bodymovin.loadAnimation({
    
    container: document.getElementById('discover-load'),
    
    path: '../animations/discover-load.json',
    
    renderer: 'svg',
    
    loop: false,
    
    autoplay: false,
    
    name: "Discover load Animation"
});

let discoverHover = bodymovin.loadAnimation({
    
    container: document.getElementById('discover-hover'),
    
    path: '../animations/discover-hover.json',
    
    renderer: 'svg',
    
    loop: false,
    
    autoplay: false,
    
    name: "Discover hover Animation"
});

// let starAnimation = bodymovin.loadAnimation({

//     container: document.querySelector('.page-wrapper'),
    
//     path: '../animations/star.json',
    
//     renderer: 'svg',
    
//     loop: true,
    
//     autoplay: true,
    
//     name: "Star Animation",
// });

// for (let s = 0; s < 30; s++) {
//     let container = document.createElement('div');
//     container.classList.add('star-container');
//     pageWrapper.appendChild(container);

//     // Add the star animation to the container
//     let starAnimation = bodymovin.loadAnimation({
//         container: container,
//         path: '../animations/star.json',
//         renderer: 'svg',
//         loop: true,
//         autoplay: true,
//         name: "Star Animation"
//     });

//     // Set a random position and scale for the animation
//     let xPos = Math.random() * pageWrapper.clientWidth;
//     let yPos = Math.random() * pageWrapper.clientHeight;
//     let scale = Math.random() * 0.5 + 0.5; // Random scale between 0.5 and 1.0
//     console.log(container);
//     container.style.transform = `translate(${xPos}px, ${yPos}px) scale(${scale})`;
    
//     // // Set a random color for the animation
//     // let color = Math.random() < 0.5 ? '#fff' : '#f00'; // Randomly choose between #fff and #f00
//     // starAnimation.renderer.elements[0].setStyle('fill', color);
// }

animation.push(logoAnimate, tunnerLoad, tunnerNext, tunnerClick, playMusic, pauseMusic)

console.log(LottieInteractive);

// let lottieInteractives = [];
// animation.forEach(function(anim) {
//   let lottieInteractive = LottieInteractive.fromAnimation(anim, anim.container);
//   lottieInteractives.push(lottieInteractive);
// });


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
        firstTitlePeriod: 'The first steps',
        secondTitlePeriod: 'of hip-hop',
        period: "70'",
        urlPeriod: 'raps-station.webflow.io/first-step-of-hip-hop'
    },
    1: {
        textureUrl: 'images/the-sounds-of-rap.jpg',
        color: '#6BC1C6',
        firstTitlePeriod: 'The sounds',
        secondTitlePeriod: 'of rap',
        period: "75'",
        urlPeriod: 'raps-station.webflow.io/the-sounds-of-rap'
    },
    2: {
        textureUrl: 'images/substance-before-form.jpg',
        color: '#6BC1C6',
        firstTitlePeriod: 'Substance',
        secondTitlePeriod: 'before form',
        period: "75'",
        urlPeriod: 'raps-station.webflow.io/substance-before-form'
    },
    3: {
        textureUrl: 'images/golden-age.jpg',
        color: '#6BC1C6',
        firstTitlePeriod: 'Golden Age',
        secondTitlePeriod: '',
        period: "75'",
        urlPeriod: 'raps-station.webflow.io/golden-age'
    },
    4: {
        textureUrl: 'images/new-school.jpg',
        color: '#EFEF3C',
        firstTitlePeriod: 'New School',
        secondTitlePeriod: '',
        period: "80'",
        urlPeriod: 'raps-station.webflow.io/new-school'
    },
    5: {
        textureUrl: 'images/rap-explosion.jpg',
        color: '#FF7900',
        firstTitlePeriod: 'Rap Explosion',
        secondTitlePeriod: '',
        period: "85'",
        urlPeriod: 'raps-station.webflow.io/rap-explosion'
    },
    6: {
        textureUrl: 'images/g-funk.jpg',
        color: '#DD2626',
        firstTitlePeriod: 'G-Funk',
        secondTitlePeriod: '',
        period: "90'",
        urlPeriod: 'raps-station.webflow.io/g-funk'
    },
    7: {
        textureUrl: 'images/after-math.jpg',
        color: '#5EA53D',
        firstTitlePeriod: 'After Math',
        secondTitlePeriod: '',
        period: "95'",
        urlPeriod: 'raps-station.webflow.io/after-math'
    },
    8: {
        textureUrl: 'images/post-2000.jpg',
        color: '#8E4267',
        firstTitlePeriod: 'Post 2000',
        secondTitlePeriod: '',
        period: "00'",
        urlPeriod: 'raps-station.webflow.io/post-2000'
    },
}

musicBlock.addEventListener('click', ()=> {
    musicSound.classList.toggle('active')
    if(musicSound.classList.contains('active')) {
        pauseMusic.setDirection(-1)
        pauseMusic.play()
        setTimeout(() => {
            playBlock.style.display = 'block';
            pauseBlock.style.display = 'none';
        }, 1800);
        setTimeout(() => {
            playMusic.setDirection(1)
            playMusic.play()
        }, 1900);
        console.log('play');
        // playAudio(musicSound);
    } else {
        console.log('pause');
        playMusic.setDirection(-1)
        playMusic.play()
        setTimeout(() => {
            playBlock.style.display = 'none';
            pauseBlock.style.display = 'block';
        }, 1800);
        setTimeout(() => {
            pauseMusic.setDirection(1)
            pauseMusic.play()
        }, 1900);
        // pauseAudio(musicSound);
    }
})

function playAudio(sound) {
sound.play();
}

function pauseAudio(sound) {
sound.pause();
}

/**
 * Initialise text tunner
 */



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
        speed -= e.deltaY * 0.00015;

        // Get the current vertical scroll position
        // const scrollPosition = Math.round(Math.abs(position));

        let direction = e.deltaY > 0 ? 1 : -1;

        console.log(e.deltaY);

        slides.forEach(s => {
            console.log(Math.round(s.slide.position.x))
            if(Math.round(s.slide.position.x) == 0){
                console.log('position 0');
                // Play the tunnerNext animation
                if(direction == 1){
                    tunnerNext.goToAndStop(0)
                    tunnerNext.setDirection(1)
                    tunnerNext.setSpeed(speed); 
                    tunnerNext.play();
                }
                if(direction == -1){
                    tunnerNext.goToAndStop(0)
                    tunnerNext.setDirection(-1)
                    tunnerNext.setSpeed(speed); 
                    tunnerNext.play();
                }
                
            }
        });
        
        // console.log(Math.abs(position));

        // if (e.deltaY != 0) {
        //     // Calculate the direction of the scroll (positive or negative)
        //     let direction = e.deltaY > 0 ? 1 : -1;

        //     console.log(e.deltaY);
        //     console.log(position);
        //     // Calculate the amount of the scroll (as a fraction of the viewport height)
        //     let scrollAmount = Math.abs(e.deltaY) / sizes.height;
        //     // Update the animation's progress based on the direction and amount of the scroll
        //     animationTunnerProgress += direction * scrollAmount;
        //     // Clamp the animation's progress to the range [0, 1]
        //     animationTunnerProgress = Math.min(1, Math.max(0, animationTunnerProgress));
        //     // Set the animation's progress using the `setanimationTunnerProgress` method
        //     tunnerNext.goToAndStop(animationTunnerProgress * tunnerNext.getDuration(true), true);
        //   }

        // Calculate the desired progress of the tunnerNext animation
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

// Handle plane click
const handlePlaneClick = (event) => {

    if(clickEnabled){
        
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

                clickedId = clickedPlane.material.id

                // Get the title period for this slide
                const firstTitlePeriod = rapPeriodData[clickedId-1].firstTitlePeriod;
                const secondTitlePeriod = rapPeriodData[clickedId-1].secondTitlePeriod;

                // Update the content of the H1 element
                titleElement.innerHTML = firstTitlePeriod + '<br>' + secondTitlePeriod;

                titleElement.classList.add('show');

                // Get the title period for this slide
                const periodTunnerText = rapPeriodData[clickedId- 1].period

                // Update the content of the H1 element
                tunnerText.innerHTML = periodTunnerText

                // Get the URL for this slide
                const url = rapPeriodData[clickedId-1].urlPeriod;

                // console.log(url);

                // Update the link for the button
                discoverBlock.href = url;

                // Hide the tunnerNext element
                tunnerNextItem.style.display = 'none';

                // Show the tunnerClick element
                tunnerClickItem.style.display = 'block';

                // Play the tunnerClick animation
                tunnerClick.setDirection(1);
                tunnerClick.play();

                discoverLoadItem.style.display = 'block'

                discoverLoad.setDirection(1);
                discoverLoad.play();

                setTimeout(() => {
                    discoverLoadItem.style.display = 'none';
                    discoverHoverItem.style.display = 'block';
                }, 2000);

                discoverBlock.addEventListener('mouseenter', () => {
                    discoverLoadItem.style.display = 'none';
                    discoverHoverItem.style.display = 'block';
                    discoverHover.setDirection(1)
                    discoverHover.play()
                    console.log('play');
                })

                discoverBlock.addEventListener('mouseleave', () => {
                    discoverHover.setDirection(-1)
                    discoverHover.play()
                    setTimeout(()=>{
                        discoverLoadItem.style.display = 'block';
                        discoverHoverItem.style.display = 'none';
                    }, 700)
                })

                
                console.log(clickedPlane);
                
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
                gsap.to('.navlink a', {
                    color: rapPeriodData[clickedId - 1].color,
                    duration: 1,
                    ease: "power3.out"
                });
                
                gsap.to('p', {
                    color: rapPeriodData[clickedId - 1].color,
                    duration: 1,
                    ease: "power3.out"
                });
                
                // Animate the color change of the Lottie animation elements


                
                animation.forEach((anim)=>{
                    // let layer = animation[anim]
                    // var tl = gsap.timeline({paused: true});
                    // tl.to(layer, {duration: 1.5, colorProps: {fill: rapPeriodData[clickedId - 1].color}});

                    // // Get the hierarchy object of the animation
                    // const hierarchy = anim.getHierarchy();
    
                    // // Iterate over the shapes in the hierarchy
                    // hierarchy.forEach((shape) => {
                    // // Get the paths in the shape
                    //     const paths = shape.paths;
        
                    //     // Iterate over the paths in the shape
                    //     paths.forEach((path) => {
                    //         // Set the stroke color of the path
                    //         path.stroke = rapPeriodData[clickedId - 1].color;
                    //     });
                    // });

                    // Change the color of all paths
                    // for (let i = 0; i < anim.renderer.elements.length; i++) {
                    //     const element = anim.renderer.elements[i];
                    //     console.log(element.shapes[0]);
                    //     if (element.shapes) {
                    //         for (let j = 0; j < element.shapes.length; j++) {
                    //             const path = element.shapes[j];
                    //             path.updateRender = true;
                    //             path.fill = '#f00'; // replace this with the desired color
                    //             // path.stroke = '#f00'; // replace this with the desired color
                    //         }
                    //     }
                    // }
                    // const paths = anim.renderer.elements;
                    // const pathKeys = Object.keys(paths);

                    // // Loop through the path elements and modify their stroke color
                    // pathKeys.forEach(key => {
                    //     paths[key].updateRenderConfig({
                    //         stroke: '#ff0000'
                    //     });
                    // });

                    // tl.restart();
                })

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

            // tunner text

            tunnerBox.style.top = '-20%';

            setTimeout(() => {
                // Stop listening to click events for the different slides
                window.removeEventListener('click', handlePlaneClick);
                console.log('plane click event disabled');
                
                // Start listening to click events outside of the clicked plane
                window.addEventListener('click', handleOutsideClick);
                console.log('outside click event enabled');
            }, 1000);
        }


    }
};

// console.log(document.querySelectorAll('.stroke-color'));

const scrollWhilePlaneClicked = () => {

    // Play the tunnerClick animation
    // Play the animation in reverse
    tunnerClick.setDirection(-1);
    tunnerClick.play();

    titleElement.classList.remove('show');

    // Delay hiding the tunnerClickItem element by 2 seconds
    setTimeout(() => {
        // Hide the tunnerClick element
        tunnerClickItem.style.display = 'none';
    
        // Show the tunnerNext element
        tunnerNextItem.style.display = 'block';
    }, 1300);
                
    discoverLoadItem.style.display = 'block';

    discoverLoad.setDirection(-1)
    discoverLoad.play()

    setTimeout(() => {
        discoverLoadItem.style.display = 'none';
        discoverBlock.removeEventListener('mouseenter')
        discoverBlock.removeEventListener('mouseleave')
    }, 2000);
    
    // Animate the color change of HTML elements
    gsap.to('.navlink a', {
        color: '#F2F2F2',
        duration: 1,
        ease: "power3.out"
    });
    
    gsap.to('p', {
        color: '#F2F2F2',
        duration: 1,
        ease: "power3.out"
    });

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

    tunnerBox.style.top = '-60%';

    clickEnabled = true
    clickedPlane = null
    
    // Toggle the repeat flag
    isRepeated = !isRepeated;

    setTimeout(() => {
        // Start listening to click events outside of the clicked plane
        window.addEventListener('click', handlePlaneClick)
        console.log('Out side : plane click event enabled');
        
        // Stop listening to click events outside of the clicked plane
        window.removeEventListener('click', handleOutsideClick);
        console.log('Out side : outside click event disabled');
    }, 1300);
}

// Handle click outside of clicked plane
const handleOutsideClick = (event) => {
    
    if (!clickEnabled) {
        // console.log(clickedPlane);
        
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
                // Play the tunnerClick animation
                tunnerClick.setDirection(-1);
                tunnerClick.play() // Play the animation in reverse

                setTimeout(() => {
                    // Hide the tunnerClick element
                    tunnerClickItem.style.display = 'none';
                
                    // Show the tunnerNext element
                    tunnerNextItem.style.display = 'block';
                }, 1300);

                discoverLoadItem.style.display = 'block';

                discoverLoad.setDirection(-1)
                discoverLoad.play()

                setTimeout(() => {
                    discoverLoadItem.style.display = 'none';
                    discoverBlock.removeEventListener('mouseenter')
                    discoverBlock.removeEventListener('mouseleave')
                }, 2000);

                titleElement.classList.remove('show');

                console.log('handle outside click');

                // Animate the color change of HTML elements
                gsap.to('.navlink a', {
                    color: '#F2F2F2',
                    duration: 1,
                    ease: "power3.out"
                });
                
                gsap.to('p', {
                    color: '#F2F2F2',
                    duration: 1,
                    ease: "power3.out"
                });

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

                tunnerBox.style.top = '-60%';
                
                clickEnabled = true
                clickedPlane = null
                
                // Toggle the repeat flag
                isRepeated = !isRepeated;

                setTimeout(() => {
                    // Start listening to click events outside of the clicked plane
                    window.addEventListener('click', handlePlaneClick)
                    console.log('Out side : plane click event enabled');
                    
                    // Stop listening to click events outside of the clicked plane
                    window.removeEventListener('click', handleOutsideClick);
                    console.log('Out side : outside click event disabled');
                }, 1300);
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

    // Play the music animation
    playMusic.setDirection(1)
    playMusic.play()

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


    setTimeout(() => {
        // Hide the tunnerLoad element
        tunnerLoadItem.style.display = 'none';

        // Show the tunnerNext element
        tunnerNextItem.style.display = 'block';

        
    window.addEventListener('click', handlePlaneClick)
    }, 1300);
});

// window.addEventListener('mousemove', hoverSlide)
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