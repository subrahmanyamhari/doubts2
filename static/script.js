$(document).ready(function(){

    console.log('Ready')

    //  Fetch the current date and update it in the DOM
    $(document).ready(function () {
    $("#display_date").html(display_date)
    $('#save_button').prop('disabled', true);
    })

    //  write an event, when Submit button is clicked
    $('').click(function(){

        //  get the text value from the textarea using the 'val()' method
        let text_value = $('').val()

        //  Convert it to JS object.
        //  Provide a 'key' here and in write the same in app.py file as well to extract data
        let input_text = {'' : text_value}
        console.log(input_text)

        //  ajax request
        $.ajax({

            //  type of web request
            type : 'POST',

            //  Data to be sent in JSON format
            data : JSON.stringify(),

            //  type of response expected is json
            dataType : 'json',

            //  contentType
            contentType : 'application/json',

//            url = "predict-data"
            //  if everything is successful, run this function
            success : function(result){

                success: function (result) {
                $("#prediction").html(result.data.predicted_emotion)
//                $("#emo_img_url").attr('src', result.data.predicted_emotion_img_url);
                $('#prediction').css("display", "");
                $('#emo_img_url').css("display", "");
                predicted_emotion = result.data.predicted_emotion
                $('#save_button').prop('disabled', false);
            },
            error: function (result) {
                alert(result.responseJSON.message)
            }
        })


        //  clearing the textbox after every button push
        $('#text').val("")
    })
        
})