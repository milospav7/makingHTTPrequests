// Make instance of HTTP constructor
const http = new Http;

// Put our wrappers into variables
const output = document.getElementById('output');
const image = document.getElementById('image');
const content = {
    firstname: "Milos",
    lastname: "Pavlovic",
    newId: "14",
    description: "We sent our content to API using Ajax POST request. Data argument can be either an existing http adress or some json file we want to sent, or just path to our own json file on computer."
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
    http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, post) {
        let data = JSON.parse(post);
        output.innerHTML = `
        <h5 class="text-success mb-2">And those list items are the data we got from API using our Ajax GET request:</h5>
        <ul class="py-3 px-3 text-left text-success">
            <li> User ID: ${data.userId}</li>
            <li> ID: ${data.id}</li>
            <li> Title: ${data.title}</li>
            <li> Body: ${data.body}</li>
        </ul>
        `;
    })
    image.innerHTML = `
        <p class="mb-1">XHR object made by function constructor - ES5 feature</p>
        <img class="mb-4" src="img/ajax1.png">
        <p class="mb-1">Function that executes on GET button click</p>
        <img class="mb-4" src="img/ajaxget2.png">
    `;
}

// Post request function
function postData() {
    output.innerHTML = '';
    image.innerHTML = '';
    http.post('https://jsonplaceholder.typicode.com/posts', content, function(err, post) {
        let data = JSON.parse(post);
        output.innerHTML = `
        <h5 class="text-primary mb-2">And those list items are the data we sent to our API using our Ajax POST request:</h5>
        <ul class="py-3 px-3 text-left text-success">
            <li> Firstname: ${data.firstname}</li>
            <li> Lastname: ${data.lastname}</li>
            <li> ID: ${data.newId}</li>
            <li> Description: ${data.description}</li>
        </ul>
        `;
    })
    image.innerHTML = `
        <p class="mb-1">XHR object made by function constructor - ES5 feature</p>
        <img class="mb-4" src="img/ajaxpost1.png">
        <p class="mb-1">Function that executes on POST button click</p>
        <img class="mb-4" src="img/ajaxpost2.png">
    `;
    
}

// Put request function
function putData() {
    output.innerHTML = '';
    image.innerHTML = '';
    http.put('https://jsonplaceholder.typicode.com/posts/1', content, function(err, post) {
        let data = JSON.parse(post);
        output.innerHTML = `
        <h5 class="text-info mb-2">And those list items are the data we sent to API in order to update an "existing" post/user, all that using just our Ajax PUT request:</h5>
        <ul class="py-3 px-3 text-left text-success">
            <li> Firstname: ${data.firstname}</li>
            <li> Lastname: ${data.lastname}</li>
            <li> ID: ${data.id}</li>
            <li> Description: ${data.description}</li>
        </ul>
        `;
    })
    image.innerHTML = `
        <p class="mb-1">XHR object made by function constructor - ES5 feature</p>
        <img class="mb-4" src="img/ajaxput1.png">
        <p class="mb-1">Function that executes on PUT button click</p>
        <img class="mb-4" src="img/ajaxput2.png">
    `;
}

// Delete request function
function deleteData() {
    output.innerHTML = '';
    image.innerHTML = '';
    http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, post) {
        output.innerHTML = `
        <h5 class="text-danger mb-2">And this message down below is, as you can remember, response from our delete request in case where everything went fine, all that using just our Ajax DELETE request:</h5>
        <p>${post}</p>
        
        `;
    })
    image.innerHTML = `
        <p class="mb-1">XHR object made by function constructor - ES5 feature</p>
        <img class="mb-4" src="img/ajaxdelete1.png">
        <p class="mb-1">Function that executes on DELETE button click</p>
        <img class="mb-4" src="img/ajaxdelete2.png">
    `;
}
