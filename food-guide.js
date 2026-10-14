(() => {
  "use strict";

  // Empfehlungen: Augsburger Kolleg:innen. Sachinfos: verlinkte offizielle
  // Websites/Speisekarten, Stand 14.10.2026. Keine Beliebtheits-Rangliste.
  // Externe Fotos sind Entwurfsbilder; Nutzungsfreigabe vor Veröffentlichung klären.
  const restaurants = [
    {
      id: "nuno", name: "nunó", cuisine: "Mediterran & international", categories: ["lunch"],
      tip: "Der Mittagstipp ganz nah am Office.",
      description: "Im Textilmuseum im Textilviertel gibt es eine wechselnde Deli- und Wochenkarte. Der Tipp der Kolleg:innen für eine gemeinsame Mittagspause in der Nähe.",
      highlights: ["Deli-Auswahl nach Wochenkarte", "Warme Küche nach Saison", "Tagesdessert"],
      address: "Provinostraße 46, 86153 Augsburg",
      hours: "Di–Sa Mittagstisch 11:30–14:30 Uhr; montags Ruhetag.",
      note: "Für Montag, den 23.11., eine andere Mittagsoption einplanen. Die Wochenkarte wechselt; Gerichte für November stehen noch nicht fest.",
      website: "https://nuno-augsburg.de/", menu: "https://nuno-augsburg.de/wochenkarte/",
      photo: "https://nuno-augsburg.de/inhalt/uploads/2026/10/mittag.jpg",
      photoAlt: "Deli-Speisen auf der offiziellen Website des nunó", photoType: "Speisenfoto"
    },
    {
      id: "azsteakas", name: "Azsteakas", cuisine: "Steakhouse", categories: ["lunch", "dinner"],
      tip: "Für einen Abend rund um den Grill.",
      description: "Ein Steakhouse in der Ludwigstraße mit Steaks vom Lavasteingrill. Auf der Website findet ihr außerdem eine eigene Mittagskarte.",
      highlights: ["Rib-Eye-Steak", "Rumpsteak", "Filetsteak"],
      address: "Ludwigstraße 19, 86152 Augsburg",
      hours: "Küche täglich 11:30–21:00 Uhr, Fr und Sa bis 22:00 Uhr.",
      note: "Online-Reservierungen für denselben Abend sind laut Website nur bis 17:00 Uhr möglich. Größere Gruppen vorher abstimmen.",
      website: "https://www.azsteakas.de/", menu: "https://www.azsteakas.de/speisenkarte/von-der-weide/",
      photo: "https://image.jimcdn.com/app/cms/image/transf/none/path/sc0dc362b3033f28f/backgroundarea/ia2636ffece05cd57/version/1664220839/image.png",
      photoAlt: "Impression von der offiziellen Azsteakas-Website", photoType: "Website-Impression"
    },
    {
      id: "blockhouse", name: "BLOCK HOUSE", cuisine: "Steaks & Grill", categories: ["lunch", "dinner"],
      tip: "Steakhouse am Ulrichsplatz.",
      description: "Zentral am Ulrichsplatz gelegen. Neben Steaks gibt es auch Fischgerichte und fleischlose Optionen sowie einen Mittagstisch.",
      highlights: ["Steaks vom Lavasteingrill", "Ofenkartoffeln", "BLOCK HOUSE Brot"],
      address: "Ulrichsplatz 3, 86150 Augsburg",
      hours: "So–Do 12:00–22:00 Uhr, Fr–Sa 12:00–23:00 Uhr.",
      note: "Für ein gemeinsames Teamessen bitte einen Tisch beziehungsweise eine Gruppenanfrage direkt beim Restaurant abstimmen.",
      website: "https://www.block-house.de/restaurants/augsburg/ulrichsplatz/", menu: "https://www.block-house.de/speisekarte/",
      photo: "https://www.block-house.de/fileadmin/_processed_/1/d/csm_block-house-restaurant-augsburg_d90cb0d569.png",
      photoAlt: "BLOCK HOUSE Augsburg am Ulrichsplatz mit Terrasse", photoType: "Restaurantfoto"
    },
    {
      id: "joes", name: "Joe’s La Perla", cuisine: "Mexikanisch", categories: ["dinner"],
      tip: "Mexikanische Küche zum gemeinsamen Entdecken.",
      description: "Mexikanisches Restaurant in der Proviantbachstraße. Die verlinkte Speisekarte bietet unter anderem verschiedene Tacos und Fajitas.",
      highlights: ["Tacos mit verschiedenen Füllungen", "Fajitas", "Vegetarische Tacos"],
      address: "Proviantbachstraße 1 1/2, 86153 Augsburg",
      hours: "Mo–Do und So 17:00–23:00 Uhr, Fr–Sa 17:00–00:00 Uhr.",
      note: "Reservierungen sind laut Website per E-Mail möglich. Für das Team die Gruppengröße mit angeben.",
      website: "https://joeslaperla.de/", menu: "https://joeslaperla.de/wp-content/uploads/2026/09/LaPerla_Speisekarte_September26.pdf",
      photo: "https://joeslaperla.de/wp-content/uploads/2025/11/LaPerla_01.png",
      photoAlt: "Impression von der offiziellen Website von Joe’s La Perla", photoType: "Website-Impression"
    },
    {
      id: "n8", name: "N8Stallung", cuisine: "Mediterran & italienisch", categories: ["dinner"],
      tip: "Abendessen mit Industrial-Ambiente.",
      description: "Restaurant und Eventlocation in der Johannes-Haag-Straße. Die Speisekarte nennt unter anderem hausgemachte Pasta und saisonale Vorspeisen.",
      highlights: ["Hausgemachte Pasta", "Saisonale Vorspeisen", "Pinsa statt Pizza – laut aktuellem Hinweis"],
      address: "Johannes-Haag-Straße 36, 86153 Augsburg",
      hours: "Di–Sa 17:00–22:00 Uhr; sonntags und montags geschlossen.",
      note: "Für Montag keine reguläre Öffnung einplanen. Eventtermine und das aktuelle Speisenangebot vorab prüfen.",
      website: "https://www.n8stallung.de/", menu: "https://www.n8stallung.de/speisekarte/",
      photo: "https://image.jimcdn.com/app/cms/image/transf/dimension=2048x2048:format=jpg/path/s77ff853466cd1c6a/image/ibeb57b8c3af2e8da/version/1725006914/image.jpg",
      photoAlt: "Impression aus der offiziellen Bildergalerie der N8Stallung", photoType: "Galeriefoto"
    },
    {
      id: "kaelberhalle", name: "Kälberhalle", cuisine: "Bayerisch-schwäbisch", categories: ["lunch", "dinner"],
      tip: "Wirtshausküche in der Brauerei.",
      description: "Wirtshausbrauerei an der Berliner Allee mit bayerisch-schwäbischer Küche. Auf der Website werden klassische Gerichte und vor Ort gebraute Hasen-Biere vorgestellt.",
      highlights: ["Krustenbraten", "Zwiebelrostbraten mit Kässpatzen", "Kaiserschmarrn"],
      address: "Berliner Allee 36, 86153 Augsburg",
      hours: "Warme Küche täglich 11:00–22:00 Uhr.",
      note: "Für ein Teamessen bitte vorab reservieren und mögliche Ernährungswünsche direkt mit dem Lokal klären.",
      website: "https://kaelberhalle.de/", menu: "https://kaelberhalle.de/speisekarte/",
      photo: "https://kaelberhalle.de/wp-content/uploads/2024/12/DSC01226-Bearbeitet-Bearbeitet-1024x577.jpg",
      photoAlt: "Kälberhalle – Foto von der offiziellen Website", photoType: "Restaurantfoto"
    },
    {
      id: "bodega", name: "Bodega La Bomba", cuisine: "Spanische Tapas", categories: ["dinner"],
      tip: "„Sehr lecker!“ – Tipp der Augsburger Kolleg:innen.",
      description: "Spanische Tapas-Bar im Afrawald. Eine Auswahl kleiner Gerichte bietet sich zum gemeinsamen Probieren und Teilen an.",
      highlights: ["Patatas bravas", "Tortilla Española", "Pimientos de Padrón"],
      address: "Afrawald 2, 86150 Augsburg",
      hours: "Mi–Do 19:00–23:00 Uhr, Fr–Sa 19:00–01:00 Uhr.",
      note: "Für unsere Woche regulär erst ab Mittwoch einplanen. Gruppenplätze bitte vorher beim Lokal anfragen.",
      website: "https://bodega-labomba.de/", menu: "https://bodega-labomba.de/tapas/",
      photo: "https://bodega-labomba.de/wp-content/uploads/2023/11/la-bomba-001-1.jpg",
      photoAlt: "Impression der Bodega La Bomba von der offiziellen Website", photoType: "Restaurantfoto"
    },
    {
      id: "mille", name: "Mille Miglia", cuisine: "Italienisch & sizilianisch", categories: ["lunch", "dinner"],
      tip: "Der klassische Italiener aus der Kollegenliste.",
      description: "Ristorantino in der Maximilianstraße. Die Küche verbindet sizilianische Tradition mit saisonalen mediterranen Kreationen.",
      highlights: ["Sizilianische Küche", "Saisonale mediterrane Kreationen"],
      highlightNote: "Konkrete Gerichte findet ihr auf der aktuellen Mitnahmekarte beziehungsweise direkt im Restaurant.",
      address: "Maximilianstraße 55, 86150 Augsburg",
      hours: "Mo–Sa 11:30–14:30 und 17:30–24:00 Uhr; Küchenannahme bis 22:00 Uhr.",
      note: "Reservierungen ausschließlich telefonisch. Gruppenanfragen laut Website persönlich vor Ort; telefonische Terminabstimmung möglich.",
      website: "https://www.millemigliaaugsburg.de/", menu: "https://www.millemigliaaugsburg.de/Mitnahmekarte",
      photo: "https://www.millemigliaaugsburg.de/files/D07A0431795F891E1569585B.jpg",
      photoAlt: "Impression von der offiziellen Mille-Miglia-Website", photoType: "Website-Impression"
    },
    {
      id: "enchilada", name: "Enchilada", cuisine: "Mexikanisch & Tex-Mex", categories: ["dinner"],
      tip: "Tacos, Burritos und ein Drink danach.",
      description: "Mexican Kitchen & Bar in der Hallstraße. Die offizielle Standortseite nennt auch vegetarische und vegane Gerichte.",
      highlights: ["Tacos", "Burritos", "Fajitas"],
      address: "Hallstraße 4, 86150 Augsburg",
      hours: "So–Mi 17:00–23:00, Do bis 23:30, Fr bis 01:00, Sa bis 02:00 Uhr.",
      note: "Die auf der Website beworbenen Aktionen können sich bis November ändern. Für das Team vorab reservieren.",
      website: "https://www.enchilada.de/restaurants/augsburg/", menu: "https://www.enchilada.de/restaurants/augsburg/",
      photo: null, photoAlt: "", photoType: "Restaurantfoto folgt"
    },
    {
      id: "coco", name: "CôCô", cuisine: "Sushi & Asia Fusion", categories: ["lunch", "dinner"],
      tip: "„Der etwas andere Asiate“ – Tipp der Kolleg:innen.",
      description: "Gemeint ist der Augsburger Standort Sushi & Asia Fusion in der Kapuzinergasse. Der verlinkte Shop führt die Speisekarte dieses Standorts.",
      highlights: ["Special Rolls", "Sushi-Mix „Coco & U“", "Sushi-Mix „Vegan Lover“"],
      address: "Kapuzinergasse 24, 86150 Augsburg",
      hours: "Aktuelle Öffnungs- und Mittagszeiten bitte direkt beim Augsburger Standort prüfen.",
      note: "Die Website zeigt mehrere Städte. Bei Speisekarte und Reservierung immer Augsburg / Sushi & Asia Fusion auswählen.",
      website: "https://startpage.the-coco.de/", menu: "https://coco.lieferbude.de/shop/branches/select/sushiaugsburg/",
      photo: "https://startpage.the-coco.de/wp-content/uploads/2020/02/IMG-20200121-WA0034.jpg",
      photoAlt: "CôCô Augsburg – Standortbild von der offiziellen Website", photoType: "Restaurantfoto"
    },
    {
      id: "ratskeller", name: "Ratskeller", cuisine: "Deutsche Wirtshausküche", categories: ["lunch", "dinner"],
      tip: "Zentral am Rathausplatz.",
      description: "Traditionelle deutsche Küche im Ratskeller. Die offizielle Seite nennt bayerische Schmankerl, Wirtshausklassiker und Steaks vom Grill.",
      highlights: ["Bayerische Schmankerl", "Wirtshausklassiker", "Steaks vom Grill"],
      address: "Rathausplatz 2, 86150 Augsburg",
      hours: "So–Do 11:00–23:00 Uhr, Fr–Sa 11:00–00:00 Uhr.",
      note: "Für größere Gruppen und Ernährungswünsche bitte vorab Kontakt aufnehmen. Saisonale Angebote können wechseln.",
      website: "https://www.ratskeller-augsburg.de/", menu: "https://www.ratskeller-augsburg.de/speisekarte/",
      photo: "https://www.ratskeller-augsburg.de/media/w/1200/h/630/mode/cover/Slider/Standard/Slider1.jpg",
      photoAlt: "Ratskeller Augsburg – Impression der offiziellen Website", photoType: "Website-Impression"
    },
    {
      id: "golden", name: "Golden Glimmer", cuisine: "Cocktailbar", categories: ["bar"],
      tip: "„Wohnzimmer-Feeling“ – Tipp der Kolleg:innen.",
      description: "Der Bar-Tipp der Augsburger Kolleg:innen für einen gemütlichen Ausklang am Schmiedberg. Die aktuelle Getränkekarte findet ihr auf der Website.",
      highlights: ["Drinks aus der aktuellen Getränkekarte", "Gemütliches Wohnzimmer-Feeling laut Kolleg:innen"],
      address: "Schmiedberg 3, 86152 Augsburg",
      hours: "Do 20:00–00:00 Uhr, Fr–Sa 19:00–02:00 Uhr.",
      note: "Keine Reservierungen laut Website. Für unsere Woche kommen regulär Donnerstag und Freitag infrage; als größere Gruppe vorher abstimmen.",
      website: "https://www.goldenglimmer.de/", menu: "https://www.goldenglimmer.de/",
      photo: null, photoAlt: "", photoType: "Freigegebenes Foto folgt"
    },
    {
      id: "3m", name: "Bar 3M", cuisine: "Cocktails & Barfood", categories: ["bar"],
      tip: "„Premium!“ – Tipp der Augsburger Kolleg:innen.",
      description: "Bar in der Maximilianstraße mit Signature Drinks und internationalem Barfood. Ein Vorschlag für den Ausklang nach dem gemeinsamen Abendessen.",
      highlights: ["Lemon Leaf Negroni", "Classic Clubsandwich", "Stroganoff Burger"],
      address: "Maximilianstraße 40, 86150 Augsburg",
      hours: "Mo–Fr 14:00–01:00 Uhr, Sa 10:00–01:00, So und Feiertage 10:00–23:00 Uhr.",
      note: "Im regulären Barbetrieb keine Reservierungen. Veranstaltungsanfragen sind über den Kontakt auf der Website möglich.",
      website: "https://www.bar3m.de/", menu: "https://www.bar3m.de/food-drinks",
      photo: "https://www.bar3m.de/assets/DSC09925_1e101b5a12401e5122682f212c.jpg",
      photoAlt: "Bar 3M – Impression von der offiziellen Website", photoType: "Website-Impression"
    }
  ];

  const grid = document.querySelector("#foodGrid");
  const panel = document.querySelector("#foodDetails");
  const count = document.querySelector("#foodCount");
  const filters = [...document.querySelectorAll("[data-food-filter]")];
  if (!grid || !panel || !count) return;

  const labels = { all: "Alle", lunch: "Mittagessen", dinner: "Abendessen", bar: "Bars" };
  let activeFilter = "all";
  let activeId = null;
  let visible = restaurants;
  let cards = [];
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function externalLink(text, href, className = "button hotel-site-link") {
    const link = element("a", className, text);
    link.href = href;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    return link;
  }

  function placePanel() {
    if (panel.hidden || !activeId) return;
    const index = visible.findIndex((restaurant) => restaurant.id === activeId);
    if (index < 0 || !cards.length) return;
    const columns = getComputedStyle(grid).gridTemplateColumns.split(" ").filter(Boolean).length;
    const rowEnd = Math.min(Math.floor(index / columns) * columns + columns - 1, cards.length - 1);
    cards[rowEnd].after(panel);
  }

  function setExpanded(card, expanded) {
    card.setAttribute("aria-expanded", String(expanded));
    card.querySelector(".food-action-label").textContent = expanded ? "Details schließen" : "Mehr erfahren";
  }

  function closeDetails(restoreFocus = false) {
    const previous = cards.find((card) => card.dataset.restaurant === activeId);
    activeId = null;
    panel.hidden = true;
    panel.replaceChildren();
    cards.forEach((card) => setExpanded(card, false));
    if (restoreFocus && previous) {
      previous.focus({ preventScroll: true });
      previous.scrollIntoView({ block: "nearest", behavior: "instant" });
    }
  }

  function showDetails(restaurant) {
    if (activeId === restaurant.id) {
      closeDetails(true);
      return;
    }
    activeId = restaurant.id;
    cards.forEach((card) => setExpanded(card, card.dataset.restaurant === activeId));

    const visual = element("figure", "food-visual");
    const icon = element("span", "food-photo-icon", restaurant.categories.includes("bar") ? "✦" : "↗");
    icon.setAttribute("aria-hidden", "true");
    const photoStatus = element("span", "food-photo-status", restaurant.photo ? "Foto wird geladen …" : restaurant.photoType);
    const credit = element("figcaption", "food-photo-credit");
    credit.append(externalLink("Bilder & Quelle: offizielle Website ↗", restaurant.website, ""));
    visual.append(icon, photoStatus, credit);

    if (restaurant.photo) {
      const image = element("img", "");
      image.alt = restaurant.photoAlt;
      image.decoding = "async";
      image.referrerPolicy = "no-referrer";
      image.addEventListener("load", () => { icon.hidden = true; photoStatus.hidden = true; }, { once: true });
      image.addEventListener("error", () => { image.remove(); photoStatus.textContent = "Foto derzeit nicht verfügbar – Originalbilder auf der Website ansehen."; }, { once: true });
      visual.prepend(image);
      image.src = restaurant.photo;
    }

    const copy = element("div", "food-detail-copy");
    const top = element("div", "food-detail-top");
    const close = element("button", "food-close", "Schließen ×");
    close.type = "button";
    close.addEventListener("click", () => closeDetails(true));
    top.append(element("p", "section-number", "Tipp der Augsburger Kolleg:innen"), close);
    const heading = element("h3", "", restaurant.name);
    heading.id = "foodDetailTitle";
    copy.append(top, heading, element("p", "food-detail-description", restaurant.description));
    copy.append(element("h4", "", restaurant.categories.includes("bar") ? "Drinks & Highlights" : "Highlights der Karte"));
    const highlights = element("ul", "food-highlights");
    restaurant.highlights.forEach((highlight) => highlights.append(element("li", "", highlight)));
    copy.append(highlights);
    if (restaurant.highlightNote) copy.append(element("p", "food-note", restaurant.highlightNote));

    const practical = element("dl", "food-practical");
    [["Adresse", restaurant.address], ["Öffnungszeiten", restaurant.hours], ["Für die Planung", restaurant.note]].forEach(([label, value]) => {
      const row = element("div", "");
      row.append(element("dt", "", label), element("dd", "", value));
      practical.append(row);
    });
    copy.append(practical);

    const route = new URL("https://www.google.com/maps/dir/");
    route.search = new URLSearchParams({ api: "1", origin: "adesso SE, Provinostraße 52, 86153 Augsburg", destination: `${restaurant.name}, ${restaurant.address}`, travelmode: "walking" }).toString();
    const links = element("div", "food-links");
    links.append(
      externalLink("Route ab Geschäftsstelle", route.href, "button button-primary"),
      externalLink(restaurant.categories.includes("bar") ? "Drinks & Karte" : "Speisekarte", restaurant.menu),
      externalLink("Website", restaurant.website)
    );
    copy.append(links);
    panel.replaceChildren(visual, copy);
    panel.hidden = false;
    placePanel();
    panel.focus({ preventScroll: true });
    panel.scrollIntoView({ block: "start", behavior: reducedMotion.matches ? "instant" : "smooth" });
  }

  function renderCards() {
    closeDetails();
    visible = restaurants.filter((restaurant) => activeFilter === "all" || restaurant.categories.includes(activeFilter));
    cards.forEach((card) => card.remove());
    cards = visible.map((restaurant) => {
      const card = element("button", "food-card");
      card.type = "button";
      card.id = `food-${restaurant.id}`;
      card.dataset.restaurant = restaurant.id;
      card.setAttribute("aria-expanded", "false");
      card.setAttribute("aria-controls", "foodDetails");
      const tags = element("span", "food-card-tags");
      tags.append(element("span", "food-tag", restaurant.cuisine));
      if (restaurant.categories.includes("bar")) tags.append(element("span", "food-tag food-tag-bar", "Für danach"));
      if (restaurant.id === "nuno") tags.append(element("span", "food-tag", "Mittagstipp"));
      const action = element("span", "food-card-action");
      const arrow = element("span", "food-card-arrow", "→");
      arrow.setAttribute("aria-hidden", "true");
      action.append(element("span", "food-action-label", "Mehr erfahren"), arrow);
      card.append(tags, element("strong", "food-card-name", restaurant.name), element("span", "food-card-tip", restaurant.tip), action);
      card.addEventListener("click", () => showDetails(restaurant));
      grid.append(card);
      return card;
    });
    const bars = restaurants.filter((restaurant) => restaurant.categories.includes("bar")).length;
    count.textContent = activeFilter === "all" ? `${restaurants.length} Tipps · ${restaurants.length - bars} Restaurants & ${bars} Bars` : `${visible.length} Tipps · ${labels[activeFilter]}`;
    filters.forEach((filter) => filter.setAttribute("aria-pressed", String(filter.dataset.foodFilter === activeFilter)));
  }

  filters.forEach((filter) => filter.addEventListener("click", () => {
    activeFilter = filter.dataset.foodFilter;
    renderCards();
  }));
  panel.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      closeDetails(true);
    }
  });
  window.addEventListener("resize", placePanel);
  renderCards();
})();
