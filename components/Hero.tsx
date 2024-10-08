import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Elevate Your Online Presence
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Professional web development and social media management services to boost your brand and engage your audience.
        </p>
        <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
          Get a Free Consultation
        </Button>
      </div>
    </section>
  );
};

export default Hero;