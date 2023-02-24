/**
 * Add Konami code handler to your project. 
 * @see https://en.wikipedia.org/wiki/Konami_Code
 * @param func
 */
export function useKonami(func: ()=> void){
  if(typeof document !== "undefined"){
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiCodePosition = 0;
    console.log(konamiCodePosition === konamiCode.length);
    document.addEventListener('keydown', function(e) {
      const key = e.key;
      if (key === konamiCode[konamiCodePosition]) {
        konamiCodePosition++;
        console.log(key)
        if (konamiCodePosition === konamiCode.length) {
          // KONAMIコマンドが検出されたときの処理
          func();
          konamiCodePosition = 0;
        }
      } else {
        konamiCodePosition = 0;
      }
  });
  }
}