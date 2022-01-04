// Web worker for counting time 
var w;

function startWorker() {
  if(typeof(Worker) !== "undefined") {
    if(typeof(w) == "undefined") {
      w = new Worker("worker.js");
    }
    w.onmessage = function(event) {
      let x = event.data;
      if (x>=60) {
      result = parseInt(x/60) + " minutes and " + (x%60) + " seconds."
      }
      else {
        result = event.data + " seconds."
      }
      document.getElementById("result").innerHTML = result;
    };
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Workers...";
  }
}

window.addEventListener("load", startWorker());