import * as THREE from 'three'
import * as dat from 'lil-gui'
import { Group, Vector2 } from 'three'
import { gsap } from 'gsap';


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
let isScrollEnabled = true
let isClickEnabled = true

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

// textures.forEach((e)=>{
//     e.minFilter = THREE.NearestFilter;
//     e.magFilter = THREE.NearestFilter;
//     e.wrapS = THREE.RepeatWrapping;
//     e.wrapT = THREE.RepeatWrapping;

// })

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
            isZoomed: false
        }
    )

    scene.add(slide)
    
}

// const circle = document.querySelector('.circle')

// const geometryCube = new THREE.CircleGeometry(1, 32)
// const materialCube = new THREE.MeshBasicMaterial({color: 'red'})

// const cube = new THREE.Mesh(geometryCube, materialCube)
// cube.position.z = -1

// scene.add(cube)

// cube.addEventListener('click', ()=>{
//     console.log('click');
//     console.log(cube);

//     gsap.fromTo(cube.scale,{x: 1, y: 1, z: 1}, {
//         x: 1,
//         y: 1,
//         z: 1,
//         duration: 1.5,
//         ease: 'power3.out'
//     });
//     console.log(cube.position);
//     // gsap.fromTo(circle,{rotation: 0, x: 2}, {
//     //     rotation: 360,
//     //     x: 10,
//     //     duration: 1.5,
//     //     ease: 'power3.out'
//     // });
// })

let clickedPlane = {}

const scrollEvent = () => {
    document.addEventListener('mousewheel', (e)=>{
        scrollTarget = e.wheelDelta * 0.3;
        if (clickedPlane !== null) {
            clickedPlane.isClicked = false
            clickedPlane = null
            planes.forEach((plane) => {
            gsap.fromTo(plane.slide.scale, {x: 1.5}, {
            x: 1,
            duration: 0.8,
            ease: "power4.out"
            })
            gsap.fromTo(plane.slide.scale, {y: 1.5}, {
            y: 1,
            duration: 0.8,
            ease: "power4.out"
            })
            gsap.fromTo(plane.slide.position, {x: 0}, {
            x: 2.2 * plane.index - scrollTarget,
            duration: 0.8,
            ease: "power4.out"
            })
        })
        } else {
            planes.forEach((plane) => {
                gsap.fromTo(plane.slide.position, {x: 0}, {
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
camera.position.set(0, 0, 0.5)
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

const raycaster = new THREE.Raycaster()

// Flag to track whether a plane is currently clicked
let isPlaneClicked = false

// Handle click outside of clicked plane
const handleOutsideClick = (event) => {
    // Calculate mouse position in normalized device coordinates (-1 to +1)
    const mouseOutsideClick = new THREE.Vector2();
    mouseOutsideClick.x = (event.clientX / sizes.width) * 2 - 1;
    mouseOutsideClick.y = -(event.clientY / sizes.height) * 2 + 1;
    
    // Raycast from camera to mouse position
    raycaster.setFromCamera(mouseOutsideClick, camera);
    const intersects = raycaster.intersectObjects(scene.children);
    
    // Check if the clicked plane was clicked again
    for (let i = 0; i < intersects.length; i++) {
        if (intersects[i].object.geometry.isBufferGeometry) {
            isPlaneClicked = true;
            break;
        }
    }
    
    if (!isPlaneClicked) {
        console.log('handle outside click');
        // Reset planes size and position
        planes.forEach((plane) => {
            gsap.fromTo(plane.slide.scale,{x: 0}, {
                x: 1,
                duration: 1.5,
                ease: 'power3.out'
            });
            gsap.fromTo(plane.slide.position,{x: 0}, {
                x: (2.2 * plane.index) % (2.2 * textures.length) - 2.2 * textures.length / 2,
                duration: 1.5,
                ease: 'power3.out' 
            }); 
        }); 
    }
    isClickEnabled = true

    // If click event and not clicking on a plane, zoom out clicked plane
    if (!isPlaneClicked && clickedPlane !== null) {
        // Reset target scales for all planes
        planes.forEach((plane) => {
            plane.targetScale.set(1, 1, 1)
        })

        console.log(clickedPlane);
        
        // Start zoom out animation
        gsap.to(clickedPlane, {
            zoomRatio: 0.5,
            duration: 1,
            onUpdate: () => {
                clickedPlane.slide.scale.set(clickedPlane.targetScale.x * clickedPlane.zoomRatio, clickedPlane.targetScale.y * clickedPlane.zoomRatio, 1)
            },
            onComplete: () => {
                isZooming = false
                clickedPlane.isClicked = false
                clickedPlane = null
            }
        })
        
        // Set flag for zooming in
        isZooming = true
    }

    // Reset flag for clicked plane
    isPlaneClicked = false


    // Add event listener for the click event on each plane
    planes.forEach(plane => {
        // plane.slide.geometry.isBufferGeometry = true;
        document.addEventListener('click', handlePlaneClick)
    });

    scrollEvent()
};

// Handle plane click
const handlePlaneClick = (event) => {
    
    const mouse = new Vector2();
    // Calculate mouse position in normalized device coordinates (-1 to +1)
    mouse.x = (event.clientX / sizes.width) * 2 - 1;
    mouse.y = -(event.clientY / sizes.height) * 2 + 1;
    
    // Raycast from camera to mouse position
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children);
    
    console.log(intersects);
    // Check if a plane was clicked
    for (let i = 0; i < intersects.length; i++) {
        if (intersects[i].object.geometry.isBufferGeometry) {
            console.log('handle plane click');
            const clickedPlane = intersects[i].object;
            
            // Increase clicked plane size
            gsap.from(clickedPlane.scale, {
                x: 1,
                duration: 1.5,
                ease: 'power3.out'
            });
            gsap.to(clickedPlane.scale, {
                x: 1.79,
                duration: 1.5,
                ease: 'power3.out'
            });
            
            // Decrease other planes size
            planes.forEach((plane) => {
                if (plane.slide !== clickedPlane) {
                gsap.from(plane.slide.scale, {
                    x: 1,
                    duration: 1.5,
                    ease: 'power3.out'
                });
                gsap.to(plane.slide.scale, {
                    x: 0.5,
                    duration: 1.5,
                    ease: 'power3.out'
                });
                }
            });

            // Move clicked plane to center
            gsap.from(clickedPlane.position, {
                x: clickedPlane.position.x,
                y: clickedPlane.position.y,
                z: clickedPlane.position.z,
                duration: 1.5,
                ease: 'power3.out'
            });
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
                    // console.log(plane.slide.position.x);
                    gsap.from(plane.slide.position, {
                        x: plane.slide.position.x,
                        duration: 1.5,
                        ease: 'power3.out'
                    });
                    gsap.to(plane.slide.position, {
                        x: factor * distance,
                        duration: 1.5,
                        ease: 'power3.out'
                    });
                }
            });

            isPlaneClicked = true
            isClickEnabled = false

            // Stop listening to scroll events
            window.removeEventListener('mousewheel', scrollEvent);
            
            // Start listening to click events outside of the clicked plane
            window.addEventListener('click', handleOutsideClick);
            
            break; // Stop looping through intersects
        }
    }

    // Loop through each plane to check for intersection
    planes.forEach((plane, index) => {
        const intersection = raycaster.intersectObject(plane.slide);
        
        // If intersection found and not currently zooming in on a plane
        if (intersection.length && !isZooming) {
            // Set clicked plane and flag to true
            clickedPlane = {
                ...plane,
                isClicked: true
            }

            console.log(clickedPlane);
            
            // Set target scale for clicked plane to zoom in
            clickedPlane.targetScale.set(1.5, 1.5, 1)
            
            // Set target scales for other planes to zoom out
            planes.forEach((plane) => {
                if (plane !== clickedPlane) {
                    plane.targetScale.set(0.5, 0.5, 1)
                }
            })
            
            // Flag to track that a plane is clicked
            isPlaneClicked = true
            
            // Set zoom ratio
            zoomRatio = clickedPlane.zoomRatio
            
            // Start zoom in animation
            gsap.to(clickedPlane.slide, {
                zoomRatio: 1,
                duration: 1,
                onUpdate: () => {
                    clickedPlane.slide.scale.set(clickedPlane.targetScale.x * clickedPlane.zoomRatio, clickedPlane.targetScale.y * clickedPlane.zoomRatio, 1)
                },
                onComplete: () => {
                    isZooming = false
                }
            })
            
            // Disable scroll and click events while zooming in
            isScrollEnabled = false
            isClickEnabled = false
            
            // Set flag for zooming in
            isZooming = true
            
            // Break out of loop once plane found
            return
        }
    })
    // // Add event listener to handle click outside of clicked plane 
    window.addEventListener('click', handleOutsideClick);

};

// Add click event listener to canvas
canvas.addEventListener('click', onCanvasClick)


// Function to handle click event on canvas
function onCanvasClick(event) {
    
    if(isClickEnabled){
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
            console.log('handle canvas click');

            // Animate the clicked plane to expand to 1.79/1 ratio
            const clickedPlane = intersectsCanvasClick[0].object
            const clickedIndex = planes.findIndex(({ slide }) => slide === clickedPlane)
            console.log(clickedPlane);
            gsap.fromTo(clickedPlane.scale,{x: 1}, {
            x: 1.79,
            duration: 0.5,
            ease: 'power2.out',
            })
            gsap.from(clickedPlane.rotation, {
            z: 0
            })
            gsap.to(clickedPlane.rotation, {
            z: 2 * Math.PI,
            duration: 0.5,
            ease: 'power2.out',
            })

            // Scale down all other planes
            planes.forEach(({ slide, index }) => {
            if (index !== clickedIndex) {
                gsap.fromTo(slide.scale, {x: 1}, {
                x: 0.5,
                duration: 0.5,
                ease: 'power2.out',
                })
            }
            })

            // Animate the clicked plane to the center of the screen
            gsap.fromTo(clickedPlane.position,{x: 1}, {
            x: 0,
            duration: 0.5,
            ease: 'power2.out',
            onComplete: () => {
                // Double the margin with the other planes
                planes.forEach(({ slide, index }) => {
                if (index !== clickedIndex) {
                    gsap.fromTo(slide.position, {x: 0}, {
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
            gsap.fromTo(slide.scale, {x: 1.78},{
                x: 1,
                duration: 0.5,
                ease: 'power2.out',
            })
            gsap.fromTo(slide.position, {x: 1},{
                x: (margin * index + currentScroll + 4069 * wholeWidth) % wholeWidth - 3 * margin,
                duration: 0.5,
                ease: 'power2.out',
            })
            })
        }
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
    currentScroll += scroll* 0.006
    
    updateSlider()

    // Render
    renderer.render(scene, camera)
    // camera.lookAt(scene.position)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()