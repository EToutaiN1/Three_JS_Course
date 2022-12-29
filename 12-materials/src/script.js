import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { DoubleSide } from 'three'
import * as dat from 'lil-gui'

/**
 * Base
 */

// Textures

const textureLoader = new THREE.TextureLoader()

const doorColorTexture = textureLoader.load('textures/door/color.jpg')
const doorAlphaTexture = textureLoader.load('/textures/door/alpha.jpg')
const doorAmbientOcclusionTexture = textureLoader.load('/textures/door/ambientOcclusion.jpg')
const doorHeightTexture = textureLoader.load('/textures/door/height.jpg')
const doorNormalTexture = textureLoader.load('/textures/door/normal.jpg')
const doorMetalnessTexture = textureLoader.load('/textures/door/metalness.jpg')
const doorRoughnessTexture = textureLoader.load('/textures/door/roughness.jpg')
const matcapTexture = textureLoader.load('/textures/matcaps/8.png')
const gradientTexture = textureLoader.load('/textures/gradients/3.jpg')

// gradientTexture.minFilter = THREE.NearestFilter
// gradientTexture.magFilter = THREE.NearestFilter
// gradientTexture.generateMipmaps = false


// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Objects 

// // MESH BASIC MATERIAL 

// const material = new THREE.MeshBasicMaterial({
//     // map : doorColorTexture
// })
// material.map = doorColorTexture
// material.wireframe = true
// material.opacity = 0.5
// material.transparent = true

// material.alphaMap = doorAlphaTexture
// material.side = THREE.DoubleSide


// material.color = new THREE.Color('pink')
// material.color = new THREE.Color('#f00')
// material.color = new THREE.Color('red')
// material.color = new THREE.Color('rgb(255, 0, 0)')
// material.color = new THREE.Color(0xff0000)

// // MESH NORMAL MATERIAL 

// const material = new THREE.MeshNormalMaterial()
// material.flatShading = true

// // MESH MATCAP MATERIAL

// const material = new THREE.MeshMatcapMaterial()

// material.matcap = matcapTexture
// material.side = DoubleSide

// // MESH DEPTH MATERIAL

// const material = new THREE.MeshDepthMaterial()

// // MESH LAMBERT MATERIAL

// const material = new THREE.MeshLambertMaterial()

// material.matcap = matcapTexture
// material.side = DoubleSide

// // MESH PHONG MATERIAL

// const material = new THREE.MeshPhongMaterial()

// material.shininess = 100
// material.specular = new THREE.Color(0x00ff00)
// material.side = DoubleSide

// // MESH TOON MATERIAL

// const material = new THREE.MeshToonMaterial()

// material.gradientMap = gradientTexture
// material.side = DoubleSide

// // MESH STANDARD MATERIAL

const material = new THREE.MeshStandardMaterial()

material.metalness = 0.5
material.roughness = 0.5
material.side = DoubleSide


/**
 * Lights
*/

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
scene.add(ambientLight)

const pointLight = new THREE.PointLight(0xffffff, 0.5)
pointLight.position.x = 2
pointLight.position.y = 3
pointLight.position.z = 4
scene.add(pointLight)



const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 16, 16),
    material
)

sphere.position.x = -1.5

const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(1, 1),
    material
)

const torus = new THREE.Mesh(
    new THREE.TorusGeometry(0.3, 0.2, 16, 22),
    material
)
torus.position.x = 1.5

scene.add(sphere, plane, torus)


/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

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
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 1
camera.position.y = 1
camera.position.z = 3
scene.add(camera)

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
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update objects

    sphere.rotation.y = 0.1 * elapsedTime
    plane.rotation.y = 0.1 * elapsedTime
    torus.rotation.y = 0.1 * elapsedTime
    
    sphere.rotation.x = 0.15 * elapsedTime
    plane.rotation.x = 0.15 * elapsedTime
    torus.rotation.x = 0.15 * elapsedTime

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()

/**
 * Debug UI
 */

const gui = new dat.GUI()

gui.add(material, 'metalness').min(0).max(1).step(0.0001)
gui.add(material, 'roughness').min(0).max(1).step(0.0001)