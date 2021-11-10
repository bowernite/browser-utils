const log = (...args) => {
  console.log(...args);
};
location.href = `javascript:window.test=${log}`;
