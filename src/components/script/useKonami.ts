export function useKonami(func: void | (()=>void)){
  if(typeof document !== "undefined"){
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiCodePosition = 0;
    document.addEventListener('keydown', function(e) {
      const key = e.key;
      if (key === konamiCode[konamiCodePosition]) {
        konamiCodePosition++;
        alert(key)

        if (konamiCodePosition === konamiCode.length) {
          // KONAMIコマンドが検出されたときの処理
          func;
          konamiCodePosition = 0;
        }
      } else {
        konamiCodePosition = 0;
      }
  });
  }
}