---
title: M295 /:id
---
# /:id

Dieser Endpunkt aktualisiert eine bestimmte Aufgabe auf der Grundlage der in der URL angegebenen ID.

## Parameters

| **Name** 	| **Typ** 	| **Beschreibung**           	|
|----------	|----------	|---------------------------	|
| id    	| string   	| Die ID der Aufgabe, die aktualisiert werden soll   	|

## Antworten

| Status | Bedeutung | Beschreibung |
| ------ | ------- | ----------- |
| **200** | OK | Die Aufgabe wurde erfolgreich aktualisiert |
| **403** | Unauthorized | Der Benutzer ist nicht eingeloggt |
| **404** | Not Found | Die Aufgabe wurde nicht gefunden |
| **406** | Not accepted | Entweder wurde die Beschreibung, das Fälligkeitsdatum, das Bundesland oder der Titel nicht angegeben |
| **500** | Internal Server Error | Auf dem Server ist etwas schief gelaufen |

## Beispiel

### Anfrage (JavaScript)

```javascript copy
const url = 'http://localhost:3000/tasks/843eac4c-0e2f-44ba-921d-9c087b371227';

fetch(url, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: 'Pay phone bill',
        description: 'Pay the phone bill before the due date to avoid late fees',
        due_date: '2023-05-22',
        status: 'Done'
    })
})
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error(err));
```

### Antwort

**Status Code:** 200
```json copy
{
    "id": "843eac4c-0e2f-44ba-921d-9c087b371227",
    "title": "Pay phone bill",
    "description": "Pay the phone bill before the due date to avoid late fees",
    "creation_date": "2023-05-19",
    "due_date": "2023-05-22",
    "status": "Done"
}
```