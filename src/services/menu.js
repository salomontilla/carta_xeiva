/**
 * Servicio para consultar el menú público de Xeiva Campestre.
 * Incluye soporte de ETag (HTTP 304 Not Modified) y persistencia en localStorage
 * para resiliencia offline y carga rápida sin layout shift.
 */

const STORAGE_KEY_DATA = "xeiva_public_menu_data";
const STORAGE_KEY_ETAG = "xeiva_public_menu_etag";

const PUBLIC_API_URL =
  (typeof import.meta !== "undefined" && import.meta.env && import.meta.env.PUBLIC_API_URL) ||
  "https://app.xeivacampestre.com";

const BASE_URL = PUBLIC_API_URL.replace(/\/+$/, "");
export const MENU_ENDPOINT = `${BASE_URL}/api/menu`;

/**
 * Obtiene el snapshot del menú almacenado localmente en el navegador.
 * Retorna null si no existe o si se ejecuta en SSR.
 */
export function getCachedMenu() {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY_DATA);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (err) {
    console.warn("No se pudo leer el menú de localStorage:", err);
    return null;
  }
}

/**
 * Obtiene el ETag almacenado localmente.
 */
export function getCachedETag() {
  if (typeof window === "undefined") return null;
  try {
    return localStorage.getItem(STORAGE_KEY_ETAG);
  } catch {
    return null;
  }
}

/**
 * Guarda el menú y su ETag en localStorage de forma segura.
 */
export function saveCachedMenu(data, etag) {
  if (typeof window === "undefined") return;
  try {
    if (data) {
      localStorage.setItem(STORAGE_KEY_DATA, JSON.stringify(data));
    }
    if (etag) {
      localStorage.setItem(STORAGE_KEY_ETAG, etag);
    }
  } catch (err) {
    console.warn("No se pudo guardar el menú en localStorage:", err);
  }
}

/**
 * Consulta la API pública con soporte para If-None-Match.
 * Si la respuesta es 304, devuelve el snapshot en caché.
 * Si la respuesta es 200, actualiza el caché y devuelve los datos frescos.
 * Si ocurre un error de red o la API falla, devuelve los datos cacheados o null sin lanzar excepción.
 *
 * @returns {Promise<{ version?: string, categories: Array<{ id: string, name: string, sort_order: number }>, items: Array<{ id: string, category_id: string | null, name: string, description: string | null, base_price: number, sort_order: number, variants: Array<{ id: string, name: string, price: number }> }> } | null>}
 */
export async function fetchPublicMenu() {
  const cachedData = getCachedMenu();
  const cachedETag = getCachedETag();

  const headers = {};
  if (cachedETag && cachedData) {
    headers["If-None-Match"] = cachedETag;
  }

  try {
    const response = await fetch(MENU_ENDPOINT, {
      method: "GET",
      headers,
    });

    if (response.status === 304) {
      if (cachedData) {
        return cachedData;
      }
      // Si por alguna inconsistencia no hay datos locales, reintenta sin ETag
      const freshResponse = await fetch(MENU_ENDPOINT, { method: "GET" });
      if (freshResponse.ok) {
        const freshData = await freshResponse.json();
        const freshEtag =
          freshResponse.headers.get("etag") ||
          (freshData.version ? `W/"${freshData.version}"` : null);
        saveCachedMenu(freshData, freshEtag);
        return freshData;
      }
      return null;
    }

    if (response.ok) {
      const data = await response.json();
      const etag =
        response.headers.get("etag") ||
        (data.version ? `W/"${data.version}"` : null);
      saveCachedMenu(data, etag);
      return data;
    }

    console.warn(`Respuesta no exitosa al consultar menú (${response.status})`);
    return cachedData || null;
  } catch (error) {
    console.warn("Error de red al consultar API de menú, usando respaldo local:", error);
    return cachedData || null;
  }
}
