import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Cookie, Settings, BarChart, Shield } from "lucide-react";

export default function CookiePolicy() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3 mb-4">
              <Cookie className="size-10 text-blue-600" />
              <div>
                <CardTitle className="text-2xl">Izjava o uporabi piškotkov</CardTitle>
                <p className="text-slate-500">Zadnja posodobitev: januar 2026</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="prose prose-slate max-w-none">
            
            {/* Kaj so piškotki */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">1. Kaj so piškotki?</h2>
              <p className="text-slate-600 mb-4">
                Piškotki (cookies) so majhne besedilne datoteke, ki jih spletna stran shrani na vašo napravo 
                (računalnik, tablico, telefon), ko obiščete spletno stran. Piškotki omogočajo, da si spletna 
                stran zapomni vaše nastavitve in izboljša uporabniško izkušnjo.
              </p>
            </section>

            {/* Vrste piškotkov */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">2. Vrste piškotkov, ki jih uporabljamo</h2>
              
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Settings className="size-5 text-green-600" />
                    <h3 className="font-semibold text-green-800">Nujno potrebni piškotki</h3>
                  </div>
                  <p className="text-sm text-slate-600 mb-2">
                    Ti piškotki so bistveni za delovanje spletne strani. Brez njih določene funkcionalnosti 
                    ne bi delovale pravilno. Ne potrebujejo vaše privolitve.
                  </p>
                  <table className="w-full text-sm mt-3">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Ime</th>
                        <th className="text-left py-2">Namen</th>
                        <th className="text-left py-2">Trajanje</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2"><code>session_id</code></td>
                        <td className="py-2">Identifikacija seje uporabnika</td>
                        <td className="py-2">Do zaprtja brskalnika</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2"><code>cookie_consent</code></td>
                        <td className="py-2">Shranjevanje vaše izbire o piškotkih</td>
                        <td className="py-2">1 leto</td>
                      </tr>
                      <tr>
                        <td className="py-2"><code>csrf_token</code></td>
                        <td className="py-2">Varnostni žeton za zaščito obrazcev</td>
                        <td className="py-2">Do zaprtja brskalnika</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart className="size-5 text-blue-600" />
                    <h3 className="font-semibold text-blue-800">Analitični piškotki (opcijski)</h3>
                  </div>
                  <p className="text-sm text-slate-600 mb-2">
                    Ti piškotki nam pomagajo razumeti, kako obiskovalci uporabljajo spletno stran. 
                    Vse informacije so anonimizirane. Za uporabo teh piškotkov potrebujemo vašo privolitev.
                  </p>
                  <table className="w-full text-sm mt-3">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Ime</th>
                        <th className="text-left py-2">Namen</th>
                        <th className="text-left py-2">Trajanje</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2"><code>_analytics</code></td>
                        <td className="py-2">Statistika obiskov (anonimizirano)</td>
                        <td className="py-2">30 dni</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Upravljanje piškotkov */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Shield className="size-5 text-blue-600" />
                3. Upravljanje piškotkov
              </h2>
              <p className="text-slate-600 mb-4">
                Ob prvem obisku spletne strani boste pozvani, da se odločite glede uporabe piškotkov. 
                Svojo odločitev lahko kadarkoli spremenite:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
                <li>S klikom na povezavo "Nastavitve piškotkov" v nogi spletne strani</li>
                <li>Z brisanjem piškotkov v nastavitvah vašega brskalnika</li>
              </ul>
              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                <p className="text-sm text-slate-600">
                  <strong>Opozorilo:</strong> Če onemogočite nujno potrebne piškotke, nekatere funkcionalnosti 
                  spletne strani morda ne bodo delovale pravilno.
                </p>
              </div>
            </section>

            {/* Nastavitve brskalnika */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">4. Nastavitve brskalnika</h2>
              <p className="text-slate-600 mb-4">
                Piškotke lahko upravljate tudi neposredno v vašem brskalniku:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li><strong>Chrome:</strong> Nastavitve → Zasebnost in varnost → Piškotki</li>
                <li><strong>Firefox:</strong> Nastavitve → Zasebnost in varnost → Piškotki</li>
                <li><strong>Safari:</strong> Nastavitve → Zasebnost → Upravljaj podatke spletnih mest</li>
                <li><strong>Edge:</strong> Nastavitve → Piškotki in dovoljenja za spletna mesta</li>
              </ul>
            </section>

            {/* Kontakt */}
            <section>
              <h2 className="text-xl font-semibold mb-4">5. Kontakt</h2>
              <p className="text-slate-600">
                Za vprašanja o uporabi piškotkov se obrnite na nas preko e-pošte: 
                <a href="mailto:podpora@eveteran.gov.si" className="text-blue-600 hover:underline ml-1">
                  podpora@eveteran.gov.si
                </a>
              </p>
            </section>

          </CardContent>
        </Card>
      </div>
    </div>
  );
}
