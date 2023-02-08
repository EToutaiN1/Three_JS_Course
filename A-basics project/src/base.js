import * as THREE from 'three'

let scene, camera, renderer, box;

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

const init = () => {
    scene = new THREE.Scene()
    
    const canvas = document.querySelector('canvas.webgl')
    
    
    camera = new THREE.PerspectiveCamera( 75, sizes.width / sizes.height, 0.1, 100)
    camera.position.z = 5
    scene.add(camera)
    
    renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true
    })
    
    renderer.setSize(sizes.width, sizes.height)
    
    const geometry = new THREE.BoxGeometry(2, 2, 2)
    const material = new THREE.MeshBasicMaterial({
        color: 0x0000ff,
        wireframe: true
    })
    // const texture = new THREE.TextureLoader().load('textures/wood.png')
    box = new THREE.Mesh(geometry, material)
    scene.add(box)

}

const animate = () => {
    
    box.rotation.x += 0.01
    box.rotation.y += 0.01
    
    // Render
    renderer.render(scene, camera)
    
    // Call animate again on the next frame
    window.requestAnimationFrame(animate)

    // onWindowResize()
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

init()
animate()