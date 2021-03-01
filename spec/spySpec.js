describe("Testes do objeto spy", function(){
    //objeto é escrito assim entre chaves
    var Calculadora = {
        //metodo
        somar: function(n1, n2) {
            return n1 + n2;
        }
    };
    //inicializar
    beforeAll(function(){
        //recebe um objeto e um metodo
        spyon (Calculadora, "somar");
    });

    it ("deve possuir o metodo somar como não definido", function(){
        expect(Calculadora.somar(1, 1)).toBeUndefined();
    });
});