$(()=>{
  console.log('script loaded')

  $('button').click(()=>{
    console.log('getting questions')
    
    $.ajax({
      url: `http://jservice.io/api/category?id=10646`,
      method: 'GET',
      success: (data)=>{
        console.log(data)
    
        printQuestions(data)
      }
    })
  

    $.ajax({
      url: `http://jservice.io/api/category?id=11559`,
      method: 'GET',
      success: (data)=>{
        console.log(data)
    
        printQuestions(data)
      }
    })
  })

  printQuestions = data => {
    questionArray = data["clues"];
    questionArray.forEach(question => {
      $('body').append("<h1> " + question.question + "</h1>")
      $('body').append("<h2> " + question.answer + "</h2>")
      $('body').append("<h3> " + question.value + "</h3>")
    })
  }


})