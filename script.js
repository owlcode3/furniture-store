//let brandSection = document.querySelectorAll('*[class*="section"]');
let brandSection = document.querySelectorAll('main > section:not(:first-child)');
console.log(brandSection);


function obsCallback(entries, observer) {
  let [entry] = entries;
  if (entry.isIntersecting === false) return;
  console.log(entry.target);
  entry.target.classList.add('display');
  entry.target.style.opacity = '1';
  observer.unobserve(entry.target)
  console.log(entry);
}

const options = {
  root: null,
  threshold: 0.1,

}
let observer = new IntersectionObserver(obsCallback, options);

brandSection.forEach(bs => {
  observer.observe(bs);
  bs.style.opacity = '0';
});


