const form = document.querySelector("form");
const usernameInput = document.querySelector("#username");
const profilePic = document.querySelector("#profilePicture img");
const profileName = document.querySelector("#profileName");
const profileFollowers = document.querySelector("#followers");
const profileFollowing = document.querySelector("#following");
const profileRepos = document.querySelector("#repos");
const profileURL = document.querySelector("#url a");

// Defining fetching functions
function getProfilePicture(usernameInput) {
  fetch(`https://api.github.com/users/${usernameInput.value}`)
    .then((rawResult) => {
      return rawResult.json(); //
    })
    .then((result) => {
      profilePic.src = result.avatar_url;
    });
}

function getUserProfileName(usernameInput) {
  fetch(`https://api.github.com/users/${usernameInput.value}`)
    .then((rawResult) => {
      return rawResult.json();
    })
    .then((result) => {
      profileName.innerHTML = result.name;
    });
}

function getUserFollowers(usernameInput) {
  fetch(`https://api.github.com/users/${usernameInput.value}`)
    .then((rawResult) => {
      return rawResult.json();
    })
    .then((result) => {
      profileFollowers.innerHTML = "Followers: " + result.followers;
    });
}

function getFollowingsOfUser(usernameInput) {
  fetch(`https://api.github.com/users/${usernameInput.value}`)
    .then((rawResult) => {
      return rawResult.json();
    })
    .then((result) => {
      profileFollowing.innerHTML = "Following: " + result.following;
    });
}

function getProfileURL(usernameInput) {
  fetch(`https://api.github.com/users/${usernameInput.value}`)
    .then((rawResult) => {
      return rawResult.json();
    })
    .then((result) => {
      profileURL.setAttribute("href", result.html_url); //updates the inner href link
      profileURL.innerHTML = result.html_url;
    });
}

function getPublicRepos(usernameInput) {
  fetch(`https://api.github.com/users/${usernameInput.value}`)
    .then((rawResults) => rawResults.json())
    .then((result) => profileRepos.innerHTML = "Repos: " + result.public_repos);
}

// It's best practice to listen for the 'submit' event on the form itself.
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (usernameInput.value.trim() === "") {
    alert("Username is required. Form not submitted.");
  } else {
    console.log(`Form is valid. Username: ${usernameInput.value}`);
    getProfilePicture(usernameInput);
    getProfileURL(usernameInput);
    getUserProfileName(usernameInput);
    getUserFollowers(usernameInput);
    getFollowingsOfUser(usernameInput);
    getPublicRepos(usernameInput);
  }
});
