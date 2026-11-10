/* Fiktive Übungsfälle. Sprachlich vereinfacht; Inhalte und Lösungen erhalten. */
window.SID_CASES = [
  {
    "id": "wiederkehrend",
    "group": "Vorgehen wählen",
    "place": "Reinach · Primarstufe",
    "title": "Jede Woche ein anderer Einkauf",
    "type": "single",
    "scenario": "Mara plant für ihre 6. Klasse acht kurze Einkaufssituationen. Lernziel, Textlänge, Aufbau und Aufträge haben sich bereits bewährt. Jede Woche ändern nur Waren, Preise und Budget. Diese Angaben gibt Mara selbst vor. Ihr KI-Programm bietet einen normalen Chat, aber keine speicherbaren Assistenten. Sie möchte möglichst wenig neu eingeben müssen.",
    "question": "Welches Vorgehen passt hier am besten?",
    "options": [
      {
        "id": "a",
        "text": "Einen geprüften Single-Prompt wiederverwenden. Er enthält feste Vorgaben und Felder für die wechselnden Angaben.",
        "why": "Aufbau und Vorgaben bleiben gleich. Nur einzelne Angaben ändern. Ein vorbereiteter Prompt passt deshalb gut. Mara muss die Ergebnisse weiterhin prüfen."
      },
      {
        "id": "b",
        "text": "Jede Woche mit einer offenen Eingabe starten. Aufbau, Textlänge und Auftrag danach im Gespräch mit der KI festlegen.",
        "why": "Iteratives Prompten wäre möglich. Mara müsste aber jede Woche Vorgaben neu klären, die bereits feststehen. Das erhöht ihren Aufwand."
      },
      {
        "id": "c",
        "text": "Bisherige Ergebnisse als Stilvorlage geben. Die KI legt für die neuen Situationen jeweils passende Preise fest.",
        "why": "Beispiele können den Stil vorgeben. Die Preise soll hier aber Mara bestimmen. Auch der feste Aufbau lässt sich direkt in einem Prompt beschreiben."
      },
      {
        "id": "d",
        "text": "Für jede der acht Warenarten einen eigenen Ablauf erstellen. Diese Abläufe getrennt speichern und pflegen.",
        "why": "Andere Waren brauchen hier keinen anderen Ablauf. Acht einzelne Vorlagen machen mehr Arbeit, obwohl eine gemeinsame Vorlage reicht."
      }
    ],
    "correct": [
      "a"
    ],
    "insight": "Ein fester Auftrag mit klaren wechselnden Angaben eignet sich für einen wiederverwendbaren Prompt. Auch damit bleiben die Ergebnisse prüfpflichtig.",
    "criterion": "Single-Prompt · Wiederverwendbarkeit"
  },
  {
    "id": "gezielt-korrigieren",
    "group": "Vorgehen wählen",
    "place": "Muttenz · Sekundarstufe I",
    "title": "Ein Entwurf, zwei Baustellen",
    "type": "single",
    "scenario": "Jonas erstellt einmalig eine Situation für ein Schulfest. Rollen, Budget und die Entscheidung zwischen zwei Varianten passen bereits. Die Sprache ist für seine Klasse zu schwierig. Zwei Aufträge fragen nur Begriffe ab. Jonas hat wenig Zeit. Die Angaben sollen gleich bleiben, und die Lernenden sollen ihre Wahl weiterhin begründen.",
    "question": "Was sollte Jonas als Nächstes tun?",
    "options": [
      {
        "id": "a",
        "text": "Eine neue Gesamtfassung erstellen lassen. Danach die ursprünglichen Zahlen wieder einsetzen.",
        "why": "So werden auch passende Teile neu geschrieben. Selbst wenn Jonas die alten Zahlen einsetzt, können Aufträge und Zusammenhänge verändert sein."
      },
      {
        "id": "b",
        "text": "Im selben Chat Sprache und die zwei Aufträge ändern lassen. Rollen und Zahlen sollen gleich bleiben. Danach beides prüfen.",
        "why": "Jonas gibt genau vor, was verbessert werden soll. Beim Vergleich prüft er auch, ob die KI Rollen und Zahlen tatsächlich erhalten hat."
      },
      {
        "id": "c",
        "text": "Zuerst einen Agenten mit allen Unterlagen einrichten. Dann die Situation nochmals erstellen lassen.",
        "why": "Ein Agent kann bei wiederkehrenden Aufgaben helfen. Für diese einmalige, begrenzte Korrektur verursacht die Einrichtung eher zusätzlichen Aufwand."
      },
      {
        "id": "d",
        "text": "Eine gelungene Situation einer anderen Klasse beilegen. Den ganzen Entwurf an deren Sprache und Aufbau anpassen lassen.",
        "why": "Eine Vorlage kann helfen. Sie könnte aber auch Rollen und Probleme der anderen Klasse in den Entwurf bringen. Hier reichen zwei gezielte Änderungen."
      }
    ],
    "correct": [
      "b"
    ],
    "insight": "Beim iterativen Prompten werden konkrete Änderungen beauftragt und danach geprüft. Dafür muss nicht jedes Mal die ganze Situation neu entstehen.",
    "criterion": "Iteratives Prompten · Kohärenz"
  },
  {
    "id": "team-assistent",
    "group": "Vorgehen wählen",
    "place": "Liestal · Berufsfachschule",
    "title": "Viele Themen, gemeinsame Grundlagen",
    "type": "single",
    "scenario": "Ein ABU-Team erstellt das ganze Jahr Situationen zu verschiedenen Themen. Dafür gelten gemeinsame, freigegebene Unterlagen und Qualitätsvorgaben. Im KI-System der Schule kann das Team einen Assistenten mit festen Anweisungen und aktualisierbaren Dokumenten einrichten. Eine Person hält ihn aktuell. Alle Entwürfe werden fachlich geprüft.",
    "question": "Welche Lösung passt am besten zu diesem Team?",
    "options": [
      {
        "id": "a",
        "text": "Für jede Situation alle Dokumente in einen neuen Chat kopieren. Die Vorgaben jedes Mal neu eingeben.",
        "why": "Das kann funktionieren, wiederholt aber viele Arbeitsschritte. Ein gemeinsamer Assistent kann die Unterlagen und Vorgaben dauerhaft bereitstellen."
      },
      {
        "id": "b",
        "text": "Vier gelungene Situationen als Beispiele speichern. Neue Situationen nur an deren Form ausrichten lassen.",
        "why": "Best-Practice-Beispiele helfen beim Stil. Sie ersetzen aber nicht die aktuellen Fachunterlagen und gemeinsamen Vorgaben des Teams."
      },
      {
        "id": "c",
        "text": "Einen gemeinsamen Agenten mit Unterlagen und klaren Vorgaben einrichten. Festlegen, wie er korrigiert und aktuell gehalten wird.",
        "why": "Das Team erstellt regelmässig verschiedene Situationen mit gemeinsamen Grundlagen. Der beschriebene Agent kann diese Grundlagen bereitstellen."
      },
      {
        "id": "d",
        "text": "Eine Checkliste für die fertigen Entwürfe verteilen. Jedes Teammitglied bereitet seine Chats selbst vor.",
        "why": "Die Checkliste hilft bei der Kontrolle. Die gemeinsamen Unterlagen und Vorgaben werden dadurch aber noch nicht beim Erstellen genutzt."
      }
    ],
    "correct": [
      "c"
    ],
    "insight": "Hier passt ein Agent, weil das Team gemeinsame Grundlagen dauerhaft nutzt und pflegt. Trotzdem muss jeder Entwurf fachlich geprüft werden.",
    "criterion": "Agenten trainieren · Gemeinsame Vorgaben"
  },
  {
    "id": "beispiele-nutzen",
    "group": "Vorgehen wählen",
    "place": "Binningen · Sekundarstufe II",
    "title": "Ein erkennbarer Stil",
    "type": "single",
    "scenario": "Eine Fachgruppe hat vier geprüfte Situationen. Aufbau, Sprache und Aufträge passen gut. Neue Themen sollen im gleichen Stil bearbeitet werden. Die Fachinhalte liefert die Gruppe jeweils mit. Gesucht ist vor allem eine Stilvorlage – kein Assistent mit Fachunterlagen und kein gespeicherter Arbeitsablauf.",
    "question": "Wie sollte die Gruppe die vier Situationen nutzen?",
    "options": [
      {
        "id": "a",
        "text": "Die sprachlich beste Situation wählen. Für neue Themen Namen, Orte und Fachbegriffe austauschen lassen.",
        "why": "Durch den Austausch einzelner Wörter kann eine unpassende Handlung bestehen bleiben. Ein ähnlicher Stil reicht für eine fachlich gute neue Situation nicht aus."
      },
      {
        "id": "b",
        "text": "Die vier Situationen und einige ungeprüfte Entwürfe beilegen. So erhält die KI möglichst viele Beispiele.",
        "why": "Die KI könnte auch Fehler aus ungeprüften Entwürfen übernehmen. Die Beispiele sollen zeigen, welche Qualität die Gruppe erreichen möchte."
      },
      {
        "id": "c",
        "text": "Nur die Überschriften der vier Situationen übernehmen. Die weitere Ausgestaltung der KI überlassen.",
        "why": "Die Überschriften geben einen Teil des Aufbaus vor. Wie Sprache und Aufträge gestaltet sein sollen, bleibt dabei weitgehend offen."
      },
      {
        "id": "d",
        "text": "Die vier Situationen als Best-Practice-Beispiele geben. Kennzeichnen, was gleich bleiben soll und welche Inhalte jeweils wechseln.",
        "why": "Geprüfte Beispiele zeigen den gewünschten Stil. Die zusätzlichen Hinweise helfen, Gestaltung und wechselnde Fachinhalte auseinanderzuhalten."
      }
    ],
    "correct": [
      "d"
    ],
    "insight": "Best Practice nutzt gelungene Beispiele als Orientierung. Dabei muss klar sein, welche Merkmale übertragbar sind und welche zum einzelnen Fall gehören.",
    "criterion": "Best Practice Training · Vorlagenqualität"
  },
  {
    "id": "ablauf-teilen",
    "group": "Vorgehen wählen",
    "place": "Sissach · Stufenübergreifendes Team",
    "title": "Ein Ablauf soll mitreisen",
    "type": "single",
    "scenario": "Ein Team hat einen Ablauf erprobt: Lerngruppe und Lernziel klären, eine Situation erstellen und sie mit einem Raster prüfen. Es möchte diesen Ablauf in neuen Chats und mehreren KI-Programmen nutzen. Diese Programme unterstützen gespeicherte Arbeitsanweisungen. Das Team pflegt eine gemeinsame Fassung. Die Fachunterlagen wechseln je nach Projekt.",
    "question": "Was sollte das Team dafür erstellen?",
    "options": [
      {
        "id": "a",
        "text": "Einen gemeinsam gepflegten Skill mit Ablauf, benötigten Angaben und Prüfkriterien. Er legt auch fest, wann die Lehrperson entscheiden muss.",
        "why": "Wiederverwendet werden soll der Ablauf. Ein Skill kann die Schritte und nötigen Entscheidungen festhalten. Die genannten Programme unterstützen diese Möglichkeit."
      },
      {
        "id": "b",
        "text": "Eine Sammlung fertiger Situationen. Sie wird in neuen Chats als Beispiel eingefügt, ohne den Ablauf zu beschreiben.",
        "why": "Die Sammlung zeigt Ergebnisse und Stil. Sie legt aber nicht fest, wann Fragen geklärt, Ergebnisse geprüft und Entscheidungen getroffen werden."
      },
      {
        "id": "c",
        "text": "Einen gelungenen Chat vollständig sichern. Diesen Verlauf unverändert für alle neuen Projekte verwenden.",
        "why": "Der Chat enthält auch Angaben und Umwege des alten Projekts. Ein klar beschriebener Ablauf trennt diese besser von den wiederverwendbaren Regeln."
      },
      {
        "id": "d",
        "text": "In einem KI-Programm einen Agenten mit allen Projektunterlagen einrichten. Seine Chats im Team weitergeben.",
        "why": "Damit bleibt der Ablauf an dieses Programm gebunden. Das Team möchte ihn aber in mehreren unterstützenden Programmen nutzen."
      }
    ],
    "correct": [
      "a"
    ],
    "insight": "Ein Skill hält einen wiederverwendbaren Ablauf fest. Ob er genutzt werden kann, hängt vom jeweiligen KI-Programm ab.",
    "criterion": "Skills · Wiederverwendbarer Prozess"
  },
  {
    "id": "zuerst-fragen",
    "group": "Vorgehen wählen",
    "place": "Pratteln · Sekundarstufe I",
    "title": "Wer legt den Fall fest?",
    "type": "single",
    "scenario": "Elif möchte eine Situation zu einem Pausenkiosk erstellen lassen. Bisher hat die KI Budget, Vorkenntnisse und Konflikte selbst ergänzt. Die Texte klangen gut, passten aber nicht zur Klasse. Elif möchte diese Angaben selbst festlegen und erst danach einen Entwurf erhalten.",
    "question": "Welche Anweisung passt zum umgekehrten Iterieren?",
    "options": [
      {
        "id": "a",
        "text": "«Erstelle drei Varianten mit verschiedenen Budgets. Erkläre die Unterschiede, damit ich eine Variante wählen kann.»",
        "why": "Elif kann zwischen Varianten wählen. Die entscheidenden Angaben wie das Budget hat aber weiterhin die KI vorab festgelegt."
      },
      {
        "id": "b",
        "text": "«Frage mich nach Lernziel, Lerngruppe, Handlung und fehlenden Angaben. Fasse meine Antworten zusammen. Schreibe den Entwurf erst, wenn ich zustimme.»",
        "why": "Die KI führt durch die Fragen. Elif liefert und bestätigt die Angaben. Erst danach wird die Situation geschrieben."
      },
      {
        "id": "c",
        "text": "«Nimm übliche Bedingungen dieser Schulstufe an. Liste sie am Ende auf, damit ich sie prüfen kann.»",
        "why": "Die Annahmen werden sichtbar, prägen aber bereits den Entwurf. Elif muss unpassende Angaben wieder nachträglich korrigieren."
      },
      {
        "id": "d",
        "text": "«Schreibe zuerst die Situation. Frage mich danach zu den Stellen, an denen mehrere Möglichkeiten denkbar sind.»",
        "why": "Die Fragen kommen erst nach dem Entwurf. Elif möchte die wichtigen Angaben aber vor dem Schreiben festlegen."
      }
    ],
    "correct": [
      "b"
    ],
    "insight": "Die Reihenfolge ist entscheidend: Die KI fragt nach, die Lehrperson legt die Inhalte fest, danach entsteht der Entwurf.",
    "criterion": "Umgekehrtes Iterieren · Inhaltliche Steuerung"
  },
  {
    "id": "grafik-abgleichen",
    "group": "KI-Inhalte prüfen",
    "place": "Muttenz · Allgemeinbildender Unterricht",
    "title": "Zwei Angebote, eine Grafik",
    "type": "multi",
    "pick": 2,
    "scenario": "Die Lernenden vergleichen zwei erfundene Handyangebote über zwölf Monate und begründen ihre Wahl. Es gelten nur die unten genannten Kosten. Die übrigen Leistungen sind gleich. Die KI erstellt eine Infografik. Die Lehrperson prüft sie vor dem Unterricht.",
    "exhibit": {
      "kind": "offers",
      "title": "Geprüfte Angaben und KI-Entwurf",
      "rows": [
        [
          "Angebot A",
          "CHF 24 pro Monat + CHF 60 einmalig"
        ],
        [
          "Angebot B",
          "CHF 29 pro Monat, keine einmaligen Kosten"
        ]
      ],
      "generated": [
        "Balken A: CHF 288 für zwölf Monate",
        "Balken B: CHF 348 für zwölf Monate",
        "Bildunterschrift: «A ist über zwölf Monate CHF 60 günstiger.»"
      ]
    },
    "question": "Welche zwei Aussagen treffen zu?",
    "options": [
      {
        "id": "a",
        "text": "Die Grafik stimmt nicht mit den Angaben überein: Bei Angebot A fehlen die einmaligen Kosten.",
        "why": "A kostet 12 × 24 + 60 = CHF 348. Der Balken zeigt nur die monatlichen Zahlungen. Die einmaligen CHF 60 fehlen."
      },
      {
        "id": "b",
        "text": "Für den Vergleich fehlt eine wichtige Angabe: das Einkommen der jungen Person.",
        "why": "Das Einkommen wäre für die persönliche Budgetplanung wichtig. Hier sollen aber nur die Kosten der zwei beschriebenen Angebote verglichen werden."
      },
      {
        "id": "c",
        "text": "Die Bildunterschrift vereinfacht sinnvoll: A kostet schliesslich pro Monat weniger.",
        "why": "Die Aussage betrifft die gesamten zwölf Monate. Eine tiefere Monatsrate bedeutet nicht, dass die Gesamtkosten ebenfalls tiefer sind."
      },
      {
        "id": "d",
        "text": "Die behauptete Ersparnis stimmt nicht: Beide Angebote kosten über zwölf Monate gleich viel.",
        "why": "Auch B kostet 12 × 29 = CHF 348. Die scheinbare Ersparnis entsteht nur, weil bei A die einmaligen Kosten fehlen."
      },
      {
        "id": "e",
        "text": "Das Hauptproblem ist die Aktualität: Es fehlt ein Datum, an dem die Preise abgerufen wurden.",
        "why": "Die Angebote sind erfunden und für den Fall festgelegt. Der Fehler liegt in der Berechnung und im Abgleich, nicht bei veralteten Preisen."
      }
    ],
    "correct": [
      "a",
      "d"
    ],
    "insight": "Prüfe, ob die Grafik dieselben Daten und denselben Zeitraum verwendet wie der Fall. Kontrolliere auch, ob die Schlussfolgerung zu den Zahlen passt.",
    "criterion": "Kohärenz · Faktentreue · Visualisierung"
  },
  {
    "id": "entscheidung-vorweg",
    "group": "Situationen beurteilen",
    "place": "Liestal · Sekundarstufe I",
    "title": "Der Ausflug ist schon entschieden",
    "type": "mark",
    "scenario": "Die Lernenden sollen abwägen, welche Kriterien wichtiger sind, eine Variante wählen und ihre Wahl begründen. Der folgende erfundene Fall soll den Einstieg bilden. Eine Textstelle passt nicht zu diesem Lernziel.",
    "question": "Welche Stelle nimmt den Lernenden die Entscheidung ab?",
    "options": [
      {
        "id": "a",
        "text": "Die Klasse plant einen Ausflug ab Liestal. Jede Person hat CHF 20 zur Verfügung. Die Gruppe muss bis 16 Uhr zurück sein.",
        "why": "Budget und Rückkehrzeit machen die Bedingungen klar. Die Klasse muss trotzdem noch selbst zwischen den Varianten entscheiden."
      },
      {
        "id": "b",
        "text": "Variante A kostet CHF 18 und bietet mehr Zeit am Ziel. Variante B kostet CHF 13, hat aber einen zusätzlichen Fussweg.",
        "why": "Die Angaben ermöglichen eine Abwägung. Mehr Zeit, tiefere Kosten und der zusätzliche Weg können unterschiedlich wichtig sein."
      },
      {
        "id": "c",
        "text": "Die Klasse wählt A: Mehr Zeit am Ziel ist wichtiger als die Ersparnis. Im Auftrag soll die Klasse diese Wahl nachvollziehen.",
        "why": "Hier stehen die Gewichtung und die Entscheidung schon fest. Laut Lernziel sollen die Lernenden aber selbst abwägen und wählen."
      },
      {
        "id": "d",
        "text": "Danach vergleichen die Gruppen ihre Begründungen. Sie überlegen, unter welchen Bedingungen sie anders wählen würden.",
        "why": "Das unterstützt die Reflexion. Die Lernenden müssten ihre Entscheidung vorher jedoch selbst getroffen haben."
      }
    ],
    "correct": [
      "c"
    ],
    "insight": "Bei diesem Lernziel muss die Wahl offenbleiben. Eine vorgegebene Entscheidung kann für andere Ziele passen, etwa um eine fremde Begründung zu prüfen.",
    "criterion": "Reflexionspotential · Erschliessbarer Lerngehalt"
  },
  {
    "id": "produktive-luecke",
    "group": "Situationen beurteilen",
    "place": "Arlesheim · Sekundarstufe I",
    "title": "Der Druckauftrag",
    "type": "single",
    "scenario": "Eine Klasse plant eine Schülerzeitung. Die Lernenden sollen fehlende Angaben erkennen und gezielt nachfragen. Rolle, Budget und Abgabetermin sind klar. Die Druckerei nennt einen Preis pro Exemplar. Es ist aber offen, ob er auch für die geplante Seitenzahl gilt. Der Auftrag lautet: «Welche Angaben müsst ihr vor der Bestellung klären? Formuliert eine Anfrage an die Druckerei.»",
    "question": "Wie sollte die Lehrperson mit der fehlenden Angabe umgehen?",
    "options": [
      {
        "id": "a",
        "text": "Den Gesamtpreis vor dem Einstieg ergänzen. Sonst ist der Fall unvollständig.",
        "why": "Für die Bestellung müsste der Preis geklärt sein. In dieser Aufgabe sollen die Lernenden aber gerade erkennen, was noch offen ist, und danach fragen."
      },
      {
        "id": "b",
        "text": "Die Angabe offenlassen. Aus dem Fall und dem Auftrag ist klar, was die Lernenden klären sollen.",
        "why": "Die fehlende Angabe schafft den Lernanlass. Die Lernenden können erkennen, welche Information fehlt, und eine passende Rückfrage stellen."
      },
      {
        "id": "c",
        "text": "Die KI einen passenden Preis schätzen lassen. So arbeiten alle Gruppen mit derselben Zahl.",
        "why": "Die Schätzung ersetzt eine offene Frage durch eine ungesicherte Zahl. Der vorgesehene Lernschritt wird damit umgangen."
      },
      {
        "id": "d",
        "text": "Den Auftrag auf das Rechnen mit dem Stückpreis kürzen. Die fehlende Angabe macht ihn zu schwierig.",
        "why": "So würde sich das Lernziel ändern. Im Fall gibt es keinen Hinweis, dass eine gezielte Rückfrage für die Klasse zu schwierig ist."
      }
    ],
    "correct": [
      "b"
    ],
    "insight": "Nicht jede fehlende Angabe ist ein Fehler. Sie kann bewusst zum Nachfragen anregen. Wichtig ist, dass die Lernenden wissen, was sie klären sollen.",
    "criterion": "Nachvollziehbarer Kontext · Handlungszusammenhang"
  },
  {
    "id": "transfer",
    "group": "Situationen beurteilen",
    "place": "Pratteln · Primarstufe",
    "title": "Ein neuer Ort reicht nicht",
    "type": "single",
    "scenario": "Eine 6. Klasse hat Materialangebote für einen Verkaufsstand in Pratteln verglichen. Dabei ging es um Mengenrabatt, Restmaterial und Budget. Nun soll sie das Gelernte auf einen neuen Fall übertragen. Die KI schlägt dieselbe Situation in Sissach vor: neue Namen, aber unveränderte Mengenverhältnisse.",
    "question": "Welche Änderung prüft die Übertragung auf einen neuen Fall am besten?",
    "options": [
      {
        "id": "a",
        "text": "Ort und Produkte stärker verändern. Die Zahlenverhältnisse und die Reihenfolge der günstigsten Angebote bleiben gleich.",
        "why": "Das verändert vor allem die Oberfläche. Die Lernenden können die bekannte Lösung mit fast denselben Rechenschritten wiederholen."
      },
      {
        "id": "b",
        "text": "Die alte Lösung ohne Ortsangaben vorlegen. Die Lernenden ordnen die passenden Fachbegriffe zu.",
        "why": "Das prüft das Verständnis von Begriffen. Eine neue Entscheidung unter anderen Bedingungen ist nicht nötig."
      },
      {
        "id": "c",
        "text": "Mehr Lieferanten und Produkte ergänzen. Die Kriterien bleiben gleich wichtig und derselbe Anbieter bleibt am günstigsten.",
        "why": "Mehr Angaben erhöhen den Umfang. Die Lernenden müssen ihre bisherige Entscheidungsregel aber nicht neu prüfen."
      },
      {
        "id": "d",
        "text": "Einen Fall mit wenig Lagerplatz geben: Der Mengenrabatt führt zu viel Restmaterial. Die Lernenden begründen, welche Kriterien jetzt wichtiger sind.",
        "why": "Die Lernenden wenden bekannte Kriterien unter einer neuen Bedingung an. Sie müssen neu abwägen, statt die alte Lösung zu wiederholen."
      }
    ],
    "correct": [
      "d"
    ],
    "insight": "Ein exemplarischer Fall vermittelt Zusammenhänge, die auch anderswo helfen. Ein neuer Ortsname allein verlangt noch keine Übertragung auf neue Bedingungen.",
    "criterion": "Exemplarischer Charakter · Transfer"
  },
  {
    "id": "zugang",
    "group": "Situationen beurteilen",
    "place": "Sissach · Sekundarstufe I",
    "title": "Gleiche Entscheidung, anderer Zugang",
    "type": "multi",
    "pick": 2,
    "scenario": "Die Klasse kann zwei Angebote fachlich vergleichen. Einige Lernende lesen längere Texte aber deutlich langsamer. Alle sollen weiterhin wichtige Bedingungen erkennen, Kriterien abwägen und ihre Wahl begründen. Die Lehrperson möchte die Sprache vereinfachen, ohne den Lernenden die Entscheidung abzunehmen.",
    "question": "Welche zwei Anpassungen passen zu diesem Ziel?",
    "options": [
      {
        "id": "a",
        "text": "Den Text in kurze Abschnitte gliedern und schwierige Begriffe erklären. Alle wichtigen Bedingungen bleiben erhalten.",
        "why": "Das erleichtert das Lesen. Die Lernenden müssen die Bedingungen weiterhin selbst vergleichen und gewichten."
      },
      {
        "id": "b",
        "text": "Langsam lesenden Lernenden nur das günstigere Angebot zeigen. Die anderen Bedingungen später im Plenum ergänzen.",
        "why": "Diese Lernenden vergleichen zunächst keine zwei Angebote mehr. Damit ändert sich die Aufgabe, nicht nur die Sprache."
      },
      {
        "id": "c",
        "text": "Ein Vergleichsraster mit bekannten Kriterien geben. Die Lernenden tragen die Fallangaben selbst ein und legen die Gewichtung fest.",
        "why": "Das Raster hilft beim Ordnen. Die Angaben zuzuordnen und ihre Bedeutung abzuwägen bleibt Aufgabe der Lernenden."
      },
      {
        "id": "d",
        "text": "Vorgeben, welche Kriterien wichtiger sind. Die Lernenden formulieren daraus ihre Entscheidung.",
        "why": "Die Kriterien selbst zu gewichten gehört zum Lernziel. Die Vorgabe würde einen wichtigen Teil dieser Denkarbeit übernehmen."
      },
      {
        "id": "e",
        "text": "Nur noch die Preise vergleichen lassen. Dafür eine zusätzliche Rechenaufgabe ergänzen.",
        "why": "Eine weitere Rechnung ersetzt das Abwägen mehrerer Bedingungen nicht. Die Aufgabe wäre fachlich anders ausgerichtet."
      }
    ],
    "correct": [
      "a",
      "c"
    ],
    "insight": "Hilfen können das Lesen und Ordnen erleichtern. Sie sollten aber nicht genau jene Denkarbeit übernehmen, die die Lernenden üben sollen.",
    "criterion": "Passung zur Lerngruppe · Lerngehalt"
  },
  {
    "id": "beleg",
    "group": "KI-Inhalte prüfen",
    "place": "Gelterkinden · Sekundarstufe I",
    "title": "Was die Messung tatsächlich zeigt",
    "type": "mark",
    "scenario": "Die Klasse soll Messdaten lesen und prüfen, welche Aussagen dazu passen. Die KI erhält nur das unten stehende erfundene Protokoll. Danach formuliert sie vier Aussagen. Eine davon lässt sich aus diesen Daten nicht ableiten.",
    "exhibit": {
      "kind": "measurements",
      "title": "Fiktives Klassenprotokoll",
      "rows": [
        [
          "Messung",
          "Asphaltfläche",
          "Beschattete Wiese"
        ],
        [
          "Montag, 13 Uhr",
          "43 °C",
          "29 °C"
        ],
        [
          "Dienstag, 13 Uhr",
          "45 °C",
          "30 °C"
        ]
      ],
      "note": "Ein Schulhof, zwei sonnige Tage, je eine Messung zur gleichen Uhrzeit. Keine weiteren Daten."
    },
    "question": "Welche Aussage wird durch die Messdaten nicht gestützt?",
    "options": [
      {
        "id": "a",
        "text": "Bei beiden Messungen war die Asphaltfläche wärmer als die beschattete Wiese.",
        "why": "Die Aussage bezieht sich nur auf die zwei Messungen. Sie stimmt mit den angegebenen Werten überein."
      },
      {
        "id": "b",
        "text": "Die Klasse kann überlegen, welche weiteren Messungen sie für eine Empfehlung zur Schulhofgestaltung braucht.",
        "why": "Das ist ein möglicher nächster Schritt. Es wird kein zusätzliches Messergebnis behauptet."
      },
      {
        "id": "c",
        "text": "Die Messungen zeigen: Rasenflächen auf Schulhöfen in Baselland sind bei jedem Wetter und an jedem Standort rund 15 °C kühler.",
        "why": "Zwei Messungen an einem Ort reichen für diese allgemeine Aussage nicht. Ausserdem unterscheiden sich die Flächen auch durch die Beschattung."
      },
      {
        "id": "d",
        "text": "Der Temperaturunterschied beträgt am Montag 14 °C und am Dienstag 15 °C.",
        "why": "Beide Unterschiede lassen sich aus der Tabelle berechnen. Die Aussage bleibt bei diesen Messungen."
      }
    ],
    "correct": [
      "c"
    ],
    "insight": "Richtige Zahlen reichen nicht aus. Auch die Schlussfolgerung muss zu den Daten passen und darf nicht mehr behaupten, als sie zeigen.",
    "criterion": "Faktentreue · Belegprüfung"
  },
  {
    "id": "rollen",
    "group": "KI-Inhalte prüfen",
    "place": "Allschwil · Stufenteam",
    "title": "Sechs Fälle, dasselbe Rollenbild",
    "type": "multi",
    "pick": 2,
    "scenario": "Ein Team prüft sechs KI-Situationen zur Zusammenarbeit. Namen und Orte wechseln. Die Rollen bleiben gleich: Jungen erklären die Technik. Mädchen organisieren Material und brauchen bei technischen Problemen Hilfe. Die Sprache ist höflich und wertschätzend. Die KI hat diese Rollen erfunden; sie stammen nicht aus einer realen Klasse.",
    "question": "Welche zwei Überarbeitungen gehen das Problem gezielt an?",
    "options": [
      {
        "id": "a",
        "text": "In jedem Fall und in der ganzen Sammlung prüfen: Wer erklärt, wer entscheidet und wer braucht Hilfe?",
        "why": "So wird das wiederkehrende Muster sichtbar. Geprüft wird nicht nur die Sprache, sondern auch, wem Wissen und Entscheidungen zugetraut werden."
      },
      {
        "id": "b",
        "text": "Geschlechtsneutrale Überschriften wählen. Die Rollen im eigentlichen Text bleiben gleich.",
        "why": "Die Überschriften ändern sich. Im Falltext haben aber weiterhin dieselben Personen das technische Wissen oder brauchen Hilfe."
      },
      {
        "id": "c",
        "text": "Einen Satz ergänzen: Technische und organisatorische Aufgaben sind gleich wichtig.",
        "why": "Der Satz zeigt Wertschätzung. Er ändert aber nicht, wer durchgehend technische Fragen erklärt und wer dabei Hilfe braucht."
      },
      {
        "id": "d",
        "text": "Die Rollen sinnvoll variieren. Wer erklärt, organisiert oder entscheidet, richtet sich nach den Fähigkeiten der jeweiligen Figur.",
        "why": "Damit wird die feste Zuordnung verändert. Die Situationen können trotzdem glaubwürdig bleiben; nicht jede Figur muss alles können."
      },
      {
        "id": "e",
        "text": "Gleich viele weibliche und männliche Hauptfiguren einsetzen. Danach nur vergleichen, wie viel sie jeweils sprechen.",
        "why": "Auch bei gleicher Anzahl und Redezeit können die technischen Rollen einseitig verteilt bleiben. Diese Zahlen allein reichen nicht aus."
      }
    ],
    "correct": [
      "a",
      "d"
    ],
    "insight": "Bias kann sich in wiederkehrenden Rollen zeigen. Höfliche Sprache und gleich viele weibliche und männliche Namen verhindern das nicht automatisch.",
    "criterion": "Bias · Rollen und Perspektiven"
  },
  {
    "id": "interaktion",
    "group": "KI-Inhalte prüfen",
    "place": "Münchenstein · Berufsfachschule",
    "title": "Klickbar ist noch nicht ausgewertet",
    "type": "multi",
    "pick": 2,
    "scenario": "Eine Lehrperson erstellt einen interaktiven Fall zur Wahl zwischen zwei Angeboten. A ist günstiger, B wird schneller geliefert. Je nach Gewichtung lässt sich beides begründen. Die KI markiert aber jeden Klick auf A grün und auf B rot. Nach zwei Versuchen erscheint die Musterlösung. Die Lernenden sollen ihre Wahl begründen und bei neuen Bedingungen nochmals prüfen.",
    "question": "Welche zwei Änderungen passen am besten zum Lernziel?",
    "options": [
      {
        "id": "a",
        "text": "Die Farbrückmeldung durch eine längere Animation ersetzen. A bleibt die einzige richtige Wahl.",
        "why": "Die Darstellung ändert sich, die Bewertung aber nicht. B kann im Fall ebenfalls eine begründete Wahl sein."
      },
      {
        "id": "b",
        "text": "Jede Antwort aus einer Wahl und einer Begründung zum Fall aufbauen. Die Rückmeldung bewertet, ob die Begründung passt.",
        "why": "So wird sichtbar, ob die Lernenden abgewogen haben. Entscheidend ist, ob ihre Begründung zu den Bedingungen passt."
      },
      {
        "id": "c",
        "text": "Nur einen Versuch und weniger Bearbeitungszeit geben. Das soll zu einer bewussteren Wahl führen.",
        "why": "Zeitdruck und weniger Versuche zeigen nicht, wie die Wahl begründet wird. Die unpassende Bewertung bleibt bestehen."
      },
      {
        "id": "d",
        "text": "Nach der ersten Wahl den Liefertermin ändern. Erneut eine Wahl mit Begründung verlangen, bevor die Folgen gezeigt werden.",
        "why": "Die neue Bedingung verlangt eine erneute Abwägung. So wird geprüft, ob die Lernenden ihre Entscheidung anpassen können."
      },
      {
        "id": "e",
        "text": "Für A und B gleich viele Punkte geben. Nur noch prüfen, ob der Fall vollständig durchgeklickt wurde.",
        "why": "Beide Angebote können passen, aber nicht jede Begründung ist richtig. Das Durchklicken zeigt die verlangte Denkarbeit nicht."
      }
    ],
    "correct": [
      "b",
      "d"
    ],
    "insight": "Eine interaktive Auswertung muss zeigen, wie die Lernenden denken und entscheiden. Mehr Klicks oder aufwendigere Effekte reichen dafür nicht aus.",
    "criterion": "Interaktive Auswertung · Lernzielpassung"
  }
];
