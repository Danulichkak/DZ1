console.log( '<H1>Ты съел конфет:</H1>' )
var num=0; {
    num=prompt ('Сколько конфет ты съел?', '')
    if (num!=null) {
        console.log( num + 'шт;' );
        num = num.replace(/,/g, "." );
        if (isNaN(num)) {
            console.log( 'Количесвто только числом!' + '<br>' );
        }else if (num<0) {
            console.log( 'Не ври! Я знаю что ты их ел!' + '<br>' );
        }else if (num>70) {
            console.log( 'Ты не человек! Столько за раз не едят!' + '<br>' );
        }else if (num==0) {
            console.log( 'Да не может быть!?!?!?' + '<br>' );
        }
    }
}
