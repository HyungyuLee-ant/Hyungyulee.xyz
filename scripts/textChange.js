        var count = 0;
        var length = 10;

        /*store the variables here*/
        var texts=[
            "Visualization of Data Found in University",
            "Interactive Artworks Inspired from other Artist’s Works",
            "A Generative Design Program that could be used practically",
            "An Interesting Collage of Photos During Lovable Trip",
            "Aesthetic Wallpaper that Changes as Time Flows",
            "Interactive Media Art Using Webcam",
            "Non-linear Screening Film",
            "Sentimental Mouse Interactive Art",
            "A drawing journal-based film about COVID patients and their stigma",
            "An interactive novel about COVID patients and cyber bullying towards them"
            ]
        var emojis=["🎓", "🖤", "🛞", "📸", "⏳", "🤳🏻", "🎬", "🌟", "🎪", "😷", ]
        var gradients = [
            'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(71,71,209,1) 35%, rgba(0,212,255,1) 100%)',
            'linear-gradient(to right, #ff0000, #00ffff',
            'linear-gradient(to right, rgb(0, 213, 255), rgb(144, 27, 208))',
            'linear-gradient(119deg, rgba(227,223,29,0.7), rgba(35,132,122,0.7))',
            'linear-gradient(80deg, rgba(73,126,84,0.7), rgba(249,58,138,0.7))',
            'linear-gradient(188deg, rgba(165,225,201,0.9), rgba(131,46,32,0.8))',
            'linear-gradient(to right, rgb(255, 174, 0), rgb(166, 84, 136))',
            'linear-gradient(347deg, rgba(10,145,212,0.2), rgba(38,25,168,0.7))',
            'linear-gradient(331deg, rgba(97,244,201,0.7), rgba(8,16,80,0.8))',
            'linear-gradient(97deg, rgba(177,85,234,0.3), rgba(180,92,140,1))'
            ]

        $(document).ready(function(){
            /*the changing slogans section */
            setInterval(function(){
                // changing the letter/slogan
                count++;
                $('#fancyEmoji').html(emojis[count % length]);
                $('#fancyMainSlogan').html(texts[count % length]);
                //changing the gradation
                $('#fancyMainSlogan').css({ 'background': gradients[count % length] })
                $('#fancyMainSlogan').css({'-webkit-background-clip': 'text'})
                $('#fancyMainSlogan').css({'background-clip':'text'})
                $('#fancyMainSlogan').css({ '-webkit-text-fill-color': 'transparent' });
                $('#fancyEmoji').css({'background': 'transparent'});
            }, 1300);
        })
