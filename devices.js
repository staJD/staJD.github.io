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
    cable: "USB-C cable, connected to the <strong>top</strong> USB-C port (labeled PC in the photo below) — not the bottom port, which is for the Kemper connection",
    cableKo: "USB-C 케이블 (아래 사진에서 PC라고 표시된 <strong>위쪽</strong> 포트에 연결 — 아래쪽 포트는 캠퍼 연결용입니다)",
    needsBootMode: true,
    images: {
      buttons: "images/guition-jc4880p4/buttons.jpg",
      ports: "images/guition-jc4880p4/ports.jpg"
    },
    notes: [],
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
