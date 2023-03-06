class EmojiComponent extends HTMLElement {
  constructor() {
    super();
    const name = this.getAttribute("name");
    const size = this.getAttribute("size") || 16;
    const emojis = {
      happy: "😊",
      sad: "🙁",
      crying: "😭"
    };
    const currentEmoji = emojis[name];
    this.innerHTML = /* html */`
        <div style="font-size: ${size}px">${currentEmoji}</div>
    `;
  }
}

customElements.define("emoji-component", EmojiComponent);
