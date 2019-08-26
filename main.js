// this is the code for the calculator

$('.on').click(function(){
    
    if(this.innerHTML=='On'){
        
        this.innerHTML='Off';
        $(".number").prop('disabled', true);

    }
    else{
        this.innerHTML='On'
        $(".number").prop('disabled', false)
        
    }
    
})

$('#c').click(function(){
    $('h2').html($('h2').html()*$('h2').html())
})

$('#rc').click(function(){
    $('h2').html(Math.sqrt($('h2').html()))
})

$('.number,.operator').click(function(){
    
    $('h2').html($('h2').html() + this.value);
})

$('.equal').click(function(){
    var exp = $('h2').html();
    if(exp){
        try {
            $('h2').html(eval(exp)); 
        } catch (e) {
            if (e instanceof SyntaxError) {
                $('#error').html(e.message);
            }
        }
        
    }
    
})

$('.delete').click(function(){
        var text  = $('h2').text();
        
        $('h2').text(text.substr(0,text.length -1));
})

 $('.ac').click(function(){
    $('h2').text('');
}) 