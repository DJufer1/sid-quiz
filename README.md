# KI & Situationsdidaktik – interaktive Auswertung

Eigenständiges Quiz für Lehrpersonen in Baselland. Die Präsentation ist kein Bestandteil dieser Website.

## Verwenden

`index.html` im Browser öffnen. Den gesamten Ordner zusammenlassen, damit Bilder und Gestaltung geladen werden. Nach dem Hochladen auf GitHub Pages funktioniert dieselbe Datei als Startseite.

14 fiktive Fälle: sechs zum passenden KI-Vorgehen, vier zur Qualität von Situationen und vier zur Prüfung von KI-Inhalten. Enthalten sind Einfachauswahl, Mehrfachauswahl und das Markieren einer fehlerhaften Textstelle. Alle Antwortoptionen erhalten nach der Abgabe eine Begründung.

Pro Fall gibt es einen Punkt; bei Mehrfachauswahl nur bei vollständig korrekter Auswahl. Antwortreihenfolgen werden zu Beginn eines Durchgangs gemischt. Textstellen bleiben in ihrer Lesereihenfolge. Die Ergebnisse werden lokal im Browser gespeichert. Nicht vollständig gelöste Fälle lassen sich als neuer Vertiefungsdurchgang wiederholen. Auswertungen können als Textdatei oder über die Druckfunktion als PDF gespeichert werden.

## Auf GitHub Pages veröffentlichen

1. Ein Repository auf GitHub anlegen. Bei GitHub Free ein öffentliches Repository verwenden.
2. Den **Inhalt** dieses Ordners hochladen: `index.html`, `styles.css`, `cases.js`, `engine.js`, `app.js`, `.nojekyll`, `README.md` und den Ordner `assets`. `index.html` muss direkt im Hauptverzeichnis des Repositorys liegen.
3. Unter **Settings → Pages → Build and deployment** die Quelle **Deploy from a branch** wählen. Branch **main**, Ordner **/(root)** auswählen und speichern.
4. Nach erfolgreicher Veröffentlichung den von GitHub angezeigten Link öffnen und an die Teilnehmenden weitergeben.

Es braucht keine Installation, keinen Build, keinen API-Schlüssel und keinen eigenen Server. Die Website verwendet relative Dateipfade und funktioniert auch unter einer GitHub-Projektadresse.

Die Schritte folgen der [GitHub-Dokumentation zur Veröffentlichungsquelle](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

Öffentlicher Quizlink: [KI & Situationsdidaktik – Quiz](https://djufer1.github.io/sid-quiz/).

## Inhalt und Quellen

Kursgrundlage: Dominique Jufer, *KI-Einsatz in der Situationsdidaktik*, bereitgestellte PowerPoint-Fassung.

Die Übungsfälle und Lösungskommentare wurden eigens für diese Auswertung erstellt. Sie sind keine Zitate aus dem EHB-Leitfaden und keine offizielle kantonale Prüfung. Orte stellen den regionalen Bezug her; Personen, Angebote, Messdaten und konkrete Schulabläufe sind fiktiv. Anbieterabhängige Funktionen werden in den Fällen ausdrücklich vorausgesetzt, statt sie allen KI-Programmen zuzuschreiben.

- Ghisla, G., Boldrini, E. & Bausch, L. (2014): [SiD – Situationsdidaktik. Ein Leitfaden für Lehrkräfte in der Berufsbildung](https://www.hkvaarau.ch/sites/default/files/2019-02/allgemein_gemeinsam_situationsdidaktik_de.pdf). EHB. Didaktischer Bezugsrahmen.
- Kanton Basel-Landschaft, ICT Bildung: [KI in der Schule und Lernzyklus «KI und Unterricht»](https://www.baselland.ch/politik-und-behorden/direktionen/bildungs-kultur-und-sportdirektion/it-sbl/paedagogischer-ict-support-ict-bildung/kuenstliche-intelligenz-ki). Weiterführendes regionales Angebot.

## Bearbeiten und Daten

Fälle, Optionen und Begründungen stehen in `cases.js`, Gestaltung in `styles.css`. Richtige Antworten werden über stabile Options-IDs zugeordnet, nicht über die angezeigten Buchstaben.

Es werden keine Namen abgefragt und keine Quizantworten an einen Server gesendet. Es gibt keine zentrale Ergebnissammlung. Der lokale Speicher verwendet ausschliesslich den Schlüssel `sid-baselland-quiz-v1`. Ein neuer Durchgang ersetzt den bisherigen Quizstand in diesem Browser. Die Auswertung ist als formativer Selbstcheck gedacht.

Stand: 10. November 2026.
