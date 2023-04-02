// // 追加されたコンテンツの背景を黒にする
// function applyCssToElement(element) {
//   // element.style.backgroundColor = 'black';
//   // 要素がwhitespace-pre-wrapクラスかmarkdownクラスを持っている場合、文字色がランダムで白か赤
//   if ((element.classList.contains('border-black/10') || element.classList.contains('markdown')) && element.tagName !== 'BUTTON') {
//     element.style.backgroundColor = 'black';
//     element.style.color = Math.random() < 0.9 ? 'white' : 'red';
//   }
  
//   // // 要素が.animate-flashクラスを持っている場合、文字色を赤にする
//   if (element.classList.contains('animate-flash')) {
//     element.style.color = 'red';
//   }

//   // 子要素に対しても同じ処理を適用
//   for (let i = 0; i < element.children.length; i++) {
//     applyCssToElement(element.children[i]);
//   }
// }

// // 対象となる要素を監視するための設定
// const targetNode = document.body;
// const config = { childList: true, subtree: true };

// // MutationObserverのコールバック関数
// const callback = function (mutationsList) {
//   for (const mutation of mutationsList) {
//     if (mutation.type === 'childList') {
//       for (const addedNode of mutation.addedNodes) {
//         if (addedNode.nodeType === Node.ELEMENT_NODE) {
//           // 追加された要素にCSSを適用
//           applyCssToElement(addedNode);
//         }
//       }
//     }
//   }
// };

// // MutationObserverのインスタンスを作成
// const observer = new MutationObserver(callback);

// // 対象の要素を監視
// observer.observe(targetNode, config);


// function checkForHorrorSound(element) {
//   const elementText = element.textContent;
//   console.log(elementText);

//   if (elementText.includes('sound_horror1') && !element.classList.contains('horror-sound1')) {
//     console.log(1);
//     const audio = new Audio(chrome.runtime.getURL('sound/300hz_noise.mp3'));
//     audio.play();
    
//     element.classList.add('horror-sound1');

//     // const newText = elementText.replace(/sound_horror1/g, ''); // useStateを使っているためか、一度置き換えると更新されなくなる
//     // element.textContent = newText;
//     return;
//   }

//   // 子要素をチェック
//   for (const childElement of element.querySelectorAll('*')) {
//     if (childElement.textContent.includes('sound_horror1')) {
//       console.log(2);
//       chrome.runtime.sendMessage({ command: 'playHorrorSound' });
//       break;
//     }
//   }
// }

// function checkLastMarkdown() {
//   const markdownElements = document.querySelectorAll('.markdown');
//   const targetElement = markdownElements[markdownElements.length - 1];
//   console.log(6, targetElement);

//   if (targetElement) {
//     checkForHorrorSound(targetElement);
//   }
// }

// // chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
// //   console.log('sound!');
// //   if (message.command === 'playHorrorSound') {
// //     const audio = new Audio(chrome.runtime.getURL('sound/300hz_noise.mp3'));
// //     audio.play();
// //   }
// // });

// // 1秒おきに最後の .markdown 要素をチェック
// setInterval(checkLastMarkdown, 1000);

