varying vec2 vUv;

void main()
{
    // gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1);

    vec4 mvPosition = modelViewMatrix * vec4(position, 1);
    gl_PointSize = 50.0 * (1.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
    
    vUv = uv;
}