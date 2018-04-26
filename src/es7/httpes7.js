// ** ES7 making HTTP requests - with Fetch in combination with Async/Await ** //

// Http class with methods for making requests
class Http {
    // And again we do neet need to asign an XHR object to it's property, because, as we sad it before, we are not doing it anymore directyle with XML requests. So, only constructor methods we need,

    // GET method
    async get(url) {
        // All we need to do is puting everything from fetch into an variable. Awaits means literaly wait until fetch is done, and then put it into const response. Same analogy for cost data.
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }

    // PUT method
    async put(url, content) {
        // Analogy same again. As we did it before, and here we need to define method type, headers and body property in fetch.
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(content)
        });
        const data = await response.json();
        return data;
    }

    // POST method
    async post(url, content) {
        // Structure same as put method
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(content)
        })
        const data = await response.json();
        return data;
    }

    // DELETE method
    async delete(url) {
        const reponse = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        });
        const data = ('Item successfuly deleted!');
        return data;    
    }
}