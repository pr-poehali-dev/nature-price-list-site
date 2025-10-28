import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const { toast } = useToast();

  const products = [
    {
      name: 'Свинина',
      price: '180₽/100гр',
      description: 'Отличное колбасное изделие из свинины высшего сорта',
      icon: 'Pizza'
    },
    {
      name: 'Говядина',
      price: '220₽/100гр',
      description: 'Отличное колбасное изделие из мраморной говядины',
      icon: 'Pizza'
    },
    {
      name: 'Конина',
      price: '250₽/100гр',
      description: 'Отличное колбасное изделие из диетического мяса конины',
      icon: 'Pizza'
    },
    {
      name: 'Баранина',
      price: '270₽/100гр',
      description: 'Отличное колбасное изделие из нежной баранины',
      icon: 'Pizza'
    }
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/10 to-background">
      <nav className="fixed top-0 w-full bg-secondary/95 backdrop-blur-sm shadow-lg z-50 border-b-2 border-primary/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <Icon name="ChefHat" className="text-primary-foreground" size={24} />
              </div>
              <span className="text-2xl font-bold text-primary-foreground">Вкус от природы</span>
            </div>
            <div className="hidden md:flex gap-8">
              {['home', 'price', 'about', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-primary-foreground hover:text-accent transition-colors font-medium ${
                    activeSection === section ? 'text-accent' : ''
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'price' && 'Прайс-лист'}
                  {section === 'about' && 'О компании'}
                  {section === 'contact' && 'Контакты'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="w-32 h-32 mx-auto bg-primary rounded-full flex items-center justify-center shadow-2xl border-4 border-accent">
              <Icon name="ChefHat" className="text-primary-foreground" size={64} />
            </div>
            <h1 className="text-6xl font-black text-secondary leading-tight">
              Вкус от природы
            </h1>
            <p className="text-3xl text-secondary font-bold mb-2">
              Ласунак сыровяленый
            </p>
            <p className="text-2xl text-muted-foreground font-light">
              Только мясо и специи
            </p>
            <div className="flex gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('price')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
              >
                Посмотреть прайс
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="price" className="py-20 px-6 bg-card/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-secondary mb-4">Прайс-лист</h2>
            <p className="text-xl text-muted-foreground">Актуальные цены на нашу продукцию</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {products.map((product, index) => (
              <Card 
                key={index} 
                className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card border-2 border-muted"
              >
                <CardHeader className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center">
                    <Icon name={product.icon} className="text-secondary" size={40} />
                  </div>
                  <CardTitle className="text-2xl text-secondary">{product.name}</CardTitle>
                  <CardDescription className="text-lg font-bold text-primary">
                    {product.price}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-black text-secondary mb-4">О компании</h2>
          </div>
          <Card className="border-2 border-muted shadow-xl">
            <CardContent className="pt-8 space-y-8">
              <div className="text-center mb-6">
                <h3 className="text-3xl font-black text-secondary mb-4">Вкус, Рожденный Традициями и Страстью</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  В сердце «Вкус от природы» лежит непоколебимая вера: истинное наслаждение рождается из чистоты ингредиентов, 
                  безупречного качества и безграничного терпения. Наша история — это дань вековым белорусским рецептам и страстному 
                  стремлению дарить вам продукт, который вызывает истинную гордость и восхищение.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shrink-0">
                  <Icon name="Sparkles" className="text-primary-foreground" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-2">Искусство Создания</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Мы подходим к созданию сыровяленых деликатесов как к искусству. Каждый наш продукт начинается с отборного мяса 
                    высшего сорта, тщательно подобранного у проверенных поставщиков. Его дополняют изысканные, 100% натуральные специи, 
                    бережно отобранные и мастерски сбалансированные.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shrink-0">
                  <Icon name="Clock" className="text-primary-foreground" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-2">Вековые Традиции</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Весь секрет непревзойденного вкуса кроется в медленном сыровялении по старинным технологиям, где время и природа 
                    творят волшебство, раскрывая каждый нюанс аромата и текстуры. Мы контролируем каждый этап, от фермы до вашей тарелки.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shrink-0">
                  <Icon name="Heart" className="text-primary-foreground" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-2">Для Истинных Гурманов</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Наша миссия – сделать так, чтобы каждое ваше мгновение с нашими изделиями было наполнено подлинным вкусом, 
                    который не оставит равнодушным даже самого требовательного гурмана. Мы гордимся каждым кусочком, 
                    который выходит из наших рук, и приглашаем вас испытать это чудо.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-card/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-black text-secondary mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground">Свяжитесь с нами любым удобным способом</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center border-2 border-muted hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center">
                  <Icon name="Phone" className="text-primary-foreground" size={32} />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">Телефон</h3>
                <a href="tel:+79394539212" className="text-primary hover:text-primary/80 font-medium text-lg">
                  +7 939 453 9212
                </a>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-muted hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center">
                  <Icon name="Send" className="text-primary-foreground" size={32} />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">Telegram</h3>
                <a 
                  href="https://t.me/fromNature7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 font-medium text-lg"
                >
                  @fromNature7
                </a>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-muted hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center">
                  <Icon name="MapPin" className="text-primary-foreground" size={32} />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">Адрес</h3>
                <p className="text-muted-foreground text-lg">
                  Краснодарский край<br/>г. Краснодар
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-2 border-muted shadow-xl bg-gradient-to-br from-primary/5 to-accent/10">
            <CardContent className="pt-8 pb-8">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 mx-auto bg-primary rounded-full flex items-center justify-center shadow-lg">
                  <Icon name="Send" className="text-primary-foreground" size={40} />
                </div>
                <div>
                  <h3 className="text-3xl font-black text-secondary mb-2">Быстрый заказ</h3>
                  <p className="text-muted-foreground text-lg">
                    Свяжитесь с нами в Telegram для оформления заказа
                  </p>
                </div>
                <a 
                  href="https://t.me/fromNature7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button 
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all text-lg px-8 py-6"
                  >
                    <Icon name="Send" className="mr-2" size={24} />
                    Заказать в Telegram
                  </Button>
                </a>
                <p className="text-sm text-muted-foreground">
                  Или позвоните по телефону: <a href="tel:+79394539212" className="font-bold text-primary hover:text-primary/80">+7 939 453 9212</a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-secondary text-primary-foreground py-12 px-6">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <Icon name="ChefHat" className="text-primary-foreground" size={20} />
            </div>
            <span className="text-xl font-bold">Вкус от природы</span>
          </div>
          <p className="text-primary-foreground/80 mb-4">
            Сыровяленые деликатесы высшего качества
          </p>
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Вкус от природы. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;