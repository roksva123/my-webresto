import React, { useState } from 'react';
import {
  Menu,
  X,
  QrCode,
  Zap,
  DollarSign,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  MessageCircle,
} from 'lucide-react';
import LightPillar from './components/LightPillar';

// Configuration
const WHATSAPP_CONFIG = {
  phoneNumber: '6285175249674', // Ganti dengan nomor WhatsApp Anda
  message:
    'Halo Webresto, Saya tertarik untuk pesan paket menu QR untuk warung/restoran saya.',
};

const generateWhatsAppLink = (phone: string, message: string): string => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
};

const LandingPage: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    {
      icon: QrCode,
      title: 'Hemat Biaya Cetak Menu',
      description:
        'Menu digital via QR code, tidak perlu cetak ulang berkali-kali. Update menu kapan saja dengan mudah.',
    },
    {
      icon: Zap,
      title: 'Pelayanan 2x Lebih Cepat',
      description:
        'Pelanggan scan QR, langsung pesan tanpa antrean panjang atau menulis manual. Proses checkout instant.',
    },
    {
      icon: TrendingUp,
      title: 'Minim Kesalahan Pencatatan',
      description:
        'Sistem otomatis mengurangi human error pada pesanan. Data terekam rapi dan terorganisir real-time.',
    },
  ];

  const pricing = [
    {
      name: 'Paket Dasar',
      price: 'Rp 299.000',
      period: 'Sekali Bayar',
      features: [
        'Website toko online 1 halaman',
        'Menu digital unlimited',
        'QR code generator',
        'Cetak stiker QR (100 lembar bonus)',
        'Support WhatsApp selama 1 bulan',
      ],
      cta: 'Pesan Sekarang',
      highlighted: false,
    },
    {
      name: 'Paket Lengkap',
      price: 'Rp 599.000',
      period: 'Sekali Bayar',
      features: [
        'Website toko online + katalog produk',
        'Menu digital unlimited + foto produk',
        'QR code generator custom branding',
        'Cetak stiker QR (500 lembar bonus)',
        'Integrasi pembayaran online',
        'Analytics & laporan penjualan',
        'Support WhatsApp selama 3 bulan',
      ],
      cta: 'Pesan Sekarang',
      highlighted: true,
    },
    {
      name: 'Paket Premium',
      price: 'Rp 999.000',
      period: 'Sekali Bayar',
      features: [
        'Website toko online + katalog + admin panel',
        'Menu digital unlimited + foto + video',
        'QR code generator custom branding + tema',
        'Cetak stiker QR (1000 lembar bonus)',
        'Integrasi pembayaran online lengkap',
        'Analytics dashboard & laporan detail',
        'Support WhatsApp + email 6 bulan',
        'Training cara penggunaan',
      ],
      cta: 'Pesan Sekarang',
      highlighted: false,
    },
  ];

  const whatsappLink = generateWhatsAppLink(
    WHATSAPP_CONFIG.phoneNumber,
    WHATSAPP_CONFIG.message
  );

  return (
    <div className="min-h-screen text-white relative">
      {/* Light Pillar Background Effect - Three.js */}
      <div className="fixed inset-0 w-full h-full pointer-events-none" >

        {/* Primary Light Pillar - Blue/Cyan */}
        <div className="absolute inset-0">
          <LightPillar
            topColor="#0EA5E9"
            bottomColor="#06B6D4"
            intensity={0.8}
            rotationSpeed={0.2}
            glowAmount={0.003}
            pillarWidth={2.5}
            pillarHeight={0.35}
            noiseIntensity={0.4}
            pillarRotation={-20}
            quality="high"
            mixBlendMode="screen"
          />
        </div>

        {/* Secondary Light Pillar - Purple/Magenta */}
        <div className="absolute inset-0 opacity-60">
          <LightPillar
            topColor="#A855F7"
            bottomColor="#EC4899"
            intensity={0.6}
            rotationSpeed={0.15}
            glowAmount={0.002}
            pillarWidth={2.0}
            pillarHeight={0.4}
            noiseIntensity={0.35}
            pillarRotation={45}
            quality="high"
            mixBlendMode="multiply"
          />
        </div>
      </div>

      {/* Navbar - Card Nav with Glassmorphism */}
      <nav className="sticky top-0 z-50 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-4 sm:px-6 py-3 shadow-2xl">
            <div className="flex items-center justify-between">
              {/* Logo/Brand */}
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center">
                  <QrCode className="w-6 h-6 text-slate-950 font-bold" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Webresto
                </span>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-8">
                <a
                  href="#features"
                  className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                >
                  Keunggulan
                </a>
                <a
                  href="#pricing"
                  className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                >
                  Harga
                </a>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-medium text-sm hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                >
                  Hubungi Kami
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <div className="md:hidden mt-4 pt-4 border-t border-white/10 flex flex-col gap-3">
                <a
                  href="#features"
                  className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Keunggulan
                </a>
                <a
                  href="#pricing"
                  className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Harga
                </a>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-medium text-sm text-center hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                >
                  Hubungi Kami
                </a>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-12 sm:pt-20 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Brand/Logo Section */}


          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent">
              Webresto QR Menu
            </span>
            <br />
            <span className="text-white">Pesan Tanpa Antrean</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl mx-auto text-center leading-relaxed">
            Digitalisasi menu restoran Anda dengan QR code. Pelanggan scan, langsung
            pesan, proses cepat. Hemat biaya cetak, tingkatkan penjualan.
          </p>

          {/* Main Solution Points */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-sm text-slate-300">
              <CheckCircle className="w-4 h-4 text-cyan-400" />
              <span>Scan QR Code</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-slate-300">
              <CheckCircle className="w-4 h-4 text-cyan-400" />
              <span>Langsung Pesan</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-slate-300">
              <CheckCircle className="w-4 h-4 text-cyan-400" />
              <span>Tanpa Antrean</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all flex items-center justify-center gap-2 group"
            >
              <MessageCircle className="w-5 h-5" />
              Pesan di WhatsApp
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#pricing"
              className="w-full sm:w-auto px-8 py-3 bg-white/10 border border-white/20 rounded-lg font-semibold text-white hover:bg-white/20 transition-all flex items-center justify-center gap-2"
            >
              <DollarSign className="w-5 h-5" />
              Lihat Harga
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Keunggulan Webresto
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Solusi lengkap untuk digitalisasi menu dan sistem pemesanan restoran Anda
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-blue-400/50 hover:bg-white/10 transition-all duration-300"
                >
                  {/* Icon Container */}
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-all">
                    <Icon className="w-7 h-7 text-cyan-400" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Paket Harga
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto ">
              Pilih paket yang sesuai dengan kebutuhan bisnis Anda. Semua paket sudah
              termasuk bonus cetak stiker QR.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {pricing.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl transition-all duration-300 ${
                  plan.highlighted
                    ? 'md:scale-105 ring-2 ring-blue-500/50 bg-gradient-to-br from-white/10 to-white/5'
                    : 'bg-white/5 hover:bg-white/10 border border-white/10'
                }`}
              >
                {/* Highlighted Badge */}
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-sm font-bold text-white shadow-lg">
                    Rekomendasi
                  </div>
                )}

                {/* Card Content */}
                <div className="p-6 sm:p-8">
                  {/* Plan Name */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>

                  {/* Price */}
                  <div className="mb-2">
                    <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      {plan.price}
                    </p>
                    <p className="text-sm text-slate-400">{plan.period}</p>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-white/0 via-white/20 to-white/0 my-6" />

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start gap-3 text-slate-300"
                      >
                        <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 group ${
                      plan.highlighted
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:shadow-lg hover:shadow-blue-500/50'
                        : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                    }`}
                  >
                    <MessageCircle className="w-5 h-5" />
                    {plan.cta}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
            <p className="text-slate-300 text-center">
              <span className="font-semibold text-white">💡 Bonus Eksklusif:</span>{' '}
              Setiap paket sudah termasuk cetak stiker QR dan dukungan setup awal.
              Untuk kebutuhan custom, hubungi tim kami melalui WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-400/50 rounded-2xl p-8 sm:p-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
              Siap Digitalisasi Menu Anda?
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Hubungi kami sekarang melalui WhatsApp untuk konsultasi gratis dan
              penawaran spesial.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-bold text-white text-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all group"
            >
              <MessageCircle className="w-6 h-6" />
              Chat WhatsApp Sekarang
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center">
                  <QrCode className="w-5 h-5 text-slate-950" />
                </div>
                <span className="font-bold text-white">Webresto</span>
              </div>
              <p className="text-sm text-slate-400">
                Solusi menu digital untuk restoran & warung modern.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Menu</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#features" className="hover:text-white transition-colors">
                    Keunggulan
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-white transition-colors">
                    Harga
                  </a>
                </li>
                <li>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Hubungi Kami
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-white mb-4">Kontak</h4>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-white/0 via-white/20 to-white/0" />

          {/* Copyright */}
          <div className="mt-8 text-center text-sm text-slate-500">
            <p>
              &copy; 2026 Tech-Preneur Quick Launch. Dibuat untuk Kompetisi LKS PPLG.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
