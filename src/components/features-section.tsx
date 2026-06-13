import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

const features = [
  {
    title: "Официальный статус",
    description: "Работаем как ООО — заключаем договор, предоставляем акты, счета, чеки. Для юрлиц — полный пакет для бухгалтерии.",
    icon: "FileCheck",
    badge: "ООО",
  },
  {
    title: "Опыт более 8 лет",
    description: "Стабильно на рынке с 2016 года. Сотни выполненных объектов — от квартир до крупных застройщиков.",
    icon: "Award",
    badge: "С 2016",
  },
  {
    title: "Фиксированная смета",
    description: "Цена утверждается до начала работ. Никаких скрытых платежей и необоснованного удорожания.",
    icon: "Calculator",
    badge: "Гарантия",
  },
  {
    title: "Соблюдение сроков",
    description: "График работ прописывается в договоре и строго контролируется. Задержки — исключение, а не правило.",
    icon: "Clock",
    badge: "В срок",
  },
  {
    title: "Контроль качества",
    description: "Личный прораб на объекте, поэтапная приёмка, фотофиксация скрытых работ на каждом этапе.",
    icon: "ShieldCheck",
    badge: "Контроль",
  },
  {
    title: "Работа по нормам",
    description: "Все работы соответствуют СНиП, СП, ГОСТ. Профессиональный подход, а не гаражный.",
    icon: "ClipboardCheck",
    badge: "ГОСТ",
  },
]

export function FeaturesSection() {
  return (
    <section id="advantages" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Почему выбирают СтройГрей</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            8 лет на рынке, сотни довольных клиентов — частных и корпоративных
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Icon name={feature.icon} size={32} className="text-red-500" fallback="Star" />
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}