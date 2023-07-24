const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const form = document.getElementById('form');



const a = new Image();
a.src = './Runes/A.jpg';
const b = new Image();
b.src = './Runes/B.jpg';
const c = new Image();
c.src = './Runes/C.jpg';
const d = new Image();
d.src = './Runes/D.jpg';
const e = new Image();
e.src = './Runes/E.jpg';
const f = new Image();
f.src = './Runes/F.jpg';
const g = new Image();
g.src = './Runes/G.jpg';
const h = new Image();
h.src = './Runes/H.jpg';
const i = new Image();
i.src = './Runes/I.jpg';
const j = new Image();
j.src = './Runes/J.jpg';
const k = new Image();
k.src = './Runes/K.jpg';
const l = new Image();
l.src = './Runes/L.jpg';
const m = new Image();
m.src = './Runes/M.jpg';
const n = new Image();
n.src = './Runes/N.jpg';
const o = new Image();
o.src = './Runes/O.jpg';
const p = new Image();
p.src = './Runes/P.jpg';
const q = new Image();
q.src = './Runes/Q.jpg';
const r = new Image();
r.src = './Runes/R.jpg';
const s = new Image();
s.src = './Runes/S.jpg';
const t = new Image();
t.src = './Runes/T.jpg';
const u = new Image();
u.src = './Runes/U.jpg';
const v = new Image();
v.src = './Runes/V.jpg';
const w = new Image();
w.src = './Runes/W.jpg';
const x = new Image();
x.src = './Runes/X.jpg';
const y = new Image();
y.src = './Runes/Y.jpg';
const z = new Image();
z.src = './Runes/Z.jpg';

const runes = {
    'a' : a,
    'b': b,
    'c': c,
    'd': d,
    'e': e,
    'f': f,
    'g': g,
    'h': h,
    'i': i,
    'j': j,
    'k': k,
    'l': l,
    'm': m,
    'n': n,
    'o': o,
    'p': p,
    'q': q,
    'r': r,
    's': s,
    't': t,
    'u': u,
    'v': v,
    'w': w,
    'x': x,
    'y': y,
    'z': z
}





window.onload = () => {
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
    ctx.fillStyle = 'lightblue';
    ctx.fillRect(0, 0, canvas.clientWidth, canvas.height);
    ctx.font = "30px Arial";
    ctx.strokeText("Hello", 10, (canvas.height/2)-60);

    form.addEventListener('submit', (event) => {
        event.preventDefault(console.log('submit'));

        ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
        ctx.fillStyle = 'lightblue';
        ctx.fillRect(0, 0, canvas.clientWidth, canvas.height);
        
        const inputText = document.getElementById('input-text');
        
        
        // ctx.drawImage(runes[inputText.value], 10, canvas.height/2-60);

        for(let i=0; i < inputText.value.length; i++) {
            ctx.drawImage(runes[inputText.value[i].toLowerCase()], i*40, 50)
        }
    })


}
