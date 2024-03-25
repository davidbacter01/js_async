
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


// try/catch 

try {
    const labels = ['label1'];
    // saySomething('asdsa');
    console.log(`First label is ${labels[0]}`);
} catch (err) {
    console.log('An error has occured: ', err);
} finally {
    console.log('Finally has executed');
}

console.log('After try/catch');


const baseUrl = 'https://jsonplaceholder.typicode.com';
const posts = '/posts';

// exemplu folosind promisiuni
fetch(`${baseUrl}${posts}`)
.then((response) => {
    console.log(response);
    response.json()
.then((data) => {
    console.log(data);
})})
.catch((e) => console.log(e));


// exemplu folosind async/await
async function getPosts() {
    try {
        const response = await fetch(`${baseUrl}${posts}`);
        const data = await response.json();
        console.log('data: ', data);
        return data;
    } catch (e) {
        console.log('Something went wrong: ', e);
    }
}

getPosts();

async function displayPosts() {
    const posts = await getPosts();
    const postsTargetElement = document.getElementById('main');
    
    for (const post of posts) {
        const container = document.createElement('article');
        container.innerHTML = `<h2>${post.title}</h2>
        <div>${post.body}</div>
        <button>Delete</button>`;
        postsTargetElement.appendChild(container);
        const btn = container.querySelector('button');
        btn.addEventListener('click', () => {
            fetch(`${baseUrl}/posts/${post.id}`, {method: 'DELETE'})
            .then((obj) => console.log('deleted: ', obj))
            .then(() => container.remove());
        });
    }
}

displayPosts();