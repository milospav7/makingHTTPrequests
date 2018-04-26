// Make instance of HTTP class
const http = new Http();

// Put our wrappers into variables
const output = document.getElementById('output');
const image = document.getElementById('image');
const content = {
    firstname: "Milos",
    lastname: "Pavlovic",
    newId: "14",
    description: "We sent our content to API using POST request made with Fetch and Async/Await ES7 features."
};

// Add Event listener on buttons
document.getElementById('get').addEventListener('click', getData);
document.getElementById('put').addEventListener('click', putData);
document.getElementById('post').addEventListener('click', postData);
document.getElementById('delet').addEventListener('click', deleteData);

// Get function
function getData() {
    output.innerHTML = '';
    image.innerHTML = '';
    http.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(post => {
            output.innerHTML = `
                <h5 class="text-success mb-2">And those list items are the data we got from API using our GET request made with Fetch and Async/Await ES7 feature:</h5>
                <ul class="py-3 px-3 text-left text-light">
                    <li> User ID: ${post.userId}</li>
                    <li> ID: ${post.id}</li>
                    <li> Title: ${post.title}</li>
                    <li> Body: ${post.body}</li>
                </ul>
                `;
        })
        .catch(err => output.innerHTML = 'There was an error occured!');
    image.innerHTML = `
        <p class="mb-1">Http class made by class property - ES6 feature, and Http class put method</p>
        <img class="mb-4" src="img/es7get1.png">
        <p class="mb-1">Function that executes on GET button click</p>
        <img class="mb-4" src="img/es7get2.png">
    `;
}

// Put function
function putData() {
    output.innerHTML = '';
    image.innerHTML = '';
    http.put('https://jsonplaceholder.typicode.com/posts/2', content)
        .then(post => {
            output.innerHTML = `
                <h5 class="text-info mb-2">And those list items are the data we got from API using our PUT request made with Fetch and Async/Await ES7 feature:</h5>
                <ul class="py-3 px-3 text-left text-light">
                    <li> Firstname: ${post.firstname}</li>
                    <li> Lastname: ${post.lastname}</li>
                    <li> ID: ${post.newId}</li>
                    <li> Description: ${post.description}</li>
                </ul>
        `; 
        })
        .catch(err => output.innerHTML = 'There was an error occured!');
    image.innerHTML = `
        <p class="mb-1">Http class made by class property - ES6 feature, and Http class put method</p>
        <img class="mb-4" src="img/es7put1.png">
        <p class="mb-1">Function that executes on PUT button click</p>
        <img class="mb-4" src="img/es7put2.png">
    `;
}

// Post function
function 
postData() {
    output.innerHTML = '';
    image.innerHTML = '';
    http.post('https://jsonplaceholder.typicode.com/posts/', content)
        .then(post => {
            output.innerHTML = `
                <h5 class="text-primary mb-2">And those list items are the data we got from API using our PUT request made with Fetch and Async/Await ES7 feature:</h5>
                <ul class="py-3 px-3 text-left text-light">
                    <li> Firstname: ${post.firstname}</li>
                    <li> Lastname: ${post.lastname}</li>
                    <li> ID: ${post.newId}</li>
                    <li> Description: ${post.description}</li>
                </ul>
        `;
        })
        .catch(err => output.innerHTML = 'There was an error occured!');
    image.innerHTML = `
        <p class="mb-1">Http class made by class property - ES6 feature, and Http class put method</p>
        <img class="mb-4" src="img/es7post1.png">
        <p class="mb-1">Function that executes on POST button click</p>
        <img class="mb-4" src="img/es7post2.png">
    `;
}

// Delete function
function deleteData() {
    output.innerHTML = '';
    image.innerHTML = '';
    http.delete('https://jsonplaceholder.typicode.com/posts/2')
        .then(message => {
            output.innerHTML = `
                <h5 class="text-danger mb-2">And this message down below is, as you can remember, response from our delete request in case where everything went fine, all that using just our DELETE request made with Fetch and Async/Await ES7 feature:</h5>
                <p>${message}</p>
        
            `;
        })
        .catch(err => output.innerHTML = 'There was an error occured!');
    image.innerHTML = `
        <p class="mb-1">Http class made by class property - ES6 feature, and Http class put method</p>
        <img class="mb-4" src="img/es7delete1.png">
        <p class="mb-1">Function that executes on DELETE button click</p>
        <img class="mb-4" src="img/es7delete2.png">
    `;
}