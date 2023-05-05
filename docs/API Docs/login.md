---
title: M295
---
# /login

Dieser Endpunkt authentifiziert den Benutzer und gibt schließlich eine Antwort mit der Angabe, ob
die Anmeldung erfolgreich war oder nicht.

Falls die Anmeldung ein Erfolg war, wird eine Session mithilfe von `express-session` erstellt.

## Parameters

| **Name** 	| **Typ** 	| **Beschreibung**           	|
|----------	|----------	|---------------------------	|
| email    	| string   	| Die E-Mail Addresse des Benutzers   	|
| password 	| string   	| Das Passwort des Benutzers        	|

## Responses

| Status | Bedeutung | Beschreibung |
| ------ | ------- | ----------- |
| **200** | OK | Die Anmeldung war erfolgreich |
| **400** | Bad Request | Entweder E-Mail oder Passwort wurde nicht angegeben |
| **403** | Unauthorized | Die Anmeldeinformationen sind falsch |
| **500** | Internal Server Error | Auf dem Server ist etwas schief gelaufen |

## Beispielt

### Anfrage (JavaScript)

```javascript copy
const url = 'http://localhost:3000';

fetch(`${url}/login`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        email: 'lolipop66611@gmail.com',
        password: 'm295'
    })
}).then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error(err));
```

### Antwort

**Status Code:** 200
```json copy
{
    "success": true,
    "email": "lolipop66611@gmail.com",
    "message": "Login successful"
}
```