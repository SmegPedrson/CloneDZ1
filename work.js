let stage = 0;
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form')
    const moveblContainer = document.getElementById('moveblContainer')
    const intputNum = document.getElementById('intputNum')
    const calcNumBtn = document.getElementById('calcNum')
    const calcDown = document.getElementById('calcDown')


    form.addEventListener('submit',function(event) {
        event.preventDefault();
        if(stage === 0){
            form.innerHTML = 
                `<div><input class="intput" type="number" id="CVV" placeholder="Введите CVC карты..." required></div>
                <div><input class="intput" type="date" id="DataCard" placeholder="Карта действительна до..." required></div>
                <div><input class="intput" type="number" id="numberCard" placeholder="номер банковской карты..." required></div>
                <div><button class="addNameURL" id="addNameURL" type="submit" style="width: 200px;">Добавить запрос</button></div>`
            stage = 1
        }
        else if (stage === 1){
            moveblContainer.classList.remove('cartochka1')
            moveblContainer.innerHTML = 
            `<img src="https://i.pinimg.com/736x/80/c1/e3/80c1e352cf033fbc258efcc88949c45e.jpg" width="400px"; height="300px">`
            //
            setTimeout(() => {
                moveblContainer.classList.add('cartochka1')
                moveblContainer.innerHTML = 
                    `<div class="cartochka1Top" style="color:white;">Предложите свой собственный график</div>
                    <div class="cartochka1Down">
                        <div style="padding: 20px">
                            <form id="form">
                                <div><input class="intput" type="text" id="intputName" placeholder="Введите ваш псевдоним..." required></div>
                                <div><input class="intput" type="text" id="intputURL" placeholder="Введите вашу ссылку..." required></div>
                                <div><button class="addNameURL" id="addNameURL" type="submit" style="width: 200px;">Добавить запрос</button></div>
                            </form>
                        </div>
                    </div>`
            }, 1400);
        }
        
        
        
    })
    calcNumBtn.addEventListener('click', ()=>{
        let intputValue = Math.abs(Math.floor(Number(document.getElementById('intputNum').value)))
        const cloneIntputValue = intputValue;
        document.getElementById('intputNum').value = ''
        if(intputValue<=1){
            calcDown.innerHTML = `<img src="https://get.wallhere.com/photo/1920x1200-px-baby-cat-cats-cute-kitten-kittens-1912229.jpg" width="760px"; height="475px">`
            return;
        }
        let simplDelitels = []
        let allDelitelsFirst = [ 1 ]
        let allDelitelsSecond = [ cloneIntputValue ]
        let stepen = 0;

        const maxsimplDelitel = Math.ceil(Math.sqrt(cloneIntputValue))

        for(let simplDelitel = 2;simplDelitel <= maxsimplDelitel;simplDelitel++){
            if(cloneIntputValue % simplDelitel == 0){
                while(intputValue % simplDelitel == 0){
                    intputValue /= simplDelitel
                    stepen++
                }
                if(stepen>0){
                    if(stepen === 1){simplDelitels.push(simplDelitel)}
                    else {simplDelitels.push(`${simplDelitel}<sup>${stepen}</sup>`)}
                    stepen = 0
                }
                allDelitelsFirst.push(simplDelitel)
                allDelitelsSecond.push(cloneIntputValue/simplDelitel)
            }
        }
        if(simplDelitels.length == 0){
            simplDelitels.push(cloneIntputValue)
        }
        else if(allDelitelsFirst[allDelitelsFirst.length-1] == allDelitelsSecond[allDelitelsSecond.length -1]){
            allDelitelsFirst.pop()
        }
        else if(allDelitelsFirst[allDelitelsFirst.length-1] == allDelitelsSecond[allDelitelsSecond.length -2]){
            allDelitelsFirst.pop()
            allDelitelsFirst.pop()
        }
        if(intputValue != 1){simplDelitels.push(intputValue)}//конфликтов с 74 строкой нет
        //на самомо деле 84 строка была всегда, просто моя кошка её удалила
        const stringSimplDelitels = `${cloneIntputValue} = ` + simplDelitels.toString().replace(/,(?=[^\s])/g, "·")
        const stringallDelitels = 'Все делители: ' + allDelitelsFirst.toString().replace(/,(?=[^\s])/g, ", ") +", "+ allDelitelsSecond.reverse().toString().replace(/,(?=[^\s])/g, ", ")
        const numDelitels = allDelitelsFirst.length+allDelitelsSecond.length

        intputValue = cloneIntputValue
        let sumВigits = 0;
        let multiDigits = 1;
        while(intputValue > 0){
            const digit = intputValue % 10
            intputValue = (intputValue-digit) / 10
            sumВigits += digit
            multiDigits *= digit
        }

        calcDown.innerHTML = `<div class="bottomMargin">${stringSimplDelitels}</div>
        <div class="bottomMargin">Уникальных простых делителей ${simplDelitels.length}</div>
        <div class="bottomMargin">${stringallDelitels}</div>
        <div class="bottomMargin">Количество обычных делителей ${numDelitels}</div>
        <div class="bottomMargin">Cумма цифр равна ${sumВigits}</div>
        <div>Произведение цифр равно ${multiDigits}</div>`
    })
})