# Sprite Animator

This is a modified verison of Stemkoski's [texture animation example](http://stemkoski.github.io/Three.js/Texture-Animation.html).

Adds a SpriteAnimator object to the global namespace. Depends on THREE.js

## Example Usage

**Demo:** [http://andrewray.me/sprite-animator/examples/index.html](http://andrewray.me/sprite-animator/examples/index.html).

Include `SpriteAnimator.js` on your page.

Create a sprite:

    var texture = THREE.ImageUtils.loadTexture( texture );

    SpriteAnimator.add({
        texture: texture
        tilesHorizontal: 5,
        tilesVertical: 5,
        repeat: 1
    });

Create an object with a material that uses that texture:

    var material = new THREE.MeshBasicMaterial({
        map: texture
    });

    var geometry = new THREE.PlaneGeometry( 200, 200 ),
        mesh = new THREE.Mesh( geometry2, material );
    scene.add( mesh2 );

In your update function, call:

    SpriteAnimator.update( timeDelta );

## API

### SpriteAnimator.add( configObject );

Returns the animation object.

Config options:

    (Image) texture
        THREE.js texture

    (Number) tilesHorizontal
    (Number) tilesVertical
        The number of tiles horizontally and vertically in the image

    (Number) repeat
        How many times this sprite should repeat

    (Number) fps
        How fast this sprite should animate in frames per second

    (Number) startFrame
        The frame this sprite starts on

    (Number) numberOfTiles
        If there are fewer tiles than rows * columns, for example if the last
        few tiles are blank, you can specify the exact tile number

    (Function) onEnd:
        Callback function to execute when animation is complete

### SpriteAnimator.update( delta );

Updates the drawing of all sprites. Delta is the time between the last frame
and the current frame, which can be acquired by:

    var clock = new THREE.Clock();
    var delta = clock.getDelta();

### SpriteAnimator.free( animation );

Manually remove this animation from draw land.
