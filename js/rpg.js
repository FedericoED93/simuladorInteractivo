
/*
alert("Despertaste en un planeta desértico, tu nave colonial está detrás tuyo y parece haber sido derriba o tal vez se estrelló al querer descender")
alert("Algo salió mal")

let accionInicio = prompt("Te levantas y vas camino a Desierto Adentro (Única opción momentaneamente) o a Revisar La Nave?")


while (accionInicio != "Salir"){

    switch (accionInicio) {
        case "Desierto Adentro":
            alert("A los pocos pasos que das, encuentras unas misteriosas huellas de arrastre");
            let huellas = prompt("Decides seguirlas(Seguirlas) o no seguirlas(No Seguirlas)")
            if (huellas == "Seguirlas") {
                alert("Encuentras a un ser parecido a un humano, seco y descuartizado de la cadera para abajo, arrastrándose con pocas fuerzas!!")
            
            let accionHuellas = prompt("Agarras una piedra y decides matarlo (Matarlo) o corres hacía él para ver si puedes ayudarlo (Ayudarlo)?")
            if (accionHuellas == "Matarlo") {
                alert("Escucha tus pasos y se da la vuelta poniendo resistencia agarrando tus brazos")
                alert("Es más fuerte de lo que pensabas...")
            }
            let accionHuellas2 = prompt("Sigues con la intención de matarlo y le das un golpe fuerte en la cabeza con la piedra (Golpear) o decides calmarlo de algún modo aunque no te entienda (Calmar)")
            if (accionHuellas2 == "Golpear") {
                alert("No muere, te muerde y sales corriendo...")
                alert("Mueres desplomado sobre la arena a los pocos pasos")
                accionInicio = "Salir"
            } else if (accionHuellas == "Ayudarlo") {
                alert("Te mira a los ojos fijamente...")
                alert("Te agarra fuertemente el brazo y extiende su otra mano hacía su cadera...")
                alert("¡Te pones alerta!")
            }
            let accionHuellas3 = prompt("Decides huir (Huir) o esperar a ver que pasa? (Ver que pasa)")
            if (accionHuellas3 == "Huir") {
                alert("Consigues soltarte, aunque tenía mucha fuerza para el estado en el que estaba y corres hasta lo que parece ser una falla geológica con montañas de roca seca elevadas")
                alert("Te metes en lo que parece ser una cueva...")
                alert("A los tantos pasos y en la penumbra escuchas un sonido de pasos pesados detrás tuyo...")
                alert("Giras la cabeza y ves que a tus espaldas hay un humanoide con la seca, cara tapada con trapos pero pueden verse sus labios secos, alto... muy alto y de aspecto muy fuerte con manos filosas y grandes y el torso un tanto deformado")
            }
            let enfrentamiento1 = prompt("Decides salir corriendo (Correr) o enfrentarlo(Enfrentar)?")
            if (enfrentamiento1 == "Correr") {
                alert("Corres incansablemente...")
                alert("Pero el humanoide es mucho más rápido y te alcanza a los pocos pasos...")
                alert("Te agarra con su enorme mano y grandes brazos desde atrás y tironea de tu cabeza hacia arriba y haciendo empuje con la otra mano desde tus trapecios hacía abajo")
                alert("Te arranca la cabeza y la columna... mueres al instante")
                accionInicio = "Salir"
            } else if (enfrentamiento1 == "Enfrentar") {
                alert("Se abalanza... sobre vos y te agarra del torso levantandote a la altura de su cara... es horrible")
                alert("Mientras te aprieta intentas golpearlo de alguna forma")
            }
            let accionEnfrentamiento = prompt("Decides morder su mano (Morder) o pinchar sus ojos con tus dedos (Pinchar)")
            if (accionEnfrentamiento = "Morder") {
                alert("Se enfurce y te aprieta mucho más el torso reventandote en mil pedazos y mueres al instante...")
            }

            else if (accionEnfrentamiento = "Pinchar") {
                alert("Se toma los dos ojos y te suelta!!")
                alert("Caes al suelo...")
            }
            let accionEnfrentamiento2 = prompt("Decides correr (Correr) o seguir golpeandolo (Golpear)")
            if (accionEnfrentamiento2 == "Correr") {
                alert("Corres incansablemente...")
                alert("Pero el humanoide es mucho más rápido y te alcanza a los pocos pasos...")
                alert("Te agarra con su enorme mano y grandes brazos desde atrás y tironea de tu cabeza hacia arriba y haciendo empuje con la otra mano desde tus trapecios hacía abajo")
                alert("Te arranca la cabeza y la columna... mueres al instante")
                accionInicio = "Salir"
            }
            else if (accionEnfrentamiento2 == "Golpear"){
                alert("Lo consigues golpear en su estómago pero parece no hacerle nada, se agacha y le tiras arena")
                alert("Se vuelve a tomar los ojos y ésta vez se golpea contra una piedra mientras se los toma")
                alert("Encuentras un agujero en la cueva en el que no cabe...")
                alert("Consigues salir por otra parte de la cueva, perdiéndolo... por el momento")
                accionInicio = "Salir"
            }
            else if (huellas == "No Seguirlas") {
                alert("Sigues desierto adentro y mueres de sed")
                accionInicio = "Salir" 
        }
            }
            
            break;
            }
            }

            */

const mercenario = ["Destreza", "Fuerza", "Vitalidad"]
const legionario = ["Punteria", "Destreza", "Templanza"]
const cientifico = ["Inteligencia", "Supervivencia", "Concentracion"]

alert("¡Bienvenido al juego interactivo de Luna Sombría!")
alert("Selecciona quién queres ser en ésta historia")

let seleccion = prompt(" 1 - Mercenario \n 2 - Legionario \n 3 - Científico")

if (seleccion == "1") {
    alert("Tus habilidades son: ")
    alert(mercenario.join(" - "))
    } else if (seleccion == "2"){
        alert("Tus habilidades son: ")
        alert(legionario.join(" - "))
    } else if (seleccion == "3") {
    alert("Tus habilidades son: ")
    alert(cientifico.join(" - "))
    }


    
