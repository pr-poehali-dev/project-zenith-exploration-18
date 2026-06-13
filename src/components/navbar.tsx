import { useState } from "react"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] bg-black/95 backdrop-blur-md border-b border-red-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="https://cdn.poehali.dev/projects/63046c27-a9ca-47f8-936d-0a1da38c83de/bucket/b9709859-f173-404c-bbba-66d6fbf50170.jpeg"
              alt="СтройГрей"
              className="h-10 w-auto rounded-md"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#advantages"
                className="font-geist text-white hover:text-red-500 transition-colors duration-200"
              >
                Преимущества
              </a>
              <a href="#works" className="font-geist text-white hover:text-red-500 transition-colors duration-200">
                Как работаем
              </a>
              <a href="#faq" className="font-geist text-white hover:text-red-500 transition-colors duration-200">
                Вопросы
              </a>
            </div>
          </div>

          {/* Phones + CTA */}
          <div className="hidden md:flex items-center gap-6">
            <div className="text-right">
              <a href="tel:+79607970002" className="block font-geist text-white hover:text-red-500 transition-colors text-sm font-semibold">+7 (960) 797-00-02</a>
              <span className="block font-geist text-gray-400 text-xs">Главный прораб</span>
            </div>
            <div className="text-right">
              <a href="tel:+79665060002" className="block font-geist text-white hover:text-red-500 transition-colors text-sm font-semibold">+7 (966) 506-00-02</a>
              <span className="block font-geist text-gray-400 text-xs">Получить информацию</span>
            </div>
            <Button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})} className="bg-red-500 hover:bg-red-600 text-white font-geist border-0">Получить смету</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-red-500 transition-colors duration-200"
            >
              {isOpen ? <Icon name="X" size={24} /> : <Icon name="Menu" size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/98 border-t border-red-500/20">
              <a
                href="#advantages"
                className="block px-3 py-2 font-geist text-white hover:text-red-500 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Преимущества
              </a>
              <a
                href="#works"
                className="block px-3 py-2 font-geist text-white hover:text-red-500 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Как работаем
              </a>
              <a
                href="#faq"
                className="block px-3 py-2 font-geist text-white hover:text-red-500 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Вопросы
              </a>
              <div className="px-3 py-2 space-y-1">
                <a href="tel:+79607970002" className="block font-geist text-white text-sm font-semibold">+7 (960) 797-00-02 <span className="text-gray-400 font-normal">— Главный прораб</span></a>
                <a href="tel:+79665060002" className="block font-geist text-white text-sm font-semibold">+7 (966) 506-00-02 <span className="text-gray-400 font-normal">— Получить информацию</span></a>
              </div>
              <div className="px-3 py-2">
                <Button onClick={() => { setIsOpen(false); document.getElementById('contact')?.scrollIntoView({behavior:'smooth'}) }} className="w-full bg-red-500 hover:bg-red-600 text-white font-geist border-0">
                  Получить смету
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}