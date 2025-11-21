import { useEffect, useRef, useState } from "react";
import type { ISuscriptionPresenter } from "../core/presentation/ISuscriptionPresenter";
import { suscriptionPresenterProvider } from "../infrastructure/presentation/presenterProvider";
import type { ISuscriptionScreens } from "../core/screens/ISuscriptionScreens";
import type ISuscription from "../core/entities/ISuscription";

/* eslint-disable @typescript-eslint/no-explicit-any */
const SuscriptionScreen = () => {
  const presenterProvider = suscriptionPresenterProvider();

  const [suscription, setSuscription] = useState<ISuscription[]>([]);
  const [loaded] = useState(true); // Initialize to true since effect runs on mount
  const [isContentLoading, setIsContentLoading] = useState<boolean>(false);
  const presenterRef = useRef<ISuscriptionPresenter | null>(null);

  const suscriptionTitleTab = "Ingresos";

  const viewHandlers: ISuscriptionScreens = {
    onGetSuscriptionSuccess(data): void {
      setSuscription(data);
      setIsContentLoading(false);
    },
    onGetSuscriptionError(error): void {
    },
    onEditSuscriptionSuccess(): void {
    },
    onEditSuscriptionError(): void {
    },
    onSaveSuscriptionSuccess(): void {
    },
    onSaveSuscriptionError(): void {
    },
    onDeleteSuscriptionSuccess(): void {
    },
    onDeleteSuscriptionError(): void {

    },
  };
  
  //Con este useEffect cargamos nuestro presenter, el que se encargará de traer todas nuestras funciones que construimos
  useEffect(() => {
    document.title = suscriptionTitleTab;
    const presenterInstance = presenterProvider.getPresenter(viewHandlers);
    presenterRef.current = presenterInstance;
        
    // Call getSuscription - this is an async operation that will call viewHandlers
    // which will update state, but that's fine as it's in a callback
    presenterInstance.getSuscription();
  }, []);

  return (
    <div>
      {loaded && <h1>HOLA DESDE MODULO SERVICIOS</h1>}
    </div>
  );
};

export default SuscriptionScreen;
