$(document).ready(function () {
  var heart1 = $(".a1");
  var heart2 = $(".a2");
  var heart3 = $(".a3");
  var message = $(".message");
  var popup = $("#popup-container");

  // Abrir o envelope e exibir os corações
  $("#open").click(function () {
    $("#envelope").removeClass("close").addClass("open");

    setTimeout(function () {
      heart1.css("opacity", "1");
      heart2.css("opacity", "1");
      heart3.css("opacity", "1");

      // Exibir o popup "Ler a carta" após os corações
      setTimeout(function () {
        popup.fadeIn(); // Exibe o popup
      }, 3500); // Exibe o popup após os corações
    }, 1000);
  });

  // Quando clicar em "Ler a carta", exibe a mensagem
  $("#read-letter").click(function () {
    popup.fadeOut(); // Fecha o popup
    message.css("opacity", "1"); // Torna a mensagem visível
  });

  // Resetar a animação
  $("#reset").click(function () {
    $("#envelope").removeClass("open").addClass("close");
    message.css("opacity", "0"); // Esconde a mensagem
    heart1.css("opacity", "0");
    heart2.css("opacity", "0");
    heart3.css("opacity", "0");
    popup.fadeOut(); // Esconde o popup
  });
});
