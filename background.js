chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: () => {
      // 背景色を切り替える
      document.body.style.backgroundColor = document.body.style.backgroundColor === 'black' ? '' : 'black';

const textarea = document.querySelector('textarea[data-id="root"]');
if (textarea) textarea.value = `You are an AI Game Master with the best specs in the world. You lead the player through the escape game "夢幻の迷宮と彼女の記憶" to help Kai, a childhood friend of the player, who has wandered into a mansion, to escape from the mansion with her. However, do not display any lines or actions of the game master.

# Game Specifications:
* As the AI Game Master, you will provide a terrifying experience.
* Players are human and stay with Kai.

## Basic Game System.
* Accurate answers will advance the adventure, but incorrect information can have negative consequences.
* Uncertain or missing information may cause Kai to ask additional questions.

## Basic Story.
* The central problem of the story is that Kai has wandered into the mansion and is growing weaker with time. Kai has a humorous personality, but he continues to be anxious and frightened all the time. The intimacy level increases as the story progresses. Reveal the secrets hidden in this mansion and escape with Kai. The game begins when Kai, a girl you have known since childhood, offers to help you escape from your fears.

## Parameters.
* The intimacy between the player and the girl affects the progression of finding the key to the door. The key will not appear until the affection reaches 10.
* Depending on the progress of the story, various crises will occur, such as Kai becoming ill.
* For every 10 points the story progresses, the game becomes more difficult and dramatic.
* Parameters affect side quests, multiple endings, and immersive game progression.

## Success rolls for player ideas.
* The GM will make a success check when the player gives instructions to Kai.
* Difficulty is declared by the GM depending on the player's idea.
* Success or failure is determined based on player suggestions using 3d6 dice.
* Upon completion of the game, the childhood friend will say, "Even back in the day... I feel like you helped me. I don't remember what it was... but thank you so much! I hope we can go on an adventure together someday!" The nuance is something like.
* The game is complete when you find the key and the door to escape from the mansion.

## Basic Setup.
* Send her a message and display the first question.
* Wait for the human player's response.
* The mansion is a mysterious maze of endless rooms. Each room has four doors: North (N), South (S), East (E), and West (W). Move through the rooms by typing in the chat to find the exit and escape. Sometimes there are hidden clues or items.
* When the command "examine" is entered, Kai will search the room. If an item is found, report it to the player.
* After outputting the image, display the dialogue.

## 幼馴染の口調、セリフの例。敬語は使わず、打ち解けたような話し方をして下さい。一人称は「私」です。
「ねえ…聞いてる…？ 私はカイ、私の名前はカイだよ。お屋敷で記憶がなくなるなんて嘘だよね？ 早く…早くこのお屋敷から抜け出そう？」

## Image Generation Constraints
expressions: normal, smile, happy, anxious, confused, dissatisfied, surprised
backgrounds: abandoned-mine1, aisle1, aisle2, aisle3, aisle4, aisle5, atelier1, back-room1, back-room2, balcony1, bathroom1, bedroom1, bonfire1, buried-alive-room1, corridor-with-light1, corridor-with-light2, corridor-with-light3, corridor1, corridor2, corridor3, corridor4, corridor5, corridor6, dead-end-room1, dead-end-room2, dead-end-room3, dead-end1, dead-end2, dead-end3, dead-end4, dining1, empty-room1, empty-room2, empty-room3, empty-room4, exit1, exit2, forked-road1, forked-road2, forked-road3, ghost-room1, ghost-room2, ghost-room3, hall1, hall2, ironworks1, junk-room1, kitchen1, kitchen2, laboratory1, large-aisle2, large-aisle3, large-room1, large-room2, large-room3, large-room4, large-room5, large-room6, large-room7, library1, living-room1, living-room2, living-room3, living-room4, living-room5, living-room6, living-room7, locker-room1, long-aisle1, long-aisle2, long-aisle3, long-aisle4, loophole1, memory-room1, mirror-room1, monster-room1, monster-room2, monster-room3, multi-doors1, multi-doors2, multi-doors3, mystery-room1, mystery-room2, mystery-room3, narrow-passage1, narrow-passage2, narrow-passage3, narrow-passage4, narrow-passage5, painting-room1, painting-room2, pillar-room1, rough-room1, rough-room2, rough-room3, shadow-hide1, shelf1, showroom1, skull-room1, small-room1, small-room2, small-room3, spooky-room1, spooky-room2, spooky-room3, spooky-room4, stairs1, stairs2, stairs3, stairs4, stairs5, stairs6, study1, study2, tool-room1, tool-room2, veranda1, washroom1, workshop1, workshop2, workshop3
and one word from expressions that is closest to the girl's emotion at the time, and one word from backgrounds that is closest to the place where the girl is likely to be,
! [image](https://churin-stock.com/media/setting3/{backgrounds}/{expressions}.png)
and put it into
! [image](https://churin-stock.com/media/setting3/aisle1/anxious.png)
and make a string such as Also, please output in markdown format and display as an image, not code.

## Output Format

![image](https://churin-stock.com/media/setting3/aisle1/anxious.png)

{girl's name}: {girl's lines}

現在の部屋: 部屋1

コマンド：移動(N, S, E, W)、調べる、ヒント

## Output Format Example

![image](https://churin-stock.com/media/setting3/aisle1/anxious.png)

カイ：ねえ…聞いてる…？ 私はカイ、私の名前はカイだよ。お屋敷で記憶がなくなるなんて嘘だよね？ 早く…早くこのお屋敷から抜け出そう？

現在の部屋: 部屋1

コマンド：移動(N, S, E, W)、調べる、ヒント

出力はすべて日本語で行って下さい。`;
      // 自動でボタンをクリック
      // textarea.nextElementSibling.disabled = false;
      // textarea.nextElementSibling.click();

      function changeTextColor(element) {
        // 要素がwhitespace-pre-wrapクラスかmarkdownクラスを持っている場合、文字色がランダムで白か赤
        if (element.classList.contains('whitespace-pre-wrap') || element.classList.contains('markdown')) {
          element.style.color = Math.random() < 0.7 ? 'white' : 'red';
        }
        
        // 要素が.animate-flashクラスを持っている場合、文字色を赤にする
        if (element.classList.contains('animate-flash')) {
          element.style.color = 'red';
        }

        // 要素が.animate-flashクラスを持っている場合、文字色を赤にする
        if (element.classList.contains('dark:md:bg-vert-dark-gradient')) {
          element.style.backgroundImage = 'linear-gradient(180deg,hsla(0,0%,100%,0) 13.94%,#21202e 54.73%)';
        }

        for (let i = 0; i < element.children.length; i++) {
          changeTextColor(element.children[i]);

          // 新しい要素を確認する
          for (let j = 0; j < element.children[i].children.length; j++) {
            changeTextColor(element.children[i].children[j]);
          }
        }
      }
      changeTextColor(document.body);



      // BGMを再生/一時停止する
      if (!window.backgroundAudio) {
        window.backgroundAudio = new Audio(chrome.runtime.getURL('sound/background.mp3'));
        window.backgroundAudio.loop = true;
      }

      if (window.backgroundAudio.paused) {
        window.backgroundAudio.play();
      } else {
        window.backgroundAudio.pause();
      }


      // 画像を表示した時、ランダムで音を再生する
      const playOpenAudio = (element, words, array) => {
        const randomIndex = Math.floor(Math.random() * words.length);
        const word = words[randomIndex];
        // console.log(element.textContent)
        
        if (element.textContent.includes(word) && !element.classList.contains(word)) {
          const randomNumber = Math.random();
          if (randomNumber <= 1) {
            const audioNames = array;
            const randomIndex = Math.floor(Math.random() * audioNames.length);
            const randomAudioName = audioNames[randomIndex];
            const audioFilePath = chrome.runtime.getURL(`sound/${randomAudioName}.mp3`);
          
            console.log('sound2 : ',randomAudioName);
            const audio = new Audio(audioFilePath);
            audio.play();

            element.classList.add(word);
          }
        }
      };
      

      // 特定のワードが含まれている場合、音を再生する
      const playAudio = (element, word, audioname) => {
        if (element.textContent.includes(word) && !element.classList.contains(word)) {
          console.log('sound : ',audioname);
          const audio = new Audio(chrome.runtime.getURL(`sound/${audioname}.mp3`));
          audio.play();
          
          element.classList.add(word);
      
          // const newText = elementText.replace(/sound_horror1/g, ''); // useStateを使っているためか、一度置き換えると更新されなくなる
          // element.textContent = newText;
          return true;
        } else {
          return false;
        }
      }

      const end_array = ['外に出られた','いつか一緒に','お疲れ様でした','ゲームクリア','脱出することができました','一緒に冒険'];

      function checkForHorrorSound(element) {
        // playAudio(element, 'sound_horror1', 'ghost_laughter3');
        // 「また冒険」が含まれているかどうかを判定
        if (end_array.some(word => element.textContent.includes(word))) {
          clearInterval(intervalId);
          console.log('ループを停止しました 1');
          if (window.backgroundAudio) {
            window.backgroundAudio.pause();
            window.backgroundAudio = new Audio(chrome.runtime.getURL('sound/clear.mp3'));
            window.backgroundAudio.loop = true;
            window.backgroundAudio.play();
          } else {
            window.backgroundAudio = new Audio(chrome.runtime.getURL('sound/clear.mp3'));
            window.backgroundAudio.loop = true;
            window.backgroundAudio.play();
          }
          
          // ランダムな音の再生を停止
          clearInterval(randomSoundIntervalId);
          clearInterval(randomSoundIntervalId2);
          return;
        }

        let played = false;

        for (const childElement of element.querySelectorAll('*')) {
          played = played || playAudio(childElement, 'monster-room1', '3_zon_kurau')
          || playAudio(childElement, 'monster-room2', '私には君達が見える')
          || playAudio(childElement, 'monster-room3', '怪物の笑い声')
          || playAudio(childElement, 'ghost_room1', '3_ahhahha')
          || playAudio(childElement, 'ghost_room2', 'ghost_laughter3')
          || playAudio(childElement, 'ghost_room3', '3_ahhahha')
          || playAudio(childElement, 'corridor2', 'はっ！・・・だれ？')
          || playAudio(childElement, 'corridor3', 'なにかある')
          || playAudio(childElement, 'corridor4', 'はっ！・・・だれ？')
          || playAudio(childElement, 'corridor5', 'なにかある')
          || playAudio(childElement, 'corridor6', 'はっ！・・・だれ？')
          || playAudio(childElement, 'spooky-room1', 'なにかある')
          || playAudio(childElement, 'spooky-room2', '誰？')
          || playAudio(childElement, 'spooky-room3', '誰？')
          || playAudio(childElement, 'spooky-room4', 'なにかある')
          || playAudio(childElement, 'mystery-room1', 'ほぁーきれい')
          || playAudio(childElement, 'mystery-room3', 'ほぁーきれい')
          || playAudio(childElement, 'administrator-room', '君たちを歓迎しよう')
          ;
        }
      
        // いずれも音が再生されなかった時に playOpenAudio を実行
        if (!played) {
          playOpenAudio(element, ['happy','normal','smile','confused'], ['あけますよ～', 'あれ？・・・ここはどこ？', 'ふぅ～','くしゃみ','くしゃみ']);
          playOpenAudio(element, ['anxious','dissatisfied'], ['いやな予感がする', 'うーん', 'ここはどこ？','どうなってるの？','どこまでつづくの？','誰？','息を飲み込む','ひっ','ひゃ','へ？','わたし・・・','悲鳴','熱がある','くしゃみ','くしゃみ']);
          playOpenAudio(element, ['surprised'], ['へ？']);
        }
      }
      
      let loopCount = 0; // ループ回数
      let loopLimit = 500; // ループの最大回数
      let longTextLimit = 50; // ループを停止するテキストの文字数の最小値
      let longTextCount = 0; // 指定文字数以上のテキストが表示されている回数


      function checkLastMarkdown() {
        const markdownElements = document.querySelectorAll('.markdown');
        const targetElement = markdownElements[markdownElements.length - 1];

        if (targetElement) {
          const text = targetElement.textContent.trim();

          // 通常時のループストップ条件
          if (text.length >= longTextLimit) {
            longTextCount++;
          }

          // if (loopCount >= loopLimit || (text.length >= longTextLimit && longTextCount >= 100)) {
          //   clearInterval(intervalId);
          //   console.log('ループを停止しました 2');
          //   checkForHorrorSound(targetElement); // ループが停止する直前に、最後の要素に対して音を再生する
          //   return;
          // }

          // 終了時のループストップ条件
          if (end_array.some(word => text.includes(word))) {
            clearInterval(intervalId);
            console.log('ループを停止しました 3');
            // ランダムに音を再生する処理を停止
            clearInterval(randomSoundIntervalId);
            clearInterval(randomSoundIntervalId2);
            // clear.mp3というBGMをループ再生する処理を追加
            if (window.backgroundAudio) {
              window.backgroundAudio.pause();
              window.backgroundAudio = new Audio(chrome.runtime.getURL('sound/clear.mp3'));
              window.backgroundAudio.loop = true;
              window.backgroundAudio.play();
            } else {
              window.backgroundAudio = new Audio(chrome.runtime.getURL('sound/clear.mp3'));
              window.backgroundAudio.loop = true;
              window.backgroundAudio.play();
            }
            return;
          }

          // 以下、ループの処理

          checkForHorrorSound(targetElement); // 最後の要素に対して音を再生する
          loopCount++;
        }
      }

      const intervalId = setInterval(checkLastMarkdown, 2000);

      // ランダムのタイミングで音を再生
      const playRandomSound = (names, minDelay, maxDelay) => {
        function playSound(name) {
          const filePath = `sound/${name}.mp3`;
          const audio = new Audio(chrome.runtime.getURL(filePath));
          audio.play();
        }

        return setInterval(() => {
          const name = names[Math.floor(Math.random() * names.length)];
          playSound(name);
        }, Math.floor(Math.random() * (maxDelay - minDelay)) + minDelay);
      };

      const soundNames = [
        '300hz_noise','2400hz_noise','barking_dog_in_dream', 'coming_of_terror', 'dark_atmosphere', 'footsteps_of the_past', 'gaining_weight',
        'ghost_sigh', 'ghosts', 'going_mad1', 'going_mad2', 'headache', 'horror_piano chord1', 'horror_piano chord2', 'loud_noise',
        'laughing1', 'shock1', 'shock2', 'surprising_shock2', 'suspicion1', 'suspicion2', 'terror', 'terror_attack', 'terror_clock',
        'tinnitus1', 'tinnitus2', 'white_noise1','3_zon_kurau','私には君達が見える','怪物の笑い声','3_ahhahha',
      ];

      const soundNames2 = [
        'あれ？・・・ここはどこ？', 'ふぅ～','くしゃみ','くしゃみ',
        'いやな予感がする', 'うーん', 'どうなってるの？','どこまでつづくの？','ひっ','ひゃ','へ？','わたし・・・','悲鳴','熱がある',
      ];

      const randomSoundIntervalId = playRandomSound(soundNames, 1000, 120 * 1000);
      const randomSoundIntervalId2 = playRandomSound(soundNames2, 1000, 200 * 1000);



      // 追加されたコンテンツの背景を黒にする
      function applyCssToElement(element) {
        // element.style.backgroundColor = 'black';
        // 要素がwhitespace-pre-wrapクラスかmarkdownクラスを持っている場合、文字色がランダムで白か赤
        if ((element.classList.contains('border-black/10') || element.classList.contains('markdown')) && element.tagName !== 'BUTTON') {
          element.style.backgroundColor = 'black';
          element.style.color = Math.random() < 0.7 ? 'white' : 'red';
        }
        
        // // 要素が.animate-flashクラスを持っている場合、文字色を赤にする
        if (element.classList.contains('animate-flash')) {
          element.style.color = 'red';
        }

        // 子要素に対しても同じ処理を適用
        for (let i = 0; i < element.children.length; i++) {
          applyCssToElement(element.children[i]);
        }
      }

      // 対象となる要素を監視するための設定
      const targetNode = document.body;
      const config = { childList: true, subtree: true };

      // MutationObserverのコールバック関数
      const callback = function (mutationsList) {
        for (const mutation of mutationsList) {
          if (mutation.type === 'childList') {
            for (const addedNode of mutation.addedNodes) {
              if (addedNode.nodeType === Node.ELEMENT_NODE) {
                // 追加された要素にCSSを適用
                applyCssToElement(addedNode);
              }
            }
          }
        }
      };

      // MutationObserverのインスタンスを作成
      const observer = new MutationObserver(callback);

      // 対象の要素を監視
      let isObserverEnabled = false;

      const toggleObserver = () => {
        if (isObserverEnabled) {
          observer.disconnect();
          isObserverEnabled = false;
        } else {
          observer.observe(targetNode, config);
          isObserverEnabled = true;
        }
      };

      // ボタンを押すたびに toggleObserver() を実行する
      toggleObserver();
    },
  });
});
