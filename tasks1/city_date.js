/// Необходимо преобразовать словарь (key-value) в массив из названий городов
/// Вывод городов должен быть в хронологическом порядке
/// Города в которых концерт уже прошел нужно исключить

const obj = {
    'Київ': new Date('2020-04-01'),
    'Львів': new Date('2021-07-02'),
    'Чернівці': new Date('2020-04-21'),
    'Іванків': new Date('2021-07-15'),
    'Миколаїв': new Date('2020-04-18'),
    'Херсон': new Date('2021-07-10'),
}
function concertsToArray(concert){
    return Object.keys(concert)
    .filter(city=>concert[city] > new Date())
    .sort((a,b)=>concert[a]-concert[b])   
}


console.log(concertsToArray(obj))
 