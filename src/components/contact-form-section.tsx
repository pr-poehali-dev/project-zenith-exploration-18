import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Icon from "@/components/ui/icon"

export function ContactFormSection() {
  const [form, setForm] = useState({ name: "", phone: "", address: "", comment: "" })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 800))
    setLoading(false)
    setSent(true)
  }

  return (
    <section id="contact" className="py-24 px-6 bg-background">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Бесплатный выезд на замер</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Оставьте заявку — специалист приедет в удобное время, оценит объём и составит смету. Без оплаты.
          </p>
        </div>

        {sent ? (
          <div className="glow-border rounded-2xl p-12 text-center">
            <div className="flex justify-center mb-4">
              <Icon name="CheckCircle" size={56} className="text-red-500" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Заявка принята!</h3>
            <p className="text-muted-foreground">Наш специалист свяжется с вами в ближайшее время.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="glow-border rounded-2xl p-8 space-y-5">
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1.5">Ваше имя</label>
              <Input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Иван Иванов"
                required
                className="bg-card border-red-500/20 text-foreground placeholder:text-muted-foreground focus:border-red-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1.5">Телефон</label>
              <Input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+7 (999) 000-00-00"
                required
                type="tel"
                className="bg-card border-red-500/20 text-foreground placeholder:text-muted-foreground focus:border-red-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1.5">Адрес объекта</label>
              <Input
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="Новосибирск, ул. Примерная, д. 1"
                className="bg-card border-red-500/20 text-foreground placeholder:text-muted-foreground focus:border-red-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1.5">Комментарий (необязательно)</label>
              <Textarea
                name="comment"
                value={form.comment}
                onChange={handleChange}
                placeholder="Опишите кратко объём работ или вопросы"
                rows={3}
                className="bg-card border-red-500/20 text-foreground placeholder:text-muted-foreground focus:border-red-500 resize-none"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              disabled={loading}
              className="w-full bg-red-500 hover:bg-red-600 text-white text-lg py-6 border-0"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <Icon name="Loader2" size={20} className="animate-spin" />
                  Отправляем...
                </span>
              ) : (
                "Записаться на бесплатный замер"
              )}
            </Button>
            <p className="text-center text-xs text-muted-foreground">
              Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
