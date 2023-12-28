// данные
const DATA0 = [
  {
    dialog: 1,
    messages: [
      {
        value:
          'Добрый день! Меня зовут Алексей, я представляю службу безопасности банка "Сбер". У нас появились подозрения, что ваша банковская карта могла быть скомпрометирована. Мы хотим проверить это и, если потребуется, заблокировать вашу карту, так как на вашей карте были обнаружены подозрительные транзакции, которые не соответствуют вашему обычному паттерну покупок. Мы не можем раскрыть детали сделок из-за конфиденциальности информации, но мы бы хотели провести проверку.',
      },
    ],
    answers: [
      {
        id: "1",
        value:
          "Здравствуйте, Алексей. Я не чувствую себя комфортно, давая какую-либо информацию по телефону. Я позвоню в банк самостоятельно и уточню эту информацию.",
        correct: true,
        valueCorrect:
          "Верно, обязательно стоит позвонить в банк и сообщить о мошенническом звонке, сообщить данные о мошеннике работнику банка, и в милицию для сообщения о преступнике",
      },
      {
        id: "2",
        value:
          "Здравствуйте, Алексей. Хорошо, давайте проверим. Какие данные вам нужны для проверки?",
        correct: false,
        valueCorrect:
          "Непредоставляейте данные банковских карт, имея на руках номер карты и код безопасности мошенники могут вывести деньги зачастую неиспользуя код безопасности.",
      },
      {
        id: "3",
        value:
          "Привет, Алексей. Спасибо за информацию. Можете сразу заблокировать мою карту и выслать новую?",
        correct: false,
        valueCorrect:
          "Почти верно, заблокировать карту всегда правильный вариант - в таком случае ваши средства никто не сможет украсть",
      },
      {
        id: "4",
        value:
          "Здравствуйте, Алексей. Я вам верю, какие действия мне следует предпринять?",
        correct: false,
        valueCorrect: "Сотрудник банка никогда не попросит перевода денег.",
      },
    ],
  },
  {
    dialog: 2,
    messages: [
      {
        value:
          "Мне нужно, чтобы вы подтвердили последние четыре цифры вашей карты и дату её истечения для того, чтобы мы могли провести проверку.",
      },
    ],
    answers: [
      {
        id: "1",
        value:
          "Хорошо, последние четыре цифры моей карты - это 1234, а срок истечения - 12/23.",
        correct: false,
        valueCorrect:
          "Неверно, сообщая данные карты - вы даете возможность украсть ваши деньги без пристуствия карты, зачастую без кода безопасности",
      },
      {
        id: "2",
        value: "Я думаю, что это не безопасно делать по телефону.",
        correct: true,
        valueCorrect:
          "Верно, никогда не сообщайте номер карты сотрудникам банка, особенно при входящем звонке",
      },
    ],
  },
  {
    dialog: 3,
    messages: [
      {
        value:
          "Я понимаю ваши опасения, но я уверяю вас, что это необходимо для вашей безопасности. Вашу информацию видят только уполномоченные сотрудники службы безопасности.",
      },
    ],
    answers: [
      {
        id: "1",
        value: "Нет не блокируйте карту, я же не смогу ничего купить",
        correct: false,
        valueCorrect:
          "Неверно, лучше перестраховаться и сохранить деньги, тогда покупки можно сделать позднее, чем потерять деньги навсегда",
      },
      {
        id: "2",
        value: "Может мне стоит куда то перевести деньги?",
        correct: false,
        valueCorrect:
          "Неверно, мошенник попытается воспользоваться этим для вывода денег на свои счета",
      },
      {
        id: "3",
        value:
          "Все же я позвоню в банк повторно, и заблокирую карту сам, до свиданья.",
        correct: true,
        valueCorrect:
          "Верно, закончите разговор и позвоните в банк для перевыпуска карта, есть вероятность что ваши данные могли попасть в общий доступ",
      },
      {
        id: "4",
        value: "Я раскрыл тебя, немедленно звоню в полицию",
        correct: false,
        valueCorrect:
          "Не стоит вступать в спор с мошенником, и угрожать милицией, тогда преступник сменьшей вероятность сменит номер, обращайтесь сразу",
      },
    ],
  },
];
const DATA1 = [
  {
    dialog: 1,
    messages: [
      {
        value:
          "Здравствуйте, это Сергей Петрович из вашего банка. Мы заметили подозрительную активность на вашем счете и хотели бы вас об этом уведомить.",
      },
    ],
    answers: [
      {
        id: "1",
        value: "О, действительно? Что именно произошло?",
        correct: false,
        valueCorrect:
          "Неверно, не стоит давать мошенику говорить, он может получить финансовую информацию, даже если не получит деньги от вас напрямую",
      },
      {
        id: "2",
        value: "Это странно, я не делал никаких транзакций.",
        correct: false,
        valueCorrect: "Неверно, не сообщайте информацию о покупка кому то либо",
      },
      {
        id: "3",
        value:
          "Я не знаю никакого Сергея Петровича, вы точно из моего банка? Я сейчас сам перезвоню в банк.",
        correct: true,
        valueCorrect:
          "Верно, следует закончить разговор и обратиться в банк самостельно",
      },
      {
        id: "4",
        value: "Повторите, из какого банка?",
        correct: false,
        valueCorrect:
          "Почти Верно. Задайте встречный вопрос, сбивая звонящего с выученного текста, заставляя нервничать и выдать себя",
      },
    ],
  },
  {
    dialog: 2,
    messages: [
      {
        value:
          "На вашем счету были совершены несколько транзакций из-за границы. Мы можем заблокировать ваш счет для безопасности.",
      },
    ],
    answers: [
      {
        id: "1",
        value: "Что мне нужно сделать?",
        correct: false,
        valueCorrect:
          "Неверно, не стоит делать каких либо дейсчтвий с вашим счетом в телефоном звонке, если вы не знаете звонящего",
      },
      {
        id: "2",
        value: "Да, пожалуйста, заблокируйте его.",
        correct: false,
        valueCorrect:
          "Почти верно, если это действительно сотрудник банка - он заблокирует карту и вы получите уведомление об этом. Но будьте бдительны, проверяйте с какого номера поступило смс",
      },
      {
        id: "3",
        value: "Я не путешествовал за границу, это должна быть ошибка.",
        correct: false,
        valueCorrect:
          "Неверно, не сообщайте какие либо данные о своей жизни, об уровнее дохода и прочем",
      },
      {
        id: "4",
        value: "Хорошо, я сейчас перезвоню вам и перевыпущу карту, спасибо. ",
        correct: true,
        valueCorrect:
          "Верно, свяжитесь с банком напрямую, и удостоверьтесь что позвонили правильно.",
      },
    ],
  },
  {
    dialog: 3,
    messages: [
      {
        value:
          "Чтобы заблокировать ваш счет, мне нужно будет пройти через некоторые процедуры безопасности. Можете ли вы подтвердить свой номер счета и пин-код?",
      },
    ],
    answers: [
      {
        id: "1",
        value: "Я не уверен, что могу дать вам эту информацию по телефону.",
        correct: true,
        valueCorrect:
          "Верно, свяжитесь с банком напрямую, и удостоверьтесь что позвонили правильно.",
      },
      {
        id: "2",
        value: "Это не звучит правильно. Я позвоню в банк самостоятельно.",
        correct: true,
        valueCorrect:
          "Верно, лучше перестраховаться и позвонить в банк самому, будучи увереным куда звоните",
      },
      {
        id: "3",
        value: "Да, конечно, вот номер.",
        correct: false,
        valueCorrect:
          "Неверно, не сообщайте финансовую информацию кому либо, мошшеник может воспользоваться сервисами помогающими обходить защиту",
      },
      {
        id: "4",
        value: "Давайте я лучше переведу деньги на другой счет",
        correct: false,
        valueCorrect:
          "Неверно, заблокируйте счет, и сразу позвоните в банк для проверки",
      },
    ],
  },
  {
    dialog: 4,
    messages: [
      {
        value:
          "Если вы не дадите мне эту информацию, мы не сможем заблокировать ваш счет. Ваши средства могут быть украдены.",
      },
    ],
    answers: [
      {
        id: "1",
        value: "Конечно, я сейчас все скажу",
        correct: false,
        valueCorrect:
          "Неверно, не сообщайте номер карты кому либо, это приведет к краже",
      },
      {
        id: "2",
        value: "Я понимаю риски, но я все равно позвоню в банк сам.",
        correct: true,
        valueCorrect:
          "Вверно, стоит позвонить в банк и сообщить  о мошенничестве",
      },
      {
        id: "3",
        value: "Я заблокирую карту сам.",
        correct: true,
        valueCorrect:
          "Верно, стоит производить опреации через банковское приложение, так вы обезопастите себя от вмешательства",
      },
      {
        id: "4",
        value: "Мне как раз пришла смс, сейчас я вам продиктую.",
        correct: false,
        valueCorrect:
          "Неверно, не сообщайте коды и прочую информацию о счете, настоящий сотрудник банка имеет доступ к вашему счету напряму.",
      },
    ],
  },
];

const DATALIST = [DATA0, DATA1];
let DATA;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

newChat();

var ind = 0;

const nextChat = () => {
  messages.innerHTML = "";
  buttonsChat.className = "buttons-chat-deactivated";
  results.innerHTML = "";
  newChat();
  renderChat(0);
};

function newChat() {
  let f = true;
  let indexDatalist;
  while (f) {
    let indexChatHtml = document.querySelector(".chat");
    indexDatalist = getRandomInt(DATALIST.length);
    if (indexChatHtml.getAttribute("id") == indexDatalist) {
      indexDatalist = getRandomInt(DATALIST.length);
    } else {
      DATA = DATALIST[indexDatalist];
      indexChatHtml.id = indexDatalist;
      f = false;
    }
  }
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

// функции
const renderChat = (index) => {
  dialogAnswers.innerHTML = "";
  failtext.className =
    "d-flex flex-column text-center text-chat-fail visually-hidden";

  renderIndicator(index + 1);

  dialogAnswers.dataset.currentStep = index;

  const renderMessages = () =>
    DATA[index].messages
      .map(
        (message) =>
          `
          <p class="message" style>
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
  messages.scrollTop = messages.scrollHeight;
};

const printMessage = (str, color, id) => {
  let message = document.createElement("div");
  message.className = "post-message w-50 ms-auto";
  message.style.background = color;
  if (
    DATA[Number(dialogAnswers.dataset.currentStep)].answers[id].valueCorrect
  ) {
    message.innerHTML = `
    <span>${str}</span>           
     <hr>
    <span class="text-body-secondary">${
      DATA[Number(dialogAnswers.dataset.currentStep)].answers[id].valueCorrect
    }</span>`;
  } else {
    message.innerHTML = `
    <span>${str}</span>           
     <hr>
    <span class="text-body-secondary">${
      DATA[Number(dialogAnswers.dataset.currentStep)].answers[id].valueCorrect
    }</span>           
    `;
  }

  messages.append(message);
  messages.scrollTop = messages.scrollHeight;
};

const renderResults = () => {
  // Для результатов тестирования
  results.innerHTML =
    "<div class='w-50 m-auto text-center text-bg-success p-3 mt-1'>Вы успешно прошли интерактив!</div>";
};

const renderIndicator = (currentStep) => {
  indicator = DATA.length;
};

let failtext = document.querySelector(".text-chat-fail");

chat.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn")) {
    if (DATA.length === Number(dialogAnswers.dataset.currentStep)) {
      buttonsChat.className =
        "d-flex flex-column justify-content-center buttons-chat-visible align-items-center";
      dialogAnswers.innerHTML = "";
      renderResults();
    }
    if (
      DATA[Number(dialogAnswers.dataset.currentStep)].answers[
        event.target.id - 1
      ].correct
    ) {
      printMessage(event.target.innerHTML, "#e2ffc9", event.target.id - 1);
      if (DATA.length === Number(dialogAnswers.dataset.currentStep) + 1) {
        buttonsChat.className =
          "d-flex flex-column justify-content-center buttons-chat-visible align-items-center";
        renderResults();
        dialogAnswers.innerHTML = "";
      } else {
        localResult[event.target.id] = event.target.value;
        renderChat(Number(dialogAnswers.dataset.currentStep) + 1);
      }
    } else {
      failtext.className = "d-flex flex-column text-center text-chat-fail";
      printMessage(
        event.target.innerHTML,
        "rgb(255, 168, 168)",
        event.target.id - 1
      );
      localResult[event.target.id] = event.target.value;
      buttonsChat.className =
        "d-flex flex-column justify-content-center buttons-chat-visible align-items-center";
      dialogAnswers.innerHTML = "";
    }
  }
});

renderChat(0);

const restartChat = () => {
  failtext.className =
    "d-flex flex-column text-center text-chat-fail visually-hidden";
  messages.innerHTML = "";
  buttonsChat.className = "buttons-chat-deactivated";
  results.innerHTML = "";
  renderChat(0);
};
