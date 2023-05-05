# Authentifizierung

## Was ist Authentifizierung?

Bei der Authentifizierung wird die Identität eines Benutzers oder Prozesses überprüft. Die Authentifizierung erfolgt in der Regel durch die Übermittlung eines Benutzernamens oder einer ID und einer oder mehrerer privater Informationen, die nur der jeweilige Benutzer kennen sollte.

## Was haben wir zur Authentifizierung verwendet?

Wir haben bloss das eingehende Passwort, das uns von der Client-Seite zur Verfügung gestellt wurde, mit dem richtigen Passwort verglichen,
mit dem richtigen Passwort (da es nur eines gibt). 

## Wie haben wir es umgesetzt?

Wir haben es in etwa so umgesetzt:

```javascript
if (clientPassword === 'm295') {
    res.status(200).send('Anmeldung war erfolgreich! ✔️');
} else {
    res.status(401).send('Falsches Passwort ❌!');
}
```

Sie können es hier ausprobieren:

[m295.samihindi.com](https://m295.samihindi.com/en/auth#how-did-we-implement-it)

> **Wichtig**: Sie müssen beim Login eine valide E-Mail Adresse eingeben, da sie geprüft wird.