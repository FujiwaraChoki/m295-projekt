---
title: M295
---
# Erklärung

Das ToDo-Backend-Projekt speichert die ToDo-Liste in einem Array im Arbeitsspeicher des Servers. Es ist keine Datenbank erforderlich, da die Anzahl der ToDos begrenzt ist und das System keine komplexen Abfragen oder Operationen durchführen muss. Jedes ToDo-Objekt im Array enthält Informationen wie die ID, den Titel, die Beschreibung, das Fälligkeitsdatum und den Status des ToDo. Die ID wird automatisch generiert und ist eindeutig für jedes ToDo. Der Status des ToDo kann entweder "erledigt" oder "ausstehend" sein.

Um auf das Array zuzugreifen, bietet das Backend eine RESTful API an, die es Benutzern ermöglicht, die ToDos zu erstellen, zu lesen, zu aktualisieren und zu löschen.