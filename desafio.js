const listaStrings = ["{[()]}", "{[(])}", "{{[[(())]]}}"];
const colchete = '[';
const chaves = '{';
const parenteses = '(';
const colchetes_invertido = ']';
const chaves_invertido = '}';
const parenteses_invertido = ')'

for (let index = 0; index < listaStrings.length; index++) {
    let string = listaStrings[index];
    console.log(isBalanced(string));
}
function isBalanced(string) {
    if(string.length % 2 == 0 && string.length <= 1000){
        for (let index = 0; index < string.length; index++) {
            let bracketAbertura = string[index];
            let bracketFechamento = string[string.length - (index + 1)]
            switch (bracketAbertura) {
                case colchete:
                    if (colchetes_invertido !== bracketFechamento) {
                        return "NO";
                    }
                    break;
                case chaves:
                    if (chaves_invertido !== bracketFechamento) {
                        return "NO";
                    }
                    break;
                case parenteses:
                    if (parenteses_invertido !== bracketFechamento) {
                        return "NO";
                    }
                    break;
                default:
                    break;
            }
        }
        return "YES";
    }
    
}