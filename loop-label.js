loop1: for (var i = 0; i < 4; i++) {
  loop2: for (var j = 0; j < 4; j++) {
    console.log(`i = ${i}; j = ${j}`);
    if (i === 1) continue loop1;
  }
}
