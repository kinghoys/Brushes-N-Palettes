import Image from 'next/image';
import Link from 'next/link';
import HeroSlider from '../../components/home/HeroSlider';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen w-full">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full relative">
            {/* Hero image overlay */}
            <div className="absolute inset-0 bg-black/40 z-10" />
            <div className="relative h-full w-full">
              <HeroSlider 
                images={[
                  {
                    src: "/images/new-hero.jpg",
                    alt: "Brushes and Palettes - Featured Artwork",
                    width: 612,
                    height: 612
                  },
                  {
                    src: "/images/hero.png",
                    alt: "Brushes and Palettes - Original Paintings",
                    width: 2852,
                    height: 870
                  }
                ]}
                interval={7000}
              />
            </div>
          </div>
        </div>
        
        <div className="container-custom relative z-20 h-full flex flex-col justify-center">
          <div className="max-w-3xl text-white">
            <h1 className="heading-xl mb-4 animate-fade-in">
              Redefining Contemporary Fine Art
            </h1>
            <p className="body-text text-lg md:text-xl mb-8 animate-slide-up">
              Bold, expressive original paintings that transform spaces and evoke powerful emotions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/gallery" className="btn-primary text-lg font-bold py-3 px-8">
                SHOP NOW
              </Link>
              <Link href="/custom-orders" className="btn-secondary text-lg py-3 px-8">
                COMMISSION ARTWORK
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-4">Featured Collections</h2>
          <p className="body-text text-center max-w-2xl mx-auto mb-12">
            Explore our curated collections of original artwork, each with its own unique story and style.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Collection images */}
            {[
              { id: 1, title: 'Abstract Collection', path: '/images/collections/collection-1.png' },
              { id: 2, title: 'Nature Collection', path: '/images/collections/collection-2.png' },
              { id: 3, title: 'Urban Collection', path: '/images/collections/collection-3.png' },
              { id: 4, title: 'Portrait Collection', path: '/images/collections/collection-4.png' },
              { id: 5, title: 'Landscape Collection', path: '/images/collections/collection-5.png' },
              { id: 6, title: 'Seascape Collection', path: '/images/collections/collection-6.png' },
              { id: 7, title: 'Floral Collection', path: '/images/collections/collection-7.png' },
              { id: 8, title: 'Modern Collection', path: '/images/collections/collection-8.png' }
            ].map((collection) => (
              <div key={collection.id} className="group relative overflow-hidden rounded-lg shadow-md h-72">
                <div className="relative w-full h-full">
                  <Image
                    src={collection.path}
                    alt={collection.title}
                    width={300}
                    height={400}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center p-4">
                    <h3 className="text-white text-xl font-serif mb-2">{collection.title}</h3>
                    <Link href={`/gallery?collection=${collection.id}`} className="text-white underline">
                      View Collection
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Artist Preview */}
      <section className="py-20 bg-accent-light">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-4">About the Artist</h2>
              <p className="body-text mb-6">
                I bring stories to life through vibrant colors and textured strokes. Each painting is a journey, an emotion captured in time.
              </p>
              <Link href="/about" className="btn-primary inline-block">
                Learn More
              </Link>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/collections/collection-5.png" 
                alt="About Brushes and Palettes"
                width={600}
                height={400}
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Custom Art Visualization Preview */}
      <section className="py-20 bg-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-4">Visualize Art in Your Space</h2>
          <p className="body-text max-w-2xl mx-auto mb-8">
            Try our unique visualization tool that lets you see how our paintings will look in your home before you buy.
          </p>
          <div className="max-w-4xl mx-auto h-96 rounded-lg overflow-hidden relative">
            <div className="absolute inset-0 bg-black/20 z-10"></div>
            <div className="relative h-full w-full">
              <Image
                src="/images/collections/collection-1.png"
                alt="Art Visualization Tool"
                width={800}
                height={600}
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg max-w-md text-center">
                  <h3 className="heading-sm mb-2">Visualize before you buy</h3>
                  <p className="text-gray-800">See how our artwork looks in your space with our visualization tool</p>
                </div>
              </div>
            </div>
          </div>
          <Link href="/visualize" className="btn-primary mt-8 inline-block">
            Try Visualization Tool
          </Link>
        </div>
      </section>
    </main>
  );
}
