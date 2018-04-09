function toArrayBuffer(buf) {
    var ab = new ArrayBuffer(buf.length);
    var view = new Uint8Array(ab);
    for (var i = 0; i < buf.length; ++i) {
        view[i] = buf[i];
    }
    return view;
}
function toBuffer(ab) {
    return new Buffer( new Uint8Array(ab) );
}

window.toArrayBuffer=toArrayBuffer;
window.toBuffer=toBuffer;

window.PLY=require('./ply.js');