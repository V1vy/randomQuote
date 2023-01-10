<template>
  <div class="hello">
    <div class="wrapper">
      <header>Quote of the Day</header>
      <div class="content">
        <div class="quote-area">
          <i class="fa-solid fa-quote-left"></i>
          <p id="quote" class="quote">{{ contenido.content }}</p>
          <i class="fa-solid fa-quote-right"></i>
        </div>
        <div id="author" class="author">
          <span>__</span>
          <span id="name" class="name">{{ contenido.author }}</span>
        </div>
        <div class="buttons">
          <div class="features">
            <ul>
              <li id="sound" @click="soundQuote">
                <i class="fas fa-volume-up"></i>
              </li>
              <li id="copy" @click="copyQuote"><i class="fas fa-copy"></i></li>
              <li id="twitter" @click="twitterQuote">
                <i class="fab fa-twitter"></i>
              </li>
            </ul>
            <button id="button" @click="loadQuote">New Quote</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { randomQuote } from "@/service/quote.js";

export default {
  name: "randomQuote",
  data() {
    return {
      contenido: [],
      quoteText: "",
    };
  },
  created() {
    this.loadQuote();
  },
  methods: {
    loadQuote() {
      randomQuote().then((response) => {
        this.contenido = { content: response.content, author: response.author };
        // console.log(this.contenido);
        this.quoteText = this.contenido.content;
      });
    },
    copyQuote() {
      navigator.clipboard.writeText(this.quoteText);
    },
    twitterQuote() {
      const tweetURL = `https://twitter.com/intent/tweet?url=${this.quoteText}`;
      window.open(tweetURL, "_blank");
    },
    soundQuote() {
      const utterance = new SpeechSynthesisUtterance(
        'te quiero mucho Carlos'
      );
      speechSynthesis.speak(utterance);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
  width: 650px;
  background: #fff;
  border-radius: 15px;
  padding: 30px 30px 25px;
}

.wrapper header {
  font-size: 35px;
  font-weight: 600;
  text-align: center;
}

.wrapper .content {
  margin: 35px 0;
}

.content .quote-area {
  display: flex;
  justify-content: center;
}

.quote-area i {
  font-size: 15px;
}

.quote-area i:first-child {
  margin: 3px 10px 0 0;
}

.quote-area i:last-child {
  display: flex;
  align-items: flex-end;
  margin: 0 0 3px 10px;
}
.quote-area .quote {
  font-size: 22px;
  text-align: center;
  word-break: break-all;
}

.content .author {
  display: flex;
  margin: 20px;
  font-size: 18px;
  font-style: italic;
  justify-content: flex-end;
}

.author span:first-child {
  margin: -7px 5px 0 0;
  font-family: monospace;
}

.wrapper .buttons {
  border-top: 1px solid #ccc;
}

.buttons .features {
  display: flex;
  align-items: center;
  margin-top: 20px;
  justify-content: space-between;
}

.features ul {
  display: flex;
}

.features ul li {
  list-style: none;
  margin: 0 5px;
  height: 47px;
  width: 47px;
  display: flex;
  cursor: pointer;
  color: #9ea1d4;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid #9ea1d4;
  transition: all 0.3s ease;
}

.features ul li:hover {
  color: #fff;
  background-color: #9ea1d4;
}

.features button {
  border: 2px solid #9ea1d4;
  outline: none;
  color: #fff;
  cursor: pointer;
  font-size: 17px;
  padding: 13px 22px;
  border-radius: 30px;
  background: #9ea1d4;
  transition: all 0.3s ease;
}
.features button:hover {
  color: #9ea1d4;
  border: 2px solid #9ea1d4;
  background-color: #fff;
}
button.loading {
  opacity: 0.7;
  pointer-events: none;
}
</style>
