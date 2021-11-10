/** NOTE: Because of the way the functions we're injecting get flattened into one line, we can't use `//` inline comments (it'll just comment out the rest of the function). So for now, without investigating this, just use `/*` comments, where we can explicitly end them, instead */

function log(...args) {
  console.log(randomEmoji(), ...args);

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
location.href = `javascript:window.test=${log}`;
