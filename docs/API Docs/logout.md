---
title: M295 /logout
---
# /logout

Durch die Verwendung der Route `/logout` wird der Benutzer abgemeldet und die laufende Sitzung zerstört.

## Parameter

Für diese Route sind keine Parameter erforderlich.
Alle erforderlichen Daten werden aus der übergebenen Sitzung abgerufen.

## Antworten

| Status | Meaning | Description |
| ------ | ------- | ----------- |
| **204** | No Content | Der Benutzer wurde abgemeldet |
| **401** | Unauthorized | Der Benutzer ist *nicht* eingeloggt |
| **500** | Internal Server Error | Auf dem Server ist etwas schief gelaufen |

## Beispiel

### Anfrage (JavaScript)

```javascript copy
const url = 'http://localhost:3000';

fetch(`${url}/logout`, {
    method: 'DELETE'
})
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error(err));
```

### Antwort

**Status Code:** 204
```json copy

```