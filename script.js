
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


// async await

async function getUsers() {
    let users = [
            {username: 'username1', password: 'pass1'},
            {username: 'username2', password: 'pass2'}
        ]

    return users;
}

const users = getUsers();

console.log(users);

users.then((users) => {
    console.log(users);
}).catch((e) => console.log(e));

async function doSomethingWithUsers() {
    let users = await getUsers();
    console.log('users din await: ', users);
}

doSomethingWithUsers();