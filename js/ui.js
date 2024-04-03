export const _renderCountries = function (element, datas) {
  element.innerHTML = "";
  datas.forEach((data) => {
    element.innerHTML += `
            <div class="country js-country">
                <div class="country-flag">
                    <img src="${data.flags.svg}" alt="${data.flags.alt}">
                </div>
                <div class="country-description">
                    <div class="country-name">
                        <h3>${data.name.common}</h3>
                    </div>
                    <div class="country-info">
                        <div class="population">
                            <h4>Population:</h4>
                            <span>${data.population}</span>
                        </div>
                        <div class="region">
                            <h4>Region:</h4>
                            <span>${data.region}</span>
                        </div>
                        <div class="capital">
                            <h4>Capital:</h4>
                            <span>${data.capital}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
  });
};

export const _renderNameCountry = function (element, datas) {
  element.innerHTML = "";
  datas.forEach((data) => {
    element.innerHTML += `
            <div class="country js-country"">
                <div class="country-flag">
                    <img src="${data.flags.svg}" alt="${data.flags.alt}">
                </div>
                <div class="country-description">
                    <div class="country-name">
                        <h3>${data.name.common}</h3>
                    </div>
                    <div class="country-info">
                        <div class="population">
                            <h4>Population:</h4>
                            <span>${data.population}</span>
                        </div>
                        <div class="region">
                            <h4>Region:</h4>
                            <span>${data.region}</span>
                        </div>
                        <div class="capital">
                            <h4>Capital:</h4>
                            <span>${data.capital}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
  });
};
export const _renderRegionCountries = function (element, datas) {
  element.innerHTML = "";
  datas.forEach((data) => {
    element.innerHTML += `
            <div class="country js-country"">
                <div class="country-flag">
                    <img src="${data.flags.svg}" alt="${data.flags.alt}">
                </div>
                <div class="country-description">
                    <div class="country-name">
                        <h3>${data.name.common}</h3>
                    </div>
                    <div class="country-info">
                        <div class="population">
                            <h4>Population:</h4>
                            <span>${data.population}</span>
                        </div>
                        <div class="region">
                            <h4>Region:</h4>
                            <span>${data.region}</span>
                        </div>
                        <div class="capital">
                            <h4>Capital:</h4>
                            <span>${data.capital}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
  });
};

export const _addClass = function (element) {
  element.classList.add("active");
};
export const _removeClass = function (element) {
  element.classList.remove("active");
};

export const _renderDetailPage = function (element, datas) {
  element.innerHTML = "";
  datas.forEach((data) => {
    let languagesHTML = _language(data).join(", ");
    let nativeNameHTML = _nativeName(data).join(", ");
    let currenciesHTML = _curencies(data); 
    let bordersHTML = _borders(data);

    element.innerHTML = `
            <div class="country-flag">
                <img src=${data.flags.svg} alt=${data.flags.alt}>
            </div>
            <div class="country-descriptions">
                <div class="country-name">
                    <h2>${data.name.common}</h2>
                </div>
                <div class="country-infos">
                    <div class="infos">
                        <div class="native-name info">
                            <h4>Native Name:</h4>
                            <span>${nativeNameHTML}</span>
                        </div>
                        <div class="top-level-domain info">
                            <h4>Top Level Domain:</h4>
                            <span>${data.tld}</span>
                        </div>
                        <div class="population info">
                            <h4>Population:</h4>
                            <span>${data.population}</span>
                        </div>
                        <div class="currencies info">
                            <h4>Currencies:</h4>
                            <span>${currenciesHTML}</span>
                        </div>
                        <div class="region info">
                            <h4>Region:</h4>
                            <span>Europe</span>
                        </div>
                        <div class="languages info">
                            <h4>Languages:</h4>
                            <span>${languagesHTML}</span>
                        </div>
                        <div class="sub-region info">
                            <h4>Sub Region:</h4>
                            <span>${data.region}</span>
                        </div>
                        <div class="capital info">
                            <h4>Capital:</h4>
                            <span>${data.capital}</span>
                        </div>
                    </div>
                    <div class="border-countries">
                        <h4>Border Countries:</h4>
                        <div class="countries-wrapper">
                            ${bordersHTML}
                        </div>
                    </div>
                </div>
            </div>
        `;
  });
};

const _language = function (data) {
  let languagesArray = [];
  if (data.languages) {
    Object.keys(data.languages).forEach((key) => {
      languagesArray.push(data.languages[key]);
    });
  }

  return languagesArray;
};

const _nativeName = function (data) {
  let nativeNameArray = [];

  // Her bir ülkenin nativeName'ine döngüyle eriş
  Object.keys(data.name.nativeName).forEach((lang) => {
    nativeNameArray.push(data.name.nativeName[lang].common);
  });

  return nativeNameArray.slice(0,1);
};

const _curencies = function (data) {
  let currenciesArray = [];

  // Her bir ülkenin nativeName'ine döngüyle eriş
  Object.keys(data.currencies).forEach((curency) => {
    currenciesArray.push(data.currencies[curency].name);
  });

  return currenciesArray;
};

const _borders = function (data) {
    let borderButtonsHTML = '';
    if (data.borders && data.borders.length > 0) {
        borderButtonsHTML = data.borders.map(border => `<button>${border}</button>`).join(' ');
    }

    return borderButtonsHTML;
}
