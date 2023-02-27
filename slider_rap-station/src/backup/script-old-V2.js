import * as THREE from 'three'
import * as dat from 'lil-gui'
import { Group, Vector2 } from 'three'
import gsap from 'gsap';


/**
 * Base
 */

let scroll = 0
let scrollTarget = 0
let currentScroll = 0
let isZooming = false
let zoomRatio = 0.5
// let targetRatio = 0.5
// let zoomTarget = {x: 0, y: 0}
// let isScrollEnabled = true
// let isClickEnabled = true

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

const textures = [
    textureLoader.load('images/post-2000.jpg'),
    textureLoader.load('images/after-math.jpg'),
    textureLoader.load('images/g-funk.jpg'),
    textureLoader.load('images/default-visual.jpg'),
    textureLoader.load('images/travis-scott.jpg')
]

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

// Define the aspect ratio
// const aspectRatio = 1.78 / 1;

// Geometry
const geometry = new THREE.PlaneGeometry(1.78, 1, 32, 32)

let planes = []

for (let i = 0; i < textures.length; i++) {
    const material = new THREE.MeshBasicMaterial({
        map: textures[i % textures.length],
        side: THREE.DoubleSide
    })
    let slide = new THREE.Mesh(
        geometry,
        material
    )
    planes.push(
        {
            slide,
            index: i,
            originalScale: slide.scale.clone(),
            targetScale: slide.scale.clone(),
            zoomRatio: 0.5,
            isZoomed: false,
            planeIsClicked: false
        }
    )

    scene.add(slide)
    
}

let clickedPlane = {}

const scrollEvent = () => {
    document.addEventListener('mousewheel', (e)=>{
        scrollTarget = e.wheelDelta * 0.3;
        if (clickedPlane !== null) {
            clickedPlane.isClicked = false
            clickedPlane = null
            planes.forEach(function(plane) {
                gsap.to(plane.slide.scale, {
                x: 1,
                duration: 0.8,
                ease: "power4.out"
                })
                gsap.to(plane.slide.scale, {
                y: 1,
                duration: 0.8,
                ease: "power4.out"
                })
                gsap.to(plane.slide.position, {
                x: 2.2 * plane.index - scrollTarget,
                duration: 0.8,
                ease: "power4.out"
                })
            })
        } else {
            planes.forEach(function(plane) {
                gsap.to(plane.slide.position, {
                    x: 2.2 * plane.index - scrollTarget,
                    duration: 0.8,
                    ease: "power4.out"
                })
            })
        }
    })
}

scrollEvent()

const margin = 1.8
const wholeWidth = margin * textures.length

const updateSlider = () => {
    // console.log('update slider');

    planes.forEach(o => {
        o.slide.position.x = (margin * o.index + currentScroll + 4069 * wholeWidth) % wholeWidth - 3 * margin
        o.slide.scale.set(o.targetScale.x * o.zoomRatio, o.targetScale.y * o.zoomRatio, 1)
    })
}

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
camera.position.set(0, 0, 1)
scene.add(camera)

// const cameraHelper = new THREE.CameraHelper(camera);
// scene.add(cameraHelper);

gui.add(camera.position, 'z').min(-100).max(+100)
gui.add(camera.position, 'x').min(-100).max(+100)
gui.add(camera.position, 'y').min(-100).max(+100)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

let clickedAgain;

const raycaster = new THREE.Raycaster()

// Handle click outside of clicked plane
const handleOutsideClick = (event) => {
    console.log('handle outside click');
    // Calculate mouse position in normalized device coordinates (-1 to +1)
    const mouseOutsideClick = new THREE.Vector2();
    mouseOutsideClick.x = (event.clientX / sizes.width) * 2 - 1;
    mouseOutsideClick.y = -(event.clientY / sizes.height) * 2 + 1;
    
    // Raycast from camera to mouse position
    raycaster.setFromCamera(mouseOutsideClick, camera);
    const intersects = raycaster.intersectObjects(scene.children);
    
    // Check if the clicked plane was clicked again
    clickedAgain = false;
    for (let i = 0; i < intersects.length; i++) {
        if (intersects[i].object.planeIsClicked) {
        clickedAgain = true;
        break;
        }
    }
    
    if (!clickedAgain) {
        // Reset planes size and position
        planes.forEach((plane) => {
            gsap.to(plane.slide.scale, {
                x: 1,
                duration: 1.5,
                ease: 'power3.out'
            });
            gsap.to(plane.slide.position, {
                x: (2.2 * plane.index) % (2.2 * textures.length) - 2.2 * textures.length / 2,
                duration: 1.5,
                ease: 'power3.out' 
            }); 
        }); 
    } 

    scrollEvent()
};

// // Add event listener to handle click outside of clicked plane 
// window.addEventListener('click', handleOutsideClick);


// Handle plane click
const handlePlaneClick = (event) => {
    console.log('handle plane click');


    const mouse = new Vector2();
    // Calculate mouse position in normalized device coordinates (-1 to +1)
    mouse.x = (event.clientX / sizes.width) * 2 - 1;
    mouse.y = -(event.clientY / sizes.height) * 2 + 1;

    console.log(mouse);
    
    // Raycast from camera to mouse position
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children);
    
    // Check if a plane was clicked
    for (let i = 0; i < intersects.length; i++) {
        console.log(intersects[i].object);
        if (intersects[i].object.planeIsClicked) {
            const clickedPlane = intersects[i].object;
            
            // Increase clicked plane size
        gsap.to(clickedPlane.scale, {
            x: 1.79,
            duration: 1.5,
            ease: 'power3.out'
        });

        // Decrease other planes size
        planes.forEach((plane) => {
            if (plane.slide !== clickedPlane) {
            gsap.to(plane.slide.scale, {
                x: 0.5,
                duration: 1.5,
                ease: 'power3.out'
            });
            }
        });

        // Move clicked plane to center
        gsap.to(clickedPlane.position, {
            x: 0,
            y: 0,
            z: 0,
            duration: 1.5,
            ease: 'power3.out'
        });
        
        // Move other planes away
        planes.forEach((plane) => {
            if (plane.slide !== clickedPlane) {
                const factor = plane.index < clickedPlane.index ? -1 : 1;
                const distance = (margin * textures.length) / 2;
            gsap.to(plane.slide.position, {
                x: factor * distance,
                duration: 1.5,
                ease: 'power3.out'
            });
            }
        });

        // Stop listening to scroll events
        document.removeEventListener('mousewheel', scrollEvent);
        
        // Start listening to click events outside of the clicked plane
        document.addEventListener('click', handleOutsideClick);
        
        break; // Stop looping through intersects
    }
}
};

// const handleClick = (event) => {
//     // Calculate mouse position in normalized device coordinates (-1 to +1)
//     const mouse = new THREE.Vector2();
//     mouse.x = (event.clientX / sizes.width) * 2 - 1;
//     mouse.y = -(event.clientY / sizes.height) * 2 + 1;

//     // Raycast from camera to mouse position
//     raycaster.setFromCamera(mouse, camera);
//     const intersects = raycaster.intersectObjects(scene.children);

//     // Find the first plane that was clicked and zoom it
//     for (let i = 0; i < intersects.length; i++) {
//         if (intersects[i].object.planeIsClicked) {
//             const plane = planes.find(o => o.slide === intersects[i].object);
//             if (clickedPlane === null) {
//                 clickedPlane = plane;
//                 clickedPlane.isClicked = true;
//                 gsap.to(clickedPlane.targetScale, {
//                     x: clickedPlane.originalScale.x * 1.5,
//                     y: clickedPlane.originalScale.y * 1.5,
//                     duration: 0.8,
//                     ease: "power4.out"
//                 });
//             }
//             break;
//         }
//     }
// };

// Add event listener for the click event on each plane
// planes.forEach(plane => {
//     plane.slide.planeIsClicked = true;
//     console.log(plane.slide);
// });

window.addEventListener('click', handlePlaneClick)

// // Add click event listener to canvas
// canvas.addEventListener('click', onCanvasClick)

// Flag to track whether a plane is currently clicked
let isPlaneClicked = false

// Function to handle click event on canvas
function onCanvasClick(event) {

    console.log('handle canvas click');


    let mouseCanvasClick = new Vector2();
    // Calculate the normalized device coordinates of the click
    mouseCanvasClick = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
    }
    
    // Raycast from the camera to find the first plane that intersects with the ray
    raycaster.setFromCamera(mouseCanvasClick, camera)
    const intersectsCanvasClick = raycaster.intersectObjects(planes.map(({ slide }) => slide))

    if (intersectsCanvasClick.length > 0) {
        // If a plane is clicked, set isPlaneClicked to true
        isPlaneClicked = true

        // Animate the clicked plane to expand to 1.79/1 ratio
        const clickedPlane = intersectsCanvasClick[0].object
        const clickedIndex = planes.findIndex(({ slide }) => slide === clickedPlane)
        gsap.to(clickedPlane.scale, {
        x: 1.79,
        duration: 0.5,
        ease: 'power2.out',
        })

        // Scale down all other planes
        planes.forEach(({ slide, index }) => {
        if (index !== clickedIndex) {
            gsap.to(slide.scale, {
            x: 0.5,
            duration: 0.5,
            ease: 'power2.out',
            })
        }
        })

        // Animate the clicked plane to the center of the screen
        gsap.to(clickedPlane.position, {
        x: 0,
        duration: 0.5,
        ease: 'power2.out',
        onComplete: () => {
            // Double the margin with the other planes
            planes.forEach(({ slide, index }) => {
            if (index !== clickedIndex) {
                gsap.to(slide.position, {
                x: (margin * index + currentScroll + 4069 * wholeWidth) % wholeWidth - 6 * margin,
                duration: 0.5,
                ease: 'power2.out',
                })
            }
            })
        },
        })
    } else if (isPlaneClicked) {
        // If the canvas is clicked outside the clicked plane while a plane is already clicked,
        // reset all planes to their original scale and position
        isPlaneClicked = false

        planes.forEach(({ slide, index }) => {
        gsap.to(slide.scale, {
            x: 1,
            duration: 0.5,
            ease: 'power2.out',
        })
        gsap.to(slide.position, {
            x: (margin * index + currentScroll + 4069 * wholeWidth) % wholeWidth - 3 * margin,
            duration: 0.5,
            ease: 'power2.out',
        })
        })
    }
}

/**
 * Animate
 */
const tick = () =>
{
    //Scroll Event slider
    scroll += (scrollTarget - scroll) * 0.1
    scroll *= 0.9
    scrollTarget *= 0.9
    currentScroll += scroll* 0.01
    
    updateSlider()

    // Render
    renderer.render(scene, camera)
    // camera.lookAt(scene.position)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()