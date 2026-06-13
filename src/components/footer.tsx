import Icon from "@/components/ui/icon"

export function Footer() {
  return (
    <footer className="bg-black border-t border-red-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <img
              src="https://cdn.poehali.dev/projects/63046c27-a9ca-47f8-936d-0a1da38c83de/bucket/b9709859-f173-404c-bbba-66d6fbf50170.jpeg"
              alt="СтройГрей"
              className="h-12 w-auto mb-4 mix-blend-lighten"
            />
            <p className="font-space-mono text-gray-300 mb-2 max-w-md">
              Строительство и ремонт в Новосибирске и области. Работаем с 2016 года.
            </p>
            <p className="font-space-mono text-gray-300 mb-6 max-w-md">
              Для частных лиц и застройщиков. Официальный договор, фиксированная смета, гарантия.
            </p>
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2">
                <Icon name="Phone" size={16} className="text-red-500 flex-shrink-0" />
                <div>
                  <a href="tel:+79607970002" className="font-space-mono text-white hover:text-red-500 transition-colors text-sm">+7 (960) 797-00-02</a>
                  <span className="font-space-mono text-gray-500 text-xs ml-2">Главный прораб</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Phone" size={16} className="text-red-500 flex-shrink-0" />
                <div>
                  <a href="tel:+79665060002" className="font-space-mono text-white hover:text-red-500 transition-colors text-sm">+7 (966) 506-00-02</a>
                  <span className="font-space-mono text-gray-500 text-xs ml-2">Получить информацию</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Mail" size={16} className="text-red-500 flex-shrink-0" />
                <a href="mailto:stroygrey@mail.ru" className="font-space-mono text-white hover:text-red-500 transition-colors text-sm">stroygrey@mail.ru</a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#advantages"
                  className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  Преимущества
                </a>
              </li>
              <li>
                <a
                  href="#works"
                  className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  Как работаем
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  Вопросы
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Компания</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  О компании
                </a>
              </li>
              <li>
                <a href="#" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Наши объекты
                </a>
              </li>
              <li>
                <a href="#" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Контакты
                </a>
              </li>
              <li>
                <a href="#" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Новосибирск и область
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-red-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-space-mono text-gray-400 text-sm">© 2026 СтройГрей. Все права защищены.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="font-space-mono text-gray-400 hover:text-red-500 text-sm transition-colors duration-200"
              >
                Политика конфиденциальности
              </a>
              <a
                href="#"
                className="font-space-mono text-gray-400 hover:text-red-500 text-sm transition-colors duration-200"
              >
                Договор оферты
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}