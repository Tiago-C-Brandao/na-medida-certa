let enterGram = document.querySelector('#enterGram');
let umaXicara, meiaXicara, quartoXicara


enterGram.addEventListener('keypress', (e) => {
    if(e.key === "Enter") {
        result()
    }
})

function result() {
    totalMiligram = (enterGram.value / 10) * 180
    totalOz = totalMiligram / 30
    umaXicara = totalOz / 8
    meiaXicara = (totalOz % 8) / 4
    quartoXicara = ((totalOz % 8) % 4) / 2
    alert("1 Xícara: " + parseInt(umaXicara) + " | 1/2 Xícara: " + parseInt(meiaXicara) + " | 1/4 Xícara: " + parseInt(quartoXicara))
}