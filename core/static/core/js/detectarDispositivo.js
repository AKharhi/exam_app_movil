const dispositivo__texto = document.getElementById('dispositivo__texto')


class Dispositivo {
    esMovil = false
    esTablet = false
    esAndroid = false
    esiPhone = false
    esiPad = false
    esOrdenador = false
    esWindows = false
    esLinux = false
    esMac = false
}

const deteccion = () => {
    dispositivo = new Dispositivo()

    if (navigator.userAgent.toLowerCase().match(/mobile/)){
        dispositivo.esMovil = true
    }
    else {
        if (navigator.userAgent.toLowerCase().match(/tablet/))
            dispositivo.esTablet = true
        else
            dispositivo.esOrdenador = true
    }

    console.log(navigator.userAgent.toLocaleLowerCase())

    if (dispositivo.esMovil == true) {
        if (navigator.userAgent.toLowerCase().match(/android/)) {
            dispositivo.esAndroid = true
            dispositivo__texto.innerText = "Celular Android"
        } else if (navigator.userAgent.toLowerCase().match(/ipad/)){
            dispositivo.esiPad = true
            dispositivo__texto.innerText = "iPad"
        } else {
            dispositivo.esiPhone = true
            dispositivo__texto.innerText = "Celular iPhone"
        }
    } else if(dispositivo.esTablet == true)
            dispositivo__texto.innerText = "Tablet"
      else {
        if (navigator.userAgent.toLowerCase().match(/mac/)) {
            dispositivo.esMac = true
        } else if(navigator.userAgent.toLowerCase().match(/linux/)){
            dispositivo.esLinux = true
            dispositivo__texto.innerText = "Ordenador Linux"
        } else {
            dispositivo.esWindows = true
            dispositivo__texto.innerText = "Ordenador Windows"
        }
    }
}

window.addEventListener('load', deteccion())
