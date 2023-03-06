uniform float time;
uniform sampler2D noiseTexture;
uniform float noiseIntensity;
uniform float noiseSpeed;
varying vec2 vUv;

void main() {
    vec2 uv = vUv;
    uv *= 10.0; // scale the UV coordinates to increase noise density
    uv += vec2(time * noiseSpeed, 0.0); // animate the noise horizontally
    float noise = texture2D(noiseTexture, uv).r * noiseIntensity;
    gl_FragColor = vec4(vec3(noise), 1.0);
}