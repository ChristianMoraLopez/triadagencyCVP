import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const pricingData = [
  {
    title: 'Branding y Diseño de Identidad Corporativa',
    plans: [
      { name: 'Básico', price: '800,000' },
      { name: 'Completo', price: '1,500,000' },
    ],
  },
  {
    title: 'Desarrollo en WordPress',
    plans: [
      { name: 'Básico', price: '1,200,000' },
      { name: 'Avanzado', price: '2,000,000' },
    ],
  },
  {
    title: 'Desarrollo Web a Medida',
    plans: [
      { name: 'Pequeño', price: '3,500,000' },
      { name: 'Mediano', price: '7,000,000' },
      { name: 'Grande', price: 'A medida' },
    ],
  },
  {
    title: 'Gestión de Redes Sociales',
    plans: [
      { name: 'Básico', price: '1,000,000/mes' },
      { name: 'Estándar', price: '2,000,000/mes' },
      { name: 'Premium', price: '3,500,000/mes' },
    ],
  },
  {
    title: 'SEO',
    plans: [
      { name: 'Auditoría', price: '600,000' },
      { name: 'On-Page', price: '800,000' },
      { name: 'Off-Page', price: 'Desde 1,200,000' },
    ],
  },
  {
    title: 'Email Marketing',
    plans: [
      { name: 'Diseño', price: '700,000' },
      { name: 'Gestión', price: 'Desde 500,000/mes' },
    ],
  },
  {
    title: 'Mantenimiento Web',
    plans: [
      { name: 'Básico', price: 'Desde 300,000/mes' },
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingData.map((service, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl text-center">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-4">
                  {service.plans.map((plan, planIndex) => (
                    <li key={planIndex} className="flex justify-between items-center">
                      <span>{plan.name}</span>
                      <span className="font-semibold">COP {plan.price}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <div className="p-4">
                <Button className="w-full">Get Started</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;