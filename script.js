
const promise = new Promise((resolve, reject) => {
    const resolved = false; // schimba in true sau false

    setTimeout(() => {
        if (resolved) {
            resolve('Valoare dupa rezolvare');
        } else {
            reject('Valoare dupa respingere');
        }
    }, 2000);
});


promise.then((resolvedValue) => {
    console.log('S-a rezolvat cu valoarea: ', resolvedValue);
}).catch((rejectedValue) => {
    console.log('S-a respins cu valoarea: ', rejectedValue);
}).finally(() => {
    console.log('Se executa mereu!');
})

console.log('Cod ce se executa simultan cu promisiunea');