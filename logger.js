/** NOTE: Because of the way the functions we're injecting get flattened into one line, we can't use `//` inline comments (it'll just comment out the rest of the function). So for now, without investigating this, just use `/*` comments, where we can explicitly end them, instead */

function log(...args) {
  const label = args[1];
  let content = args[0];
  let finalArgs;
  console.info(typeof content, `typeof content`);
  const styles = "background:#444; color:#bada55; border-radius:2px";
  if (typeof content === "object") {
    if (label) {
      finalArgs = [`%c${randomEmoji()} ${label}:`, styles, content];
    } else {
      finalArgs = [`%c${randomEmoji()}`, styles, content];
    }
  } else {
    if (label) {
      finalArgs = [`%c${randomEmoji()} ${label}: ${content}`, styles];
    } else {
      finalArgs = [`%c${randomEmoji()} ${content}`, styles];
    }
  }
  console.log(...finalArgs);

  /**
   * Potential sources:
   * - https://github.com/alexfrankcodes/random-emoji/blob/master/src/emojis.json
   * - https://gist.github.com/ikr7/c72843556ef3a12014c3
   * - https://github.com/kentcdodds/dotfiles/blob/3be88d5145a489ca7d39e6974f3a778a3efbdd06/.zshrc
   *
   * Currently using the kentcdodds list. Could expand it to reduce chances of collisions if/when that issue arises
   */
  function randomEmoji() {
    /* prettier-ignore */
    const emojis = [
      "😅", "👽", "🔥", "🚀", "👻", "⛄", "👾", "🍔", "😄", "🍰", "🐑", "😎", "🏎", "🤖", "😇", "😼", "💪", "🦄", "🥓", "🌮", "🎉", "💯", "⚛", "🐠", "🐳", "🐿", "🥳", "🤩", "🤯", "🤠", "👨🏼‍💻", "🦸🏼‍♂️", "‍🧝", "🧞", "🧙", "👨🏼‍🚀", "👨🏼‍🔬", "🕺", "🦁", "🐶", "🐵", "🐻", "🦊", "🐙", "🦎", "🦖", "🦕", "🦍", "🦈", "🐊", "🦂", "🐍", "🐢", "🐘", "🐉", "🦚", "✨", "☄", "⚡", "💥", "💫", "🧬", "🔮", "⚗", "🎊", "🔭", "⚪", "🔱"
    ];
    return emojis[Math.floor(Math.random() * emojis.length)];
  }
}
console.log(log);
// TODO: Find a really easy, concise way to call this/these. Maybe some obscure 2 or 3 letter `window` method
location.href = `javascript:window.log=${log}`;
