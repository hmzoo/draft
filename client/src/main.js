
import request from 'request';

console.log("hello!!");


request.get('http://127.0.0.1:3000/num', (error, response, body) => {
        console.log(error, response, body);
    }

);
