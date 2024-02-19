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
