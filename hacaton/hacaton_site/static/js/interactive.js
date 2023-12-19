// данные
const DATA0 = [
  {
    dialog: 1,
    messages: [
      {
        value:
          "Здравствуйте, я звоню вам из службы безопасности вашего N банка. Мы зафиксировали подозрительную активность вашего счета. Вам нужно срочно снять все деньги с карты для того чтобы они не попали мошенникам и перевести их на безопасный счет, который мы сейчас вам создадим чтобы сохранить деньги.",
      },
    ],
    answers: [
      {
        id: "1",
        value: "Здравствуйте. Сейчас я позвоню в банк и сама все выясню.",
        correct: true,
      },
      {
        id: "2",
        value: "О боже мой! Уже бегу в банкомат!",
        correct: false,
      },
      {
        id: "3",
        value: "Давайте я просто переведу деньги на безопасный счет",
        correct: false,
      },
      {
        id: "4",
        value: "Что за мошенники?",
        correct: false,
      },
    ],
  },
  {
    dialog: 2,
    messages: [
      {
        value:
          "Нет, вам не нужно звонить в банк. Вы в пустую потратите драгоценное время.",
      },
    ],
    answers: [
      {
        id: "1",
        value: "Точно, вы правы. Я бегу в банкомат",
        correct: false,
      },
      {
        id: "2",
        value:
          "Я все равно позвоню в банк по их официальному номеру на странице сайта",
        correct: true,
      },
      {
        id: "3",
        value: "ААААААА, ПАНИКА!!!",
        correct: false,
      },
      {
        id: "4",
        value: "Хорошо, что нужно сделать?",
        correct: false,
      },
    ],
  },
  {
    dialog: 3,
    messages: [
      {
        value: "Ладно, вы меня раскусили. Да - я мошенник!",
      },
    ],
    answers: [
      {
        id: "1",
        value: "УЖС",
        correct: false,
      },
      {
        id: "2",
        value: "УЖС",
        correct: false,
      },
      {
        id: "3",
        value: "ХАХАХА, попался негодяй!",
        correct: true,
      },
      {
        id: "4",
        value: "УЖС",
        correct: false,
      },
    ],
  },
];
const DATA1 = [
  {
    dialog: 1,
    messages: [
      {
        value: "Папа папа, привет, помоги скорее беда случилась",
      },
    ],
    answers: [
      {
        id: "1",
        value: "Стас, ты, тчто случилось?",
        correct: true,
      },
      {
        id: "2",
        value: "FFF",
        correct: false,
      },
      {
        id: "3",
        value: "FFF",
        correct: false,
      },
      {
        id: "4",
        value: "FFF",
        correct: false,
      },
    ],
  },
  {
    dialog: 2,
    messages: [
      {
        value: "Пап да я, это сын твой Стас, пап я человека сбил",
      },
    ],
    answers: [
      {
        id: "1",
        value: "Точно, вы правы. Я бегу в банкомат",
        correct: false,
      },
      {
        id: "2",
        value: "Как? Что случилось? Что делать?",
        correct: true,
      },
      {
        id: "3",
        value: "ААААААА, ПАНИКА!!!",
        correct: false,
      },
      {
        id: "4",
        value: "Хорошо, что нужно сделать?",
        correct: false,
      },
    ],
  },
  {
    dialog: 3,
    messages: [
      {
        value:
          "Да вот ехал на машине с другом, пьяный и убил. Можем договорится с ментами за 500 тысяч",
      },
    ],
    answers: [
      {
        id: "1",
        value: "УЖС",
        correct: false,
      },
      {
        id: "2",
        value: "Конечно сейчас скину",
        correct: false,
      },
      {
        id: "3",
        value: "Мошенник!",
        correct: true,
      },
      {
        id: "4",
        value: "УЖС",
        correct: false,
      },
    ],
  },
];
const DATA2 = [
  {
    dialog: 1,
    messages: [
      {
        value:
          "Лариса Васильевна здравствуйте, вас беспокоят из банка Тинькофф",
      },
    ],
    answers: [
      {
        id: "1",
        value: "Здравствуйте,ой, чем могу помочь?",
        correct: true,
      },
      {
        id: "2",
        value: "adasdasdas",
        correct: false,
      },
      {
        id: "3",
        value: "asdasdasdasdsdfd",
        correct: false,
      },
      {
        id: "4",
        value: "sdfdsfd fds fds fds?",
        correct: false,
      },
    ],
  },
  {
    dialog: 2,
    messages: [
      {
        value: "Мы проверяем актуальность мобильных номеров",
      },
    ],
    answers: [
      {
        id: "1",
        value: "EXIT",
        correct: false,
      },
      {
        id: "2",
        value: "Хорошо, что нужно сделать",
        correct: true,
      },
      {
        id: "3",
        value: "ДАСВИДАНИЯ",
        correct: false,
      },
      {
        id: "4",
        value: "Я НА СВЕТСКОМ УЖИНЕ",
        correct: false,
      },
    ],
  },
  {
    dialog: 3,
    messages: [
      {
        value:
          "Сейчас вам придет смс от банка, скажите пожалуйста цифры и ваш номер телефона останется в базе.",
      },
    ],
    answers: [
      {
        id: "1",
        value: "УЖС",
        correct: false,
      },
      {
        id: "2",
        value: "УЖС",
        correct: false,
      },
      {
        id: "3",
        value: "4321 хорошего дня",
        correct: true,
      },
      {
        id: "4",
        value: "УЖС",
        correct: false,
      },
    ],
  },
];
const DATA3 = [
  {
    dialog: 1,
    messages: [
      {
        value: "Папа папа, привет, помоги скорее беда случилась",
      },
    ],
    answers: [
      {
        id: "1",
        value: "Стас, ты, тчто случилось?",
        correct: true,
      },
      {
        id: "2",
        value: "FFF",
        correct: false,
      },
      {
        id: "3",
        value: "FFF",
        correct: false,
      },
      {
        id: "4",
        value: "FFF",
        correct: false,
      },
    ],
  },
  {
    dialog: 2,
    messages: [
      {
        value: "Пап да я, это сын твой Стас, пап я человека сбил",
      },
    ],
    answers: [
      {
        id: "1",
        value: "Точно, вы правы. Я бегу в банкомат",
        correct: false,
      },
      {
        id: "2",
        value: "Как? Что случилось? Что делать?",
        correct: true,
      },
      {
        id: "3",
        value: "ААААААА, ПАНИКА!!!",
        correct: false,
      },
      {
        id: "4",
        value: "Хорошо, что нужно сделать?",
        correct: false,
      },
    ],
  },
  {
    dialog: 3,
    messages: [
      {
        value:
          "Да вот ехал на машине с другом, пьяный и убил. Можем договорится с ментами за 500 тысяч",
      },
    ],
    answers: [
      {
        id: "1",
        value: "УЖС",
        correct: false,
      },
      {
        id: "2",
        value: "Конечно сейчас скину",
        correct: false,
      },
      {
        id: "3",
        value: "Мошенник!",
        correct: true,
      },
      {
        id: "4",
        value: "УЖС",
        correct: false,
      },
    ],
  },
];
const DATA4 = [
  {
    dialog: 1,
    messages: [
      {
        value:
          "Здравствуйте, с вашего крипто кошелька пытаются украсть 10000 биткоинов",
      },
    ],
    answers: [
      {
        id: "1",
        value: "ЧТТООООО!!?? ДАК КАК ТАК?? ЧТО ДЕЛАТЬ?",
        correct: true,
      },
      {
        id: "2",
        value: "РАЗВОД НА ЧЕБУРЕК",
        correct: false,
      },
      {
        id: "3",
        value: "ХОХЛОРАЗВОД",
        correct: false,
      },
      {
        id: "4",
        value: "У меня нет криптокошелька",
        correct: false,
      },
    ],
  },
  {
    dialog: 2,
    messages: [
      {
        value:
          "Сейчас на вашу почту придет код, пришлите его нам, и мы вам поможем",
      },
    ],
    answers: [
      {
        id: "1",
        value: "Я звоню в фсб и цру",
        correct: false,
      },
      {
        id: "2",
        value: "Вот мой код - 1488",
        correct: true,
      },
      {
        id: "3",
        value: "ААААААА, ПАНИКА!!!",
        correct: false,
      },
      {
        id: "4",
        value: "Аллах акбар",
        correct: false,
      },
    ],
  },
  {
    dialog: 3,
    messages: [
      {
        value: "ТААК, а теперь нажмите на ту кнопку",
      },
    ],
    answers: [
      {
        id: "1",
        value: "На зеленую?",
        correct: false,
      },
      {
        id: "2",
        value: "На желтую?",
        correct: false,
      },
      {
        id: "3",
        value: "нажал на красную",
        correct: true,
      },
      {
        id: "4",
        value: "тут нет кнопок",
        correct: false,
      },
    ],
  },
];
const DATA5 = [
  {
    dialog: 1,
    messages: [
      {
        value:
          "Здравствуйте, я стас какай просто и у меня закончились деньги, помогите пожалуста, я вам сигну сделаю",
      },
    ],
    answers: [
      {
        id: "1",
        value: "ок, что тебе надо?",
        correct: true,
      },
      {
        id: "2",
        value: "аваываыв",
        correct: false,
      },
      {
        id: "3",
        value: "ываапп",
        correct: false,
      },
      {
        id: "4",
        value: "цукцуавы",
        correct: false,
      },
    ],
  },
  {
    dialog: 2,
    messages: [
      {
        value: "ООО СПС, дай ищо",
      },
    ],
    answers: [
      {
        id: "1",
        value: "не дам",
        correct: false,
      },
      {
        id: "2",
        value: "держи",
        correct: true,
      },
      {
        id: "3",
        value: "ыфвфывы",
        correct: false,
      },
      {
        id: "4",
        value: "авыаываываыв",
        correct: false,
      },
    ],
  },
  {
    dialog: 3,
    messages: [
      {
        value: "выауавыацуавыаувыавыаыва",
      },
    ],
    answers: [
      {
        id: "1",
        value: "выавыавыа",
        correct: false,
      },
      {
        id: "2",
        value: "ываывавыаваываыв",
        correct: false,
      },
      {
        id: "3",
        value: "ываывавыаыаваыва",
        correct: true,
      },
      {
        id: "4",
        value: "ываывауцыавыаыуавыа",
        correct: false,
      },
    ],
  },
];
const DATALIST = [DATA0, DATA1, DATA2, DATA3, DATA4, DATA5];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let localResult = {};
// константы
const buttonsChat = document.querySelector(".buttons-chat-deactivated");
const chat = document.querySelector(".chat");
const messages = document.querySelector(".messages");
const dialogAnswers = document.querySelector(".dialog");
const results = document.querySelector(".results");
const bntRestart = document.querySelector(".btn-restart");
const btnNext = document.querySelector(".btn-next");
let indicator = 0;
let DATA = DATALIST[getRandomInt(5)];

// функции
const renderChat = (index) => {
  dialogAnswers.innerHTML = "";

  renderIndicator(index + 1);

  dialogAnswers.dataset.currentStep = index;

  const renderMessages = () =>
    DATA[index].messages
      .map(
        (message) =>
          `
          <p class="message">
            ${message.value}
          </p>
         `
      )
      .join("");

  const renderAnswers = () =>
    DATA[index].answers
      .map(
        (answer) =>
          `
          <div class="col-md-6 d-flex align-items-center">
            <button class="btn btn-success" value="${answer.value}" id="${answer.id}">
              ${answer.value}
            </button>
          </div>
      `
      )
      .join("");
  let answer = document.createElement("div");
  answer.className = "row dialog-answers";
  answer.innerHTML = `${renderAnswers()}`;
  dialogAnswers.append(answer);
  let message = document.createElement("div");
  message.className = "get-message w-50 me-auto";
  message.innerHTML = `${renderMessages()}`;
  messages.append(message);
};

const printMessage = (str) => {
  let message = document.createElement("div");
  message.className = "post-message w-50 ms-auto";
  message.innerHTML = `${str}`;
  messages.append(message);
};

const renderResults = () => {
  // let content = document.createElement("div");
  // content.className = "w-50 ms-auto";
  // content.innerHTML = `${renderResults()}`;
  // const getAnswers = (index) =>
  //   DATA[index].answers.map((answer) => `${answer.value}`).join("");
  // DATA.forEach((answer, index) => (content += `${answer}${getAnswers(index)}`));
  // results.append(content);
};

const renderIndicator = (currentStep) => {
  indicator = DATA.length;
};

chat.addEventListener("click", (event) => {
  // С начала

  if (event.target.classList.contains("btn")) {
    if (DATA.length === Number(dialogAnswers.dataset.currentStep)) {
      buttonsChat.className =
        "row d-flex flex-row justify-content-center gap-5 mt-5 buttons-chat-visible";
      renderResults();
      dialogAnswers.innerHTML = "";
    }
    if (
      DATA[Number(dialogAnswers.dataset.currentStep)].answers[
        event.target.id - 1
      ].correct
    ) {
      printMessage(event.target.innerHTML);
      if (DATA.length === Number(dialogAnswers.dataset.currentStep) + 1) {
        buttonsChat.className =
          "row d-flex flex-row justify-content-center gap-5 mt-5 buttons-chat-visible";
        renderResults();
        dialogAnswers.innerHTML = "";
      } else {
        localResult[event.target.id] = event.target.value;
        event.target.style.backgroundColor = "green";
        renderChat(Number(dialogAnswers.dataset.currentStep) + 1);
      }
    } else {
      event.target.style.backgroundColor = "red";
    }
  }
});

renderChat(0);

const restartChat = () => {
  messages.innerHTML = "";
  buttonsChat.className = "buttons-chat-deactivated";
  renderChat(0);
  DATA = DATALIST[getRandomInt(5)];
};
