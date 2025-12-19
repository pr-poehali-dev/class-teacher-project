import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-primary">Курганская С.А.</h1>
            <div className="hidden md:flex gap-6">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'about', label: 'Обо мне' },
                { id: 'achievements', label: 'Достижения' },
                { id: 'gallery', label: 'Галерея' },
                { id: 'contact', label: 'Контакты' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-gray-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center animate-fade-in">
          <div className="mb-8">
            <img 
              src="https://cdn.poehali.dev/files/IMG_6885.jpeg" 
              alt="Курганская Софья Алексеевна" 
              className="w-48 h-48 mx-auto rounded-full object-cover shadow-xl ring-4 ring-primary/20"
            />
          </div>
          <h2 className="text-5xl font-bold text-gray-800 mb-4">
            Курганская Софья Алексеевна
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Учитель начальных классов
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Создаю комфортную образовательную среду, где каждый ребёнок раскрывает свой потенциал
            и получает радость от обучения
          </p>
          <Button
            onClick={() => scrollToSection('contact')}
            className="mt-8 px-8 py-6 text-lg transition-transform hover:scale-105"
          >
            Связаться со мной
          </Button>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-white/50">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h3 className="text-4xl font-bold text-gray-800 mb-12 text-center">Обо мне</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 transition-transform hover:scale-105">
              <Icon name="BookOpen" size={40} className="text-primary mb-4" />
              <h4 className="text-xl font-semibold mb-3">Образование</h4>
              <p className="text-gray-600 leading-relaxed">
                Высшее педагогическое образование по специальности "Педагогика и методика
                начального образования"
              </p>
            </Card>
            <Card className="p-6 transition-transform hover:scale-105">
              <Icon name="Award" size={40} className="text-primary mb-4" />
              <h4 className="text-xl font-semibold mb-3">Квалификация</h4>
              <p className="text-gray-600 leading-relaxed">
                Первая квалификационная категория, регулярное повышение квалификации и участие в
                профессиональных конкурсах
              </p>
            </Card>
            <Card className="p-6 transition-transform hover:scale-105">
              <Icon name="Users" size={40} className="text-primary mb-4" />
              <h4 className="text-xl font-semibold mb-3">Опыт работы</h4>
              <p className="text-gray-600 leading-relaxed">
                Более 8 лет работы с детьми младшего школьного возраста, индивидуальный подход к
                каждому ученику
              </p>
            </Card>
            <Card className="p-6 transition-transform hover:scale-105">
              <Icon name="Heart" size={40} className="text-primary mb-4" />
              <h4 className="text-xl font-semibold mb-3">Философия</h4>
              <p className="text-gray-600 leading-relaxed">
                Верю, что каждый ребёнок уникален и талантлив. Моя задача — помочь раскрыть эти
                таланты и вдохновить на познание
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="achievements" className="py-20 px-6">
        <div className="max-w-6xl mx-auto animate-fade-in">
          <h3 className="text-4xl font-bold text-gray-800 mb-12 text-center">Достижения</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: 'Trophy',
                title: 'Победитель конкурса',
                description: '"Учитель года" районного этапа 2023'
              },
              {
                icon: 'Star',
                title: 'Благодарность',
                description: 'От Департамента образования за вклад в развитие образования'
              },
              {
                icon: 'Award',
                title: 'Призёры олимпиад',
                description: '15 учеников стали призёрами городских олимпиад'
              },
              {
                icon: 'BookCheck',
                title: 'Авторская методика',
                description: 'Разработка инновационной программы по литературному чтению'
              },
              {
                icon: 'Medal',
                title: 'Грамота',
                description: 'За подготовку участников всероссийских конкурсов'
              },
              {
                icon: 'Sparkles',
                title: 'Проектная работа',
                description: 'Реализация 20+ образовательных проектов с учениками'
              }
            ].map((achievement, index) => (
              <Card key={index} className="p-6 text-center transition-transform hover:scale-105">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name={achievement.icon} size={32} className="text-primary" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{achievement.title}</h4>
                <p className="text-gray-600 text-sm">{achievement.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-6 bg-white/50">
        <div className="max-w-6xl mx-auto animate-fade-in">
          <h3 className="text-4xl font-bold text-gray-800 mb-12 text-center">Галерея</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="overflow-hidden transition-transform hover:scale-105 cursor-pointer group">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/files/IMG_6869.jpeg" 
                  alt="Творческая работа ученика" 
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              </div>
              <div className="p-4">
                <span className="text-xs text-primary font-medium">Творчество</span>
                <h4 className="text-lg font-semibold mt-1">Лепка из пластилина</h4>
              </div>
            </Card>
            {[
              { title: 'День знаний', category: 'Мероприятия' },
              { title: 'Открытый урок', category: 'Обучение' },
              { title: 'Конкурс чтецов', category: 'Конкурсы' },
              { title: 'Проектная работа', category: 'Проекты' },
              { title: 'Экскурсия в музей', category: 'Мероприятия' }
            ].map((item, index) => (
              <Card key={index} className="overflow-hidden transition-transform hover:scale-105 cursor-pointer group">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-purple-200 flex items-center justify-center relative">
                  <Icon
                    name="Image"
                    size={48}
                    className="text-primary/40 transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>
                <div className="p-4">
                  <span className="text-xs text-primary font-medium">{item.category}</span>
                  <h4 className="text-lg font-semibold mt-1">{item.title}</h4>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h3 className="text-4xl font-bold text-gray-800 mb-12 text-center">Контакты</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-2xl font-semibold mb-6">Свяжитесь со мной</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="Mail" size={24} className="text-primary mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">kurganskaya.teacher@school.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Phone" size={24} className="text-primary mt-1" />
                  <div>
                    <p className="font-medium">Телефон</p>
                    <p className="text-gray-600">+7 (XXX) XXX-XX-XX</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" size={24} className="text-primary mt-1" />
                  <div>
                    <p className="font-medium">Школа</p>
                    <p className="text-gray-600">МБОУ "Школа №...</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Clock" size={24} className="text-primary mt-1" />
                  <div>
                    <p className="font-medium">Время для связи</p>
                    <p className="text-gray-600">Пн-Пт: 14:00 - 17:00</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-6">
              <h4 className="text-xl font-semibold mb-4">Форма обратной связи</h4>
              {isSubmitted ? (
                <div className="text-center py-8 animate-scale-in">
                  <Icon name="CheckCircle" size={48} className="text-green-500 mx-auto mb-4" />
                  <p className="text-lg font-medium text-green-600">Сообщение отправлено!</p>
                  <p className="text-gray-600 mt-2">Свяжусь с вами в ближайшее время</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Имя</label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="example@mail.ru"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Сообщение</label>
                    <Textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Ваше сообщение..."
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Отправить сообщение
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Курганская Софья Алексеевна. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;