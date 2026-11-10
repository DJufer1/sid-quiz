(function(){
  'use strict';
  const cases=window.SID_CASES,E=window.SID_ENGINE,byId=new Map(cases.map(q=>[q.id,q]));
  const main=document.getElementById('main'),storeKey='sid-baselland-quiz-v1';
  const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  let session=null,storageAvailable=true,onlyWrong=false;
  try{const raw=localStorage.getItem(storeKey);if(raw)session=E.restore(raw,cases);}catch{storageAvailable=false;}
  const say=text=>{document.getElementById('live').textContent=text;};
  const save=()=>{try{localStorage.setItem(storeKey,JSON.stringify(session));}catch{storageAvailable=false;}};
  const progress=()=>E.progress(session,cases);
  const resultFor=id=>session.answers[id]?E.grade(byId.get(id),session.answers[id]):null;
  function focusHeading(){const h=main.querySelector('h1');if(h){h.focus({preventScroll:true});window.scrollTo({top:0,behavior:'instant'});}}
  function home(){
    const p=session?progress():null;
    document.title='Entscheidungssache · KI & Situationsdidaktik';
    main.innerHTML=`<section class="hero"><div class="hero-copy"><p class="eyebrow">14 Fälle · Schule in Baselland</p><h1 tabindex="-1">KI einsetzen.<br><em>Qualität beurteilen.</em></h1><p class="intro">Wähle ein passendes Vorgehen, entdecke Fehler in Entwürfen und begründe didaktische Entscheidungen – anhand kurzer Fälle aus dem Schulalltag.</p><div class="hero-actions">${session?`<button class="primary" data-action="resume">${p.done===p.total?'Auswertung ansehen':'Durchgang fortsetzen'} <span class="arrow">→</span></button><button class="quiet" data-action="restart">Neuer Durchgang</button>`:`<button class="primary" data-action="start">Mit den Fällen starten <span class="arrow">→</span></button>`}</div>${session?`<p class="home-return">${p.done} von ${p.total} Fällen bearbeitet${session.kind==='retry'?' · Vertiefungsdurchgang':''}</p>`:''}<p class="save-note">${storageAvailable?'Dein Fortschritt bleibt in diesem Browser gespeichert. Kein Konto nötig.':'Der Browser erlaubt hier keine dauerhafte Speicherung. Du kannst das Quiz trotzdem in dieser Sitzung bearbeiten.'}</p><div class="start-stats"><div><strong>14</strong><span>kurze Fälle</span></div><div><strong>3</strong><span>Aufgabenformate</span></div><div><strong>20–30 Min.</strong><span>als Orientierung</span></div></div></div><div class="hero-art"><img src="assets/visualisierung.png" alt="Ein Skizzenbuch, aus dem Bilder, Farben und ein Diagramm entstehen" width="1672" height="941"><span class="art-note">Vom Entwurf zur Entscheidung.</span></div></section><section class="how" aria-label="So funktioniert das Quiz"><div><b>01</b><section><h3>Fall lesen</h3><p>Rahmenbedingungen und Lernziel sind entscheidend. Manchmal ist eine Informationslücke beabsichtigt.</p></section></div><div><b>02</b><section><h3>Abwägen & auswählen</h3><p>Eine Antwort, zwei Antworten oder eine fehlerhafte Textstelle. Das Format steht bei jeder Aufgabe.</p></section></div><div><b>03</b><section><h3>Rückmeldung nutzen</h3><p>Du erhältst Begründungen zu allen Optionen und kannst anspruchsvolle Fälle nochmals bearbeiten.</p></section></div></section>`;
  }
  function start(order,kind='full'){session=E.create(cases,order,kind);onlyWrong=false;save();renderCase(true);}
  function rail(){
    const p=progress();
    return `<aside class="case-rail" aria-label="Fortschritt und Fallnavigation"><div class="rail-title">${session.kind==='retry'?'Vertiefung':'Dein Durchgang'}</div><div class="rail-progress"><strong>${p.done}</strong><span>/ ${p.total} bearbeitet</span></div><div class="progress-track" role="progressbar" aria-label="Bearbeitete Fälle" aria-valuenow="${p.done}" aria-valuemin="0" aria-valuemax="${p.total}"><span style="width:${p.done/p.total*100}%"></span></div><nav class="case-nav" aria-label="Fälle">${session.order.map((id,i)=>{const q=byId.get(id),r=resultFor(id),status=r?(r.correct?'richtig':'noch vertiefen'):'offen';return `<button data-case="${i}" class="${i===session.position?'current ':''}${r?(r.correct?'done':'review'):''}" ${i===session.position?'aria-current="step"':''} aria-label="Fall ${i+1}: ${esc(q.title)} – ${status}"><span class="case-num" aria-hidden="true">${r?(r.correct?'✓':'•'):String(i+1).padStart(2,'0')}</span><span class="case-name">${esc(q.title)}</span></button>`;}).join('')}</nav><p class="rail-foot">✓ vollständig richtig<br>• nochmals vertiefen<br>Du kannst zwischen Fällen wechseln.</p></aside>`;
  }
  function exhibit(q){
    const x=q.exhibit;if(!x)return '';
    if(x.kind==='offers')return `<aside class="evidence" aria-label="${esc(x.title)}"><div class="evidence-label">${esc(x.title)}</div><div class="evidence-grid"><div class="offer-lines">${x.rows.map(r=>`<div class="offer-row"><b>${esc(r[0])}</b><span>${esc(r[1])}</span></div>`).join('')}</div><div class="generated"><strong>KI-Infografik · Textfassung</strong>${x.generated.map(t=>`<p>${esc(t)}</p>`).join('')}</div></div></aside>`;
    return `<aside class="evidence" aria-label="${esc(x.title)}"><div class="evidence-label">${esc(x.title)}</div><table><caption class="sr-only">${esc(x.title)}</caption><thead><tr>${x.rows[0].map(t=>`<th scope="col">${esc(t)}</th>`).join('')}</tr></thead><tbody>${x.rows.slice(1).map(r=>`<tr>${r.map((t,i)=>i===0?`<th scope="row">${esc(t)}</th>`:`<td>${esc(t)}</td>`).join('')}</tr>`).join('')}</tbody></table><p class="small">${esc(x.note)}</p></aside>`;
  }
  function renderCase(moveTop=false,showFeedback=false){
    session.view='case';save();const q=byId.get(session.order[session.position]),answer=session.answers[q.id],selection=answer||session.drafts[q.id]||[],graded=answer?E.grade(q,answer):null,p=progress();
    document.title=q.title+' · KI & SiD';
    const feedback=graded?`<section class="feedback ${graded.correct?'':'needs-review'}" id="feedback" tabindex="-1" aria-labelledby="feedbackTitle"><h2 id="feedbackTitle">${graded.correct?'Richtig eingeordnet.':graded.partial?'Teilweise richtig – ein genauerer Blick lohnt sich.':'Hier lohnt sich ein zweiter Blick.'}</h2><p>${esc(q.insight)}</p><span class="criterion">${esc(q.criterion)} · ${graded.correct?'1':'0'} / 1 Punkt</span></section>`:'';
    const options=session.choiceOrder[q.id].map((id,i)=>{
      const o=q.options.find(o=>o.id===id),selected=selection.includes(id),key=q.correct.includes(id),status=graded?(selected?(key?'Deine Auswahl · richtig':'Deine Auswahl · nicht passend'):(key?'Richtige Antwort · nicht gewählt':'Nicht passend')):'';
      return `<label class="option ${selected?'selected ':''}${graded?'locked '+(key?(selected?'correct':'missed'):(selected?'wrong':'')):''}"><input type="${q.type==='multi'?'checkbox':'radio'}" name="answer" value="${id}" ${selected?'checked':''} ${graded?'disabled':''} aria-describedby="${graded?'why-'+id:'answerHint'}"><span class="option-body"><span class="option-letter" aria-hidden="true">${q.type==='mark'?String(i+1).padStart(2,'0'):String.fromCharCode(65+i)}</span><span class="option-text">${esc(o.text)}</span>${graded?`<span class="answer-status">${status}</span><p class="option-why" id="why-${id}">${esc(o.why)}</p>`:''}</span></label>`;
    }).join('');
    main.innerHTML=`<div class="quiz-shell">${rail()}<article class="case-main">${!storageAvailable?'<p class="notice">Der Fortschritt kann hier nicht dauerhaft gespeichert werden. Lass dieses Browserfenster für den Durchgang geöffnet.</p>':''}<div class="case-meta"><span>Fall ${String(session.position+1).padStart(2,'0')} / ${String(p.total).padStart(2,'0')} &nbsp;·&nbsp; ${esc(q.place)}</span><span class="tag">${esc(q.group)}</span></div><h1 tabindex="-1">${esc(q.title)}</h1><p class="scenario">${esc(q.scenario)}</p>${exhibit(q)}<form id="answerForm"><fieldset class="question"><legend>${esc(q.question)}</legend><p class="answer-hint" id="answerHint">${q.type==='multi'?`Mehrfachauswahl · Wähle genau ${q.pick} Antworten.`:q.type==='mark'?'Textstelle markieren · Wähle eine Stelle.':'Einfachauswahl · Wähle eine Antwort.'}${!graded?`<span class="selection-count" id="selectionCount">${selection.length} / ${q.pick||1}</span>`:''}</p>${feedback}<div class="options ${q.type==='mark'?'mark-options':''}" ${graded?'style="margin-top:20px"':''}>${options}</div></fieldset>${!graded?`<div class="answer-actions"><p class="small">Deine Antwort wird nach dem Prüfen gespeichert.</p><button class="primary" type="submit" id="checkAnswer" ${selection.length===(q.pick||1)?'':'disabled'}>Antwort prüfen <span class="arrow">→</span></button></div><p class="error-message" id="answerError" aria-live="polite"></p>`:''}</form><div class="case-bottom">${session.position>0?'<button class="quiet" data-action="prev">← Vorheriger Fall</button>':'<span></span>'}${graded?`<button class="primary next" data-action="next">${p.done===p.total?'Auswertung ansehen':'Nächster offener Fall'} <span class="arrow">→</span></button>`:''}</div></article></div>`;
    const nav=main.querySelector('.case-nav'),active=nav.querySelector('.current');
    if(nav.scrollWidth>nav.clientWidth){nav.scrollLeft+=active.getBoundingClientRect().left-nav.getBoundingClientRect().left-(nav.clientWidth-active.clientWidth)/2;}
    if(showFeedback){const box=document.getElementById('feedback');box.focus({preventScroll:true});box.scrollIntoView({block:'start',behavior:'instant'});say(graded.correct?'Richtig. Ein Punkt.':graded.partial?'Teilweise richtig. Lies die Begründungen.':'Noch nicht richtig. Lies die Begründungen.');}
    else if(moveTop)focusHeading();
  }
  function check(){
    const q=byId.get(session.order[session.position]);if(session.answers[q.id])return;
    const selection=[...main.querySelectorAll('input[name="answer"]:checked')].map(e=>e.value);
    if(selection.length!==(q.pick||1)){say('Bitte wähle genau '+(q.pick||1)+' Antwort'+(q.pick?'en.':'.'));return;}
    session.answers[q.id]=selection;delete session.drafts[q.id];save();renderCase(false,true);
  }
  function next(){
    if(progress().done===session.order.length){session.view='results';save();renderResults(true);return;}
    for(let offset=1;offset<=session.order.length;offset++){const i=(session.position+offset)%session.order.length;if(!session.answers[session.order[i]]){session.position=i;break;}}
    renderCase(true);
  }
  function reviewItem(id){
    const q=byId.get(id),r=resultFor(id),answer=session.answers[id],n=session.order.indexOf(id);
    return `<details class="review-item"><summary><span class="review-dot ${r.correct?'':'no'}" aria-hidden="true">${r.correct?'✓':'↻'}</span><span class="review-title"><b>${String(n+1).padStart(2,'0')} · ${esc(q.title)}</b><small>${r.correct?'Vollständig richtig':'Noch vertiefen'} · ${esc(q.criterion)}</small></span></summary><div class="review-body"><p>${esc(q.scenario)}</p>${exhibit(q)}<h4>${esc(q.question)}</h4>${session.choiceOrder[id].map(choice=>{const o=q.options.find(o=>o.id===choice),key=q.correct.includes(choice),chosen=answer.includes(choice);return `<div class="review-choice ${key?'key':chosen?'selected-wrong':''}"><b>${chosen?'Deine Auswahl · ':''}${key?'Richtige Antwort':'Nicht passend'}</b>${esc(o.text)}<small>${esc(o.why)}</small></div>`;}).join('')}<p><strong>Entscheidend:</strong> ${esc(q.insight)}</p><button class="secondary" data-case="${n}">Fall mit Rückmeldung öffnen</button></div></details>`;
  }
  function renderResults(moveTop=false){
    if(progress().done!==session.order.length){renderCase(true);return;}
    session.view='results';save();document.title='Deine Auswertung · KI & SiD';const p=progress(),wrong=session.order.filter(id=>!resultFor(id).correct),groups=[...new Set(session.order.map(id=>byId.get(id).group))],shown=onlyWrong?wrong:session.order;
    main.innerHTML=`<section class="results"><div class="results-top"><div><p class="eyebrow">${session.kind==='retry'?'Deine Vertiefung':'Deine Auswertung'}</p><h1 tabindex="-1">Entscheidungen<br>im Rückblick.</h1><p class="result-intro">${wrong.length?`Du hast ${p.correct} von ${p.total} Fällen vollständig richtig eingeordnet. Nutze die Begründungen, um die Unterschiede zwischen den plausiblen Möglichkeiten genauer zu prüfen.`:`Du hast alle ${p.total} Fälle vollständig richtig eingeordnet. In der Fallübersicht kannst du die Begründungen nochmals vergleichen.`}</p></div><div class="score" aria-label="${p.correct} von ${p.total} Punkten"><strong>${p.correct}<span style="font-size:28px"> / ${p.total}</span></strong><span>vollständig richtig</span><small>${session.kind==='retry'?'Vertiefungsdurchgang':'Aktueller Durchgang'}</small></div></div><div class="result-groups">${groups.map(g=>{const ids=session.order.filter(id=>byId.get(id).group===g),count=ids.filter(id=>resultFor(id).correct).length;return `<article class="group-card"><h3>${esc(g)}</h3><div><strong>${count}</strong><span> / ${ids.length} Fälle</span></div><div class="progress-track"><span style="width:${count/ids.length*100}%"></span></div></article>`;}).join('')}</div><div class="result-actions">${wrong.length?`<button class="primary" data-action="retry">${wrong.length} ${wrong.length===1?'Fall':'Fälle'} gezielt wiederholen ↗</button>`:''}<button class="secondary" data-action="download">Ergebnis speichern ↓</button><button class="secondary" data-action="print">Drucken / PDF</button><button class="quiet" data-action="restart">Neuer Durchgang</button></div><div class="review-head"><h2>Fälle & Begründungen</h2><label class="review-filter"><input id="onlyWrong" type="checkbox" ${onlyWrong?'checked':''}> Nur Fälle zum Vertiefen</label></div><div class="review-list">${shown.length?shown.map(reviewItem).join(''):'<p class="empty">In diesem Durchgang gibt es keine offenen Vertiefungspunkte.</p>'}</div><p class="result-note">Ein Punkt je vollständig gelöstem Fall; bei Mehrfachauswahl müssen beide Antworten stimmen. Die Auswertung ist ein Selbstcheck zu den Kursinhalten und ersetzt keine Beurteilung der Unterrichtspraxis. Ein Vertiefungsdurchgang startet eine neue lokale Auswertung für die ausgewählten Fälle.</p></section>`;
    if(moveTop)focusHeading();
  }
  function download(){
    const p=progress(),date=new Intl.DateTimeFormat('de-CH',{dateStyle:'long',timeZone:'Europe/Zurich'}).format(new Date());
    const lines=['KI & SITUATIONSDIDAKTIK – INTERAKTIVE AUSWERTUNG',date,session.kind==='retry'?'Vertiefungsdurchgang':'Vollständiger Durchgang',`${p.correct} von ${p.total} Fällen vollständig richtig.`, ''];
    session.order.forEach((id,i)=>{const q=byId.get(id),r=resultFor(id);lines.push(`${i+1}. ${q.title} – ${r.correct?'richtig':'noch vertiefen'}`,q.criterion,'Deine Auswahl:');session.answers[id].forEach(choice=>lines.push('• '+q.options.find(o=>o.id===choice).text));lines.push('Richtige Auswahl:');q.correct.forEach(choice=>lines.push('• '+q.options.find(o=>o.id===choice).text));lines.push('Einordnung: '+q.insight,'');});
    const blob=new Blob(['\ufeff'+lines.join('\r\n')],{type:'text/plain;charset=utf-8'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='SiD_Quiz_Auswertung.txt';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);say('Die Auswertung wird als Textdatei gespeichert.');
  }
  document.getElementById('home').addEventListener('click',()=>{home();focusHeading();});
  document.getElementById('info').addEventListener('click',()=>document.getElementById('infoDialog').showModal());
  document.getElementById('confirmRestart').addEventListener('click',()=>{document.getElementById('restartDialog').close();start();});
  document.addEventListener('click',e=>{
    const b=e.target.closest('button');if(!b)return;
    if(b.dataset.close){document.getElementById(b.dataset.close).close();return;}
    if(b.dataset.case!==undefined&&session){session.position=+b.dataset.case;renderCase(true);return;}
    switch(b.dataset.action){
      case 'start':start();break;
      case 'resume':if(progress().done===session.order.length)renderResults(true);else renderCase(true);break;
      case 'restart':document.getElementById('restartDialog').showModal();break;
      case 'prev':session.position=Math.max(0,session.position-1);renderCase(true);break;
      case 'next':next();break;
      case 'retry':start(session.order.filter(id=>!resultFor(id).correct),'retry');break;
      case 'download':download();break;
      case 'print':onlyWrong=false;renderResults(false);main.querySelectorAll('details').forEach(d=>d.open=true);window.print();break;
    }
  });
  main.addEventListener('submit',e=>{if(e.target.id==='answerForm'){e.preventDefault();check();}});
  main.addEventListener('change',e=>{
    if(e.target.id==='onlyWrong'){onlyWrong=e.target.checked;const y=window.scrollY;renderResults(false);document.getElementById('onlyWrong').focus({preventScroll:true});window.scrollTo(0,y);return;}
    if(!e.target.matches('input[name="answer"]')||!session)return;
    const q=byId.get(session.order[session.position]);let selected=[...main.querySelectorAll('input[name="answer"]:checked')].map(el=>el.value);
    const error=document.getElementById('answerError');error.textContent='';
    if(selected.length>(q.pick||1)){e.target.checked=false;selected=selected.filter(id=>id!==e.target.value);error.textContent=`Du hast bereits ${q.pick} Antworten gewählt. Hebe zuerst eine Auswahl auf.`;}
    session.drafts[q.id]=selected;save();main.querySelectorAll('.option').forEach(label=>label.classList.toggle('selected',label.querySelector('input').checked));document.getElementById('selectionCount').textContent=`${selected.length} / ${q.pick||1}`;document.getElementById('checkAnswer').disabled=selected.length!==(q.pick||1);
  });
  home();
})();
