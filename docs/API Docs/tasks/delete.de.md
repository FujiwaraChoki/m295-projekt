---
title: M295 /:id
---
# /:id

Nach Erhalt der Anfrage wird der Server die Aufgabe mit der angegebenen ID löschen.

## Parameters

| **Name** 	| **Type** 	| **Description**           	|
|----------	|----------	|---------------------------	|
| id    	| string   	| Die ID der Aufgabe, die gelöscht werden soll   	|

## Antworten

| Status | Meaning | Description |
| ------ | ------- | ----------- |
| **200** | OK | Die Aufgabe wurde erfolgreich gelöscht |
| **403** | Unauthorized | Der Benutzer ist nicht eingeloggt |
| **404** | Not Found | Die Aufgabe wurde nicht gefunden |
| **500** | Internal Server Error | Auf dem Server ist etwas schief gelaufen |

## Beispiel

### Anfrage (JavaScript)

```javascript copy
const url = 'http://localhost:3000/tasks/843eac4c-0e2f-44ba-921d-9c087b371227';

fetch(url, {
    method: 'DELETE',
})
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error(err));
```

### Antwort

**Status Code:** 200
```json copy
{
    "success": "true",
    "message": "Successfully deleted task with ID 843eac4c-0e2f-44ba-921d-9c087b371227",
    "task": {
        "id": "843eac4c-0e2f-44ba-921d-9c087b371227",
        "title": "Pay phone bill",
        "description": "Pay the phone bill before the due date to avoid late fees",
        "creation_date": "2023-05-19",
        "due_date": "2023-05-22",
        "status": "Pending"
    }
}
```