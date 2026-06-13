import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Обращение и замер",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Оставляете заявку — специалист приезжает в удобное время, оценивает объём работ,
            отвечает на вопросы и составляет детальную смету. Бесплатно и без обязательств.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Выезд на объект в любой день
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Детальный расчёт стоимости
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Консультация по материалам и срокам
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Договор и смета",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Фиксируем цену и сроки в договоре до старта работ. Никаких устных договорённостей —
            всё прописано и защищает обе стороны. Для юрлиц — полный пакет закрывающих документов.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Фиксированная цена без скрытых платежей
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Официальный договор с ООО
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Акты, счета и чеки для бухгалтерии
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Работы и сдача объекта",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Личный прораб контролирует каждый этап. Скрытые работы фиксируются на фото.
            Сдаём объект в срок и с гарантией, прописанной в договоре.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Личный прораб на объекте
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Соответствие СНиП, СП, ГОСТ
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Гарантия на все виды работ
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="works" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Как мы работаем</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Простой и прозрачный процесс от первого звонка до сдачи объекта —
            без сюрпризов и лишних согласований.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}