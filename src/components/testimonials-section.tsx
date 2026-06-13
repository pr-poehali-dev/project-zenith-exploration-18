import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Андрей Соколов",
    role: "Частный заказчик, ремонт квартиры",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "Делали капитальный ремонт в трёшке. Всё чётко по смете — ни рубля сверху. Прораб был на связи каждый день. Сдали даже на 3 дня раньше срока.",
  },
  {
    name: "Ирина Малькова",
    role: "Руководитель отдела, ЖК «Сибирский»",
    avatar: "/professional-woman-scientist.png",
    content:
      "Сотрудничаем со СтройГрей как застройщик уже 4 года. Надёжный подрядчик: документы всегда в порядке, качество стабильное, сроки соблюдают.",
  },
  {
    name: "Михаил Герасимов",
    role: "Владелец частного дома",
    avatar: "/placeholder-user.jpg",
    content:
      "Обращался на отделку дома. Понравилось, что всё по договору и ГОСТ. Прораб лично показал скрытые работы с фотофиксацией. Рекомендую.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Что говорят заказчики</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Отзывы частных клиентов и профессиональных застройщиков Новосибирска
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}