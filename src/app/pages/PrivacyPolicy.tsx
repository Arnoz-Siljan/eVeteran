import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Shield, Lock, Eye, Users, Clock, Mail } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="size-10 text-blue-600" />
              <div>
                <CardTitle className="text-2xl">Izjava o zasebnosti</CardTitle>
                <p className="text-slate-500">Zadnja posodobitev: januar 2026</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="prose prose-slate max-w-none">
            
            {/* Uvod */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Lock className="size-5 text-blue-600" />
                1. Uvod
              </h2>
              <p className="text-slate-600 mb-4">
                Portal eVeteran je digitalna rešitev Ministrstva za obrambo Republike Slovenije (MORS) 
                za oddajo in obdelavo vlog za pridobitev statusa veterana. Varovanju vaših osebnih podatkov 
                posvečamo posebno pozornost in jih obdelujemo v skladu z Uredbo (EU) 2016/679 o varstvu 
                posameznikov pri obdelavi osebnih podatkov (GDPR) ter Zakonom o varstvu osebnih podatkov (ZVOP-2).
              </p>
            </section>

            {/* Osebni podatki */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Eye className="size-5 text-blue-600" />
                2. Osebni podatki, ki jih zbiramo
              </h2>
              <p className="text-slate-600 mb-4">
                Za obdelavo vaše vloge za status veterana zbiramo naslednje osebne podatke:
              </p>
              <div className="bg-slate-50 p-4 rounded-lg mb-4">
                <h3 className="font-semibold mb-2">Identifikacijski podatki:</h3>
                <ul className="list-disc list-inside text-slate-600 space-y-1">
                  <li>Ime in priimek</li>
                  <li>Datum rojstva</li>
                  <li>Naslov stalnega prebivališča</li>
                </ul>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg mb-4">
                <h3 className="font-semibold mb-2">Kontaktni podatki:</h3>
                <ul className="list-disc list-inside text-slate-600 space-y-1">
                  <li>Telefonska številka</li>
                  <li>Elektronski naslov (e-pošta)</li>
                </ul>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg mb-4">
                <h3 className="font-semibold mb-2">Podatki o vojaški službi:</h3>
                <ul className="list-disc list-inside text-slate-600 space-y-1">
                  <li>Vrsta veteranstva (bojevnik, mirovne misije, vojaška služba)</li>
                  <li>Obdobje službe (leta)</li>
                  <li>Vojaška enota</li>
                  <li>Razlog za pridobitev statusa</li>
                </ul>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Dokumentacija:</h3>
                <ul className="list-disc list-inside text-slate-600 space-y-1">
                  <li>Potrdila o službi</li>
                  <li>Spričevala in druga dokazila</li>
                  <li>Fotografije dokumentov</li>
                </ul>
              </div>
            </section>

            {/* Namen obdelave */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Users className="size-5 text-blue-600" />
                3. Namen in pravna podlaga obdelave
              </h2>
              <p className="text-slate-600 mb-4">
                Vaše osebne podatke obdelujemo izključno za naslednje namene:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
                <li><strong>Obdelava vloge:</strong> Preverjanje ustreznosti in popolnosti vloge za status veterana</li>
                <li><strong>Preverjanje podatkov:</strong> Avtomatsko preverjanje v zunanjih evidencah (MORS, CRP)</li>
                <li><strong>Komunikacija:</strong> Obveščanje o statusu vloge, zahtevah za dopolnitev in končni odločitvi</li>
                <li><strong>Arhiviranje:</strong> Hramba dokumentacije skladno z zakonodajo</li>
              </ul>
              <p className="text-slate-600">
                <strong>Pravna podlaga:</strong> Obdelava temelji na izvajanju javne naloge (člen 6(1)(e) GDPR) 
                in zakonskih obveznostih (člen 6(1)(c) GDPR) skladno z Zakonom o vojnih veteranih.
              </p>
            </section>

            {/* Prejemniki podatkov */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">4. Prejemniki osebnih podatkov</h2>
              <p className="text-slate-600 mb-4">
                Vaši osebni podatki se posredujejo naslednjim prejemnikom:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li><strong>Ministrstvo za obrambo RS (MORS)</strong> – obdelava in odločanje o vlogi</li>
                <li><strong>Centralni register prebivalstva (CRP)</strong> – preverjanje identitete</li>
                <li><strong>Ponudniki storitev gostovanja</strong> – tehnična obdelava (v EU)</li>
              </ul>
            </section>

            {/* Hramba podatkov */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Clock className="size-5 text-blue-600" />
                5. Obdobje hrambe
              </h2>
              <p className="text-slate-600">
                Vaše osebne podatke hranimo v skladu z zakonskimi roki za hrambo dokumentacije. 
                Vloge in pripadajoča dokumentacija se hranijo trajno skladno s predpisi o arhiviranju 
                javne dokumentacije. Kontaktni podatki za obveščanje se brišejo 5 let po zaključku postopka.
              </p>
            </section>

            {/* Pravice posameznika */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">6. Vaše pravice</h2>
              <p className="text-slate-600 mb-4">
                Skladno z GDPR imate naslednje pravice glede vaših osebnih podatkov:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Pravica dostopa</h3>
                  <p className="text-sm text-slate-600">Zahtevate lahko informacije o tem, katere podatke obdelujemo.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Pravica do popravka</h3>
                  <p className="text-sm text-slate-600">Zahtevate lahko popravek netočnih osebnih podatkov.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Pravica do izbrisa</h3>
                  <p className="text-sm text-slate-600">V določenih primerih lahko zahtevate izbris podatkov.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Pravica do ugovora</h3>
                  <p className="text-sm text-slate-600">Ugovarjate lahko obdelavi na podlagi zakonitih interesov.</p>
                </div>
              </div>
            </section>

            {/* Kontakt */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Mail className="size-5 text-blue-600" />
                7. Kontakt
              </h2>
              <div className="bg-slate-50 p-4 rounded-lg">
                <p className="text-slate-600 mb-2">
                  <strong>Upravljavec osebnih podatkov:</strong>
                </p>
                <p className="text-slate-600">
                  Ministrstvo za obrambo Republike Slovenije<br />
                  Vojkova cesta 55<br />
                  1000 Ljubljana<br />
                  E-pošta: dpo@mors.gov.si<br />
                  Telefon: 01 471 22 11
                </p>
              </div>
              <p className="text-slate-600 mt-4">
                Za vprašanja o varovanju osebnih podatkov ali uveljavljanje pravic se obrnite na 
                pooblaščeno osebo za varstvo podatkov (DPO) na zgornji naslov.
              </p>
              <p className="text-slate-600 mt-4">
                Če menite, da so bile vaše pravice kršene, imate pravico vložiti pritožbo pri 
                Informacijskem pooblaščencu RS (<a href="https://www.ip-rs.si" className="text-blue-600 hover:underline">www.ip-rs.si</a>).
              </p>
            </section>

          </CardContent>
        </Card>
      </div>
    </div>
  );
}
