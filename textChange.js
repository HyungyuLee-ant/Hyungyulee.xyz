        var count = 0;
        var length = 2;

        /*store the variables here*/
        var texts=["Movie that Plays<br>Based on Choices", "I am happy"]
        var emojis=["🐻", "💛"]
        var gradients = ['linear-gradient(to right, #fbcac9, #8ca6ce)', 'linear-gradient(to right, #ff0000, #00ffff']

        $(document).ready(function(){
            /*the changing slogans section */
            setInterval(function(){
                // changing the letter/slogan
                count++;
                $('#fancyEmoji').html(emojis[count % length]);
                $('#fancyMainSlogan').html(texts[count % length]);
                //changing the gradation
                $('#fancyMainSlogan').css({'background':gradients[count%length]})
                $('#fancyMainSlogan').css({'-webkit-background-clip': 'text'})
                $('#fancyMainSlogan').css({'background-clip':'text'})
                $('#fancyMainSlogan').css({'-webkit-text-fill-color': 'transparent'});
            }, 1200);

            //if each main parts are clicked

        })
