"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Star,
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Coffee,
  Flame,
  Package,
  Truck,
  Heart,
  Leaf,
  Award,
  Users,
  ChevronLeft,
  ChevronRight,
  Check,
} from "lucide-react";

// Product data
const featuredProducts = [
  {
    id: 1,
    name: "Huila La Pradera",
    origin: "Pitalito, Huila",
    process: "Lavado",
    altitude: "1,850 msnm",
    roast: "Medio",
    notes: ["Panela", "Naranja", "Chocolate negro"],
    price: 48000,
    badge: "Bestseller",
  },
  {
    id: 2,
    name: "Nariño El Diviso",
    origin: "La Unión, Nariño",
    process: "Honey",
    altitude: "2,100 msnm",
    roast: "Claro",
    notes: ["Durazno", "Floral", "Caramelo"],
    price: 52000,
    badge: "Nuevo",
  },
  {
    id: 3,
    name: "Etiopía Yirgacheffe",
    origin: "Gedeo, Etiopía",
    process: "Natural",
    altitude: "1,950 msnm",
    roast: "Claro",
    notes: ["Arándano", "Jazmín", "Bergamota"],
    price: 68000,
    badge: "Edición limitada",
  },
];

const allProducts: typeof featuredProducts = [
  ...featuredProducts,
  {
    id: 4,
    name: "Tolima Las Hermosas",
    origin: "Planadas, Tolima",
    process: "Lavado",
    altitude: "1,700 msnm",
    roast: "Medio",
    notes: ["Manzana verde", "Nuez", "Miel"],
    price: 44000,
    badge: "",
  },
  {
    id: 5,
    name: "Cauca El Tambo",
    origin: "El Tambo, Cauca",
    process: "Lavado",
    altitude: "1,900 msnm",
    roast: "Medio-oscuro",
    notes: ["Cereza", "Cacao", "Almendra"],
    price: 46000,
    badge: "",
  },
  {
    id: 6,
    name: "Blend Casa Altitude",
    origin: "Colombia",
    process: "Lavado/Honey",
    altitude: "1,800+ msnm",
    roast: "Medio",
    notes: ["Chocolate", "Caramelo", "Cítrico suave"],
    price: 38000,
    badge: "Espresso",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Carolina Méndez",
    role: "Propietaria, Café Ancestral",
    text: "Altitude transformó nuestra carta de café. Nuestros clientes notan la diferencia desde la primera taza. El Huila La Pradera es nuestro más vendido.",
    rating: 5,
  },
  {
    id: 2,
    name: "Andrés Villanueva",
    role: "Barista campeón regional 2024",
    text: "La consistencia en el tueste es impecable. Puedo confiar en que cada lote tendrá el mismo perfil. Es el café con el que compito.",
    rating: 5,
  },
  {
    id: 3,
    name: "María José Restrepo",
    role: "Suscriptora desde 2022",
    text: "La suscripción mensual me ha introducido a orígenes que nunca habría probado. El Yirgacheffe de este mes fue una revelación.",
    rating: 5,
  },
];

const pricingPlans = [
  {
    name: "Explorador",
    price: 75000,
    frequency: "mes",
    description: "Perfecto para descubrir nuevos sabores",
    features: [
      "250g de café de origen único",
      "Ficha de cata detallada",
      "Envío gratis a todo Colombia",
      "Molienda a tu preferencia",
    ],
    popular: false,
  },
  {
    name: "Aficionado",
    price: 135000,
    frequency: "mes",
    description: "Para el amante del café diario",
    features: [
      "500g de café de origen único",
      "Ficha de cata detallada",
      "Envío gratis a todo Colombia",
      "Molienda a tu preferencia",
      "Acceso a lotes exclusivos",
      "10% descuento en tienda",
    ],
    popular: true,
  },
  {
    name: "Profesional",
    price: 380000,
    frequency: "mes",
    description: "Ideal para cafeterías pequeñas",
    features: [
      "2kg de café (mezcla personalizada)",
      "Asesoría de extracción",
      "Envío prioritario",
      "Precios mayoristas",
      "Soporte técnico dedicado",
      "Capacitación barista incluida",
    ],
    popular: false,
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <main className="min-h-screen bg-[var(--color-coffee-dark)]">
      {/* 1. Navigation - Sticky */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-coffee-dark)]/95 backdrop-blur-sm border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <a href="#" className="flex items-center gap-2">
              <Coffee className="w-8 h-8 text-[var(--color-olive)]" />
              <span className="font-serif text-xl lg:text-2xl font-semibold text-[var(--color-cream)]">
                Altitude
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <a href="#origenes" className="text-[var(--color-tan)] hover:text-[var(--color-cream)] transition-colors text-sm tracking-wide">
                Orígenes
              </a>
              <a href="#proceso" className="text-[var(--color-tan)] hover:text-[var(--color-cream)] transition-colors text-sm tracking-wide">
                Proceso
              </a>
              <a href="#suscripcion" className="text-[var(--color-tan)] hover:text-[var(--color-cream)] transition-colors text-sm tracking-wide">
                Suscripción
              </a>
              <a href="#mayoristas" className="text-[var(--color-tan)] hover:text-[var(--color-cream)] transition-colors text-sm tracking-wide">
                Mayoristas
              </a>
              <a href="#nosotros" className="text-[var(--color-tan)] hover:text-[var(--color-cream)] transition-colors text-sm tracking-wide">
                Nosotros
              </a>
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <Button variant="ghost" className="text-[var(--color-cream)] hover:bg-[var(--color-coffee-medium)]">
                Iniciar sesión
              </Button>
              <Button className="bg-[var(--color-olive)] text-[var(--color-coffee-dark)] hover:bg-[var(--color-olive)]/90">
                Comprar ahora
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-[var(--color-cream)]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-[var(--color-border)]">
              <div className="flex flex-col gap-4">
                <a href="#origenes" className="text-[var(--color-cream)] py-2" onClick={() => setMobileMenuOpen(false)}>
                  Orígenes
                </a>
                <a href="#proceso" className="text-[var(--color-cream)] py-2" onClick={() => setMobileMenuOpen(false)}>
                  Proceso
                </a>
                <a href="#suscripcion" className="text-[var(--color-cream)] py-2" onClick={() => setMobileMenuOpen(false)}>
                  Suscripción
                </a>
                <a href="#mayoristas" className="text-[var(--color-cream)] py-2" onClick={() => setMobileMenuOpen(false)}>
                  Mayoristas
                </a>
                <a href="#nosotros" className="text-[var(--color-cream)] py-2" onClick={() => setMobileMenuOpen(false)}>
                  Nosotros
                </a>
                <div className="flex flex-col gap-2 pt-4 border-t border-[var(--color-border)]">
                  <Button variant="ghost" className="justify-start text-[var(--color-cream)]">
                    Iniciar sesión
                  </Button>
                  <Button className="bg-[var(--color-olive)] text-[var(--color-coffee-dark)]">
                    Comprar ahora
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* 2. Hero - Full Image */}
      <section className="relative h-screen min-h-[600px]">
        <Image
          src="/images/hero.png"
          alt="Granos de café recién tostados en la tostadora Altitude Coffee"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-coffee-dark)] via-[var(--color-coffee-dark)]/60 to-transparent" />

        <div className="relative z-10 h-full flex flex-col justify-end pb-20 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <Badge className="w-fit mb-6 bg-[var(--color-olive)]/20 text-[var(--color-olive)] border-[var(--color-olive)]/30 hover:bg-[var(--color-olive)]/30">
            <Leaf className="w-3 h-3 mr-1" />
            Tostado artesanal en Bogotá
          </Badge>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-semibold text-[var(--color-cream)] max-w-4xl leading-tight mb-6">
            Café de origen único,
            <br />
            <span className="text-[var(--color-olive)]">tostado con propósito</span>
          </h1>

          <p className="text-lg lg:text-xl text-[var(--color-tan)] max-w-2xl mb-8">
            Seleccionamos los mejores granos de pequeños productores colombianos y los tostamos
            en pequeños lotes para revelar su carácter único. Desde las montañas de Huila hasta tu taza.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-[var(--color-cream)] text-[var(--color-coffee-dark)] hover:bg-[var(--color-cream)]/90 text-base px-8">
              Explorar orígenes
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-[var(--color-cream)]/30 text-[var(--color-cream)] hover:bg-[var(--color-cream)]/10 text-base px-8">
              Suscríbete y ahorra
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
            <span className="text-xs text-[var(--color-tan)] tracking-widest uppercase">Descubre más</span>
            <ChevronDown className="w-5 h-5 text-[var(--color-tan)]" />
          </div>
        </div>
      </section>

      {/* 3. About - Split */}
      <section id="nosotros" className="py-20 lg:py-32 bg-[var(--color-coffee-medium)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <Badge className="mb-6 bg-[var(--color-olive)]/20 text-[var(--color-olive)] border-[var(--color-olive)]/30">
                Nuestra historia
              </Badge>
              <h2 className="font-serif text-3xl lg:text-5xl font-semibold text-[var(--color-cream)] mb-6">
                Del cafetal bogotano al mundo
              </h2>
              <div className="space-y-4 text-[var(--color-tan)]">
                <p>
                  Altitude nació en 2018 cuando Sebastián Morales, caficultor de tercera generación,
                  decidió que los granos de su familia merecían más que ser mezclados en exportaciones genéricas.
                </p>
                <p>
                  Hoy, trabajamos directamente con 47 familias productoras en Huila, Nariño, Tolima y Cauca.
                  Pagamos un 40% sobre el precio de mercado porque creemos que el café excepcional
                  comienza con productores prósperos.
                </p>
                <p>
                  Nuestro tostadero en el barrio La Soledad de Bogotá es donde la magia sucede:
                  tostamos en lotes de máximo 12 kilos, probamos cada batch, y enviamos solo
                  cuando el café alcanza su punto óptimo de sabor.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-[var(--color-coffee-dark)] flex items-center justify-center">
                  <span className="font-serif text-2xl text-[var(--color-cream)]">SM</span>
                </div>
                <div>
                  <p className="font-semibold text-[var(--color-cream)]">Sebastián Morales</p>
                  <p className="text-sm text-[var(--color-tan)]">Fundador & Maestro tostador</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-[var(--color-coffee-dark)] rounded-xl p-6">
                    <p className="font-serif text-4xl text-[var(--color-olive)] mb-2">2018</p>
                    <p className="text-sm text-[var(--color-tan)]">Fundación en Bogotá</p>
                  </div>
                  <div className="bg-[var(--color-coffee-dark)] rounded-xl p-6">
                    <p className="font-serif text-4xl text-[var(--color-cream)] mb-2">47</p>
                    <p className="text-sm text-[var(--color-tan)]">Familias productoras</p>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-[var(--color-coffee-dark)] rounded-xl p-6">
                    <p className="font-serif text-4xl text-[var(--color-cream)] mb-2">+40%</p>
                    <p className="text-sm text-[var(--color-tan)]">Sobre precio de mercado</p>
                  </div>
                  <div className="bg-[var(--color-coffee-dark)] rounded-xl p-6">
                    <p className="font-serif text-4xl text-[var(--color-olive)] mb-2">12kg</p>
                    <p className="text-sm text-[var(--color-tan)]">Lotes de tueste máximo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Products - Featured */}
      <section id="origenes" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-[var(--color-olive)]/20 text-[var(--color-olive)] border-[var(--color-olive)]/30">
              Orígenes destacados
            </Badge>
            <h2 className="font-serif text-3xl lg:text-5xl font-semibold text-[var(--color-cream)] mb-4">
              Descubre nuestros favoritos
            </h2>
            <p className="text-[var(--color-tan)] max-w-2xl mx-auto">
              Cada origen cuenta una historia diferente. Estos tres cafés representan lo mejor
              de nuestra selección actual.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="bg-[var(--color-coffee-medium)] border-[var(--color-border)] overflow-hidden group hover:border-[var(--color-olive)]/50 transition-all">
                <CardHeader className="relative pb-0">
                  <div className="aspect-square bg-gradient-to-br from-[var(--color-coffee-dark)] to-[var(--color-coffee-medium)] rounded-lg mb-4 flex items-center justify-center">
                    <Coffee className="w-20 h-20 text-[var(--color-olive)]/30" />
                  </div>
                  {product.badge && (
                    <Badge className="absolute top-4 right-4 bg-[var(--color-olive)] text-[var(--color-coffee-dark)]">
                      {product.badge}
                    </Badge>
                  )}
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <CardTitle className="font-serif text-xl text-[var(--color-cream)] mb-1">
                      {product.name}
                    </CardTitle>
                    <p className="text-sm text-[var(--color-tan)] flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {product.origin}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="bg-[var(--color-coffee-dark)] rounded-lg p-2 text-center">
                      <p className="text-[var(--color-tan)]">Proceso</p>
                      <p className="text-[var(--color-cream)] font-medium">{product.process}</p>
                    </div>
                    <div className="bg-[var(--color-coffee-dark)] rounded-lg p-2 text-center">
                      <p className="text-[var(--color-tan)]">Altitud</p>
                      <p className="text-[var(--color-cream)] font-medium">{product.altitude}</p>
                    </div>
                    <div className="bg-[var(--color-coffee-dark)] rounded-lg p-2 text-center">
                      <p className="text-[var(--color-tan)]">Tueste</p>
                      <p className="text-[var(--color-cream)] font-medium">{product.roast}</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs text-[var(--color-tan)] mb-2">Notas de cata</p>
                    <div className="flex flex-wrap gap-2">
                      {product.notes.map((note) => (
                        <Badge key={note} variant="outline" className="text-xs border-[var(--color-tan)]/30 text-[var(--color-cream)]">
                          {note}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
                    <div>
                      <p className="font-serif text-2xl text-[var(--color-cream)]">{formatPrice(product.price)}</p>
                      <p className="text-xs text-[var(--color-tan)]">250g / Grano entero</p>
                    </div>
                    <Button size="sm" className="bg-[var(--color-olive)] text-[var(--color-coffee-dark)] hover:bg-[var(--color-olive)]/90">
                      Agregar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Process Steps */}
      <section id="proceso" className="py-20 lg:py-32 bg-[var(--color-coffee-medium)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-[var(--color-olive)]/20 text-[var(--color-olive)] border-[var(--color-olive)]/30">
              Nuestro proceso
            </Badge>
            <h2 className="font-serif text-3xl lg:text-5xl font-semibold text-[var(--color-cream)] mb-4">
              Del origen a tu taza
            </h2>
            <p className="text-[var(--color-tan)] max-w-2xl mx-auto">
              Cada paso está diseñado para preservar y realzar las características únicas de cada origen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                icon: Heart,
                title: "Selección directa",
                description: "Visitamos personalmente cada finca y catamos cientos de muestras hasta encontrar granos con perfiles excepcionales.",
              },
              {
                step: "02",
                icon: Leaf,
                title: "Compra ética",
                description: "Pagamos precios premium directamente a los caficultores, sin intermediarios, asegurando trazabilidad completa.",
              },
              {
                step: "03",
                icon: Flame,
                title: "Tueste artesanal",
                description: "Tostamos en lotes pequeños de máximo 12kg, ajustando cada perfil para resaltar las notas únicas del origen.",
              },
              {
                step: "04",
                icon: Package,
                title: "Empaque y envío",
                description: "Empacamos dentro de 24 horas post-tueste en bolsas con válvula y enviamos a toda Colombia en 2-4 días.",
              },
            ].map((item, index) => (
              <div key={item.step} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-[var(--color-coffee-dark)] flex items-center justify-center mb-6 relative">
                    <item.icon className="w-8 h-8 text-[var(--color-olive)]" />
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[var(--color-olive)] text-[var(--color-coffee-dark)] text-sm font-semibold flex items-center justify-center">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl text-[var(--color-cream)] mb-3">{item.title}</h3>
                  <p className="text-sm text-[var(--color-tan)]">{item.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] border-t border-dashed border-[var(--color-border)]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Products Grid */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
            <div>
              <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-[var(--color-cream)] mb-2">
                Catálogo completo
              </h2>
              <p className="text-[var(--color-tan)]">
                Explora todos nuestros orígenes disponibles
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="border-[var(--color-olive)] text-[var(--color-olive)] hover:bg-[var(--color-olive)]/10">
                Todos
              </Button>
              <Button variant="ghost" className="text-[var(--color-tan)] hover:text-[var(--color-cream)]">
                Colombia
              </Button>
              <Button variant="ghost" className="text-[var(--color-tan)] hover:text-[var(--color-cream)]">
                Internacional
              </Button>
              <Button variant="ghost" className="text-[var(--color-tan)] hover:text-[var(--color-cream)]">
                Blends
              </Button>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProducts.map((product) => (
              <Card key={product.id} className="bg-[var(--color-coffee-medium)] border-[var(--color-border)] overflow-hidden group hover:border-[var(--color-olive)]/50 transition-all">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <CardTitle className="font-serif text-lg text-[var(--color-cream)] mb-1">
                        {product.name}
                      </CardTitle>
                      <p className="text-sm text-[var(--color-tan)]">{product.origin}</p>
                    </div>
                    {product.badge && (
                      <Badge className="bg-[var(--color-olive)]/20 text-[var(--color-olive)] border-[var(--color-olive)]/30">
                        {product.badge}
                      </Badge>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {product.notes.map((note) => (
                      <span key={note} className="text-xs text-[var(--color-tan)] bg-[var(--color-coffee-dark)] px-2 py-1 rounded">
                        {note}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="font-serif text-xl text-[var(--color-cream)]">{formatPrice(product.price)}</p>
                    <Button size="sm" variant="outline" className="border-[var(--color-olive)] text-[var(--color-olive)] hover:bg-[var(--color-olive)]/10">
                      Ver detalles
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-[var(--color-cream)]/30 text-[var(--color-cream)] hover:bg-[var(--color-cream)]/10">
              Ver más orígenes
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* 7. Stats Banner */}
      <section className="py-16 bg-[var(--color-olive)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { value: "47", label: "Familias productoras", icon: Users },
              { value: "12,000+", label: "Clientes satisfechos", icon: Heart },
              { value: "6", label: "Años de experiencia", icon: Award },
              { value: "150+", label: "Cafeterías aliadas", icon: Coffee },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-[var(--color-coffee-dark)]/70" />
                <p className="font-serif text-4xl lg:text-5xl font-semibold text-[var(--color-coffee-dark)] mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-[var(--color-coffee-dark)]/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Testimonials Carousel */}
      <section className="py-20 lg:py-32 bg-[var(--color-coffee-medium)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-[var(--color-olive)]/20 text-[var(--color-olive)] border-[var(--color-olive)]/30">
              Testimonios
            </Badge>
            <h2 className="font-serif text-3xl lg:text-5xl font-semibold text-[var(--color-cream)]">
              Lo que dicen nuestros clientes
            </h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-[var(--color-coffee-dark)] rounded-2xl p-8 lg:p-12">
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[var(--color-olive)] text-[var(--color-olive)]" />
                ))}
              </div>

              <blockquote className="font-serif text-xl lg:text-2xl text-[var(--color-cream)] mb-8 leading-relaxed">
                &ldquo;{testimonials[currentTestimonial].text}&rdquo;
              </blockquote>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-[var(--color-cream)]">
                    {testimonials[currentTestimonial].name}
                  </p>
                  <p className="text-sm text-[var(--color-tan)]">
                    {testimonials[currentTestimonial].role}
                  </p>
                </div>

                <div className="flex gap-2">
                  <Button
                    size="icon"
                    variant="outline"
                    className="border-[var(--color-border)] text-[var(--color-cream)] hover:bg-[var(--color-coffee-medium)]"
                    onClick={prevTestimonial}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    className="border-[var(--color-border)] text-[var(--color-cream)] hover:bg-[var(--color-coffee-medium)]"
                    onClick={nextTestimonial}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentTestimonial
                      ? "bg-[var(--color-olive)] w-6"
                      : "bg-[var(--color-border)]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. Pricing Cards */}
      <section id="suscripcion" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-[var(--color-olive)]/20 text-[var(--color-olive)] border-[var(--color-olive)]/30">
              Suscripciones
            </Badge>
            <h2 className="font-serif text-3xl lg:text-5xl font-semibold text-[var(--color-cream)] mb-4">
              Café fresco cada mes
            </h2>
            <p className="text-[var(--color-tan)] max-w-2xl mx-auto">
              Elige el plan que se adapte a tu consumo. Pausa o cancela cuando quieras, sin compromisos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan) => (
              <Card
                key={plan.name}
                className={`bg-[var(--color-coffee-medium)] border-[var(--color-border)] relative ${
                  plan.popular ? "border-[var(--color-olive)] scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--color-olive)] text-[var(--color-coffee-dark)]">
                    Más popular
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-[var(--color-cream)]">
                    {plan.name}
                  </CardTitle>
                  <p className="text-sm text-[var(--color-tan)]">{plan.description}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <span className="font-serif text-4xl text-[var(--color-cream)]">
                      {formatPrice(plan.price)}
                    </span>
                    <span className="text-[var(--color-tan)]">/{plan.frequency}</span>
                  </div>

                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-[var(--color-tan)]">
                        <Check className="w-4 h-4 text-[var(--color-olive)] mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-[var(--color-olive)] text-[var(--color-coffee-dark)] hover:bg-[var(--color-olive)]/90"
                        : "bg-[var(--color-coffee-dark)] text-[var(--color-cream)] hover:bg-[var(--color-coffee-dark)]/90"
                    }`}
                  >
                    Comenzar ahora
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Newsletter Strip */}
      <section className="py-16 bg-[var(--color-coffee-medium)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="font-serif text-2xl lg:text-3xl text-[var(--color-cream)] mb-2">
                Únete a nuestra comunidad cafetera
              </h3>
              <p className="text-[var(--color-tan)]">
                Recibe novedades, recetas de extracción y 10% de descuento en tu primera compra.
              </p>
            </div>
            <div className="flex w-full lg:w-auto gap-3">
              <Input
                type="email"
                placeholder="tu@email.com"
                className="bg-[var(--color-coffee-dark)] border-[var(--color-border)] text-[var(--color-cream)] placeholder:text-[var(--color-tan)] w-full lg:w-72"
              />
              <Button className="bg-[var(--color-olive)] text-[var(--color-coffee-dark)] hover:bg-[var(--color-olive)]/90 whitespace-nowrap">
                Suscribirse
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 11. CTA Split */}
      <section id="mayoristas" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-[var(--color-coffee-medium)] rounded-2xl p-8 lg:p-12">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[var(--color-coffee-dark)] rounded-xl p-6">
                    <Truck className="w-8 h-8 text-[var(--color-olive)] mb-3" />
                    <p className="font-semibold text-[var(--color-cream)] mb-1">Envío gratis</p>
                    <p className="text-sm text-[var(--color-tan)]">A partir de 2kg</p>
                  </div>
                  <div className="bg-[var(--color-coffee-dark)] rounded-xl p-6">
                    <Award className="w-8 h-8 text-[var(--color-olive)] mb-3" />
                    <p className="font-semibold text-[var(--color-cream)] mb-1">Capacitación</p>
                    <p className="text-sm text-[var(--color-tan)]">Barista incluida</p>
                  </div>
                  <div className="bg-[var(--color-coffee-dark)] rounded-xl p-6">
                    <Coffee className="w-8 h-8 text-[var(--color-olive)] mb-3" />
                    <p className="font-semibold text-[var(--color-cream)] mb-1">Blends exclusivos</p>
                    <p className="text-sm text-[var(--color-tan)]">Personalizados</p>
                  </div>
                  <div className="bg-[var(--color-coffee-dark)] rounded-xl p-6">
                    <Users className="w-8 h-8 text-[var(--color-olive)] mb-3" />
                    <p className="font-semibold text-[var(--color-cream)] mb-1">Soporte</p>
                    <p className="text-sm text-[var(--color-tan)]">Dedicado 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <Badge className="mb-6 bg-[var(--color-olive)]/20 text-[var(--color-olive)] border-[var(--color-olive)]/30">
                Para cafeterías
              </Badge>
              <h2 className="font-serif text-3xl lg:text-5xl font-semibold text-[var(--color-cream)] mb-6">
                Programa mayorista
              </h2>
              <p className="text-[var(--color-tan)] mb-6">
                Más de 150 cafeterías en Colombia confían en Altitude para servir café de especialidad
                a sus clientes. Únete a nuestra red y accede a precios preferenciales, capacitación
                continua y soporte técnico personalizado.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Precios hasta 25% menores que retail",
                  "Molienda personalizada para tu equipo",
                  "Fichas de producto para tu carta",
                  "Visitas de catación trimestrales",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[var(--color-cream)]">
                    <Check className="w-5 h-5 text-[var(--color-olive)]" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button size="lg" className="bg-[var(--color-cream)] text-[var(--color-coffee-dark)] hover:bg-[var(--color-cream)]/90">
                Solicitar información
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 12. Footer */}
      <footer className="bg-[var(--color-coffee-medium)] border-t border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            <div className="col-span-2">
              <a href="#" className="flex items-center gap-2 mb-6">
                <Coffee className="w-8 h-8 text-[var(--color-olive)]" />
                <span className="font-serif text-2xl font-semibold text-[var(--color-cream)]">
                  Altitude
                </span>
              </a>
              <p className="text-[var(--color-tan)] mb-6 max-w-xs">
                Café de especialidad tostado artesanalmente en Bogotá.
                Desde las montañas colombianas hasta tu taza.
              </p>
              <div className="flex gap-4">
                <a href="https://instagram.com" className="w-10 h-10 rounded-full bg-[var(--color-coffee-dark)] flex items-center justify-center text-[var(--color-tan)] hover:text-[var(--color-cream)] transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://facebook.com" className="w-10 h-10 rounded-full bg-[var(--color-coffee-dark)] flex items-center justify-center text-[var(--color-tan)] hover:text-[var(--color-cream)] transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-[var(--color-cream)] mb-4">Tienda</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-[var(--color-tan)] hover:text-[var(--color-cream)] transition-colors text-sm">Todos los cafés</a></li>
                <li><a href="#" className="text-[var(--color-tan)] hover:text-[var(--color-cream)] transition-colors text-sm">Colombia</a></li>
                <li><a href="#" className="text-[var(--color-tan)] hover:text-[var(--color-cream)] transition-colors text-sm">Internacional</a></li>
                <li><a href="#" className="text-[var(--color-tan)] hover:text-[var(--color-cream)] transition-colors text-sm">Equipos</a></li>
                <li><a href="#" className="text-[var(--color-tan)] hover:text-[var(--color-cream)] transition-colors text-sm">Suscripciones</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-[var(--color-cream)] mb-4">Empresa</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-[var(--color-tan)] hover:text-[var(--color-cream)] transition-colors text-sm">Nuestra historia</a></li>
                <li><a href="#" className="text-[var(--color-tan)] hover:text-[var(--color-cream)] transition-colors text-sm">Productores</a></li>
                <li><a href="#" className="text-[var(--color-tan)] hover:text-[var(--color-cream)] transition-colors text-sm">Sostenibilidad</a></li>
                <li><a href="#" className="text-[var(--color-tan)] hover:text-[var(--color-cream)] transition-colors text-sm">Blog</a></li>
                <li><a href="#" className="text-[var(--color-tan)] hover:text-[var(--color-cream)] transition-colors text-sm">Trabaja con nosotros</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-[var(--color-cream)] mb-4">Contacto</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-[var(--color-tan)]">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  Cra 15 #85-24, Local 102<br />La Soledad, Bogotá
                </li>
                <li className="flex items-center gap-2 text-sm text-[var(--color-tan)]">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  +57 601 742 8930
                </li>
                <li className="flex items-center gap-2 text-sm text-[var(--color-tan)]">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  hola@altitudecoffee.co
                </li>
                <li className="flex items-center gap-2 text-sm text-[var(--color-tan)]">
                  <Clock className="w-4 h-4 flex-shrink-0" />
                  Lun-Vie: 8am - 6pm
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-[var(--color-border)] flex flex-col lg:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[var(--color-tan)]">
              © 2024 Altitude Coffee Roasters S.A.S. NIT 901.234.567-8. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-[var(--color-tan)] hover:text-[var(--color-cream)] transition-colors">
                Términos y condiciones
              </a>
              <a href="#" className="text-[var(--color-tan)] hover:text-[var(--color-cream)] transition-colors">
                Política de privacidad
              </a>
              <a href="#" className="text-[var(--color-tan)] hover:text-[var(--color-cream)] transition-colors">
                Devoluciones
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
