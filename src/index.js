
import * as THREE from 'https://cdn.skypack.dev/pin/three@v0.138.0-zvVD8VzksUZ5anXAslX5/mode=imports/optimized/three.js';

let app = {
  el: document.getElementById("app"),
  scene: null,
  renderer: null,
  camera: null
}

const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

let INTERSECTED;
let theta = 0;

const init = () => {
  app.renderer = new THREE.WebGLRenderer();
  console.log(app.renderer);
  app.renderer.setSize ( window.innerWidth, window.innerHeight);
  app.el.appendChild (app.renderer.domElement);

  app.scene = new THREE.Scene();

  app.camera =  new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

  const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
const cube1 = new THREE.Mesh( geometry, material );
cube.position.x = 3;
app.scene.add( cube );
app.scene.add(cube1);

app.camera.position.z = 5;
window.addEventListener( 'pointermove', onPointerMove );
};

const render = () => {
  requestAnimationFrame(render);
  // update the picking ray with the camera and pointer position
	raycaster.setFromCamera( pointer, app.camera );

	// calculate objects intersecting the picking ray
	const intersects = raycaster.intersectObjects( app.scene.children );

	// for ( let i = 0; i < intersects.length; i ++ ) {
	// 	intersects[ i ].object.material.color.set( 0xffffff );
  //   console.log("INTERSECTED")
	// }

  if ( intersects.length > 0 ) {

  					if ( INTERSECTED != intersects[ 0 ].object ) {

  						if ( INTERSECTED )

  						INTERSECTED = intersects[ 0 ].object;
              console.log(INTERSECTED)
  						// INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
  						// INTERSECTED.material.emissive.setHex( 0xff0000 );
              console.log("INTERSECECTED")

  					}

  				} else {

  					if ( INTERSECTED )

  					INTERSECTED = null;
            console.log("GONEx")

  				}

  app.renderer.render(app.scene, app.camera);

};

function onPointerMove( event ) {

	// calculate pointer position in normalized device coordinates
	// (-1 to +1) for both components

	pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

}

init();
render();
