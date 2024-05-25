module.exports = () => {
  const targetElements = document.querySelector("main").querySelectorAll('a');
  targetElements.forEach(( el ) => {
    const classAttr = el.getAttribute('class')

    let styles = [] 
    if ( classAttr ) {
      styles.concat(classAttr.split(" "))
    }
    styles = styles.concat([
      "dib", "link", "dim", "blue"
    ])
    styles = [ ... new Set(styles) ]
    el.setAttribute('class', styles.join(" "))
  });
}
