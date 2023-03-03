import * as THREE from 'three'
import * as dat from 'lil-gui'
import { Group, Vector2 } from 'three'
import { gsap } from 'gsap';
import vertexShader from './shaders/vertex.glsl'
import fragmentShader from './shaders/fragment.glsl'

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
    textureLoader.load('images/first-steps-of-hip-hop.jpg'),
    textureLoader.load('images/the-sounds-of-rap.jpg'),
    textureLoader.load('images/substance-before-form.jpg'),
    textureLoader.load('images/golden-age.jpg'),
    textureLoader.load('images/new-school.jpg'),
    textureLoader.load('images/rap-explosion.jpg'),
    textureLoader.load('images/g-funk.jpg'),
    textureLoader.load('images/after-math.jpg'),
    textureLoader.load('images/post-2000.jpg')
]


// textures.forEach((t)=>{
//     console.log(t);
//     // t.wrapS = THREE.RepeatWrapping;
//     // t.wrapT = THREE.RepeatWrapping;
//     t.repeat.x = 2;
//     t.repeat.y = 2;
// })

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
// geometry.faceVertexUvs[0][0][0].set(0, 0.25)
// geometry.faceVertexUvs[0][0][1].set(0, 0)
// geometry.faceVertexUvs[0][0][2].set(0.5, 0)
// geometry.faceVertexUvs[0][1][0].set(0.5, 0)
// geometry.faceVertexUvs[0][1][1].set(0, 0.25)
// geometry.faceVertexUvs[0][1][2].set(0.5, 0.25)

// console.log(geometry);

let planes = []

for (let i = 0; i < textures.length; i++) {
    const material = new THREE.ShaderMaterial({
        side: THREE.DoubleSide,
        transparent: true,
        uniforms: {
            uTexture: { value: textures[i] },
            uFilterIntensity: { value: 1.0},
            uRepeat: { value: 0.5},
            uOffset: { value: new THREE.Vector2(0.25, 0.25)},
        },
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
    })

    
    let slide = new THREE.Mesh(
        geometry,
        material
    )

    // slide.material.map.offset.set(0.25, 0.25);

    slide.position.set(0, 0, 0)

    // slide.scale.set(0.5, 0.5, 1)

    planes.push(
        {
            slide,
            index: i,
            dist:0
        }
    )

    scene.add(slide)
}

let objs = Array(5).fill(
    {
        dist:0
    }
)

const scrollEvent = (e) => {
        speed += - e.deltaY * 0.0003;
}

window.addEventListener('wheel', scrollEvent)

const margin = 2
const wholeWidthMargin = margin * textures.length

let factor = null;

const updateSlider = () => {
    // console.log('update slider');

    planes.forEach(o => {
        // o.slide.position.x = (margin * o.index + position + wholeWidthMargin) % wholeWidthMargin - 3 * margin
        o.slide.position.x = (margin * o.index + position) 
        // o.slide.scale.set(o.targetScale.x * o.zoomRatio, o.targetScale.y * o.zoomRatio, 1)
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
camera.position.set(0, 0, 1.6)
scene.add(camera)

// const cameraHelper = new THREE.CameraHelper(camera);
// scene.add(cameraHelper);

gui.add(camera.position, 'z').min(-10).max(+10)
gui.add(camera.position, 'x').min(-10).max(+10)
gui.add(camera.position, 'y').min(-10).max(+10)

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
const hoverSlide = (event) =>{
    // console.log('mouseHover');

    planes.forEach((o) => {
        // Calculate mouse position in normalized device coordinates (-1 to +1)
        mouse.x = (event.clientX / sizes.width) * 2 - 1;
        mouse.y = -(event.clientY / sizes.height) * 2 + 1;
        
        // Raycast from camera to mouse position
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(scene.children);

        
        if(intersects.length > 0)
        {
            if (intersects[0].object.geometry.isBufferGeometry){
                hoveredSlide = intersects[0].object
                // console.log(hoveredSlide.material);
                gsap.to(hoveredSlide.material.uniforms.filterIntensity, {
                    value: 0,
                    duration: 1.5,
                    ease: 'power3.out'
                })
            }
        }
        // add a hover event listener to the plane
        // o.slide.addEventListener('mouseover', () => {
        //     // update the material's filterIntensity uniform to 0 to disable the filter
        //     gsap.to(material.uniforms.filterIntensity, {
        //         value: 0,
        //         duration: 1.5,
        //         ease: 'power3.out'
        //     })
        //     // material.uniforms.filterIntensity.value = 0;
        // });
    
        // // add a mouseout event listener to the plane
        // o.slide.addEventListener('mouseout', () => {
        // // update the material's filterIntensity uniform back to 1 to re-enable the filter
        //     gsap.to(material.uniforms.filterIntensity, {
        //         value: 1.0,
        //         duration: 1.5,
        //         ease: 'power3.out'
        //     })
        // });
    })
}

// Handle plane click
const handlePlaneClick = (event) => {

    if(clickEnabled){

        // Stop listening to scroll events
        scrollEnabled = false
        window.removeEventListener('wheel', scrollEvent);

        
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
                console.log('you clicked on the plane :', intersects[0].object.id % 9);
                clickedPlane = intersects[0].object;
                
                // console.log(clickedPlane);
                
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

                // gsap.to(objs, {
                //     duration: 1.5,
                //     dist: distance,
                //     ease: "power3.out",
                //     onUpdate: () => {
                //         position = clickedPlane.position.x - objs[2].dist;
                //         updateSlider();
                //     },
                // });

                // Decrease other planes size and update their positions
                planes.forEach((p) => {
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

                // Toggle the texture repeat and offset values
                const repeatValue = isRepeated ? 0.5 : 1;
                const offsetValue = isRepeated ? new THREE.Vector2(0.25, 0.25) : new THREE.Vector2(0, 0);

                
                console.log(clickedPlane.material.uniforms.uRepeat);
                
                // Animate the texture repeat and offset values
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
                
                isRepeated = !isRepeated;
                // Toggle the repeat flag
                console.log(isRepeated);

            }
            // Stop listening to click events for the different slides
            window.removeEventListener('click', handlePlaneClick);
            console.log('plane click event disabled');
    
            // Start listening to click events outside of the clicked plane
            window.addEventListener('click', handleOutsideClick);
            console.log('outside click event enabled');
        }


    }
};

window.addEventListener('click', handlePlaneClick)

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
                console.log('handle outside click');

                // Reset planes size and position
                planes.forEach((p) => {
                    gsap.to(p.slide.scale, {
                        x: 1,
                        y: 1,
                        duration: 1.5,
                        ease: 'power3.out'
                    });

                    // console.log(p.slide.i);
                    
                    gsap.to(p.slide.position, {
                        z: 0,
                        // x: (2.2 * p.slide) % (2.2 * textures.length) - 2.2 * textures.length / 2,
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
                
                clickEnabled = true
                clickedPlane = null

                
                // Restart listening to scroll
                scrollEnabled = true
                window.addEventListener('wheel', scrollEvent)
                
                // Toggle the repeat flag
                isRepeated = !isRepeated;

                // Start listening to click events outside of the clicked plane
                window.addEventListener('click', handlePlaneClick)
                console.log('Out side : plane click event enabled');
                
                // Stop listening to click events outside of the clicked plane
                window.removeEventListener('click', handleOutsideClick);
                console.log('Out side : outside click event disabled');
            }
    }
};



window.addEventListener('mousemove', hoverSlide)
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