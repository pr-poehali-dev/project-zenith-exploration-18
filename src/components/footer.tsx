import Icon from "@/components/ui/icon"

export function Footer() {
  return (
    <footer className="bg-black border-t border-red-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-orbitron text-2xl font-bold text-white mb-4">
              Строй<span className="text-red-500">Грей</span>
            </h2>
            <p className="font-space-mono text-gray-300 mb-2 max-w-md">
              Строительство и ремонт в Новосибирске и области. Работаем с 2016 года.
            </p>
            <p className="font-space-mono text-gray-300 mb-6 max-w-md">
              Для частных лиц и застройщиков. Официальный договор, фиксированная смета, гарантия.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Icon name="Phone" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Icon name="Mail" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Icon name="MessageCircle" size={20} />
              </a>
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