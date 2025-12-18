import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const projectId = "m5ik5me8";
export const dataset = "production";

const SANITY_QUERY_ENDPOINT = `https://${projectId}.api.sanity.io/v1/data/query/${dataset}`;

export const sanityClient = {
  async fetch<T = any>(query: string, params?: Record<string, unknown>): Promise<T> {

    const body = JSON.stringify(params ? { query, params } : { query });
    const headers: Record<string, string> = { "Content-Type": "application/json" };

    const res = await fetch(SANITY_QUERY_ENDPOINT, { method: "POST", headers, body });
    const text = await res.text().catch(() => "");

    if (!res.ok) {
      try {
        const json = JSON.parse(text);
        const msg = json?.error?.description ?? text ?? res.statusText;
        throw new Error(`Sanity fetch failed (${res.status}): ${msg}`);
      } catch {
        throw new Error(`Sanity fetch failed (${res.status}): ${text || res.statusText}`);
      }
    }

    let json;
    try {
      json = JSON.parse(text);
    } catch {
      throw new Error("Sanity returned a non-JSON response");
    }

    if (json?.error) throw new Error(`Sanity error: ${JSON.stringify(json.error)}`);
    return (json?.result ?? null) as T;
  },
};

const builder = createImageUrlBuilder({ projectId, dataset });
export const urlFor = (source: SanityImageSource) => builder.image(source);
