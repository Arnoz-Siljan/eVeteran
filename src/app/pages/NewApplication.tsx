import { useState } from "react";
import { useNavigate, Link } from "react-router";
import { Check, ChevronLeft, ChevronRight, Upload, X } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Progress } from "../components/ui/progress";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Checkbox } from "../components/ui/checkbox";
import { toast } from "sonner";

export default function NewApplication() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    address: "",
    phone: "",
    email: "",
    veteranType: "",
    serviceYears: "",
    militaryUnit: "",
    reason: "",
    documents: [] as File[],
    gdprConsent: false,
  });

  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    toast.success("Vloga uspešno oddana!", {
      description: "Prejmeli boste obvestilo o statusu vloge na vaš e-naslov.",
    });
    setTimeout(() => {
      navigate("/vloga/status");
    }, 2000);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setFormData({ ...formData, documents: [...formData.documents, ...files] });
    }
  };

  const removeFile = (index: number) => {
    const newDocs = formData.documents.filter((_, i) => i !== index);
    setFormData({ ...formData, documents: newDocs });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Nova vloga za status veterana</CardTitle>
            <CardDescription>
              Korak {currentStep} od {totalSteps}
            </CardDescription>
            <Progress value={progress} className="mt-4" />
          </CardHeader>
          <CardContent>
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg mb-4">Osebni podatki</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Ime *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      placeholder="Janez"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Priimek *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      placeholder="Novak"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dateOfBirth">Datum rojstva *</Label>
                  <Input
                    id="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Naslov *</Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="Ulica 123, 1000 Ljubljana"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefon *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+386 XX XXX XXX"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-pošta *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="janez.novak@email.si"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Military Information */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg mb-4">Vojaški podatki</h3>
                </div>
                <div className="space-y-2">
                  <Label>Vrsta veteranstva *</Label>
                  <RadioGroup value={formData.veteranType} onValueChange={(value) => setFormData({ ...formData, veteranType: value })}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="combat" id="combat" />
                      <Label htmlFor="combat" className="font-normal">Bojevnik</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="peacekeeping" id="peacekeeping" />
                      <Label htmlFor="peacekeeping" className="font-normal">Mirovne misije</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="service" id="service" />
                      <Label htmlFor="service" className="font-normal">Vojaška služba</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="serviceYears">Leta službe *</Label>
                  <Input
                    id="serviceYears"
                    value={formData.serviceYears}
                    onChange={(e) => setFormData({ ...formData, serviceYears: e.target.value })}
                    placeholder="npr. 1991-1995"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="militaryUnit">Vojaška enota *</Label>
                  <Input
                    id="militaryUnit"
                    value={formData.militaryUnit}
                    onChange={(e) => setFormData({ ...formData, militaryUnit: e.target.value })}
                    placeholder="Ime vojaške enote"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reason">Razlog za pridobitev statusa veterana *</Label>
                  <Textarea
                    id="reason"
                    value={formData.reason}
                    onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                    placeholder="Opišite razlog za pridobitev statusa veterana..."
                    rows={5}
                  />
                </div>
              </div>
            )}

            {/* Step 3: Document Upload */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg mb-2">Nalaganje dokumentov</h3>
                  <p className="text-sm text-slate-600">
                    Naložite vse potrebne dokumente (potrdila, spričevala, fotografije...)
                  </p>
                </div>
                <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:border-blue-500 transition-colors">
                  <Upload className="size-12 mx-auto text-slate-400 mb-4" />
                  <Label htmlFor="file-upload" className="cursor-pointer">
                    <span className="text-blue-600 hover:text-blue-700">Kliknite za izbiro datotek</span>
                    {" "}ali povlecite datoteke sem
                  </Label>
                  <Input
                    id="file-upload"
                    type="file"
                    multiple
                    onChange={handleFileUpload}
                    className="hidden"
                    accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                  />
                  <p className="text-xs text-slate-500 mt-2">
                    Podprte datoteke: PDF, JPG, PNG, DOC, DOCX (maks. 10MB)
                  </p>
                </div>
                {formData.documents.length > 0 && (
                  <div className="space-y-2">
                    <Label>Naloženi dokumenti ({formData.documents.length})</Label>
                    {formData.documents.map((file, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                        <div className="flex items-center gap-2 flex-1 min-w-0">
                          <Check className="size-4 text-green-600 flex-shrink-0" />
                          <span className="text-sm truncate">{file.name}</span>
                          <span className="text-xs text-slate-500 flex-shrink-0">
                            ({(file.size / 1024).toFixed(1)} KB)
                          </span>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="flex-shrink-0"
                          onClick={() => removeFile(index)}
                        >
                          <X className="size-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Step 4: Review */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg mb-2">Pregled vloge</h3>
                  <p className="text-sm text-slate-600">
                    Preverite vse podatke pred oddajo vloge
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-3">Osebni podatki</h4>
                    <dl className="grid grid-cols-2 gap-2 text-sm">
                      <dt className="text-slate-600">Ime:</dt>
                      <dd>{formData.firstName} {formData.lastName}</dd>
                      <dt className="text-slate-600">Datum rojstva:</dt>
                      <dd>{formData.dateOfBirth}</dd>
                      <dt className="text-slate-600">Naslov:</dt>
                      <dd>{formData.address}</dd>
                      <dt className="text-slate-600">Telefon:</dt>
                      <dd>{formData.phone}</dd>
                      <dt className="text-slate-600">E-pošta:</dt>
                      <dd>{formData.email}</dd>
                    </dl>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-3">Vojaški podatki</h4>
                    <dl className="grid grid-cols-2 gap-2 text-sm">
                      <dt className="text-slate-600">Vrsta veteranstva:</dt>
                      <dd>{formData.veteranType}</dd>
                      <dt className="text-slate-600">Leta službe:</dt>
                      <dd>{formData.serviceYears}</dd>
                      <dt className="text-slate-600">Vojaška enota:</dt>
                      <dd>{formData.militaryUnit}</dd>
                    </dl>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-3">Dokumenti</h4>
                    <p className="text-sm">
                      Naloženih dokumentov: <span className="font-semibold">{formData.documents.length}</span>
                    </p>
                  </div>
                </div>
                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                  <p className="text-sm">
                    <strong>Opomba:</strong> Po oddaji vloge boste prejeli e-sporočilo s potrditvijo oddaje. 
                    Status vloge lahko spremljate v zavihku "Status vloge".
                  </p>
                </div>

                {/* GDPR Obvestilo o obdelavi podatkov */}
                <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-amber-800">Obvestilo o obdelavi osebnih podatkov</h4>
                  <p className="text-sm text-slate-600 mb-3">
                    Vaše osebne podatke (ime, priimek, datum rojstva, naslov, kontaktni podatki, podatki o vojaški službi) 
                    bo obdeloval Ministrstvo za obrambo RS za namen obdelave vaše vloge za status veterana. 
                    Podatki se posredujejo v Centralni register prebivalstva za preverjanje identitete.
                    Podrobne informacije o obdelavi najdete v naši{" "}
                    <Link to="/zasebnost" className="text-blue-600 hover:underline">izjavi o zasebnosti</Link>.
                  </p>
                </div>

                {/* Privolitev */}
                <div className="border border-slate-200 p-4 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <Checkbox 
                      id="gdprConsent" 
                      checked={formData.gdprConsent}
                      onCheckedChange={(checked) => setFormData({ ...formData, gdprConsent: checked as boolean })}
                    />
                    <div className="space-y-1">
                      <Label htmlFor="gdprConsent" className="font-normal cursor-pointer">
                        Potrjujem, da sem seznanjen/a z <Link to="/zasebnost" className="text-blue-600 hover:underline">izjavo o zasebnosti</Link> in 
                        se strinjam z obdelavo mojih osebnih podatkov za namen obravnave vloge za status veterana. *
                      </Label>
                      <p className="text-xs text-slate-500">
                        Brez privolitve vloge ni mogoče oddati.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={handlePrev}
                disabled={currentStep === 1}
              >
                <ChevronLeft className="size-4 mr-1" />
                Nazaj
              </Button>
              {currentStep < totalSteps ? (
                <Button onClick={handleNext}>
                  Naprej <ChevronRight className="size-4 ml-1" />
                </Button>
              ) : (
                <Button onClick={handleSubmit} disabled={!formData.gdprConsent}>
                  Oddaj vlogo <Check className="size-4 ml-1" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
