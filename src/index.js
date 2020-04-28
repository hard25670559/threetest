import * as Three from 'three'

let camera, scene, renderer;
let geometry, material, mesh;

init();
animate();

function init() {
    camera = new Three.PerspectiveCamera(
        70, 
        window.innerWidth / window.innerHeight, 
        0.01, 
        10
    );
    camera.position.z = 1;

    scene = new Three.Scene();

    geometry = new Three.BoxGeometry(0.2, 0.2, 0.2, 0.2);
    material = new Three.MeshNormalMaterial();

    mesh = new Three.Mesh(geometry, material);
    scene.add(mesh);

    renderer = new Three.WebGLRenderer({
        antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.append(renderer.domElement);
}

function animate() {
    console.log('1')
}