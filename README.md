# ply.js
## Reader and writer of PLY meshes.

Roberto Toro, February 2018


In the server, just `require('./ply.js');`.

In the client, use the browser version `browser.ply.js` from the `dist` directory. This is
a minimal sample code (from `/examples`):

```
<html>
<script src="browser.ply.js"></script>
<script>
var XHR = new XMLHttpRequest();
XHR.open("GET", "icosahedron.ply", true);
XHR.send();
XHR.onload = function (){
    const mesh = PLY.parsePLY(XHR.responseText);
    document.body.innerHTML = `
<p>Read PLY file</p>
<b>vertices:</b> ${mesh.p.length}</br>
<b>triangles:</b> ${mesh.t.length}</br>
`;
};
</script>
</html>
```

To build the browser version of `ply.js`, use

```
npm run build-browser
```

This script relies on browserify.
