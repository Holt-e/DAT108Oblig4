<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
pageEncoding="ISO-8859-1"%>
<html>
<head>
  <meta charset="ISO-8859-1">
  <script defer src="index.js"></script>

  <!-- Fra https://purecss.io/ -->
  <link rel="stylesheet"
        href="https://unpkg.com/purecss@1.0.0/build/pure-min.css">
  <link rel="stylesheet"
        href="style.css">
  <title>Påmelding</title>
</head>
<body lang="no">
<h2>Påmelding</h2>
<div id="root">
<form novalidate method="post" name="skjema" class="pure-form pure-form-aligned">
  <fieldset>
    <div class="pure-control-group">
      <label for="fornavn">Fornavn:</label>
      <input id="fornavn" type="text" minlength="2" maxlength="20" name="fornavn" placeholder="Ola"/>
    </div>
    <div class="pure-control-group">
      <label for="etternavn">Etternavn:</label> <input id="etternavn" type="text" minlength="2" maxlength="20" name="etternavn" placeholder="Nordmann"/>
    </div>
    <div class="pure-control-group">
      <label for="mobil">Mobil (8 siffer):</label> <input id="mobil" type="tel" pattern="[0-9]{8}" placeholder="########" name="mobil" />
    </div>
    <div class="pure-control-group">
      <label for="password">Passord:</label>
      <input id="password" type="password" required minlength="3" name="passord" placeholder="********"/> <!--onmouseover='passAlert()'-->
      <span class="error" aria-live="polite"></span>
    </div>
    <div class="pure-control-group">
      <label for="passordRepetert">Passord repetert:</label>
      <input id="passordRepetert" type="password" name="passordRepetert" placeholder="********" />
      <span class="error" aria-live="polite"></span>
    </div>
    <div id kjonn class="pure-control-group">
      <label for="kjonn">Kjønn:</label>
      <input id="kjonn" type="radio" name="kjonn" />Mann
      <input type="radio" name="kjonn" />Kvinne
    </div>
    <div class="pure-controls">
      <button type="submit" id="submit" class="pure-button pure-button-primary">Meld
        meg på</button>
    </div>
  </fieldset>
</form>
</div>
</body>
</html>
