const rust = import("./pkg/index");
const c = document.getElementById("rustCanvas");
const gl = c.getContext("webgl", { antialias: true });

rust.then((m) => {
  if (!gl) {
    alert("Faileed to intialize webgl");
    return;
  }
  gl.enable(gl.BLEND);
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

  const FPS_THROTTLE = 1000.3 / 60;
  var lastDrawTime = -1;
  function render() {
    window.requestAnimationFrame(render);
    const currTime = Date.now();

    if (currTime >= lastDrawTime + FPS_THROTTLE) {
      lastDrawTime = currTime;

      if (window.innerHeight != c.height || window.innerWidth != c.width) {
        const h = window.innerHeight;
        const w = window.innerWidth;

        c.height = h;
        c.clientHeight = h;
        c.style.height = h;

        c.width = w;
        c.clientHeight = w;
        c.style.width = w;

        gl.viewport(0, 0, w, h);
      }
      //RUST UPDATE CALL
      //RUST RENDER CALL
    }
  }
  render();
});
