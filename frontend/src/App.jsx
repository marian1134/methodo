import React, { useState } from 'react'
import './App.css'

function App() {
  const [respuestas, setRespuestas] = useState({
    requisitosCambian: '',
    documentacion: '',
    entregasFrecuentes: '',
    riesgoAlto: '',
    flujoContinuo: '',
  })

  const [resultado, setResultado] = useState(null)
  const [error, setError] = useState('')

  function actualizarRespuesta(campo, valor) {
    setRespuestas({
      ...respuestas,
      [campo]: valor,
    })

    setError('')
  }

  async function calcularMetodologia() {
    try {
      setError('')
      setResultado(null)

      const respuesta = await fetch(
        'https://methodo-backend.onrender.com/api/recomendacion',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(respuestas),
        }
      )

      const datos = await respuesta.json()

      if (!respuesta.ok) {
        setError(
          datos.error ||
            'Ocurrió un error al procesar la recomendación.'
        )
        return
      }

      setResultado({
        nombre: datos.metodologia,
        puntos: datos.puntos,
        razon: datos.razon,
      })
    } catch (error) {
      console.error('Error al conectar con el backend:', error)

      setError(
        'No fue posible conectar con el servidor. Verifica que el backend esté encendido.'
      )
    }
  }

  return (
    <>
      {/* MENÚ */}
      <nav>
        <div className="logo">MÉTODO</div>

        <div className="menu">
          <a href="#inicio">Inicio</a>
          <a href="#caracteristicas">Características</a>
          <a href="#evolucion">Evolución</a>
          <a href="#metodologias">Metodologías</a>
          <a href="#comparar">Comparar</a>
          <a href="#selector">Selector</a>
          <a href="#referencias">Referencias</a>
        </div>
      </nav>

      {/* INICIO */}
      <section id="inicio">
        <div>
          <h1>Metodologías de software</h1>

          <p>
            Explora la evolución, características y clasificación de las
            principales metodologías de desarrollo de software.
          </p>

          <a href="#concepto">
            <button>Explorar metodologías</button>
          </a>
        </div>
      </section>

      {/* CONCEPTO */}
      <section id="concepto" className="seccion">
        <span className="etiqueta">CONCEPTO</span>

        <h2>¿Qué son las metodologías de software?</h2>

        <p>
          Las metodologías de software son enfoques organizados que permiten
          planificar, desarrollar, probar, controlar y entregar un producto
          de software de manera estructurada.
        </p>

        <div className="tarjetas">
          <div className="tarjeta">
            <h3>Planificación</h3>

            <p>
              Organizan las actividades, objetivos y responsabilidades del
              proyecto.
            </p>
          </div>

          <div className="tarjeta">
            <h3>Desarrollo</h3>

            <p>
              Definen cómo se construyen y organizan las funcionalidades del
              sistema.
            </p>
          </div>

          <div className="tarjeta">
            <h3>Calidad</h3>

            <p>
              Incorporan pruebas, revisiones y validaciones para asegurar
              resultados.
            </p>
          </div>

          <div className="tarjeta">
            <h3>Entrega</h3>

            <p>
              Establecen cómo y cuándo se entrega valor al usuario o cliente.
            </p>
          </div>
        </div>
      </section>

      {/* CARACTERÍSTICAS */}
      <section id="caracteristicas" className="seccion">
        <span className="etiqueta">CARACTERÍSTICAS</span>

        <h2>Características de las metodologías de software</h2>

        <p>
          Aunque cada metodología establece prácticas diferentes, todas
          buscan organizar el proceso de desarrollo y proporcionar mecanismos
          para planificar, construir, validar y entregar software de manera
          controlada.
        </p>

        <div className="caracteristicas-grid">
          <div className="caracteristica-card">
            <span className="numero">01</span>

            <h3>Planificación</h3>

            <p>
              Permiten establecer objetivos, actividades, tiempos,
              prioridades y responsabilidades dentro del proyecto.
            </p>
          </div>

          <div className="caracteristica-card">
            <span className="numero">02</span>

            <h3>Organización del proceso</h3>

            <p>
              Definen cómo se distribuyen las etapas, iteraciones o
              actividades necesarias para construir el producto.
            </p>
          </div>

          <div className="caracteristica-card">
            <span className="numero">03</span>

            <h3>Gestión de requisitos</h3>

            <p>
              Establecen mecanismos para identificar, documentar, priorizar y
              controlar las necesidades del usuario.
            </p>
          </div>

          <div className="caracteristica-card">
            <span className="numero">04</span>

            <h3>Control de calidad</h3>

            <p>
              Incorporan actividades de revisión, validación y pruebas para
              comprobar que el software cumpla con los requisitos.
            </p>
          </div>

          <div className="caracteristica-card">
            <span className="numero">05</span>

            <h3>Comunicación</h3>

            <p>
              Facilitan la coordinación entre desarrolladores, clientes,
              usuarios y demás participantes del proyecto.
            </p>
          </div>

          <div className="caracteristica-card">
            <span className="numero">06</span>

            <h3>Adaptación al cambio</h3>

            <p>
              Dependiendo del enfoque, permiten gestionar cambios en
              requisitos, prioridades, riesgos y condiciones del proyecto.
            </p>
          </div>
        </div>
      </section>

      {/* EVOLUCIÓN */}
      <section id="evolucion" className="seccion">
        <span className="etiqueta">EVOLUCIÓN</span>

        <h2>De la crisis del software a los enfoques ágiles</h2>

        <p>
          Las metodologías de software evolucionaron como respuesta a los
          problemas de planificación, calidad, costos, tiempos y cambios en
          los requisitos.
        </p>

        <div className="timeline">
          <div className="evento">
            <span className="anio">1968</span>
            <h3>Crisis del software</h3>

            <p>
              Se hace evidente la necesidad de aplicar principios de
              ingeniería, planificación, control y documentación al desarrollo
              de software.
            </p>
          </div>

          <div className="evento">
            <span className="anio">1970</span>
            <h3>Modelo en Cascada</h3>

            <p>
              El desarrollo se organiza en fases secuenciales como requisitos,
              diseño, implementación, pruebas y mantenimiento.
            </p>
          </div>

          <div className="evento">
            <span className="anio">1980</span>
            <h3>Modelo V</h3>

            <p>
              Refuerza la relación entre las fases de desarrollo y las
              actividades de validación y pruebas.
            </p>
          </div>

          <div className="evento">
            <span className="anio">1988</span>
            <h3>Modelo Espiral</h3>

            <p>
              Introduce ciclos iterativos y una gestión explícita de los
              riesgos durante el desarrollo.
            </p>
          </div>

          <div className="evento">
            <span className="anio">1990</span>
            <h3>RUP</h3>

            <p>
              Organiza el desarrollo de forma iterativa y utiliza casos de
              uso, arquitectura y artefactos para estructurar el proyecto.
            </p>
          </div>

          <div className="evento">
            <span className="anio">2001</span>
            <h3>Manifiesto Ágil</h3>

            <p>
              Se consolidan principios centrados en colaboración, software
              funcional, adaptación al cambio y entrega frecuente de valor.
            </p>
          </div>
        </div>
      </section>

      {/* METODOLOGÍAS */}
      <section id="metodologias" className="seccion">
        <span className="etiqueta">CLASIFICACIÓN</span>

        <h2>Principales tipos de metodologías de software</h2>

        <p>
          Las metodologías de software pueden agruparse, de forma general, en
          enfoques tradicionales o predictivos y enfoques ágiles o
          adaptativos.
        </p>

        <div className="grupos-metodologias">
          <div className="grupo">
            <span className="tipo">TRADICIONALES</span>

            <h3>Enfoques predictivos</h3>

            <p>
              Se caracterizan por una planificación detallada, fases
              claramente definidas, documentación formal y mayor estabilidad
              en los requisitos.
            </p>

            <div className="metodologia-grid">
              <div className="metodologia-card">
                <h4>Cascada</h4>

                <p>
                  Desarrollo secuencial dividido en fases como requisitos,
                  diseño, implementación, pruebas y mantenimiento.
                </p>
              </div>

              <div className="metodologia-card">
                <h4>Modelo V</h4>

                <p>
                  Relaciona las fases de desarrollo con actividades
                  específicas de validación y pruebas.
                </p>
              </div>

              <div className="metodologia-card">
                <h4>Espiral</h4>

                <p>
                  Utiliza ciclos iterativos y pone un fuerte énfasis en la
                  gestión de riesgos.
                </p>
              </div>

              <div className="metodologia-card">
                <h4>RUP</h4>

                <p>
                  Proceso iterativo y estructurado que utiliza casos de uso,
                  arquitectura y diferentes artefactos.
                </p>
              </div>
            </div>
          </div>

          <div className="grupo">
            <span className="tipo">ÁGILES</span>

            <h3>Enfoques adaptativos</h3>

            <p>
              Priorizan la colaboración, la entrega incremental, la
              retroalimentación frecuente y la capacidad de responder a los
              cambios.
            </p>

            <div className="metodologia-grid">
              <div className="metodologia-card">
                <h4>Scrum</h4>

                <p>
                  Organiza el trabajo mediante ciclos llamados Sprints y busca
                  entregar incrementos funcionales del producto.
                </p>
              </div>

              <div className="metodologia-card">
                <h4>Kanban</h4>

                <p>
                  Visualiza el flujo de trabajo y limita el trabajo en progreso
                  para mejorar la eficiencia.
                </p>
              </div>

              <div className="metodologia-card">
                <h4>XP</h4>

                <p>
                  Se centra en la calidad técnica mediante prácticas como
                  programación en parejas, pruebas y refactorización.
                </p>
              </div>

              <div className="metodologia-card">
                <h4>Lean</h4>

                <p>
                  Busca maximizar el valor, reducir desperdicios y mejorar
                  continuamente el proceso de desarrollo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
    COMPARACIÓN
========================= */}

<section id="comparar" className="seccion">
  <span className="etiqueta">COMPARACIÓN</span>

  <h2>Tradicionales vs. Ágiles</h2>

  <p>
    Ambos enfoques buscan organizar el desarrollo de software, pero se
    diferencian principalmente en la forma de planificar, gestionar cambios,
    entregar valor y trabajar con los requisitos.
  </p>

  <div className="tabla-comparacion">

    <div className="fila encabezado">
      <div>Aspecto</div>
      <div>Tradicional</div>
      <div>Ágil</div>
    </div>

    <div className="fila">
      <div className="aspecto">Planificación</div>

      <div>
        <span className="mobile-label">Tradicional</span>
        Principalmente inicial y detallada.
      </div>

      <div>
        <span className="mobile-label">Ágil</span>
        Continua y adaptable.
      </div>
    </div>

    <div className="fila">
      <div className="aspecto">Requisitos</div>

      <div>
        <span className="mobile-label">Tradicional</span>
        Se busca definirlos desde el inicio.
      </div>

      <div>
        <span className="mobile-label">Ágil</span>
        Pueden evolucionar durante el proyecto.
      </div>
    </div>

    <div className="fila">
      <div className="aspecto">Cambios</div>

      <div>
        <span className="mobile-label">Tradicional</span>
        Pueden ser más difíciles y costosos.
      </div>

      <div>
        <span className="mobile-label">Ágil</span>
        Se incorporan con mayor facilidad.
      </div>
    </div>

    <div className="fila">
      <div className="aspecto">Entrega</div>

      <div>
        <span className="mobile-label">Tradicional</span>
        Frecuentemente al final de grandes fases.
      </div>

      <div>
        <span className="mobile-label">Ágil</span>
        Incremental y frecuente.
      </div>
    </div>

    <div className="fila">
      <div className="aspecto">Cliente</div>

      <div>
        <span className="mobile-label">Tradicional</span>
        Participación más puntual.
      </div>

      <div>
        <span className="mobile-label">Ágil</span>
        Colaboración frecuente.
      </div>
    </div>

    <div className="fila">
      <div className="aspecto">Documentación</div>

      <div>
        <span className="mobile-label">Tradicional</span>
        Generalmente más extensa y formal.
      </div>

      <div>
        <span className="mobile-label">Ágil</span>
        Se prioriza documentación útil y suficiente.
      </div>
    </div>

    <div className="fila">
      <div className="aspecto">Adaptabilidad</div>

      <div>
        <span className="mobile-label">Tradicional</span>
        Menor ante cambios frecuentes.
      </div>

      <div>
        <span className="mobile-label">Ágil</span>
        Alta capacidad de adaptación.
      </div>
    </div>

  </div>
</section>

      {/* SELECTOR */}
      <section id="selector" className="seccion">
        <span className="etiqueta">SELECTOR</span>

        <h2>¿Qué metodología necesita tu proyecto?</h2>

        <p>
          Responde estas preguntas y obtén una recomendación según las
          características de tu proyecto.
        </p>

        <div className="selector-box">
          <div className="pregunta">
            <h3>1. ¿Los requisitos cambian frecuentemente?</h3>

            <button
              onClick={() =>
                actualizarRespuesta('requisitosCambian', 'si')
              }
              className={
                respuestas.requisitosCambian === 'si'
                  ? 'seleccionado'
                  : ''
              }
            >
              Sí
            </button>

            <button
              onClick={() =>
                actualizarRespuesta('requisitosCambian', 'no')
              }
              className={
                respuestas.requisitosCambian === 'no'
                  ? 'seleccionado'
                  : ''
              }
            >
              No
            </button>
          </div>

          <div className="pregunta">
            <h3>
              2. ¿Qué tan importante es la documentación formal?
            </h3>

            <button
              onClick={() =>
                actualizarRespuesta('documentacion', 'baja')
              }
              className={
                respuestas.documentacion === 'baja'
                  ? 'seleccionado'
                  : ''
              }
            >
              Baja
            </button>

            <button
              onClick={() =>
                actualizarRespuesta('documentacion', 'media')
              }
              className={
                respuestas.documentacion === 'media'
                  ? 'seleccionado'
                  : ''
              }
            >
              Media
            </button>

            <button
              onClick={() =>
                actualizarRespuesta('documentacion', 'alta')
              }
              className={
                respuestas.documentacion === 'alta'
                  ? 'seleccionado'
                  : ''
              }
            >
              Alta
            </button>
          </div>

          <div className="pregunta">
            <h3>3. ¿Necesitas entregas frecuentes?</h3>

            <button
              onClick={() =>
                actualizarRespuesta('entregasFrecuentes', 'si')
              }
              className={
                respuestas.entregasFrecuentes === 'si'
                  ? 'seleccionado'
                  : ''
              }
            >
              Sí
            </button>

            <button
              onClick={() =>
                actualizarRespuesta('entregasFrecuentes', 'no')
              }
              className={
                respuestas.entregasFrecuentes === 'no'
                  ? 'seleccionado'
                  : ''
              }
            >
              No
            </button>
          </div>

          <div className="pregunta">
            <h3>4. ¿El proyecto tiene alto riesgo?</h3>

            <button
              onClick={() =>
                actualizarRespuesta('riesgoAlto', 'si')
              }
              className={
                respuestas.riesgoAlto === 'si'
                  ? 'seleccionado'
                  : ''
              }
            >
              Sí
            </button>

            <button
              onClick={() =>
                actualizarRespuesta('riesgoAlto', 'no')
              }
              className={
                respuestas.riesgoAlto === 'no'
                  ? 'seleccionado'
                  : ''
              }
            >
              No
            </button>
          </div>

          <div className="pregunta">
            <h3>5. ¿El trabajo llega de forma continua?</h3>

            <button
              onClick={() =>
                actualizarRespuesta('flujoContinuo', 'si')
              }
              className={
                respuestas.flujoContinuo === 'si'
                  ? 'seleccionado'
                  : ''
              }
            >
              Sí
            </button>

            <button
              onClick={() =>
                actualizarRespuesta('flujoContinuo', 'no')
              }
              className={
                respuestas.flujoContinuo === 'no'
                  ? 'seleccionado'
                  : ''
              }
            >
              No
            </button>
          </div>

          <button
            className="calcular"
            onClick={calcularMetodologia}
          >
            Obtener recomendación
          </button>

          {error && (
            <div
              style={{
                marginTop: '25px',
                padding: '18px',
                border: '1px solid #ef4444',
                borderRadius: '10px',
                color: '#fca5a5',
                background: 'rgba(239, 68, 68, 0.08)',
              }}
            >
              {error}
            </div>
          )}

          {resultado && (
            <div className="resultado">
              <span>METODOLOGÍA RECOMENDADA</span>

              <h3>{resultado.nombre}</h3>

              <p>{resultado.razon}</p>
            </div>
          )}
        </div>
      </section>

      {/* REFERENCIAS */}
      <section
        id="referencias"
        className="seccion referencias"
      >
        <span className="etiqueta">FUENTES</span>

        <h2>Referencias y fuentes consultadas</h2>

        <p>
          La investigación fue elaborada a partir del material académico de
          la asignatura y de fuentes especializadas y oficiales sobre
          metodologías tradicionales y ágiles de desarrollo de software.
        </p>

        <div className="referencias-lista">
          <div className="referencia">
            <span>01</span>

            <div>
              <h3>
                Manifiesto para el Desarrollo Ágil de Software
              </h3>

              <p>
                Fuente oficial utilizada para sustentar los valores
                fundamentales del desarrollo ágil y su orientación hacia la
                colaboración, el software funcional y la adaptación al cambio.
              </p>

              <a
                href="https://agilemanifesto.org/iso/es/manifesto.html"
                target="_blank"
                rel="noreferrer"
              >
                Consultar fuente →
              </a>
            </div>
          </div>

          <div className="referencia">
            <span>02</span>

            <div>
              <h3>
                Schwaber, K. & Sutherland, J. — The Scrum Guide
              </h3>

              <p>
                Guía oficial de Scrum utilizada como referencia para comprender
                el Scrum Team, los Sprints, eventos, artefactos y principios
                fundamentales del framework.
              </p>

              <a
                href="https://scrumguides.org/scrum-guide.html"
                target="_blank"
                rel="noreferrer"
              >
                Consultar Scrum Guide →
              </a>
            </div>
          </div>

          <div className="referencia">
            <span>03</span>

            <div>
              <h3>
                Kanban University — The Official Guide to the Kanban Method
              </h3>

              <p>
                Fuente utilizada para sustentar conceptos como visualización
                del trabajo, gestión del flujo, limitación del trabajo en
                progreso y mejora evolutiva.
              </p>

              <a
                href="https://kanban.university/kanban-guide/"
                target="_blank"
                rel="noreferrer"
              >
                Consultar guía oficial →
              </a>
            </div>
          </div>

          <div className="referencia">
            <span>04</span>

            <div>
              <h3>
                Agile Alliance — Extreme Programming (XP)
              </h3>

              <p>
                Fuente utilizada para respaldar el enfoque de Extreme
                Programming y sus prácticas relacionadas con calidad técnica,
                ciclos frecuentes y disciplina de ingeniería.
              </p>

              <a
                href="https://agilealliance.org/agile101/agile-glossary/"
                target="_blank"
                rel="noreferrer"
              >
                Consultar fuente →
              </a>
            </div>
          </div>

          <div className="referencia">
            <span>05</span>

            <div>
              <h3>
                Lean Enterprise Institute — What is Lean?
              </h3>

              <p>
                Fuente especializada utilizada para comprender Lean como un
                enfoque orientado a crear valor, reducir desperdicios y
                promover el aprendizaje y la mejora continua.
              </p>

              <a
                href="https://www.lean.org/explore-lean/what-is-lean/"
                target="_blank"
                rel="noreferrer"
              >
                Consultar fuente →
              </a>
            </div>
          </div>

          <div className="referencia">
            <span>06</span>

            <div>
              <h3>
                Boehm, B. W. — A Spiral Model of Software Development and
                Enhancement
              </h3>

              <p>
                Artículo publicado en IEEE Computer en 1988 y utilizado como
                referencia académica para el Modelo Espiral y su enfoque basado
                en la gestión del riesgo.
              </p>

              <a
                href="https://doi.org/10.1109/2.59"
                target="_blank"
                rel="noreferrer"
              >
                Consultar publicación →
              </a>
            </div>
          </div>

          <div className="referencia">
            <span>07</span>

            <div>
              <h3>Presentación — Metodologías Ágiles</h3>

              <p>
                Material académico proporcionado por el docente como apoyo para
                la asignatura. Incluye contenidos relacionados con Agile,
                Scrum, Kanban, XP y Lean Software Development.
              </p>
            </div>
          </div>

          <div className="referencia">
            <span>08</span>

            <div>
              <h3>
                Presentación — Histórico y evolución de las metodologías
                tradicionales
              </h3>

              <p>
                Material académico proporcionado por el docente sobre la
                Crisis del Software, Cascada, Modelo V, Espiral, RUP,
                requisitos y casos de uso.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App