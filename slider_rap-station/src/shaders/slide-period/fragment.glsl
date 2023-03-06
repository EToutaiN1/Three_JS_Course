uniform sampler2D uTexture;
uniform float uFilterIntensity;
uniform float uRepeat; // new uniform for repeat value
uniform vec2 uOffset;
varying vec2 vUv;

void main() {
    vec2 uv = vUv * vec2(uRepeat, uRepeat); // repeat the texture horizontally and vertically
    uv += uOffset; // apply the texture offset
    uv = fract(uv); // wrap the texture coordinates
    vec4 color = texture2D(uTexture, uv);
    float grayscale = dot(color.rgb, vec3(0.299, 0.587, 0.114));
    vec3 filteredColor = mix(vec3(grayscale), color.rgb, uFilterIntensity);
    gl_FragColor = vec4(filteredColor, color.a);
}
