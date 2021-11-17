const element1 = document.getElementById('div1');
const element2 = document.getElementById('div2');
const element3 = document.getElementById('div3');
const renderScore = document.getElementById('score');
document.body.style.cursor = 'pointer';
let position = 700;
let score = 0;

function moveElements1(){
    element1.style.position = 'relative';
    parseInt(element1.style.top) < position ? element1.style.top = parseInt(element1.style.top) + 13 + 'px' : element1.style.top = 0;

    element2.style.position = 'relative';
    parseInt(element2.style.top) < position ? element2.style.top = parseInt(element2.style.top) + 13 + 'px' : element2.style.top = 0;

    element3.style.position = 'relative';
    parseInt(element3.style.top) < position ? element3.style.top = parseInt(element3.style.top) + 13 + 'px' : element3.style.top = 0;
}

document.addEventListener('click', function(e){
    switch(e.target.id){
        case 'div1':
            score++;
            document.querySelector('.divs').removeChild(element1);
            renderScore.innerHTML = ' Your Score: ' + score;
            break;
        case 'div2':
            score++;
            document.querySelector('.divs').removeChild(element2);
            renderScore.innerHTML = ' Your Score: ' + score;
            console.log('div2');
            break;
        case 'div3':
            score++;
            document.querySelector('.divs').removeChild(element3);
            renderScore.innerHTML = ' Your Score: ' + score;
            console.log('div3');
            break;
        default: break;
    }
    score === 3 ? renderScore.innerHTML = ' You Won ' : '';
})

setInterval(moveElements1,29);