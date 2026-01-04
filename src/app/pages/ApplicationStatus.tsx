import { useState } from "react";
import { AlertCircle, CheckCircle, Clock, FileText, Mail, MessageSquare } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Alert, AlertDescription } from "../components/ui/alert";

const mockApplications = [
  {
    id: "VET-2025-001",
    submittedDate: "2025-01-15",
    status: "in_review",
    veteranType: "Bojevnik",
    lastUpdate: "2025-01-16",
    notifications: [
      { date: "2025-01-16", message: "Vloga je v obdelavi pri MORS", type: "info" },
      { date: "2025-01-15", message: "Vloga uspešno oddana", type: "success" },
    ],
  },
  {
    id: "VET-2024-089",
    submittedDate: "2024-12-20",
    status: "approved",
    veteranType: "Mirovne misije",
    lastUpdate: "2025-01-10",
    decision: "Odobreno",
    notifications: [
      { date: "2025-01-10", message: "Status veterana odobren", type: "success" },
      { date: "2024-12-22", message: "Vloga je popolna in posredovana MORS", type: "info" },
      { date: "2024-12-20", message: "Vloga uspešno oddana", type: "success" },
    ],
  },
];

export default function ApplicationStatus() {
  const [selectedApp, setSelectedApp] = useState(mockApplications[0]);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "in_review":
        return <Badge className="bg-blue-500"><Clock className="size-3 mr-1" />V obdelavi</Badge>;
      case "approved":
        return <Badge className="bg-green-500"><CheckCircle className="size-3 mr-1" />Odobreno</Badge>;
      case "incomplete":
        return <Badge variant="destructive"><AlertCircle className="size-3 mr-1" />Nepopolna</Badge>;
      default:
        return <Badge variant="secondary">Neznano</Badge>;
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl mb-2">Status vloge</h1>
          <p className="text-slate-600">
            Spremljajte status vaših vlog za pridobitev statusa veterana
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Applications List */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Moje vloge</CardTitle>
                <CardDescription>{mockApplications.length} aktivnih vlog</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {mockApplications.map((app) => (
                  <div
                    key={app.id}
                    className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                      selectedApp.id === app.id
                        ? "bg-blue-50 border-blue-300"
                        : "hover:bg-slate-50"
                    }`}
                    onClick={() => setSelectedApp(app)}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-mono text-sm">{app.id}</span>
                      {getStatusBadge(app.status)}
                    </div>
                    <p className="text-sm text-slate-600">
                      Oddana: {new Date(app.submittedDate).toLocaleDateString("sl-SI")}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Application Details */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Vloga {selectedApp.id}</CardTitle>
                    <CardDescription>
                      Oddana {new Date(selectedApp.submittedDate).toLocaleDateString("sl-SI")}
                    </CardDescription>
                  </div>
                  {getStatusBadge(selectedApp.status)}
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="timeline">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="timeline">Časovnica</TabsTrigger>
                    <TabsTrigger value="details">Podrobnosti</TabsTrigger>
                    <TabsTrigger value="messages">Sporočila</TabsTrigger>
                  </TabsList>

                  <TabsContent value="timeline" className="space-y-4 mt-6">
                    <h3 className="font-semibold">Zgodovina vloge</h3>
                    <div className="space-y-4">
                      {selectedApp.notifications.map((notif, index) => (
                        <div key={index} className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className={`size-8 rounded-full flex items-center justify-center ${
                              notif.type === "success" ? "bg-green-100" : "bg-blue-100"
                            }`}>
                              {notif.type === "success" ? (
                                <CheckCircle className="size-4 text-green-600" />
                              ) : (
                                <Clock className="size-4 text-blue-600" />
                              )}
                            </div>
                            {index < selectedApp.notifications.length - 1 && (
                              <div className="ml-4 w-0.5 h-full bg-slate-200 mt-2" />
                            )}
                          </div>
                          <div className="flex-1 pb-8">
                            <p className="text-sm">{notif.message}</p>
                            <p className="text-xs text-slate-500 mt-1">
                              {new Date(notif.date).toLocaleDateString("sl-SI", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="details" className="space-y-4 mt-6">
                    <h3 className="font-semibold">Podrobnosti vloge</h3>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label>Številka vloge</Label>
                          <p className="font-mono">{selectedApp.id}</p>
                        </div>
                        <div>
                          <Label>Status</Label>
                          <div className="mt-1">{getStatusBadge(selectedApp.status)}</div>
                        </div>
                        <div>
                          <Label>Vrsta veteranstva</Label>
                          <p>{selectedApp.veteranType}</p>
                        </div>
                        <div>
                          <Label>Datum oddaje</Label>
                          <p>{new Date(selectedApp.submittedDate).toLocaleDateString("sl-SI")}</p>
                        </div>
                      </div>

                      {selectedApp.status === "incomplete" && (
                        <Alert variant="destructive">
                          <AlertCircle className="size-4" />
                          <AlertDescription>
                            Vloga je nepopolna. Prosimo dopolnite manjkajoče dokumente.
                          </AlertDescription>
                        </Alert>
                      )}

                      {selectedApp.status === "approved" && (
                        <Alert className="border-green-200 bg-green-50">
                          <CheckCircle className="size-4 text-green-600" />
                          <AlertDescription className="text-green-800">
                            Čestitamo! Vaš status veterana je bil odobren. Odločba je bila poslana na vaš e-naslov.
                          </AlertDescription>
                        </Alert>
                      )}

                      <div className="flex gap-2">
                        <Button variant="outline" className="flex-1">
                          <FileText className="size-4 mr-2" />
                          Prenesi vlogo
                        </Button>
                        {selectedApp.status === "incomplete" && (
                          <Button className="flex-1">
                            Dopolni vlogo
                          </Button>
                        )}
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="messages" className="space-y-4 mt-6">
                    <h3 className="font-semibold">Sporočila</h3>
                    <Alert>
                      <Mail className="size-4" />
                      <AlertDescription>
                        Vsa obvestila so bila poslana tudi na vaš e-naslov.
                      </AlertDescription>
                    </Alert>
                    <div className="space-y-3">
                      {selectedApp.notifications.map((notif, index) => (
                        <div key={index} className="bg-slate-50 p-4 rounded-lg">
                          <div className="flex items-start gap-3">
                            <MessageSquare className="size-5 text-slate-400 flex-shrink-0 mt-0.5" />
                            <div className="flex-1">
                              <p className="text-sm">{notif.message}</p>
                              <p className="text-xs text-slate-500 mt-1">
                                {new Date(notif.date).toLocaleDateString("sl-SI")}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="text-sm font-medium text-slate-700">{children}</label>;
}
