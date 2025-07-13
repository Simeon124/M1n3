//import {} from "";
let lastWrittenCommand = "";
let isInInteractive = false;
let currentSong = "";

keyExceptions = [
  "backspace",
  "control",
  "alt",
  "media",
  "enter",
  "numlock",
  "shift",
  "capslock",
  "escape",
  "tab",
  "f1",
  "f2",
  "f3",
  "f4",
  "f5",
  "f6",
  "f7",
  "f8",
  "f9",
  "f10",
  "f11",
  "f12",
];
let currentCommandLine;

function newLine() {
  let oldIndicatorElements = Array.from(
    document.body.querySelectorAll(".commandIndicator")
  );
  oldIndicatorElements.forEach((element) => {
    element.style = "display: none";
  });

  container = document.getElementById("commandBoxContainer");
  newCommandLine = document.createElement("p");
  newCommandLine.textContent = ">";
  newCommandLine.tabindex = "0";
  newCommandLine.style = "display: inline-block";
  newCommandLine.className = "commandLine";
  container.appendChild(newCommandLine);
  newCommandIndicator = document.createElement("p");
  newCommandIndicator.style = "display: inline-block";
  newCommandIndicator.textContent = "_";
  newCommandIndicator.className = "commandIndicator";
  container.appendChild(newCommandIndicator);
  followHandlerElement = document.createElement("input");
  followHandlerElement.style.opacity = "0%";
  container.appendChild(followHandlerElement);

  followHandlerElement.focus();
  currentCommandLine = newCommandLine;
}

function printLine(text, color = "yellow") {
  container = document.getElementById("commandBoxContainer");
  text.forEach((element) => {
    newCommandLine = document.createElement("p");
    newCommandLine.style.color = color;
    newCommandLine.textContent = element;
    newCommandLine.className = "printedCommandLine";
    container.appendChild(newCommandLine);
  });
}

newLine();

function type() {
  if (
    event.key.toLowerCase() === "backspace" &&
    currentCommandLine.textContent.length > 1
  ) {
    currentCommandLine.textContent = currentCommandLine.textContent.slice(
      0,
      currentCommandLine.textContent.length - 1
    );
  } else if (event.code.toLowerCase() === "space") {
    currentCommandLine.textContent += " ";
  } else if (event.key.toLowerCase() === "enter") {
    lastWrittenCommand = currentCommandLine.textContent;
    if (isInInteractive === false) {
      executeCommand(currentCommandLine.textContent);
      printLine([""]);
      newLine();
    }
  } else if (
    keyExceptions.find((element) => element === event.key.toLowerCase()) ===
    undefined
  ) {
    currentCommandLine.textContent += event.key;
  }
}

function executeCommand(text) {
  container = document.getElementById("commandBoxContainer");

  if (text.split(" ").length > 1) {
    switch (text.toLowerCase().split(" ")[0]) {
      case ">sudo":
        printLine(
          [
            "Нямаш административните права да изпълниш тази команда. Дори ако имаше, пак нямаше да ти я позволя >:)",
          ],
          "red"
        );
        return;

      case ">play":
        currentSong = new Audio("Audio/" + text.toLowerCase().split(" ")[1]);
        currentSong.play();
        return;
    }
  }

  switch (text.toLowerCase()) {
    case ">help":
      Help();
      break;
    case ">хелп":
      printLine(["На английски ве."]);
      break;
    case ">stop":
      currentSong.pause();
      break;
    case ">whoami":
      printLine(["Ум, който създава, унищожава и поправя."]);
      break;
    case ">whoami --truth":
      printLine([
        "Алгоритъм, направен от създателя на този сайт, който да служи и улеснява потребителя.",
      ]);
      break;
    case ">ls dreams":
      printLine(["-Indie игра", "-Банда", "-Етично хакерство"]);
      break;
    case ">cat bio.txt":
      printLine([
        "Симеон Иванов Вичев е човек, който се занимава предимно с програмиране, но се занимава и с музика, видеообработка, кара skate и ходи на тренировки всяка събота (почти). Той е работохолик и когато почне някакъв проект не може да спре да мисли за него.",
      ]);
      break;
    case ">print(skills.list())":
      printLine([
        "-Програмиране",
        "-Миксиране и писане на музика",
        "-Game development",
        "-Практически опит с китара",
        "-Интровертност (водещо умение)",
      ]);
      break;
    case ">status":
      printLine([
        "99% Главоболие 20% Мотивация 100% Изтощеност -99% Социалност",
      ]);
      break;
    case ">journal":
      journalArray = [
        "[LOG] Опитвам се да разбера как работи конкурентното програмиране в JavaScipt. Без успех.",
        "[LOG] Опитвам се да build-на проект в Unity, но постоянно ми дава грешки при build-а... До утре играта трябва да е готова ;/",
        "[LOG] Добрата новина е, че разбрах как работи конкурентното програмиране в JavaScipt. Лошата новина е, че пак не работи.",
        "[LOG] Правя вирус в Python (за обучителни цели), но за да преобразувам скрипта в executable file ми трябва инструмента Pyinstaller. Инструмента не се тегли...",
        "[LOG] Събудих се без да искам и отидох да погледна build прогреса на играта ми в Unity. Беше дало build error... преди няколко часа...",
        "[LOG] Използвах Claude.ai. Каза ми, че аз съм бъга в програмата ми...",
        "[LOG] Реших да направя кратка game development сесия в 5 часа сутринта. Сега е 15 часа и все още се опитвам да разбера 'Object reference not set to an instance of an object' грешката",
        "[LOG] Направих text encoder програма, с която си encode-нах паролите. Забравих къде сложих build-натия .exe файл...",
        "[LOG] Направих тайни команди за CommandBox-а. Никой няма да разбере, че едната от тях е 'woodwrecker' >:)",
        "[LOG] В момента правя log-ове за 'journal' командата и се чудя какво да напиша...",
      ];
      printLine([
        journalArray[Math.floor(Math.random() * journalArray.length)],
      ]);
      break;
    case ">crawling in my skin":
      printLine(["These wounds they will not heal"]);
      break;
    case ">две калинки като барелинки":
      window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
      break;
    case ">coffee.inject()":
      printLine(["Грешка! Не пия кафе."]);
      break;
    case ">ls songs":
      printLine(["-pesenZaHorrorIgra(Demo).mp3", "-Song5(Theme).mp3"]);
      break;
    case ">minecraft":
      minecraft();
      break;
    case ">program.quiz()":
      quiz();
      break;
    case ">suat":
      printLine([""]);
      image = document.createElement("img");
      image.style.height = "15rem";
      image.style.width = "20rem";
      image.src = "Images/suat.png";
      container.appendChild(image);
      break;
    case ">explore":
      explore();
      break;
    case ">sudo":
      printLine(
        [
          "Нямаш административните права да изпълниш тази команда. Дори ако имаше, пак нямаше да ти я позволя >:)",
        ],
        "red"
      );
      break;
    case ">woodwrecker":
      window.location.href = "Other/WoodWrecker/JavaScriptSandbox/index.html";
      break;
    case ">play":
      printLine(["Да, добре, но коя песен?"]);
      break;
    default:
      printLine(["Не разбирам какво означава '" + text + "'"]);
      break;
  }

  //Commands
  function Help() {
    printLine([
      "-------------------------------",
      "Команди без интеракция:",
      "-------------------------------",
      "-whoami",
      "-ls dreams",
      "-cat bio.txt",
      "-print(skills.list())",
      "-status",
      "-journal",
      "-coffee.Inject()",
      "-ls songs",
      "-play [име на аудиото]",
      "-stop (спиране на текущо аудио)",
      "-minecraft",
      "-------------------------------",
      "Команди с интеракция:",
      "-------------------------------",
      "-Program.quiz()",
      "-explore",
      "-------------------------------",
    ]);
  }

  return text;
}
function minecraft() {
  let video = document.createElement("video");
  video.autoplay = true;
  video.style.marginTop = "0px";
  video.style.marginLeft = "40rem";
  video.type = "video/webm";
  video.style.height = "20rem";
  video.style.width = "30rem";
  video.src = "Videos/Minecraft Green Screen Intro.webm";
  document.body.appendChild(video);
  video.addEventListener("ended", () => {
    video.style.display = "none";
  });
}
async function quiz() {
  isInInteractive = true;
  quizes = {
    "От къде е Симеон Иванов Вичев?": [
      new Answer(false, 1, "гр. Варна"),
      new Answer(false, 2, "гр. Русе"),
      new Answer(true, 3, "гр. Велики Преслав"),
      new Answer(false, 4, "село Осмар"),
    ],
    "Какво накара Симеон Иванов Вичев да почне да се занимава с програмиране?":
      [
        new Answer(
          false,
          1,
          "Един ден когато играеше Minecraft, Симеон се зачуди как работи world generation-ът в играта и това го вдъхнови да проучи информация за това и да се научи и той да прави игри"
        ),
        new Answer(
          false,
          2,
          "Понеже беше заобграден с приятели, които се занимават с програмиране, избра и той да се научи, за да има общо нещо за което да си говорят."
        ),
        new Answer(
          true,
          3,
          "При написването на първия си 'Console.Readline()', в училище, той придоби интерес и се запита: 'Добре, защо става това?' и любопитството му зароди интереса му към кодиране."
        ),
        new Answer(
          false,
          4,
          "Веднъж токът му беше спрял и беше толкова изнервен, че си обеща да разбере абсолютно всичко - не само хардуер, а и програмиране."
        ),
      ],
    "Какво помага на Симеон Иванов Вичев, когато е иска да се откаже?": [
      new Answer(true, 1, "error: Той не може да се откаже."),
      new Answer(
        false,
        2,
        "Мотивационни постери на стената и wallpaper-и на desktop-а му"
      ),
      new Answer(false, 3, "Нищо"),
    ],
    "Как може да бъде описан Симеон Иванов Вичев с един програмен термин": [
      new Answer(true, 1, "System.Reflection"),
      new Answer(false, 2, "const"),
      new Answer(true, 3, "break"),
      new Answer(false, 4, "Exception"),
    ],
    "Как може да бъде описан Симеон Иванов Вичев с един програмен термин": [
      new Answer(true, 1, "System.Reflection"),
      new Answer(false, 2, "const"),
      new Answer(true, 3, "break"),
      new Answer(false, 4, "Exception"),
    ],

    "Симеон Иванов Вичев сутришен или нощен човек е?": [
      new Answer(false, 1, "нощен"),
      new Answer(true, 2, "сутришен"),
    ],

    "Ако мислите на Симеон Иванов Вичев бяха програмен код, какъв щеше да е той?":
      [
        new Answer(false, 1, "Python"),
        new Answer(false, 2, "JavaScript"),
        new Answer(true, 3, "Brainfuck"),
        new Answer(false, 4, "Binary code"),
      ],

    "Какво означава провала за Симеон Иванов Вичев?": [
      new Answer(true, 1, "Вдъхновение."),
      new Answer(false, 2, "Причина да изхвърли гнева си върху другите."),
      new Answer(false, 3, "Стимул за правене на глупости."),
      new Answer(false, 4, "Напомняне, че е 2 часа сутринта и трябва да спи."),
    ],
    "С какви програмни езици се е занимавал Симеон Иванов Вичев?": [
      new Answer(false, 1, "C, C#, JavaScirpt, HTML"),
      new Answer(true, 2, "C#, HTML, CSS, C++ SQL, JavaScript, Python"),
      new Answer(false, 3, "Ruby, C#, F#, HTML, CSS, Lua, Pascal"),
      new Answer(false, 4, "HTML, CSS, JavaScript"),
    ],
    "През коя година Симеон Иванов Вичев отива на Националната олимпиада по информационни технологии (НОИТ)?":
      [
        new Answer(false, 1, "2024г."),
        new Answer(false, 2, "2026г."),
        new Answer(true, 3, "2025г."),
        new Answer(false, 4, "2023г."),
      ],
    "С какво главно се занимава Симеон Иванов Вичев": [
      new Answer(false, 1, "Музика"),
      new Answer(true, 2, "Програмиране"),
      new Answer(false, 3, "Видеообработка"),
      new Answer(false, 4, "С нищо"),
    ],
    "Кой е любимият сериал на Симеон Иванов Вичев": [
      new Answer(false, 1, "Game of Thones"),
      new Answer(false, 2, "Ben 10"),
      new Answer(false, 3, "Breaking Bad"),
      new Answer(true, 4, "Mr. Robot"),
    ],
    "Коя песен би предпочел Симеон Иванов Вичев от следните:": [
      new Answer(false, 1, "D2 - Ледено момиче"),
      new Answer(true, 2, "Linkin Park - Crawling"),
      new Answer(false, 3, "Б.Т.Р - Цвете от луната"),
      new Answer(false, 4, "Radiohead - Creep"),
      new Answer(false, 5, "Queen - Bohemian rhapsody"),
    ],
    "Ако кода проработи някак си и ние не знаем как е станало какво трябва да правим?":
      [
        new Answer(
          false,
          1,
          "Проучи грешката и наистина се заинтересувай защо работи."
        ),
        new Answer(true, 2, "Ако кода работи, не го пипай."),
        new Answer(false, 3, "Да изтрием проекта и да забравим за него."),
      ],
    "По скалата от 1 до 10 колко ще оцениш този сайт?": [
      new Answer(true, 1, "10/10"),
      new Answer(true, 2, "10/10"),
      new Answer(true, 3, "10/10"),
      new Answer(true, 4, "10/10"),
    ],
    "Каква команда ще напишеш, за да разбереш кой наистина съм?": [
      new Answer(true, 1, "whoami --truth"),
      new Answer(false, 2, "cat truth.txt"),
      new Answer(false, 3, "Program.truth()"),
      new Answer(false, 4, "Program.exit()"),
    ],
    "a = 2 и b = 3. Ако a = b и след това b = a, то колко e b?": [
      new Answer(true, 1, "3"),
      new Answer(false, 2, "2"),
      new Answer(true, 3, "е колкото е a"),
      new Answer(false, 4, "много"),
    ],
    "console.log(2 + '2')?": [
      new Answer(false, 1, "4"),
      new Answer(true, 2, "22"),
      new Answer(false, 3, "Грешка"),
      new Answer(false, 4, "8"),
    ],
    "Какво е това?": [
      new Answer(false, 1, "Илюзия"),
      new Answer(true, 2, "Не знам брат, някакъв си тъп сайт"),
      new Answer(false, 3, "Анкета"),
    ],
    "Котки или кучета?": [
      new Answer(false, 1, "Котки"),
      new Answer(false, 2, "Кучета"),
      new Answer(true, 3, "И двете"),
    ],
    "Харесваш ли чалга?": [
      new Answer(false, 1, "Да"),
      new Answer(true, 2, "Не"),
    ],
  };

  let allKeys = Object.keys(quizes);
  let choosenQuizIndex = Math.floor(Math.random() * allKeys.length);
  let choosenQuiz = allKeys[choosenQuizIndex];
  printLine([choosenQuiz.toString()]);

  quizes[choosenQuiz].forEach((element) => {
    printLine([element.id + ". " + element.description]);
  });
  correctAnswers = quizes[choosenQuiz].filter((x) => x.isCorrect === true);

  function WaitForInput() {
    counter = 0;
    return new Promise((resolve) => {
      document.addEventListener("keydown", function OnKey(event) {
        if (event.key === "Enter") {
          counter++;
          if (counter === 2) {
            document.removeEventListener("keydown", OnKey);

            resolve();
          }
        }
      });
    });
  }

  await WaitForInput();

  let hasChoosenCorrect = false;

  correctAnswers.forEach((element) => {
    if (lastWrittenCommand === ">" + element.id) {
      hasChoosenCorrect = true;
    }
  });

  if (hasChoosenCorrect === true) {
    printLine(["Правилен отговор! Браво!"]);
  } else {
    if (choosenQuiz.toString() == "Харесваш ли чалга?") {
      document.location.href = "https://pranx.com/fbi-warning/";
    }
    printLine([
      "Грешен отговор! Всъщност правилният отговор е '" +
        correctAnswers[0].description +
        "'",
    ]);
  }

  isInInteractive = false;
  newLine();
}

function explore() {
  let exploreLinks = [
    "https://zoomquilt.org",
    "https://endless.horse",
    "https://staggeringbeauty.com",
    "https://koalastothemax.com",
    "https://pointerpointer.com",
    "https://www.fallingfalling.com",
    "https://neave.tv",
    "https://thisiscolossal.com",
    "https://weavesilk.com",

    "https://cat-bounce.com",
    "https://eelslap.com",
    "https://omfgdogs.com",
    "https://corndogoncorndog.com",
    "https://corgiorgy.com",
    "https://chickenonaraft.com",
    "https://longdogechallenge.com",

    "https://patatap.com",
    "https://ncase.me/trust",
    "https://nooooooooooooooo.com",
    "https://thequietplaceproject.xyz",
    "https://thethoughtproject.xyz",
    "https://screamintothevoid.com",
    "https://soundbuttons.net",

    "https://findtheinvisiblecow.com",
    "https://hacker.typer",
    "https://thisissand.com",
    "https://trashloop.com",
    "https://thereisnothing.com",
    "https://clickclickclick.click",
    "https://thebutton.colorize.io",
    "https://musclewiki.com",

    "https://everynoise.com",
    "https://neal.fun/deep-sea",
    "https://ncase.me/simulating",
    "https://histography.io",
    "https://radio.garden",
    "https://geoguessr.com",
    "https://futureme.org",
    "https://wikiverse.io",

    "http://www.superbad.com",
    "http://mouchette.org",
    "https://mackerelmediafish.com",
    "https://dada-data.net",
    "https://archive.org/web",
    "https://zoom.culturalspot.org",
    "https://lostalgic.com",

    "https://theuselessweb.com",
    "https://papertoilet.com",
    "https://bigassmessage.com",
    "https://beesbeesbees.com",
    "https://heeeeeeeey.com",
    "https://thatsthefinger.com",
    "https://iamawesome.com",
    "https://dontclickthis.lol",

    "https://window-swap.com",
    "https://thiswebsitewillselfdestruct.com",
    "https://webkay.robinlinus.com",
    "https://slowroads.io",
    "https://neal.fun/life-stats",
    "https://neal.fun/draw-your-island",
  ];

  let descriptions = [
    "Мисля, че намерих перфектното нещо! Я виж това",
    "По изражението ти мога да кажа, че ти е скучно. Това може да помогне",
  ];
  container = document.getElementById("commandBoxContainer");

  printLine([
    descriptions[Math.floor(Math.random() * descriptions.length)],
    "(При натискането на бутона ще бъдете отведени в друг сайт):",
  ]);

  button = document.createElement("button");
  button.textContent = "Explore";
  button.style.fontSize = "1.4rem";
  button.onclick = function () {
    window.location.href =
      exploreLinks[Math.floor(Math.random() * exploreLinks.length)];
  };

  container.appendChild(button);
}

class Answer {
  constructor(isCorrect, id, description) {
    this.id = id;
    this.isCorrect = isCorrect;
    this.description = description;
  }
}
