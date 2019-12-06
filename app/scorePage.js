function showPointsPage(score){
    fetch('http://localhost:3000/scores/')
        .then(resp => resp.json())
            .then((newRespObj) => {
                console.log(newRespObj)
            })
 
    // let scoreLi = document.createElement('li')
    //     scoreLi.innerText = score.score
    // let scorenNameLi = document.createElement('li')
    //     scorenNameLi.innerText = score.name
    //     let scoreBr = document.createElement('br')

    }