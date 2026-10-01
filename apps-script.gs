// Pega este código en tu Google Sheet: Extensiones › Apps Script.
// Luego: Implementar › Nueva implementación › Aplicación web
// (Ejecutar como: tú · Quién tiene acceso: Cualquier usuario).
const SHEET_NAME = 'Registros';

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sh = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
    if (sh.getLastRow() === 0) {
      sh.appendRow(['Fecha', 'Nombre', 'WhatsApp', 'Correo', 'Autorización datos', 'Origen']);
    }
    const p = e.parameter;
    sh.appendRow([
      new Date(),
      p.nombre || '',
      "'" + (p.whatsapp || ''),
      p.correo || '',
      p.consent === 'true' ? 'Sí' : 'No',
      p.origen || ''
    ]);
    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
