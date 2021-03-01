describe("Teste do toContain", function(){
    it ("Deve demonstrar o uso do toContain", function(){
        var texto = "Meu nome é Amanda"
        var frutas = ["laranja", "banana", "pera"];

        expect(texto).toContain("Amanda");
        expect(texto).not.toContain("AMANDA");

        expect(frutas).toContain("laranja");
        expect(frutas).not.toContain("uva");
    });
});