const log = (...args) => {
  console.log(randomEmoji(), ...args);
  
  function randomEmoji() {
    return "🧙🏼‍♂️"   
  }
};
location.href = `javascript:window.test=${log}`;
