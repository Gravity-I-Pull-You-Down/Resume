let read = document.querySelector(":root");
function get() {
    // Get the styles (properties and values) for the root
    let rs = getComputedStyle(read);
    // Alert the value of the --blue variable
    alert("The value of --state is: " + rs.getPropertyValue('--state'));
  }
function setAnimation(){
    read.style.setProperty("--state","paused");
}

setTimeout(function (){
    read.style.setProperty("--state","paused");},20000);