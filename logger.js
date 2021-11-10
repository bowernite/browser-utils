/** NOTE: Because of the way the functions we're injecting get flattened into one line, we can't use `//` inline comments (it'll just comment out the rest of the function). So for now, without investigating this, just use `/*` comments, where we can explicitly end them, instead */

function log(...args) {
  const label = args[1];
  let content = args[0];
  const emojiStyles =
    "background: papayawhip; border-radius:200%; font-size: 3rem; padding: .5rem";
  const styles =
    "background:#444; color:#bada55; border-radius:2px; font-size: .875rem; padding: .25rem";
  const emoji = randomEmoji();
  if (typeof content === "object") {
    if (label) {
      console.log(`%c${emoji}%c ${label}:`, emojiStyles, styles, content);
      console.log(
        `%c${emoji}%c ${label}:\n\n${JSON.stringify(content, null, 2)}`,
        emojiStyles,
        styles
      );
    } else {
      console.log(`%c${emoji}%c`, emojiStyles, styles, content);
    }
  } else {
    if (label) {
      console.log(`%c${emoji}%c ${label}: ${content}`, emojiStyles, styles);
    } else {
      console.log(`%c${emoji}%c ${content}`, emojiStyles, styles);
    }
  }

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
