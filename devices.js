// Registry of flashable devices. Add a new object here to support another
// board - the page (index.html) reads this list to build the picker,
// instructions, and install button automatically. Nothing else needs to
// change to add a device.
window.STAJPILOT_DEVICES = [
  {
    id: "guition-jc4880p4",
    name: "Guition JC4880P4",
    subtitle: "4.3\" ESP32-P4 touch display",
    version: "v0.95",
    manifest: "manifests/guition-jc4880p4.json",
    cable: "USB-C cable, connected to the board's single USB port",
    notes: [],
    available: true
  },
  {
    id: "ws-p4-5",
    name: "Waveshare WS-P4-5",
    subtitle: "5\" ESP32-P4 touch display",
    version: "coming soon",
    manifest: null,
    cable: "USB-C cable, connected to the board's UART/flash port",
    notes: [],
    available: false
  }
];
