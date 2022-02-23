//mascota virtual

const mascota = {
    nombre: 'Carpincho',
    color: 'Rojo',
    edad: 0,
    hambre: 50,
    energiaVital: 80,
    signosVitales: function() {
        console.log(`Mi mascota se llama ${this.nombre}, es de color ${this.color}, de edad ${this.edad}, hambre ${this.hambre}%, energia vital: ${this.energiaVital}%.`);
    },
    vivir: function() {
        this.hambre+=15
        this.energiaVital-=30
        this.edad+=1
    },
    sigueConVida: function() {
        return this.energiaVital > 0 && this.energiaVital <= 100 && this.hambre <= 100 && this.hambre >= 0
    },
    comer: function () {
        this.hambre-=10
        this.energiaVital+=20
    },
    
}                              
while (mascota.sigueConVida()) {
    mascota.comer();
    mascota.signosVitales(); 
    mascota.vivir()
}

// mascota.signosVitales();
// mascota.vivir()
// mascota.signosVitales();