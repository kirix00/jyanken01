const story = {
  1: {
    text: "物語の始まり。どうしますか？",
    choices: {
      1: "左へ行く",
      2: "右へ行く",
      3: "前へ進む"
    }
  },
  2: {
    text: "左へ行きました。次は？",
    choices: {
      1: "戻る",
      2: "深く進む",
      3: "周りを調べる"
    }
  },
  3: {
    text: "右へ行きました。何をしますか？",
    choices: {
      1: "前へ進む",
      2: "立ち止まる",
      3: "戻る"
    }
  },
  4: {
    text: "前へ進みました。進みますか？",
    choices: {
      1: "はい",
      2: "いいえ",
      3: "わからない"
    }
  }
};

let currentState = 1;

function nextText(choice) {
  if (currentState === 1) {
    if (choice === 1) currentState = 2;
    if (choice === 2) currentState = 3;
    if (choice === 3) currentState = 4;
  } else {
    currentState = 1;
  }

  updateText();
}

function updateText() {
  const state = story[currentState];
  document.getElementById('text').textContent = state.text;
  const choicesButtons = document.querySelectorAll('#choices button');
  let i = 1;
  for (let choice in state.choices) {
    choicesButtons[i - 1].textContent = state.choices[choice];
    choicesButtons[i - 1].onclick = () => nextText(i);
    i++;
  }
}

updateText();
