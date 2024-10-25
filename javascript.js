const nida = "Your nida";
const api_key = "Your api key"; // not important
const token = "Your token"; // not important
const account_id = "Your account id";

fetch('https://kabukukidigitali.xyz/nida/api/index.php', {
    method: 'POST',
    headers : {
        'api-key': api_key,
        'token': token,
        'account_id': account_id
    },
    body: JSON.stringify({ nida : nida })
}).then((response) => response.json())
.then((data) => {
    console.log(data);
})
.then((error) => {
    console.log(error);
})
