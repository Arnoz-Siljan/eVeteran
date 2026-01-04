import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Cookie } from "lucide-react";
import { Button } from "./ui/button";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("cookie_consent", JSON.stringify({
      necessary: true,
      analytics: true,
      timestamp: new Date().toISOString()
    }));
    setShowBanner(false);
  };

  const acceptNecessary = () => {
    localStorage.setItem("cookie_consent", JSON.stringify({
      necessary: true,
      analytics: false,
      timestamp: new Date().toISOString()
    }));
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex items-start gap-3 flex-1">
            <Cookie className="size-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Ta spletna stran uporablja piškotke</h3>
              <p className="text-sm text-slate-600">
                Za delovanje spletne strani uporabljamo nujno potrebne piškotke. 
                Z vašo privolitvijo lahko uporabimo tudi analitične piškotke za izboljšanje uporabniške izkušnje.
                Več informacij najdete v naši{" "}
                <Link to="/piskotki" className="text-blue-600 hover:underline">
                  izjavi o piškotkih
                </Link>
                {" "}in{" "}
                <Link to="/zasebnost" className="text-blue-600 hover:underline">
                  izjavi o zasebnosti
                </Link>.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            <Button variant="outline" size="sm" onClick={acceptNecessary}>
              Samo nujni
            </Button>
            <Button size="sm" onClick={acceptAll}>
              Sprejmi vse
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
