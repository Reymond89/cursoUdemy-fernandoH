
const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}

console.warn('Not o la negacion');
console.log( true ); // true
console.log( !true ); // false
console.log( !false ); // true

// se agrega la negacion y cambia el booleano
console.log(!regresaFalse()); // true

// para que retorne true tienen que ser todas true 
console.warn('And');
console.log( true && true ); // true
console.log( true && !false ); // true

console.log('=======');
// regresa el primer console.log si la primera comprovacion es falsa
console.log( regresaFalse() && regresaTrue() );
console.log('===============');
console.log( regresaTrue() && !regresaFalse() );
console.log('4 condicones', true && true && true && false );

// por lo menos uno debe ser verdadero y retorna true
console.warn('OR');
console.log( true || false );
console.log( false || false );
console.log( regresaTrue() || regresaFalse() );
console.log('4 condicones', true || true || true || false );

console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalse = false;

const a1 = true && 'hola mundo' && 150;
const a2 = 'hola' && 'Mundo' && soyFalse && true;
const a3 = soyFalse || 'Ya no soy falso';
const a4 = soyFalse || soyUndefined || soyNull || 'ya no soy de nuevo' || true;
const a5 = soyFalse || soyUndefined || regresaTrue || 'ya no soy de nuevo' || true;

console.log({a1, a2, a3, a4, a5});




