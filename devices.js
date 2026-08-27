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
    cable: "USB-C cable",
    cableKo: "USB-C 케이블",
    needsBootMode: true,
    images: {
      buttons: "images/guition-jc4880p4/buttons.jpg",
      ports: "images/guition-jc4880p4/ports.jpg"
    },
    notes: [],
    available: true
  },
  {
    id: "guition-jc4880p4-beta",
    name: "Guition JC4880P4 (BETA)",
    subtitle: "4.3\" ESP32-P4 touch display — USB Host mode, less-tested",
    version: "v0.96.00-beta",
    manifest: "manifests/guition-jc4880p4-beta.json",
    cable: "USB-C cable",
    cableKo: "USB-C 케이블",
    needsBootMode: true,
    images: {
      buttons: "images/guition-jc4880p4/buttons.jpg",
      ports: "images/guition-jc4880p4/ports.jpg"
    },
    notes: [
      "Beta build - adds USB Host mode (new territory) alongside the existing Device mode. If you don't need USB Host mode, the stable release above is the safer pick."
    ],
    available: true
  },
  {
    id: "waveshare-s3-4.3",
    name: "Waveshare ESP32-S3 4.3",
    subtitle: "4.3\" ESP32-S3 touch display",
    version: "coming soon",
    manifest: null,
    cable: "USB-C cable",
    cableKo: "USB-C 케이블",
    notes: [],
    available: false
  },
  {
    id: "waveshare-s3-2.0",
    name: "Waveshare ESP32-S3 2.0",
    subtitle: "2\" ESP32-S3 touch display",
    version: "coming soon",
    manifest: null,
    cable: "USB-C cable",
    cableKo: "USB-C 케이블",
    notes: [],
    available: false
  },
  {
    id: "guition-jc3248w535c",
    name: "Guition JC3248W535C",
    subtitle: "3.5\" ESP32-S3 touch display",
    version: "coming soon",
    manifest: null,
    cable: "USB-C cable",
    cableKo: "USB-C 케이블",
    notes: [],
    available: false
  }
];
