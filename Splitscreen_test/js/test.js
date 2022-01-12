var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,0.1,1000);
camera.position.z = 8;

var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setClearColor("#000000");
renderer.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderer.domElement);

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();

});



var geometry = new THREE.DodecahedronGeometry(1.8, 0);
var material = new THREE.MeshLambertMaterial({
    color: 0xffffff,
});


var mesh = new THREE.Mesh(geometry, material);
mesh.position.set(8, 4, -1.5); 
scene.add(mesh);

var light = new THREE.PointLight(0xFFFFFF, 1, 800);
light.position.set(0,0,-20);
scene.add(light);

var light2 = new THREE.PointLight(0xFFFFFF, 2, 10);
light2.position.set(0,0,200);
scene.add(light2);

var light3 = new THREE.PointLight(0xFFFFFF, 2, 500);
light3.position.set(0,50,50);
scene.add(light3);

const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
scene.add( directionalLight );

var render = function() {
    requestAnimationFrame(render);

    mesh.rotation.y += 0.01;
    mesh.rotation.z += 0.01;

    
    renderer.render(scene, camera);
}



render();

