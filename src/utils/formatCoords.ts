export function formatLat(lat: number) {
  const hemi = lat >= 0 ? "N" : "S";
  return `${Math.abs(lat).toFixed(4)}° ${hemi}`;
}

export function formatLng(lng: number) {
  const hemi = lng >= 0 ? "E" : "W";
  return `${Math.abs(lng).toFixed(4)}° ${hemi}`;
}
