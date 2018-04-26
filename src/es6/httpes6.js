// ** ES6 http requests with Promise and Fetch **
class Http {
    // Now, we do not need anymore to instatiate XHR object beacuse we will be using Fetch in combination with Promise

    // GET Request. We need to wrapp our fetch into Promise because we want to manipulate that function with .then and .catch when function is being called. It's the only way to handle with http request data when we call our method.
    get(url) {
        return new Promise((resolve,reject) => {
            fetch(url)
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        })
    }

    // POST Request
    post(url,data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                mehtod: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        })
    }

    // PUT Request
    put(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    }

    // DELETE Request
    delete(url) {
        return new Promise((resolve,reject) => {
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => resolve('Item Deleted!'))
            .catch(err => reject(err))
        })
    }
}