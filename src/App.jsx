import React, { useState, useEffect } from "react";
import "./btn.css";
import "./form.css";
import "./styles.css";
import { Analytics } from "@vercel/analytics/react";
import { createClient } from "@supabase/supabase-js";

function App() {
  const [currentText, setCurrentText] = useState("GPT-Assisted");
  const phrases = ["GPT-Asistido", "IA Generativa", "Visión Computacional"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      setCurrentText(phrases[currentIndex]);
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const supabaseUrl = "https://mqrioyirlvbguhnbtwgy.supabase.co";
  const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xcmlveWlybHZiZ3VobmJ0d2d5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU2NjE4MTMsImV4cCI6MjAxMTIzNzgxM30.tBoLMPows5SDZWA3UqlpOG8hCn-uqc_y8IqaJMCXVPY";
  const supabase = createClient(supabaseUrl, supabaseKey);

  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [submissionError, setSubmissionError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log("Before form submission");

      const { data, error } = await supabase.from("contact_form").upsert([
        {
          nombre: event.target.nombre.value,
          apellidos: event.target.apellidos.value,
          empresa: event.target.empresa.value,
          puesto: event.target.puesto.value,
          correo: event.target.correo.value,
          detalles: event.target.detalles.value,
        },
      ]);

      console.log("After form submission");
      console.log("Data:", data);
      console.log("Error:", error);
      console.log("Form Data:", {
        nombre: event.target.nombre.value,
        apellidos: event.target.apellidos.value,
        empresa: event.target.empresa.value,
        puesto: event.target.puesto.value,
        correo: event.target.correo.value,
        detalles: event.target.detalles.value,
      });

      if (data) {
        setSubmissionSuccess(true);
        setSubmissionError(null);
      } else {
        setSubmissionSuccess(false);
        setSubmissionError(
          error && error.message
            ? error.message
            : "Error submitting form. Please try again"
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmissionSuccess(false);
      setSubmissionError("Error submitting form.");
    }
  };

  return (
    <div className="flex flex-col p-5">
      <section className="min-h-screen flex flex-col">
        <nav className="flex items-center justify-between p-2">
          <div className="flex items-center">
            <img
              src="https://github.com/Adorp94/media/blob/main/Heyaylogo.png?raw=true"
              alt="Logo"
              className="w-6 h-6 mr-2"
            ></img>
            <h1
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: "bold",
                color: "black",
              }}
            >
              HEYAY LABS
            </h1>
          </div>

          <div className="layout_navItem__pwCs9 flex items-center">
            <a
              href="https://www.instagram.com/heyaylabs"
              className="flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="black"
                className="bi bi-instagram"
                viewBox="0 0 16 16"
                style={{ marginRight: "5px" }}
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
              </svg>
              <span style={{ color: "black" }}>Instagram</span>
            </a>
          </div>
        </nav>

        {/* Title grid */}
        <main className="flex flex-col gap-3 text-center sm:gap-4 justify-center">
          <div>
            <div className="grid grid-rows pt-20">
              <div className="grid-row row-1 flex justify-center items-center">
                <h1
                  style={{
                    display: "block",
                    fontFamily: "-apple-system, sans-serif",
                    textAlign: "center",
                    width: "100%",
                  }}
                >
                  <div>
                    <span
                      className="responsive-title"
                      style={{
                        color: "black",
                        fontWeight: "700",
                      }}
                    >
                      Inteligencia Artificial Aplicada
                    </span>
                  </div>
                </h1>
              </div>

              <div className="grid-row row-2 flex justify-center items-center">
                <h2>
                  <div>
                    <span
                      style={{
                        fontWeight: "700",
                      }}
                      className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-blue-600 responsive-title2"
                    >
                      {currentText}
                    </span>
                  </div>
                </h2>
              </div>

              <div className="grid-row row-3 flex justify-center items-center">
                <h3
                  style={{
                    color: "black",
                    fontSize: "30px",
                    fontWeight: "540",
                    letterSpacing: "-1px",
                    textAlign: "center",
                    display: "block",
                    maxWidth: "900px",
                  }}
                >
                  <div>
                    <span className="responsive-title3">
                      Descubre el poder de la IA. Simplifica tus Procesos,
                      Impulsa tu Crecimiento y Experimenta la Transformación.
                    </span>
                  </div>
                </h3>
              </div>
            </div>

            <div class="button-container">
              <button
                class="glow-on-hover"
                type="button"
                style={{
                  margin: "2.5rem auto",
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  extAlign: "center",
                  flexDirection: "column",
                  width: "250px",
                  height: "40px",
                }}
                onClick={openModal}
              >
                Habla con un experto de IA &rarr;
              </button>
            </div>

            {/* Modal */}
            {isModalOpen && (
              <div className="modal-overlay">
                <div className="modal">
                  <span className="close" onClick={closeModal}>
                    &times;
                  </span>
                  <h2>HABLA CON UN EXPERTO EN IA</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="nombre">Nombre*:</label>
                        <input type="text" id="nombre" name="nombre" required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="apellidos">Apellidos*:</label>
                        <input
                          type="text"
                          id="apellidos"
                          name="apellidos"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="empresa">Empresa/Negocio*:</label>
                        <input
                          type="text"
                          id="empresa"
                          name="empresa"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="puesto">Puesto*:</label>
                        <input type="text" id="puesto" name="puesto" required />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group correo-proporcione">
                        <label htmlFor="correo">Correo*:</label>
                        <input
                          type="email"
                          id="correo"
                          name="correo"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div
                        className="form-group correo-proporcione"
                        style={{ gridColumn: "span 2" }}
                      >
                        <label htmlFor="detalles">
                          Proporcione detalles sobre su proyecto*:
                        </label>
                        <textarea
                          id="detalles"
                          name="detalles"
                          rows="4"
                          required
                        ></textarea>
                      </div>
                    </div>

                    <div className="form-group">
                      <button type="submit">Enviar</button>
                    </div>
                  </form>

                  {submissionSuccess && (
                    <div className="submission-success">
                      Submission successful!
                    </div>
                  )}
                  {submissionError && (
                    <div className="submission-error">{submissionError}</div>
                  )}
                </div>
              </div>
            )}

            {/* Icon grid */}
            <div
              style={{ margin: "10px auto" }}
              className="icon-grid gap-8 mt-8 px-20"
            >
              <div className="flex flex-col items-center text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="black"
                  class="bi bi-robot"
                  viewBox="0 0 16 16"
                >
                  {
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="black"
                      class="bi bi-robot"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219V8.062Zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z" />
                      <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2V1.866ZM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5Z" />
                    </svg>
                  }
                </svg>
                <h3
                  className="mt-2 text-lg font-semibold"
                  style={{ color: "black" }}
                >
                  GPT-Asistido
                </h3>
                <p
                  className="mt-2 text-gray-600"
                  style={{ lineHeight: "1.1", maxWidth: "300px" }}
                >
                  10x Más Productivo. Descubre el Poder de los LLMs en tus
                  Tareas.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="black"
                  class="bi bi-card-image"
                  viewBox="0 0 16 16"
                >
                  {
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="black"
                      class="bi bi-card-image"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                      <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z" />
                    </svg>
                  }
                </svg>
                <h3
                  className="mt-2 text-lg font-semibold"
                  style={{ color: "black" }}
                >
                  IA Generativa
                </h3>
                <p
                  className="mt-2 text-gray-600"
                  style={{ lineHeight: "1.1", maxWidth: "360px" }}
                >
                  Crea Nuevas Experiencias. Los Mejores Modelos de Audio, Imagen
                  y Video.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="black"
                  class="bi bi-eye"
                  viewBox="0 0 16 16"
                >
                  {
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="black"
                      class="bi bi-eye"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                    </svg>
                  }
                </svg>
                <h3
                  className="mt-2 text-lg font-semibold"
                  style={{ color: "black" }}
                >
                  Visión Computacional
                </h3>
                <p
                  className="mt-2 text-gray-600"
                  style={{ lineHeight: "1.1", maxWidth: "360px" }}
                >
                  Dale ojos a la IA. Obten Información Valiosa y Revoluciona tu
                  Manera de Trabajar.
                </p>
              </div>
            </div>
          </div>
          <Analytics />
        </main>
      </section>
      <footer></footer>
    </div>
  );
}

export default App;
