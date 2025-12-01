import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const benefits = [
    {
      icon: "Shield",
      title: "Gwarancja 5 lat",
      description: "Pełna ochrona na 5 lat z możliwością przedłużenia",
    },
    {
      icon: "Droplets",
      title: "100% wodoodporne",
      description: "Doskonała ochrona przed deszczem i wilgocią",
    },
    {
      icon: "Wind",
      title: "Odporność na wiatr",
      description: "Wytrzymałe materiały do 100 km/h",
    },
    {
      icon: "Sun",
      title: "Ochrona UV",
      description: "Blokada promieni UV do 99%",
    },
    {
      icon: "Thermometer",
      title: "Izolacja termiczna",
      description: "Oszczędność energii do 40%",
    },
    {
      icon: "Wrench",
      title: "Łatwy montaż",
      description: "Szybka instalacja bez wielkich nakładów",
    },
  ];

  const gallery = [
    {
      url: "https://cdn.poehali.dev/projects/0fb3d59f-1909-4ff9-a40c-f2972b1e388f/files/737c7d32-e6dc-4317-a6bb-353116f86fcc.jpg",
      title: "Taras z miękkimi oknami",
    },
    {
      url: "https://cdn.poehali.dev/projects/0fb3d59f-1909-4ff9-a40c-f2972b1e388f/files/a52742e7-3fa3-45a6-9388-f7e78d9f96d8.jpg",
      title: "Zbliżenie materiału",
    },
    {
      url: "https://cdn.poehali.dev/projects/0fb3d59f-1909-4ff9-a40c-f2972b1e388f/files/802a3a3e-176d-4454-a984-786e45a70617.jpg",
      title: "Elegancka weranda",
    },
  ];

  const pricing = [
    {
      title: "Basic",
      price: "450",
      features: [
        "Materiał PVC 500 mikronów",
        "Montaż standardowy",
        "Gwarancja 3 lata",
        "Konsultacja podstawowa",
      ],
    },
    {
      title: "Premium",
      price: "750",
      popular: true,
      features: [
        "Materiał PVC 700 mikronów",
        "Montaż ekspresowy",
        "Gwarancja 5 lat",
        "Pełna konsultacja",
        "Czyszczenie roczne gratis",
      ],
    },
    {
      title: "Exclusive",
      price: "1200",
      features: [
        "Materiał PVC 900 mikronów",
        "Montaż premium z dekoracją",
        "Gwarancja 7 lat",
        "Obsługa VIP",
        "Czyszczenie 2x rocznie",
        "Przegląd techniczny",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">SoftWindows</h1>
          <nav className="hidden md:flex gap-6">
            <a href="#benefits" className="text-foreground hover:text-primary transition-colors">
              Zalety
            </a>
            <a href="#gallery" className="text-foreground hover:text-primary transition-colors">
              Galeria
            </a>
            <a href="#pricing" className="text-foreground hover:text-primary transition-colors">
              Ceny
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Kontakt
            </a>
          </nav>
          <Button className="hidden md:inline-flex">
            <Icon name="Phone" size={16} className="mr-2" />
            +48 123 456 789
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
              Miękkie okna dla Twojego{" "}
              <span className="text-primary">komfortu</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Najwyższa jakość materiałów PVC. Ochrona przed wiatrem, deszczem i zimnem.
              Gwarancja 5 lat i bezpłatna konsultacja.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 hover-scale">
                <Icon name="Calculator" size={20} className="mr-2" />
                Oblicz cenę
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 hover-scale">
                <Icon name="Phone" size={20} className="mr-2" />
                Zadzwoń teraz
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12">
            Dlaczego warto <span className="text-secondary">wybrać nas?</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="hover-scale transition-all duration-300 hover:shadow-xl animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-4">
                    <Icon name={benefit.icon} size={32} className="text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">{benefit.title}</h4>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12">
            Nasze <span className="text-accent">realizacje</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {gallery.map((item, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-xl animate-fade-in hover-scale"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white font-semibold text-lg p-6">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-4">
            Przejrzyste <span className="text-primary">ceny</span>
          </h3>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Wybierz pakiet idealny dla Ciebie. Cena za m²
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <Card
                key={index}
                className={`relative hover-scale transition-all duration-300 ${
                  plan.popular ? "border-2 border-primary shadow-2xl scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Najpopularniejszy
                  </div>
                )}
                <CardContent className="p-8">
                  <h4 className="text-2xl font-bold mb-2">{plan.title}</h4>
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">PLN/m²</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Icon name="Check" size={20} className="text-secondary mr-2 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                    Zamów teraz
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-primary via-secondary to-accent">
        <div className="container mx-auto text-center text-white">
          <Icon name="Truck" size={48} className="mx-auto mb-6" />
          <h3 className="text-4xl font-bold mb-4">Gwarancja i dostawa</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-6 text-left">
                <Icon name="ShieldCheck" size={32} className="mb-4" />
                <h4 className="text-2xl font-bold mb-3">Gwarancja 5 lat</h4>
                <ul className="space-y-2 text-white/90">
                  <li>• Pełna ochrona materiałów</li>
                  <li>• Bezpłatne naprawy i przeglądy</li>
                  <li>• Wymiana uszkodzonych elementów</li>
                  <li>• Pomoc techniczna 24/7</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-6 text-left">
                <Icon name="Truck" size={32} className="mb-4" />
                <h4 className="text-2xl font-bold mb-3">Dostawa gratis</h4>
                <ul className="space-y-2 text-white/90">
                  <li>• Bezpłatna dostawa w całej Polsce</li>
                  <li>• Montaż w 1-2 dni robocze</li>
                  <li>• Profesjonalny zespół monterów</li>
                  <li>• Sprzątanie po instalacji</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-4xl font-bold text-center mb-4">
            Skontaktuj się <span className="text-primary">z nami</span>
          </h3>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Odpowiadamy w ciągu 15 minut!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Imię i nazwisko</label>
                    <Input
                      placeholder="Jan Kowalski"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Telefon</label>
                    <Input
                      placeholder="+48 123 456 789"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Wiadomość</label>
                    <Textarea
                      placeholder="Opisz swój projekt..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    <Icon name="Send" size={20} className="mr-2" />
                    Wyślij zapytanie
                  </Button>
                </form>
              </CardContent>
            </Card>
            <div className="space-y-6">
              <Card className="hover-scale">
                <CardContent className="p-6 flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Telefon</p>
                    <p className="text-lg font-semibold">+48 123 456 789</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="hover-scale">
                <CardContent className="p-6 flex items-center">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mr-4">
                    <Icon name="Mail" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-lg font-semibold">kontakt@softwindows.pl</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="hover-scale">
                <CardContent className="p-6 flex items-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mr-4">
                    <Icon name="MapPin" size={24} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Adres</p>
                    <p className="text-lg font-semibold">Warszawa, ul. Przykładowa 123</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">SoftWindows</h2>
          <p className="text-white/70 mb-6">
            Profesjonalne miękkie okna dla Twojego domu i biznesu
          </p>
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Facebook" size={24} />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Youtube" size={24} />
            </a>
          </div>
          <p className="text-white/50 text-sm">
            © 2024 SoftWindows. Wszystkie prawa zastrzeżone.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
