import { Link } from "react-router";
import { ArrowRight, CheckCircle, Clock, FileText, Shield, Upload } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl mb-6">
              Digitalna oddaja vloge za status veterana
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Preprost in varen spletni portal za izpolnjevanje, nalaganje dokumentov in spremljanje statusa vaše vloge.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/vloga/nova">
                <Button size="lg" variant="secondary">
                  Oddaj vlogo <ArrowRight className="ml-2 size-5" />
                </Button>
              </Link>
              <Link to="/vloga/status">
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                  Preveri status
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl text-center mb-12">Glavne funkcionalnosti</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <div className="size-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="size-6 text-blue-600" />
              </div>
              <CardTitle>Digitalna oddaja vloge</CardTitle>
              <CardDescription>
                Preprost spletni portal za izpolnjevanje in elektronsko popravljanje/dopolnjevanje vloge
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="size-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="size-6 text-green-600" />
              </div>
              <CardTitle>Avtomatsko preverjanje</CardTitle>
              <CardDescription>
                Sistem avtomatsko preveri ustreznost vloge in jo samodejno posreduje MORS-u
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="size-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="size-6 text-purple-600" />
              </div>
              <CardTitle>Spremljanje in obveščanje</CardTitle>
              <CardDescription>
                Prejemanje avtomatskih obvestil o zahtevah za dopolnitev in končni odločitvi
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-slate-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-center mb-12">Proces pridobivanja statusa</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <ProcessStep 
                number="1"
                title="Izpolnite vlogo"
                description="Prijavite se v portal in izpolnite obrazec z vsemi potrebnimi podatki"
                icon={<FileText className="size-5" />}
              />
              <ProcessStep 
                number="2"
                title="Naložite dokumente"
                description="Dodajte vse potrebne dokumente in potrdila v digitalni obliki"
                icon={<Upload className="size-5" />}
              />
              <ProcessStep 
                number="3"
                title="Avtomatsko preverjanje"
                description="Sistem preveri popolnost vloge in jo posreduje MORS-u"
                icon={<CheckCircle className="size-5" />}
              />
              <ProcessStep 
                number="4"
                title="Odločitev MORS"
                description="Prejmete obvestilo o odločitvi statusa veterana"
                icon={<Shield className="size-5" />}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 container mx-auto px-4">
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="py-12 text-center">
            <h2 className="text-3xl mb-4">Pripravljeni oddati vlogo?</h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Postopek je preprost in varen. Vaši podatki so varno shranjeni in dostopni samo pooblaščenim osebam.
            </p>
            <Link to="/vloga/nova">
              <Button size="lg">
                Začni z vlogo <ArrowRight className="ml-2 size-5" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

function ProcessStep({ number, title, description, icon }: {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-white p-6 rounded-lg border shadow-sm">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="size-12 bg-blue-600 text-white rounded-full flex items-center justify-center">
            {icon}
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm font-semibold text-blue-600">Korak {number}</span>
          </div>
          <h3 className="font-semibold mb-1">{title}</h3>
          <p className="text-sm text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}
