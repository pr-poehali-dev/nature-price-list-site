import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const { toast } = useToast();

  const products = [
    {
      name: 'Свинина',
      price: '180₽/100гр',
      description: 'Свежая охлажденная свинина высшего качества',
      icon: 'Beef'
    },
    {
      name: 'Говядина',
      price: '220₽/100гр',
      description: 'Мраморная говядина отборных сортов',
      icon: 'Beef'
    },
    {
      name: 'Конина',
      price: '250₽/100гр',
      description: 'Диетическое мясо конины премиум класса',
      icon: 'Beef'
    },
    {
      name: 'Баранина',
      price: '270₽/100гр',
      description: 'Нежная баранина домашнего разведения',
      icon: 'Beef'
    }
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Сообщение отправлено",
      description: "Мы свяжемся с вами в ближайшее время!",
    });
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
              <span className="text-2xl font-bold text-primary-foreground">Ласунак</span>
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
              Ласунак
            </h1>
            <p className="text-2xl text-muted-foreground font-light">
              Сыровяленый. Только мясо и специи
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
            <CardContent className="pt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shrink-0">
                  <Icon name="Award" className="text-primary-foreground" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-2">Традиции качества</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Более 35 лет мы производим колбасные изделия высшего качества. Используем только 
                    натуральное мясо и специи, без искусственных добавок и консервантов.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shrink-0">
                  <Icon name="ShieldCheck" className="text-primary-foreground" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-2">Натуральный состав</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Только мясо, соль и специи. Никаких ароматизаторов, усилителей вкуса и 
                    красителей. Вся продукция имеет необходимые сертификаты качества.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shrink-0">
                  <Icon name="Truck" className="text-primary-foreground" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-2">Свежее производство</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Производим продукцию небольшими партиями, что гарантирует свежесть каждой колбасы. 
                    Доставка в день заказа с соблюдением температурного режима.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-card/50">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-black text-secondary mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground">Свяжитесь с нами любым удобным способом</p>
          </div>
          
          <div className="grid gap-6 mb-12">
            <Card className="border-2 border-muted">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="Phone" className="text-primary-foreground" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Телефон</p>
                    <p className="text-xl font-bold text-secondary">+7 939 453 9212</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-muted">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="Send" className="text-primary-foreground" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Telegram для заказа</p>
                    <a href="https://t.me/fromNature7" target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-primary hover:text-primary/80 transition-colors">
                      @fromNature7
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-muted">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="MapPin" className="text-primary-foreground" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Адрес</p>
                    <p className="text-xl font-bold text-secondary">г. Краснодар</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-2 border-muted shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-secondary">Напишите нам</CardTitle>
              <CardDescription>Мы ответим в течение 24 часов</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input 
                    placeholder="Ваше имя" 
                    required 
                    className="border-2 border-muted focus:border-primary"
                  />
                </div>
                <div>
                  <Input 
                    type="email" 
                    placeholder="Email" 
                    required 
                    className="border-2 border-muted focus:border-primary"
                  />
                </div>
                <div>
                  <Input 
                    type="tel" 
                    placeholder="Телефон" 
                    className="border-2 border-muted focus:border-primary"
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Ваше сообщение" 
                    required 
                    rows={5}
                    className="border-2 border-muted focus:border-primary"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" 
                  size="lg"
                >
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-secondary py-8 px-6 border-t-2 border-primary/20">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <Icon name="ChefHat" className="text-primary-foreground" size={20} />
            </div>
            <span className="text-xl font-bold text-primary-foreground">Ласунак</span>
          </div>
          <p className="text-primary-foreground/80">
            © 2024 Ласунак. Все права защищены.
          </p>
          <p className="text-primary-foreground/60 text-sm mt-2">
            Сыровяленый. Только мясо и специи
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;