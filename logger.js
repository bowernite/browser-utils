/**
 * @file - Adds a logger utility to the document
 */

/** NOTE: Because of the way the functions we're injecting get flattened into one line, we can't use `//` inline comments (it'll just comment out the rest of the function). So for now, without investigating this, just use `/*` comments, where we can explicitly end them, instead */

function log(...args) {
  const label = args[1] ? ` ${args[1]}: ` : "";
  let content = args[0];
  const emojiStyles =
    "background: papayawhip; border-radius:1rem; font-size: 2rem; padding: .5rem; margin-right: .5rem;";
  const textStyles =
    "background:#444; color:#bada55; border-radius:2px; font-size: .75rem; padding: .25rem";
  const emoji = randomEmoji();
  if (typeof content === "object") {
    console.info(`%c${emoji}%c${label}`, emojiStyles, textStyles, content);
    /* console.info(
      `%c${emoji}%c ${label}:\n\n${JSON.stringify(content, null, 2)}`,
      emojiStyles,
      textStyles
    ); */
  } else {
    console.info(`%c${emoji}%c${label} ${content}`, emojiStyles, textStyles);
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

// TODO: Find a really easy, concise way to call this/these. Maybe some obscure 2 or 3 letter `window` method
location.href = `javascript:console.dir=${log}`;
