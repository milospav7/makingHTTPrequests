// Make instance of HTTP constructor
const http = new Http();

// Put our wrappers into variables
const output = document.getElementById('output');
const image = document.getElementById('image');
const content = {
    firstname: "Milos",
    lastname: "Pavlovic",
    newId: "14",
    description: "We sent our content to API using POST request made with Fetch and Promise ES6 features. Data argument can be either an existing http adress or some json file we want to sent, or just path to our own json file on computer."
};

// Add Event listener on buttons
document.getElementById('get').addEventListener('click', getData);
document.getElementById('put').addEventListener('click', putData);
document.getElementById('post').addEventListener('click', postData);
document.getElementById('delet').addEventListener('click', deleteData);

// Get request function
function getData() {
    output.innerHTML = '';
    image.innerHTML = '';
    http.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(post => {
            output.innerHTML = `
        <h5 class="text-success mb-2">And those list items are the data we got from API using our GET request made with Fetch and Promise ES6 feature:</h5>
        <ul class="py-3 px-3 text-left text-success">
            <li> User ID: ${post.userId}</li>
            <li> ID: ${post.id}</li>
            <li> Title: ${post.title}</li>
            <li> Body: ${post.body}</li>
        </ul>
        `;
        })
        .catch(err => console.log(err));
    image.innerHTML = `
        <p class="mb-1">Http class made by class property - ES6 feature, and Http class get method</p>
        <img class="mb-4" src="img/es6get1.png">
        <p class="mb-1">Function that executes on GET button click</p>
        <img class="mb-4" src="img/es6get2.png">
    `;
}

// Put request function
function putData() {
    output.innerHTML = '';
    image.innerHTML = '';
    http.put('https://jsonplaceholder.typicode.com/posts/1', content)
        .then(post => {
            output.innerHTML = `
        <h5 class="text-info mb-2">And those list items are the data we got from API using our PUT request made with Fetch and Promise ES6 feature:</h5>
        <ul class="py-3 px-3 text-left text-success">
            <li> Firstname: ${content.firstname}</li>
            <li> Lastname: ${content.lastname}</li>
            <li> ID: ${content.newId}</li>
            <li> Description: ${content.description}</li>
        </ul>
        `; 
        })
        .catch(err=> console.log(err));
    image.innerHTML = `
        <p class="mb-1">Http class made by class property - ES6 feature, and Http class put method</p>
        <img class="mb-4" src="img/es6put1.png">
        <p class="mb-1">Function that executes on PUT button click</p>
        <img class="mb-4" src="img/es6put2.png">
    `;
}

// Post request function 
function postData() {
    output.innerHTML = '';
    image.innerHTML = '';
    fetch('https://jsonplaceholder.typicode.com/posts/', content)
        .then(post => {
            output.innerHTML = `
            <h5 class="text-primary mb-2">And those list items are the data we got from API using our POST request made with Fetch and Promise ES6 feature:</h5>
        <ul class="py-3 px-3 text-left text-success">
            <li> Firstname: ${content.firstname}</li>
            <li> Lastname: ${content.lastname}</li>
            <li> ID: ${content.newId}</li>
            <li> Description: ${content.description}</li>
        </ul>
            `;
        })
        .catch(err => console.log(err));
    image.innerHTML = `
        <p class="mb-1">Http class made by class property - ES6 feature, and Http class post method</p>
        <img class="mb-4" src="img/es6post1.png">
        <p class="mb-1">Function that executes on POST button click</p>
        <img class="mb-4" src="img/es6post2.png">
    `;
}

// Delete request function
function deleteData() {
    output.innerHTML = '';
    image.innerHTML = '';
    http.delete('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        output.innerHTML = `
        <h5 class="text-danger mb-2">And this message down below is, as you can remember, response from our delete request in case where everything went fine, all that using just our DELETE request made with Fetch and Promise ES6 feature:</h5>
        <p>${response}</p>
        `
    })
    .catch(err => console.log(err));
    image.innerHTML = `
        <p class="mb-1">Http class made by class property - ES6 feature, and Http class delete method</p>
        <img class="mb-4" src="img/es6delete1.png">
        <p class="mb-1">Function that executes on DELETE button click</p>
        <img class="mb-4" src="img/es6delete2.png">
    `;
}
