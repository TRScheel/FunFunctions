export default function handler(req, res) {
  const q = (req.query.q ?? "").toString().trim();
  const text = q
    ? "\t(ノ ゜Д゜)ノ ︵ " + flipText(q)
    : "Usage: !fliptext <text>";
  const out = text.length > 350 ? text.slice(0, 350) : text; // Nightbot-safe length
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.status(200).send(out);
}

function flipText(s) {
  const from =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789&._!?,;:()[]{}<>\"'`^\\/";
  const to =
    "ɐqɔpǝɟɓɥıɾʞןɯuodbɹsʇnʌʍxʎz∀𐐒ƆᗡƎℲ⅁HIſʞ˥WNOԀὉᴚS┴∩ΛMXʎZ0ƖᄅƐㄣϛ9ㄥ86⅋˙¡¿'؛ː)(][}{><„‚,ʇ/^\\";
  const map = Object.fromEntries([...from].map((c, i) => [c, to[i] || c]));
  return [...s]
    .reverse()
    .map((ch) => map[ch] ?? map[ch.toLowerCase()] ?? ch)
    .join("");
}
