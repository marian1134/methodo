const express = require('express')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Servidor de METHODO funcionando')
})

app.post('/api/recomendacion', (req, res) => {
  console.log('Respuestas recibidas:', req.body)

  const respuestas = req.body

  // Validar que todas las preguntas estén respondidas
  const camposRequeridos = [
    'requisitosCambian',
    'documentacion',
    'entregasFrecuentes',
    'riesgoAlto',
    'flujoContinuo',
  ]

  const faltanRespuestas = camposRequeridos.some(
    (campo) => !respuestas[campo]
  )

  if (faltanRespuestas) {
    return res.status(400).json({
      error:
        'Debes responder todas las preguntas antes de obtener una recomendación.',
    })
  }

  // Sistema de puntuación
  const puntos = {
    Scrum: 0,
    Kanban: 0,
    XP: 0,
    Cascada: 0,
    'Modelo V': 0,
    Espiral: 0,
  }

  // Requisitos cambiantes
  if (respuestas.requisitosCambian === 'si') {
    puntos.Scrum += 3
    puntos.Kanban += 2
    puntos.XP += 2
  }

  if (respuestas.requisitosCambian === 'no') {
    puntos.Cascada += 3
    puntos['Modelo V'] += 2
  }

  // Documentación
  if (respuestas.documentacion === 'alta') {
    puntos.Cascada += 3
    puntos['Modelo V'] += 3
  }

  if (respuestas.documentacion === 'media') {
    puntos.Scrum += 1
    puntos.Espiral += 1
  }

  if (respuestas.documentacion === 'baja') {
    puntos.Scrum += 1
    puntos.Kanban += 1
    puntos.XP += 1
  }

  // Entregas frecuentes
  if (respuestas.entregasFrecuentes === 'si') {
    puntos.Scrum += 3
    puntos.Kanban += 2
    puntos.XP += 2
  }

  if (respuestas.entregasFrecuentes === 'no') {
    puntos.Cascada += 1
    puntos['Modelo V'] += 1
  }

  // Riesgo alto
  if (respuestas.riesgoAlto === 'si') {
    puntos.Espiral += 5
  }

  // Flujo continuo
  if (respuestas.flujoContinuo === 'si') {
    puntos.Kanban += 5
  }

  // Buscar la metodología con mayor puntuación
  const metodologiaGanadora = Object.keys(puntos).reduce((a, b) =>
    puntos[a] > puntos[b] ? a : b
  )

  // Explicaciones
  const explicaciones = {
    Scrum:
      'Se recomienda Scrum porque tu proyecto puede beneficiarse de iteraciones cortas, entregas frecuentes y adaptación continua a los cambios.',

    Kanban:
      'Se recomienda Kanban porque tu proyecto presenta un flujo continuo de trabajo y puede beneficiarse de visualizar tareas y limitar el trabajo en progreso.',

    XP:
      'Se recomienda XP porque el proyecto puede beneficiarse de prácticas técnicas orientadas a la calidad, las pruebas y la mejora continua del código.',

    Cascada:
      'Se recomienda Cascada porque los requisitos son relativamente estables y existe una necesidad importante de planificación y documentación formal.',

    'Modelo V':
      'Se recomienda el Modelo V porque el proyecto requiere una estructura formal y una fuerte relación entre las etapas de desarrollo, validación y pruebas.',

    Espiral:
      'Se recomienda Espiral porque el proyecto presenta un nivel importante de riesgo y necesita evaluación y planificación progresiva durante el desarrollo.',
  }

  res.json({
    metodologia: metodologiaGanadora,
    puntos: puntos[metodologiaGanadora],
    razon: explicaciones[metodologiaGanadora],
    detallePuntos: puntos,
  })
})

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`)
})