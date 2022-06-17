pageLoading();

function pageLoading() {
  const cookies = document.cookie.split(";");
  let twitterId = cookies.find((cookie) => cookie.includes("twitterId"));
  if (twitterId) {
    document.getElementById("btn-twitter").style.display = "none";
    getTwitterFriends(); // display
  } else {
    document.getElementById("btn-twitter").style.display = "block";
  }

  // fac request la getfriends din app 
  fetch("/getFriends", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((user) => {
      let length = user.length;
      for (let i = 0; i < length; i++) {
        createFriendContrainer(i, user);
      }
    });
  // fac request get twitter friends
}

function createFriendContrainer(i, user) {
  let newDiv = document.createElement("div");
  newDiv.id = "friend-" + i;
  newDiv.className = "friend-container";

  let divUserDetails = document.createElement("div");

  let userImg = document.createElement("img");
  userImg.alt = "avatar";
  userImg.className = "avatar";
  //if(user.photo==null)
  userImg.src =
    "https://tleliteracy.com/wp-content/uploads/2017/02/default-avatar.png";
  divUserDetails.appendChild(userImg);

  let userName = document.createElement("h4");
  let newContent = document.createTextNode(
    user[i].firstName + " " + user[i].lastName
  );
  userName.appendChild(newContent);
  divUserDetails.appendChild(userName);

  //butoane
  let buttons = document.createElement("div");
  buttons.className = "friend-buttons";
  let buttonDelete = document.createElement("button");
  buttonDelete.className = "btn-danger btn";
  newContent = document.createTextNode("Delete");
  buttonDelete.appendChild(newContent);
  buttons.appendChild(buttonDelete);

  let button = document.createElement("button");
  button.className = "btn-primary btn";
  newContent = document.createTextNode("See options...");
  button.appendChild(newContent);
  buttons.appendChild(button);

  newDiv.appendChild(divUserDetails);
  newDiv.appendChild(buttons);

  document.getElementById("friends-container").appendChild(newDiv);
}

function loginTwitter() {
    window.location.href = "/login/twitter";
}

async function getTwitterFriends(){
  await fetch("/friendsTwitter", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then((response) => {
    return response.json();
  })
  .then((friends) => {
    console.log(friends)
    // let length = friends.length;
    // for (let i = 0; i < length; i++) {
    //   displayUserCard(i, user);
    // }
  });
}

function displayUserCard(){

}