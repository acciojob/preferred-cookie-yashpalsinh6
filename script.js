//your JS code here. If required.
document.querySelector('form').addEventListener('submit', function(event) {
  // Prevent the form from being submitted normally
  event.preventDefault();
let fontSize = document.querySelector('#fontsize').value;
let fontColor = document.querySelector('#fontcolor').value;

let expiryDate = new Date();
// Set the cookie to expire in 7 days
expiryDate.setDate(expiryDate.getDate() + 7);

document.cookie = `fontsize=${fontSize}; expires=${expiryDate.toUTCString()}; path=/`;
document.cookie = `fontcolor=${fontColor}; expires=${expiryDate.toUTCString()}; path=/`;
});


function getPreferencesFromCookies() {
  let preferences = {};

  // Split the document.cookie string into an array of "key=value" strings
  let cookieArray = document.cookie.split('; ');

  // Iterate over the array and add each key-value pair to the preferences object
  cookieArray.forEach(cookie => {
    let [key, value] = cookie.split('=');
    preferences[key] = value;
  });

  return preferences;
}

window.onload = function() {
  let preferences = getPreferencesFromCookies();

  if (preferences.fontsize) {
    document.documentElement.style.setProperty('--fontsize', `${preferences.fontsize}px`);
  }

  if (preferences.fontcolor) {
    document.documentElement.style.setProperty('--fontcolor', preferences.fontcolor);
  }
};
