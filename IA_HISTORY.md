# IA_HISTORY.md — Registro de Uso de IA

**Alumno/a:** Matías (Completar apellido)
**Fecha:** 23/04/2026

---

## Prompt 1

### Momento del proceso

Al revisar los requisitos de CSS moderno, intentando aplicar el layout correcto para la barra de navegación y las etiquetas de las tarjetas. Mi objetivo era resolver esa consigna específica asegurándome de usar las propiedades adecuadas.

### Lo que le pedí a la IA

Usar display: flex para la barra de navegación y las etiquetas de habilidades (.tags).

### Análisis del resultado obtenido

La IA analizó el archivo CSS proporcionado y me explicó que el código base ya cumplía con este requisito. Me detalló paso a paso cómo los selectores `nav`, `.nav-links` y `.tags` ya tenían aplicado el `display: flex` correctamente en la plantilla original. Esta respuesta me resultó muy útil porque me permitió confirmar que la base estaba bien estructurada y evitar reescribir código innecesariamente.

### Qué debí corregir manualmente y por qué

Al interactuar con las sugerencias de la IA en mi editor, inserté accidentalmente el bloque de ejemplo y dupliqué las reglas CSS en el archivo `styles.css`. Esto ensuciaba el código, demostraba un copiado irreflexivo e introducía comentarios generados por la máquina que no debían estar en la entrega final. Tuve que intervenir manualmente para borrar esas líneas repetidas, asegurando que el archivo quedara limpio, optimizado y sin potenciales conflictos de especificidad.

---

## Prompt 2

### Momento del proceso

Al comenzar la sección de JavaScript, cuando debía definir las variables con las estadísticas del personaje. Quería arrancar con una estructura sólida que respetara las buenas prácticas y evitara el uso de variables globales obsoletas.

### Lo que le pedí a la IA

Declarar las stats del personaje (name, characterClass, level, health, mana, attack, defense) usando const o let según corresponda. Nunca usar var.

### Análisis del resultado obtenido

La IA generó el bloque de código solicitado, declarando todas las variables requeridas sin usar la palabra reservada `var`. Asignó valores de prueba coherentes para el personaje y armó una excelente estructura inicial. Esto me sirvió como un gran punto de partida, ahorrándome tiempo para enfocarme en la lógica de las funciones posteriores.

### Qué debí corregir manualmente y por qué

En su respuesta inicial, la IA decidió utilizar `const` para declarar absolutamente todas las estadísticas del personaje. Detecté rápidamente que esto era un error lógico en el contexto de un videojuego, ya que atributos como la vida (`health`) o el maná (`mana`) deben poder modificarse dinámicamente durante un combate. Corregí esto manualmente cambiando esas declaraciones específicas a `let`, garantizando así que el programa no falle al intentar actualizar o reasignar sus valores en un futuro.

---

## Reflexión final

Durante este examen, comprobé que la IA es excelente para estructurar código rápidamente y detectar qué requerimientos ya están resueltos en una base de código extensa. Sin embargo, carece de contexto sobre las reglas de negocio, como entender que la vida de un personaje de juego debe ser una variable mutable y no una constante. Para mis próximos proyectos, planeo incluir mucho más contexto sobre cómo van a interactuar los datos a lo largo del tiempo en mis prompts, para lograr resultados más precisos y funcionales desde el primer intento.
