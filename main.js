const app = document.getElementById('app');
if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
    // true for mobile device
    // document.write("mobile device");

    const typewriter = new Typewriter(app, {
        strings: ["C++/14", "Java"],
        loop: true
    });
    typewriter
        .typeString('I Know C++/14').pauseFor(1000).deleteChars(6)
        .typeString('Java').pauseFor(1000).deleteChars(4)
        .typeString("Linux").pauseFor(1000).deleteChars(5)
        .typeString("JS").pauseFor(1000).deleteChars(2)
        .typeString("HTML5").pauseFor(1000).deleteChars(5)
        .typeString("CSS").pauseFor(1000).deleteChars(3)
        .typeString("Git").pauseFor(1000).deleteAll()
        .typeString("And most of all").pauseFor(1000).deleteAll()
        .typeString("I like solving problems").pauseFor(1000)
        .start();
}