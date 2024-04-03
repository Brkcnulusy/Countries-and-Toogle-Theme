import { get } from "./request.js";
import {
  _addClass,
  _removeClass,
  _renderCountries,
  _renderDetailPage,
  _renderNameCountry,
  _renderRegionCountries,} from "./ui.js";

const countriesAndToggleTheme = (function () {
  // Variables
  const BASE_URL = "https://restcountries.com/v3.1/all";
  const countries = document.querySelector(".js-countries");
  const formSelect = document.querySelector(".js-form-select");
  const toggleThemeButton = document.querySelector(".js-toggle-theme");
  const searchInput = document.querySelector(".js-search-input");
  const homePage = document.querySelector(".js-home-page");
  const detailPage = document.querySelector(".js-detail-page");
  const previousButton = document.querySelector(".js-previous");
  const detailList = document.querySelector('.js-detail-list');
  let countriesData;
  // Event Listeners

  const _eventListeners = function () {
    formSelect.addEventListener("change", _filterCountries);
    toggleThemeButton.addEventListener("click", _changeTheme);
    searchInput.addEventListener("input", _handleChange);
    document.addEventListener("click", function (e) {
      const target = e.target;
      _openDetailPage(target);
    });
    previousButton.addEventListener("click", _goBackToPage);
  };

  // FunC

  const _goBackToPage = function () {
    _addClass(homePage);
    _removeClass(detailPage);
  };

  const _openDetailPage = function (target) {
    if (target.closest(".js-country")) {
      _addClass(detailPage);
      _removeClass(homePage);
      const extising = target.closest('.js-country').lastElementChild.firstElementChild.textContent.trim().toLowerCase();
      _getNameCountry(extising);
    }
  };

  const _handleChange = function () {
    const inputValue = searchInput.value.toLowerCase();
    const newData = countriesData.filter((data) =>
      data.name.common.toLowerCase().includes(inputValue)
    );
    _renderNameCountry(countries, newData);
  };

  const _changeTheme = function () {
    const html = document.querySelector("html");
    const currentTheme = html.getAttribute("data-theme");

    // Temayı değiştirme
    if (currentTheme === "light") {
      html.setAttribute("data-theme", "dark");
    } else {
      html.setAttribute("data-theme", "light");
    }
  };

  const _filterCountries = function () {
    const region = formSelect.value;
    if (region == 0) {
      _getCountries();
    } else {
      _getRegionCountries(region);
    }
  };

  const _getNameCountry = function (name) {
    const URL = `https://restcountries.com/v3.1/name/${name}`;
    get(URL).then((datas) => {
      datas.forEach(element => {
        console.log(element);
      });
      _renderDetailPage(detailList, datas);
    });
  }

  const _getRegionCountries = function (region) {
    const URL = `https://restcountries.com/v3.1/region/${region}`;
    get(URL).then((datas) => {
      _renderRegionCountries(countries, datas);
    });
  };

  const _getCountries = function () {
    get(BASE_URL).then((datas) => {
      const data = datas.slice(0, 40);
      console.log(data);
      _renderCountries(countries, data);
      countriesData = datas;
    });
  };

  return {
    init: function () {
      _getCountries();
      _eventListeners();
    },
  };
})();

document.addEventListener("DOMContentLoaded", function () {
  countriesAndToggleTheme.init();
});
