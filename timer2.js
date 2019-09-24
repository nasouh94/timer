const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on("data", (key) => {
 for (i = 0; i <= 9; i++) {
   
  if (key == i) {
    console.log("setting timer for" + key + " seconds");
     if (key === "b") {
        process.stdout.write('\x07');
        }
    setTimeout(function() {
        console.log("timer is done");
      
      },key * 1000);
    }

  }

  if (key === "b") {
    process.stdout.write('\x07');
  }

  if (key === '\u0003') {
    stdin.write("thanks for using me, Ciao!\n");
    process.exit();
  }
});