(function() {
  let seasonWinter = document.querySelector('.js-season-type-winter');
  let seasonSpikes = document.querySelector('.js-season-type-spikes');
  if (seasonWinter && seasonSpikes) {
    let seasonSpikesInput = seasonSpikes.querySelector('input');

    seasonSpikes.hidden = true;
    seasonWinter.addEventListener('change', () => {
      seasonSpikes.toggleAttribute('hidden');
      if (seasonSpikes.hidden === true) {
        seasonSpikesInput.checked = false;
      }
    });
  }
})();
