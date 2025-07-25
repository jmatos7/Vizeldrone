import { useState } from 'react';
import { FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa';
import { IoLocationOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import Swal from 'sweetalert2';
import './Contact.scss';

export default function Contact() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [status, setStatus] = useState<string | null>(null);

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        Swal.fire({
            title: 'Enviando...',
            background: '#111',
            color: '#00f6ff', 
            didOpen: () => {
                Swal.showLoading();
            },
            allowOutsideClick: false,
        });

        setTimeout(() => {
            Swal.close();
            Swal.fire({
                title: 'Mensagem enviada com sucesso!',
                icon: 'success',
                background: '#111',            // fundo escuro
                color: '#00f6ff',              // texto ciano/neon
                confirmButtonColor: '#00f6ff', // botão com a cor ciano
                confirmButtonText: 'Fechar',
                timer: 2500,
                timerProgressBar: true,
            });
            setFormData({ name: '', email: '', message: '' });
        }, 1500);
    }

    return (
        <>
            <div className="socials">
                <h1>Contactos</h1>
                <a href="https://www.youtube.com/@Vizeldrone" target="_blank" rel="noreferrer">
                    <FaYoutube />
                    Vizeldrone
                </a>
                <a href="https://www.instagram.com/vizeldrone/" target="_blank" rel="noreferrer">
                    <FaInstagram />
                    vizeldrone
                </a>
                <a href="https://www.facebook.com/share/1B2vkddbsp" target="_blank" rel="noreferrer">
                    <FaFacebook />
                    Vizeldrone Imagens
                </a>

                <div className="social-item">
                    <MdEmail /> vizeldrone@gmail.com
                </div>

                <div className="social-item">
                    <IoLocationOutline /> Vizela
                </div>
            </div>

            <div className="contact-container">
                <h2>Entre em contacto</h2>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Nome:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Mensagem:</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit">Enviar</button>
                </form>

                {status && <p className="form-status">{status}</p>}
            </div>
        </>
    );
}
