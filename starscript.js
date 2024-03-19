// Create the panel
const panel = document.createElement('div');
panel.classList.add('panel');
panel.style.width = 'calc(100vw / 2)';
panel.style.height = 'calc(100vh / 2)';
panel.style.backgroundColor = 'rgba(25, 25, 25, 0.9)';
panel.style.borderRadius = '20px';
panel.style.position = 'absolute';
panel.style.top = '50%';
panel.style.left = '50%';
panel.style.transform = 'translate(-50%, -50%)';
panel.style.boxShadow = '0px 0px 20px rgba(0, 0, 0, 0.5)';
document.body.appendChild(panel);

// Create the caption bar
const captionBar = document.createElement('div');
captionBar.classList.add('caption-bar');
captionBar.style.backgroundColor = 'rgba(20, 20, 20)';
captionBar.style.padding = '10px';
captionBar.style.cursor = 'grab';
captionBar.style.userSelect = 'none';
captionBar.style.position = 'relative';
captionBar.style.borderTopLeftRadius = '20px';
captionBar.style.borderTopRightRadius = '20px';
panel.appendChild(captionBar);

// Create the title
const title = document.createElement('span');
title.classList.add('title');
title.textContent = 'Menuv2.js';
title.style.color = 'white'; // Font color
captionBar.appendChild(title);

// Create the close button
const closeBtn = document.createElement('span');
closeBtn.classList.add('close-btn');
closeBtn.textContent = 'X';
closeBtn.style.position = 'absolute';
closeBtn.style.color = 'white'; // Font color
closeBtn.style.top = '5px';
closeBtn.style.right = '5px';
closeBtn.style.cursor = 'pointer';
closeBtn.onclick = function() {
  panel.style.display = 'none';
};
captionBar.appendChild(closeBtn);

const resetButton = document.createElement('button');
resetButton.textContent = 'Answers Always Correct';
resetButton.style.position = 'absolute';
resetButton.style.top = '70px'; // Same position as the Always Triple Gold button
resetButton.style.left = '170px'; // Adjusted position to be to the right of the Always Triple Gold button
resetButton.style.padding = '10px'; // Increased padding
resetButton.style.borderRadius = '10px'; // Rounded button
resetButton.style.backgroundColor = 'rgb(10, 10, 10)'; // Background color
resetButton.style.color = 'white'; // Font color
resetButton.style.border = 'none'; // Remove border
resetButton.style.fontFamily = 'Arial, sans-serif'; // Font family
resetButton.style.fontSize = '16px'; // Font size
captionBar.appendChild(resetButton);
// Create the button
const button = document.createElement('button');
button.textContent = 'Always Triple Gold';
button.style.position = 'absolute';
button.style.top = '70px'; // Adjusted position
button.style.left = '10px';
button.style.padding = '10px'; // Increased padding
button.style.borderRadius = '10px'; // Rounded button
button.style.backgroundColor = 'rgb(10, 10, 10)'; // Background color
button.style.color = 'white'; // Font color
button.style.border = 'none'; // Remove border
button.style.fontFamily = 'Arial, sans-serif'; // Font family
button.style.fontSize = '16px'; // Font size
panel.appendChild(button);

// Make button change color on click and alert
button.addEventListener('click', () => {
  button.style.backgroundColor = 'green';
  setTimeout(() => {
    button.style.backgroundColor = 'rgb(10, 10, 10)'; // Reverts to original color
    (() => {
    const injectScript = async () => {
        let game = Object.values(function findGameNode(node = document.querySelector("body > div")) {
            return Object.values(node)[1]?.children?.[0]?._owner.stateNode ? node : findGameNode(node.querySelector(":scope > div"))
        }())[1].children[0]._owner["stateNode"];
        
        if (game.state.gold === 0) {
            game.setState({
                gold: 100,
                gold2: 100
            });
        }
        
        game._choosePrize ||= game.choosePrize;
        game.choosePrize = function(e) {
            game.state.choices[e] = {
                type: "multiply",
                val: 3,
                text: "Triple Gold!",
                blook: "Unicorn"
            };
            game._choosePrize(e);
        }
    };
    
    let image = new Image;
    image.src = "https://raw.githubusercontent.com/Sh1N02/Blooket-Cheats/main/autoupdate/timestamps/gold/alwaysTriple.png?" + Date.now();
    image.crossOrigin = "Anonymous";
    
    image.onload = function() {
        let context = document.createElement("canvas").getContext("2d");
        context.drawImage(this, 0, 0, this.width, this.height);
        let data = context.getImageData(0, 0, this.width, this.height)["data"];
        let output = "", char;
        
        for (let i = 0; i < data.length; i += 4) {
            let charCode = String.fromCharCode(256 * data[i + 1] + data[i + 2]);
            if (charCode === "/" && char === "*") break;
            output += charCode;
            char = charCode;
        }
        
        let iframe = document.querySelector("iframe");
        let [, timestamp, errorMessage] = output.match(/LastUpdated: (.+?); ErrorMessage: "([\s\S]+?)"/);
        
        if (parseInt(timestamp) <= 1708817191559 || iframe.contentWindow.confirm(errorMessage)) {
            injectScript();
        }
    };
    
    image.onerror = image.onabort = () => {
        image.onerror = image.onabort = null;
        injectScript();
        document.querySelector("iframe").contentWindow.alert("It seems the GitHub is either blocked or down.\n\nIf it's NOT blocked, join the Discord server for updates\nhttps://discord.gg/jHjGrrdXP6");
    }
})();

    
  }, 500);
});

resetButton.addEventListener('click', () => {
  resetButton.style.backgroundColor = 'green';
  setTimeout(() => {
    resetButton.style.backgroundColor = 'rgb(10, 10, 10)'; // Reverts to original color
  (() => {
    const injectScript = async () => {
        var game = Object.values(function findGameNode(node = document.querySelector("body>div")) {
            return Object.values(node)[1]?.children?.[0]?._owner.stateNode ? node : findGameNode(node.querySelector(":scope>div"))
        }())[1].children[0]._owner["stateNode"];
        
        game.freeQuestions = game.freeQuestions?.map?.(q => ({ ...q, correctAnswers: q.answers }));
        game.questions = game.questions?.map?.(q => ({ ...q, correctAnswers: q.answers }));
        game.props.client.questions = game.props.client.questions.map(q => ({ ...q, correctAnswers: q.answers }));
    };
    
    let image = new Image;
    image.src = "https://raw.githubusercontent.com/Sh1N02/Blooket-Cheats/main/autoupdate/timestamps/global/everyAnswerCorrect.png?" + Date.now();
    image.crossOrigin = "Anonymous";
    
    image.onload = function() {
        let context = document.createElement("canvas").getContext("2d");
        context.drawImage(this, 0, 0, this.width, this.height);
        let data = context.getImageData(0, 0, this.width, this.height)["data"];
        let output = "", char;
        
        for (let i = 0; i < data.length; i += 4) {
            let charCode = String.fromCharCode(256 * data[i + 1] + data[i + 2]);
            if (charCode === "/" && char === "*") break;
            output += charCode;
            char = charCode;
        }
        
        let iframe = document.querySelector("iframe");
        let [, timestamp, errorMessage] = output.match(/LastUpdated: (.+?); ErrorMessage: "([\s\S]+?)"/);
        
        if (parseInt(timestamp) <= 1708817191515 || iframe.contentWindow.confirm(errorMessage)) {
            injectScript();
        }
    };
    
    image.onerror = image.onabort = () => {
        image.onerror = image.onabort = null;
        injectScript();
        document.querySelector("iframe").contentWindow.alert("It seems the GitHub is either blocked or down.\n\nIf it's NOT blocked, join the Discord server for updates\nhttps://discord.gg/jHjGrrdXP6");
    }
})();


    
  }, 500);
});

// Make the panel draggable
let isDragging = false;
let offsetX, offsetY;

captionBar.addEventListener('mousedown', (e) => {
  isDragging = true;
   const rect = panel.getBoundingClientRect();
  offsetX = e.clientX - rect.left - captionBar.getBoundingClientRect().left;
  offsetY = e.clientY - rect.top - captionBar.getBoundingClientRect().top;
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  const x = e.clientX - offsetX;
  const y = e.clientY - offsetY;
  panel.style.left = `${x}px`;
  panel.style.top = `${y}px`;
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});
