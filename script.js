// criando a classe de calculadora
class Calculator{
    constructor(){
        //aqui é a propriedade/atributo que receberá os valores digitados
        this.displayValue = " ";
    }
    //este método adiciona os valores à propriedade displayValue
    //permitindo que o usuário veja os caracteres/valores na tela
    appendToDisplay(value){
        this.displayValue += value; //recebe e soma
        // Chamamos o método uptadeDisplay dentro do método 
        //appendTo display para que quando o usuário digitars alguma
        // tecla da calculadora o valor que foi armazenado na
        // propriedade displayValue seja exibida  na tela
        this.uptadeDisplay();
    }
    //esse método atualiza o elemnto input no HTML com o valor atual
    // que está armazenado em displayValue
    uptadeDisplay(){ //criando o método
        document.getElementById("displayContent").value = this.displayValue;//coloca .value para pedir o valor que está dentro da variável
    }
    //esse método limpa o valor que está armazenando em displayValue e chama
    // a função updateDisplay para atualizar a tela com o valor vazio.
    clearDisplay(){
        this.displayValue = " ";
        this.uptadeDisplay();
    }

    // o método try catch executa o cálculo da expressão matemática contida em  displayValue. Esse método
    // utiliza a função eval() para variar a expressão e, se for bem sucedida,atualiza o displayValue com o
    //resultado e chama a função updateDisplay(). Se ocorrer um erro durante durante a avaliação, ele
    //atualiza o displayValue com a mensagem "Erro" e chama a função updateDisplay().
    calculate(){
        try{
            // const result = eval(this.displayValue);
            const result= math.evaluate(this.displayValue);
        this.displayValue = result.toString();
        this.uptadeDisplay();
        }catch (error){
        this.displayValue = "Erro"
        this.uptadeDisplay();
        }
    }
}

// criando um objeto ou instanciando a classe
// objeto chamado calc
const calc= new Calculator();