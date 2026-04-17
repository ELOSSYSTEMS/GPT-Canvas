<!-- Helix Canvas Sidebar – Recursive Dewey Engine (Manifest V3 popup)
     Allon Schaham | June 2025
     Features: search + tag-filter, pin/unpin, auto-expand last path, export node/canvas
-->
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<title>Helix Canvas Sidebar</title>
<style>
  :root {
    font-size: 14px;
    --bg:#fafafa;--fg:#222;--accent:#3b82f6;--muted:#aaa;
    --radius:6px;--shadow:0 1px 3px rgba(0,0,0,.1);
  }
  body{margin:0;padding:8px 8px 60px;background:var(--bg);color:var(--fg);font-family:Inter,Arial,sans-serif;}
  #search{width:100%;padding:6px;border:1px solid var(--muted);border-radius:var(--radius);margin-bottom:8px;}
  #tag-bar{display:flex;flex-wrap:wrap;gap:4px;margin-bottom:8px;}
  .tag{padding:2px 6px;border:1px solid var(--muted);border-radius:var(--radius);cursor:pointer;font-size:12px;user-select:none;}
  .tag.active{background:var(--accent);border-color:var(--accent);color:#fff;}
  details{border-left:2px solid var(--muted);margin-left:4px;margin-bottom:2px;padding-left:4px;}
  summary{cursor:pointer;font-weight:600;}
  .canvas-node{display:flex;align-items:center;gap:6px;padding:2px 0;}
  .canvas-node button{border:none;background:none;cursor:pointer;font-size:13px;color:var(--fg);flex:1;text-align:left;}
  .pin{color:var(--muted);cursor:pointer;font-size:14px;}
  .pin.pinned{color:var(--accent);}  
  .export-btn{cursor:pointer;font-size:13px;color:var(--accent);margin-left:4px;}
  #viewer{width:100%;height:160px;padding:6px;border:1px solid var(--muted);border-radius:var(--radius);font-family:monospace;white-space:pre;overflow:auto;margin-top:8px;}
  #viewer[contenteditable="true"]{outline:none;}
  #save{margin-top:6px;padding:4px 8px;border:none;background:var(--accent);color:#fff;border-radius:var(--radius);cursor:pointer;}
  #pinned-wrap{margin-bottom:8px;}
  h4{margin:4px 0;}
</style>
</head>
<body>
  <input id="search" placeholder="🔍 Search canvases …"/>
  <div id="tag-bar"></div>
  <div id="pinned-wrap"><h4>Pinned</h4><div id="pinned"></div></div>
  <div id="tree"></div>
  <h4 id="viewer-title" style="display:none"></h4>
  <div id="viewer" contenteditable="true" spellcheck="false" style="display:none"></div>
  <button id="save" style="display:none">💾 Save Edits</button>
<script>
// Storage keys
const STORAGE_KEY="helixCanvases";
const PIN_KEY="helixPins";
const LAST_KEY="helixLastOpened";

let canvases={}, pins=new Set(), activeTags=new Set(), lastOpened=null;

// -- Chrome wrappers -- //
function loadAll(){
  return new Promise(res=>chrome.storage.local.get([STORAGE_KEY,PIN_KEY,LAST_KEY],d=>res(d)));}
function saveCanvas(id,obj){canvases[id]=obj;chrome.storage.local.set({[STORAGE_KEY]:canvases});}
function savePins(){chrome.storage.local.set({[PIN_KEY]:Array.from(pins)});}   
function saveLast(key){chrome.storage.local.set({[LAST_KEY]:key});}

// -- Utilities -- //
function buildTree(data){const root={};
  Object.entries(data).forEach(([key,val])=>{
    const [l1,l2,l3,l4]=key.split(".");
    if(!root[l1]) root[l1]={};
    if(!root[l1][l2]) root[l1][l2]={};
    if(!root[l1][l2][l3]) root[l1][l2][l3]={};
    root[l1][l2][l3][l4]=val;
  });return root;}
function sortChildren(obj){if(!obj||typeof obj!=="object")return obj;
  const sortedKeys=Object.keys(obj).sort((a,b)=>{
    const ta=obj[a]?.meta?.title??a, tb=obj[b]?.meta?.title??b;
    return ta.localeCompare(tb,'en',{sensitivity:'base'});
  });
  const newObj={};sortedKeys.forEach(k=>newObj[k]=sortChildren(obj[k]));return newObj;}
function collectTags(){const set=new Set();Object.values(canvases).forEach(c=>c.meta?.tags?.forEach(t=>set.add(t)));return Array.from(set).sort();}

// -- UI Rendering -- //
function render(){// Tree, tags, pinned
  const treeDiv=document.getElementById('tree');treeDiv.innerHTML="";
  const pinnedDiv=document.getElementById('pinned');pinnedDiv.innerHTML="";
  // pinned first
  [...pins].forEach(id=>{if(canvases[id])pinnedDiv.appendChild(canvasNode(id,canvases[id]));});
  if(!pinnedDiv.children.length)document.getElementById('pinned-wrap').style.display='none';else document.getElementById('pinned-wrap').style.display='block';
  // tag bar
  const tagBar=document.getElementById('tag-bar');tagBar.innerHTML="";
  collectTags().forEach(t=>{
    const tagEl=document.createElement('span');tagEl.className='tag'+(activeTags.has(t)?' active':'');tagEl.textContent=t;tagEl.onclick=()=>{activeTags.has(t)?activeTags.delete(t):activeTags.add(t);render();};tagBar.appendChild(tagEl);
  });
  // search + tag filter helpers
  const q=document.getElementById('search').value.trim().toLowerCase();
  function passFilter(c){const text=(c.meta?.title+" "+c.content).toLowerCase();
    const tagOk=!activeTags.size||c.meta?.tags?.some(t=>activeTags.has(t));
    const qOk=!q||text.includes(q);return tagOk&&qOk;}
  // recursive build
  function buildDOM(obj,parent,path=[]){Object.entries(obj).forEach(([k,v])=>{
    const currentPath=[...path,k];
    if(v.content!==undefined){if(passFilter(v))parent.appendChild(canvasNode(currentPath.join('.'),v));}
    else{
      const det=document.createElement('details');
      const sum=document.createElement('summary');sum.textContent=k;det.appendChild(sum);
      buildDOM(v,det,currentPath);
      if(det.children.length>1){parent.appendChild(det);
        // auto-expand
        if(lastOpened&&lastOpened.startsWith(currentPath.join('.')))det.open=true;}
    }
  });}
  buildDOM(sortChildren(buildTree(canvases)),treeDiv);
}
function canvasNode(id,cv){const wrap=document.createElement('div');wrap.className='canvas-node';
  const btn=document.createElement('button');btn.textContent=cv.meta?.title||id;
  btn.onclick=()=>openCanvas(id,cv);
  const pinIcon=document.createElement('span');pinIcon.className='pin'+(pins.has(id)?' pinned':'');pinIcon.textContent='★';pinIcon.onclick=(e)=>{e.stopPropagation();pins.has(id)?pins.delete(id):pins.add(id);savePins();render();};
  const exp=document.createElement('span');exp.className='export-btn';exp.textContent='⤵';exp.title='Export';exp.onclick=(e)=>{e.stopPropagation();exportCanvas(id,cv);}  ;
  wrap.appendChild(btn);wrap.appendChild(pinIcon);wrap.appendChild(exp);
  return wrap;}

// -- View / Edit / Save -- //
function openCanvas(id,cv){lastOpened=id;saveLast(id);
  const viewer=document.getElementById('viewer');viewer.style.display='block';
  const title=document.getElementById('viewer-title');title.style.display='block';title.textContent=cv.meta?.title||id;
  viewer.textContent=cv.content;
  document.getElementById('save').style.display='inline-block';
  document.getElementById('save').onclick=()=>{cv.content=viewer.textContent;saveCanvas(id,cv);};
  render();}

// -- Export Functions -- //
function exportCanvas(id,cv){const blob=new Blob([JSON.stringify(cv,null,2)],{type:'application/json'});
  const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=id+'.json';document.body.appendChild(a);a.click();document.body.removeChild(a);URL.revokeObjectURL(url);}  
function exportBranch(prefix){const subset={};Object.entries(canvases).forEach(([k,v])=>{if(k.startsWith(prefix))subset[k]=v;});const blob=new Blob([JSON.stringify(subset,null,2)],{type:'application/json'});
  const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=prefix.replace(/\./g,'_')+'.json';document.body.appendChild(a);a.click();document.body.removeChild(a);URL.revokeObjectURL(url);}  

// long-press export on summary
let pressTimer=null;document.addEventListener('pointerdown',e=>{if(e.target.tagName==='SUMMARY'){pressTimer=setTimeout(()=>{
  const path=[];let el=e.target.parentElement;while(el&&el.tagName==='DETAILS'){const label=el.querySelector(':scope > summary').textContent.trim();path.unshift(label);el=el.parentElement.closest('details');}
  if(path.length)exportBranch(path.join('.'));},600);} });document.addEventListener('pointerup',()=>clearTimeout(pressTimer));

// Init
loadAll().then(d=>{
  canvases=d[STORAGE_KEY]||{};pins=new Set(d[PIN_KEY]||[]);
  lastOpened=d[LAST_KEY]||null;
  document.getElementById('search').addEventListener('input',render);
  render();
});
</script>
</body>
</html>