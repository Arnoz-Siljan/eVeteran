import { useState } from "react";
import { AlertCircle, CheckCircle, Clock, Download, Eye, FileText, Search, Shield, XCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { toast } from "sonner";

// Mock data
const mockApplications = [
  {
    id: "VET-2025-001",
    name: "Janez Novak",
    submittedDate: "2025-01-15",
    status: "pending",
    veteranType: "Bojevnik",
    documents: 5,
  },
  {
    id: "VET-2025-002",
    name: "Marija Horvat",
    submittedDate: "2025-01-14",
    status: "pending",
    veteranType: "Mirovne misije",
    documents: 7,
  },
  {
    id: "VET-2024-089",
    name: "Peter Kos",
    submittedDate: "2024-12-20",
    status: "approved",
    veteranType: "Vojaška služba",
    documents: 6,
  },
  {
    id: "VET-2024-088",
    name: "Ana Zupan",
    submittedDate: "2024-12-18",
    status: "incomplete",
    veteranType: "Bojevnik",
    documents: 3,
  },
];

const stats = {
  total: 145,
  pending: 23,
  approved: 98,
  rejected: 12,
  incomplete: 12,
};

export default function AdminDashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedApp, setSelectedApp] = useState<typeof mockApplications[0] | null>(null);
  const [decision, setDecision] = useState("approved");
  const [comments, setComments] = useState("");

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge className="bg-blue-500"><Clock className="size-3 mr-1" />V čakanju</Badge>;
      case "approved":
        return <Badge className="bg-green-500"><CheckCircle className="size-3 mr-1" />Odobreno</Badge>;
      case "rejected":
        return <Badge variant="destructive"><XCircle className="size-3 mr-1" />Zavrnjeno</Badge>;
      case "incomplete":
        return <Badge variant="secondary"><AlertCircle className="size-3 mr-1" />Nepopolna</Badge>;
      default:
        return <Badge>Neznano</Badge>;
    }
  };

  const handleDecision = () => {
    toast.success("Odločitev uspešno shranjena", {
      description: `Vloga ${selectedApp?.id} je bila ${decision === "approved" ? "odobrena" : "zavrnjena"}.`,
    });
    setSelectedApp(null);
    setComments("");
  };

  const filteredApplications = mockApplications.filter(
    (app) =>
      app.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <Shield className="size-8 text-blue-600" />
          <div>
            <h1 className="text-3xl">MORS Dashboard</h1>
            <p className="text-slate-600">Upravljanje vlog za status veterana</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-5 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Skupaj vlog</CardDescription>
              <CardTitle className="text-3xl">{stats.total}</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>V čakanju</CardDescription>
              <CardTitle className="text-3xl text-blue-600">{stats.pending}</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Odobreno</CardDescription>
              <CardTitle className="text-3xl text-green-600">{stats.approved}</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Zavrnjeno</CardDescription>
              <CardTitle className="text-3xl text-red-600">{stats.rejected}</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Nepopolne</CardDescription>
              <CardTitle className="text-3xl text-amber-600">{stats.incomplete}</CardTitle>
            </CardHeader>
          </Card>
        </div>

        {/* Main Content */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Vloge</CardTitle>
                <CardDescription>Pregled in obdelava prispelih vlog</CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                  <Input
                    placeholder="Iskanje po ID ali imenu..."
                    className="pl-9 w-64"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="pending">
              <TabsList>
                <TabsTrigger value="pending">V čakanju ({stats.pending})</TabsTrigger>
                <TabsTrigger value="all">Vse vloge</TabsTrigger>
                <TabsTrigger value="approved">Odobrene</TabsTrigger>
                <TabsTrigger value="incomplete">Nepopolne</TabsTrigger>
              </TabsList>

              <TabsContent value="pending" className="mt-6">
                <ApplicationsTable
                  applications={filteredApplications.filter((app) => app.status === "pending")}
                  onView={setSelectedApp}
                  getStatusBadge={getStatusBadge}
                />
              </TabsContent>

              <TabsContent value="all" className="mt-6">
                <ApplicationsTable
                  applications={filteredApplications}
                  onView={setSelectedApp}
                  getStatusBadge={getStatusBadge}
                />
              </TabsContent>

              <TabsContent value="approved" className="mt-6">
                <ApplicationsTable
                  applications={filteredApplications.filter((app) => app.status === "approved")}
                  onView={setSelectedApp}
                  getStatusBadge={getStatusBadge}
                />
              </TabsContent>

              <TabsContent value="incomplete" className="mt-6">
                <ApplicationsTable
                  applications={filteredApplications.filter((app) => app.status === "incomplete")}
                  onView={setSelectedApp}
                  getStatusBadge={getStatusBadge}
                />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Decision Dialog */}
        <Dialog open={selectedApp !== null} onOpenChange={() => setSelectedApp(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Odločitev o vlogi {selectedApp?.id}</DialogTitle>
              <DialogDescription>
                Preglejte vlogo in sprejmite odločitev
              </DialogDescription>
            </DialogHeader>
            {selectedApp && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Vlagatelj</Label>
                    <p>{selectedApp.name}</p>
                  </div>
                  <div>
                    <Label>Številka vloge</Label>
                    <p className="font-mono">{selectedApp.id}</p>
                  </div>
                  <div>
                    <Label>Vrsta veteranstva</Label>
                    <p>{selectedApp.veteranType}</p>
                  </div>
                  <div>
                    <Label>Dokumenti</Label>
                    <p>{selectedApp.documents} priloženih</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1">
                    <FileText className="size-4 mr-2" />
                    Odpri vlogo
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Download className="size-4 mr-2" />
                    Prenesi dokumente
                  </Button>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label className="mb-3 block">Odločitev *</Label>
                    <RadioGroup value={decision} onValueChange={setDecision}>
                      <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-slate-50">
                        <RadioGroupItem value="approved" id="approved" />
                        <Label htmlFor="approved" className="flex-1 cursor-pointer font-normal">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="size-4 text-green-600" />
                            <span>Odobri status veterana</span>
                          </div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-slate-50">
                        <RadioGroupItem value="rejected" id="rejected" />
                        <Label htmlFor="rejected" className="flex-1 cursor-pointer font-normal">
                          <div className="flex items-center gap-2">
                            <XCircle className="size-4 text-red-600" />
                            <span>Zavrni vlogo</span>
                          </div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-slate-50">
                        <RadioGroupItem value="incomplete" id="incomplete" />
                        <Label htmlFor="incomplete" className="flex-1 cursor-pointer font-normal">
                          <div className="flex items-center gap-2">
                            <AlertCircle className="size-4 text-amber-600" />
                            <span>Zahtevaj dopolnitev</span>
                          </div>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="comments">Komentar / Razlog</Label>
                    <Textarea
                      id="comments"
                      value={comments}
                      onChange={(e) => setComments(e.target.value)}
                      placeholder="Vnesite komentar ali razlog za odločitev..."
                      rows={4}
                    />
                  </div>
                </div>

                <div className="flex gap-2 justify-end">
                  <Button variant="outline" onClick={() => setSelectedApp(null)}>
                    Prekliči
                  </Button>
                  <Button onClick={handleDecision}>
                    Shrani odločitev
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

function ApplicationsTable({
  applications,
  onView,
  getStatusBadge,
}: {
  applications: typeof mockApplications;
  onView: (app: typeof mockApplications[0]) => void;
  getStatusBadge: (status: string) => React.ReactNode;
}) {
  return (
    <div className="border rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID vloge</TableHead>
            <TableHead>Vlagatelj</TableHead>
            <TableHead>Vrsta</TableHead>
            <TableHead>Datum oddaje</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Dokumenti</TableHead>
            <TableHead className="text-right">Akcije</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {applications.length === 0 ? (
            <TableRow>
              <TableCell colSpan={7} className="text-center py-8 text-slate-500">
                Ni vlog za prikaz
              </TableCell>
            </TableRow>
          ) : (
            applications.map((app) => (
              <TableRow key={app.id}>
                <TableCell className="font-mono text-sm">{app.id}</TableCell>
                <TableCell>{app.name}</TableCell>
                <TableCell className="text-sm">{app.veteranType}</TableCell>
                <TableCell className="text-sm">
                  {new Date(app.submittedDate).toLocaleDateString("sl-SI")}
                </TableCell>
                <TableCell>{getStatusBadge(app.status)}</TableCell>
                <TableCell>
                  <Badge variant="secondary">{app.documents}</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm" onClick={() => onView(app)}>
                    <Eye className="size-4 mr-1" />
                    Preglej
                  </Button>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
