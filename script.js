const loadPhones = async (searchText) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  const res = await fetch(url);
  const data = await res.json();
  displayPhones(data.data);
};
const displayPhones = (phones) => {
  const phonesContainer = document.getElementById("phones-container");
  phonesContainer.textContent = "";
  phones.forEach((phone) => {
    const phoneDiv = document.createElement("div");
    phoneDiv.innerHTML = `<div class="rounded shadow-lg shadow-gray-200 bg-[#e5e7eb] duration-300 hover:-translate-y-1">
        <a class="cursor-pointer">
          <div>
              <img src="${phone.image}" class="rounded-lg h-90 w-full object-cover" />
                 <div class="h-30 p-4">
                  <p class="text-lg mb-4 font-bold leading-relaxed text-black">
                      ${phone.phone_name}
                  </p>
                  <small class="leading-5 text-black">
                      Brand: ${phone.brand}
                  </small>
              </div>
          </div>
      </a>
  </div>`;
    phonesContainer.appendChild(phoneDiv);
  });
};

const processSearch = () => {
  const searchText = document.getElementById("search-field").value;
  loadPhones(searchText);
};
document.getElementById("btn-search").addEventListener("click", function () {
  processSearch();
});

document.getElementById("search-field").addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    processSearch(10);
  }
});

loadPhones("iphone");
