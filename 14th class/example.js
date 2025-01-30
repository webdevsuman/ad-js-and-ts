const js = (name) => {
  if (name === "Nill") {
    return function (topic) {
      console.log(` Hi ${name}. What is Course? ${topic}`);
    };
  }

  if (name === "Raj") {
    return function (topic) {
      console.log(` Hi ${name}. What is Course? ${topic}`);
    };
  }

  if (name === "Jhon") {
    return function (topic) {
      console.log(` Hi ${name}. What is Course? ${topic}`);
    };
  } else {
    return function () {
      console.log("Error");
    };
  }
};

js("Nillnn")("React");
js("Raj")("Node");
js("Jhon")("Angular");
