// api/flip.js
module.exports = (req, res) => {
  const q = (req.query.q ?? "").toString().trim();
  const text = q
    ? "\t(ノ ゜Д゜)ノ ︵ " + flipText(q)
    : "Usage: !fliptext <text>";
  const out = text.length > 350 ? text.slice(0, 350) : text;
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.status(200).send(out);
};

function flipText(s) {
  const from =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789&._!?,;:()[]{}<>\"'`^\\/";
  const to =
    "ɐqɔpǝɟɓɥıɾʞןɯuodbɹsʇnʌʍxʎz∀𐐒ƆᗡƎℲ⅁HIſʞ˥WNOԀὉᴚS┴∩ΛMXʎZ0ƖᄅƐㄣϛ9ㄥ86⅋˙¡¿'؛ː)(][}{><„‚,ʇ/^\\";
  const FROM = [...from];
  const TO = [...to];
  const map = Object.fromEntries(FROM.map((c, i) => [c, TO[i]]));
  return [...s]
    .reverse()
    .map((ch) => map[ch] ?? map[ch.toLowerCase()] ?? ch)
    .join("");
}
