let count= true;

let prom= function(l7el, mochkil){
    setTimeout(()=>{
        if (count=== true){
            l7el('tamkhirt sfffffffff');
        }else{
            mochkil('oho');
        }
    },3000)
}

let g= new Promise(prom);
g=g.then(v=>console.log(v))
console.log(g);