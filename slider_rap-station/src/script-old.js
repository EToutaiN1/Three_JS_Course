import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import * as dat from 'lil-gui'
import { Group } from 'three'

// let speed = 0;
// let position = 0;
// let rounded = 0;

// /**
//  * Base
//  */
// // Debug
// const gui = new dat.GUI()

// // Canvas
// const canvas = document.querySelector('canvas.webgl')

// // Scene
// const scene = new THREE.Scene()

// /**
//  * Textures
//  */

// const textureLoader = new THREE.TextureLoader()

// const textures = [
//     textureLoader.load('images/post-2000.jpg'),
//     textureLoader.load('images/after-math.jpg'),
//     textureLoader.load('images/g-funk.jpg'),
//     textureLoader.load('images/default-visual.jpg'),
//     textureLoader.load('images/travis-scott.jpg')
// ];

// textures.forEach((e)=>{
//     e.minFilter = THREE.NearestFilter;
//     e.magFilter = THREE.NearestFilter;
// })

// /**
//  * Sizes
//  */
// const sizes = {
//     width: window.innerWidth,
//     height: window.innerHeight
// }

// // Define the aspect ratio
// const aspectRatio = 1.78 / 1;

// // Geometry
// const geometry = new THREE.PlaneGeometry(1.78 , 1, 32, 32)
// const material = new THREE.MeshBasicMaterial({ map: textures[i],
//     wireframe: true });

// const planes = [].fill({dist: 0});
// const sliderGroup = new THREE.Group();

// for (let i = 0; i < textures.length; i++) {
//     const material = new THREE.MeshBasicMaterial({ map: textures[i],
//     wireframe: true });
//     const plane = new THREE.Mesh(geometry, material);
//     plane.position.x = i * 2;
//     planes.push({
//         plane,
//         index: i
//     });
//     sliderGroup.add(plane)
//     scene.add(plane);
// }

// // Step 6: Link the slider and the scroll
// let currentPlane = 0;

// const updateSlider = () => {
//     planes[currentPlane].position.x = -100;
//     currentPlane = (currentPlane + 1) % planes.length;
//     planes[currentPlane].position.x = 0;
    
// };

// // document.addEventListener('click', updateSlider);

// let lastScrollY = 0;

// window.addEventListener('wheel', (e) => {
//     const scrollDelta = window.scrollY - lastScrollY;
//     lastScrollY = window.scrollY;

//     speed += - e.deltaY * 0.0003

//     sliderGroup.children.forEach(
//         (slide)=>{
//             slide.position.x = speed
//         }
//     )

//     // sliderGroup.position.x = speed
//     console.log(sliderGroup.position.x);

//     // console.log(camera.position);

//     // if (scrollDelta > 0) {
//     //     updateSlider();
//     // } else if (scrollDelta < 0) {
//     //     currentPlane = currentPlane - 1 < 0 ? planes.length - 1 : currentPlane - 1;
//     //     updateSlider();
//     // }
// });

// window.addEventListener('resize', () =>
// {
//     // Update sizes
//     sizes.width = window.innerWidth
//     sizes.height = window.innerHeight

//     // Update camera
//     camera.aspect = sizes.width / sizes.height
//     camera.updateProjectionMatrix()

//     // Update renderer
//     renderer.setSize(sizes.width, sizes.height)
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// })

// console.log(sliderGroup);

// /**
//  * Camera
//  */
// // Base camera
// // const camera = new THREE.OrthographicCamera(
// //     - 0.5 * sizes.width * aspectRatio  / 2,
// //       0.5 * sizes.width * aspectRatio / 2,
// //     sizes.height / 2,
// //     -sizes.height / 2,
// //     1,
// //     500
// // );
// // camera.position.set(0, 0, 10);
// // scene.add(camera)

// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
// camera.position.set(0, 0, 3)
// scene.add(camera)

// const cameraHelper = new THREE.CameraHelper(camera);
// scene.add(cameraHelper);

// gui.add(camera.position, 'z').min(-100).max(+100)
// gui.add(camera.position, 'x').min(-100).max(+100)
// gui.add(camera.position, 'y').min(-100).max(+100)

// // Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true
// controls.enablePan = false
// controls.enableZoom = false

// /**
//  * Renderer
//  */
// const renderer = new THREE.WebGLRenderer({
//     canvas: canvas
// })
// renderer.setSize(sizes.width, sizes.height)
// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// /**
//  * Animate
//  */
// const tick = () =>
// {
//     position += speed
//     speed *= 0.8

//     sliderGroup.children.forEach((o, i) =>
//     {
//         o.dist = Math.min(Math.abs(position - i), 1)
//         o.dist = 1 - o.dist **2
//         sliderGroup.children[i].scale.set(1+ 0.7 * o.dist)
//     })

//     rounded = Math.round(position)

//     let diff = (rounded - position)

//     position += Math.sign(diff)*Math.pow(Math.abs(diff), 0.7) * 0.015
    
//     // block.style.transform = `translate(0, ${position*100 + 50}px)`
//     sliderGroup.position.set(-position, 0, 0)

//     updateSlider()

//     // Update controls
//     controls.update()

//     // Render
//     renderer.render(scene, camera)
//     camera.lookAt(scene.position)

//     // Call tick again on the next frame
//     window.requestAnimationFrame(tick)
// }

// tick()

// Add a directional light in three js

/**
 * Base
 */

let scroll = 0
let scrollTarget = 0
let currentScroll = 0

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
];

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
const geometry = new THREE.PlaneGeometry(1.78 , 1, 32, 32)

let planes = []

for (let i = 0; i < textures.length; i++) {
    const material = new THREE.MeshBasicMaterial({
        map: textures[i%textures.length],
        side: THREE.DoubleSide
    })
    let plane = new THREE.Mesh(
        geometry,
        material
    )
    planes.push(
        {
            plane,
            index: i
        }
    )

    scene.add(plane)
    
}

const scrollEvent = () => {
    document.addEventListener('mousewheel', (e)=>{
        scrollTarget = e.wheelDelta * 0.3;
    } )
}

scrollEvent()

const updateSlider = () => {
    let margin = 2.2;
    let wholeWidth = margin * textures.length;

    planes.forEach(o=>
        {
            o.plane.position.x = (margin * o.index + currentScroll + 4069 * wholeWidth) % wholeWidth - 3 * margin;
            // o.plane.position.x = margin * o.index + currentScroll;
        }
    )

    // planes[currentPlane].position.x = -100;
    // currentPlane = (currentPlane + 1) % planes.length;
    // planes[currentPlane].position.x = 0;
    
};

window.addEventListener('resize', () =>
{
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
camera.position.set(0, 0, 3)
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

/**
 * Animate
 */
const tick = () =>
{
    
    //Scroll Event slider
    scroll += (scrollTarget - scroll) * 0.1
    scroll *= 0.9
    scrollTarget *= 0.9
    // console.log(scroll);
    currentScroll += scroll* 0.01
    
    updateSlider()

    // Render
    renderer.render(scene, camera)
    // camera.lookAt(scene.position)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()
