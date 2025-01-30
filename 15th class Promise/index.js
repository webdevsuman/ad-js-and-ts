//----------------------------------------PROMISE----------------------------------------
function Hello() {
    return new Promise((resolve,reject) => {
        resolve();
        // reject();
    });
}

let promise = Hello();

promise.then(() => console.log("Ok")).catch(() => console.log("Not ok"));