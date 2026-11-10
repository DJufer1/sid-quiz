(function(root){
  'use strict';
  const VERSION=1;
  const ids=q=>q.options.map(o=>o.id);
  const sameSet=(a,b)=>a.length===b.length&&new Set(a).size===a.length&&a.every(x=>b.includes(x));
  function shuffle(items){const a=[...items];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
  function grade(q,selection){
    if(!Array.isArray(selection)||new Set(selection).size!==selection.length||selection.some(id=>!ids(q).includes(id)))throw new Error('Ungültige Auswahl');
    const correct=sameSet(selection,q.correct), hits=selection.filter(id=>q.correct.includes(id)).length;
    return {correct,hits,partial:!correct&&hits>0,missing:q.correct.filter(id=>!selection.includes(id)),extra:selection.filter(id=>!q.correct.includes(id))};
  }
  function create(cases,order=cases.map(q=>q.id),kind='full'){
    const map=new Map(cases.map(q=>[q.id,q]));
    if(!order.length||new Set(order).size!==order.length||order.some(id=>!map.has(id)))throw new Error('Ungültige Fälle');
    return {version:VERSION,kind,order:[...order],position:0,answers:{},drafts:{},choiceOrder:Object.fromEntries(order.map(id=>[id,map.get(id).type==='mark'?ids(map.get(id)):shuffle(ids(map.get(id)))])),view:'case',started:new Date().toISOString()};
  }
  function progress(s,cases){const map=new Map(cases.map(q=>[q.id,q]));const done=s.order.filter(id=>s.answers[id]);return {done:done.length,total:s.order.length,correct:done.filter(id=>grade(map.get(id),s.answers[id]).correct).length};}
  function restore(raw,cases){
    try{
      const s=typeof raw==='string'?JSON.parse(raw):raw,map=new Map(cases.map(q=>[q.id,q]));
      if(!s||s.version!==VERSION||!['full','retry'].includes(s.kind)||!Array.isArray(s.order)||!s.order.length||s.order.length>cases.length||new Set(s.order).size!==s.order.length||s.order.some(id=>!map.has(id)))return null;
      if(!Number.isInteger(s.position)||s.position<0||s.position>=s.order.length||!s.choiceOrder||!s.answers||!s.drafts)return null;
      const clean={version:VERSION,kind:s.kind,order:[...s.order],position:s.position,choiceOrder:{},answers:{},drafts:{},view:s.view==='results'?'results':'case',started:typeof s.started==='string'?s.started:new Date().toISOString()};
      for(const id of s.order){
        const q=map.get(id),choice=s.choiceOrder[id];
        if(!Array.isArray(choice)||!sameSet(choice,ids(q)))return null;
        clean.choiceOrder[id]=[...choice];
        if(s.answers[id]){grade(q,s.answers[id]);if(s.answers[id].length!==(q.pick||1))return null;clean.answers[id]=[...s.answers[id]];}
        if(s.drafts[id]){grade(q,s.drafts[id]);if(s.drafts[id].length>(q.pick||1))return null;clean.drafts[id]=[...s.drafts[id]];}
      }
      if(clean.view==='results'&&progress(clean,cases).done!==clean.order.length)clean.view='case';
      return clean;
    }catch{return null;}
  }
  root.SID_ENGINE={grade,create,restore,progress};
})(typeof window!=='undefined'?window:globalThis);
