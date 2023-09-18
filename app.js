const counter = document.getElementById('counter');
const btn = document.getElementById('btn');
const flyingSm = document.getElementById('flyingSm');
const newValue = document.getElementById('counter02');
const newSpace = document.getElementById('spaceCounter');

function getRandomDecimal(min, max) {
    return Math.random() * (max - min) + min;
}

// formatar um numero com duas casas decimais
function formatDecimal(number) {
    return number.toFixed(2);
}

// executar o contador
function runDecimalCounter() {
    const valorInicial = 1.00; // valor inicial
    const valorFinal = getRandomDecimal(1.50, 2.50); // valor final aleatório
    const passo = 0.01; // passa (0.01 para manter duas casas decimais)

    let valorAtual = valorInicial;

    const intervalo = setInterval(() => {
        counter.textContent = (formatDecimal(valorAtual) + "X");
        newValue.textContent = (formatDecimal(valorAtual) + "X");
        flyingSm.style.display = 'block';
        // counter.textcontent = (formatDecimal(valorAtual) + "X");
        if (valorAtual >= valorFinal) {
            clearInterval(intervalo);
            setTimeout(() => {
                flyingSm.classList.add('fade');
                counter.classList.add('fade');
            }, intervalo + 1000);
        }

        valorAtual += passo;
    }, 30); // intervalo de 100ms entre cada incremento
}


btn.addEventListener('click', () => {
    runDecimalCounter();
    spaceDisappear();
    counter.classList.remove('fade');
    flyingSm.classList.remove('fade');
    countdownTimer = setInterval(atualizarBotao, 1000)
})

let countdown = 20;

let countdownTimer = null;

const atualizarBotao = () => {
    --countdown;
    btn.innerText = "AGUARDE: " + countdown + "s...";
    btn.style.fontSize = '100%';
    btn.disabled = true;
    if (countdown === 0) {
        finishCountdownTimer();
    }
}

const finishCountdownTimer = () => {
    clearInterval(countdownTimer);
    btn.innerText = 'CLIQUE AQUI';
    btn.style.fontSize = '100%';
    btn.disabled = false;
    countdown = 20;
}

function spaceDisappear() {

    setTimeout(() =>{
        newSpace.classList.add('active');
        newSpace.style.display = 'block'
        newValue.style.display = 'block';
    }, 6000);

    setTimeout(() => {
        newSpace.style.display = 'none';
        newValue.style.display = 'none';
    }, 20000);
}