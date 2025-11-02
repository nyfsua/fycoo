import { useCallback, useState } from "react";

type GeoState =
  | { status: "idle" | "prompt"; coords?: undefined; error?: undefined }
  | { status: "granted"; coords: GeolocationCoordinates; error?: undefined }
  | { status: "denied" | "error"; coords?: undefined; error?: string };

export function useGeolocation() {
  const [state, setState] = useState<GeoState>({ status: "idle" });

  const request = useCallback(() => {
    if (!("geolocation" in navigator)) {
      setState({ status: "error", error: "Geolocation not supported" });
      return;
    }
    setState({ status: "prompt" });
    navigator.geolocation.getCurrentPosition(
      (pos) => setState({ status: "granted", coords: pos.coords }),
      (err) => {
        const reason =
          err.code === err.PERMISSION_DENIED
            ? "denied"
            : err.code === err.POSITION_UNAVAILABLE
            ? "Position unavailable"
            : err.code === err.TIMEOUT
            ? "Timed out"
            : "Unknown error";
        setState(
          err.code === err.PERMISSION_DENIED
            ? { status: "denied" }
            : { status: "error", error: reason }
        );
      },
      {
        enableHighAccuracy: false,      // “approximate” as requested
        timeout: 8000,
        maximumAge: 60_000,             // reuse recent position if available (1 min)
      }
    );
  }, []);

  return { state, request };
}
