module.exports = (params) => {
  const targetElements = document.querySelector('main').querySelectorAll('h1, h2, h3, h4, h5, h6');

  let count = 0

  targetElements.forEach(( el ) => {
    if (el.id) {
      const headerlink = document.createElement('a');
      // headerlink.setAttribute('class', 'dib link dim blue');
      headerlink.setAttribute('href', '#' + el.id);
      headerlink.setAttribute('title', `Link to "${ el.id }"`);

      const icon = document.createElement('i');
      icon.setAttribute('class', 'dib ml2 v-top f6 fas fa-hashtag');
      icon.setAttribute('aria-hidden', 'true');

      headerlink.append(icon);

      el.append(headerlink);
    }
    count++;
  });
  
  params.onComplete();

  // if(count === targetElements.length) {
    // if ( params.onComplete && typeof(onComplete) === "function" ) params.onComplete()
  // }

}

