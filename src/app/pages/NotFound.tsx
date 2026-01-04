import { Link } from "react-router";
import { Home, AlertTriangle } from "lucide-react";
import { Button } from "../components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center">
        <AlertTriangle className="size-20 text-amber-500 mx-auto mb-6" />
        <h1 className="text-4xl mb-4">404 - Stran ni najdena</h1>
        <p className="text-lg text-slate-600 mb-8">
          Stran, ki jo iščete, ne obstaja ali je bila premaknjena.
        </p>
        <Link to="/">
          <Button size="lg">
            <Home className="mr-2 size-5" />
            Nazaj na domačo stran
          </Button>
        </Link>
      </div>
    </div>
  );
}
