import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Brush, Code, Share2 } from 'lucide-react';

const services = [
  {
    title: 'Branding & Design',
    description: 'Create a unique identity for your business with our professional branding and design services.',
    icon: Brush,
  },
  {
    title: 'Web Development',
    description: 'Custom websites tailored to your needs, from simple landing pages to complex web applications.',
    icon: Code,
  },
  {
    title: 'Social Media Management',
    description: 'Engage your audience and grow your brand with our expert social media content creation and management.',
    icon: Share2,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col items-center text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;