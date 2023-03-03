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
let targetRatio = 0.5
let zoomTarget = {x: 0, y: 0}
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

let clickedPlane = {}

const scrollEvent = () => {
    document.addEventListener('mousewheel', (e)=>{
        scrollTarget = e.wheelDelta * 0.3;
    })
}

scrollEvent()

const margin = 1.5
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

    // If click event and not clicking on a plane, zoom out clicked plane
    if (!isPlaneClicked && clickedPlane !== null && !isClickEnabled) {
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
    isClickEnabled = true

    // Add event listener for the click event on each plane
    planes.forEach(plane => {
        // plane.slide.geometry.isBufferGeometry = true;
        document.addEventListener('click', handlePlaneClick)
    });

    scrollEvent()
};

// Handle plane click
const handlePlaneClick = (event) => {
    console.log(clickedPlane);
    console.log(isClickEnabled)
    if(isClickEnabled)
    {
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
    }

};

// Add event listener for the click event on each plane
planes.forEach(plane => {
    // plane.slide.geometry.isBufferGeometry = true;
    document.addEventListener('click', handlePlaneClick)
});

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