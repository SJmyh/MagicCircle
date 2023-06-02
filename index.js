const answers = [
    'Беспорно', 'Мне кажется - да', 'Пока неясно, попробуй снова', 'Даже не думай',
    'Предрешено', 'Вероятнее всего', 'Спроси позже', 'Мой ответ - нет', 'Никаких сомнений',
    'Хорошие перспективы', 'Лучше не рассказывать', 'По моим данным - нет', 'Определённо да',
    'Знаки говорят - да', 'Сейчас нельзя предсказать', 'Перспективы не очень хорошие', 'Можешь быть уверен в этом',
    'Д', 'Сконцентрируйся и спроси опять', 'Весьма сомнительно'
];

const block = document.querySelector('.block');
const forText = document.querySelector('.forText');
const input = document.querySelector('.input');
const send = document.querySelector('.send');

let phase = 'acquaintance';

send.addEventListener('click', () => {
    if (input.value.length) {
        work()
    }
});

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && input.value.length) {
        work()
    }
});

const work = () => {
    const text = input.value;

    if (phase === 'acquaintance') {
        const answerUser = document.createElement('p');
        answerUser.innerHTML = "- " + text;
        forText.appendChild(answerUser);

        const answerBot = document.createElement('p');
        answerBot.innerHTML = `- Привет, ${text}! Введите Ваш вопрос!`;
        forText.appendChild(answerBot);

        phase = 'asksQuestion';
        resetInput()
    } else if (phase === 'asksQuestion') {
        const answerUser = document.createElement('p');
        answerUser.innerHTML = "- " + text;
        forText.appendChild(answerUser);

        const answerBot = document.createElement('p');
        answerBot.innerHTML = `- ${arrayRandElement()}!`;
        forText.appendChild(answerBot);

        const answerBotTwo = document.createElement('p');
        answerBotTwo.innerHTML = `- Возвращайтесь, если возникнут вопросы!`;
        forText.appendChild(answerBotTwo);

        forText.scrollTo(0, forText.scrollHeight);

        resetInput()
    }
}

const arrayRandElement = (arr) => {
    const rand = Math.floor(Math.random() * answers.length);
    return answers[rand];
}

const resetInput = () => {
    input.value = '';
}


