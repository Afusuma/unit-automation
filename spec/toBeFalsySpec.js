describe("Teste do toBeFalsy", function(){
    it ("Deve testar o toBeFalsy", function(){

        expect(null).toBeFalsy();
        expect(undefined).toBeFalsy();
        expect('').toBeFalsy();
        expect(false).toBeFalsy();
        expect(NaN).toBeFalsy();
        expect(0).toBeFalsy();

        expect(true).not.toBeFalsy();
    });
});