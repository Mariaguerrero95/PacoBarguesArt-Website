import "../scss/styles/Contact.scss";
import { useState } from "react";


const Contact = () => {

    // Estado para manejar los valores del formulario
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    // Maneja el cambio de los valores de los campos
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Enviar el formulario y resetear
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Enviar datos al servidor o Formspree
        const response = await fetch("", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        // Si la respuesta es exitosa, resetear el formulario
        if (response.ok) {
            alert("Mensaje enviado con éxito"); // Mensaje de éxito

            // Resetear formulario
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            });
        } else {
            alert("Hubo un error al enviar el mensaje"); // Mensaje de error
        }
    };

    return (
        <section id="contact" className="contact">
            <h2 className="nameContact">Contacto</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Correo electrónico"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="subject"
                    placeholder="Asunto"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Escribe tu mensaje"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
                <button type="submit">Enviar</button>
            </form>
        </section>
    );
};

export default Contact;