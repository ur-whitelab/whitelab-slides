import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import Notes from 'reveal.js/plugin/notes/notes.esm.js';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight.esm.js';
import Math from 'reveal.js/plugin/math/math.esm.js';


let deck = new Reveal({
    plugins: [Markdown, Notes, RevealHighlight, Math],
    navigationMode: 'linear',
    center: false,
    history: true,
    progress: true

})
deck.initialize();


function footerHider(event) {

    var a = event.currentSlide.attributes.getNamedItem('hide-footer');

    if (a) {
        document.querySelector('.footer').style.visibility = 'hidden';
    } else {
        document.querySelector('.footer').style.visibility = 'visible';
    }
}


deck.addEventListener('slidechanged', footerHider);
