function updateTime() {
  // Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");

  let losAngelesTime = moment().tz("America/Los_angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do, YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]a[</small>]"
  );

  // Aarhus
  let aarhusElement = document.querySelector("#aarhus");
  let aarhusTimeElement = aarhusElement.querySelector(".time");
  let aarhusDateElement = aarhusElement.querySelector(".date");

  let aarhusTime = moment().tz("Europe/Copenhagen");

  aarhusDateElement.innerHTML = aarhusTime.format("MMMM Do, YYYY");
  aarhusTimeElement.innerHTML = aarhusTime.format(
    "h:mm:ss [<small>]a[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;

  if (event.target.value === "current") {
    cityTimeZone = moment.tz.guess();
  }

  let cityTime = moment().tz(cityTimeZone);
  let cityName = cityTimeZone.split("/")[1].replace("_", " ");
  let cityElement = document.querySelector("#city");

  cityElement.innerHTML = ` <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("dddd Do, MMMM YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )}<small> ${cityTime.format("a")}</small></div>
        </div>
          <p><a href="/">all cities </a></p>`;
}

let citySelector = document.querySelector("#cities");
citySelector.addEventListener("change", updateCity);
