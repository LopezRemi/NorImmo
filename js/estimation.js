function priceCalcul() {
    document.getElementById("pht1").value = document.getElementById("qt1").value * document.getElementById("cu1").value;

    document.getElementById("pht2").value = document.getElementById("qt2").value * document.getElementById("cu2").value;

    let add = parseFloat(document.getElementById("pht1").value) + parseFloat(document.getElementById("pht2").value)

    document.getElementById("tht").value = add * parseFloat(document.getElementById("materiau").value);

    document.getElementById("ttc").value = document.getElementById("tht").value * 1.20;

}