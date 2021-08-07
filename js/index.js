const ulElement = document.getElementsByTagName("ul")[0];
const buttonElement = document.getElementById("addBtn");

const initialList = api.slice(0, 6);

const createLiElements = (item) => {
  const liElement = document.createElement("li");
  const imageElement = document.createElement("img");
  const profileInfoElement = document.createElement("div");
  const otherInfoElement = document.createElement("div");
  const nameElement = document.createElement("span");
  const lastNameElement = document.createElement("span");
  const emailElement = document.createElement("span");
  const genderElement = document.createElement("span");

  imageElement.classList.add("avatar");
  profileInfoElement.classList.add("profileInfo");
  otherInfoElement.classList.add("otherInfo");
  nameElement.classList.add("name");
  lastNameElement.classList.add("lastName");
  emailElement.classList.add("email");
  genderElement.classList.add("gender");

  liElement.appendChild(imageElement);
  liElement.appendChild(profileInfoElement);
  liElement.appendChild(otherInfoElement);

  profileInfoElement.appendChild(nameElement);
  profileInfoElement.appendChild(lastNameElement);
  otherInfoElement.appendChild(emailElement);
  otherInfoElement.appendChild(genderElement);

  imageElement.src = item.avatar;
  imageElement.alt = `${item.first_name} ${item.last_name}`;
  nameElement.innerHTML = item.first_name;
  lastNameElement.innerHTML = item.last_name;
  emailElement.innerHTML = item.email;
  genderElement.innerHTML = item.gender;

  ulElement.appendChild(liElement);
};

initialList.forEach((item) => {
  createLiElements(item);
});

let initialIndex = 6;

const onClickButton = () => {
  const proxIndex = initialIndex + 6;

  const slicedList = api.slice(initialIndex, proxIndex);

  slicedList.forEach((item) => {
    createLiElements(item);
  });

  if (proxIndex >= api.length) {
    buttonElement.disabled = true;
    return;
  }

  initialIndex = proxIndex;
};
