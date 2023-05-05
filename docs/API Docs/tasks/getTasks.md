---
title: M295 /
---
# /

Wenn der Client eine Anfrage an diesen Endpunkt sendet, gibt der Server ein JSON-Array
zurück, das alle Aufgaben enthält.

## Parameter

***Keine***

## Antworten

| Status | Bedeutung | Beschreibung |
| ------ | ------- | ----------- |
| **200** | OK | Die Aufgaben wurden erfolgreich zurückgegeben |
| **403** | Unauthorized | Der Benutzer ist nicht eingeloggt |
| **500** | Internal Server Error | Auf dem Server ist etwas schief gelaufen |

## Beispiel

### Anfrage (JavaScript)

```javascript copy
const url = 'http://localhost:3000/tasks';

fetch(url)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error(err));
```

### Antwort

**Status Code:** 200
```json copy
[
    {
        "id": "2ddbf73a-3f62-4fbf-bfee-6c1056d5aa06",
        "title": "Finish report",
        "description": "Complete final draft of the quarterly report for the CEO",
        "creation_date": "2023-05-10",
        "due_date": "2023-06-15",
        "status": "Pending"
    },
    {
        "id": "3d912a36-0d43-4f8f-a75c-cc2b5a716f2a",
        "title": "Buy groceries",
        "description": "Pick up milk, bread, eggs, and vegetables from the grocery store",
        "creation_date": "2023-05-01",
        "due_date": "2023-05-07",
        "status": "Done"
    },
    ...
]
```