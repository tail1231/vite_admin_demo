import figlet from "figlet";
import standard from "figlet/importable-fonts/Isometric1.js";

export function initFiglet(items, index) {
  figlet.parseFont("Isometric1", standard);
  figlet.text(
    "CMY NB",
    {
      font: "Isometric1",
    },
    function (err, data) {
      console.log(data);
    }
  );
}