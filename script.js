document.addEventListener("DOMContentLoaded", function() {
    // Definir la fecha del evento (20 de febrero de 2025 a las 9:30 PM hora local)
    const fechaEvento = new Date("February 20, 2025 21:30:00").getTime();

    function actualizarCuentaRegresiva() {
        let ahora = new Date().getTime();
        let tiempoRestante = fechaEvento - ahora;

        if (tiempoRestante > 0) {
            let horas = Math.floor(tiempoRestante / (1000 * 60 * 60));
            let minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
            let segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

            let horasElem = document.getElementById("horas");
            let minutosElem = document.getElementById("minutos");
            let segundosElem = document.getElementById("segundos");

            if (horasElem && minutosElem && segundosElem) {
                horasElem.textContent = horas.toString().padStart(2, "0");
                minutosElem.textContent = minutos.toString().padStart(2, "0");
                segundosElem.textContent = segundos.toString().padStart(2, "0");
            }
        } else {
            let cuentaRegresivaElem = document.getElementById("cuentaRegresiva");
            if (cuentaRegresivaElem) {
                cuentaRegresivaElem.textContent = "¡El evento ha comenzado!";
            }
            clearInterval(intervalo);
        }
    }

    let intervalo = setInterval(actualizarCuentaRegresiva, 1000);
    actualizarCuentaRegresiva();

    // Redirección a WhatsApp con datos del formulario
    document.getElementById('formulario').addEventListener('submit', function(event) {
        event.preventDefault();

        let nombre = document.getElementById("nombre").value.trim();
        let whatsapp = document.getElementById("whatsapp").value.trim();
        let interes = document.getElementById("interes").value;
        let asistencia = document.getElementById("asistencia").value;
        let importancia = document.getElementById("importancia").value;
        let rango = document.getElementById("rango").value;

        // Validación de campos
        if (!nombre || !whatsapp || !interes || !asistencia || !importancia || !rango) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        // Crear el mensaje para WhatsApp
        let mensaje = `👋 ¡Hola! Quiero registrarme al evento. Mis datos son:
        📌 Nombre: *${nombre}*
        📱 WhatsApp: *${whatsapp}*
        📖 Interés: *${interes}*
        🏛 Modalidad de asistencia: *${asistencia}*
        📚 Importancia de la educación: *${importancia} / 5*
        💰 Rango de inversión en educación: *${rango}*`;

        // Número de WhatsApp donde se enviará la información
        let numeroWhatsApp = "573117947704"; // Código de país + número sin espacios

        // Generar enlace de WhatsApp y abrirlo en una nueva pestaña
        let url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
        window.open(url, "_blank");
    });
});





    
