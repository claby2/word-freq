let submit = document.getElementById("submit-id");
let list = document.getElementById("list");
let inputel = document.getElementById("input-id");

submit.addEventListener("click", ()=>{
    let p = new Promise((resolve, reject)=>{
        list.childNodes.forEach(e=>setTimeout(()=>list.removeChild(e), 1));
        resolve(!list.childNodes);
    }).then(undef=>{
        let input = inputel.value;
        let freqMap = {};
        let arr = input.replace(/[^\w\s]/g,"").split(/\s+/g).filter(e=>!!e)
            .map(e=>e.toLowerCase())
            .forEach(e=>freqMap[e] ? freqMap[e]++ : freqMap[e] = 1);
        Object.entries(freqMap).sort((a,b) => b[1] - a[1]).forEach(e=>{
            let el = document.createElement("li");
            el.innerText = e.join(' ');
            list.appendChild(el);
        })
    })
});