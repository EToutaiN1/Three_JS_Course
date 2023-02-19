import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import * as dat from 'lil-gui'

/**
 * Base
 */
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

// Geometry
const geometry = new THREE.PlaneGeometry(1, 2/3, 32, 32)

const planes = [];
for (let i = 0; i < textures.length; i++) {
    const material = new THREE.MeshBasicMaterial({ map: textures[i] });
    const plane = new THREE.Mesh(geometry, material);
    plane.position.x = i * 2;
    scene.add(plane);
    planes.push(plane);
}

// Step 6: Link the slider and the scroll
let currentPlane = 0;

const updateSlider = () => {
    planes[currentPlane].position.x = -100;
    currentPlane = (currentPlane + 1) % planes.length;
    planes[currentPlane].position.x = 0;
    
};

document.addEventListener('click', updateSlider);

window.addEventListener('wheel', () => {
    const scrollDelta = window.scrollY - lastScrollY;
    lastScrollY = window.scrollY;

    if (scrollDelta > 0) {
        updateSlider();
    } else if (scrollDelta < 0) {
        currentPlane = currentPlane - 1 < 0 ? planes.length - 1 : currentPlane - 1;
        updateSlider();
    }
});


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

/**
 * Camera
 */
// Base camera
const camera = new THREE.OrthographicCamera(
    -sizes.width / 2,
    sizes.width / 2,
    sizes.height / 2,
    -sizes.height / 2,
    1,
    1000
  );
  camera.position.set(0, 0, 10);
scene.add(camera)

gui.add(camera.position, 'z').min(-100).max(+100)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

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
    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()