import * as THREE from 'three';
import fragment from './shaders/fragment.glsl'
import vertex from './shaders/vertex.glsl'

// init

export default class Sketch{
    constructor()
    {
        this.renderer = new THREE.WebGLRenderer( { antialias: true } );
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        document.getElementById('container').appendChild( this.renderer.domElement );

        this.camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
        this.camera.position.z = 1;
        this.scene = new THREE.Scene();

        this.addMesh()

        this.time = 0

        this.render()

        console.log(this.mesh.attribute.uv);
    }

    

    addMesh()
    {
        this.geometry = new THREE.PlaneGeometry(1, 1);
        this.material = new THREE.MeshNormalMaterial({side: THREE.DoubleSide});
        this.material = new THREE.ShaderMaterial({
            vertexShader: vertex,
            fragmentShader: fragment,
            uniform: {
                progress: {type: "f", value: 0}
            },
            side: THREE.DoubleSide
        });

        this.mesh = new THREE.Points( this.geometry, this.material );
        this.scene.add( this.mesh );
    }

    render()
    {
        this.time++;
        console.log(this.time);
        this.mesh.rotation.x += 0.02;
        this.mesh.rotation.y += 0.01;
        this.renderer.render( this.scene, this.camera );

        window.requestAnimationFrame(this.render.bind(this))
    }
}

new Sketch()




// import * as THREE from 'three'
// // import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
// // import * as dat from 'lil-gui'

// // Canvas
// const canvas = document.querySelector('canvas.webgl')

// // Scene
// const scene = new THREE.Scene()

// /**
//  * Sizes
//  */
// const sizes = {
//     width: window.innerWidth,
//     height: window.innerHeight
// }

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

// /**
//  * Camera
//  */
// // Base camera
// const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 100)
// camera.position.set(6, 4, 8)
// scene.add(camera)

// // Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

// /**
//  * Renderer
//  */
// const renderer = new THREE.WebGLRenderer({
//     canvas: canvas,
//     antialias: true
// })

// renderer.setSize(sizes.width, sizes.height)
// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// /**
//  * Animate
//  */
// const clock = new THREE.Clock()

// const tick = () =>
// {

//     // Update controls
//     controls.update()

//     // Render
//     renderer.render(scene, camera)

//     // Call tick again on the next frame
//     window.requestAnimationFrame(tick)
// }

// tick()