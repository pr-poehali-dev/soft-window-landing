import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [calcData, setCalcData] = useState({
    width: "",
    height: "",
    material: "standard",
  });

  const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);

  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({
    type: "",
    size: "",
    installation: "",
  });

  const calculatePrice = () => {
    const width = parseFloat(calcData.width);
    const height = parseFloat(calcData.height);
    if (!width || !height) return;

    const area = width * height;
    let pricePerSqm = 450;

    if (calcData.material === "premium") pricePerSqm = 750;
    if (calcData.material === "exclusive") pricePerSqm = 1200;

    setCalculatedPrice(Math.round(area * pricePerSqm));
  };

  const quizQuestions = [
    {
      question: "Co chcesz zabezpieczyć?",
      options: [
        { label: "Altana ogrodowa", value: "gazebo", icon: "Home" },
        { label: "Taras", value: "terrace", icon: "Building" },
        { label: "Weranda restauracji", value: "restaurant", icon: "Coffee" },
        { label: "Balkon", value: "balcony", icon: "Building2" },
      ],
    },
    {
      question: "Jaki rozmiar powierzchni?",
      options: [
        { label: "Do 10 m²", value: "small", icon: "Minimize2" },
        { label: "10-20 m²", value: "medium", icon: "Square" },
        { label: "20-40 m²", value: "large", icon: "Maximize2" },
        { label: "Powyżej 40 m²", value: "xlarge", icon: "Expand" },
      ],
    },
    {
      question: "Kiedy potrzebujesz montażu?",
      options: [
        { label: "W ciągu tygodnia", value: "urgent", icon: "Zap" },
        { label: "W ciągu miesiąca", value: "normal", icon: "Calendar" },
        { label: "Bez pośpiechu", value: "flexible", icon: "Clock" },
      ],
    },
  ];

  const handleQuizAnswer = (field: string, value: string) => {
    setQuizAnswers({ ...quizAnswers, [field]: value });
    if (quizStep < quizQuestions.length - 1) {
      setQuizStep(quizStep + 1);
    }
  };

  const resetQuiz = () => {
    setQuizStep(0);
    setQuizAnswers({ type: "", size: "", installation: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const trustBenefits = [
    {
      icon: "Calendar",
      title: "Żywotność 10+ lat",
      description: "Gwarancja odporności na warunki pogodowe",
    },
    {
      icon: "Star",
      title: "Materiały premium",
      description: "Wybór kolorów, folia przezroczysta, moskitiery",
    },
    {
      icon: "Wrench",
      title: "Profesjonalny montaż",
      description: "Usługa pod klucz w jeden dzień",
    },
  ];

  const products = [
    {
      title: "Miękkie okna dla altany",
      description: "Ochrona przed wiatrem, deszczem i kurzem. Montaż na zamki i taśmę.",
      image: "https://cdn.poehali.dev/projects/0fb3d59f-1909-4ff9-a40c-f2972b1e388f/files/737c7d32-e6dc-4317-a6bb-353116f86fcc.jpg",
    },
    {
      title: "Osłona tarasu z PVC",
      description: "Grubość 700 mikronów. Pełna przezroczystość i izolacja termiczna.",
      image: "https://cdn.poehali.dev/projects/0fb3d59f-1909-4ff9-a40c-f2972b1e388f/files/a52742e7-3fa3-45a6-9388-f7e78d9f96d8.jpg",
    },
    {
      title: "Werandy restauracyjne",
      description: "Eleganckie rozwiązania dla lokali gastronomicznych. Montaż ekspresowy.",
      image: "https://cdn.poehali.dev/projects/0fb3d59f-1909-4ff9-a40c-f2972b1e388f/files/802a3a3e-176d-4454-a984-786e45a70617.jpg",
    },
  ];

  const advantages = [
    {
      icon: "Droplets",
      title: "100% wodoodporne",
      description: "Materiał nie przepuszcza wody i wilgoci",
    },
    {
      icon: "Wind",
      title: "Wytrzymałość na wiatr",
      description: "Testowane do prędkości 100 km/h",
    },
    {
      icon: "Sun",
      title: "Ochrona UV",
      description: "Filtr UV 99% - meble chronione przed blaknięciem",
    },
    {
      icon: "Snowflake",
      title: "Mrozoodporność",
      description: "Używaj przez cały rok, nawet przy -30°C",
    },
    {
      icon: "Zap",
      title: "Szybki montaż",
      description: "Instalacja w ciągu jednego dnia roboczego",
    },
    {
      icon: "Shield",
      title: "Gwarancja fabryczna",
      description: "5 lat pełnej gwarancji producenta",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Połączenie z nami",
      description: "Zadzwoń lub wypełnij formularz - odpowiadamy w 15 minut",
    },
    {
      step: "02",
      title: "Darmowy pomiar",
      description: "Wykwalifikowany specjalista przyjedzie w dogodnym terminie",
    },
    {
      step: "03",
      title: "Kalkulacja kosztów",
      description: "Przejrzysta wycena bez ukrytych opłat",
    },
    {
      step: "04",
      title: "Produkcja",
      description: "Własna produkcja fabryczna - kontrola jakości",
    },
    {
      step: "05",
      title: "Montaż",
      description: "Profesjonalna instalacja pod klucz w 1 dzień",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-primary">SoftWindows</div>
            <nav className="hidden lg:flex gap-8 items-center">
              <a href="#products" className="text-foreground hover:text-primary transition-colors">
                Miękkie okna
              </a>
              <a href="#gallery" className="text-foreground hover:text-primary transition-colors">
                Zdjęcia
              </a>
              <a href="#pricing" className="text-foreground hover:text-primary transition-colors">
                Poznaj koszt
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                Kontakty
              </a>
              <a href="tel:+48123456789" className="text-xl font-semibold text-primary">
                +48 123 456 789
              </a>
            </nav>
            <Button className="lg:hidden">Menu</Button>
          </div>
        </div>
      </header>

      <section className="pt-28 pb-16 px-4 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-destructive text-white px-4 py-2 text-base">
              Promocja ograniczona czasowo
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 leading-tight">
              Fabryczne miękkie okna pod klucz
            </h1>
            <p className="text-2xl text-accent mb-6 font-semibold">
              z oszczędnością do 1500 PLN
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Własna produkcja • Montaż w jeden dzień • Gwarancja 5 lat
            </p>
            <Button size="lg" className="text-lg px-10 py-6 rounded-full">
              <Icon name="Calculator" size={20} className="mr-2" />
              Poznaj koszt
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white border-y">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trustBenefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name={benefit.icon} size={28} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Nasze produkty
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            Profesjonalne rozwiązania dla domu, ogrodu i biznesu
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="group">
                <div className="overflow-hidden rounded-2xl mb-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                <p className="text-muted-foreground">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Dlaczego klienci wybierają nas?
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            6 kluczowych korzyści miękich okien
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {advantages.map((adv, index) => (
              <Card key={index} className="hover-scale">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={adv.icon} size={24} className="text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{adv.title}</h4>
                  <p className="text-muted-foreground text-sm">{adv.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-4">
            Kalkulator kosztów
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Oblicz orientacyjny koszt w 30 sekund
          </p>
          <Card className="shadow-xl">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Szerokość (m)</label>
                  <Input
                    type="number"
                    placeholder="3.5"
                    value={calcData.width}
                    onChange={(e) => setCalcData({ ...calcData, width: e.target.value })}
                    className="h-12"
                    step="0.1"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Wysokość (m)</label>
                  <Input
                    type="number"
                    placeholder="2.5"
                    value={calcData.height}
                    onChange={(e) => setCalcData({ ...calcData, height: e.target.value })}
                    className="h-12"
                    step="0.1"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium mb-3">Rodzaj materiału</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button
                    onClick={() => setCalcData({ ...calcData, material: "standard" })}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      calcData.material === "standard"
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div className="text-lg font-semibold">Standard</div>
                    <div className="text-sm text-muted-foreground">500 mikronów</div>
                    <div className="text-primary font-bold mt-2">450 PLN/m²</div>
                  </button>
                  <button
                    onClick={() => setCalcData({ ...calcData, material: "premium" })}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      calcData.material === "premium"
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div className="text-lg font-semibold">Premium</div>
                    <div className="text-sm text-muted-foreground">700 mikronów</div>
                    <div className="text-primary font-bold mt-2">750 PLN/m²</div>
                  </button>
                  <button
                    onClick={() => setCalcData({ ...calcData, material: "exclusive" })}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      calcData.material === "exclusive"
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div className="text-lg font-semibold">Exclusive</div>
                    <div className="text-sm text-muted-foreground">900 mikronów</div>
                    <div className="text-primary font-bold mt-2">1200 PLN/m²</div>
                  </button>
                </div>
              </div>
              <Button onClick={calculatePrice} size="lg" className="w-full mb-4">
                <Icon name="Calculator" size={20} className="mr-2" />
                Oblicz koszt
              </Button>
              {calculatedPrice !== null && (
                <div className="bg-primary/10 rounded-xl p-6 text-center animate-fade-in">
                  <p className="text-sm text-muted-foreground mb-2">Orientacyjny koszt</p>
                  <p className="text-4xl font-bold text-primary">{calculatedPrice} PLN</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Powierzchnia: {(parseFloat(calcData.width) * parseFloat(calcData.height)).toFixed(2)} m²
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-4">
            Dobierz idealne rozwiązanie
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Odpowiedz na 3 pytania i otrzymaj spersonalizowaną ofertę
          </p>
          <Card className="shadow-xl">
            <CardContent className="p-8">
              {quizStep < quizQuestions.length ? (
                <div className="animate-fade-in">
                  <div className="mb-8">
                    <div className="flex gap-2 mb-6">
                      {quizQuestions.map((_, index) => (
                        <div
                          key={index}
                          className={`h-2 flex-1 rounded-full transition-colors ${
                            index <= quizStep ? "bg-primary" : "bg-muted"
                          }`}
                        />
                      ))}
                    </div>
                    <h3 className="text-2xl font-bold mb-6">
                      {quizQuestions[quizStep].question}
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {quizQuestions[quizStep].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() =>
                          handleQuizAnswer(
                            quizStep === 0 ? "type" : quizStep === 1 ? "size" : "installation",
                            option.value
                          )
                        }
                        className="p-6 rounded-xl border-2 border-border hover:border-primary hover:bg-primary/5 transition-all text-left group"
                      >
                        <Icon
                          name={option.icon}
                          size={32}
                          className="text-primary mb-3 group-hover:scale-110 transition-transform"
                        />
                        <div className="font-semibold text-lg">{option.label}</div>
                      </button>
                    ))}
                  </div>
                  {quizStep > 0 && (
                    <Button
                      variant="outline"
                      onClick={() => setQuizStep(quizStep - 1)}
                      className="mt-6"
                    >
                      <Icon name="ArrowLeft" size={16} className="mr-2" />
                      Wstecz
                    </Button>
                  )}
                </div>
              ) : (
                <div className="text-center animate-fade-in">
                  <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon name="CheckCircle" size={48} className="text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Dziękujemy za odpowiedzi!</h3>
                  <p className="text-muted-foreground mb-6">
                    Twoje preferencje: {quizAnswers.type}, {quizAnswers.size}, {quizAnswers.installation}
                  </p>
                  <p className="text-lg mb-8">
                    Nasi specjaliści skontaktują się z Tobą w ciągu 15 minut z najlepszą ofertą.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg">
                      <Icon name="Phone" size={20} className="mr-2" />
                      Zadzwoń teraz
                    </Button>
                    <Button variant="outline" size="lg" onClick={resetQuiz}>
                      <Icon name="RotateCcw" size={20} className="mr-2" />
                      Zacznij od nowa
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-4">
            Zobacz jak pracujemy
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Profesjonalny montaż krok po kroku
          </p>
          <Card className="overflow-hidden shadow-2xl">
            <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-secondary/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center hover-scale shadow-xl group">
                  <Icon name="Play" size={32} className="text-primary ml-1 group-hover:scale-110 transition-transform" />
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white text-xl font-semibold mb-2">
                  Montaż miękich okien - pełny proces
                </h3>
                <p className="text-white/80 text-sm">
                  Od pomiaru do gotowej instalacji w jeden dzień
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Nasze realizacje
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Ponad 500 zadowolonych klientów w całej Polsce
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...products, ...products.slice(0, 5)].map((item, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl aspect-square group"
              >
                <img
                  src={item.image}
                  alt={`Realizacja ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Icon name="ZoomIn" size={32} className="text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Jak działamy?
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Prosty proces w 5 krokach
          </p>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h4 className="font-semibold mb-2 text-sm">{item.title}</h4>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-primary/30" style={{ width: 'calc(100% - 4rem)', marginLeft: '2rem' }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-4">
            Bezpłatna wycena online
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Odpowiadamy w ciągu 15 minut
          </p>
          <Card className="shadow-xl">
            <CardContent className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Imię</label>
                    <Input
                      placeholder="Twoje imię"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Telefon</label>
                    <Input
                      placeholder="+48 123 456 789"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Opisz swój projekt (opcjonalnie)
                  </label>
                  <Textarea
                    placeholder="Np. altana 3x4m, potrzebny montaż do końca miesiąca..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full text-lg py-6 rounded-full">
                  <Icon name="Send" size={20} className="mr-2" />
                  Otrzymaj wycenę bezpłatnie
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  Klikając przycisk, zgadzasz się na przetwarzanie danych osobowych
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
            <div>
              <Icon name="Truck" size={48} className="mb-4" />
              <h3 className="text-3xl font-bold mb-4">Gwarancja i dostawa</h3>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start">
                  <Icon name="Check" size={24} className="mr-3 flex-shrink-0 mt-0.5" />
                  <span>Gwarancja fabryczna 5 lat</span>
                </li>
                <li className="flex items-start">
                  <Icon name="Check" size={24} className="mr-3 flex-shrink-0 mt-0.5" />
                  <span>Bezpłatny dojazd w promieniu 50 km</span>
                </li>
                <li className="flex items-start">
                  <Icon name="Check" size={24} className="mr-3 flex-shrink-0 mt-0.5" />
                  <span>Montaż w ciągu 1 dnia roboczego</span>
                </li>
                <li className="flex items-start">
                  <Icon name="Check" size={24} className="mr-3 flex-shrink-0 mt-0.5" />
                  <span>Płatność po zakończeniu prac</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <Icon name="Phone" size={40} className="mb-4" />
              <p className="text-lg mb-2">Masz pytania? Zadzwoń teraz!</p>
              <a href="tel:+48123456789" className="text-4xl font-bold block mb-4">
                +48 123 456 789
              </a>
              <p className="text-sm opacity-90">Pracujemy codziennie 8:00 - 20:00</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-12">Kontakt</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover-scale">
              <CardContent className="p-6">
                <Icon name="Phone" size={32} className="text-primary mx-auto mb-3" />
                <p className="text-sm text-muted-foreground mb-1">Telefon</p>
                <p className="text-lg font-semibold">+48 123 456 789</p>
              </CardContent>
            </Card>
            <Card className="hover-scale">
              <CardContent className="p-6">
                <Icon name="Mail" size={32} className="text-primary mx-auto mb-3" />
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <p className="text-lg font-semibold">info@softwindows.pl</p>
              </CardContent>
            </Card>
            <Card className="hover-scale">
              <CardContent className="p-6">
                <Icon name="MapPin" size={32} className="text-primary mx-auto mb-3" />
                <p className="text-sm text-muted-foreground mb-1">Adres</p>
                <p className="text-lg font-semibold">Warszawa, Polska</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">SoftWindows</h3>
              <p className="text-white/70">
                Profesjonalne miękkie okna z własnej produkcji. Montaż pod klucz w całej Polsce.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Menu</h4>
              <nav className="space-y-2">
                <a href="#products" className="block text-white/70 hover:text-white">
                  Miękkie okna
                </a>
                <a href="#gallery" className="block text-white/70 hover:text-white">
                  Galeria
                </a>
                <a href="#pricing" className="block text-white/70 hover:text-white">
                  Wycena
                </a>
                <a href="#contact" className="block text-white/70 hover:text-white">
                  Kontakt
                </a>
              </nav>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontakt</h4>
              <p className="text-white/70 mb-2">+48 123 456 789</p>
              <p className="text-white/70 mb-4">info@softwindows.pl</p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-primary transition-colors">
                  <Icon name="Facebook" size={24} />
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  <Icon name="Instagram" size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/50 text-sm">
            © 2024 SoftWindows. Wszelkie prawa zastrzeżone.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;