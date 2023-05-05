---
title: M295 /verify
---
# /verify

Der Endpunkt `/verify` wird verwendet, um die Sitzung zu überprüfen, die durch den Endpunkt `/login` festgelegt wurde.

## Parameter

Für diese Route sind keine Parameter erforderlich.
Alle erforderlichen Daten werden aus der übergebenen Sitzung abgerufen.

## Antworten

| Status | Meaning | Description |
| ------ | ------- | ----------- |
| **200** | OK | Der Benutzer ist eingeloggt |
| **403** | Unauthorized | Der Benutzer ist *nicht* eingeloggt. |
| **500** | Internal Server Error | Auf dem Server ist etwas schief gelaufen |

## Beispiel

### Anfrage (JavaScript)

```javascript copy
const url = 'http://localhost:3000';

fetch(`${url}/verify`)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error(err));
```

### Antwort

**Status Code:** 200
```json copy
{
    "success": true,
    "message": "Authorized",
    "email": "lolipop66611@gmail.com"
}
```