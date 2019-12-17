/* STYLES

        Podemos atribuir estilos seguindo o modelo:

            import arquivoDeEstilos from 'caminho do arquivo de estilos';

            <Text style={arquivoDeEstilos.Estilo1}>texto que será impresso no celular</Text>

        Ou então podemos atribuir mais de um estilo a um elemento, usando um array:

            import arquivoDeEstilos from 'caminho do arquivo de estilos';

            <Text style={[arquivoDeEstilos.Estilo1, arquivoDeEstilos.Estilo2]}>texto que será impresso no celular</Text>


        https://blog.rocketseat.com.br/como-organizar-estilos-no-react-native/

        https://medium.com/mindorks/everything-to-know-about-styling-in-react-native-7e30aed53ad
*/

/* SISTEMA DE MODULOS

    export (sem default): sou obrigado a dar um nome para a função / módulo que estou exportando,. Se for uma função arrow, preciso armazená-la em alguma variável.

        Exemplo:

            O código abaixo é um módulo que recebe como parâmetro um texto, inverte ele e retorna um componente react-native Text com o resultado dentro.

                export const Inverter = props => {
                    const inv = props.texto.split('').reverse().join();
                    return <Text>inv</Text>
                }

    import (de exports não-defaults): quando eu quiser fazer um importo de um módulo não default, preciso especificar o nome do módulo que quero extrair de dentro do arquivo.

        Exemplo:

            Para importar a função reverter acima, podemos usar o desconstrutor e fazer o seguinte:

                import { Inverter } from './src/inverter.js'

    import (de exports defaults): é quando quero importar um módulo que foi exportado como default. Nesse cenário, não posso usar desconstrutores.

        Exemplo:

            Caso Inverter fosse um export default, poderia importá-lo como segue:

                import Inverter from './src/inverter.js'

*/

/* STATE e COMPONENTES

    Props são apenas leitura no react. Se quisermos editar dados em um componente, precisamos utilizar o state.

    Componentes funcional: não possuem state;

    Componentes de classe: possuem um state;
*/

/* Cuidado com o 'this'

    Quando eu crio uma função 'não-arrow', o this que é executado dentro dela vai variar de acordo com quem chama aquele método.

    Exemplos:

        1. Neste exemplo, o this irá referir à class Contador.

                class Contador extends Component{
                    maisUm = () => {
                        this.contador++;
                    }

                    render(){
                        return (
                            <button onClick={this.maisUm}></button>
                        );
                    }
                }

            Se eu  clicar no botão acima, o this dentro da função maisUm terá como contexto a classe contador.


        2. Neste exemplo, o this será undefined.

                class Contador extends Component{
                    maisUm() {
                        this.contador++;
                    }

                    render(){
                        return (
                            <button onClick={this.maisUm}></button>
                        );
                    }
                }

            Se eu clicar no botão acima, o this dentro da função maisUm será o recebido pelo evento de clique, chegando na função como undefined.

        3. Neste exemplo, o this volta a se referir à classe Contador.

                class Contador extends Component{
                    maisUm() {
                        this.contador++;
                    }

                    render(){
                        return (
                            <button onClick={() => this.maisUm()}></button>
                        );
                    }
                }

            Neste caso, o arrowFunction dentro do onClick cria o contexto que associa o this ao Contador; assim, quando a função é executada, o this dentro dela está se referindo ao contador


        4. Neste exemplo, o this volta a se referir à classe Contador.

                class Contador extends Component{

                    constructor(){
                        super();
                        this.maisUm = this.maisUm.bind(this);
                    }

                    maisUm() {
                        this.contador++;
                    }

                    render(){
                        return (
                            <button onClick={this.maisUm}></button>
                        );
                    }
                }

            Se eu clicar no botão acima, o this se refere à classe contador porque eu fiz o bind, associando o contexto de todo this que for executado dentro do método maisUm() ao contexto do que this vale no construtor, ou seja, ao contador.
*/

/* COMPONENTES CONTROLADOS

    Controlado: é o tipo de componente que reflete diretamente o valor no state do componente. Assim, se algo muda no state, o componente atualiza automaticamente o que você enxerga na tela.

    Não-controlado: é o oposto, um que não reflete os dados de um estado. Se eu inicializo um state como null, eu estou criando o componente como não-controlado.



    https://blog.rocketseat.com.br/navegacao-react-native/

    https://blog.rocketseat.com.br/react-navigation-react-native/

    https://medium.com/the-react-native-log/a-mini-course-on-react-native-flexbox-2832a1ccc6

    https://github.com/vitalets/react-native-extended-stylesheet
*/

/* NAVIGATION

    https://medium.com/async-la/react-navigation-stacks-tabs-and-drawers-oh-my-92edd606e4db
*/

/* FLEXBOX

    FLEX CONTAINER: É um conteiner onde todas as características do Flex-box serão implementadas, o pai de todos os itens que terão o flex-box como estilo.

    FLEX ITEM: São os itens que existem dentro de um contêiner

    MAIN AXIS: É o eixo principal de um contêiner. Se o sentido dos itens for "row", será um eixo que começa da esquerda para direita (como o eixo X de uma função); se for "column", será um eixo que começa de cima para baixo (como o eixo Y de uma função)

        MAIN START: Início do eixo principal (caso seja "row", o inicio será o canto mais à esquerda; caso column, mais acima)

        MAIN END:Fim do eixo principal (caso seja "row", o fim será o canto mais à direita; caso column, mais abaixo)

            MAIN SIZE: É todo o tamanho que existe entre o Main Start e o Main End;

    CROSS AXIS: É o eixo secundário, oposto, ao main axis. Se o Main Axis tiver um sentido de row, o Cross Axis terá um de column (em outras palavras: se o main for um eixo X, o cross será um Y), e vice-versa.
        
        CROSS START: Segue a mesma ideia do main start, só que para o Cross Axis

        CROSS END: Segue a mesma ideia do main end, só que para o Cross Axis

            CROSS SIZE: É todo o tamanho que existe entre o Cross Start e o Cross End;
*/