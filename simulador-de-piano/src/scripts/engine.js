const pianoKeys = document.querySelectorAll('.piano-keys .key');

const volumeSlider = document.querySelector('.volume-slider input');

const keysCheck = document.querySelector('.keys-check input');

let audio = new Audio('./src/tunes/src_tunes_a.wav');

const playTune = (key) => {
    audio.src = `./src/tunes/src_tunes_${key}.wav`;
    audio.play();

    const clicledKey = document.querySelector(`.key[data-key="${key}"]`);
    clicledKey.classList.add('active')
    setTimeout(() => {
        clicledKey.classList.remove('active');
    }, 150);
}

pianoKeys.forEach((key) => {
    console.log(key.dataset.key);
    key.addEventListener('click', () => playTune(key.dataset.key));
})

document.addEventListener("keydown", (event) => {
    playTune(event.key);
});

const handleVolume = (e) => {
    audio.volume = e.target.value / 100;
}

volumeSlider.addEventListener('input', handleVolume);

const showHideKeys = () => {
    pianoKeys.forEach((key) => {
        key.classList.toggle('hide');
    });
};

keysCheck.addEventListener('click', showHideKeys); 