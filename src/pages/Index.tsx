import Icon from '@/components/ui/icon';

const Index = () => {
  const products = [
    { name: 'Свинина', price: '180₽/100гр' },
    { name: 'Говядина', price: '220₽/100гр' },
    { name: 'Конина', price: '250₽/100гр' },
    { name: 'Баранина', price: '270₽/100гр' }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/files/68b4c790-5fda-4904-b77e-57a0126a8d49.png)',
          filter: 'blur(8px)',
          transform: 'scale(1.1)'
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-br from-[#8B8556]/90 via-[#8B8556]/85 to-[#6B6333]/90" />
      
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-12">
        <div className="max-w-2xl w-full">
          <div className="text-center mb-12">
            <div className="mb-8 flex justify-center">
              <div className="w-32 h-32 bg-[#2C2416] rounded-full flex items-center justify-center shadow-2xl border-4 border-[#3A2F1A]">
                <Icon name="ChefHat" className="text-[#8B8556]" size={64} />
              </div>
            </div>
            
            <h1 className="text-6xl font-black text-[#2C2416] mb-4 tracking-tight">
              Вкус от природы
            </h1>
            
            <div className="w-full h-1 bg-[#2C2416] mb-12" />
          </div>

          <div className="bg-[#A39B6E]/30 backdrop-blur-sm border-4 border-[#2C2416] shadow-2xl p-8 rounded-lg">
            <div className="flex items-start justify-between mb-8 pb-4 border-b-2 border-[#2C2416]">
              <h2 className="text-4xl font-bold text-[#2C2416] tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>
                Продукт:
              </h2>
              <h2 className="text-4xl font-bold text-[#2C2416] tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>
                Цена:
              </h2>
            </div>

            <div className="space-y-8">
              {products.map((product, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between py-4 border-b border-[#2C2416]/30 hover:bg-[#2C2416]/10 transition-colors px-4 rounded"
                >
                  <span className="text-4xl font-bold text-[#2C2416]" style={{ fontFamily: 'Georgia, serif' }}>
                    {product.name}
                  </span>
                  <span className="text-4xl font-bold text-[#2C2416]" style={{ fontFamily: 'Georgia, serif' }}>
                    {product.price}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block bg-[#D4C5A0] px-8 py-6 rounded-lg shadow-2xl border-4 border-[#2C2416] transform -rotate-2 hover:rotate-0 transition-transform">
              <p className="text-5xl font-black text-[#2C2416] mb-2" style={{ fontFamily: 'Impact, sans-serif', letterSpacing: '0.05em' }}>
                PRICE
              </p>
              <p className="text-5xl font-black text-[#2C2416]" style={{ fontFamily: 'Impact, sans-serif', letterSpacing: '0.1em' }}>
                LIST
              </p>
            </div>
          </div>

          <div className="mt-12 text-center space-y-4">
            <a 
              href="https://t.me/fromNature7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#2C2416] hover:bg-[#3A2F1A] text-[#D4C5A0] px-8 py-4 rounded-lg shadow-xl transition-colors text-xl font-bold"
            >
              <Icon name="Send" size={24} />
              Заказать в Telegram
            </a>
            <p className="text-lg text-[#2C2416] font-bold">
              Телефон: <a href="tel:+79394539212" className="hover:text-[#3A2F1A] transition-colors">+7 939 453 9212</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
