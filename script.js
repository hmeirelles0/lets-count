function contar () {
    var s = window.document.getElementById('start')
    var s2 = Number(s.value)
    var e = window.document.getElementById('end')
    var e2 = Number(e.value)
    var p = window.document.getElementById('step')
    var p2 = Number(p.value)
    var res = window.document.getElementById('result')
    res.innerHTML = ''
    
    if (s2 == 'null' || e2 == 'null' || p2 == 0) {
        window.alert('Favor, digite um número válido e tente novamente.')

    } else if (s2 < e2) {
        for (var start = s2; start <= e2; start += p2) {
            res.innerHTML += `${start} →`
        }
        res.innerHTML += 'Chegou!'
    } else if (s2 > e2) {
        for (var altstart = s2; altstart >= e2 ; altstart -= p2) {
            res.innerHTML += `${altstart} →`
        }
        res.innerHTML += 'Terminou!'
    }
}