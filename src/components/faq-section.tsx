import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Сколько стоит выезд специалиста на замер?",
      answer:
        "Выезд на замер и консультация — бесплатно. Специалист приедет в удобное вам время, оценит объём работ и составит детальную смету без каких-либо обязательств с вашей стороны.",
    },
    {
      question: "Может ли цена вырасти в процессе работ?",
      answer:
        "Нет. Стоимость фиксируется в смете до начала работ и прописывается в договоре. Никаких скрытых платежей и необоснованного удорожания — цена не изменится.",
    },
    {
      question: "Работаете ли вы с юридическими лицами?",
      answer:
        "Да. Мы работаем как ООО и предоставляем полный пакет закрывающих документов: договор, акты выполненных работ, счета и чеки. Всё необходимое для бухгалтерии.",
    },
    {
      question: "Как контролируется качество работ?",
      answer:
        "На объекте работает личный прораб, который контролирует каждый этап. Скрытые работы фиксируются на фото. Поэтапная приёмка позволяет видеть ход работ в режиме реального времени.",
    },
    {
      question: "Есть ли гарантия на выполненные работы?",
      answer:
        "Да, гарантийные обязательства прописаны в договоре. При возникновении вопросов после сдачи объекта — устраняем за свой счёт.",
    },
    {
      question: "Работаете ли вы в пригороде Новосибирска?",
      answer:
        "Да, работаем во всех районах Новосибирска и в пригороде. Наценок за выезд нет — стоимость работ не зависит от удалённости объекта.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Отвечаем на самые популярные вопросы о работе, стоимости и гарантиях.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}