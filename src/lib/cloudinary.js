const CLOUD = import.meta.env.VITE_CLOUDINARY_CLOUD;

function normalizePublicId(id = "") {
  return id.replace(/^\/+/, ""); // only remove leading slashes
}

export function cld(publicId, transforms = "f_auto,q_auto") {
  if (!CLOUD) console.warn("Missing VITE_CLOUDINARY_CLOUD");
  const pid = normalizePublicId(publicId);
  const base = `https://res.cloudinary.com/${CLOUD}/image/upload`;
  return `${base}/${transforms}/${pid}`;
}

// Optional: versioned URL for cache-busting
export function cldv(publicId, version, transforms = "f_auto,q_auto") {
  if (!CLOUD) console.warn("Missing VITE_CLOUDINARY_CLOUD");
  const pid = normalizePublicId(publicId);
  const base = `https://res.cloudinary.com/${CLOUD}/image/upload`;
  return `${base}/${version}/${transforms}/${pid}`;
}
