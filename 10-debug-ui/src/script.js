import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import gsap from 'gsap'
import * as dat from 'lil-gui'


/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Object
 */
const geometry = new THREE.BoxGeometry(1, 1, 1, 2, 2, 2)
const material = new THREE.MeshBasicMaterial({ color: 0x9686d5, wireframe: true })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

mesh.position.x = -3

const secondGeometry = new THREE.SphereGeometry(1, 14, 14)
const secondMaterial = new THREE.MeshBasicMaterial({ color: 0xd58686, wireframe: true })
const secondMesh = new THREE.Mesh(secondGeometry, secondMaterial)
scene.add(secondMesh)

const thirdGeometry = new THREE.TorusKnotGeometry( 10, 3, 50, 20 );
const thirdMaterial = new THREE.MeshBasicMaterial( { color: 0x86d5c1, wireframe: true } );
const thirdTorusKnot = new THREE.Mesh( thirdGeometry, thirdMaterial );
thirdTorusKnot.scale.set(0.08, 0.08, 0.08)
thirdTorusKnot.position.x = 3
scene.add( thirdTorusKnot );



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
camera.position.z = 5
camera.lookAt(mesh)
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
    
    // Update controls
    controls.update()
    
    mesh.rotation.x = elapsedTime
    // mesh.rotation.y = elapsedTime
    
    secondMesh.rotation.y = elapsedTime
    secondMesh.rotation.x = elapsedTime
    
    // thirdTorusKnot.rotation.x = elapsedTime
    thirdTorusKnot.rotation.y= elapsedTime
    
    // Render
    renderer.render(scene, camera)
    
    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()

const parameters = {
    lightPurple: 0x9686d5,
    cyan: 0x86d5c1,
    lightRed: 0xd58686,
    spin: () =>
    {
        gsap.to(mesh.rotation, { duration: 1, y: mesh.rotation.y + Math.PI * 2 })
    }

}

/**
 * Debug
 */
const gui = new dat.GUI({ closed: true, width: 200 })

//  gui.add(mesh.position, 'y', - 3, 3, 0.01)
gui
.add(mesh.position, 'y')
.min(- 3)
.max(3)
.step(0.01)
.name('elevation')


gui
.addColor(parameters, 'lightPurple')
.name('Cube color')
.onChange(() =>
{
    material.color.set(parameters.lightPurple)
})

gui.add(mesh, 'visible').name('Cube visibility')
gui.add(material, 'wireframe').name('Cube Wireframe')

gui
.addColor(parameters, 'lightRed')
.name('Sphere color')
.onChange(() =>
{
    secondMaterial.color.set(parameters.lightRed)
})

gui.add(secondMesh, 'visible').name('Sphere visibility')
gui.add(secondMaterial, 'wireframe').name('Sphere Wireframe')

gui
.addColor(parameters, 'cyan')
.name('Thorus color')
.onChange(() =>
{
    thirdMaterial.color.set(parameters.cyan)
})

gui.add(thirdTorusKnot, 'visible').name('Thorus visibility')
gui.add(thirdMaterial, 'wireframe').name('Thorus Wireframe')

gui.add(parameters, 'spin')