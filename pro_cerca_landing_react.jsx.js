import React from "react";

// ProCerca Landing Page - Single-file React component
// Tailwind CSS utility classes assumed to be available in the hosting app.

export default function ProCercaLanding() {
  return (
    <div className="min-h-screen bg-white text-gray-800 antialiased">
      {/* Header */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Logo: pin + handshake */}
          <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg shadow-md">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C8.68629 2 6 4.68629 6 8C6 12.5 12 20 12 20C12 20 18 12.5 18 8C18 4.68629 15.3137 2 12 2Z" fill="white"/>
              <path d="M9 10C9 9.44772 9.44772 9 10 9C10.5523 9 11 9.44772 11 10C11 10.5523 10.5523 11 10 11C9.44772 11 9 10.5523 9 10Z" fill="#007BFF"/>
              <path d="M13 10C13 9.44772 13.4477 9 14 9C14.5523 9 15 9.44772 15 10C15 10.5523 14.5523 11 14 11C13.4477 11 13 10.5523 13 10Z" fill="#007BFF"/>
              <path d="M9.2 12.2C9.2 12.2 10.6 13.6 12 13.6C13.4 13.6 14.8 12.2 14.8 12.2" stroke="#007BFF" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <div className="text-lg font-semibold text-gray-900">ProCerca</div>
            <div className="text-xs text-gray-500 -mt-0.5">Profesionales confiables, cerca de ti</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a href="#services" className="hover:text-blue-600">Servicios</a>
          <a href="#how" className="hover:text-blue-600">Cómo funciona</a>
          <a href="#testimonials" className="hover:text-blue-600">Testimonios</a>
          <a href="#contact" className="hover:text-blue-600">Contacto</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden md:inline-block px-4 py-2 rounded-md text-sm font-medium border border-blue-600 text-blue-600 hover:bg-blue-50">Iniciar sesión</button>
          <a href="#reserve" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-semibold">Solicitar servicio</a>
        </div>
      </header>

      {/* Hero */}
      <main className="max-w-6xl mx-auto px-6">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-12">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">Encuentra profesionales confiables cerca de ti</h1>
            <p className="mt-4 text-gray-600 max-w-xl">Rápido, seguro y con precios transparentes. Reserva técnicos verificados (electricistas, plomeros, jardineros y más) en minutos.</p>

            <div className="mt-6 flex items-center gap-4">
              <a href="#reserve" className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg font-semibold shadow">Reservar ahora</a>
              <a href="#how" className="text-sm text-gray-700 hover:text-blue-600">Cómo funciona →</a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4"/></svg>
                Profesionales verificados
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3"/></svg>
                Reserva y pago seguro
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18M3 17h18"/></svg>
                Soporte y garantía
              </div>
            </div>

            <div className="mt-6">
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">★</div>
                  <div>
                    <div className="font-medium text-gray-900">4.8</div>
                    <div className="text-gray-500">Calificación promedio</div>
                  </div>
                </div>

                <div className="h-6 border-l border-gray-200"></div>

                <div>
                  <div className="font-medium text-gray-900">+1.200</div>
                  <div className="text-gray-500">Reservas completadas</div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-first lg:order-last">
            {/* Hero illustration card */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 shadow-lg">
              <img src="https://images.unsplash.com/photo-1560184897-6b0f5a3b3c44?auto=format&fit=crop&w=800&q=60" alt="Cliente y profesional" className="rounded-xl w-full h-64 object-cover shadow-sm" />
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium">Reparación de cañería</div>
                  <div className="text-xs text-gray-500">Plomero - Santiago</div>
                </div>
                <div className="text-sm font-semibold text-blue-600">$15.000</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services / Categories */}
        <section id="services" className="py-8">
          <h2 className="text-2xl font-bold text-gray-900">Categorías de servicios</h2>
          <p className="mt-2 text-gray-600">Encuentra el profesional que necesitas en minutos.</p>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <ServiceCard title="Electricista" icon={
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 2L3 14h7v8l10-12h-7V2z" fill="#007BFF"/></svg>
            } />

            <ServiceCard title="Plomero" icon={
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 3h12v6H6z" fill="#007BFF"/><path d="M4 9v6h16V9" fill="#4DA8FF"/></svg>
            } />

            <ServiceCard title="Jardinero" icon={
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C10 6 6 9 6 12a6 6 0 0012 0c0-3-4-6-6-10z" fill="#007BFF"/></svg>
            } />

            <ServiceCard title="Diseñador" icon={
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="8" r="3" fill="#007BFF"/><path d="M5 20c1-4 6-6 7-6s6 2 7 6H5z" fill="#4DA8FF"/></svg>
            } />
          </div>

          <div className="mt-6">
            <a href="#reserve" className="inline-block bg-white border border-blue-600 text-blue-600 px-4 py-2 rounded-md font-medium">Ver todos los servicios</a>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="py-12 bg-gray-50 rounded-xl p-6">
          <div className="max-w-4xl">
            <h3 className="text-2xl font-bold">Cómo funciona</h3>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <StepCard number={1} title="Elige tu servicio" text="Selecciona la categoría y describe lo que necesitas." />
              <StepCard number={2} title="Reservamos un profesional" text="Recibirás confirmación con tiempo y precio estimado." />
              <StepCard number={3} title="Trabajo completado" text="Paga seguro dentro de la app y deja tu reseña." />
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-12">
          <h3 className="text-2xl font-bold">Beneficios</h3>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <FeatureCard title="Confiable" text="Profesionales verificados y reseñas reales." icon={
              <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="none"><path d="M12 2l3 6 6 .5-4.5 3 1 6L12 16l-5.5 1.5 1-6L3 8.5 9.5 8 12 2z" fill="#007BFF"/></svg>
            } />
            <FeatureCard title="Seguro" text="Pagos protegidos y garantía de servicio." icon={
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none"><path d="M12 2l6 4v6c0 5-4 9-6 10-2-1-6-5-6-10V6l6-4z" fill="#007BFF"/></svg>
            } />
            <FeatureCard title="Rápido" text="Reserva y confirma en minutos." icon={
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none"><path d="M12 2v6l4 2" fill="#007BFF"/></svg>
            } />
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-12 bg-white">
          <h3 className="text-2xl font-bold">Testimonios</h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Testimonial name="Claudia" city="Antofagasta" text="Pedí un plomero y en menos de 30 minutos tenía la visita confirmada. Súper confiable." />
            <Testimonial name="Carlos" city="Santiago" text="Me solucionaron la instalación eléctrica de mi casa en un día. Recomendado." />
            <Testimonial name="María" city="Valparaíso" text="El jardinero dejó mi patio perfecto. Buen servicio y puntualidad." />
          </div>
        </section>

        {/* CTA */}
        <section id="reserve" className="mt-12 rounded-xl py-10 px-6 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold">Miles de personas ya confían en ProCerca. ¿Y tú?</h3>
            <p className="mt-3 text-sm opacity-90">Reserva ahora y recibe confirmación en minutos.</p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <a href="https://forms.gle/" target="_blank" rel="noreferrer" className="bg-white text-blue-600 px-5 py-3 rounded-md font-semibold">Solicitar servicio</a>
              <a href="#how" className="text-white underline">Cómo funciona</a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="mt-12 border-t border-gray-100 py-8">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start justify-between gap-6">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-md bg-blue-600 flex items-center justify-center text-white">📍</div>
                <div>
                  <div className="font-semibold">ProCerca</div>
                  <div className="text-sm text-gray-500">Profesionales confiables, cerca de ti</div>
                </div>
              </div>

              <div className="mt-4 text-sm text-gray-600">contacto@procerca.com<br/>+56 9 9XXXXXXX</div>
            </div>

            <div className="flex-1">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                <div>
                  <div className="font-semibold">Enlaces</div>
                  <ul className="mt-2 space-y-2 text-gray-600">
                    <li><a href="#services" className="hover:text-blue-600">Servicios</a></li>
                    <li><a href="#how" className="hover:text-blue-600">Cómo funciona</a></li>
                    <li><a href="#testimonials" className="hover:text-blue-600">Testimonios</a></li>
                    <li><a href="#contact" className="hover:text-blue-600">Contacto</a></li>
                  </ul>
                </div>
                <div>
                  <div className="font-semibold">Síguenos</div>
                  <ul className="mt-2 space-y-2 text-gray-600">
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>LinkedIn</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-sm text-gray-400">© {new Date().getFullYear()} ProCerca. Todos los derechos reservados.</div>
          </div>
        </footer>
      </main>

    </div>
  )
}


/* ----------------- Helper Components ----------------- */

function ServiceCard({ title, icon }){
  return (
    <div className="p-4 bg-white rounded-lg shadow-sm flex flex-col items-center text-center">
      <div className="p-3 rounded-full bg-blue-50 mb-3">{icon}</div>
      <div className="font-medium text-gray-800">{title}</div>
    </div>
  )
}

function StepCard({ number, title, text }){
  return (
    <div className="p-4 bg-white rounded-lg shadow-sm">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center font-semibold text-blue-600">{number}</div>
        <div>
          <div className="font-semibold">{title}</div>
          <div className="text-sm text-gray-500">{text}</div>
        </div>
      </div>
    </div>
  )
}

function FeatureCard({ title, text, icon }){
  return (
    <div className="p-4 bg-white rounded-lg shadow-sm flex items-start gap-4">
      <div className="p-2 rounded-md bg-blue-50">{icon}</div>
      <div>
        <div className="font-semibold">{title}</div>
        <div className="text-sm text-gray-500">{text}</div>
      </div>
    </div>
  )
}

function Testimonial({ name, city, text }){
  return (
    <div className="p-4 bg-white rounded-lg shadow-sm">
      <div className="flex items-start gap-3">
        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">{name.charAt(0)}</div>
        <div>
          <div className="font-semibold">{name} <span className="text-xs text-gray-400">· {city}</span></div>
          <div className="text-sm text-gray-600 mt-2">"{text}"</div>
        </div>
      </div>
    </div>
  )
}
