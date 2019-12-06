let categoryContainer = document.querySelector('.category-container')
let triviaForm = document.querySelector("#trivia")
let userContainer = document.querySelector('.user-container')
let userQuestion = document.createElement('p')
let lives = 10


function updateScore(points, scoreIns){    
    console.log(scoreIns.id)
    fetch(`http://localhost:3000/scores/${scoreIns.id}`,{
        headers: {
            "content-type": "application/json",
            "accept": "application/json"
        },
        method: "PATCH",
        body: JSON.stringify({
            points: points ++,
        })
    })
    .then(resp => resp.json())
    .then(updIns => {
        scoreIns.points = updIns.points
        // pointsH2.innerText = `Points: ${updIns}`
    }
    // .catch(err => console.log(err))
    )}
    
    let getAnswers = (randQues, scoreIns) => {
        console.log(scoreIns)       
        // let points = 0
        let pointsH2 = document.createElement('h2')
        pointsH2.innerText = `Points: ${scoreIns.points}`
        let livesH2 = document.createElement('h2')
        livesH2.innerText = `Lives: ${lives}`
        userContainer.append(livesH2)
        userContainer.append(pointsH2)
        
            let answers = []
            answers.push(randQues.incorrect_answer_1, randQues.incorrect_answer_2, randQues.incorrect_answer_3, randQues.correct_answer)
            
            let randAnswers = (answers.sort((elm1, elm2) => elm1.length - elm2.length))
            let randQuesArr = questionsArray[Math.floor(Math.random()*questionsArray.length)]
            
            answers.forEach((answer) =>{
                let inc_answer = document.createElement('li')
                inc_answer.innerText = answer
                userContainer.append(inc_answer)
                inc_answer.addEventListener('click', () => {
                    if(answer === randQues.correct_answer){
                        alert('good job')
                        points += 5
                        updateScore(points, scoreIns)
                        userContainer.innerText = ""
                        let randQuesArr = questionsArray[Math.floor(Math.random()*questionsArray.length)]
                        moveQuestionToUserDiv(randQuesArr.question)
                        getAnswers(randQuesArr, scoreIns)
                    } else {
                        lives --
                        // console.log(lives)
                        alert('try again')
                        // work on ending program when lives run out
                    }
                })
            })
        }
    
        
                        
                        
                        
                
                
        
        












function moveQuestionToUserDiv(randQues){
    let userQuestion = document.createElement('div')
    userQuestion.innerText = randQues
                userContainer.append(userQuestion)
                
}

let questionsArray = [] 
triviaForm.addEventListener('submit', (e) => {
        event.preventDefault()
        
        userContainer.innerText = ""
        let triviaFormCategory = e.target.category.value
        let triviaFormName = e.target.name.value
        fetch('http://localhost:3000/scores',{
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
                user: triviaFormName,
                points: points,
                category_id: triviaFormCategory
            })
        })
            .then(resp => resp.json())
                .then((scoreIns) =>{
                    fetch(`http://localhost:3000/categories/${triviaFormCategory}`)
                    .then(r => r.json())
                    .then((category) => {
                        
                        category.questions.forEach(question => {
                            // questionsArray.push(question.question)
                            questionsArray.push(question)
                        });
                        let randQues = questionsArray[Math.floor(Math.random()*questionsArray.length)]
                        moveQuestionToUserDiv(randQues.question)
                        console.log(scoreIns)
                            getAnswers(randQues, scoreIns)
                            

                    })
                })
        
    })

// function createCategoryDiv(obj){
//     let categoryDiv = document.createElement('div')
//     let categoryP = document.createElement('p')
//     categoryP.innerText = obj.category
//     categoryDiv.append(categoryP)
//     categoryContainer.append(categoryDiv)

//     categoryP.addEventListener('click', () => {
        
//        moveQuestionToUserDiv(obj)


//     })
// }
function createAnswers(a,b,c,d){
let inc_answer = document.createElement('li')
inc_answer.innerText = answer
}


function getScorePage(){
    fetch(`http://localhost:3000/scores`)
      .then(r => r.json())
      .then((scoresArr) => {
        scoresArr.forEach((score) => {
            showPointsPage(score)
          });
      })
}


function showPointsPage(score){
    fetch('http://localhost:3000/scores/')
        .then(resp => resp.json())
            .then((newRespObj) => {
                // console.log(newRespObj)
            })
    debugger
    // let scoreLi = document.createElement('li')
    //     scoreLi.innerText = score.score
    // let scorenNameLi = document.createElement('li')
    //     scorenNameLi.innerText = score.name
    //     let scoreBr = document.createElement('br')

    }






// function deletePointsPage(score){
//     let scoreButton = document.createElement('button')
//         scoreButton.innerText = 'delete'
//         scoreDiv.append(scorenNameLi, scoreButton, scoreBr, scoreLi, scoreBr)
//         scoreButton.addEventListener('click', (event) => {
//             console.log(score.id)
//             fetch(`http://localhost:3000/scores/${score.id}`, {
//               method:'DELETE',
//               headers: {
//                 'content-type': 'application/json',
//                 'accept': 'application/json'
//               },
//             })
          
//         })
//         // didn't use because Eric said not to delete points but wanted to show logic
// }