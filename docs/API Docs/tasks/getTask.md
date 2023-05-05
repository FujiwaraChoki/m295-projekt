---
title: M295 /:id
---
# /:id

Dieser Endpunkt gibt eine bestimmte Aufgabe auf der Grundlage der in der URL angegebenen ID zurück.

## Parameter

| **Name** 	| **Type** 	| **Description**           	|
|----------	|----------	|---------------------------	|
| id    	| string   	| Die ID der Aufgabe, die zurückgegeben werden soll   	|

## Antworten

| Status | Meaning | Description |
| ------ | ------- | ----------- |
| **200** | OK | Die Aufgabe wurde erfolgreich indiziert und zurückgegeben |
| **403** | Unauthorized | Der Benutzer ist nicht eingeloggt |
| **404** | Not Found | Die Aufgabe wurde nicht gefunden |
| **500** | Internal Server Error | Auf dem Server ist etwas schief gelaufen |

## Beispiel

### Anfrage (JavaScript)

```javascript copy
const url = 'http://localhost:3000/tasks/843eac4c-0e2f-44ba-921d-9c087b371227';

fetch(url)
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
    "status": "Pending"
}
```