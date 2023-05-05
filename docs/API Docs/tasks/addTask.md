---
title: M295 /
---
# /

Wenn der Client eine Anfrage an diesen Endpunkt sendet, fügt der Server die Aufgabe
zur tasks.json-Datei hinzu und antwortet mit der neu hinzugefügten Aufgabe.

## Parameter

| **Name** 	| **Typ** 	| **Beschreibung**           	|
|----------	|----------	|---------------------------	|
| title    	| string   	| Der Titel der Aufgabe   	|
| description 	| string   	| Eine kurze Beschreibung/Übersicht der Aufgabe 	|
| due_date 	| string   	| Das Datum, an dem die Aufgabe fällig ist 	|

## Antworten

| Status | Bedeutung | Beschreibung |
| ------ | ------- | ----------- |
| **201** | Created | Die Aufgabe wurde erfolgreich erstellt |
| **403** | Unauthorized | Der Benutzer ist nicht eingeloggt |
| **406** | Not Acceptable | Ein Titel, eine Beschreibung oder ein Fälligkeitsdatum wurde nicht angegeben |
| **500** | Internal Server Error | Auf dem Server ist etwas schief gelaufen |

## Beispiel

### Anfrage (JavaScript)

```javascript copy
const url = 'http://localhost:3000/tasks/';

fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: 'Finish report',
        description: 'Complete final draft of the quarterly report for the CEO',
        due_date: '2023-06-15'
    })
})
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error(err));
```

### Antwort

**Status Code:** 201
```json copy
{
    "id": "2ddbf73a-3f62-4fbf-bfee-6c1056d5aa06",
    "title": "Finish report",
    "description": "Complete final draft of the quarterly report for the CEO",
    "creation_date": "2023-05-10",
    "due_date": "2023-06-15",
    "status": "Pending"
}
```