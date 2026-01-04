import { Outlet, Link, useLocation } from "react-router";
import { Bell, Menu, User, Shield, FileText } from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";

export default function Root() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-6">
              <Link to="/" className="flex items-center gap-2">
                <Shield className="size-8 text-blue-600" />
                <div>
                  <h1 className="font-bold text-lg">eVeteran</h1>
                  <p className="text-xs text-slate-500">Republika Slovenija</p>
                </div>
              </Link>

              <nav className="hidden md:flex items-center gap-1">
                <Link to="/">
                  <Button variant={location.pathname === "/" ? "default" : "ghost"} size="sm">
                    Domov
                  </Button>
                </Link>
                <Link to="/vloga/nova">
                  <Button variant={location.pathname.startsWith("/vloga/nova") ? "default" : "ghost"} size="sm">
                    Nova vloga
                  </Button>
                </Link>
                <Link to="/vloga/status">
                  <Button variant={location.pathname.startsWith("/vloga/status") ? "default" : "ghost"} size="sm">
                    Status vloge
                  </Button>
                </Link>
                <Link to="/admin">
                  <Button variant={location.pathname.startsWith("/admin") ? "default" : "ghost"} size="sm">
                    <Shield className="size-4 mr-1" />
                    MORS
                  </Button>
                </Link>
              </nav>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="size-5" />
                <Badge className="absolute -top-1 -right-1 size-5 p-0 flex items-center justify-center text-xs">
                  3
                </Badge>
              </Button>
              <Button variant="ghost" size="icon">
                <User className="size-5" />
              </Button>

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="size-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <nav className="flex flex-col gap-2 mt-8">
                    <Link to="/">
                      <Button variant="ghost" className="w-full justify-start">
                        Domov
                      </Button>
                    </Link>
                    <Link to="/vloga/nova">
                      <Button variant="ghost" className="w-full justify-start">
                        <FileText className="size-4 mr-2" />
                        Nova vloga
                      </Button>
                    </Link>
                    <Link to="/vloga/status">
                      <Button variant="ghost" className="w-full justify-start">
                        Status vloge
                      </Button>
                    </Link>
                    <Link to="/admin">
                      <Button variant="ghost" className="w-full justify-start">
                        <Shield className="size-4 mr-2" />
                        MORS
                      </Button>
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-3">eVeteran</h3>
              <p className="text-sm text-slate-300">
                Digitalna rešitev za pridobitev statusa veterana preko portala gov.si.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Povezave</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li><a href="#" className="hover:text-white">O sistemu</a></li>
                <li><a href="#" className="hover:text-white">Pogosta vprašanja</a></li>
                <li><a href="#" className="hover:text-white">Kontakt</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Pravne informacije</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li><a href="#" className="hover:text-white">Varstvo osebnih podatkov</a></li>
                <li><a href="#" className="hover:text-white">Pogoji uporabe</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-6 text-center text-sm text-slate-400">
            © 2025 eVeteran. Vsi pravice pridržane. | Republika Slovenija
          </div>
        </div>
      </footer>
    </div>
  );
}
