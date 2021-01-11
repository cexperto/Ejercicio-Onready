let v = [
        {
            marca: 'Peugeot',
            modelo: '206',
            puertas: 4,
            Cilindrada: '',
            precio: 200000.00,
            method: function (precio) {                
                const n = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(this.precio)
                const format =  n.replace('\u20ac', '');
                return '$'+format
            }
        },
        {
            marca: 'Honda',
            modelo: 'Titan',
            puertas: '',
            Cilindrada: '125cc',
            precio: 60000.00,
            method: function (precio) {                
                const n = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(this.precio)
                const format =  n.replace('\u20ac', '');
                return '$'+format
            }
        },
        {
            marca: 'Peugeot',
            modelo: '208',
            puertas: 5,
            Cilindrada: '',
            precio: 250000.00,
            method: function (precio) {                
                const n = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(this.precio)
                const format =  n.replace('\u20ac', '');
                return '$'+format
        }
        },
        {
            marca: 'Yamaha',
            modelo: 'YBR',
            puertas: '',
            Cilindrada: '160cc',
            precio: 80500.50,
            method: function (precio) {                
                const n = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(this.precio)
                const format =  n.replace('\u20ac', '');
                return '$'+format
            }
        }
]
            
        function lista(){
            console.log('Marca:'+' '+v[0].marca+' '+ '// '+'Modelo: '+v[0].modelo+' '+ '// '+'Puertas:'+' '+v[0].puertas+' '+ '// '+'Precio: '+v[0].method())             
            console.log('Marca:'+' '+v[1].marca+' '+ '// '+'Modelo: '+v[1].modelo+' '+ '// '+'Cilindrada:'+' '+v[1].Cilindrada+' '+ '// '+'Precio: '+v[1].method()) 
            console.log('Marca:'+' '+v[2].marca+' '+ '// '+'Modelo: '+v[2].modelo+' '+ '// '+'Puertas:'+' '+v[2].puertas+' '+ '// '+'Precio: '+v[2].method()) 
            console.log('Marca:'+' '+v[3].marca+' '+ '// '+'Modelo: '+v[3].modelo+' '+ '// '+'Cilindrada:'+' '+v[3].Cilindrada+' '+ '// '+'Precio: '+v[3].method()) 
        }
    
        elementPrecio = []
        elementPrecioM = []
        elementMarca = []

v.forEach(element => {
    elementPrecio.push(element.precio)
    elementPrecioM.push(element.precio)
    elementMarca.push(element.marca)
});

const modeloLetraY= ()=> {
    elementMarca.forEach(element => {
    if (element.includes('Y')==true) {
        //console.log(element);
        const indexY = elementMarca.findIndex(vM => vM == element)
        //console.log(indexY);
        console.log('Vehículo que contiene en el modelo la letra ‘Y’: '+v[indexY].marca+' '+ v[indexY].modelo+' '+v[indexY].method() )
    }
});    
}

const mayorPrecio = ()=>{
    let mayor = Math.max(...elementPrecio)
    const index1 = elementPrecio.findIndex(vh => vh == mayor)
    console.log('Vehículo más caro: '+v[index1].marca+' '+v[index1].modelo);
}
const menorPrecio = ()=>{
    let menor = Math.min(...elementPrecio)
    const index2 = elementPrecio.findIndex(vh => vh == menor)
    console.log('Vehículo más barato:: '+v[index2].marca+' '+v[index2].modelo);
}

function deMayorAMenor() {
    console.log('Vehículos ordenados por precio de mayor a menor:');
    const m = v.sort(function (a, b){
    return (b.precio - a.precio)
    })
    m.forEach((cat)=>{
            
            console.log(cat.marca+' '+cat.modelo);    
        })

} 
function imprimir() {
    lista()
    console.log('=============================');
    mayorPrecio()
    menorPrecio()
    modeloLetraY()
    console.log('=============================');
    deMayorAMenor()   
}
imprimir()          
    