varying vec2 vUv;

float random(vec2 st)
{
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

void main()
{
    // Patern 1
    // gl_FragColor = vec4(vUv, 1.0, 1.0);

    // Patern 2
    // gl_FragColor = vec4(vUv, 0.0, 1.0);

    // Patern 3
    // float strength = vUv.x;

    // gl_FragColor = vec4(vec3(strength), 1.0);

    // Patern 4
    // float strength = vUv.y;

    // gl_FragColor = vec4(vec3(strength), 1.0);

    // Patern 5
    // float strength = 1.0 - vUv.y;

    // gl_FragColor = vec4(vec3(strength), 1.0);

    // Patern 6
    // float strength = vUv.y * 10.0;

    // gl_FragColor = vec4(vec3(strength), 1.0);

    // Patern 7
    // float strength = mod(vUv.y * 10.0, 1.0);

    // gl_FragColor = vec4(vec3(strength), 1.0);

    // Patern 8
    // float strength = mod(vUv.y * 10.0, 1.0);
    // strength = step(0.5, strength);

    // gl_FragColor = vec4(vec3(strength), 1.0);

    // Patern 9
    // float strength = mod(vUv.y * 10.0, 1.0);
    // strength = step(0.8, strength);

    // gl_FragColor = vec4(vec3(strength), 1.0);

    // Patern 10
    // float strength = mod(vUv.x * 10.0, 1.0);
    // strength = step(0.8, strength);

    // gl_FragColor = vec4(vec3(strength), 1.0);

    // Patern 11
    // float strength = step(0.8, mod(vUv.x * 10.0, 1.0));
    // strength += step(0.8, mod(vUv.y * 10.0, 1.0));

    // gl_FragColor = vec4(vec3(strength), 1.0);

    // Patern 12
    // float strength = step(0.8, mod(vUv.x * 10.0, 1.0));
    // strength *= step(0.8, mod(vUv.y * 10.0, 1.0));

    // gl_FragColor = vec4(vec3(strength), 1.0);

    // Patern 13
    // float strength = step(0.8, mod(vUv.y * 10.0, 1.0));
    // strength -= step(0.8, mod(vUv.x * 10.0, 1.0));

    // gl_FragColor = vec4(vec3(strength), 1.0);

    // Patern 14
    // float barX = step(0.4, mod(vUv.x * 10.0, 1.0)) * step(0.8, mod(vUv.y * 10.0, 1.0));
    // float barY = step(0.8, mod(vUv.x * 10.0, 1.0)) * step(0.4, mod(vUv.y * 10.0, 1.0));
    // float strength = barX + barY;

    // gl_FragColor = vec4(vec3(strength), 1.0);

    // Patern 15
    // float barX = step(0.4, mod(vUv.x * 10.0 - 0.2, 1.0)) * step(0.8, mod(vUv.y * 10.0, 1.0));
    // float barY = step(0.8, mod(vUv.x * 10.0, 1.0)) * step(0.4, mod(vUv.y * 10.0 - 0.2, 1.0));
    // float strength = barX + barY;

    // gl_FragColor = vec4(vec3(strength), 1.0);

    // Patern 16
    // float strength = abs(vUv.x - 0.5);

    // gl_FragColor = vec4(vec3(strength), 1.0);

    // Patern 17
    // float strength = min(abs(vUv.x - 0.5), abs(vUv.y - 0.5));

    // gl_FragColor = vec4(vec3(strength), 1.0);

    // Patern 18
    // float strength = max(abs(vUv.x - 0.5), abs(vUv.y - 0.5));

    // gl_FragColor = vec4(vec3(strength), 1.0);

    // Patern 19
    // float strength = step(0.2, max(abs(vUv.x - 0.5), abs(vUv.y - 0.5)));

    // gl_FragColor = vec4(vec3(strength), 1.0);

    // Patern 20
    // float strength = step(0.2, max(abs(vUv.x - 0.5), abs(vUv.y - 0.5)));
    // strength *=1.0 - step(0.25, max(abs(vUv.x - 0.5), abs(vUv.y - 0.5)));

    // gl_FragColor = vec4(vec3(strength), 1.0);

    // Patern 21
    // float strength = floor(vUv.x * 10.0) / 10.0;

    // gl_FragColor = vec4(vec3(strength), 1.0);

    // Patern 22
    // float strength = floor(vUv.x * 10.0) / 10.0;
    // strength *= floor(vUv.y * 10.0) / 10.0;

    // gl_FragColor = vec4(vec3(strength), 1.0);

    // Patern 23
    // float strength = random(vUv);

    // gl_FragColor = vec4(vec3(strength), 1.0);

    // Patern 24
    // vec2 gridUv = vec2(floor(vUv.x * 10.0) / 10.0, floor(vUv.y * 10.0) / 10.0);
    // float strength = random(gridUv);

    // gl_FragColor = vec4(vec3(strength), 1.0);

    // Patern 25
    // vec2 gridUv = vec2(floor(vUv.x * 10.0) / 10.0, floor((vUv.y + vUv.x *0.5) * 10.0) / 10.0);
    // float strength = random(gridUv);

    // gl_FragColor = vec4(vec3(strength), 1.0);

    // Patern 26
    // float strength = length(vUv);

    // gl_FragColor = vec4(vec3(strength), 1.0);

    // Patern 27
    // float strength = length(vUv - 0.5);
    // float strength = distance(vUv, vec2(0.5));

    // gl_FragColor = vec4(vec3(strength), 1.0);

    // Patern 28
    // float strength = 1.0 - distance(vUv, vec2(0.5));

    // gl_FragColor = vec4(vec3(strength), 1.0);

    // Patern 29
    // float strength = 0.01 / distance(vUv, vec2(0.5));

    // gl_FragColor = vec4(vec3(strength), 1.0);

    // Patern 30
    // float strength = 0.15 / distance(vec2(vUv.x, (vUv.y - 0.5) * 5.0 + 0.5), vec2(0.5));

    // gl_FragColor = vec4(vec3(strength), 1.0);

    // Patern 31
    // float strength = 0.15 / distance(vec2(vUv.x, (vUv.y - 0.5) * 5.0 + 0.5), vec2(0.5));
    // strength *= 0.15 / distance(vec2(vUv.y, (vUv.x - 0.5) * 5.0 + 0.5), vec2(0.5));

    // gl_FragColor = vec4(vec3(strength), 1.0);

    // Patern 31
    float strength = 0.15 / distance(vec2(vUv.x, (vUv.y - 0.5) * 5.0 + 0.5), vec2(0.5));
    strength *= 0.15 / distance(vec2(vUv.y, (vUv.x - 0.5) * 5.0 + 0.5), vec2(0.5));

    gl_FragColor = vec4(vec3(strength), 1.0);
}