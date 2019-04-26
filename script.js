function pushWords(arr){
    list.childNodes.forEach(e=>setTimeout(()=>list.removeChild(e), 1));
    arr.forEach(e=>{
        let tr = document.createElement("tr");
        let tdword = document.createElement("td");
        let tdfreq = document.createElement("td");
        tdword.innerText = e[0];
        tdfreq.innerText = e[1];
        tr.appendChild(tdword);
        tr.appendChild(tdfreq);
        list.appendChild(tr);
    })
}

words = [];

let submit = document.getElementById("submit-id");
let list = document.getElementById("list");
let inputel = document.getElementById("input-id");

submit.addEventListener("click", ()=>{
        let input = inputel.value;
        let freqMap = {};
        let arr = input.replace(/[^\w\s]/g,"").split(/\s+/g).filter(e=>!!e)
            .map(e=>e.toLowerCase())
            .forEach(e=>freqMap[e] ? freqMap[e]++ : freqMap[e] = 1);
        words = Object.entries(freqMap).sort((a,b) => b[1] - a[1]);
        pushWords(words);
});

let search = document.getElementById("search-id");

search.addEventListener("keyup", ()=>{
    let target = search.value;
    filtered = words.filter((e)=>
        e[0].indexOf(target) != -1
    );
    pushWords(filtered);

})
