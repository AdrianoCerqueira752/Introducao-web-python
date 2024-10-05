
        const btn = document.querySelectorAll('.butao')

        btn[0].addEventListener('click',clicou)
        btn[1].addEventListener('click',clicou)
        btn[3].addEventListener('click',mudarCorfundo)


    function clicou(){
        alert("você clicou aqui")
    }

    function mudarCorfundo(){
        let color1 = (Math.random(255)*100).toFixed(0);        
        let color2 = (Math.random(255)*100).toFixed(0);        
        let color3 = (Math.random(255)*100).toFixed(0);
        
        let cor = 'rgb('+color1+','+color2+','+color3+')'
        document.querySelector('body').style.backgroundColor = cor
    }
   function soma(num1, num2){
    const resultado = num1 + num2
    return resultado

    function produto(num1, num2){

    const Resultado = num1 + num2
    return resultado
    }
    
    function divisão(){}     
    function subtracao(){}    
    function modulo(){}
    function potenciaçãoo(){}

    
        console.log('soma:',soma(48946,48451))
        console.log('divisão:',divisão(48946,48451))
        console.log('subtracao:',subtracao(48946,48451))
        console.log('modulo:',modulo(48946,48451))
        console.log('potenciacao:',potenciacao(48946,48451))
        console.log('Produto:',Produto(48946,48451))
   }
