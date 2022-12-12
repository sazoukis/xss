fetch('https://iam-api.justgiving.com/account/refresh-access-token', {
 	credentials: 'include',
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({"GrantType":"refresh_token","ClientId":"jg.web"})
})
.then(response => response.json())
.then(response => alert("Your Token is " + JSON.stringify(response)))
