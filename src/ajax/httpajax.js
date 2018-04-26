//  ** Making HTTP Requests using Ajax technology and ES5 features **

// Function constructor for Http object
function Http() {
    this.http = new XMLHttpRequest();
}

// Adding methods to our function constructor with prototype property //
// GET Request
Http.prototype.get = function(url, callback) {
    // First, define which type of method we are using and make sure add true at the end for asyn behaviour
    this.http.open('GET', url, true);

    // Then, we define what we want to do with our data if status is 200. 200 === OK
    let self = this;
    this.http.onload = function() {
        if(self.http.status === 200) {
            callback(null, self.http.responseText)
        } else {
            callback('Error: ' + self.http.status)
        }
    }

    // And at the end, we send that request
    this.http.send();
}

// POST Request. Because we need to send some data now we will have and second argument(data we want to send)
Http.prototype.post = function(url, data, callback) {
    // First, define which type of method we are using and make sure add true at the end for asyn behaviour
    this.http.open('POST', url, true);

    // And becauses we manipulate with some data we will need one more method for declaring our post request
    this.http.setRequestHeader('Content-type', 'application/json');

    // Since we are not getting info from server we do not need to check status in this case
    let self = this;
    this.http.onload = function() {
        callback(null, self.http.responseText)
    }

    // Be sure to use JSON.stringify to conver data we want to sent into json file(if it's not json)
    this.http.send(JSON.stringify(data));
}

// PUT Request
Http.prototype.put = function(url, data, callback) {
    // First, define which type of method we are using and make sure add true at the end for asyn behaviour
    this.http.open('PUT', url, true);

    // And becauses we manipulate with some data we will need one more method for declaring our post request
    this.http.setRequestHeader('Content-type', 'application/json');

    // Since we are not getting info from server we do not need to check status in this case
    let self = this;
    this.http.onload = function() {
        callback(null, self.http.responseText)
    }

    // Be sure to use JSON.stringify to conver data we want to sent into json file(if it's not json)
    this.http.send(JSON.stringify(data));
}

// DELETE Request
Http.prototype.delete = function(url, callback) {
    // First, define which type of method we are using and make sure add true at the end for asyn behaviour
    this.http.open('DELETE', url, true);

    // Then, we define what we want to do with our data if status is 200. 200 === OK. In this case we just want to get message 'Post Deleted' if everything went ok. We do not need reponseText bacuse it's empty data(we deleted it)
    let self = this;
    this.http.onload = function() {
        if(self.http.status === 200) {
            callback(null, 'Post Deleted!');
        } else {
            callback('Error: ' + self.http.status);
        }
    }

    // And at the end, we send that request
    this.http.send();
}
