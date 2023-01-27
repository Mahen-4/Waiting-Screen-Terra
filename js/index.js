

console.log("test")

//create the renderer
const renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setClearColor(0x000000, 0)
//set size of the renderer
renderer.setSize(965,515);

//Add the renderer to the page as a canvas
document.getElementById("canvasThree").appendChild(renderer.domElement)

const textureLoader = new THREE.TextureLoader();

//create a scene in the render place and set background images
const scene = new THREE.Scene();
// scene.background = textureLoader.load(montagne)
//scene.background = new THREE.Color(0xF7EDE2);
//create camera
const camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight, 0.1, 1000);

//create light
const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 0.8);
directionalLight.position.set(-30,50,0);

const ambientLight = new THREE.AmbientLight(0xFFFFF);
scene.add(ambientLight)

//set camera position
camera.position.set(0,2,9);

//create sphere
const spehereGeometry = new THREE.SphereGeometry(5,50,50);
//const spehereMaterial = new THREE.MeshBasicMaterial({color: 0xFFFFF})
const spehereMaterial = new THREE.MeshBasicMaterial({map:textureLoader.load("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/4013c234-b843-4331-84cd-8a86d940d26f/dcrbmun-38493001-d0cc-4bd6-9acb-2bf1109b488b.jpg")})
const sphere = new THREE.Mesh(spehereGeometry,spehereMaterial)
sphere.position.set(0,2,0)


//add to scene
scene.add(directionalLight);
scene.add(sphere)

function animate(){
    sphere.rotation.y += 0.01;
    //link scene and camera
    renderer.render(scene,camera)
}

//loop the animation function
renderer.setAnimationLoop(animate)
