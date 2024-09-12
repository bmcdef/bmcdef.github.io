let parseString=e=>e.replace(/( +)*ๆ( +)*/g," ๆ ").replace(/เเ/g,"แ").replace(/ํา/g,"ำ").replace(/(&nbsp;| )/g," ").replace(/…/g,"..").replace(nonprintables,""),cleanHTML=e=>e.replace(/&nbsp;|&#160;/g," ").replace(/>\s+</g,"><").trim(),chordSplit=(e,c)=>{if(e){let t=0,p=0,a=0,s="";e=e.replace(/\{[\[\⟨](.*?)[\⟩\]]\}/g,function(e,r,n){var l=n-t-p-a;return c&&(l=(l=0===a?l-c:l)<0?0:l),s+=((e,r)=>{let n="";for(var l=0;l<r;l++)n+=" ";return n+=e})(r,l),t=e.length,p=r.length,a=n,""}),e=""+s.trimEnd()+`
${e.trimEnd()}
`}return e},lineSplit=(e,r,n)=>{let l="";if(e.length>r){let t=e.length/2,p=[],a={};e.replace(/\s/g,(e,r,n)=>{var l=Math.abs(r-t);return p.push(l),a[l]=r,e});var r=Math.min(...p),r=a[r],[r,s]=[e.slice(0,r).trim(),e.slice(r).trim()];l=(l+=chordSplit(r,n))+chordSplit(s,n)}else l+=chordSplit(e,n);return l},pageSplit=(e,r)=>{var n=e.split("\n"),l=[],t=[];for(let e=0;e<n.length;e++){var p=n[e];/^\\/.test(p)&&(l.push(e),t.push(e%r))}t.shift();var e=Math.min(...t),a=l[t.indexOf(e)+1];let s="";for(let e=0;e<n.length;e++)s=(s+=e===a?"\n":"")+n[e]+"\n";return s},chordPress=(e,s,c)=>e=(e=e.replace(/^_(\S+)_$/gm,function(e,r){var n;return/split/.test(e)?"_split_":(n="\n\\"+r[0].replace(/h/,"."),/hook/.test(e)&&(n+=r.match(/_(\w)/)[1]||""),n)}).replace(/^\\(\.\w|v)([^\\]+)/gm,function(e,r,n){for(var l="\\"+r,t=n.split("\n"),p=0;p<t.length;p++){var a=t[p];""===a?l+="\n":(a=a.replace(/^-|-$/gm,""),l+=lineSplit(a,s,c).replace(/&nbsp;/g," "))}return l}).replace(/^\\[mr]([^\\]+)/gm,function(e,r){return(e=e.replace(/[\[\]\⟨\⟩]/g,"").replace(/\-$\n^\+/gm,"_").replace(/^-|-$/gm,"").replace(/^\|(\s+)*|(\s+)*\|$/gm,"").replace(/\|/g," ").replace(/\s{2,}/g,"  ").replace(/(\s+)*_(\s+)*/g,"   ").replace(/\*\s+\*/g,"* *").trim())+"\n"})).replace(/\n{2,}/g,"\n\n").replace(/(\n+)*(\\)/g,"\n\n\\").replace(/(\n+)*_split_(\n+)*/g,"\n\n\n").trim(),rawchorddemo=`_music_
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