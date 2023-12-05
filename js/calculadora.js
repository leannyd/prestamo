document.getElementById("calcular").addEventListener("click", function () {
    // Obtener los valores de los campos de entrada
    var capital = parseFloat(document.getElementById("capital").value) || 0;
    var interes = parseFloat(document.getElementById("interes").value) || 0;
    var plazo = parseInt(document.getElementById("plazo").value) || 0;

    // Calcular la tasa de interés mensual
    var tasaMensual = interes / 100 / 12;

    // Calcular la cuota mensual
    var cuotaMensual = (capital * tasaMensual) / (1 - Math.pow(1 + tasaMensual, -plazo));

    // Calcular el total de interés pagado
    var totalInteres = cuotaMensual * plazo - capital;

    // Formatear los resultados con comas
    var formattedCuotaMensual = cuotaMensual.toLocaleString('en-US', {minimumFractionDigits: 2});
    var formattedTotalInteres = totalInteres.toLocaleString('en-US', {minimumFractionDigits: 2});

    // Actualizar el contenido del div de alerta con los resultados
    document.getElementById("resultadosAlert").innerHTML =
        '<div class="alert alert-info" role="alert">' +
        'Cuota Mensual Estimada: DOP ' + formattedCuotaMensual +
        '<br>Total de Interés Pagado: DOP ' + formattedTotalInteres +
        '</div>';
});