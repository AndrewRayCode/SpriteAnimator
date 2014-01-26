var clock = new THREE.Clock(),
    container, scene, camera, renderer, controls, stats;

function init() {

    scene = new THREE.Scene();
    var SCREEN_WIDTH = 400, SCREEN_HEIGHT = 400;
    var VIEW_ANGLE = 45, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 0.1, FAR = 20000;

    camera = new THREE.PerspectiveCamera( VIEW_ANGLE, ASPECT, NEAR, FAR);
    camera.position.set( 0, 0, 500 );
    camera.lookAt( scene.position );

    scene.add( camera );

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setClearColor(0x000000, 1);

    renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
    container = document.getElementById( 'canvas' );
    container.appendChild( renderer.domElement );

    // Load the sprite texture
    var texture = THREE.ImageUtils.loadTexture( './explosion_sprite_5x5_1.jpg' );

    // Instantiate the sprite animation
    SpriteAnimator.add({
        texture: texture,
        tilesHorizontal: 5,
        tilesVertical: 5
    });

    // Build a plane to show this sprite on
    var material = new THREE.MeshBasicMaterial({
        blending: THREE.AdditiveBlending,
        transparent: true,
        map: texture
    });

    var geometry = new THREE.PlaneGeometry( 200, 200 ),
        mesh = new THREE.Mesh( geometry, material );

    scene.add( mesh );

}

function render() {
    renderer.render( scene, camera );

    // Update the animation
    SpriteAnimator.update( clock.getDelta() );
}

function animate() {
    window.requestAnimationFrame( animate );
    render();
}

init();
animate();
