function formatNumber(num) {
  try {
    return new Intl.NumberFormat("es-MX").format(num ?? 0);
  } catch {
    return String(num ?? 0);
  }
}

function addArtistResponse(container, artist) {
  const card = document.createElement("div");
  card.className = "card mb-3 shadow-sm";
  card.style.maxWidth = "720px";

  const row = document.createElement("div");
  row.className = "row g-0";

  const imgCol = document.createElement("div");
  imgCol.className = "col-sm-4";

  const img = document.createElement("img");
  img.src = artist.images?.[0]?.url || "https://placehold.co/600x600?text=Sin+imagen";
  img.alt = `Foto de ${artist.name || "artista"}`;
  img.className = "img-fluid rounded-start";
  img.loading = "lazy";
  imgCol.appendChild(img);

  const bodyCol = document.createElement("div");
  bodyCol.className = "col-sm-8";

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const title = document.createElement("h5");
  title.className = "card-title mb-2";
  title.textContent = artist.name ?? "Sin nombre";

  const followers = document.createElement("p");
  followers.className = "card-text mb-1";
  followers.innerHTML = `<strong>Seguidores:</strong> ${formatNumber(artist.followers?.total)}`;

  const popularityWrap = document.createElement("div");
  popularityWrap.className = "mb-2";
  const popLabel = document.createElement("div");
  popLabel.className = "d-flex justify-content-between small";
  popLabel.innerHTML = `<span class="text-muted">Popularidad</span><span>${artist.popularity ?? 0}/100</span>`;
  const progress = document.createElement("div");
  progress.className = "progress";
  const bar = document.createElement("div");
  bar.className = "progress-bar";
  bar.style.width = `${artist.popularity ?? 0}%`;
  progress.appendChild(bar);
  popularityWrap.append(popLabel, progress);

  const genres = document.createElement("p");
  genres.className = "card-text mb-3";
  const badges = (artist.genres ?? [])
    .map((g) => `<span class="badge text-bg-secondary me-1 mb-1">${g}</span>`)
    .join("");
  genres.innerHTML = `<strong>Géneros:</strong> ${badges || "Sin información"}`;

  const link = document.createElement("a");
  link.href = artist.external_urls?.spotify ?? "#";
  link.target = "_blank";
  link.rel = "noopener";
  link.className = "btn btn-success";
  link.textContent = "Abrir en Spotify";

  cardBody.append(title, followers, popularityWrap, genres, link);
  bodyCol.appendChild(cardBody);
  row.append(imgCol, bodyCol);
  card.appendChild(row);
  container.appendChild(card);
}

document.addEventListener("DOMContentLoaded", () => {
  document.body.style.backgroundColor = "#E6F9D5";

  const btn = document.getElementById("fetch-btn");
  const tokenInput = document.getElementById("token");
  const select = document.getElementById("track-id");
  const container = document.getElementById("track-info");

  try {
    if (tokenInput && !tokenInput.value) {
      const saved = localStorage.getItem("sp_access_token");
      if (saved) tokenInput.value = saved;
    }
  } catch {}

  function setLoading(isLoading) {
    if (!btn) return;
    if (isLoading) {
      btn.dataset.originalText = btn.dataset.originalText || btn.textContent;
      btn.disabled = true;
      btn.innerHTML = `<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Cargando…`;
    } else {
      btn.disabled = false;
      btn.textContent = btn.dataset.originalText || "Obtener información del artista";
    }
  }

  btn.addEventListener("click", async () => {
    container.innerHTML = "";
    const loading = document.createElement("div");
    loading.className = "alert alert-secondary";
    loading.textContent = "Cargando…";
    container.appendChild(loading);
    setLoading(true);

    try {
      const token = tokenInput.value.trim();
      const artistId = select.value.trim();

      if (!token) throw new Error("Falta el token (pégalo sin la palabra 'Bearer').");
      if (!artistId) throw new Error("Falta el ID del artista.");

      try { localStorage.setItem("sp_access_token", token); } catch {}

      const response = await fetch(`https://api.spotify.com/v1/artists/${artistId}`, {
        headers: { Authorization: `Bearer ${token}` },
        cache: "no-store",
      });

      if (response.status === 401) throw new Error("Token inválido o expirado. Obtén uno nuevo en tu auth.html.");
      if (!response.ok) throw new Error(`Error ${response.status}: ${response.statusText}`);

      const data = await response.json();
      container.innerHTML = "";
      addArtistResponse(container, data);
    } catch (err) {
      container.innerHTML = "";
      const error = document.createElement("div");
      error.className = "alert alert-danger";
      error.textContent = (err && err.message) ? err.message : String(err);
      container.appendChild(error);
    } finally {
      setLoading(false);
    }
  });
});
