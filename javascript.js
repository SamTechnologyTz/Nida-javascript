const nida = "Your nida";
const api_key = "Your api key";
const token = "Your token";

fetch('http://localhost/unoficialnida/nida/api', {
    method: 'POST',
    headers : {
        'api-key': api_key,
        'token': 'Your token',
        'account_id': 'Your account id'
    },
    body: JSON.stringify({ nida : nida })
}).then((response) => response.json())
.then((data) => {
    console.log(data);
})
.then((error) => {
    console.log(error);
})