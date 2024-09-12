let createMyCopy=e=>{let r=document.createElement("textarea");r.value=e,r.style.cssText=`
		display: block; 
		z-index: 99999999; 
		height: 278px; 
		font-size: 12px; 
		line-height: 1.4em; 
		font-family: TlwgMono, tahoma; 
		width: 278px; 
		border: 1px solid #777; 
		outline: 0; 
		opacity: 1;
	`,document.body.appendChild(r);e=document.createElement("button");e.style.cssText=`
		position: fixed; top: 0; right: 0; 
		outline: 0; 
		z-index: 999999991;
	`,e.innerText="btnCopy",document.body.appendChild(e),e.onclick=function(){r.select(),r.setSelectionRange(0,99999),navigator.clipboard.writeText(r.value)}},parseString=e=>e.replace(/( +)*ๆ( +)*/g," ๆ ").replace(/เเ/g,"แ").replace(/ํา/g,"ำ").replace(/(&nbsp;| )/g," ").replace(/…/g,"..").replace(nonprintables,""),cleanHTML=e=>e.replace(/&nbsp;|&#160;/g," ").replace(/>\s+</g,"><").trim(),chordSplit=(e,i)=>{if(e){let l=0,p=0,a=0,c="";e=e.replace(/\{[\[\⟨](.*?)[\⟩\]]\}/g,function(e,r,t){var n=t-l-p-a;return i&&(n=(n=0===a?n-i:n)<0?0:n),c+=((e,r)=>{let t="";for(var n=0;n<r;n++)t+=" ";return t+=e})(r,n),l=e.length,p=r.length,a=t,""}),e=""+c.trimEnd()+`
${e.trimEnd()}
`}return e},lineSplit=(e,r,t)=>{let n="";if(e.length>r){let l=e.length/2,p=[],a={};e.replace(/\s/g,(e,r,t)=>{var n=Math.abs(r-l);return p.push(n),a[n]=r,e});var r=Math.min(...p),r=a[r],[r,c]=[e.slice(0,r).trim(),e.slice(r).trim()];n=(n+=chordSplit(r,t))+chordSplit(c,t)}else n+=chordSplit(e,t);return n},pageSplit=(e,r)=>{var t=e.split("\n"),n=[],l=[];for(let e=0;e<t.length;e++){var p=t[e];/^\\/.test(p)&&(n.push(e),l.push(e%r))}l.shift();var e=Math.min(...l),a=n[l.indexOf(e)+1];let c="";for(let e=0;e<t.length;e++)c=(c+=e===a?"\n":"")+t[e]+"\n";return c},chordPress=(e,c,i)=>e=(e=e.replace(/^_(\S+)_$/gm,function(e,r){var t;return/split/.test(e)?"_split_":(t="\n\\"+r[0].replace(/h/,"."),/hook/.test(e)&&(t+=r.match(/_(\w)/)[1]||""),t)}).replace(/^\\(\.\w|v)([^\\]+)/gm,function(e,r,t){for(var n="\\"+r,l=t.split("\n"),p=0;p<l.length;p++){var a=l[p];""===a?n+="\n":(a=a.replace(/^-|-$/gm,"").replace(/{g\[(.*?)\]\)?}/g,e=>`{[${e=e.trim().replace(/\]\[/g,"] [").replace(/[\{g\}\[\]]/g,"").replace(/\s+?\|\s+?/g,"|").replace(/\s+/g,",")}]}`),n+=lineSplit(a,c,i).replace(/&nbsp;/g," "))}return n}).replace(/^\\[mr]([^\\]+)/gm,function(e,r){return(e=e.replace(/[\[\]\⟨\⟩]/g,"").replace(/\-$\n^\+/gm,"_").replace(/^-|-$/gm,"").replace(/^\|(\s+)*|(\s+)*\|$/gm,"").replace(/\|/g," ").replace(/\s{2,}/g,"  ").replace(/(\s+)*_(\s+)*/g,"   ").replace(/\*\s+\*/g,"* *").trim())+"\n"})).replace(/\n{2,}/g,"\n\n").replace(/(\n+)*(\\)/g,"\n\n\\").replace(/(\n+)*_split_(\n+)*/g,"\n\n\n").trim(),rawchorddemo=`_music_
-| [Fm] | [Cm] |-
+| [C#] | [D#] |-
_verse_
-เพิ่งได้ฮู้{⟨G#⟩}ความหมายแท้จริง..-
-ของคำว่าฮั{[Cm]}กจากเจ้า..-
-ที่บอกว่าฮั{[C#]}ก&nbsp;ฮักหลาย-
-มันแปลว่าฮั{[D#]}กหลายคน-
_verse_
-หลอ{⟨G#⟩}กให้ฮักหมดใจ-
-แล้วเจ้ากะหลอ{[Cm]}ยมีใครมาแล้วตั้งดน-
-เจ็{[C#]}บจนเกินสิทน-
-เมื่อฮู้ว่าค{[D#]}นที่ฮักนอกใจ-
_hook_a_
-โอ้{[Fm]}ย&nbsp;มันกะของแม่นละแห{[Cm]}ม-
-ฮักท่อใด๋ยังได้เป็น{[C#]}คนแพ้-
-ยังได้นั่งน้อฮ้อง{[D#]}ไห้-
-ที่แ{[Fm]}ท้..ฮักคือการนอกใ{[Cm]}จ-
-ไปฮักเขาหลาย&nbsp;สมอ{[C#]}งบ่ใช้-
-แล้วเป็นจังใด๋ล่ะบาดทีนี้{[D#]}..-
_split_
_hook_b_
-สมพื้นเจ้าขอ{⟨G#⟩}ง&nbsp;ถืกลากไปหย่อ{[D#]}ง-
-ทั้งที่&nbsp;กะฮัก&nbsp;กะหยั{[Fm]}ง-
-ดิ้นรนห{[D#]}าหม่องตาย&nbsp;ห้ามไว้{[C#]}กะบ่ฟัง..-
-ได้น้ำตาไหล{[D#]}หยามหย่างยามเขาสิหนี-
-คนกะซาวึ่น&nbsp;ๆ{⟨G#⟩}-
-เฮาผู้เดียวที่หลื่{[D#]}น&nbsp;สมพื้นอีห{[Fm]}ลี-
-บ่โทษผู้ใด๋{[D#]}ที่เรื่องมันจ{[C#]}บจั่งซี่..-
-ย้อนเจ้าขอ{[D#]}งที่เผื่อใจบ่เป็นสักที-
-โอ้ย&nbsp;(จั่ง{⟨G#⟩}แม่นสมน้ำหน้า)-
_music_
-| [Cm] | [C#] |-
+| [D#] | ⟨G#⟩ |-
_music_
-| [C#] | [Cm] |-
+| [A#m] | [D#] | ⟨G#⟩ |-
_repeat_
-| [*] | [**] | [**] |-
_music_
-| [C#] | [D#] |-
+| ⟨G#⟩ |-`;console.log(rawchorddemo);var genres=["สตริง","เพื่อชีวิต","ลูกกรุง","ลูกทุ่ง","ลูกทุ่งเพื่อชีวิต","หมอลำ","อีสาน","ใต้","คำเมือง","ลาว","สากล","โสด","จีบ","อ่อย","ชิลล์","อินเลิฟ","ให้กำลังใจ","อกหัก","เหงา","เศร้า","คิดถึง","ร้อน","ฝน","หนาว","ปีใหม่","พ่อ","แม่","เร็กเก้/สกา","โฟล์ก","แร็พ","ปลดแอก","จีน","เวียดนาม","ญี่ปุ่น","อินโด","มาเล","เกาหลี","กันตรึม","คนไกลบ้าน","บ้านๆ"];