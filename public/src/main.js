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

    // create
    // modify
    // append
    questionArray.forEach(question => {
      let $form = $("<form method='post' action='/jeopardize'>")
      let inputQuestion = $("<input name='question'>").val(question.question);
      let inputAnswer = $("<input name='answer' type='hidden'>").val(question.answer);
      let inputValue = $("<input name='value'>").val(question.value);
      let inputCategory = $("<input name='category_id'>").val(1);
      let button = $("<input type='submit'></input>")
      $form.append(inputQuestion, inputAnswer, inputValue, inputCategory, button);
      // $('body').append("<h1> " + question.question + "</h1>")
      // $('body').append("<h2> " + question.answer + "</h2>")
      // $('body').append("<h3> " + question.value + "</h3>")
      $('body').append($form);
      $('body').append($('</br>'));
    })
  }


});