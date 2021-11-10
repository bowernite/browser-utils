const log = (...args) => {
  const randomEmoji = () => "🧙🏼‍♂️";
  console.log(randomEmoji(), ...args);
};
location.href = `javascript:window.test=${log}`;
