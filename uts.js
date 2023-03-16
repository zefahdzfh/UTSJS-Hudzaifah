// No .1

class car {
    constructor (carCompany,companyCountry,carVar,carColour,carCc,carTopspeed,carPrice){
       this.company = carCompany ;
       this.country = companyCountry ;
       this.var = carVar ;
       this.colour = carColour ;
       this.cc = carCc ;
       this.tops = carTopspeed ;
       this.price = carPrice ;

    }
    buy(many){
        var many = this.price * many ;
        return 'You have bought ' + this.company + ' ' + this.var + ' For ' + many + ' Dollars';
    }
    race(circuit){
        return 'Lets race at ' + circuit + ' With Yours ' + this.colour + ' ' + this.var + ' with your topspeed ' + this.tops ; 
    }
    service(){
        return 'Sir.. your '+ this.colour + ' ' + this.company + ' ' + this.var + ' Had an ' + this.cc + ' CCs , and the topspeed is ' + this.tops ; 
    }
    meet(name){
        return 'Hello guys..my name is ' + name + ' And i had an ' + this.company + ' ' + this.var + ' Which its colour is ' + this.colour + ' Nice To meet you all..!' 
    }
    ride(place){
        return 'Lets ride to ' + place + ' with my ' + this.var + ' Guysss.. ';
    }
    
}

var avanza = new car ('Toyota', 'Japan', 'Avanza', 'White', 1500, '200 km/h', 200); 
console.log(avanza.buy(2));
console.log(avanza.race('sentul'));

var laferari = new car ('Ferrari', 'Italy', 'LaFerari', 'Red', 5000, '400 km/h', 1000);
console.log(laferari.service());
console.log(laferari.meet('Zefa'));

var aventador = new car ('Lamborghini', 'Italy', 'Aventador', 'Matte Black', 5200, '450 km/h', 1500);
console.log(aventador.service());

var pajero = new car ('Mitsubishi', 'Japan', 'Pajero Sport Dakar', 'Grey', 4000, '250 km/h', 500);
console.log(pajero.ride('Puncak'));



//No 2

// const newElm = document.createElement('h1');
// const newText = document.createTextNode('Berhasil !');

// newElm.appendChild(newText);

// const isiSection = document.getElementById('isi');
// isiSection.appendChild(newElm);

document.getElementById('btn-1').addEventListener('click' , function(){
    document.getElementById('berhasil').innerHTML = 'Berhasil !'
});



document.getElementById('btn-1').addEventListener('dblclick', function(){
    alert ('Tombol Di klik 2 kali')
});

document.getElementById('btn-2').addEventListener('mouseover', function(){
    const newElm = document.createElement('h3');
    const newText = document.createTextNode('X RPL Merah');

    newElm.appendChild(newText);

    const isiSection = document.getElementById('isi');
    isiSection.appendChild(newElm);
    
    // const hijau = document.getElementsByName('h3');
    newElm.style.color = 'red';
})
// document.getElementById('btn-2').addEventListener('mouseover', function(){
//     document.getElementsByClassName('xrpl').setAttribute
// })
document.getElementById('btn-2').addEventListener('mouseout', function(){
    const newElm = document.createElement('h3');
    const newText = document.createTextNode('X RPL Hijau');

    newElm.appendChild(newText);

    const isiSection = document.getElementById('isi');
    isiSection.appendChild(newElm);
    
    // const hijau = document.getElementsByName('h3');
    newElm.style.color = 'green';
})

document.getElementById('btn-3').addEventListener('click', function(){
    document.getElementById('body').remove('body')
    // console.log('delete');
})